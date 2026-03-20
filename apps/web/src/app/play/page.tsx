import type { Metadata } from 'next'
import { getSession } from '@/lib/auth'
import { redirect } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  Zap, Calendar, Users, Star, Trophy,
  Target, FlaskConical, Scroll, Globe, Clapperboard,
  UtensilsCrossed, Laptop, Film, Music, Mountain,
  type LucideIcon,
} from 'lucide-react'
import Link from 'next/link'
import { CATEGORIES } from '@/lib/utils'

const CATEGORY_ICON_MAP: Record<string, LucideIcon> = {
  Target, FlaskConical, Scroll, Globe, Clapperboard,
  Trophy, UtensilsCrossed, Laptop, Film, Music, Mountain,
}

const CATEGORY_COLORS: Record<string, string> = {
  general:     'text-blue-400',
  science:     'text-green-400',
  history:     'text-amber-400',
  geography:   'text-teal-400',
  pop_culture: 'text-pink-400',
  sports:      'text-orange-400',
  food_drink:  'text-red-400',
  technology:  'text-cyan-400',
  movies_tv:   'text-violet-400',
  music:       'text-fuchsia-400',
  colorado:    'text-yellow-400',
}

export const metadata: Metadata = {
  title: 'Game Lobby',
  description: 'Choose your trivia challenge — daily questions, custom games, or live multiplayer.',
}

export default async function PlayPage() {
  const session = await getSession()
  if (!session) redirect('/auth/login')

  const today = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  })

  const freeCategories = CATEGORIES.filter((c) => !c.isPremium)
  const proCategories = CATEGORIES.filter((c) => c.isPremium)

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      {/* Page header */}
      <div className="mb-8">
        <h1 className="text-3xl font-extrabold text-white tracking-tight">Game Lobby</h1>
        <p className="text-zinc-500 mt-1 text-sm">{today}</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* ── Main column ─────────────────────────────────────────── */}
        <div className="lg:col-span-2 space-y-6">

          {/* Daily Challenge card */}
          <div className="relative overflow-hidden rounded-2xl border border-amber-500/25 bg-gradient-to-br from-amber-950/60 via-blue-950/40 to-amber-950/50">
            {/* Glow */}
            <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-64 h-20 bg-amber-500/15 blur-2xl rounded-full pointer-events-none" />
            <div className="relative p-7">
              <div className="flex items-center gap-2 mb-4">
                <Calendar className="w-4.5 h-4.5 text-amber-400" />
                <Badge className="bg-amber-900/70 text-amber-300 border-amber-600/50 text-xs font-semibold">
                  Daily Challenge
                </Badge>
              </div>
              <h2 className="text-2xl font-bold mb-1.5 text-white">Today&apos;s Challenge</h2>
              <p className="text-zinc-400 mb-6 text-sm leading-relaxed">
                10 AI-generated questions. One attempt per day. Compete on the global leaderboard.
              </p>
              <Link href="/play/daily">
                <Button
                  size="lg"
                  className="w-full h-14 text-base font-bold bg-amber-500 hover:bg-amber-400 text-zinc-900 shadow-lg shadow-amber-500/20 transition-all"
                >
                  <Zap className="w-5 h-5 mr-2" />
                  Start Daily Challenge
                </Button>
              </Link>
            </div>
          </div>

          {/* Quick Play grid */}
          <div>
            <h2 className="text-base font-semibold text-zinc-300 mb-4">Quick Play by Category</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {freeCategories.map((cat) => {
                const CatIcon = CATEGORY_ICON_MAP[cat.icon] ?? Target
                const iconColor = CATEGORY_COLORS[cat.id] ?? 'text-blue-400'
                return (
                  <Link key={cat.id} href={`/play/game?category=${cat.id}&difficulty=medium`}>
                    <div className="group p-4 rounded-xl border border-white/8 bg-card text-center hover:border-blue-500/50 hover:bg-card/80 transition-all cursor-pointer min-h-[80px] flex flex-col items-center justify-center gap-2">
                      <CatIcon className={`w-6 h-6 transition-transform group-hover:scale-110 ${iconColor}`} />
                      <span className="text-xs font-semibold text-zinc-300 group-hover:text-white transition-colors">
                        {cat.name}
                      </span>
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        </div>

        {/* ── Sidebar ─────────────────────────────────────────────── */}
        <div className="space-y-4">
          {/* Pro categories */}
          <Card className="p-5 border-white/8 bg-card">
            <h3 className="font-semibold mb-4 flex items-center gap-2 text-sm text-zinc-200">
              <Star className="w-4 h-4 text-yellow-400" />
              Pro Categories
            </h3>
            <div className="space-y-1.5">
              {proCategories.map((cat) => {
                const ProIcon = CATEGORY_ICON_MAP[cat.icon] ?? Target
                const iconColor = CATEGORY_COLORS[cat.id] ?? 'text-blue-400'
                return (
                <div
                  key={cat.id}
                  className="flex items-center gap-3 px-3 py-2.5 rounded-lg border border-white/0 hover:border-white/8 hover:bg-white/4 transition-all cursor-pointer group"
                >
                  <ProIcon className={`w-4 h-4 shrink-0 ${iconColor}`} />
                  <span className="flex-1 text-sm font-medium text-zinc-400 group-hover:text-zinc-200 transition-colors truncate">
                    {cat.name}
                  </span>
                  <Badge
                    variant="secondary"
                    className="text-xs shrink-0 bg-yellow-950/60 text-yellow-500 border-yellow-700/40"
                  >
                    Pro
                  </Badge>
                </div>
                )
              })}
            </div>
            <Link href="/pricing" className="mt-4 block">
              <Button
                variant="outline"
                size="sm"
                className="w-full text-xs border-white/10 text-zinc-400 hover:border-white/20 hover:text-white transition-all"
              >
                Upgrade to Pro
              </Button>
            </Link>
          </Card>

          {/* Leaderboard teaser */}
          <Card className="p-5 border-white/8 bg-card">
            <h3 className="font-semibold mb-3 flex items-center gap-2 text-sm text-zinc-200">
              <Trophy className="w-4 h-4 text-blue-400" />
              Leaderboard
            </h3>
            <p className="text-xs text-zinc-500 mb-4 leading-relaxed">
              Top players compete for the daily crown. Your score is posted after you finish.
            </p>
            <Link href="/leaderboard">
              <Button
                variant="outline"
                size="sm"
                className="w-full text-xs border-white/10 text-zinc-400 hover:border-white/20 hover:text-white transition-all"
              >
                View Leaderboard
              </Button>
            </Link>
          </Card>

          {/* Multiplayer coming soon */}
          <Card className="p-5 border-white/8 bg-card">
            <h3 className="font-semibold mb-3 flex items-center gap-2 text-sm text-zinc-200">
              <Users className="w-4 h-4 text-amber-400" />
              Multiplayer
            </h3>
            <p className="text-xs text-zinc-500 mb-3 leading-relaxed">
              Head-to-head games coming in Phase 2!
            </p>
            <Button
              variant="outline"
              size="sm"
              className="w-full text-xs border-white/8 text-zinc-600 cursor-not-allowed opacity-60"
              disabled
            >
              Coming Soon
            </Button>
          </Card>
        </div>
      </div>
    </div>
  )
}
