import { NextRequest, NextResponse } from 'next/server'
import { eq, and, ne } from 'drizzle-orm'
import { getSession } from '@/lib/auth'
import { getDb } from '@/db'
import { liveGames } from '@/db/schema'
import { getQuestionsFromPool } from '@/lib/question-pool'
import { CATEGORIES } from '@/lib/utils'

function generateCode(): string {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'
  return Array.from({ length: 4 }, () => chars[Math.floor(Math.random() * chars.length)]).join('')
}

export async function POST(req: NextRequest) {
  const {
    theme = 'classic',
    categoryMode = 'single',
    singleCategory = 'general',
    difficulty = 'medium',
    roundCount = 1,
    questionsPerRound = 10,
    timePerQuestion = 20,
  } = (await req.json()) as {
    theme?: string
    categoryMode?: string
    singleCategory?: string
    difficulty?: string
    roundCount?: number
    questionsPerRound?: number
    timePerQuestion?: number
  }

  const session = await getSession()
  const db = getDb()

  // Generate unique game code
  let gameCode = generateCode()
  for (let i = 0; i < 5; i++) {
    const existing = await db
      .select({ id: liveGames.id })
      .from(liveGames)
      .where(and(eq(liveGames.gameCode, gameCode), ne(liveGames.status, 'finished')))
      .limit(1)
    if (existing.length === 0) break
    gameCode = generateCode()
  }

  // For 'single' mode with 1 round, pre-generate questions now so the game is instant
  let roundsJson: Array<{ category: string; questions: Array<{ questionText: string; correctAnswer: string; wrongAnswers: string[]; explanation: string }> }> = []

  if (categoryMode === 'single') {
    const questions = await getQuestionsFromPool(singleCategory, difficulty, questionsPerRound)
    roundsJson = [{ category: singleCategory, questions }]
  } else if (categoryMode === 'random') {
    // Pick random categories for each round
    const catIds = CATEGORIES.map((c) => c.id)
    for (let r = 0; r < roundCount; r++) {
      const cat = catIds[Math.floor(Math.random() * catIds.length)]
      const questions = await getQuestionsFromPool(cat, difficulty, questionsPerRound)
      roundsJson.push({ category: cat, questions })
    }
  }
  // For 'rotating', rounds are populated one-by-one as players pick

  const [game] = await db
    .insert(liveGames)
    .values({
      gameCode,
      hostUserId: session?.userId ?? null,
      theme,
      categoryMode,
      singleCategory: categoryMode === 'single' ? singleCategory : null,
      difficulty,
      roundCount,
      questionsPerRound,
      timePerQuestion,
      status: 'waiting',
      roundsJson,
    })
    .returning()

  return NextResponse.json({ gameCode: game.gameCode, gameId: game.id })
}
