import { MetadataRoute } from 'next'
import { BLOG_POSTS } from '@/data/blog-posts'

const BASE_URL = 'https://aitriviaarena.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const blogEntries: MetadataRoute.Sitemap = BLOG_POSTS.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.publishedAt),
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  return [
    { url: BASE_URL, lastModified: new Date('2026-01-15'), changeFrequency: 'weekly', priority: 1 },
    { url: `${BASE_URL}/about`, lastModified: new Date('2026-01-15'), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/pricing`, lastModified: new Date('2026-01-15'), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/categories`, lastModified: new Date('2026-01-15'), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE_URL}/leaderboard`, lastModified: new Date('2026-01-15'), changeFrequency: 'daily', priority: 0.7 },
    { url: `${BASE_URL}/join`, lastModified: new Date('2026-01-15'), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/play`, lastModified: new Date('2026-01-15'), changeFrequency: 'daily', priority: 0.9 },
    { url: `${BASE_URL}/play/daily`, lastModified: new Date('2026-01-15'), changeFrequency: 'daily', priority: 0.8 },
    { url: `${BASE_URL}/play/new`, lastModified: new Date('2026-01-15'), changeFrequency: 'weekly', priority: 0.7 },
    { url: `${BASE_URL}/tv`, lastModified: new Date('2026-01-15'), changeFrequency: 'weekly', priority: 0.6 },
    { url: `${BASE_URL}/blog`, lastModified: new Date('2026-03-04'), changeFrequency: 'weekly', priority: 0.8 },
    ...blogEntries,
  ]
}
