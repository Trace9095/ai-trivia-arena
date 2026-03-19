import { NextResponse } from 'next/server'
import { eq, and, desc } from 'drizzle-orm'
import { getDb } from '@/db'
import { liveGames, livePlayers } from '@/db/schema'

export const dynamic = 'force-dynamic'

function getTodayDate(): string {
  return new Date().toISOString().slice(0, 10)
}

export async function GET() {
  const db = getDb()
  const today = getTodayDate()

  const [game] = await db
    .select({ id: liveGames.id })
    .from(liveGames)
    .where(and(eq(liveGames.isAlwaysOn, true), eq(liveGames.alwaysOnDate, today)))
    .limit(1)

  if (!game) return NextResponse.json({ leaderboard: [] })

  const players = await db
    .select()
    .from(livePlayers)
    .where(eq(livePlayers.gameId, game.id))
    .orderBy(desc(livePlayers.score))
    .limit(10)

  return NextResponse.json({
    leaderboard: players.map((p, i) => ({
      rank: i + 1,
      displayName: p.displayName,
      score: p.score,
      correctCount: p.correctCount,
    })),
  })
}
