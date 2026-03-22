import type { Metadata } from 'next'
import Link from 'next/link'
import { BLOG_POSTS } from '@/data/blog-posts'
import { ChevronRight, BookOpen } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Blog — Trivia Tips, Game Night Guides & More',
  description:
    'Guides on hosting trivia nights, choosing the best trivia categories, and getting the most out of AI-powered quiz games. Read the AI Trivia Arena blog.',
  alternates: {
    canonical: '/blog',
  },
  openGraph: {
    title: 'Blog — AI Trivia Arena',
    description:
      'Guides on hosting trivia nights, choosing the best trivia categories, and getting the most out of AI-powered quiz games.',
    type: 'website',
    url: '/blog',
  },
}

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export default function BlogPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16 sm:py-24">
      {/* Header */}
      <header className="mb-14 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-600/40 bg-amber-950/60 text-amber-300 text-xs font-semibold tracking-wide mb-6">
          <BookOpen className="w-3 h-3" aria-hidden="true" />
          Trivia Tips &amp; Guides
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
          The AI Trivia Arena Blog
        </h1>
        <p className="text-zinc-400 text-lg max-w-xl mx-auto leading-relaxed">
          Guides on hosting trivia nights, picking the best categories, and running great game-night events — powered by AI-generated questions that never repeat.
        </p>
      </header>

      {/* Post grid */}
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6" role="list">
        {BLOG_POSTS.map((post) => (
          <li key={post.slug}>
            <Link
              href={`/blog/${post.slug}`}
              className="group block h-full rounded-2xl border border-white/8 bg-card p-6 hover:border-amber-500/30 hover:shadow-xl hover:shadow-amber-500/5 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/50"
            >
              {/* Category badge */}
              <span className="inline-block px-2.5 py-0.5 rounded-full bg-amber-950/70 border border-amber-700/40 text-amber-300 text-xs font-semibold mb-4">
                {post.category}
              </span>

              <h2 className="text-lg font-bold text-white mb-3 leading-snug group-hover:text-amber-300 transition-colors">
                {post.title}
              </h2>

              <p className="text-zinc-400 text-sm leading-relaxed mb-6 line-clamp-3">
                {post.description}
              </p>

              <div className="flex items-center justify-between text-xs text-zinc-500">
                <div className="flex items-center gap-3">
                  <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
                  <span aria-hidden="true">&middot;</span>
                  <span>{post.readingTime} min read</span>
                </div>
                <ChevronRight
                  className="w-4 h-4 text-amber-500 opacity-0 group-hover:opacity-100 transition-opacity"
                  aria-hidden="true"
                />
              </div>
            </Link>
          </li>
        ))}
      </ul>

      {/* Bottom CTA */}
      <div className="mt-16 text-center">
        <p className="text-zinc-500 text-sm mb-4">Ready to play?</p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 min-h-[44px] px-6 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-zinc-900 font-bold text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/50"
        >
          Back to AI Trivia Arena
          <ChevronRight className="w-4 h-4" aria-hidden="true" />
        </Link>
      </div>
    </div>
  )
}
