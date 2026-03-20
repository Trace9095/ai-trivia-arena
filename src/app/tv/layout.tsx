import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'TV Mode',
  description: 'Host a live trivia night with AI Trivia Arena TV mode. Display on any screen.',
  robots: { index: false, follow: false },
}

export default function TVLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
