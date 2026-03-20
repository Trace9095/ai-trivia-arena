import { NextRequest, NextResponse } from 'next/server'
import { eq, and } from 'drizzle-orm'
import { getDb } from '@/db'
import { liveGames, livePlayers, liveVotes } from '@/db/schema'

export const dynamic = 'force-dynamic'

export async function POST(req: NextRequest) {
  try {
    const { playerId, category } = (await req.json()) as {
      playerId?: string
      category?: string
    }
    if (!playerId || !category) {
      return NextResponse.json({ error: 'playerId and category required' }, { status: 400 })
    }

    const db = getDb()
    const today = new Date().toISOString().slice(0, 10)

    const [game] = await db
      .select()
      .from(liveGames)
      .where(and(eq(liveGames.isAlwaysOn, true), eq(liveGames.alwaysOnDate, today)))
      .limit(1)

    if (!game) return NextResponse.json({ error: 'No active game' }, { status: 404 })
    if (game.status !== 'voting') {
      return NextResponse.json({ error: 'Not in voting phase' }, { status: 400 })
    }

    const votingOptions = game.votingOptions as string[] | null
    if (!votingOptions?.includes(category)) {
      return NextResponse.json({ error: 'Invalid category' }, { status: 400 })
    }

    // Validate player is in this game
    const [player] = await db
      .select({ id: livePlayers.id })
      .from(livePlayers)
      .where(and(eq(livePlayers.id, playerId), eq(livePlayers.gameId, game.id)))
      .limit(1)

    if (!player) return NextResponse.json({ error: 'Player not in game' }, { status: 403 })

    const questionNumber = game.globalQuestionCount

    // One vote per player per milestone
    const [existing] = await db
      .select({ id: liveVotes.id })
      .from(liveVotes)
      .where(
        and(
          eq(liveVotes.gameId, game.id),
          eq(liveVotes.playerId, playerId),
          eq(liveVotes.questionNumber, questionNumber)
        )
      )
      .limit(1)

    if (existing) {
      return NextResponse.json({ error: 'Already voted' }, { status: 409 })
    }

    await db.insert(liveVotes).values({
      gameId: game.id,
      playerId,
      category,
      questionNumber,
    })

    // Return live vote counts for all options
    const allVotes = await db
      .select()
      .from(liveVotes)
      .where(and(eq(liveVotes.gameId, game.id), eq(liveVotes.questionNumber, questionNumber)))

    const voteCounts: Record<string, number> = {}
    for (const opt of votingOptions) voteCounts[opt] = 0
    for (const v of allVotes) {
      voteCounts[v.category] = (voteCounts[v.category] ?? 0) + 1
    }

    return NextResponse.json({ success: true, voteCounts })
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error'
    return NextResponse.json({ error: message }, { status: 500 })
  }
}
