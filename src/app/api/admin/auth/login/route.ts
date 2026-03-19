import { NextRequest, NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'
import { getDb } from '@/db'
import { users, sessions } from '@/db/schema'
import { eq, sql } from 'drizzle-orm'
import { setSessionCookie } from '@/lib/auth'
import { seedAdminIfNeeded } from '@/lib/seed-admin'
import { nanoid } from 'nanoid'

// In-memory rate limiter: max 5 attempts per minute per IP
const rateLimitMap = new Map<string, { count: number; resetAt: number }>()

function checkRateLimit(ip: string): boolean {
  const now = Date.now()
  const entry = rateLimitMap.get(ip)

  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + 60_000 })
    return true
  }

  if (entry.count >= 5) return false
  entry.count++
  return true
}

export async function POST(request: NextRequest) {
  const ip =
    request.headers.get('x-forwarded-for') ??
    request.headers.get('x-real-ip') ??
    'unknown'

  if (!checkRateLimit(ip)) {
    return NextResponse.json(
      { error: 'Too many attempts. Try again in a minute.' },
      { status: 429 }
    )
  }

  let email: string
  let password: string

  try {
    const body = await request.json() as { email?: unknown; password?: unknown }
    email = String(body.email ?? '').trim().toLowerCase()
    password = String(body.password ?? '')
  } catch {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 })
  }

  if (!email || !password) {
    return NextResponse.json(
      { error: 'Email and password required' },
      { status: 400 }
    )
  }

  await seedAdminIfNeeded()

  const db = getDb()
  const [user] = await db
    .select()
    .from(users)
    .where(eq(sql`lower(${users.email})`, email))
    .limit(1)

  if (!user || !user.passwordHash) {
    return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 })
  }

  const isValid = await bcrypt.compare(password, user.passwordHash)
  if (!isValid) {
    return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 })
  }

  const token = await createAdminSession(user.id)
  await setSessionCookie(token)

  return NextResponse.json({ success: true })
}

async function createAdminSession(userId: string): Promise<string> {
  const db = getDb()
  const token = nanoid(64)
  const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000) // 7 days

  await db.insert(sessions).values({ userId, token, expiresAt })
  return token
}
