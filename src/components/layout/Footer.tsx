import Link from 'next/link'
import { Brain } from 'lucide-react'

export function Footer() {
  return (
    <footer className="border-t border-border bg-background/50 py-8 mt-auto">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-2 font-bold">
            <Brain className="w-5 h-5 text-blue-500" />
            <span className="text-muted-foreground">AI Trivia Arena</span>
          </Link>
          <p className="text-sm text-muted-foreground">
            Powered by Claude AI • Built by{' '}
            <a href="https://epicai.ai" className="text-blue-400 hover:underline">
              Epic AI
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
