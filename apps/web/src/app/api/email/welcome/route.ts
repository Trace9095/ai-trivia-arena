import { NextResponse } from 'next/server'
import { render } from '@react-email/components'
import { getResend } from '@/lib/email'
import { Welcome1 } from '@/lib/emails/welcome-1'
import { Welcome2 } from '@/lib/emails/welcome-2'
import { Welcome3 } from '@/lib/emails/welcome-3'
import { Welcome4 } from '@/lib/emails/welcome-4'
import { Welcome5 } from '@/lib/emails/welcome-5'

const FROM = process.env['AUTH_FROM_EMAIL'] ?? 'AI Trivia Arena <noreply@aitriviaarena.com>'
const APP_URL = process.env['NEXT_PUBLIC_APP_URL'] ?? 'https://aitriviaarena.com'

const SEQUENCES = [
  {
    step: 1,
    subject: 'Welcome to AI Trivia Arena — the smartest game in the bar',
    component: Welcome1,
  },
  {
    step: 2,
    subject: 'How AI question generation works (it\'s different)',
    component: Welcome2,
  },
  {
    step: 3,
    subject: 'How The Rusty Anchor doubled their Wednesday night crowd',
    component: Welcome3,
  },
  {
    step: 4,
    subject: 'Pro: unlimited games, custom branding, analytics',
    component: Welcome4,
  },
  {
    step: 5,
    subject: 'Two weeks in — how many games have you hosted?',
    component: Welcome5,
  },
]

export async function POST(request: Request) {
  try {
    const body = await request.json() as {
      to: string
      name?: string
      step?: number
      unsubscribeUrl?: string
    }

    const { to, name = 'there', step = 1, unsubscribeUrl } = body

    if (!to) {
      return NextResponse.json({ error: 'Missing required field: to' }, { status: 400 })
    }

    const sequence = SEQUENCES.find((s) => s.step === step)
    if (!sequence) {
      return NextResponse.json({ error: `Invalid step: ${step}. Must be 1–5.` }, { status: 400 })
    }

    const unsubUrl = unsubscribeUrl ?? `${APP_URL}/unsubscribe`
    const html = await render(
      sequence.component({ name, appUrl: APP_URL, unsubscribeUrl: unsubUrl })
    )

    const resend = getResend()
    const { data, error } = await resend.emails.send({
      from: FROM,
      to,
      subject: sequence.subject,
      html,
      headers: {
        'List-Unsubscribe': `<${unsubUrl}>`,
        'List-Unsubscribe-Post': 'List-Unsubscribe=One-Click',
      },
    })

    if (error) {
      console.error('[api/email/welcome] Resend error', error)
      return NextResponse.json({ error }, { status: 400 })
    }

    return NextResponse.json({ id: data?.id, step })
  } catch (err) {
    console.error('[api/email/welcome] Unexpected error', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
