import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { NavBar } from '@/components/layout/NavBar'
import { Footer } from '@/components/layout/Footer'
import { NavWrapper } from '@/components/layout/NavWrapper'
import { getSession } from '@/lib/auth'
import { getDb } from '@/db'
import { users } from '@/db/schema'
import { eq } from 'drizzle-orm'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] })

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
}

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'https://aitriviaarena.com'),
  title: {
    default: 'AI Trivia Arena — Questions That Never Repeat',
    template: '%s | AI Trivia Arena',
  },
  description: 'Every question is generated fresh by Claude AI. Compete in daily challenges, climb the global leaderboard, and never see the same question twice.',
  openGraph: {
    title: 'AI Trivia Arena — Questions That Never Repeat',
    description: 'AI-powered trivia that never repeats. Compete daily, climb the global leaderboard.',
    type: 'website',
    siteName: 'AI Trivia Arena',
    locale: 'en_US',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'AI Trivia Arena — Questions That Never Repeat' }],
    url: '/',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Trivia Arena — Questions That Never Repeat',
    description: 'AI-powered trivia that never repeats. Compete daily, climb the global leaderboard.',
    images: [{ url: '/twitter-card.png', width: 1200, height: 600, alt: 'AI Trivia Arena' }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#7C3AED' },
    { media: '(prefers-color-scheme: light)', color: '#7C3AED' },
  ],
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  let user: { email: string; name: string | null } | null = null
  try {
    const session = await getSession()
    if (session) {
      const db = getDb()
      const [dbUser] = await db
        .select({ email: users.email, name: users.name })
        .from(users)
        .where(eq(users.id, session.userId))
        .limit(1)
      if (dbUser) user = dbUser
    }
  } catch {
    // ignore auth errors at layout level
  }

  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} dark`}>
      <body className="antialiased bg-background text-foreground min-h-screen flex flex-col">
        <NavWrapper nav={<NavBar user={user} />} footer={<Footer />}>
          {children}
        </NavWrapper>
      </body>
    </html>
  )
}
