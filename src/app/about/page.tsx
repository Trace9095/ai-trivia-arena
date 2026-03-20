import Link from 'next/link'
import { Brain, Trophy, Tv, Zap, Users, Star } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'

export const metadata = {
  title: 'About — AI Trivia Arena',
  description:
    'AI Trivia Arena uses Claude AI to generate fresh trivia questions every time you play — no repeats, no stale question banks.',
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background text-foreground py-16 px-4">
      <div className="max-w-5xl mx-auto space-y-20">

        {/* ── Hero ─────────────────────────────────────────────────────────── */}
        <section className="text-center space-y-4">
          <Badge className="bg-violet-900/60 text-violet-300 border-violet-700 text-xs uppercase tracking-widest">
            Powered by Claude AI
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent leading-tight">
            We&apos;re Building Trivia<br className="hidden sm:block" /> That Never Gets Old
          </h1>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Every question in AI Trivia Arena is generated live by Claude AI. No static question banks,
            no repeated rounds — just fresh, intelligent trivia every single time you play.
          </p>
          <div className="pt-4">
            <Link
              href="/"
              className="inline-flex items-center justify-center min-h-[44px] px-8 rounded-lg bg-violet-600 hover:bg-violet-500 text-white font-semibold text-base transition-colors"
            >
              Start Playing
            </Link>
          </div>
        </section>

        {/* ── Mission ──────────────────────────────────────────────────────── */}
        <section className="space-y-4 max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white">Our Mission</h2>
          <p className="text-zinc-400 text-lg leading-relaxed">
            We believe trivia should feel alive. AI Trivia Arena delivers AI-powered trivia that
            challenges you every day, never repeats a question, and adapts to your knowledge level
            as you grow. Whether you play solo at lunch or compete on the big screen at trivia night,
            the game always meets you where you are.
          </p>
        </section>

        {/* ── How It Works ─────────────────────────────────────────────────── */}
        <section className="space-y-8">
          <h2 className="text-2xl font-bold text-center text-white">How It Works</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <Card className="bg-card border-white/8">
              <CardContent className="pt-6 flex flex-col items-center text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-violet-900/50 flex items-center justify-center">
                  <Brain className="w-6 h-6 text-violet-400" />
                </div>
                <h3 className="font-semibold text-white text-lg">Play Daily</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  Choose a category and let Claude AI build your quiz on the spot. Every session is
                  unique — questions are generated fresh, not pulled from a recycled database.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-white/8">
              <CardContent className="pt-6 flex flex-col items-center text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-fuchsia-900/50 flex items-center justify-center">
                  <Trophy className="w-6 h-6 text-fuchsia-400" />
                </div>
                <h3 className="font-semibold text-white text-lg">Climb the Leaderboard</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  Earn points for speed and accuracy. Your score stacks against players worldwide on
                  the global leaderboard — updated in real time after every completed round.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-white/8">
              <CardContent className="pt-6 flex flex-col items-center text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-blue-900/50 flex items-center justify-center">
                  <Tv className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="font-semibold text-white text-lg">Compete on TV</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  Cast the live TV mode to any screen. Run a real trivia night at your venue with
                  a countdown timer, live scores, and a crowd-ready display — no extra hardware needed.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* ── Stats ────────────────────────────────────────────────────────── */}
        <section className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { icon: Zap, label: '10,000+ questions generated', color: 'text-violet-400' },
            { icon: Star, label: '12 categories', color: 'text-fuchsia-400' },
            { icon: Tv, label: 'Real-time TV mode', color: 'text-blue-400' },
            { icon: Users, label: 'Global leaderboard', color: 'text-emerald-400' },
          ].map(({ icon: Icon, label, color }) => (
            <Card key={label} className="bg-card border-white/8">
              <CardContent className="pt-6 flex flex-col items-center text-center space-y-2">
                <Icon className={`w-7 h-7 ${color}`} />
                <p className="text-zinc-300 text-sm font-medium leading-snug">{label}</p>
              </CardContent>
            </Card>
          ))}
        </section>

        {/* ── Technology ───────────────────────────────────────────────────── */}
        <section className="max-w-3xl mx-auto space-y-4">
          <h2 className="text-2xl font-bold text-white">The Technology</h2>
          <Card className="bg-card border-white/8">
            <CardContent className="pt-6 space-y-4 text-zinc-400 text-base leading-relaxed">
              <p>
                AI Trivia Arena is built on{' '}
                <span className="text-violet-300 font-medium">Claude AI by Anthropic</span> — one
                of the most capable large language models available. Every question you see is written
                by Claude at the moment you request it, not pre-written by a human and stored in a
                database.
              </p>
              <p>
                That means the questions are contextually rich, factually grounded, and calibrated to
                a range of difficulty levels. Claude understands nuance — so you get questions that
                are genuinely interesting, not just trivia-night clichés.
              </p>
              <p>
                The game is built with Next.js, powered by a Neon PostgreSQL database, and deployed
                globally on Vercel — so whether you are playing from Colorado or across the world,
                response times stay fast.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* ── CTA ──────────────────────────────────────────────────────────── */}
        <section className="text-center space-y-4 pb-4">
          <h2 className="text-2xl font-bold text-white">Ready to Play?</h2>
          <p className="text-zinc-400">
            Jump in free — no credit card required. Your first round is one click away.
          </p>
          <Link
            href="/"
            className="inline-flex items-center justify-center min-h-[44px] px-10 rounded-lg bg-violet-600 hover:bg-violet-500 text-white font-semibold text-base transition-colors"
          >
            Start Playing
          </Link>
        </section>

      </div>
    </main>
  )
}
