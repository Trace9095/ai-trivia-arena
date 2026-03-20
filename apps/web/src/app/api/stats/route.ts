import { NextResponse } from 'next/server'
import { sql } from 'drizzle-orm'
import { getDb } from '@/db'
import { users, answers, liveGames } from '@/db/schema'

export const revalidate = 60 // cache 60s

export async function GET() {
  try {
    const db = getDb()
    const [stats] = await db.select({
      totalPlayers: sql<number>`(SELECT count(*)::int FROM users)`,
      totalAnswers: sql<number>`(SELECT count(*)::int FROM answers)`,
      activeTvGames: sql<number>`(SELECT count(*)::int FROM live_games WHERE status NOT IN ('waiting','finished'))`,
      tvGamesToday: sql<number>`(SELECT count(*)::int FROM live_games WHERE created_at > NOW() - INTERVAL '24 hours')`,
    }).from(users).limit(1)

    return NextResponse.json(stats ?? { totalPlayers: 0, totalAnswers: 0, activeTvGames: 0, tvGamesToday: 0 })
  } catch {
    return NextResponse.json({ totalPlayers: 0, totalAnswers: 0, activeTvGames: 0, tvGamesToday: 0 })
  }
}
