import { getDb } from '@/db'
import { questionPool } from '@/db/schema'
import { eq, and, asc, inArray, sql } from 'drizzle-orm'
import { type GeneratedQuestion, generateQuestions } from '@/lib/claude'

/**
 * Pull questions from the pool for a category/difficulty.
 * Falls back to Claude generation if the pool is empty.
 * Marks pulled questions as used to avoid immediate repeats.
 */
export async function getQuestionsFromPool(
  category: string,
  difficulty: string,
  count: number
): Promise<GeneratedQuestion[]> {
  const db = getDb()

  // Pull least-recently-used questions from the pool
  const pooled = await db
    .select()
    .from(questionPool)
    .where(and(eq(questionPool.category, category), eq(questionPool.difficulty, difficulty)))
    .orderBy(asc(questionPool.timesUsed), asc(sql`COALESCE(${questionPool.lastUsedAt}, '1970-01-01'::timestamp)`))
    .limit(count)

  if (pooled.length >= count) {
    // Mark as used
    const ids = pooled.map((q) => q.id)
    await db
      .update(questionPool)
      .set({ timesUsed: sql`${questionPool.timesUsed} + 1`, lastUsedAt: new Date() })
      .where(inArray(questionPool.id, ids))

    return pooled.map((q) => ({
      questionText: q.questionText,
      correctAnswer: q.correctAnswer,
      wrongAnswers: q.wrongAnswers,
      explanation: q.explanation,
    }))
  }

  // Not enough in pool — generate fresh from Claude
  const fresh = await generateQuestions(category, difficulty, count)

  // Save fresh questions to pool for future use
  if (fresh.length > 0) {
    await db
      .insert(questionPool)
      .values(
        fresh.map((q) => ({
          category,
          difficulty,
          questionText: q.questionText,
          correctAnswer: q.correctAnswer,
          wrongAnswers: q.wrongAnswers,
          explanation: q.explanation,
          timesUsed: 1,
          lastUsedAt: new Date(),
        }))
      )
      .onConflictDoNothing()
  }

  return fresh
}

export async function getPoolStats(): Promise<
  Array<{ category: string; difficulty: string; count: number; avgTimesUsed: number }>
> {
  const db = getDb()
  const rows = await db
    .select({
      category: questionPool.category,
      difficulty: questionPool.difficulty,
      count: sql<number>`count(*)::int`,
      avgTimesUsed: sql<number>`round(avg(${questionPool.timesUsed})::numeric, 1)::float`,
    })
    .from(questionPool)
    .groupBy(questionPool.category, questionPool.difficulty)
    .orderBy(questionPool.category, questionPool.difficulty)

  return rows
}
