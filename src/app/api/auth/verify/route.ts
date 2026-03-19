import { NextRequest, NextResponse } from 'next/server'
import { verifyMagicLink, createSession, setSessionCookie } from '@/lib/auth'

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl
  const token = searchParams.get('token')
  const isMobile = searchParams.get('platform') === 'mobile'

  if (!token) {
    if (isMobile) return NextResponse.json({ error: 'Invalid token' }, { status: 400 })
    return NextResponse.redirect(new URL('/auth/login?error=invalid', req.url))
  }

  const result = await verifyMagicLink(token)
  if (!result) {
    if (isMobile) return NextResponse.json({ error: 'Link expired' }, { status: 400 })
    return NextResponse.redirect(new URL('/auth/login?error=expired', req.url))
  }

  const sessionToken = await createSession(result.userId)

  if (isMobile) {
    // Redirect to deep link — app handles token storage
    return NextResponse.redirect(
      new URL(`aitriviaarena://auth?sessionToken=${sessionToken}`, req.url)
    )
  }

  await setSessionCookie(sessionToken)
  return NextResponse.redirect(new URL('/play', req.url))
}
