import { NextRequest, NextResponse } from 'next/server'
import { eq, and } from 'drizzle-orm'
import { getSession } from '@/lib/auth'
import { getDb } from '@/db'
import { liveGames, livePlayers } from '@/db/schema'

export const dynamic = 'force-dynamic'

function getTodayDate(): string {
  return new Date().toISOString().slice(0, 10)
}

export async function POST(req: NextRequest) {
  const { displayName } = (await req.json()) as { displayName?: string }
  if (!displayName?.trim()) {
    return NextResponse.json({ error: 'Display name required' }, { status: 400 })
  }

  const db = getDb()
  const today = getTodayDate()

  const [game] = await db
    .select()
    .from(liveGames)
    .where(and(eq(liveGames.isAlwaysOn, true), eq(liveGames.alwaysOnDate, today)))
    .limit(1)

  if (!game) {
    return NextResponse.json({ error: 'No active game today — visit /tv to start one' }, { status: 404 })
  }

  const session = await getSession()

  const [player] = await db
    .insert(livePlayers)
    .values({
      gameId: game.id,
      displayName: displayName.trim().slice(0, 20),
      userId: session?.userId ?? null,
    })
    .returning()

  return NextResponse.json({
    playerId: player!.id,
    gameId: game.id,
    gameCode: game.gameCode,
    displayName: player!.displayName,
  })
}
