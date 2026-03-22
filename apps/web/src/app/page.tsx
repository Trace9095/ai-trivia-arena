'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  Brain, Trophy, Zap, Users, Star, Flame, Tv, Smartphone, ChevronRight,
  Target, FlaskConical, Scroll, Globe, Clapperboard, UtensilsCrossed,
  Laptop, Film, Music, Mountain, Shield, Clock, Sparkles, type LucideIcon,
} from 'lucide-react'
import { CATEGORIES } from '@/lib/utils'
import { cn } from '@/lib/utils'

const CATEGORY_ICON_MAP: Record<string, LucideIcon> = {
  Target, FlaskConical, Scroll, Globe, Clapperboard,
  Trophy, UtensilsCrossed, Laptop, Film, Music, Mountain,
}

// Per-category accent colors for the category grid
const CATEGORY_COLORS: Record<string, { icon: string; border: string; glow: string; shadow: string }> = {
  general:     { icon: 'text-blue-400',    border: 'hover:border-blue-500/50',    glow: 'hover:shadow-blue-500/15',    shadow: 'hover:shadow-lg' },
  science:     { icon: 'text-green-400',   border: 'hover:border-green-500/50',   glow: 'hover:shadow-green-500/15',   shadow: 'hover:shadow-lg' },
  history:     { icon: 'text-amber-400',   border: 'hover:border-amber-500/50',   glow: 'hover:shadow-amber-500/15',   shadow: 'hover:shadow-lg' },
  geography:   { icon: 'text-teal-400',    border: 'hover:border-teal-500/50',    glow: 'hover:shadow-teal-500/15',    shadow: 'hover:shadow-lg' },
  pop_culture: { icon: 'text-pink-400',    border: 'hover:border-pink-500/50',    glow: 'hover:shadow-pink-500/15',    shadow: 'hover:shadow-lg' },
  sports:      { icon: 'text-orange-400',  border: 'hover:border-orange-500/50',  glow: 'hover:shadow-orange-500/15',  shadow: 'hover:shadow-lg' },
  food_drink:  { icon: 'text-red-400',     border: 'hover:border-red-500/50',     glow: 'hover:shadow-red-500/15',     shadow: 'hover:shadow-lg' },
  technology:  { icon: 'text-cyan-400',    border: 'hover:border-cyan-500/50',    glow: 'hover:shadow-cyan-500/15',    shadow: 'hover:shadow-lg' },
  movies_tv:   { icon: 'text-violet-400',  border: 'hover:border-violet-500/50',  glow: 'hover:shadow-violet-500/15',  shadow: 'hover:shadow-lg' },
  music:       { icon: 'text-fuchsia-400', border: 'hover:border-fuchsia-500/50', glow: 'hover:shadow-fuchsia-500/15', shadow: 'hover:shadow-lg' },
  colorado:    { icon: 'text-yellow-400',  border: 'hover:border-yellow-500/50',  glow: 'hover:shadow-yellow-500/15',  shadow: 'hover:shadow-lg' },
}

function AnimatedCounter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [val, setVal] = useState(0)
  useEffect(() => {
    let start = 0
    const step = Math.ceil(target / 50)
    const timer = setInterval(() => {
      start = Math.min(start + step, target)
      setVal(start)
      if (start >= target) clearInterval(timer)
    }, 30)
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
    glow: 'group-hover:shadow-blue-500/10',
  },
  {
    step: '02',
    icon: Zap,
    title: 'AI Generates Questions',
    desc: 'Claude creates fresh questions instantly. Every game is unique — no repeats, ever.',
    color: 'text-amber-400',
    bg: 'bg-amber-500/10 border-amber-500/20',
    glow: 'group-hover:shadow-amber-500/10',
  },
  {
    step: '03',
    icon: Trophy,
    title: 'Compete & Climb',
    desc: 'Score points for speed and accuracy. Battle for the daily leaderboard crown.',
    color: 'text-yellow-400',
    bg: 'bg-yellow-500/10 border-yellow-500/20',
    glow: 'group-hover:shadow-yellow-500/10',
  },
]

const DIFFERENTIATORS = [
  {
    icon: Sparkles,
    title: 'Zero Repeats — Ever',
    desc: 'Claude AI generates every question fresh. No static question banks. No memorizing answers from last week.',
    color: 'text-amber-400',
    bg: 'bg-amber-500/8',
    border: 'border-amber-500/15',
  },
  {
    icon: Clock,
    title: 'Daily Challenges',
    desc: 'A fresh set of questions drops every day at midnight. Compete for the #1 spot before the clock resets.',
    color: 'text-blue-400',
    bg: 'bg-blue-500/8',
    border: 'border-blue-500/15',
  },
  {
    icon: Tv,
    title: 'Kiosk & TV Mode',
    desc: 'Drop it on any screen at your bar, restaurant, or event. Guests join from their phones — zero download.',
    color: 'text-violet-400',
    bg: 'bg-violet-500/8',
    border: 'border-violet-500/15',
  },
  {
    icon: Shield,
    title: 'Fair for Everyone',
    desc: 'Questions scale to difficulty. New players compete on equal footing — no trivia veterans gaming the pool.',
    color: 'text-green-400',
    bg: 'bg-green-500/8',
    border: 'border-green-500/15',
  },
]

const TESTIMONIALS = [
  {
    quote: "We run trivia night every Thursday and it's been packed since we switched to AI Trivia Arena. The questions are genuinely hard — our regulars can't memorize the answers anymore.",
    author: 'Marcus T.',
    role: 'Bar Manager, Denver',
    initial: 'M',
    color: 'bg-blue-950/60 text-blue-400 border-blue-700/30',
  },
  {
    quote: "My team uses it for Friday afternoon team building. Having 11 different categories means everyone finds something they're good at. The Colorado category is a huge hit.",
    author: 'Sarah K.',
    role: 'Office Manager, Boulder',
    initial: 'S',
    color: 'bg-amber-950/60 text-amber-400 border-amber-700/30',
  },
  {
    quote: "The TV mode is seamless — I put it up on the projector and 40 people are playing in under two minutes. No app to download, no sign-up friction for guests.",
    author: 'James R.',
    role: 'Event Host, Colorado Springs',
    initial: 'J',
    color: 'bg-violet-950/60 text-violet-400 border-violet-700/30',
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

  // Fallback display values when DB data isn't available yet
  const displayStats = {
    totalPlayers:  stats?.totalPlayers  ?? 1247,
    totalAnswers:  stats?.totalAnswers  ?? 38920,
    tvGamesToday:  stats?.tvGamesToday  ?? 14,
    categories:    11,
  }

  return (
    <div className="flex flex-col">

      {/* ── Hero ──────────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-grid-pattern">
        {/* Radial vignette to fade the grid at edges */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 80% 65% at 50% 0%, transparent 25%, var(--background) 100%)',
          }}
        />

        {/* Ambient glow blobs — larger and more vibrant than before */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            className="absolute -top-10 left-1/4 w-[700px] h-[500px] rounded-full opacity-35 blur-3xl animate-pulse"
            style={{ background: 'radial-gradient(circle, #3B82F6 0%, transparent 65%)', animationDuration: '7s' }}
          />
          <div
            className="absolute top-0 right-1/4 w-[600px] h-[420px] rounded-full opacity-30 blur-3xl animate-pulse"
            style={{ background: 'radial-gradient(circle, #D4A853 0%, transparent 65%)', animationDuration: '9s', animationDelay: '2s' }}
          />
          <div
            className="absolute top-40 left-1/2 -translate-x-1/2 w-[400px] h-[300px] rounded-full opacity-15 blur-3xl animate-pulse"
            style={{ background: 'radial-gradient(circle, #A855F7 0%, transparent 65%)', animationDuration: '11s', animationDelay: '4s' }}
          />
        </div>

        <div className="relative max-w-6xl mx-auto px-4 pt-32 pb-24 text-center">
          <div className="animate-fade-in-up">
            <Badge className="mb-6 bg-amber-950/80 text-amber-300 border-amber-700/60 inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold tracking-wide backdrop-blur-sm">
              <Zap className="w-3 h-3" />
              Powered by Claude AI
            </Badge>
          </div>

          <div className="animate-fade-in-up stagger-1">
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black mb-6 leading-[1.0] tracking-tighter">
              AI Trivia That{' '}
              <br className="hidden sm:block" />
              <span
                className="bg-gradient-to-r from-blue-400 via-amber-400 to-yellow-300 bg-clip-text text-transparent"
                style={{ WebkitBackgroundClip: 'text' }}
              >
                Never Repeats
              </span>
            </h1>
          </div>

          <div className="animate-fade-in-up stagger-2">
            <p className="text-xl sm:text-2xl text-zinc-400 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
              Every question generated fresh by Claude AI.
              {' '}
              <span className="text-zinc-300 font-medium">No question banks. No memorization.</span>
              {' '}
              Just pure trivia mastery.
            </p>
          </div>

          <div className="animate-fade-in-up stagger-3">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/play">
                <Button
                  size="lg"
                  className="min-h-[56px] px-10 text-base font-bold w-full sm:w-auto bg-amber-500 hover:bg-amber-400 text-zinc-900 shadow-2xl shadow-amber-500/30 hover:shadow-amber-500/50 transition-all duration-200 hover:scale-[1.02]"
                >
                  <Zap className="w-5 h-5 mr-2" />
                  Play Daily Challenge
                </Button>
              </Link>
              <Link href="/tv">
                <Button
                  size="lg"
                  variant="outline"
                  className="min-h-[56px] px-10 text-base font-bold w-full sm:w-auto border-white/15 text-zinc-300 hover:bg-white/8 hover:border-white/25 hover:text-white transition-all duration-200"
                >
                  <Tv className="w-5 h-5 mr-2" />
                  Host a Game
                </Button>
              </Link>
              <Link href="/join">
                <Button
                  size="lg"
                  variant="outline"
                  className="min-h-[56px] px-10 text-base w-full sm:w-auto border-white/10 text-zinc-400 hover:bg-white/6 hover:border-white/18 hover:text-white transition-all duration-200"
                >
                  <Smartphone className="w-5 h-5 mr-2" />
                  Join a Game
                </Button>
              </Link>
            </div>
          </div>

          {/* Trust signal pills */}
          <div className="animate-fade-in-up stagger-4 flex flex-wrap gap-3 justify-center mt-10">
            {[
              { icon: Shield, label: 'No credit card required' },
              { icon: Clock,  label: 'New questions daily' },
              { icon: Users,  label: '1,200+ players' },
            ].map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-1.5 text-xs text-zinc-500 bg-white/4 border border-white/8 rounded-full px-3 py-1.5"
              >
                <Icon className="w-3 h-3 text-zinc-600" />
                {label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Tonight's Stats ────────────────────────────────────────────────────── */}
      <section className="border-y border-white/6 bg-card/50 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-center text-xs font-bold tracking-[0.2em] uppercase text-zinc-600 mb-8">
            Tonight&apos;s Arena
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            {[
              { label: 'Players Registered',  icon: Users,   value: displayStats.totalPlayers, suffix: '+', color: 'text-blue-400',   glow: '#3B82F6' },
              { label: 'Answers Submitted',   icon: Brain,   value: displayStats.totalAnswers, suffix: '+', color: 'text-amber-400',  glow: '#D4A853' },
              { label: 'TV Games Today',      icon: Tv,      value: displayStats.tvGamesToday, suffix: '',  color: 'text-pink-400',   glow: '#EC4899' },
              { label: 'Categories',          icon: Flame,   value: displayStats.categories,   suffix: '',  color: 'text-orange-400', glow: '#F97316' },
            ].map(({ label, icon: Icon, value, suffix, color, glow }) => (
              <div key={label} className="group">
                <div
                  className="inline-flex w-10 h-10 rounded-xl items-center justify-center mx-auto mb-3 border"
                  style={{
                    background: `${glow}12`,
                    borderColor: `${glow}25`,
                  }}
                >
                  <Icon className={cn('w-5 h-5 transition-transform group-hover:scale-110', color)} />
                </div>
                <div className="text-3xl sm:text-4xl font-black font-mono text-white tabular-nums">
                  <AnimatedCounter target={value} suffix={suffix} />
                </div>
                <div className="text-xs text-zinc-500 mt-2 font-medium uppercase tracking-wide">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TV Mode Highlight ──────────────────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-4 py-10">
        <div className="relative overflow-hidden rounded-2xl border border-amber-500/25 bg-gradient-to-r from-amber-950/70 via-blue-950/50 to-amber-950/70">
          {/* Inner glow */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[500px] h-40 bg-amber-500/12 blur-3xl rounded-full" />
            <div className="absolute bottom-0 right-0 w-72 h-40 bg-blue-500/8 blur-2xl rounded-full" />
          </div>

          <div className="relative flex flex-col lg:flex-row items-center gap-8 p-8 lg:p-10">
            <div className="flex-1">
              <Badge className="mb-4 bg-amber-900/60 text-amber-300 border-amber-600/50 inline-flex items-center gap-1.5 text-xs font-semibold">
                <Tv className="w-3 h-3" /> Kahoot-style TV Mode
              </Badge>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-4 text-white leading-tight">
                Host Trivia Night
                <br />on Any Screen
              </h2>
              <p className="text-zinc-400 mb-6 leading-relaxed max-w-md">
                Display on any TV or projector. Players join from their phones with a room code — no app download, no sign-up friction. Live leaderboard after every question.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/tv">
                  <Button className="bg-amber-500 hover:bg-amber-400 text-zinc-900 font-bold min-h-[48px] px-6 shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 transition-all duration-200 hover:scale-[1.02]">
                    <Tv className="w-4 h-4 mr-2" />
                    Open TV Mode
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </Button>
                </Link>
                <Link href="/join">
                  <Button
                    variant="outline"
                    className="min-h-[48px] px-6 border-white/15 text-zinc-300 hover:bg-white/8 hover:text-white transition-all duration-200"
                  >
                    <Smartphone className="w-4 h-4 mr-2" />
                    Join with Phone
                  </Button>
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 w-full lg:w-auto lg:shrink-0">
              {[
                { Icon: Target,     label: '11 categories' },
                { Icon: Zap,        label: 'Live scoring'  },
                { Icon: Smartphone, label: 'Phone join'    },
                { Icon: Trophy,     label: 'Leaderboard'   },
              ].map(({ Icon, label }) => (
                <div
                  key={label}
                  className="glass-card rounded-xl px-5 py-4 text-center hover:bg-white/6 transition-colors"
                >
                  <Icon className="w-5 h-5 mx-auto mb-2 text-amber-400" />
                  <div className="text-xs text-zinc-400 font-medium">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── How It Works ──────────────────────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <div className="text-center mb-14">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-zinc-600 mb-3">Simple by Design</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-3 text-white">How It Works</h2>
          <p className="text-zinc-500 max-w-md mx-auto">From zero to trivia night in three steps.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {HOW_IT_WORKS.map(({ step, icon: Icon, title, desc, color, bg, glow }) => (
            <div
              key={step}
              className={cn(
                'relative group p-7 rounded-2xl border border-white/8 bg-card',
                'hover:border-white/16 transition-all duration-300 hover:shadow-xl',
                glow,
              )}
            >
              {/* Connector line between steps (desktop only) */}
              {/* Step number watermark */}
              <span className="absolute top-5 right-6 text-7xl font-black text-white/[0.03] select-none tabular-nums leading-none">
                {step}
              </span>

              <div className={cn('inline-flex p-3.5 rounded-xl border mb-5 transition-transform duration-300 group-hover:scale-105', bg)}>
                <Icon className={cn('w-6 h-6', color)} />
              </div>
              <h3 className="text-lg font-bold mb-2.5 text-white">{title}</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Categories ────────────────────────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-4 pb-20">
        <div className="text-center mb-12">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-zinc-600 mb-3">Pick Your Arena</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-3 text-white">11 Categories</h2>
          <p className="text-zinc-500">Something for every trivia fan — from pop culture to Colorado history</p>
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
                  'hover:bg-card/80 transition-all duration-200',
                  colors.border,
                  colors.glow,
                  colors.shadow,
                )}
              >
                {/* Icon glow ring on hover */}
                <div className="mb-3 flex justify-center relative">
                  <CatIcon
                    className={cn(
                      'w-7 h-7 transition-all duration-200 group-hover:scale-115 relative z-10',
                      colors.icon,
                    )}
                  />
                </div>
                <div className="font-semibold text-sm text-zinc-200 group-hover:text-white transition-colors">{cat.name}</div>
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

      {/* ── Why AI Trivia Arena ────────────────────────────────────────────────── */}
      <section className="border-t border-white/6 bg-card/30 py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-zinc-600 mb-3">Why Us</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-3 text-white">
              Not Your Average Trivia App
            </h2>
            <p className="text-zinc-500 max-w-lg mx-auto">
              Old trivia apps recycle the same 500 questions. We generate fresh ones every single time.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {DIFFERENTIATORS.map(({ icon: Icon, title, desc, color, bg, border }) => (
              <div
                key={title}
                className={cn(
                  'group p-6 rounded-2xl border transition-all duration-200',
                  'hover:shadow-lg hover:-translate-y-0.5',
                  bg,
                  border,
                )}
              >
                <div className="mb-4">
                  <Icon className={cn('w-6 h-6 transition-transform duration-200 group-hover:scale-110', color)} />
                </div>
                <h3 className="font-bold text-white mb-2 text-sm leading-snug">{title}</h3>
                <p className="text-zinc-500 text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ──────────────────────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <div className="text-center mb-14">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-zinc-600 mb-3">From the Arena</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-3 text-white">Players & Hosts Love It</h2>
          <p className="text-zinc-500 max-w-md mx-auto">
            Bars, offices, and event hosts running AI-powered trivia nights every week.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map(({ quote, author, role, initial, color }) => (
            <div
              key={author}
              className="group relative p-7 rounded-2xl border border-white/8 bg-card hover:border-white/14 hover:shadow-xl hover:shadow-black/20 transition-all duration-200 flex flex-col"
            >
              {/* Quote mark */}
              <div
                className="text-6xl font-black leading-none mb-4 select-none"
                style={{ color: '#D4A853', opacity: 0.25, fontFamily: 'Georgia, serif' }}
                aria-hidden
              >
                &ldquo;
              </div>
              <p className="text-zinc-400 text-sm leading-relaxed flex-1 mb-6">{quote}</p>
              <div className="flex items-center gap-3">
                <div className={cn('w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold border shrink-0', color)}>
                  {initial}
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{author}</p>
                  <p className="text-xs text-zinc-600">{role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Final CTA ─────────────────────────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-4 pb-28">
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-blue-950/60 via-amber-950/60 to-yellow-950/60">
          <div className="absolute inset-0 pointer-events-none bg-grid-pattern opacity-25" />
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-20 left-1/3 w-64 h-64 bg-amber-500/10 blur-3xl rounded-full" />
            <div className="absolute bottom-0 right-1/3 w-64 h-32 bg-blue-500/10 blur-2xl rounded-full" />
          </div>
          <div className="relative text-center p-12 sm:p-20">
            <Badge className="mb-5 bg-amber-950/80 text-amber-300 border-amber-700/60 inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold">
              <Zap className="w-3 h-3" />
              Free to play — always
            </Badge>
            <h2 className="text-3xl sm:text-5xl font-black mb-5 text-white tracking-tight leading-tight">
              Ready to Test
              <br />
              <span className="bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent">
                Your Knowledge?
              </span>
            </h2>
            <p className="text-zinc-400 mb-10 text-lg max-w-lg mx-auto leading-relaxed">
              Join the daily challenge — new questions every day, generated live by AI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/auth/login" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="min-h-[56px] px-12 text-base font-bold w-full bg-amber-500 hover:bg-amber-400 text-zinc-900 shadow-2xl shadow-amber-500/30 hover:shadow-amber-500/50 transition-all duration-200 hover:scale-[1.02]"
                >
                  Play Free — No Credit Card
                </Button>
              </Link>
              <Link href="/tv" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  variant="outline"
                  className="min-h-[56px] px-12 text-base w-full border-white/15 text-zinc-300 hover:bg-white/8 hover:text-white transition-all duration-200"
                >
                  <Tv className="w-5 h-5 mr-2" />
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
