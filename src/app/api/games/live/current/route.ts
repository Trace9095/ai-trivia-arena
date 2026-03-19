import { NextResponse } from 'next/server'
import { eq, and, asc, sql } from 'drizzle-orm'
import { getDb } from '@/db'
import { liveGames, livePlayers } from '@/db/schema'
import { getCurrentQuestion, getShuffledAnswers, answerSeed, type GameRound } from '@/lib/live-game'
import { getQuestionsFromPool } from '@/lib/question-pool'

export const dynamic = 'force-dynamic'

const ALWAYS_ON_TIME_PER_QUESTION = 30 // seconds
const LEADERBOARD_DURATION_MS = 5000 // 5 seconds
const QUESTIONS_PER_BATCH = 20
const CATEGORY_ROTATION = [
  'general', 'science', 'history', 'geography', 'pop_culture',
  'sports', 'food_drink', 'technology', 'movies_tv', 'music',
]
const THEMES = ['classic', 'neon', 'royalgorge', 'sportsbar'] as const

function getTodayDate(): string {
  return new Date().toISOString().slice(0, 10) // 'YYYY-MM-DD'
}

function generateCode(): string {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'
  return Array.from({ length: 4 }, () => chars[Math.floor(Math.random() * chars.length)]).join('')
}

async function getAlwaysOnQuestions(): Promise<Array<{ questionText: string; correctAnswer: string; wrongAnswers: string[]; explanation: string }>> {
  // Load 2 questions from each of 10 categories = 20 total
  const batches = await Promise.all(
    CATEGORY_ROTATION.map((cat) =>
      getQuestionsFromPool(cat, 'medium', 2).catch((err) => {
        console.error(`getQuestionsFromPool failed for ${cat}/medium:`, err)
        return []
      })
    )
  )
  const all = batches.flat()
  // Fisher-Yates shuffle
  for (let i = all.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[all[i], all[j]] = [all[j]!, all[i]!]
  }
  return all
}

async function getOrCreateDailyGame() {
  const db = getDb()
  const today = getTodayDate()

  const [existing] = await db
    .select()
    .from(liveGames)
    .where(and(eq(liveGames.isAlwaysOn, true), eq(liveGames.alwaysOnDate, today)))
    .limit(1)

  if (existing) return existing

  // Create today's always-on game
  const questions = await getAlwaysOnQuestions()
  if (questions.length === 0) {
    throw new Error('No questions available — seed the question pool first')
  }

  let gameCode = generateCode()
  // Ensure unique code
  for (let i = 0; i < 5; i++) {
    const [clash] = await db
      .select({ id: liveGames.id })
      .from(liveGames)
      .where(and(eq(liveGames.gameCode, gameCode), eq(liveGames.status, 'active')))
      .limit(1)
    if (!clash) break
    gameCode = generateCode()
  }

  const theme = THEMES[Math.floor(Math.random() * THEMES.length)] ?? 'classic'
  const now = new Date()

  const [game] = await db
    .insert(liveGames)
    .values({
      gameCode,
      isAlwaysOn: true,
      alwaysOnDate: today,
      globalQuestionCount: 1,
      theme,
      categoryMode: 'always_on',
      difficulty: 'medium',
      roundCount: 1,
      questionsPerRound: QUESTIONS_PER_BATCH,
      timePerQuestion: ALWAYS_ON_TIME_PER_QUESTION,
      status: 'active',
      startedAt: now,
      questionStartedAt: now,
      roundsJson: [{ category: 'mixed', questions }],
    })
    .returning()

  return game!
}

async function autoAdvance(game: Awaited<ReturnType<typeof getOrCreateDailyGame>>) {
  const db = getDb()
  const now = Date.now()

  if (game.status === 'active' && game.questionStartedAt) {
    const elapsed = now - new Date(game.questionStartedAt).getTime()
    if (elapsed >= ALWAYS_ON_TIME_PER_QUESTION * 1000) {
      // Time's up → show leaderboard
      const leaderboardEnd = new Date(now + LEADERBOARD_DURATION_MS)
      await db
        .update(liveGames)
        .set({ status: 'showing_leaderboard', categoryPickDeadline: leaderboardEnd })
        .where(and(eq(liveGames.id, game.id), eq(liveGames.status, 'active')))

      // Re-fetch
      const [updated] = await db.select().from(liveGames).where(eq(liveGames.id, game.id)).limit(1)
      return updated ?? game
    }
  }

  if (game.status === 'showing_leaderboard' && game.categoryPickDeadline) {
    const deadline = new Date(game.categoryPickDeadline).getTime()
    if (now >= deadline) {
      // Leaderboard done → advance to next question
      const rounds = game.roundsJson as GameRound[]
      const round = rounds[0]
      const nextIndex = game.currentQuestionIndex + 1

      if (!round || nextIndex >= round.questions.length) {
        // Load fresh batch
        const newQuestions = await getAlwaysOnQuestions()
        if (newQuestions.length > 0) {
          await db
            .update(liveGames)
            .set({
              status: 'active',
              currentQuestionIndex: 0,
              questionStartedAt: new Date(),
              roundsJson: [{ category: 'mixed', questions: newQuestions }],
              globalQuestionCount: game.globalQuestionCount + 1,
              categoryPickDeadline: null,
            })
            .where(and(eq(liveGames.id, game.id), eq(liveGames.status, 'showing_leaderboard')))
        }
      } else {
        await db
          .update(liveGames)
          .set({
            status: 'active',
            currentQuestionIndex: nextIndex,
            questionStartedAt: new Date(),
            globalQuestionCount: game.globalQuestionCount + 1,
            categoryPickDeadline: null,
          })
          .where(and(eq(liveGames.id, game.id), eq(liveGames.status, 'showing_leaderboard')))
      }

      const [updated] = await db.select().from(liveGames).where(eq(liveGames.id, game.id)).limit(1)
      return updated ?? game
    }
  }

  return game
}

export async function GET() {
  try {
    let game = await getOrCreateDailyGame()
    game = await autoAdvance(game)

    const db = getDb()
    const players = await db
      .select()
      .from(livePlayers)
      .where(eq(livePlayers.gameId, game.id))
      .orderBy(asc(livePlayers.joinedAt))

    const leaderboard = [...players]
      .sort((a, b) => b.score - a.score)
      .slice(0, 10)
      .map((p, i) => ({
        rank: i + 1,
        id: p.id,
        displayName: p.displayName,
        score: p.score,
        correctCount: p.correctCount,
        streak: p.streak,
      }))

    const question = getCurrentQuestion(game)
    let questionData: Record<string, unknown> | null = null

    if (question) {
      const seed = answerSeed(game.id, game.currentRound, game.currentQuestionIndex)
      const shuffled = getShuffledAnswers(question, seed)
      questionData = {
        text: question.questionText,
        answers: shuffled,
        // Reveal correct answer only during leaderboard phase
        correctAnswer: game.status === 'showing_leaderboard' ? question.correctAnswer : null,
        explanation: game.status === 'showing_leaderboard' ? question.explanation : null,
      }
    }

    // Time remaining for client-side countdown
    const questionStartedAt = game.questionStartedAt?.toISOString() ?? null
    const leaderboardEndsAt = game.status === 'showing_leaderboard'
      ? (game.categoryPickDeadline?.toISOString() ?? null)
      : null

    return NextResponse.json({
      gameCode: game.gameCode,
      theme: game.theme,
      status: game.status,
      questionNumber: game.globalQuestionCount,
      questionStartedAt,
      leaderboardEndsAt,
      timePerQuestion: game.timePerQuestion,
      playerCount: players.length,
      question: questionData,
      leaderboard,
    })
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error'
    return NextResponse.json({ error: message }, { status: 500 })
  }
}
