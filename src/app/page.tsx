'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  Brain, Trophy, Zap, Users, Star, Flame, Tv, Smartphone, ChevronRight,
  Target, FlaskConical, Scroll, Globe, Clapperboard, UtensilsCrossed,
  Laptop, Film, Music, Mountain, type LucideIcon,
} from 'lucide-react'
import { CATEGORIES } from '@/lib/utils'
import { cn } from '@/lib/utils'

const CATEGORY_ICON_MAP: Record<string, LucideIcon> = {
  Target, FlaskConical, Scroll, Globe, Clapperboard,
  Trophy, UtensilsCrossed, Laptop, Film, Music, Mountain,
}

// Per-category accent colors for the category grid
const CATEGORY_COLORS: Record<string, { icon: string; border: string; glow: string }> = {
  general:     { icon: 'text-blue-400',   border: 'hover:border-blue-500/60',   glow: 'hover:shadow-blue-500/10' },
  science:     { icon: 'text-green-400',  border: 'hover:border-green-500/60',  glow: 'hover:shadow-green-500/10' },
  history:     { icon: 'text-amber-400',  border: 'hover:border-amber-500/60',  glow: 'hover:shadow-amber-500/10' },
  geography:   { icon: 'text-teal-400',   border: 'hover:border-teal-500/60',   glow: 'hover:shadow-teal-500/10' },
  pop_culture: { icon: 'text-pink-400',   border: 'hover:border-pink-500/60',   glow: 'hover:shadow-pink-500/10' },
  sports:      { icon: 'text-orange-400', border: 'hover:border-orange-500/60', glow: 'hover:shadow-orange-500/10' },
  food_drink:  { icon: 'text-red-400',    border: 'hover:border-red-500/60',    glow: 'hover:shadow-red-500/10' },
  technology:  { icon: 'text-cyan-400',   border: 'hover:border-cyan-500/60',   glow: 'hover:shadow-cyan-500/10' },
  movies_tv:   { icon: 'text-violet-400', border: 'hover:border-violet-500/60', glow: 'hover:shadow-violet-500/10' },
  music:       { icon: 'text-fuchsia-400',border: 'hover:border-fuchsia-500/60',glow: 'hover:shadow-fuchsia-500/10' },
  colorado:    { icon: 'text-yellow-400', border: 'hover:border-yellow-500/60', glow: 'hover:shadow-yellow-500/10' },
}

function AnimatedCounter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [val, setVal] = useState(0)
  useEffect(() => {
    let start = 0
    const step = Math.ceil(target / 40)
    const timer = setInterval(() => {
      start = Math.min(start + step, target)
      setVal(start)
      if (start >= target) clearInterval(timer)
    }, 40)
    return () => clearInterval(timer)
  }, [target])
  return <>{val.toLocaleString()}{suffix}</>
}

interface StatsData {
  totalPlayers: number
  totalAnswers: number
  activeTvGames: number
  tvGamesToday: number
}

const HOW_IT_WORKS = [
  {
    step: '01',
    icon: Brain,
    title: 'Pick a Topic',
    desc: 'Choose from 11 categories — science, history, pop culture, sports, Colorado & more.',
    color: 'text-blue-400',
    bg: 'bg-blue-500/10 border-blue-500/20',
  },
  {
    step: '02',
    icon: Zap,
    title: 'AI Generates Questions',
    desc: 'Claude creates fresh questions instantly. Every game is unique — no repeats, ever.',
    color: 'text-amber-400',
    bg: 'bg-amber-500/10 border-amber-500/20',
  },
  {
    step: '03',
    icon: Trophy,
    title: 'Compete & Climb',
    desc: 'Score points for speed and accuracy. Battle for the daily leaderboard crown.',
    color: 'text-yellow-400',
    bg: 'bg-yellow-500/10 border-yellow-500/20',
  },
]

export default function LandingPage() {
  const [stats, setStats] = useState<StatsData | null>(null)

  useEffect(() => {
    fetch('/api/stats')
      .then((r) => r.json())
      .then((d: StatsData) => setStats(d))
      .catch(() => {})
  }, [])

  return (
    <div className="flex flex-col">

      {/* ── Hero ─────────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-grid-pattern">
        {/* Radial vignette to fade the grid at edges */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 80% 60% at 50% 0%, transparent 30%, var(--background) 100%)',
          }}
        />

        {/* Ambient glow blobs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            className="absolute top-0 left-1/4 w-[600px] h-[400px] rounded-full opacity-30 blur-3xl"
            style={{ background: 'radial-gradient(circle, #3B82F6 0%, transparent 70%)', animationDuration: '8s' }}
          />
          <div
            className="absolute top-10 right-1/4 w-[500px] h-[350px] rounded-full opacity-25 blur-3xl animate-pulse"
            style={{ background: 'radial-gradient(circle, #D4A853 0%, transparent 70%)', animationDuration: '10s', animationDelay: '2s' }}
          />
        </div>

        <div className="relative max-w-6xl mx-auto px-4 pt-28 pb-20 text-center">
          <Badge className="mb-6 bg-amber-950/80 text-amber-300 border-amber-700/60 inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold tracking-wide backdrop-blur-sm">
            <Zap className="w-3 h-3" />
            Powered by Claude AI
          </Badge>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-6 leading-[1.1] tracking-tight">
            AI Trivia That{' '}
            <span className="bg-gradient-to-r from-blue-400 via-amber-400 to-yellow-300 bg-clip-text text-transparent">
              Never Repeats
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-zinc-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            Every question is generated fresh by Claude AI. No question banks, no memorization — just pure trivia mastery.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/play">
              <Button
                size="lg"
                className="min-h-[52px] px-8 text-base font-bold w-full sm:w-auto bg-amber-500 hover:bg-amber-400 text-zinc-900 shadow-xl shadow-amber-500/25 hover:shadow-amber-500/40 transition-all"
              >
                <Zap className="w-4.5 h-4.5 mr-2" />
                Play Daily Challenge
              </Button>
            </Link>
            <Link href="/tv">
              <Button
                size="lg"
                variant="outline"
                className="min-h-[52px] px-8 text-base font-bold w-full sm:w-auto border-white/12 text-zinc-300 hover:bg-white/6 hover:border-white/20 hover:text-white transition-all"
              >
                <Tv className="w-4.5 h-4.5 mr-2" />
                Host a Game
              </Button>
            </Link>
            <Link href="/join">
              <Button
                size="lg"
                variant="outline"
                className="min-h-[52px] px-8 text-base w-full sm:w-auto border-white/12 text-zinc-400 hover:bg-white/6 hover:border-white/20 hover:text-white transition-all"
              >
                <Smartphone className="w-4.5 h-4.5 mr-2" />
                Join a Game
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ── TV Mode Highlight ─────────────────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-4 py-6">
        <div className="relative overflow-hidden rounded-2xl border border-amber-500/20 bg-gradient-to-r from-amber-950/60 via-blue-950/40 to-amber-950/60 backdrop-blur-sm">
          {/* Subtle inner glow */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-96 h-32 bg-amber-500/10 blur-2xl rounded-full" />
          </div>

          <div className="relative flex flex-col lg:flex-row items-center gap-8 p-8">
            <div className="flex-1">
              <Badge className="mb-3 bg-amber-900/60 text-amber-300 border-amber-600/50 inline-flex items-center gap-1.5 text-xs font-semibold">
                <Tv className="w-3 h-3" /> Kahoot-style TV Mode
              </Badge>
              <h2 className="text-2xl sm:text-3xl font-bold mb-3 text-white">
                Host Trivia Night on Your TV
              </h2>
              <p className="text-zinc-400 mb-6 leading-relaxed">
                Display on any screen. Players join from their phones — no download required.
                Real-time leaderboard after every question. 4 visual themes.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/tv">
                  <Button className="bg-amber-500 hover:bg-amber-400 text-zinc-900 font-semibold min-h-[44px] shadow-lg shadow-amber-500/20 transition-all">
                    <Tv className="w-4 h-4 mr-2" />
                    Open TV Mode
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </Button>
                </Link>
                <Link href="/join">
                  <Button
                    variant="outline"
                    className="min-h-[44px] border-white/12 text-zinc-300 hover:bg-white/6 hover:text-white transition-all"
                  >
                    <Smartphone className="w-4 h-4 mr-2" />
                    Join with Phone
                  </Button>
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 w-full lg:w-auto lg:shrink-0">
              {[
                { Icon: Target,    label: '11 categories' },
                { Icon: Zap,       label: 'Live scoring' },
                { Icon: Smartphone,label: 'Phone join' },
                { Icon: Trophy,    label: 'Live leaderboard' },
              ].map(({ Icon, label }) => (
                <div
                  key={label}
                  className="glass-card rounded-xl px-4 py-3 text-center"
                >
                  <Icon className="w-5 h-5 mx-auto mb-1.5 text-amber-400" />
                  <div className="text-xs text-zinc-400 font-medium">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Live Stats Bar ────────────────────────────────────────────────────── */}
      <section className="border-y border-white/6 bg-card/50 py-10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            {[
              { label: 'Players Registered', icon: Users,  value: stats?.totalPlayers, suffix: '+', color: 'text-blue-400' },
              { label: 'Answers Submitted',  icon: Brain,  value: stats?.totalAnswers,  suffix: '+', color: 'text-amber-400' },
              { label: 'TV Games Today',     icon: Tv,     value: stats?.tvGamesToday,  suffix: '',  color: 'text-pink-400' },
              { label: 'Categories',         icon: Flame,  value: 11,                   suffix: '',  color: 'text-orange-400' },
            ].map(({ label, icon: Icon, value, suffix, color }) => (
              <div key={label} className="group">
                <Icon className={cn('w-5 h-5 mx-auto mb-2.5 transition-transform group-hover:scale-110', color)} />
                <div className="text-3xl font-bold font-mono text-white tabular-nums">
                  {value != null ? <AnimatedCounter target={value} suffix={suffix} /> : '—'}
                </div>
                <div className="text-xs text-zinc-500 mt-1.5 font-medium uppercase tracking-wide">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How It Works ─────────────────────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">How It Works</h2>
          <p className="text-zinc-500 max-w-md mx-auto">Three steps to trivia glory.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {HOW_IT_WORKS.map(({ step, icon: Icon, title, desc, color, bg }) => (
            <div
              key={step}
              className="relative group p-6 rounded-2xl border border-white/8 bg-card hover:border-white/14 transition-all hover:shadow-xl hover:shadow-black/20"
            >
              {/* Step number — large background watermark */}
              <span className="absolute top-4 right-5 text-6xl font-black text-white/4 select-none tabular-nums">
                {step}
              </span>

              <div className={cn('inline-flex p-3 rounded-xl border mb-5', bg)}>
                <Icon className={cn('w-6 h-6', color)} />
              </div>
              <h3 className="text-lg font-bold mb-2 text-white">{title}</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Categories ───────────────────────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-4 pb-20">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">11 Categories</h2>
          <p className="text-zinc-500">Something for every trivia fan</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {CATEGORIES.map((cat) => {
            const CatIcon = CATEGORY_ICON_MAP[cat.icon] ?? Target
            const colors = CATEGORY_COLORS[cat.id] ?? CATEGORY_COLORS.general!
            return (
              <div
                key={cat.id}
                className={cn(
                  'group relative p-5 rounded-xl border border-white/8 bg-card text-center cursor-pointer',
                  'hover:bg-card/80 hover:shadow-lg transition-all duration-200',
                  colors.border,
                  colors.glow,
                )}
              >
                <div className="mb-3 flex justify-center">
                  <CatIcon
                    className={cn(
                      'w-7 h-7 transition-transform duration-200 group-hover:scale-110',
                      colors.icon,
                    )}
                  />
                </div>
                <div className="font-semibold text-sm text-zinc-200">{cat.name}</div>
                {cat.isPremium && (
                  <div className="absolute top-2.5 right-2.5">
                    <Star className="w-3 h-3 text-yellow-500" />
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-4 pb-24">
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-blue-950/60 via-amber-950/60 to-yellow-950/60">
          <div className="absolute inset-0 pointer-events-none bg-grid-pattern opacity-30" />
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-24 bg-amber-500/15 blur-2xl rounded-full" />
          </div>
          <div className="relative text-center p-10 sm:p-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 text-white">
              Ready to Test Your Knowledge?
            </h2>
            <p className="text-zinc-400 mb-8 text-lg max-w-lg mx-auto">
              Join the daily challenge — new questions every day, powered by AI.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/auth/login" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="min-h-[52px] px-10 text-base font-bold w-full bg-amber-500 hover:bg-amber-400 text-zinc-900 shadow-xl shadow-amber-500/25 transition-all"
                >
                  Play Free — No Credit Card
                </Button>
              </Link>
              <Link href="/tv" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  variant="outline"
                  className="min-h-[52px] px-10 text-base w-full border-white/12 text-zinc-300 hover:bg-white/6 hover:text-white transition-all"
                >
                  <Tv className="w-4.5 h-4.5 mr-2" />
                  Host Trivia Night
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
