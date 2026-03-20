import { NextResponse } from 'next/server'
import { eq, and, asc } from 'drizzle-orm'
import { getDb } from '@/db'
import { liveGames, livePlayers, liveVotes } from '@/db/schema'
import { getCurrentQuestion, getShuffledAnswers, answerSeed, type GameRound } from '@/lib/live-game'
import { getQuestionsFromPool } from '@/lib/question-pool'

export const dynamic = 'force-dynamic'

const ALWAYS_ON_TIME_PER_QUESTION = 15 // seconds per question
const LEADERBOARD_DURATION_MS = 8000  // 8 seconds
const VOTING_DURATION_MS = 15000      // 15 seconds for category vote
const QUESTIONS_PER_BATCH = 20
const VOTE_QUESTIONS_PER_BATCH = 10   // after a vote, load this many from the winning category
const VOTE_EVERY_N = 5                // trigger vote every N questions

const CATEGORY_ROTATION = [
  'general', 'science', 'history', 'geography', 'pop_culture',
  'sports', 'food_drink', 'technology', 'movies_tv', 'music',
]
const THEMES = ['classic', 'neon', 'royalgorge', 'sportsbar'] as const

function getTodayDate(): string {
  return new Date().toISOString().slice(0, 10)
}

function generateCode(): string {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'
  return Array.from({ length: 4 }, () => chars[Math.floor(Math.random() * chars.length)]).join('')
}

function pickVotingCategories(exclude?: string | null): string[] {
  const pool = [...CATEGORY_ROTATION]
  if (exclude && pool.includes(exclude)) {
    pool.splice(pool.indexOf(exclude), 1)
  }
  // Fisher-Yates shuffle, take first 4
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[pool[i], pool[j]] = [pool[j]!, pool[i]!]
  }
  return pool.slice(0, 4)
}

async function getAlwaysOnQuestions(): Promise<Array<{ questionText: string; correctAnswer: string; wrongAnswers: string[]; explanation: string }>> {
  const batches = await Promise.all(
    CATEGORY_ROTATION.map((cat) =>
      getQuestionsFromPool(cat, 'medium', 2).catch((err) => {
        console.error(`getQuestionsFromPool failed for ${cat}/medium:`, err)
        return [] as Array<{ questionText: string; correctAnswer: string; wrongAnswers: string[]; explanation: string }>
      })
    )
  )
  const all = batches.flat()
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

  const questions = await getAlwaysOnQuestions()
  if (questions.length === 0) {
    throw new Error('No questions available — seed the question pool first')
  }

  let gameCode = generateCode()
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

  // ── active → showing_leaderboard (time's up) ──────────────────────────────
  if (game.status === 'active' && game.questionStartedAt) {
    const elapsed = now - new Date(game.questionStartedAt).getTime()
    if (elapsed >= ALWAYS_ON_TIME_PER_QUESTION * 1000) {
      const leaderboardEnd = new Date(now + LEADERBOARD_DURATION_MS)
      await db
        .update(liveGames)
        .set({ status: 'showing_leaderboard', categoryPickDeadline: leaderboardEnd })
        .where(and(eq(liveGames.id, game.id), eq(liveGames.status, 'active')))

      const [updated] = await db.select().from(liveGames).where(eq(liveGames.id, game.id)).limit(1)
      return updated ?? game
    }
  }

  // ── showing_leaderboard → voting OR → active ──────────────────────────────
  if (game.status === 'showing_leaderboard' && game.categoryPickDeadline) {
    const deadline = new Date(game.categoryPickDeadline).getTime()
    if (now >= deadline) {
      // Every VOTE_EVERY_N questions, run a category vote
      const nextQCount = game.globalQuestionCount + 1
      if (nextQCount % VOTE_EVERY_N === 0) {
        const lastCategory = (game.roundsJson as GameRound[])[0]?.category ?? null
        const options = pickVotingCategories(lastCategory === 'mixed' ? null : lastCategory)
        const votingDeadline = new Date(now + VOTING_DURATION_MS)

        await db
          .update(liveGames)
          .set({
            status: 'voting',
            votingOptions: options,
            categoryPickDeadline: votingDeadline,
            globalQuestionCount: nextQCount,
          })
          .where(and(eq(liveGames.id, game.id), eq(liveGames.status, 'showing_leaderboard')))
      } else {
        // Normal advance
        const rounds = game.roundsJson as GameRound[]
        const round = rounds[0]
        const nextIndex = game.currentQuestionIndex + 1

        if (!round || nextIndex >= round.questions.length) {
          const newQuestions = await getAlwaysOnQuestions()
          if (newQuestions.length > 0) {
            await db
              .update(liveGames)
              .set({
                status: 'active',
                currentQuestionIndex: 0,
                questionStartedAt: new Date(),
                roundsJson: [{ category: 'mixed', questions: newQuestions }],
                globalQuestionCount: nextQCount,
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
              globalQuestionCount: nextQCount,
              categoryPickDeadline: null,
            })
            .where(and(eq(liveGames.id, game.id), eq(liveGames.status, 'showing_leaderboard')))
        }
      }

      const [updated] = await db.select().from(liveGames).where(eq(liveGames.id, game.id)).limit(1)
      return updated ?? game
    }
  }

  // ── voting → active (tally votes, start winning category) ─────────────────
  if (game.status === 'voting' && game.categoryPickDeadline) {
    const deadline = new Date(game.categoryPickDeadline).getTime()
    if (now >= deadline) {
      const votingOptions = game.votingOptions as string[] | null
      let winnerCategory = 'general'

      if (votingOptions?.length) {
        const votes = await db
          .select()
          .from(liveVotes)
          .where(
            and(
              eq(liveVotes.gameId, game.id),
              eq(liveVotes.questionNumber, game.globalQuestionCount)
            )
          )

        const counts: Record<string, number> = {}
        for (const opt of votingOptions) counts[opt] = 0
        for (const v of votes) {
          counts[v.category] = (counts[v.category] ?? 0) + 1
        }

        // Pick winner — most votes; random tiebreak
        let maxVotes = -1
        const topCats: string[] = []
        for (const cat of votingOptions) {
          const c = counts[cat] ?? 0
          if (c > maxVotes) { maxVotes = c; topCats.length = 0; topCats.push(cat) }
          else if (c === maxVotes) { topCats.push(cat) }
        }
        winnerCategory = topCats[Math.floor(Math.random() * topCats.length)] ?? votingOptions[0] ?? 'general'
      }

      // Load questions for winning category
      let newQuestions = await getQuestionsFromPool(winnerCategory, 'medium', VOTE_QUESTIONS_PER_BATCH).catch(() => [])
      if (newQuestions.length === 0) {
        newQuestions = await getAlwaysOnQuestions()
        winnerCategory = 'mixed'
      }

      await db
        .update(liveGames)
        .set({
          status: 'active',
          currentQuestionIndex: 0,
          questionStartedAt: new Date(),
          roundsJson: [{ category: winnerCategory, questions: newQuestions }],
          votingOptions: null,
          categoryPickDeadline: null,
        })
        .where(and(eq(liveGames.id, game.id), eq(liveGames.status, 'voting')))

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
        correctAnswer: game.status === 'showing_leaderboard' ? question.correctAnswer : null,
        explanation: game.status === 'showing_leaderboard' ? question.explanation : null,
      }
    }

    // Voting state
    let voteCounts: Record<string, number> | null = null
    const votingOptions = game.votingOptions as string[] | null
    if (game.status === 'voting' && votingOptions?.length) {
      const votes = await db
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
      for (const v of votes) {
        voteCounts[v.category] = (voteCounts[v.category] ?? 0) + 1
      }
    }

    const questionStartedAt = game.questionStartedAt?.toISOString() ?? null
    const leaderboardEndsAt =
      game.status === 'showing_leaderboard'
        ? (game.categoryPickDeadline?.toISOString() ?? null)
        : null
    const votingDeadline =
      game.status === 'voting'
        ? (game.categoryPickDeadline?.toISOString() ?? null)
        : null

    return NextResponse.json({
      gameCode: game.gameCode,
      theme: game.theme,
      status: game.status,
      questionNumber: game.globalQuestionCount,
      questionStartedAt,
      leaderboardEndsAt,
      votingDeadline,
      votingOptions,
      voteCounts,
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
