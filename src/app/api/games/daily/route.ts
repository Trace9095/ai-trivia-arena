import { NextResponse } from 'next/server'
import { getDb } from '@/db'
import { dailyChallenges } from '@/db/schema'
import { eq } from 'drizzle-orm'
import { generateQuestions } from '@/lib/claude'

export async function GET() {
  const db = getDb()
  const today = new Date().toISOString().split('T')[0]

  let [challenge] = await db
    .select()
    .from(dailyChallenges)
    .where(eq(dailyChallenges.date, today))
    .limit(1)

  if (!challenge) {
    // Auto-generate today's challenge
    const generated = await generateQuestions('general', 'medium', 10)
    ;[challenge] = await db
      .insert(dailyChallenges)
      .values({
        date: today,
        category: 'general',
        questions: generated,
      })
      .returning()
  }

  return NextResponse.json({ challenge })
}
