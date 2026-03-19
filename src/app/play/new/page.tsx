import { redirect } from 'next/navigation'
import { getSession } from '@/lib/auth'

export default async function NewGamePage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string; difficulty?: string }>
}) {
  const session = await getSession()
  if (!session) redirect('/auth/login')

  const { category = 'general', difficulty = 'medium' } = await searchParams

  redirect(`/play/game?category=${category}&difficulty=${difficulty}`)
}
