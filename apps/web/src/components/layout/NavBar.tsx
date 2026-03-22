'use client'

import Link from 'next/link'
import { useRouter, usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Brain, Trophy, CreditCard, Menu, X, Zap, Tv, Smartphone, BookOpen } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useState } from 'react'

interface NavBarProps {
  user?: { email: string; name: string | null } | null
}

const NAV_ITEMS = [
  { href: '/play', label: 'Play', icon: Zap },
  { href: '/leaderboard', label: 'Leaderboard', icon: Trophy },
  { href: '/pricing', label: 'Pricing', icon: CreditCard },
  { href: '/tv', label: 'TV Mode', icon: Tv },
  { href: '/join', label: 'Join Game', icon: Smartphone },
  { href: '/blog', label: 'Blog', icon: BookOpen },
] as const

export function NavBar({ user }: NavBarProps) {
  const router = useRouter()
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)

  const handleLogout = async () => {
    await fetch('/api/auth/logout', { method: 'POST' })
    router.push('/')
    router.refresh()
  }

  const navLink = (href: string, label: string) => (
    <Link href={href} key={href}>
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
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 will-change-transform border-b border-white/8 bg-background" style={{ transform: "translateZ(0)", paddingTop: "env(safe-area-inset-top, 0px)", height: "calc(4rem + env(safe-area-inset-top, 0px))" }}>
        <div className="max-w-6xl mx-auto px-4 h-full flex items-center justify-between gap-4">
          {/* Brand */}
          <Link
            href="/"
            className="flex items-center gap-2.5 font-bold text-lg shrink-0 group"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-amber-500 flex items-center justify-center shadow-lg shadow-amber-500/25 group-hover:shadow-amber-500/40 transition-shadow">
              <Brain className="w-4 h-4 text-white" />
            </div>
            <span className="hidden sm:inline bg-gradient-to-r from-blue-400 via-amber-400 to-yellow-300 bg-clip-text text-transparent font-extrabold tracking-tight">
              AI Trivia Arena
            </span>
          </Link>

          {/* Center nav links — desktop only */}
          <div className="hidden sm:flex items-center gap-0.5">
            {navLink('/play', 'Play')}
            {navLink('/leaderboard', 'Leaderboard')}
            {navLink('/pricing', 'Pricing')}
            {navLink('/blog', 'Blog')}
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-1.5">
            {/* Desktop-only icons */}
            <Link href="/leaderboard" className="hidden sm:inline-flex">
              <Button
                variant="ghost"
                size="sm"
                className="min-h-[44px] min-w-[44px] px-2.5 text-zinc-400 hover:text-white"
              >
                <Trophy className="w-4 h-4" />
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
                  className="hidden sm:inline-flex min-h-[44px] border-white/12 text-zinc-400 hover:text-white hover:border-white/25 hover:bg-white/5 transition-all"
                >
                  Sign Out
                </Button>
              </>
            ) : (
              <Link href="/auth/login" className="hidden sm:inline-flex">
                <Button
                  size="sm"
                  className="min-h-[44px] px-4 bg-amber-500 hover:bg-amber-400 text-zinc-900 font-semibold shadow-lg shadow-amber-500/20 hover:shadow-amber-500/35 transition-all"
                >
                  Sign In
                </Button>
              </Link>
            )}

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen((v) => !v)}
              className="sm:hidden min-h-[44px] min-w-[44px] flex items-center justify-center text-zinc-400 hover:text-white transition-colors rounded-lg hover:bg-white/6"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile slide-down menu */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 sm:hidden"
          onClick={() => setMobileOpen(false)}
          aria-hidden="true"
        />
      )}
      <div
        className={cn(
          'fixed top-16 left-0 right-0 z-40 sm:hidden bg-background border-b border-white/8 transition-all duration-200',
          mobileOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none',
        )}
      >
        <nav className="px-4 py-3 space-y-1">
          {NAV_ITEMS.map(({ href, label, icon: Icon }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMobileOpen(false)}
              className={cn(
                'flex items-center gap-3 min-h-[44px] px-3 rounded-xl text-sm font-medium transition-colors',
                pathname === href
                  ? 'text-white bg-white/10'
                  : 'text-zinc-400 hover:text-white hover:bg-white/6',
              )}
            >
              <Icon className="w-4 h-4 shrink-0" />
              {label}
            </Link>
          ))}

          <div className="h-px bg-white/8 my-2" />

          {user ? (
            <>
              <Link
                href="/profile"
                onClick={() => setMobileOpen(false)}
                className="flex items-center gap-3 min-h-[44px] px-3 rounded-xl text-sm font-medium text-zinc-400 hover:text-white hover:bg-white/6 transition-colors"
              >
                {user.name ?? user.email.split('@')[0]}
              </Link>
              <button
                onClick={() => { setMobileOpen(false); handleLogout() }}
                className="w-full flex items-center gap-3 min-h-[44px] px-3 rounded-xl text-sm font-medium text-zinc-400 hover:text-white hover:bg-white/6 transition-colors"
              >
                Sign Out
              </button>
            </>
          ) : (
            <Link
              href="/auth/login"
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center min-h-[44px] px-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-zinc-900 text-sm font-semibold transition-all"
            >
              Sign In
            </Link>
          )}
        </nav>
      </div>
    </>
  )
}
