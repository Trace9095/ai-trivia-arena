'use client'

import Link from 'next/link'
import { useRouter, usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Brain, Trophy, CreditCard } from 'lucide-react'
import { cn } from '@/lib/utils'

interface NavBarProps {
  user?: { email: string; name: string | null } | null
}

export function NavBar({ user }: NavBarProps) {
  const router = useRouter()
  const pathname = usePathname()

  const handleLogout = async () => {
    await fetch('/api/auth/logout', { method: 'POST' })
    router.push('/')
    router.refresh()
  }

  const navLink = (href: string, label: string) => (
    <Link href={href}>
      <Button
        variant="ghost"
        size="sm"
        className={cn(
          'min-h-[44px] text-sm font-medium transition-colors',
          pathname === href
            ? 'text-white bg-white/8'
            : 'text-zinc-400 hover:text-white hover:bg-white/6',
        )}
      >
        {label}
      </Button>
    </Link>
  )

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-16 border-b border-white/8 bg-background/80 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-4 h-full flex items-center justify-between gap-4">
        {/* Brand */}
        <Link
          href="/"
          className="flex items-center gap-2.5 font-bold text-lg shrink-0 group"
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center shadow-lg shadow-violet-500/25 group-hover:shadow-violet-500/40 transition-shadow">
            <Brain className="w-4.5 h-4.5 text-white" />
          </div>
          <span className="hidden sm:inline bg-gradient-to-r from-blue-400 via-violet-400 to-purple-400 bg-clip-text text-transparent font-extrabold tracking-tight">
            AI Trivia Arena
          </span>
        </Link>

        {/* Center nav links */}
        <div className="hidden sm:flex items-center gap-0.5">
          {navLink('/play', 'Play')}
          {navLink('/leaderboard', 'Leaderboard')}
          {navLink('/pricing', 'Pricing')}
        </div>

        {/* Right actions */}
        <div className="flex items-center gap-1.5">
          {/* Mobile-only nav icons */}
          <Link href="/leaderboard" className="sm:hidden">
            <Button
              variant="ghost"
              size="sm"
              className="min-h-[44px] min-w-[44px] px-2.5 text-zinc-400 hover:text-white"
            >
              <Trophy className="w-4 h-4" />
            </Button>
          </Link>
          <Link href="/pricing" className="sm:hidden">
            <Button
              variant="ghost"
              size="sm"
              className="min-h-[44px] min-w-[44px] px-2.5 text-zinc-400 hover:text-white"
            >
              <CreditCard className="w-4 h-4" />
            </Button>
          </Link>

          {user ? (
            <>
              <Link href="/profile" className="hidden sm:inline-flex">
                <Button
                  variant="ghost"
                  size="sm"
                  className="min-h-[44px] text-zinc-400 hover:text-white"
                >
                  {user.name ?? user.email.split('@')[0]}
                </Button>
              </Link>
              <Button
                variant="outline"
                size="sm"
                onClick={handleLogout}
                className="min-h-[44px] border-white/12 text-zinc-400 hover:text-white hover:border-white/25 hover:bg-white/5 transition-all"
              >
                Sign Out
              </Button>
            </>
          ) : (
            <Link href="/auth/login">
              <Button
                size="sm"
                className="min-h-[44px] px-4 bg-violet-600 hover:bg-violet-500 text-white font-semibold shadow-lg shadow-violet-500/20 hover:shadow-violet-500/35 transition-all"
              >
                Sign In
              </Button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  )
}
