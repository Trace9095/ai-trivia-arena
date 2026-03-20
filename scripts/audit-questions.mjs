/**
 * AI Trivia Arena — Question Accuracy Audit
 *
 * Uses Claude Sonnet to fact-check all 3,817 questions in question_pool.
 * Checks: wrong correct answer, wrong answers that are actually correct,
 * ambiguity, offensive content, outdated facts, duplicates.
 *
 * Usage:
 *   node --env-file=.env.local scripts/audit-questions.mjs
 *
 * Options (env vars):
 *   AUDIT_CATEGORY=colorado   audit only one category
 *   AUDIT_DRY_RUN=1           report only, don't modify DB
 *   AUDIT_BATCH_SIZE=20       questions per Claude call (default 20)
 */

import fs from 'fs'
import path from 'path'
import { neon } from '@neondatabase/serverless'
import Anthropic from '@anthropic-ai/sdk'

// ── Parse .env.local ─────────────────────────────────────────────────────────
function parseEnvFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8')
  const result = {}
  for (const line of content.split('\n')) {
    const trimmed = line.trim()
    if (!trimmed || trimmed.startsWith('#')) continue
    const eqIndex = trimmed.indexOf('=')
    if (eqIndex === -1) continue
    const key = trimmed.slice(0, eqIndex).trim()
    let value = trimmed.slice(eqIndex + 1).trim()
    if ((value.startsWith('"') && value.endsWith('"')) ||
        (value.startsWith("'") && value.endsWith("'"))) {
      value = value.slice(1, -1)
    }
    result[key] = value
  }
  return result
}

const envPath = path.join(process.cwd(), '.env.local')
const env = parseEnvFile(envPath)

const DATABASE_URL = env.DATABASE_URL_UNPOOLED || env.DATABASE_URL
const ANTHROPIC_API_KEY = env.ANTHROPIC_API_KEY
const DRY_RUN = process.env.AUDIT_DRY_RUN === '1'
const FILTER_CATEGORY = process.env.AUDIT_CATEGORY || null
const BATCH_SIZE = parseInt(process.env.AUDIT_BATCH_SIZE || '20', 10)

if (!DATABASE_URL) { console.error('❌ DATABASE_URL not found in .env.local'); process.exit(1) }
if (!ANTHROPIC_API_KEY) { console.error('❌ ANTHROPIC_API_KEY not found in .env.local'); process.exit(1) }

const sql = neon(DATABASE_URL)
const claude = new Anthropic({ apiKey: ANTHROPIC_API_KEY })

// ── Audit state ──────────────────────────────────────────────────────────────
const report = {
  totalChecked: 0,
  totalDeleted: 0,
  totalFixed: 0,
  totalDuplicatesDeleted: 0,
  byCategory: {},
  issues: [], // { id, category, difficulty, question, issue, action, details }
}

// ── Helper: sleep ────────────────────────────────────────────────────────────
const sleep = (ms) => new Promise(r => setTimeout(r, ms))

// ── Step 1: Duplicate detection via SQL ──────────────────────────────────────
async function removeDuplicates() {
  console.log('\n🔍 Step 1: Detecting duplicate questions...')

  // Find exact duplicates (same question_text, keep lowest created_at)
  const dupes = await sql`
    SELECT id, category, difficulty, question_text
    FROM question_pool
    WHERE id NOT IN (
      SELECT DISTINCT ON (question_text) id
      FROM question_pool
      ORDER BY question_text, created_at ASC
    )
    ORDER BY category, difficulty
  `

  if (dupes.length === 0) {
    console.log('  ✅ No exact duplicate questions found')
    return
  }

  console.log(`  ⚠️  Found ${dupes.length} exact duplicate questions`)
  for (const d of dupes) {
    console.log(`    [${d.category}/${d.difficulty}] "${d.question_text.substring(0, 80)}..."`)
    report.issues.push({
      id: d.id,
      category: d.category,
      difficulty: d.difficulty,
      question: d.question_text,
      issue: 'Exact duplicate — identical question_text already exists',
      action: DRY_RUN ? 'would_delete' : 'deleted',
      details: 'Removed duplicate; earlier version retained',
    })
  }

  if (!DRY_RUN) {
    const dupeIds = dupes.map(d => d.id)
    await sql`DELETE FROM question_pool WHERE id = ANY(${dupeIds})`
    report.totalDuplicatesDeleted = dupes.length
    console.log(`  🗑️  Deleted ${dupes.length} duplicate questions`)
  } else {
    console.log(`  [DRY RUN] Would delete ${dupes.length} duplicates`)
  }
}

// ── Step 2: Claude Sonnet fact-check ────────────────────────────────────────
async function auditBatch(questions) {
  const numbered = questions.map((q, i) => ({
    n: i + 1,
    id: q.id,
    category: q.category,
    difficulty: q.difficulty,
    question: q.question_text,
    correct: q.correct_answer,
    wrong: q.wrong_answers,
    explanation: q.explanation || '',
  }))

  const prompt = `You are a professional trivia question auditor. Your job is to fact-check the following trivia questions and identify any problems.

For each question, check:
1. **Correct answer accuracy** — Is the marked "correct_answer" actually correct? This is the #1 priority.
2. **Wrong answer contamination** — Is any of the "wrong_answers" also actually correct? This makes the question unfair.
3. **Ambiguity** — Is the question worded so that multiple answers could reasonably be considered correct?
4. **Offensive content** — Is the question or any answer offensive, insensitive, or inappropriate?
5. **Outdated facts** — Does the question rely on a fact that has changed (e.g., sports records, political leaders, living/dead status)?
6. **Factual basis** — Is the question grounded in real, verifiable facts? Reject invented or unverifiable "facts."

Be especially rigorous about:
- Science: biology, chemistry, physics — these must be precise
- History: dates, names, event outcomes — verify carefully
- Geography: capitals, countries, borders — these change
- Sports: records, championships — these change over time
- Colorado: anything about Canon City, Royal Gorge, Denver, Colorado history — must be 100% accurate
- Pop culture: Oscars, Grammys, dates — verify carefully

IMPORTANT: Only flag genuine problems. Do NOT flag things that are merely imprecise phrasing if the answer is clearly correct. Be strict about facts, lenient about style.

Here are the questions to audit:

${numbered.map(q => `
---
Question #${q.n} [ID: ${q.id}]
Category: ${q.category} | Difficulty: ${q.difficulty}
Question: ${q.question}
Correct Answer: ${q.correct}
Wrong Answers: ${q.wrong.join(' | ')}
Explanation: ${q.explanation}
`).join('\n')}

Respond with a JSON array. Each element must have:
- "id": the question UUID (copy exactly)
- "status": one of "ok", "wrong_answer", "wrong_answer_contamination", "ambiguous", "offensive", "outdated", "factually_unsupported"
- "action": one of "keep", "fix", "delete"
- "issue": null if ok, otherwise a brief description of the problem (1-2 sentences max)
- "corrected_answer": null if ok, or the correct answer if the marked answer is wrong
- "corrected_wrong_answers": null if ok, or a new array of 3 wrong answers if contamination found
- "corrected_explanation": null if ok, or corrected explanation text

Respond ONLY with the JSON array, no other text. Example:
[{"id":"uuid","status":"ok","action":"keep","issue":null,"corrected_answer":null,"corrected_wrong_answers":null,"corrected_explanation":null}]`

  let retries = 0
  while (retries < 3) {
    try {
      const response = await claude.messages.create({
        model: 'claude-sonnet-4-6',
        max_tokens: 4096,
        messages: [{ role: 'user', content: prompt }],
      })

      const text = response.content[0].text.trim()
      // Strip markdown code block if present
      const jsonText = text.replace(/^```(?:json)?\n?/, '').replace(/\n?```$/, '')
      const results = JSON.parse(jsonText)
      return results
    } catch (err) {
      retries++
      console.error(`    ⚠️  Batch failed (attempt ${retries}/3): ${err.message}`)
      if (retries < 3) await sleep(2000 * retries)
    }
  }
  console.error('    ❌ Batch failed after 3 attempts, skipping')
  return []
}

async function applyFix(q, result) {
  if (result.action === 'delete') {
    if (!DRY_RUN) {
      await sql`DELETE FROM question_pool WHERE id = ${q.id}`
    }
    report.totalDeleted++
    return
  }

  if (result.action === 'fix') {
    const updates = {}
    if (result.corrected_answer) updates.correct_answer = result.corrected_answer
    if (result.corrected_wrong_answers) updates.wrong_answers = JSON.stringify(result.corrected_wrong_answers)
    if (result.corrected_explanation) updates.explanation = result.corrected_explanation

    if (!DRY_RUN && Object.keys(updates).length > 0) {
      // Build update dynamically
      if (updates.correct_answer && updates.wrong_answers && updates.explanation) {
        await sql`UPDATE question_pool SET correct_answer = ${updates.correct_answer}, wrong_answers = ${updates.wrong_answers}::jsonb, explanation = ${updates.explanation} WHERE id = ${q.id}`
      } else if (updates.correct_answer && updates.wrong_answers) {
        await sql`UPDATE question_pool SET correct_answer = ${updates.correct_answer}, wrong_answers = ${updates.wrong_answers}::jsonb WHERE id = ${q.id}`
      } else if (updates.correct_answer && updates.explanation) {
        await sql`UPDATE question_pool SET correct_answer = ${updates.correct_answer}, explanation = ${updates.explanation} WHERE id = ${q.id}`
      } else if (updates.wrong_answers && updates.explanation) {
        await sql`UPDATE question_pool SET wrong_answers = ${updates.wrong_answers}::jsonb, explanation = ${updates.explanation} WHERE id = ${q.id}`
      } else if (updates.correct_answer) {
        await sql`UPDATE question_pool SET correct_answer = ${updates.correct_answer} WHERE id = ${q.id}`
      } else if (updates.wrong_answers) {
        await sql`UPDATE question_pool SET wrong_answers = ${updates.wrong_answers}::jsonb WHERE id = ${q.id}`
      } else if (updates.explanation) {
        await sql`UPDATE question_pool SET explanation = ${updates.explanation} WHERE id = ${q.id}`
      }
    }
    report.totalFixed++
  }
}

async function auditCategory(category, difficulty) {
  const questions = await sql`
    SELECT id, category, difficulty, question_text, correct_answer, wrong_answers, explanation
    FROM question_pool
    WHERE category = ${category} AND difficulty = ${difficulty}
    ORDER BY created_at ASC
  `

  if (questions.length === 0) return

  console.log(`\n  📋 ${category}/${difficulty}: ${questions.length} questions`)

  if (!report.byCategory[category]) {
    report.byCategory[category] = { checked: 0, issues: 0, deleted: 0, fixed: 0 }
  }

  // Process in batches
  for (let i = 0; i < questions.length; i += BATCH_SIZE) {
    const batch = questions.slice(i, i + BATCH_SIZE)
    const batchNum = Math.floor(i / BATCH_SIZE) + 1
    const totalBatches = Math.ceil(questions.length / BATCH_SIZE)
    process.stdout.write(`    Batch ${batchNum}/${totalBatches} (${batch.length} questions)... `)

    const results = await auditBatch(batch)

    let batchIssues = 0
    for (const result of results) {
      const q = batch.find(b => b.id === result.id)
      if (!q) continue

      report.totalChecked++
      report.byCategory[category].checked++

      if (result.status !== 'ok') {
        batchIssues++
        report.byCategory[category].issues++

        const issueEntry = {
          id: q.id,
          category: q.category,
          difficulty: q.difficulty,
          question: q.question_text,
          correct_answer: q.correct_answer,
          wrong_answers: q.wrong_answers,
          status: result.status,
          issue: result.issue,
          action: DRY_RUN ? `would_${result.action}` : result.action,
          corrected_answer: result.corrected_answer,
          corrected_wrong_answers: result.corrected_wrong_answers,
        }
        report.issues.push(issueEntry)

        if (result.action === 'delete') report.byCategory[category].deleted++
        if (result.action === 'fix') report.byCategory[category].fixed++

        await applyFix(q, result)
      }
    }

    const statusIcon = batchIssues > 0 ? `⚠️  ${batchIssues} issues` : '✅ clean'
    console.log(statusIcon)

    // Rate limit: small pause between batches
    if (i + BATCH_SIZE < questions.length) await sleep(500)
  }
}

// ── Main ─────────────────────────────────────────────────────────────────────
async function main() {
  console.log('═══════════════════════════════════════════════════════')
  console.log('  AI Trivia Arena — Question Accuracy Audit')
  console.log(`  Model: claude-sonnet-4-6 | Batch: ${BATCH_SIZE}`)
  console.log(`  Mode: ${DRY_RUN ? 'DRY RUN (no DB changes)' : 'LIVE (will fix/delete)'}`)
  if (FILTER_CATEGORY) console.log(`  Filter: category = ${FILTER_CATEGORY}`)
  console.log('═══════════════════════════════════════════════════════')

  const startTime = Date.now()

  // Step 1: Duplicates
  await removeDuplicates()

  // Step 2: Fact-check by category × difficulty
  const CATEGORIES = FILTER_CATEGORY
    ? [FILTER_CATEGORY]
    : ['colorado', 'science', 'history', 'geography', 'sports', 'pop_culture', 'music', 'movies_tv', 'technology', 'food_drink', 'general']
  const DIFFICULTIES = ['easy', 'medium', 'hard']

  console.log('\n🤖 Step 2: Claude Sonnet fact-checking...')

  for (const cat of CATEGORIES) {
    console.log(`\n📂 Category: ${cat.toUpperCase()}`)
    for (const diff of DIFFICULTIES) {
      await auditCategory(cat, diff)
    }
  }

  // ── Generate report ────────────────────────────────────────────────────────
  const elapsed = ((Date.now() - startTime) / 1000).toFixed(1)

  console.log('\n\n═══════════════════════════════════════════════════════')
  console.log('  AUDIT COMPLETE')
  console.log('═══════════════════════════════════════════════════════')
  console.log(`  Questions checked:    ${report.totalChecked}`)
  console.log(`  Duplicates deleted:   ${report.totalDuplicatesDeleted}`)
  console.log(`  Issues found:         ${report.issues.filter(i => !i.issue?.includes('duplicate') && !i.issue?.includes('Exact duplicate')).length}`)
  console.log(`  Questions fixed:      ${report.totalFixed}`)
  console.log(`  Questions deleted:    ${report.totalDeleted}`)
  console.log(`  Elapsed:              ${elapsed}s`)
  console.log('')
  console.log('  Issues by category:')
  for (const [cat, stats] of Object.entries(report.byCategory)) {
    if (stats.issues > 0) {
      console.log(`    ${cat.padEnd(15)} ${stats.issues} issues (${stats.fixed} fixed, ${stats.deleted} deleted)`)
    }
  }

  // Write detailed report to file
  const reportPath = path.join(process.cwd(), '_notes', 'AUDIT_REPORT.md')
  const reportDate = new Date().toISOString().split('T')[0]

  const issuesByCategory = {}
  for (const issue of report.issues) {
    if (!issuesByCategory[issue.category]) issuesByCategory[issue.category] = []
    issuesByCategory[issue.category].push(issue)
  }

  let md = `# AI Trivia Arena — Question Audit Report\n`
  md += `**Date:** ${reportDate}  \n`
  md += `**Model:** claude-sonnet-4-6  \n`
  md += `**Mode:** ${DRY_RUN ? 'DRY RUN' : 'LIVE'}  \n`
  md += `\n`
  md += `## Summary\n\n`
  md += `| Metric | Count |\n`
  md += `|--------|-------|\n`
  md += `| Questions checked | ${report.totalChecked} |\n`
  md += `| Exact duplicates removed | ${report.totalDuplicatesDeleted} |\n`
  md += `| Factual issues found | ${report.issues.filter(i => !i.issue?.includes('Exact duplicate')).length} |\n`
  md += `| Questions fixed (answer corrected) | ${report.totalFixed} |\n`
  md += `| Questions deleted (unfixable) | ${report.totalDeleted} |\n`
  md += `\n`
  md += `## Category Breakdown\n\n`
  md += `| Category | Checked | Issues | Fixed | Deleted |\n`
  md += `|----------|---------|--------|-------|---------|\n`
  for (const [cat, stats] of Object.entries(report.byCategory)) {
    md += `| ${cat} | ${stats.checked} | ${stats.issues} | ${stats.fixed} | ${stats.deleted} |\n`
  }
  md += `\n`

  if (report.issues.length > 0) {
    md += `## All Issues Found\n\n`
    for (const [cat, issues] of Object.entries(issuesByCategory)) {
      md += `### ${cat.toUpperCase()} (${issues.length} issues)\n\n`
      for (const issue of issues) {
        md += `**[${issue.difficulty?.toUpperCase() ?? 'DUPE'}]** ${issue.question}\n`
        if (issue.correct_answer) md += `- **Marked correct:** ${issue.correct_answer}\n`
        if (issue.corrected_answer) md += `- **Should be:** ${issue.corrected_answer}\n`
        if (issue.wrong_answers) md += `- **Wrong options:** ${Array.isArray(issue.wrong_answers) ? issue.wrong_answers.join(' | ') : issue.wrong_answers}\n`
        if (issue.corrected_wrong_answers) md += `- **Fixed wrong options:** ${issue.corrected_wrong_answers.join(' | ')}\n`
        md += `- **Problem:** ${issue.issue}\n`
        md += `- **Action:** ${issue.action}\n`
        md += `\n`
      }
    }
  }

  fs.writeFileSync(reportPath, md)
  console.log(`\n📄 Full report written to: _notes/AUDIT_REPORT.md`)

  return report
}

main().catch(err => {
  console.error('Fatal error:', err)
  process.exit(1)
})
