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
      html: `<!DOCTYPE html>
<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>AI Trivia Arena</title>
</head>
<body bgcolor="#0f0f23" style="margin:0;padding:0;background-color:#0f0f23;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;">
  <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" bgcolor="#0f0f23" style="background-color:#0f0f23;">
    <tr>
      <td align="center" style="padding:40px 20px;">
        <!--[if mso]><table role="presentation" cellspacing="0" cellpadding="0" border="0" width="600" align="center"><tr><td><![endif]-->
        <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="600" style="max-width:600px;width:100%;">
          <!-- Header -->
          <tr>
            <td bgcolor="#1a1a3e" align="center" style="background-color:#1a1a3e;padding:36px 30px;border-radius:16px 16px 0 0;border:1px solid #2d2d5e;border-bottom:none;">
              <h1 style="color:#3B82F6;margin:0;font-size:28px;font-weight:700;letter-spacing:2px;">AI TRIVIA ARENA</h1>
              <p style="color:#6366f1;margin:8px 0 0;font-size:13px;letter-spacing:1.5px;text-transform:uppercase;">Powered by Epic AI</p>
            </td>
          </tr>
          <!-- Body -->
          <tr>
            <td bgcolor="#12122a" style="background-color:#12122a;padding:36px 30px;border-left:1px solid #2d2d5e;border-right:1px solid #2d2d5e;">
              <p style="color:#e2e8f0;font-size:18px;font-weight:600;margin:0 0 8px;">Ready to play?</p>
              <p style="color:#94a3b8;font-size:15px;line-height:1.7;margin:0 0 28px;">Click below to sign in to your account. This link expires in <strong style="color:#e2e8f0;">15 minutes</strong>.</p>
              <!-- CTA Button -->
              <table role="presentation" cellspacing="0" cellpadding="0" border="0" align="center" style="margin:0 auto 28px;">
                <tr>
                  <td bgcolor="#3B82F6" style="background-color:#3B82F6;border-radius:8px;">
                    <a href="${magicUrl}" target="_blank" style="display:inline-block;padding:15px 36px;color:#ffffff;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif;font-weight:700;font-size:16px;text-decoration:none;letter-spacing:0.3px;">Sign In to Play</a>
                  </td>
                </tr>
              </table>
              <!-- Fallback link -->
              <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" bgcolor="#1a1a3e" style="background-color:#1a1a3e;border-radius:8px;border:1px solid #2d2d5e;">
                <tr>
                  <td style="padding:14px 16px;">
                    <p style="margin:0 0 6px;color:#6b7280;font-size:11px;text-transform:uppercase;letter-spacing:1px;">Or copy this link</p>
                    <p style="margin:0;color:#60a5fa;font-size:12px;word-break:break-all;">${magicUrl}</p>
                  </td>
                </tr>
              </table>
              <p style="color:#4b5563;font-size:13px;margin:20px 0 0;">If you didn&apos;t request this login link, you can safely ignore this email.</p>
            </td>
          </tr>
          <!-- Footer -->
          <tr>
            <td bgcolor="#0f0f23" align="center" style="background-color:#0f0f23;padding:24px 30px;border-radius:0 0 16px 16px;border:1px solid #2d2d5e;border-top:none;">
              <p style="color:#3B82F6;font-size:13px;font-weight:600;margin:0 0 4px;">AI Trivia Arena</p>
              <p style="color:#374151;font-size:12px;margin:0;">Epic AI &middot; Canon City, Colorado</p>
            </td>
          </tr>
        </table>
        <!--[if mso]></td></tr></table><![endif]-->
      </td>
    </tr>
  </table>
</body>
</html>`,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Magic link error:', error)
    return NextResponse.json({ error: 'Failed to send login link' }, { status: 500 })
  }
}
