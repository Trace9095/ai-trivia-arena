/**
 * AI Trivia Arena — Question Pool Seeder
 * Run: npx tsx seed-questions.ts
 *
 * Generates 1,100 questions (100 per category × 11 categories)
 * across easy/medium/hard difficulties using Claude Haiku.
 * Estimated cost: ~$2 in API tokens.
 */

import fs from 'fs'
import path from 'path'
import { neon } from '@neondatabase/serverless'
import Anthropic from '@anthropic-ai/sdk'

// ── Parse .env.local ────────────────────────────────────────────────────────
function parseEnvFile(filePath: string): Record<string, string> {
  const content = fs.readFileSync(filePath, 'utf-8')
  const result: Record<string, string> = {}
  for (const line of content.split('\n')) {
    const trimmed = line.trim()
    if (!trimmed || trimmed.startsWith('#')) continue
    const eqIndex = trimmed.indexOf('=')
    if (eqIndex === -1) continue
    const key = trimmed.slice(0, eqIndex).trim()
    let value = trimmed.slice(eqIndex + 1).trim()
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1)
    }
    result[key] = value
  }
  return result
}

const envPath = path.join(process.cwd(), '.env.local')
const env = parseEnvFile(envPath)

const DATABASE_URL = env.DATABASE_URL
const ANTHROPIC_API_KEY = env.ANTHROPIC_API_KEY

if (!DATABASE_URL) {
  console.error('❌ DATABASE_URL not found in .env.local')
  process.exit(1)
}
if (!ANTHROPIC_API_KEY) {
  console.error('❌ ANTHROPIC_API_KEY not found in .env.local')
  process.exit(1)
}

const sql = neon(DATABASE_URL)
const claude = new Anthropic({ apiKey: ANTHROPIC_API_KEY })

// ── Categories (must match app's CATEGORIES constant) ───────────────────────
const CATEGORIES = [
  {
    key: 'general',
    desc: 'General Knowledge — a wide mix of topics including arts, science, history, and everyday facts',
  },
  {
    key: 'science',
    desc: 'Science & Nature — biology, chemistry, physics, astronomy, geology, and natural world',
  },
  {
    key: 'history',
    desc: 'World History — major events, civilizations, wars, leaders, and turning points in human history',
  },
  {
    key: 'geography',
    desc: 'Geography — countries, capitals, landmarks, physical features, rivers, mountains, and world regions',
  },
  {
    key: 'pop_culture',
    desc: 'Pop Culture — celebrities, viral moments, social media trends, awards shows, and internet culture (2000s-2020s)',
  },
  {
    key: 'sports',
    desc: 'Sports — athletes, championships, records, rules, teams, and major sporting events across all major sports',
  },
  {
    key: 'food_drink',
    desc: 'Food & Drink — cuisine, cooking techniques, ingredients, famous dishes, beverages, and culinary history',
  },
  {
    key: 'technology',
    desc: 'Technology — computing history, inventions, software, hardware, internet, AI, and tech companies',
  },
  {
    key: 'movies_tv',
    desc: 'Movies & TV — film history, directors, actors, Oscar winners, iconic TV shows, plot details, and quotes',
  },
  {
    key: 'music',
    desc: 'Music — artists, albums, chart-toppers, music history, genres, instruments, and Grammy winners',
  },
  {
    key: 'colorado',
    desc: 'Colorado & the Royal Gorge Region — Canon City, Royal Gorge Bridge & Park, Colorado Springs, Denver, Pueblo, state history, wildlife, geology, skiing, and local culture',
  },
]

const DIFFICULTY_GUIDANCE: Record<string, string> = {
  easy: 'Easy questions require genuine thought but are answerable by most people — think "what year did the iPhone first launch" or "which country is the Eiffel Tower in". NOT trivially obvious like "what color is grass".',
  medium:
    'Medium questions require real subject knowledge. Examples: "which planet has the most moons" or "what enzyme breaks down starch in saliva". Pub-quiz regulars should get about 60-70% right.',
  hard: "Hard questions are genuine championship pub quiz level. Obscure but fair — not trick questions, just deep knowledge. Only trivia experts and specialists should reliably know these. Example depth: naming the specific protein channel that lets water cross cell membranes.",
}

// ── Question type ────────────────────────────────────────────────────────────
interface RawQuestion {
  questionText: string
  correctAnswer: string
  wrongAnswers: string[]
  explanation: string
}

// ── Generate a batch via Claude Haiku ───────────────────────────────────────
async function generateBatch(
  catKey: string,
  catDesc: string,
  difficulty: string,
  count: number
): Promise<RawQuestion[]> {
  const prompt = `Generate ${count} unique trivia questions for the category: "${catDesc}" at difficulty level: ${difficulty.toUpperCase()}.

Difficulty guidance: ${DIFFICULTY_GUIDANCE[difficulty]}

Rules:
- Each question must have exactly 1 correct answer and exactly 3 plausible wrong answers
- Wrong answers must be believable — not obviously wrong to a moderately-knowledgeable person
- Include a 1-2 sentence explanation of why the correct answer is correct
- Questions must be factually accurate as of early 2026
- No offensive, controversial, or politically divisive content
- Vary question formats: "Which...", "What...", "Who...", "In what year...", "How many...", "Where..."
- No duplicate questions within this batch

Return ONLY a valid JSON array — no markdown, no extra text:
[{
  "questionText": "...",
  "correctAnswer": "...",
  "wrongAnswers": ["...", "...", "..."],
  "explanation": "..."
}]`

  const message = await claude.messages.create({
    model: 'claude-haiku-4-5-20251001',
    max_tokens: 8192,
    messages: [{ role: 'user', content: prompt }],
  })

  const content = message.content[0]
  if (content.type !== 'text') throw new Error('Non-text response from Claude')

  const jsonMatch = content.text.match(/\[[\s\S]*\]/)
  if (!jsonMatch) throw new Error(`No JSON array in response. Got: ${content.text.slice(0, 200)}`)

  const parsed = JSON.parse(jsonMatch[0]) as RawQuestion[]
  return parsed.slice(0, count)
}

// ── Insert a batch into the DB ───────────────────────────────────────────────
async function insertBatch(
  category: string,
  difficulty: string,
  questions: RawQuestion[]
): Promise<number> {
  let inserted = 0
  for (const q of questions) {
    if (
      !q.questionText?.trim() ||
      !q.correctAnswer?.trim() ||
      !Array.isArray(q.wrongAnswers) ||
      q.wrongAnswers.length < 3
    ) {
      continue // skip malformed
    }
    try {
      await sql`
        INSERT INTO question_pool (category, difficulty, question_text, correct_answer, wrong_answers, explanation)
        VALUES (
          ${category},
          ${difficulty},
          ${q.questionText.trim()},
          ${q.correctAnswer.trim()},
          ${JSON.stringify(q.wrongAnswers.slice(0, 3).map((a) => a.trim()))},
          ${(q.explanation ?? '').trim()}
        )
      `
      inserted++
    } catch (err) {
      // Skip duplicate or constraint errors and keep going
      console.warn(`    ⚠ Insert skipped: ${err instanceof Error ? err.message.slice(0, 80) : err}`)
    }
  }
  return inserted
}

// ── Main ─────────────────────────────────────────────────────────────────────
async function main() {
  console.log('🎯  AI Trivia Arena — Question Pool Seeder')
  console.log('==========================================')
  console.log(`📅  ${new Date().toISOString()}`)
  console.log(`🤖  Model: claude-haiku-4-5-20251001`)
  console.log(`📦  Target: 11 categories × 100 questions = 1,100 total\n`)

  // Check starting size
  const before = await sql`SELECT COUNT(*)::int AS count FROM question_pool`
  console.log(`📊  Pool before: ${before[0].count} questions\n`)

  // 100 per category split across difficulties
  const COUNTS = { easy: 34, medium: 33, hard: 33 } as const
  const DIFFICULTIES = ['easy', 'medium', 'hard'] as const

  let totalInserted = 0
  let totalFailed = 0

  for (const cat of CATEGORIES) {
    console.log(`\n📂  ${cat.key.toUpperCase()}`)

    for (const difficulty of DIFFICULTIES) {
      const count = COUNTS[difficulty]
      const label = `  ${difficulty.padEnd(6)} (${count}q)`
      process.stdout.write(`${label} → `)

      try {
        const questions = await generateBatch(cat.key, cat.desc, difficulty, count)
        const inserted = await insertBatch(cat.key, difficulty, questions)
        totalInserted += inserted
        console.log(`✅  ${inserted} inserted  (got ${questions.length} from Claude)`)
      } catch (err) {
        totalFailed++
        console.log(`❌  FAILED — ${err instanceof Error ? err.message : err}`)
      }
    }
  }

  // Final count
  const after = await sql`SELECT COUNT(*)::int AS count FROM question_pool`
  console.log(`\n==========================================`)
  console.log(`✅  Seeding complete!`)
  console.log(`   Inserted this run : ${totalInserted}`)
  console.log(`   Failed batches    : ${totalFailed}`)
  console.log(`   Pool before       : ${before[0].count}`)
  console.log(`   Pool after        : ${after[0].count}`)
  console.log(`==========================================\n`)
}

main().catch((err) => {
  console.error('Fatal error:', err)
  process.exit(1)
})
