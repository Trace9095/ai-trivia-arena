import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Join Game',
  description: 'Enter a game code to join a live AI Trivia Arena session.',
}

export default function JoinLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
