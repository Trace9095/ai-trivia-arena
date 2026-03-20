'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Brain, Trophy, Zap, Users, Star, Flame, Tv, Smartphone, ChevronRight, Target, FlaskConical, Scroll, Globe, Clapperboard, UtensilsCrossed, Laptop, Film, Music, Mountain, type LucideIcon } from 'lucide-react'
import { CATEGORIES } from '@/lib/utils'

const CATEGORY_ICON_MAP: Record<string, LucideIcon> = {
  Target, FlaskConical, Scroll, Globe, Clapperboard,
  Trophy, UtensilsCrossed, Laptop, Film, Music, Mountain,
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
      {/* Hero */}
      <section className="relative overflow-hidden">
        {/* Animated gradient blobs */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
          <div className="absolute top-40 right-1/4 w-80 h-80 bg-purple-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s', animationDelay: '1s' }} />
          <div className="absolute bottom-10 left-1/2 w-64 h-64 bg-pink-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '5s', animationDelay: '2s' }} />
        </div>

        <div className="relative max-w-6xl mx-auto px-4 py-24 text-center">
          <Badge className="mb-6 bg-blue-950 text-blue-400 border-blue-800 inline-flex items-center gap-1"><Zap className="w-3 h-3" /> Powered by Claude AI</Badge>
          <h1 className="text-5xl sm:text-7xl font-bold mb-6 leading-tight">
            AI Trivia That{' '}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Never Repeats
            </span>
          </h1>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Every question is generated fresh by Claude AI. No question banks, no memorization — just pure trivia mastery.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/play">
              <Button size="lg" className="min-h-[52px] px-8 bg-blue-600 hover:bg-blue-700 text-lg font-bold w-full sm:w-auto">
                <Zap className="w-5 h-5 mr-2" />
                Play Daily Challenge
              </Button>
            </Link>
            <Link href="/tv">
              <Button size="lg" variant="outline" className="min-h-[52px] px-8 text-lg font-bold w-full sm:w-auto border-purple-700 text-purple-400 hover:bg-purple-950/40">
                <Tv className="w-5 h-5 mr-2" />
                Host a Game
              </Button>
            </Link>
            <Link href="/join">
              <Button size="lg" variant="outline" className="min-h-[52px] px-8 text-lg w-full sm:w-auto">
                <Smartphone className="w-5 h-5 mr-2" />
                Join a Game
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Live TV Mode highlight */}
      <section className="max-w-6xl mx-auto px-4 py-8">
        <div className="bg-gradient-to-r from-purple-950 via-blue-950 to-purple-950 border border-purple-800 rounded-2xl p-8 flex flex-col lg:flex-row items-center gap-8">
          <div className="flex-1">
            <Badge className="mb-3 bg-purple-900 text-purple-300 border-purple-700 inline-flex items-center gap-1">
              <Tv className="w-3 h-3" /> NEW — Kahoot-style TV Mode
            </Badge>
            <h2 className="text-3xl font-bold mb-3">Host Trivia Night on Your TV</h2>
            <p className="text-muted-foreground mb-6">
              Display on any screen. Players join from their phones — no download required.
              Real-time leaderboard after every question. 4 visual themes. Works perfectly on UniFi Display Cast.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/tv">
                <Button className="bg-purple-600 hover:bg-purple-700 font-bold min-h-[44px]">
                  <Tv className="w-4 h-4 mr-2" />
                  Open TV Mode
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
              </Link>
              <Link href="/join">
                <Button variant="outline" className="min-h-[44px]">
                  <Smartphone className="w-4 h-4 mr-2" />
                  Join with Phone
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex-shrink-0 grid grid-cols-2 gap-3 w-full lg:w-auto">
            {[
              { Icon: Target, label: '11 categories' },
              { Icon: Zap, label: 'Live scoring' },
              { Icon: Smartphone, label: 'Phone join' },
              { Icon: Trophy, label: 'Live leaderboard' },
            ].map(({ Icon, label }) => (
              <div key={label} className="bg-black/30 border border-purple-800/50 rounded-xl px-4 py-3 text-center">
                <Icon className="w-6 h-6 mx-auto mb-1 text-purple-400" />
                <div className="text-xs text-muted-foreground font-medium">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Live stats bar */}
      <section className="bg-card border-y border-border py-10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            {[
              { label: 'Players Registered', icon: Users, value: stats?.totalPlayers, suffix: '+' },
              { label: 'Answers Submitted', icon: Brain, value: stats?.totalAnswers, suffix: '+' },
              { label: 'TV Games Today', icon: Tv, value: stats?.tvGamesToday, suffix: '' },
              { label: 'Categories', icon: Flame, value: 11, suffix: '' },
            ].map(({ label, icon: Icon, value, suffix }) => (
              <div key={label}>
                <Icon className="w-5 h-5 mx-auto mb-2 text-blue-400" />
                <div className="text-3xl font-bold font-mono text-white">
                  {value != null ? <AnimatedCounter target={value} suffix={suffix} /> : '—'}
                </div>
                <div className="text-xs text-muted-foreground mt-1">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: Brain,
              title: 'Pick a Topic',
              desc: 'Choose from 11 categories — science, history, pop culture, sports, Colorado & more.',
              color: 'text-blue-400',
            },
            {
              icon: Zap,
              title: 'AI Generates Questions',
              desc: 'Claude creates fresh questions instantly. Every game is unique — no repeats, ever.',
              color: 'text-purple-400',
            },
            {
              icon: Trophy,
              title: 'Compete & Climb',
              desc: 'Score points for speed and accuracy. Battle for the daily leaderboard crown.',
              color: 'text-yellow-400',
            },
          ].map(({ icon: Icon, title, desc, color }) => (
            <div key={title} className="text-center">
              <div className="inline-flex p-4 rounded-2xl bg-card border border-border mb-4">
                <Icon className={`w-8 h-8 ${color}`} />
              </div>
              <h3 className="text-xl font-bold mb-2">{title}</h3>
              <p className="text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">11 Categories</h2>
        <p className="text-muted-foreground text-center mb-10">Something for every trivia fan</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {CATEGORIES.map((cat) => {
            const CatIcon = CATEGORY_ICON_MAP[cat.icon] ?? Target
            return (
            <Card key={cat.id} className="p-4 text-center hover:border-blue-500 transition-colors cursor-pointer group">
              <div className="mb-2 flex justify-center group-hover:scale-110 transition-transform">
                <CatIcon className="w-8 h-8 text-blue-400" />
              </div>
              <div className="font-semibold text-sm">{cat.name}</div>
              {cat.isPremium && (
                <Badge variant="secondary" className="mt-1 text-xs">
                  <Star className="w-3 h-3 mr-1" />
                  Pro
                </Badge>
              )}
            </Card>
          )})}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-4 py-20 text-center">
        <div className="bg-gradient-to-r from-blue-950 to-purple-950 border border-blue-800 rounded-2xl p-8 sm:p-12">
          <h2 className="text-4xl font-bold mb-4">Ready to Test Your Knowledge?</h2>
          <p className="text-muted-foreground mb-8 text-lg">
            Join the daily challenge — new questions every day, powered by AI.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/auth/login" className="w-full sm:w-auto">
              <Button size="lg" className="min-h-[52px] px-10 bg-blue-600 hover:bg-blue-700 text-lg font-bold w-full">
                Play Free — No Credit Card Required
              </Button>
            </Link>
            <Link href="/tv" className="w-full sm:w-auto">
              <Button size="lg" variant="outline" className="min-h-[52px] px-10 text-lg border-purple-700 text-purple-400 hover:bg-purple-950/40 w-full">
                <Tv className="w-5 h-5 mr-2" />
                Host Trivia Night
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
