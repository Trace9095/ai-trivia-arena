import { NextRequest, NextResponse } from 'next/server'
import { eq, and } from 'drizzle-orm'
import { getDb } from '@/db'
import { liveGames, livePlayers, liveAnswers, liveVotes } from '@/db/schema'
import {
  getCurrentQuestion,
  getShuffledAnswers,
  answerSeed,
  type GameRound,
  CATEGORY_NAMES,
} from '@/lib/live-game'

export async function GET(req: NextRequest, { params }: { params: Promise<{ code: string }> }) {
  const { code } = await params
  const playerId = req.nextUrl.searchParams.get('playerId')
  if (!playerId) return NextResponse.json({ error: 'playerId required' }, { status: 400 })

  const db = getDb()
  const [game] = await db
    .select()
    .from(liveGames)
    .where(eq(liveGames.gameCode, code.toUpperCase()))
    .limit(1)

  if (!game) return NextResponse.json({ error: 'Game not found' }, { status: 404 })

  const [player] = await db
    .select()
    .from(livePlayers)
    .where(and(eq(livePlayers.id, playerId), eq(livePlayers.gameId, game.id)))
    .limit(1)

  if (!player) return NextResponse.json({ error: 'Player not found' }, { status: 404 })

  // Compute rank
  const allPlayers = await db
    .select({ id: livePlayers.id, score: livePlayers.score })
    .from(livePlayers)
    .where(eq(livePlayers.gameId, game.id))
  const sorted = [...allPlayers].sort((a, b) => b.score - a.score)
  const myRank = sorted.findIndex((p) => p.id === playerId) + 1

  const rounds = game.roundsJson as GameRound[]
  const currentRound = rounds[game.currentRound]
  const question = getCurrentQuestion(game)

  // Has this player already answered the current question?
  let hasAnswered = false
  let myLastAnswer: Record<string, unknown> | null = null

  if (question) {
    // Always-on games use globalQuestionCount as the unique question identifier — matches
    // the answer route so hasAnswered correctly reflects the current question.
    const globalQIndex = game.isAlwaysOn
      ? game.globalQuestionCount
      : game.currentRound * game.questionsPerRound + game.currentQuestionIndex
    const [existing] = await db
      .select()
      .from(liveAnswers)
      .where(
        and(
          eq(liveAnswers.gameId, game.id),
          eq(liveAnswers.playerId, playerId),
          eq(liveAnswers.questionIndex, globalQIndex)
        )
      )
      .limit(1)

    if (existing) {
      hasAnswered = true
      myLastAnswer = {
        selected: existing.selectedAnswer,
        isCorrect: existing.isCorrect,
        pointsEarned: existing.pointsEarned,
        correctAnswer: game.status === 'showing_answer' || game.status === 'showing_leaderboard'
          ? question.correctAnswer
          : null,
        explanation: game.status === 'showing_answer' ? question.explanation : null,
      }
    }
  }

  // Picker info
  const players = await db
    .select()
    .from(livePlayers)
    .where(eq(livePlayers.gameId, game.id))
    .orderBy(livePlayers.joinedAt)

  const isPicker =
    game.status === 'picking' &&
    players.length > 0 &&
    players[game.pickerPlayerIndex % players.length]?.id === playerId

  const pickerName =
    game.status === 'picking' && players.length > 0
      ? players[game.pickerPlayerIndex % players.length]?.displayName ?? null
      : null

  // Question data for player
  let questionData: Record<string, unknown> | null = null
  if (question && game.status === 'active') {
    const seed = answerSeed(game.id, game.currentRound, game.currentQuestionIndex)
    const shuffled = getShuffledAnswers(question, seed)
    const globalIndex = game.currentRound * game.questionsPerRound + game.currentQuestionIndex

    questionData = {
      globalIndex,
      indexInRound: game.currentQuestionIndex,
      totalInRound: currentRound?.questions.length ?? game.questionsPerRound,
      text: question.questionText,
      answers: shuffled,
      questionStartedAt: game.questionStartedAt,
      timePerQuestion: game.timePerQuestion,
    }
  }

  // Voting state
  let votingOptions: string[] | null = null
  let hasVoted = false
  let voteCounts: Record<string, number> | null = null

  if (game.status === 'voting') {
    votingOptions = game.votingOptions as string[] | null

    if (votingOptions?.length) {
      const [myVote] = await db
        .select({ id: liveVotes.id, category: liveVotes.category })
        .from(liveVotes)
        .where(
          and(
            eq(liveVotes.gameId, game.id),
            eq(liveVotes.playerId, playerId),
            eq(liveVotes.questionNumber, game.globalQuestionCount)
          )
        )
        .limit(1)

      hasVoted = !!myVote

      const allVotes = await db
        .select()
        .from(liveVotes)
        .where(
          and(
            eq(liveVotes.gameId, game.id),
            eq(liveVotes.questionNumber, game.globalQuestionCount)
          )
        )

      voteCounts = {}
      for (const opt of votingOptions) voteCounts[opt] = 0
      for (const v of allVotes) {
        voteCounts[v.category] = (voteCounts[v.category] ?? 0) + 1
      }
    }
  }

  return NextResponse.json({
    status: game.status,
    theme: game.theme,
    myScore: player.score,
    myRank,
    myStreak: player.streak,
    myCorrectCount: player.correctCount,
    totalPlayers: allPlayers.length,
    roundCount: game.roundCount,
    currentRound: game.currentRound,
    roundCategory: currentRound ? CATEGORY_NAMES[currentRound.category] ?? currentRound.category : null,
    timePerQuestion: game.timePerQuestion,
    isPicker,
    pickerName,
    categoryPickDeadline: game.categoryPickDeadline,
    votingDeadline: game.status === 'voting' ? game.categoryPickDeadline : null,
    votingOptions,
    hasVoted,
    voteCounts,
    question: questionData,
    hasAnswered,
    myLastAnswer,
    finishedAt: game.finishedAt,
  })
}
