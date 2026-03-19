import { NextResponse } from 'next/server'
import { getSession } from '@/lib/auth'
import { getDb } from '@/db'
import { users, games, questions, answers } from '@/db/schema'
import { count } from 'drizzle-orm'

const ADMIN_EMAILS = ['trace@epicai.ai', 'ceo@epicai.ai']

export async function GET() {
  const session = await getSession()
  if (!session || !ADMIN_EMAILS.includes(session.email)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const db = getDb()
  const [userCount] = await db.select({ count: count() }).from(users)
  const [gameCount] = await db.select({ count: count() }).from(games)
  const [questionCount] = await db.select({ count: count() }).from(questions)
  const [answerCount] = await db.select({ count: count() }).from(answers)

  return NextResponse.json({
    stats: {
      totalUsers: userCount.count,
      totalGames: gameCount.count,
      totalQuestions: questionCount.count,
      totalAnswers: answerCount.count,
    },
  })
}
