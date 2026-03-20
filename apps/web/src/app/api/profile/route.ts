import { NextRequest, NextResponse } from 'next/server'
import { getSessionFromRequest } from '@/lib/auth'
import { getDb } from '@/db'
import { users } from '@/db/schema'
import { eq } from 'drizzle-orm'

export async function GET(req: NextRequest) {
  const session = await getSessionFromRequest(req)
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const db = getDb()
  const [user] = await db.select().from(users).where(eq(users.id, session.userId)).limit(1)
  if (!user) return NextResponse.json({ error: 'User not found' }, { status: 404 })

  return NextResponse.json({ user })
}

export async function PUT(req: NextRequest) {
  const session = await getSessionFromRequest(req)
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const { name, avatarUrl } = (await req.json()) as { name?: string; avatarUrl?: string }

  const db = getDb()
  const [updated] = await db
    .update(users)
    .set({ name, avatarUrl })
    .where(eq(users.id, session.userId))
    .returning()

  return NextResponse.json({ user: updated })
}
