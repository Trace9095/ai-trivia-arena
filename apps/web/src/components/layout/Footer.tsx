import Link from 'next/link'
import { Brain } from 'lucide-react'

const NAV_LINKS = [
  { href: '/play', label: 'Play' },
  { href: '/leaderboard', label: 'Leaderboard' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/tv', label: 'TV Mode' },
  { href: '/join', label: 'Join Game' },
]

export function Footer() {
  return (
    <footer className="border-t border-white/8 bg-background mt-auto">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          {/* Brand */}
          <div className="space-y-2">
            <Link href="/" className="flex items-center gap-2.5 group w-fit">
              <div className="w-7 h-7 rounded-md bg-gradient-to-br from-blue-500 to-amber-500 flex items-center justify-center shadow-md shadow-amber-500/20">
                <Brain className="w-3.5 h-3.5 text-white" />
              </div>
              <span className="font-bold text-sm bg-gradient-to-r from-blue-400 to-amber-400 bg-clip-text text-transparent">
                AI Trivia Arena
              </span>
            </Link>
            <p className="text-xs text-zinc-600">
              Powered by Claude AI &bull; Built by{' '}
              <a
                href="https://epicai.ai"
                className="text-zinc-500 hover:text-zinc-300 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Epic AI
              </a>
            </p>
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {NAV_LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors"
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  )
}
