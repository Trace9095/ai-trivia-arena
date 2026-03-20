import { NextRequest, NextResponse } from 'next/server'
import { getSessionFromRequest } from '@/lib/auth'
import { getDb } from '@/db'
import { games, gamePlayers, questions } from '@/db/schema'
import { eq, desc } from 'drizzle-orm'
import { generateQuestions } from '@/lib/claude'

export async function GET(req: NextRequest) {
  const session = await getSessionFromRequest(req)
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const db = getDb()
  const gameList = await db
    .select()
    .from(games)
    .where(eq(games.status, 'waiting'))
    .orderBy(desc(games.createdAt))
    .limit(20)

  return NextResponse.json({ games: gameList })
}

export async function POST(req: NextRequest) {
  const session = await getSessionFromRequest(req)
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const { category, difficulty, maxPlayers = 1 } = (await req.json()) as {
    category: string
    difficulty: string
    maxPlayers?: number
  }

  const db = getDb()

  // Create game
  const [game] = await db
    .insert(games)
    .values({
      hostUserId: session.userId,
      category,
      difficulty,
      status: 'active',
      maxPlayers,
    })
    .returning()

  // Generate questions
  const generated = await generateQuestions(category, difficulty, 10)
  await db.insert(questions).values(
    generated.map((q) => ({
      gameId: game.id,
      category,
      difficulty,
      questionText: q.questionText,
      correctAnswer: q.correctAnswer,
      wrongAnswers: q.wrongAnswers,
      explanation: q.explanation,
    }))
  )

  // Add host as player
  await db.insert(gamePlayers).values({
    gameId: game.id,
    userId: session.userId,
  })

  return NextResponse.json({ game })
}
