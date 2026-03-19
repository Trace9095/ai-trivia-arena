import { NextRequest, NextResponse } from 'next/server'
import { generateQuestions } from '@/lib/claude'
import { getDb } from '@/db'
import { questions } from '@/db/schema'
import { getSession } from '@/lib/auth'

export async function POST(req: NextRequest) {
  const session = await getSession()
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { category, difficulty, count = 10 } = (await req.json()) as {
    category: string
    difficulty: string
    count?: number
  }

  if (!category || !difficulty) {
    return NextResponse.json({ error: 'Category and difficulty required' }, { status: 400 })
  }

  const generated = await generateQuestions(category, difficulty, Math.min(count, 20))

  const db = getDb()
  const inserted = await db
    .insert(questions)
    .values(
      generated.map((q) => ({
        category,
        difficulty,
        questionText: q.questionText,
        correctAnswer: q.correctAnswer,
        wrongAnswers: q.wrongAnswers,
        explanation: q.explanation,
      }))
    )
    .returning()

  return NextResponse.json({ questions: inserted })
}
