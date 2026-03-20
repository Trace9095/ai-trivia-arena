import { NextResponse } from 'next/server'
import { getSession } from '@/lib/auth'
import { isAdmin } from '@/lib/admin-auth'
import { getDb } from '@/db'
import { users, games, questions, answers, aiUsageLogs, errorLogs } from '@/db/schema'
import { count, sum, gte } from 'drizzle-orm'

export async function GET() {
  const session = await getSession()
  if (!session || !isAdmin(session.email)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const db = getDb()

  const [userCount] = await db.select({ count: count() }).from(users)
  const [gameCount] = await db.select({ count: count() }).from(games)
  const [questionCount] = await db.select({ count: count() }).from(questions)
  const [answerCount] = await db.select({ count: count() }).from(answers)

  let totalAiCost = 0
  let totalAiCalls = 0
  let weekErrors = 0

  try {
    const now = new Date()
    const weekStart = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000)

    const [aiStats] = await db
      .select({ cost: sum(aiUsageLogs.costUsd), calls: count() })
      .from(aiUsageLogs)
    totalAiCost = Number(aiStats?.cost ?? 0)
    totalAiCalls = aiStats?.calls ?? 0

    const [errCount] = await db
      .select({ count: count() })
      .from(errorLogs)
      .where(gte(errorLogs.createdAt, weekStart))
    weekErrors = errCount.count
  } catch {
    // New tables may not exist yet
  }

  return NextResponse.json({
    stats: {
      totalUsers: userCount.count,
      totalGames: gameCount.count,
      totalQuestions: questionCount.count,
      totalAnswers: answerCount.count,
      totalAiCostUsd: totalAiCost,
      totalAiCalls,
      weekErrors,
    },
  })
}
