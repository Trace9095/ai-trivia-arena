import { NextRequest, NextResponse } from 'next/server'
import { createMagicLink } from '@/lib/auth'
import { Resend } from 'resend'

let _resend: Resend | null = null
function getResend() {
  if (!_resend) _resend = new Resend(process.env.RESEND_API_KEY!)
  return _resend
}

export async function POST(req: NextRequest) {
  try {
    const { email, platform } = (await req.json()) as { email: string; platform?: string }
    if (!email || !email.includes('@')) {
      return NextResponse.json({ error: 'Valid email required' }, { status: 400 })
    }

    const token = await createMagicLink(email)
    const appUrl = process.env.NEXT_PUBLIC_APP_URL ?? 'http://localhost:3000'
    const platformParam = platform === 'mobile' ? '&platform=mobile' : ''
    const magicUrl = `${appUrl}/api/auth/verify?token=${token}${platformParam}`

    const resend = getResend()
    const fromEmail = process.env.RESEND_FROM_EMAIL ?? 'trivia@epicai.ai'

    await resend.emails.send({
      from: `AI Trivia Arena <${fromEmail}>`,
      to: email,
      subject: 'Your AI Trivia Arena login link',
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; background: #0f0f23; color: #fff; padding: 40px; border-radius: 12px;">
          <h1 style="color: #3B82F6; margin-bottom: 8px;">AI Trivia Arena</h1>
          <p style="color: #a0aec0; margin-bottom: 32px;">Click below to sign in. Link expires in 15 minutes.</p>
          <a href="${magicUrl}" style="background: linear-gradient(135deg, #3B82F6, #8B5CF6); color: white; padding: 16px 32px; border-radius: 8px; text-decoration: none; font-weight: bold; display: inline-block; margin-bottom: 24px;">
            Sign In to Play
          </a>
          <p style="color: #718096; font-size: 14px;">If you didn't request this, ignore this email.</p>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Magic link error:', error)
    return NextResponse.json({ error: 'Failed to send login link' }, { status: 500 })
  }
}
