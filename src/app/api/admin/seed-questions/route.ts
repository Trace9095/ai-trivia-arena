import { NextRequest, NextResponse } from 'next/server'
import { getAdminSession } from '@/lib/admin-auth'
import { getDb } from '@/db'
import { questionPool } from '@/db/schema'
import { and, eq, sql } from 'drizzle-orm'
import Anthropic from '@anthropic-ai/sdk'

// Vercel max execution: 60s on hobby, 800s on fluid compute
export const maxDuration = 300

const CATEGORIES = [
  'general',
  'science',
  'history',
  'geography',
  'pop_culture',
  'sports',
  'food_drink',
  'technology',
  'movies_tv',
  'music',
  'colorado',
]

const DIFFICULTIES = ['easy', 'medium', 'hard']

const CATEGORY_DESCRIPTIONS: Record<string, string> = {
  general: 'General Knowledge — a wide mix of topics including arts, science, history, and everyday facts',
  science: 'Science & Nature — biology, chemistry, physics, astronomy, geology, and natural world',
  history: 'World History — major events, civilizations, wars, leaders, and turning points in human history',
  geography:
    'Geography — countries, capitals, landmarks, physical features, rivers, mountains, and world regions',
  pop_culture:
    'Pop Culture — celebrities, viral moments, social media trends, awards shows, and internet culture (2000s-2020s)',
  sports:
    'Sports — athletes, championships, records, rules, teams, and major sporting events across all major sports',
  food_drink:
    'Food & Drink — cuisine, cooking techniques, ingredients, famous dishes, beverages, and culinary history',
  technology:
    'Technology — computing history, inventions, software, hardware, internet, AI, and tech companies',
  movies_tv:
    'Movies & TV — film history, directors, actors, Oscar winners, iconic TV shows, plot details, and quotes',
  music:
    'Music — artists, albums, chart-toppers, music history, genres, instruments, and Grammy winners',
  colorado:
    'Colorado & the Royal Gorge Region — Canon City, Royal Gorge Bridge & Park, Colorado Springs, Denver, Pueblo, state history, wildlife, geology, skiing, and local culture',
}

const DIFFICULTY_INSTRUCTIONS: Record<string, string> = {
  easy: 'Easy questions require genuine thought but are answerable by most people — think "what year did the iPhone first launch" or "which country is the Eiffel Tower in". NOT trivially obvious like "what color is grass".',
  medium:
    'Medium questions require real subject knowledge. Examples: "which planet has the most moons" or "what enzyme breaks down starch in saliva". Pub-quiz regulars should get about 60-70% right.',
  hard: 'Hard questions are genuine championship pub quiz level. Obscure but fair — not trick questions, just deep knowledge. Only trivia experts and specialists should reliably know these. Examples: "what is the name of the protein channel that lets water cross cell membranes" or "in what year did Tesla file for bankruptcy protection" (trick: they didn\'t — so avoid trick questions, but this illustrates the depth level).',
}

function getClient(): Anthropic {
  return new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY! })
}

interface RawQuestion {
  questionText: string
  correctAnswer: string
  wrongAnswers: string[]
  explanation: string
}

async function generateBatch(
  client: Anthropic,
  category: string,
  difficulty: string,
  count: number
): Promise<RawQuestion[]> {
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

  const parsed = JSON.parse(jsonMatch[0]) as RawQuestion[]
  return parsed.slice(0, count)
}

export async function POST(req: NextRequest) {
  // Admin auth required
  const admin = await getAdminSession()
  if (!admin) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const body = (await req.json().catch(() => ({}))) as {
    category?: string
    difficulty?: string
    count?: number
    replace?: boolean
  }

  const targetCategories = body.category ? [body.category] : CATEGORIES
  const targetDifficulties = body.difficulty ? [body.difficulty] : DIFFICULTIES
  const targetCount = Math.min(body.count ?? 100, 200)

  const client = getClient()
  const db = getDb()

  const results: Array<{ category: string; difficulty: string; inserted: number; skipped: number }> = []
  let totalInserted = 0

  for (const category of targetCategories) {
    for (const difficulty of targetDifficulties) {
      try {
        // Check existing count
        const [{ existing }] = await db
          .select({ existing: sql<number>`count(*)::int` })
          .from(questionPool)
          .where(and(eq(questionPool.category, category), eq(questionPool.difficulty, difficulty)))

        if (!body.replace && existing >= targetCount) {
          results.push({ category, difficulty, inserted: 0, skipped: existing })
          continue
        }

        const needed = body.replace ? targetCount : Math.max(0, targetCount - existing)
        if (needed === 0) {
          results.push({ category, difficulty, inserted: 0, skipped: existing })
          continue
        }

        // Generate in batches of 50 (Claude performs better at this size)
        const BATCH_SIZE = 50
        let inserted = 0

        for (let i = 0; i < needed; i += BATCH_SIZE) {
          const batchCount = Math.min(BATCH_SIZE, needed - i)
          const questions = await generateBatch(client, category, difficulty, batchCount)

          const rows = questions.map((q) => ({
            category,
            difficulty,
            questionText: q.questionText,
            correctAnswer: q.correctAnswer,
            wrongAnswers: q.wrongAnswers,
            explanation: q.explanation,
          }))

          const insertResult = await db.insert(questionPool).values(rows).onConflictDoNothing().returning({ id: questionPool.id })
          inserted += insertResult.length
        }

        totalInserted += inserted
        results.push({ category, difficulty, inserted, skipped: existing })
      } catch (err) {
        results.push({
          category,
          difficulty,
          inserted: -1,
          skipped: 0,
        })
        console.error(`Seed failed for ${category}/${difficulty}:`, err)
      }
    }
  }

  return NextResponse.json({
    success: true,
    totalInserted,
    results,
  })
}

export async function GET(_req: NextRequest) {
  const admin = await getAdminSession()
  if (!admin) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const db = getDb()
  const rows = await db
    .select({
      category: questionPool.category,
      difficulty: questionPool.difficulty,
      count: sql<number>`count(*)::int`,
      avgTimesUsed: sql<number>`round(avg(${questionPool.timesUsed})::numeric, 1)::float`,
    })
    .from(questionPool)
    .groupBy(questionPool.category, questionPool.difficulty)
    .orderBy(questionPool.category, questionPool.difficulty)

  return NextResponse.json({ pool: rows })
}
