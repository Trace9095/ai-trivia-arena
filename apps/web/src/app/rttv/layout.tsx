import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Rooftop Social Trivia Night',
  description: 'Live bar trivia at Whitewater Bar & Grill / Rooftop Social.',
  robots: { index: false, follow: false },
}

export default function RTTVLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
