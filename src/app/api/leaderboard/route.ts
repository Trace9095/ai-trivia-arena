import { NextRequest, NextResponse } from 'next/server'
import { getDb } from '@/db'
import { users } from '@/db/schema'
import { desc } from 'drizzle-orm'

export async function GET(req: NextRequest) {
  const _period = req.nextUrl.searchParams.get('period') ?? 'alltime'
  const db = getDb()

  // For MVP, return all-time leaderboard from users table
  const leaderboard = await db
    .select({
      id: users.id,
      name: users.name,
      email: users.email,
      totalScore: users.totalScore,
      gamesPlayed: users.gamesPlayed,
      streak: users.streak,
    })
    .from(users)
    .orderBy(desc(users.totalScore))
    .limit(50)

  const entries = leaderboard.map((u, i) => ({ rank: i + 1, ...u }))
  return NextResponse.json({ leaderboard: entries, period: _period })
}
