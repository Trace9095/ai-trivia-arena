import { NextRequest, NextResponse } from 'next/server'
import { eq, and } from 'drizzle-orm'
import { getDb } from '@/db'
import { liveGames, livePlayers, liveAnswers } from '@/db/schema'
import { getCurrentQuestion, calcPoints, type GameRound } from '@/lib/live-game'

export async function POST(req: NextRequest, { params }: { params: Promise<{ code: string }> }) {
  const { code } = await params
  const { playerId, selectedAnswer, timeMs } = (await req.json()) as {
    playerId: string
    selectedAnswer: string
    timeMs: number
  }

  if (!playerId || !selectedAnswer) return NextResponse.json({ error: 'Missing fields' }, { status: 400 })

  const db = getDb()
  const [game] = await db
    .select()
    .from(liveGames)
    .where(eq(liveGames.gameCode, code.toUpperCase()))
    .limit(1)

  if (!game) return NextResponse.json({ error: 'Game not found' }, { status: 404 })
  if (game.status !== 'active') return NextResponse.json({ error: 'Not accepting answers' }, { status: 400 })

  const [player] = await db
    .select()
    .from(livePlayers)
    .where(and(eq(livePlayers.id, playerId), eq(livePlayers.gameId, game.id)))
    .limit(1)

  if (!player) return NextResponse.json({ error: 'Player not found' }, { status: 404 })

  // Always-on games use globalQuestionCount as the unique question identifier because
  // currentQuestionIndex resets to 0 after each batch — using the computed formula
  // would cause false "Already answered" collisions after question 20.
  const globalQIndex = game.isAlwaysOn
    ? game.globalQuestionCount
    : game.currentRound * game.questionsPerRound + game.currentQuestionIndex

  // Prevent double-answering
  const [already] = await db
    .select({ id: liveAnswers.id })
    .from(liveAnswers)
    .where(and(eq(liveAnswers.playerId, playerId), eq(liveAnswers.questionIndex, globalQIndex)))
    .limit(1)

  if (already) return NextResponse.json({ error: 'Already answered' }, { status: 400 })

  const question = getCurrentQuestion(game)
  if (!question) return NextResponse.json({ error: 'No current question' }, { status: 400 })

  const isCorrect = selectedAnswer === question.correctAnswer
  const newStreak = isCorrect ? player.streak + 1 : 0
  const points = calcPoints(isCorrect, timeMs, game.timePerQuestion, game.difficulty, player.streak)

  // Record answer
  await db.insert(liveAnswers).values({
    gameId: game.id,
    playerId,
    questionIndex: globalQIndex,
    roundIndex: game.currentRound,
    selectedAnswer,
    isCorrect,
    timeMs,
    pointsEarned: points,
  })

  // Update player score
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
