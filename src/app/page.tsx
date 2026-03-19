import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Brain, Trophy, Zap, Users, Star, Flame } from 'lucide-react'
import { CATEGORIES } from '@/lib/utils'

export default function LandingPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl" />
          <div className="absolute top-40 right-1/4 w-80 h-80 bg-purple-600/20 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-6xl mx-auto px-4 py-24 text-center">
          <Badge className="mb-6 bg-blue-950 text-blue-400 border-blue-800">⚡ Powered by Claude AI</Badge>
          <h1 className="text-5xl sm:text-7xl font-bold mb-6 leading-tight">
            AI Trivia That{' '}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Never Repeats
            </span>
          </h1>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Every question is generated fresh by Claude AI. No question banks, no memorization — just pure trivia
            mastery.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/play">
              <Button
                size="lg"
                className="min-h-[52px] px-8 bg-blue-600 hover:bg-blue-700 text-lg font-bold w-full sm:w-auto"
              >
                <Zap className="w-5 h-5 mr-2" />
                Play Daily Challenge
              </Button>
            </Link>
            <Link href="/leaderboard">
              <Button size="lg" variant="outline" className="min-h-[52px] px-8 text-lg w-full sm:w-auto">
                <Trophy className="w-5 h-5 mr-2" />
                View Leaderboard
              </Button>
            </Link>
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
              desc: 'Choose from 11 categories — science, history, pop culture, sports, and more.',
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
          {CATEGORIES.map((cat) => (
            <Card key={cat.id} className="p-4 text-center hover:border-blue-500 transition-colors cursor-pointer">
              <div className="text-3xl mb-2">{cat.icon}</div>
              <div className="font-semibold text-sm">{cat.name}</div>
              {cat.isPremium && (
                <Badge variant="secondary" className="mt-1 text-xs">
                  <Star className="w-3 h-3 mr-1" />
                  Pro
                </Badge>
              )}
            </Card>
          ))}
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-card border-y border-border py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-3 gap-8 text-center">
            {[
              { label: 'Questions Generated', value: '∞', icon: Brain },
              { label: 'Daily Players', value: '1K+', icon: Users },
              { label: 'Categories', value: '11', icon: Flame },
            ].map(({ label, value, icon: Icon }) => (
              <div key={label}>
                <Icon className="w-6 h-6 mx-auto mb-2 text-blue-400" />
                <div className="text-3xl font-bold font-mono">{value}</div>
                <div className="text-sm text-muted-foreground mt-1">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-4 py-20 text-center">
        <div className="bg-gradient-to-r from-blue-950 to-purple-950 border border-blue-800 rounded-2xl p-12">
          <h2 className="text-4xl font-bold mb-4">Ready to Test Your Knowledge?</h2>
          <p className="text-muted-foreground mb-8 text-lg">
            Join the daily challenge — new questions every day, powered by AI.
          </p>
          <Link href="/auth/login">
            <Button size="lg" className="min-h-[52px] px-10 bg-blue-600 hover:bg-blue-700 text-lg font-bold">
              Play Free — No Credit Card Required
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
