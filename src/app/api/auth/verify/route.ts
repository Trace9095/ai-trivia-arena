import { NextRequest, NextResponse } from 'next/server'
import { verifyMagicLink, createSession, setSessionCookie } from '@/lib/auth'

export async function GET(req: NextRequest) {
  const token = req.nextUrl.searchParams.get('token')
  if (!token) {
    return NextResponse.redirect(new URL('/auth/login?error=invalid', req.url))
  }

  const result = await verifyMagicLink(token)
  if (!result) {
    return NextResponse.redirect(new URL('/auth/login?error=expired', req.url))
  }

  const sessionToken = await createSession(result.userId)
  await setSessionCookie(sessionToken)

  return NextResponse.redirect(new URL('/play', req.url))
}
