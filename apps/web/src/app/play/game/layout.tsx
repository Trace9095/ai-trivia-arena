import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Play',
  description: 'Answer AI-generated trivia questions across your chosen category and difficulty.',
}

export default function GameLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
