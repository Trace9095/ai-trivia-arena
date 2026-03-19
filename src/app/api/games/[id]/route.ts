import { NextRequest, NextResponse } from 'next/server'
import { getSession } from '@/lib/auth'
import { getDb } from '@/db'
import { games, questions, gamePlayers, users } from '@/db/schema'
import { eq } from 'drizzle-orm'

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await getSession()
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const { id } = await params
  const db = getDb()

  const [game] = await db.select().from(games).where(eq(games.id, id)).limit(1)
  if (!game) return NextResponse.json({ error: 'Game not found' }, { status: 404 })

  const gameQuestions = await db.select().from(questions).where(eq(questions.gameId, id))

  const players = await db
    .select({ player: gamePlayers, user: users })
    .from(gamePlayers)
    .innerJoin(users, eq(gamePlayers.userId, users.id))
    .where(eq(gamePlayers.gameId, id))

  return NextResponse.json({ game, questions: gameQuestions, players })
}
