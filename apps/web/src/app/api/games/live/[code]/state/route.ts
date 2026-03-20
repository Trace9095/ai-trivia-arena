import { NextRequest, NextResponse } from 'next/server'
import { eq, asc, sql } from 'drizzle-orm'
import { getDb } from '@/db'
import { liveGames, livePlayers, liveAnswers, users } from '@/db/schema'
import {
  getCurrentQuestion,
  getShuffledAnswers,
  answerSeed,
  type GameRound,
  CATEGORY_NAMES,
} from '@/lib/live-game'

// Minimal cache to reduce DB hammering from 1.5s polling
export const revalidate = 0

export async function GET(req: NextRequest, { params }: { params: Promise<{ code: string }> }) {
  const { code } = await params
  const db = getDb()

  const [game] = await db
    .select()
    .from(liveGames)
    .where(eq(liveGames.gameCode, code.toUpperCase()))
    .limit(1)

  if (!game) return NextResponse.json({ error: 'Game not found' }, { status: 404 })

  const players = await db
    .select()
    .from(livePlayers)
    .where(eq(livePlayers.gameId, game.id))
    .orderBy(asc(livePlayers.joinedAt))

  const leaderboard = [...players].sort((a, b) => b.score - a.score).map((p, i) => ({
    rank: i + 1,
    id: p.id,
    displayName: p.displayName,
    score: p.score,
    correctCount: p.correctCount,
    streak: p.streak,
  }))

  const rounds = game.roundsJson as GameRound[]
  const currentRound = rounds[game.currentRound]
  const question = getCurrentQuestion(game)

  // How many players have answered the current question
  let answeredCount = 0
  if (question && (game.status === 'active' || game.status === 'showing_answer')) {
    const globalQIndex = game.currentRound * game.questionsPerRound + game.currentQuestionIndex
    const [{ count }] = await db
      .select({ count: sql<number>`count(*)::int` })
      .from(liveAnswers)
      .where(
        eq(liveAnswers.gameId, game.id)
        // We use global question index for simple lookup
      )
    answeredCount = count
  }

  // Picker info (rotating mode)
  let picker: { id: string; displayName: string } | null = null
  if (game.status === 'picking' && players.length > 0) {
    const pickerPlayer = players[game.pickerPlayerIndex % players.length]
    picker = pickerPlayer ? { id: pickerPlayer.id, displayName: pickerPlayer.displayName } : null
  }

  // Current question data (hide correct answer unless showing_answer)
  let questionData: Record<string, unknown> | null = null
  if (question) {
    const seed = answerSeed(game.id, game.currentRound, game.currentQuestionIndex)
    const shuffled = getShuffledAnswers(question, seed)
    const globalIndex = game.currentRound * game.questionsPerRound + game.currentQuestionIndex
    const totalQuestions = game.roundCount * game.questionsPerRound

    questionData = {
      globalIndex,
      roundIndex: game.currentRound,
      indexInRound: game.currentQuestionIndex,
      totalInRound: currentRound?.questions.length ?? game.questionsPerRound,
      totalQuestions,
      text: question.questionText,
      answers: shuffled,
      // Reveal correct answer only when showing
      ...(game.status === 'showing_answer' || game.status === 'showing_leaderboard'
        ? {
            correctAnswer: question.correctAnswer,
            explanation: question.explanation,
          }
        : {}),
    }
  }

  return NextResponse.json({
    gameCode: game.gameCode,
    status: game.status,
    theme: game.theme,
    categoryMode: game.categoryMode,
    difficulty: game.difficulty,
    roundCount: game.roundCount,
    questionsPerRound: game.questionsPerRound,
    timePerQuestion: game.timePerQuestion,
    currentRound: game.currentRound,
    currentQuestionIndex: game.currentQuestionIndex,
    questionStartedAt: game.questionStartedAt,
    categoryPickDeadline: game.categoryPickDeadline,
    roundCategory: currentRound ? CATEGORY_NAMES[currentRound.category] ?? currentRound.category : null,
    playerCount: players.length,
    players: players.map((p) => ({ id: p.id, displayName: p.displayName, score: p.score })),
    leaderboard,
    picker,
    question: questionData,
    answeredCount,
    startedAt: game.startedAt,
    finishedAt: game.finishedAt,
  })
}
