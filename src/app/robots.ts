import type { MetadataRoute } from 'next';

const BASE_URL = process.env.NEXT_PUBLIC_APP_URL || 'https://aitriviaarena.com';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/admin/',
        '/api/',
        '/auth/',
        '/profile',
        '/tv',
        '/rttv',
        '/play/game',
        '/play/results',
      ],
    },
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
