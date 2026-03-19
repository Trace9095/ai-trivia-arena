import { NextRequest, NextResponse } from 'next/server'
import { eq } from 'drizzle-orm'
import { getSession } from '@/lib/auth'
import { getDb } from '@/db'
import { liveGames, livePlayers } from '@/db/schema'

export async function POST(req: NextRequest, { params }: { params: Promise<{ code: string }> }) {
  const { code } = await params
  const { displayName } = (await req.json()) as { displayName: string }

  if (!displayName?.trim()) return NextResponse.json({ error: 'Display name required' }, { status: 400 })

  const db = getDb()
  const [game] = await db
    .select()
    .from(liveGames)
    .where(eq(liveGames.gameCode, code.toUpperCase()))
    .limit(1)

  if (!game) return NextResponse.json({ error: 'Game not found' }, { status: 404 })
  if (game.status === 'finished') return NextResponse.json({ error: 'Game already finished' }, { status: 400 })

  // Optional: link to logged-in account
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
    playerId: player.id,
    gameId: game.id,
    gameCode: game.gameCode,
    displayName: player.displayName,
  })
}
