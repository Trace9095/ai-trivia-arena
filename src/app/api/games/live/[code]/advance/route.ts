import { NextRequest, NextResponse } from 'next/server'
import { eq } from 'drizzle-orm'
import { getDb } from '@/db'
import { liveGames, livePlayers } from '@/db/schema'
import { hasNextQuestion, hasNextRound, type GameRound } from '@/lib/live-game'
import { getQuestionsFromPool } from '@/lib/question-pool'

/**
 * Called by the TV timer (or host button) to move the game forward.
 * The flow depends on current status:
 *   active           → showing_answer (reveal correct answer, brief pause)
 *   showing_answer   → showing_leaderboard OR next question (active)
 *   showing_leaderboard → next question (active) OR next round (picking/active) OR finished
 *   waiting          → active (start game)
 *   picking          → active (auto-pick random if time expired)
 */
export async function POST(req: NextRequest, { params }: { params: Promise<{ code: string }> }) {
  const { code } = await params
  const db = getDb()

  const [game] = await db
    .select()
    .from(liveGames)
    .where(eq(liveGames.gameCode, code.toUpperCase()))
    .limit(1)

  if (!game) return NextResponse.json({ error: 'Game not found' }, { status: 404 })
  if (game.status === 'finished') return NextResponse.json({ ok: true, status: 'finished' })

  const now = new Date()

  if (game.status === 'waiting') {
    // Start the game — first question (or picking if rotating mode)
    if (game.categoryMode === 'rotating') {
      await db
        .update(liveGames)
        .set({
          status: 'picking',
          startedAt: now,
          pickerPlayerIndex: 0,
          categoryPickDeadline: new Date(now.getTime() + 15_000),
        })
        .where(eq(liveGames.id, game.id))
      return NextResponse.json({ ok: true, status: 'picking' })
    }
    // Single / random — questions already loaded
    await db
      .update(liveGames)
      .set({ status: 'active', startedAt: now, questionStartedAt: now })
      .where(eq(liveGames.id, game.id))
    return NextResponse.json({ ok: true, status: 'active' })
  }

  if (game.status === 'active') {
    await db
      .update(liveGames)
      .set({ status: 'showing_answer' })
      .where(eq(liveGames.id, game.id))
    return NextResponse.json({ ok: true, status: 'showing_answer' })
  }

  if (game.status === 'showing_answer') {
    // After showing answer, show leaderboard between questions
    await db
      .update(liveGames)
      .set({ status: 'showing_leaderboard' })
      .where(eq(liveGames.id, game.id))
    return NextResponse.json({ ok: true, status: 'showing_leaderboard' })
  }

  if (game.status === 'showing_leaderboard') {
    if (hasNextQuestion(game)) {
      // Next question within current round
      await db
        .update(liveGames)
        .set({
          status: 'active',
          currentQuestionIndex: game.currentQuestionIndex + 1,
          questionStartedAt: now,
        })
        .where(eq(liveGames.id, game.id))
      return NextResponse.json({ ok: true, status: 'active' })
    }

    if (hasNextRound(game)) {
      // Move to next round
      const nextRound = game.currentRound + 1
      const nextPickerIndex = (game.pickerPlayerIndex + 1)

      if (game.categoryMode === 'rotating') {
        // Need a player to pick the next category
        await db
          .update(liveGames)
          .set({
            status: 'picking',
            currentRound: nextRound,
            currentQuestionIndex: 0,
            pickerPlayerIndex: nextPickerIndex,
            categoryPickDeadline: new Date(now.getTime() + 15_000),
          })
          .where(eq(liveGames.id, game.id))
        return NextResponse.json({ ok: true, status: 'picking' })
      }

      // Random / single — questions already pre-loaded
      await db
        .update(liveGames)
        .set({
          status: 'active',
          currentRound: nextRound,
          currentQuestionIndex: 0,
          questionStartedAt: now,
        })
        .where(eq(liveGames.id, game.id))
      return NextResponse.json({ ok: true, status: 'active' })
    }

    // No more rounds — game over
    await db
      .update(liveGames)
      .set({ status: 'finished', finishedAt: now })
      .where(eq(liveGames.id, game.id))
    return NextResponse.json({ ok: true, status: 'finished' })
  }

  if (game.status === 'picking') {
    // Auto-pick a random category (called when pick timer expires)
    const CATEGORIES = [
      'general', 'science', 'history', 'geography', 'pop_culture',
      'sports', 'food_drink', 'technology', 'movies_tv', 'music', 'colorado',
    ]
    const cat = CATEGORIES[Math.floor(Math.random() * CATEGORIES.length)]
    const questions = await getQuestionsFromPool(cat, game.difficulty, game.questionsPerRound)
    const rounds = game.roundsJson as GameRound[]
    const newRounds = [...rounds]
    newRounds[game.currentRound] = { category: cat, questions }

    await db
      .update(liveGames)
      .set({
        status: 'active',
        roundsJson: newRounds,
        questionStartedAt: now,
      })
      .where(eq(liveGames.id, game.id))
    return NextResponse.json({ ok: true, status: 'active', category: cat })
  }

  return NextResponse.json({ ok: true, status: game.status })
}
