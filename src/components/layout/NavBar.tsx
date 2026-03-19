'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Brain } from 'lucide-react'

interface NavBarProps {
  user?: { email: string; name: string | null } | null
}

export function NavBar({ user }: NavBarProps) {
  const router = useRouter()

  const handleLogout = async () => {
    await fetch('/api/auth/logout', { method: 'POST' })
    router.push('/')
    router.refresh()
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur border-b border-border h-16">
      <div className="max-w-6xl mx-auto px-4 h-full flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl">
          <Brain className="w-6 h-6 text-blue-500" />
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            AI Trivia Arena
          </span>
        </Link>

        <div className="flex items-center gap-2">
          <Link href="/play">
            <Button variant="ghost" size="sm">
              Play
            </Button>
          </Link>
          <Link href="/leaderboard">
            <Button variant="ghost" size="sm">
              Leaderboard
            </Button>
          </Link>

          {user ? (
            <>
              <Link href="/profile">
                <Button variant="ghost" size="sm">
                  Profile
                </Button>
              </Link>
              <Button variant="outline" size="sm" onClick={handleLogout} className="min-h-[44px]">
                Sign Out
              </Button>
            </>
          ) : (
            <Link href="/auth/login">
              <Button size="sm" className="min-h-[44px] bg-blue-600 hover:bg-blue-700">
                Sign In
              </Button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  )
}
