'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { BarChart3, Brain, DollarSign, Gamepad2, Settings, ShieldAlert, Users } from 'lucide-react'

const NAV_ITEMS = [
  { href: '/admin', label: 'Overview', icon: BarChart3, exact: true },
  { href: '/admin/users', label: 'Users', icon: Users, exact: false },
  { href: '/admin/games', label: 'Games', icon: Gamepad2, exact: false },
  { href: '/admin/ai', label: 'AI Usage', icon: Brain, exact: false },
  { href: '/admin/errors', label: 'Errors', icon: ShieldAlert, exact: false },
  { href: '/admin/revenue', label: 'Revenue', icon: DollarSign, exact: false },
  { href: '/admin/settings', label: 'Settings', icon: Settings, exact: false },
] as const

export function AdminNav({ email }: { email: string }) {
  const pathname = usePathname()

  return (
    <aside className="w-52 border-r border-border bg-card flex-shrink-0 flex flex-col">
      <div className="px-4 py-3 border-b border-border">
        <div className="text-[10px] text-muted-foreground uppercase tracking-widest font-mono mb-0.5">
          Admin
        </div>
        <div className="text-xs text-muted-foreground truncate">{email}</div>
      </div>

      <nav className="p-2 space-y-0.5 flex-1">
        {NAV_ITEMS.map(({ href, label, icon: Icon, exact }) => {
          const isActive = exact ? pathname === href : pathname.startsWith(href)
          return (
            <Link
              key={href}
              href={href}
              className={cn(
                'flex items-center gap-2.5 px-3 py-2 rounded-md text-sm transition-colors',
                isActive
                  ? 'bg-primary/10 text-primary font-medium'
                  : 'text-muted-foreground hover:text-foreground hover:bg-muted'
              )}
            >
              <Icon className="w-4 h-4 flex-shrink-0" />
              {label}
            </Link>
          )
        })}
      </nav>

      <div className="px-4 py-3 border-t border-border">
        <Link
          href="/"
          className="text-xs text-muted-foreground hover:text-foreground transition-colors"
        >
          ← Back to app
        </Link>
      </div>
    </aside>
  )
}
