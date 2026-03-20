import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Daily Challenge',
  description: 'Take on today\'s AI Trivia Arena daily challenge. New questions every day.',
}

export default function DailyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
