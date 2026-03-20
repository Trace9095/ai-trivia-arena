import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin/', '/api/', '/auth/', '/play/game', '/play/results', '/tv/private'],
      },
    ],
    sitemap: 'https://aitriviaarena.com/sitemap.xml',
  }
}
