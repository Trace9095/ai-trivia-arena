import { NextRequest, NextResponse } from 'next/server'
import { getSessionFromRequest } from '@/lib/auth'
import { getDb } from '@/db'
import { answers, questions, gamePlayers } from '@/db/schema'
import { eq, and } from 'drizzle-orm'
import { calculatePoints } from '@/lib/utils'

export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await getSessionFromRequest(req)
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const { id: gameId } = await params
  const { questionId, selectedAnswer, timeMs } = (await req.json()) as {
    questionId: string
    selectedAnswer: string
    timeMs: number
  }

  const db = getDb()
  const [question] = await db.select().from(questions).where(eq(questions.id, questionId)).limit(1)
  if (!question) return NextResponse.json({ error: 'Question not found' }, { status: 404 })

  const isCorrect = question.correctAnswer === selectedAnswer
  const pointsEarned = calculatePoints(isCorrect, timeMs, question.difficulty)

  const [answer] = await db
    .insert(answers)
    .values({
      questionId,
      userId: session.userId,
      selectedAnswer,
      isCorrect,
      timeMs,
      pointsEarned,
    })
    .returning()

  // Update player score
  await db
    .update(gamePlayers)
    .set({ score: pointsEarned })
    .where(and(eq(gamePlayers.gameId, gameId), eq(gamePlayers.userId, session.userId)))

  return NextResponse.json({
    isCorrect,
    correctAnswer: question.correctAnswer,
    explanation: question.explanation,
    pointsEarned,
    answer,
  })
}
