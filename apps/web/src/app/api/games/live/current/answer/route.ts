import { NextRequest, NextResponse } from 'next/server'
import { eq, and } from 'drizzle-orm'
import { getDb } from '@/db'
import { liveGames, livePlayers, liveAnswers } from '@/db/schema'
import { getCurrentQuestion, calcPoints } from '@/lib/live-game'

export const dynamic = 'force-dynamic'

export async function POST(req: NextRequest) {
  const { playerId, selectedAnswer, timeMs } = (await req.json()) as {
    playerId?: string
    selectedAnswer?: string
    timeMs?: number
  }

  if (!playerId || !selectedAnswer) {
    return NextResponse.json({ error: 'Missing fields' }, { status: 400 })
  }

  const db = getDb()

  const [player] = await db
    .select()
    .from(livePlayers)
    .where(eq(livePlayers.id, playerId))
    .limit(1)

  if (!player) return NextResponse.json({ error: 'Player not found' }, { status: 404 })

  const [game] = await db
    .select()
    .from(liveGames)
    .where(eq(liveGames.id, player.gameId))
    .limit(1)

  if (!game) return NextResponse.json({ error: 'Game not found' }, { status: 404 })
  if (game.status !== 'active') return NextResponse.json({ error: 'Not accepting answers' }, { status: 400 })

  const globalQIndex = game.currentRound * game.questionsPerRound + game.currentQuestionIndex

  // Prevent double-answering
  const [already] = await db
    .select({ id: liveAnswers.id })
    .from(liveAnswers)
    .where(and(eq(liveAnswers.playerId, playerId), eq(liveAnswers.questionIndex, globalQIndex), eq(liveAnswers.gameId, game.id)))
    .limit(1)

  if (already) return NextResponse.json({ error: 'Already answered' }, { status: 400 })

  const question = getCurrentQuestion(game)
  if (!question) return NextResponse.json({ error: 'No current question' }, { status: 400 })

  const isCorrect = selectedAnswer === question.correctAnswer
  const newStreak = isCorrect ? player.streak + 1 : 0
  const elapsed = timeMs ?? (Date.now() - (game.questionStartedAt ? new Date(game.questionStartedAt).getTime() : Date.now()))
  const points = calcPoints(isCorrect, elapsed, game.timePerQuestion, game.difficulty, player.streak)

  await db.insert(liveAnswers).values({
    gameId: game.id,
    playerId,
    questionIndex: globalQIndex,
    roundIndex: game.currentRound,
    selectedAnswer,
    isCorrect,
    timeMs: elapsed,
    pointsEarned: points,
  })

  await db
    .update(livePlayers)
    .set({
      score: player.score + points,
      correctCount: player.correctCount + (isCorrect ? 1 : 0),
      streak: newStreak,
    })
    .where(eq(livePlayers.id, playerId))

  return NextResponse.json({
    isCorrect,
    pointsEarned: points,
    correctAnswer: question.correctAnswer,
    explanation: question.explanation,
    newScore: player.score + points,
    streak: newStreak,
  })
}
