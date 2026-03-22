import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { BLOG_POSTS, getPostBySlug, getAllSlugs } from '@/data/blog-posts'
import { ChevronLeft, Clock, Tag } from 'lucide-react'

const BASE_URL = 'https://aitriviaarena.com'

// ── Static generation ─────────────────────────────────────────────────────────

export function generateStaticParams(): { slug: string }[] {
  return getAllSlugs().map((slug) => ({ slug }))
}

// ── Metadata ──────────────────────────────────────────────────────────────────

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return {}

  const url = `${BASE_URL}/blog/${post.slug}`

  return {
    title: post.title,
    description: post.description,
    keywords: [post.keyword, 'trivia', 'game night', 'AI trivia', 'AI Trivia Arena'],
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      url,
      publishedTime: post.publishedAt,
      siteName: 'AI Trivia Arena',
      images: [
        {
          url: `${BASE_URL}/og-image.png`,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
    },
  }
}

// ── Page ──────────────────────────────────────────────────────────────────────

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) notFound()

  // Article JSON-LD schema
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    datePublished: post.publishedAt,
    author: {
      '@type': 'Organization',
      name: 'AI Trivia Arena',
      url: BASE_URL,
    },
    publisher: {
      '@type': 'Organization',
      name: 'AI Trivia Arena',
      url: BASE_URL,
      logo: {
        '@type': 'ImageObject',
        url: `${BASE_URL}/og-image.png`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${BASE_URL}/blog/${post.slug}`,
    },
    image: `${BASE_URL}/og-image.png`,
  }

  // Related posts (other posts, up to 2)
  const related = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 2)

  return (
    <>
      {/*
        dangerouslySetInnerHTML is used here intentionally.
        post.content is authored entirely in src/data/blog-posts.ts (static file,
        committed to source control). There is no user-supplied or external input —
        the HTML is never interpolated from untrusted data, so XSS is not a risk.
      */}
      <script
        type="application/ld+json"
        // Schema is built from our own static data — no user input involved.
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <div className="max-w-3xl mx-auto px-4 py-16 sm:py-24">
        {/* Back link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-1.5 text-zinc-400 hover:text-amber-300 text-sm font-medium transition-colors mb-10 min-h-[44px] group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/50 rounded"
        >
          <ChevronLeft className="w-4 h-4 transition-transform group-hover:-translate-x-0.5" aria-hidden="true" />
          All posts
        </Link>

        {/* Article header */}
        <header className="mb-10">
          <div className="flex items-center gap-3 mb-5">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-950/70 border border-amber-700/40 text-amber-300 text-xs font-semibold">
              <Tag className="w-3 h-3" aria-hidden="true" />
              {post.category}
            </span>
            <span className="flex items-center gap-1.5 text-zinc-500 text-xs">
              <Clock className="w-3 h-3" aria-hidden="true" />
              {post.readingTime} min read
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight mb-4">
            {post.title}
          </h1>

          <p className="text-zinc-400 text-lg leading-relaxed mb-6">
            {post.description}
          </p>

          <div className="flex items-center gap-3 text-xs text-zinc-500 pb-8 border-b border-white/8">
            <span>AI Trivia Arena</span>
            <span aria-hidden="true">&middot;</span>
            <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
          </div>
        </header>

        {/* Article body — content is static, authored in blog-posts.ts */}
        <article
          className="prose-blog"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* CTA block */}
        <div className="mt-14 rounded-2xl border border-amber-500/20 bg-gradient-to-br from-amber-950/50 to-zinc-900/50 p-8 text-center">
          <h2 className="text-xl font-bold text-white mb-2">
            Ready to play AI-generated trivia?
          </h2>
          <p className="text-zinc-400 text-sm mb-6 max-w-sm mx-auto">
            Every question is generated fresh by Claude AI. No repeats, ever.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center min-h-[44px] px-6 rounded-xl bg-amber-500 hover:bg-amber-400 text-zinc-900 font-bold text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/50"
            >
              Play Now — It&apos;s Free
            </Link>
            <Link
              href="/tv"
              className="inline-flex items-center justify-center min-h-[44px] px-6 rounded-xl border border-white/12 text-zinc-300 hover:bg-white/6 hover:text-white font-medium text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20"
            >
              Host a Game Night
            </Link>
          </div>
        </div>

        {/* Related posts */}
        {related.length > 0 && (
          <section className="mt-14" aria-label="Related posts">
            <h2 className="text-lg font-bold text-white mb-6">More from the blog</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {related.map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/blog/${rel.slug}`}
                  className="group block rounded-xl border border-white/8 bg-card p-5 hover:border-amber-500/30 hover:shadow-lg hover:shadow-amber-500/5 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/50"
                >
                  <span className="inline-block px-2 py-0.5 rounded-full bg-amber-950/60 border border-amber-700/40 text-amber-300 text-xs font-semibold mb-3">
                    {rel.category}
                  </span>
                  <h3 className="text-sm font-semibold text-white leading-snug group-hover:text-amber-300 transition-colors mb-2">
                    {rel.title}
                  </h3>
                  <p className="text-zinc-500 text-xs">{rel.readingTime} min read</p>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </>
  )
}
