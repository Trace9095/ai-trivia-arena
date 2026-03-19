import { cookies } from 'next/headers'
import { getDb } from '@/db'
import { users, sessions, magicLinks } from '@/db/schema'
import { eq, and, gt } from 'drizzle-orm'
import { nanoid } from 'nanoid'

const SESSION_COOKIE = 'trivia_session'
const SESSION_DURATION_MS = 30 * 24 * 60 * 60 * 1000 // 30 days

export async function createMagicLink(email: string): Promise<string> {
  const db = getDb()
  const token = nanoid(32)
  const expiresAt = new Date(Date.now() + 15 * 60 * 1000) // 15 minutes

  await db.insert(magicLinks).values({ email, token, expiresAt })
  return token
}

export async function verifyMagicLink(token: string): Promise<{ userId: string; email: string } | null> {
  const db = getDb()
  const [link] = await db
    .select()
    .from(magicLinks)
    .where(and(eq(magicLinks.token, token), gt(magicLinks.expiresAt, new Date())))
    .limit(1)

  if (!link || link.usedAt) return null

  // Mark as used
  await db.update(magicLinks).set({ usedAt: new Date() }).where(eq(magicLinks.id, link.id))

  // Find or create user
  let [user] = await db.select().from(users).where(eq(users.email, link.email)).limit(1)
  if (!user) {
    const [created] = await db.insert(users).values({ email: link.email }).returning()
    user = created
  }

  return { userId: user.id, email: user.email }
}

export async function createSession(userId: string): Promise<string> {
  const db = getDb()
  const token = nanoid(64)
  const expiresAt = new Date(Date.now() + SESSION_DURATION_MS)

  await db.insert(sessions).values({ userId, token, expiresAt })
  return token
}

export async function getSession(): Promise<{ userId: string; email: string } | null> {
  try {
    const cookieStore = await cookies()
    const token = cookieStore.get(SESSION_COOKIE)?.value
    if (!token) return null

    const db = getDb()
    const [session] = await db
      .select({ session: sessions, user: users })
      .from(sessions)
      .innerJoin(users, eq(sessions.userId, users.id))
      .where(and(eq(sessions.token, token), gt(sessions.expiresAt, new Date())))
      .limit(1)

    if (!session) return null
    return { userId: session.session.userId, email: session.user.email }
  } catch {
    return null
  }
}

export async function setSessionCookie(token: string): Promise<void> {
  const cookieStore = await cookies()
  cookieStore.set(SESSION_COOKIE, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: SESSION_DURATION_MS / 1000,
    path: '/',
  })
}

export async function clearSessionCookie(): Promise<void> {
  const cookieStore = await cookies()
  cookieStore.delete(SESSION_COOKIE)
}

export async function requireAuth(): Promise<{ userId: string; email: string }> {
  const session = await getSession()
  if (!session) {
    throw new Error('Unauthorized')
  }
  return session
}
