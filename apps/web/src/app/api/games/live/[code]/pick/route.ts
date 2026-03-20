import { NextRequest, NextResponse } from 'next/server'
import { eq, asc } from 'drizzle-orm'
import { getDb } from '@/db'
import { liveGames, livePlayers } from '@/db/schema'
import { getQuestionsFromPool } from '@/lib/question-pool'
import { type GameRound } from '@/lib/live-game'

/** Player picks a category for the next round (rotating mode only) */
export async function POST(req: NextRequest, { params }: { params: Promise<{ code: string }> }) {
  const { code } = await params
  const { playerId, category } = (await req.json()) as { playerId: string; category: string }

  if (!playerId || !category) return NextResponse.json({ error: 'Missing fields' }, { status: 400 })

  const db = getDb()
  const [game] = await db
    .select()
    .from(liveGames)
    .where(eq(liveGames.gameCode, code.toUpperCase()))
    .limit(1)

  if (!game) return NextResponse.json({ error: 'Game not found' }, { status: 404 })
  if (game.status !== 'picking') return NextResponse.json({ error: 'Not in picking phase' }, { status: 400 })

  // Verify this player is the designated picker
  const players = await db
    .select()
    .from(livePlayers)
    .where(eq(livePlayers.gameId, game.id))
    .orderBy(asc(livePlayers.joinedAt))

  const expectedPicker = players[game.pickerPlayerIndex % players.length]
  if (!expectedPicker || expectedPicker.id !== playerId) {
    return NextResponse.json({ error: 'Not your turn to pick' }, { status: 403 })
  }

  // Load questions for picked category
  const questions = await getQuestionsFromPool(category, game.difficulty, game.questionsPerRound)
  const rounds = game.roundsJson as GameRound[]
  const newRounds = [...rounds]
  newRounds[game.currentRound] = { category, questions }

  await db
    .update(liveGames)
    .set({
      status: 'active',
      roundsJson: newRounds,
      questionStartedAt: new Date(),
    })
    .where(eq(liveGames.id, game.id))

  return NextResponse.json({ ok: true, category })
}
