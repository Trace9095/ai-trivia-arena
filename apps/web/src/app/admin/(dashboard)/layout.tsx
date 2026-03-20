import { requireAdmin } from '@/lib/admin-auth'
import { AdminNav } from '@/components/admin/AdminNav'

export const dynamic = 'force-dynamic'

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const session = await requireAdmin()

  return (
    <div className="flex min-h-[calc(100dvh-4rem)]">
      <AdminNav email={session.email} />
      <div className="flex-1 overflow-auto">{children}</div>
    </div>
  )
}
