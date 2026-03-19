import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { NavBar } from '@/components/layout/NavBar'
import { Footer } from '@/components/layout/Footer'
import { getSession } from '@/lib/auth'
import { getDb } from '@/db'
import { users } from '@/db/schema'
import { eq } from 'drizzle-orm'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AI Trivia Arena — Questions That Never Repeat',
  description: 'Every question is generated fresh by Claude AI. Compete daily, climb the leaderboard.',
  openGraph: {
    title: 'AI Trivia Arena',
    description: 'AI-powered trivia that never repeats. Compete daily.',
    type: 'website',
  },
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
        <NavBar user={user} />
        <main className="flex-1 pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
