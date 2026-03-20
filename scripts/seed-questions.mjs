/**
 * Standalone question seeder — runs directly against Neon DB + Anthropic API
 * Usage: node --env-file=.env.local scripts/seed-questions.mjs
 * Options (env vars):
 *   SEED_COUNT=30       questions per category/difficulty (default 30)
 *   SEED_CATEGORY=      single category to seed (default: all 11)
 *   SEED_DIFFICULTY=    single difficulty to seed (default: all 3)
 *   SEED_REPLACE=1      replace existing questions (default: skip if exists)
 */

import { neon } from '@neondatabase/serverless'
import Anthropic from '@anthropic-ai/sdk'

const CATEGORIES = [
  'general', 'science', 'history', 'geography', 'pop_culture',
  'sports', 'food_drink', 'technology', 'movies_tv', 'music', 'colorado',
]

const DIFFICULTIES = ['easy', 'medium', 'hard']

const CATEGORY_DESCRIPTIONS = {
  general: 'General Knowledge — a wide mix of topics including arts, science, history, and everyday facts',
  science: 'Science & Nature — biology, chemistry, physics, astronomy, geology, and natural world',
  history: 'World History — major events, civilizations, wars, leaders, and turning points in human history',
  geography: 'Geography — countries, capitals, landmarks, physical features, rivers, mountains, and world regions',
  pop_culture: 'Pop Culture — celebrities, viral moments, social media trends, awards shows, and internet culture (2000s-2020s)',
  sports: 'Sports — athletes, championships, records, rules, teams, and major sporting events across all major sports',
  food_drink: 'Food & Drink — cuisine, cooking techniques, ingredients, famous dishes, beverages, and culinary history',
  technology: 'Technology — computing history, inventions, software, hardware, internet, AI, and tech companies',
  movies_tv: 'Movies & TV — film history, directors, actors, Oscar winners, iconic TV shows, plot details, and quotes',
  music: 'Music — artists, albums, chart-toppers, music history, genres, instruments, and Grammy winners',
  colorado: 'Colorado & the Royal Gorge Region — Canon City, Royal Gorge Bridge & Park, Colorado Springs, Denver, Pueblo, state history, wildlife, geology, skiing, and local culture',
}

const DIFFICULTY_INSTRUCTIONS = {
  easy: 'Easy questions require genuine thought but are answerable by most people — think "what year did the iPhone first launch" or "which country is the Eiffel Tower in". NOT trivially obvious like "what color is grass".',
  medium: 'Medium questions require real subject knowledge. Examples: "which planet has the most moons" or "what enzyme breaks down starch in saliva". Pub-quiz regulars should get about 60-70% right.',
  hard: 'Hard questions are genuine championship pub quiz level. Obscure but fair — not trick questions, just deep knowledge. Only trivia experts and specialists should reliably know these.',
}

async function generateBatch(client, category, difficulty, count) {
  const catDesc = CATEGORY_DESCRIPTIONS[category] ?? category
  const diffDesc = DIFFICULTY_INSTRUCTIONS[difficulty] ?? difficulty

  const prompt = `Generate ${count} unique trivia questions for the category: "${catDesc}" at difficulty level: ${difficulty.toUpperCase()}.

Difficulty guidance: ${diffDesc}

Rules:
- Each question must have exactly 1 correct answer and exactly 3 plausible wrong answers
- Wrong answers must be believable — not obviously wrong to someone with moderate knowledge
- Wrong answers must be different from the correct answer
- Include a 1-2 sentence explanation of WHY the correct answer is correct
- Questions must be factually accurate as of early 2026
- No offensive, controversial, or politically divisive content
- Vary question formats: "Which...", "What...", "Who...", "In what year...", "How many...", "Where..."
- No duplicate questions within this batch

Return ONLY a valid JSON array — no other text, no markdown fences:
[{
  "questionText": "...",
  "correctAnswer": "...",
  "wrongAnswers": ["...", "...", "..."],
  "explanation": "..."
}]`

  const message = await client.messages.create({
    model: 'claude-haiku-4-5',
    max_tokens: 8192,
    messages: [{ role: 'user', content: prompt }],
  })

  const content = message.content[0]
  if (content.type !== 'text') throw new Error('Unexpected response type')

  const jsonMatch = content.text.match(/\[[\s\S]*\]/)
  if (!jsonMatch) throw new Error('No JSON array in response')

  return JSON.parse(jsonMatch[0]).slice(0, count)
}

async function main() {
  const dbUrl = process.env.DATABASE_URL || process.env.POSTGRES_URL
  const apiKey = process.env.ANTHROPIC_API_KEY
  if (!dbUrl) throw new Error('DATABASE_URL not set — run with --env-file=.env.local')
  if (!apiKey) throw new Error('ANTHROPIC_API_KEY not set')

  const sql = neon(dbUrl)
  const client = new Anthropic({ apiKey })

  const targetCount = parseInt(process.env.SEED_COUNT ?? '30', 10)
  const replace = process.env.SEED_REPLACE === '1'
  const targetCategories = process.env.SEED_CATEGORY ? [process.env.SEED_CATEGORY] : CATEGORIES
  const targetDifficulties = process.env.SEED_DIFFICULTY ? [process.env.SEED_DIFFICULTY] : DIFFICULTIES

  console.log(`\n🎯 Seeding ${targetCategories.length} categories × ${targetDifficulties.length} difficulties × ${targetCount} questions`)
  console.log(`   Total target: ${targetCategories.length * targetDifficulties.length * targetCount} questions`)
  console.log(`   Mode: ${replace ? 'REPLACE existing' : 'SKIP if already has enough'}\n`)

  let totalInserted = 0

  for (const category of targetCategories) {
    for (const difficulty of targetDifficulties) {
      try {
        // Check existing count
        const [{ existing }] = await sql`
          SELECT count(*)::int AS existing
          FROM question_pool
          WHERE category = ${category} AND difficulty = ${difficulty}
        `

        if (!replace && existing >= targetCount) {
          console.log(`  ⏭  ${category}/${difficulty}: ${existing} already — skipping`)
          continue
        }

        const needed = replace ? targetCount : Math.max(0, targetCount - existing)
        if (needed === 0) {
          console.log(`  ⏭  ${category}/${difficulty}: ${existing} already — skipping`)
          continue
        }

        process.stdout.write(`  ⏳ ${category}/${difficulty}: generating ${needed} questions...`)

        const BATCH_SIZE = 50
        let inserted = 0

        for (let i = 0; i < needed; i += BATCH_SIZE) {
          const batchCount = Math.min(BATCH_SIZE, needed - i)
          const questions = await generateBatch(client, category, difficulty, batchCount)

          for (const q of questions) {
            try {
              await sql`
                INSERT INTO question_pool (category, difficulty, question_text, correct_answer, wrong_answers, explanation)
                VALUES (
                  ${category},
                  ${difficulty},
                  ${q.questionText},
                  ${q.correctAnswer},
                  ${JSON.stringify(q.wrongAnswers)},
                  ${q.explanation}
                )
                ON CONFLICT DO NOTHING
              `
              inserted++
            } catch (insertErr) {
              // Skip individual bad rows
            }
          }
        }

        totalInserted += inserted
        console.log(` ✅ inserted ${inserted}`)
      } catch (err) {
        console.log(` ❌ FAILED: ${err.message}`)
      }
    }
  }

  console.log(`\n✅ Done! Total inserted: ${totalInserted}\n`)
}

main().catch((err) => {
  console.error('Fatal:', err)
  process.exit(1)
})
