import { getSession } from './auth'
import { redirect } from 'next/navigation'

export const ADMIN_EMAILS = ['CEO@epicai.ai', 'ceo@epicai.ai', 'trace.hildebrand@gmail.com', 'Trace.hildebrand@gmail.com']

export function isAdmin(email: string): boolean {
  return ADMIN_EMAILS.includes(email)
}

export async function requireAdmin(): Promise<{ userId: string; email: string }> {
  const session = await getSession()
  if (!session || !isAdmin(session.email)) {
    redirect('/admin/login')
  }
  return session
}

/** For API routes — returns null instead of redirecting */
export async function getAdminSession(): Promise<{ userId: string; email: string } | null> {
  const session = await getSession()
  if (!session || !isAdmin(session.email)) return null
  return session
}
