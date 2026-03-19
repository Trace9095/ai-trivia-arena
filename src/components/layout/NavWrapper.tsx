'use client'

import { usePathname } from 'next/navigation'

type Props = {
  children: React.ReactNode
  nav: React.ReactNode
  footer: React.ReactNode
}

export function NavWrapper({ children, nav, footer }: Props) {
  const pathname = usePathname()
  if (pathname?.startsWith('/tv')) {
    return <>{children}</>
  }
  return (
    <>
      {nav}
      <main className="flex-1 pt-16">{children}</main>
      {footer}
    </>
  )
}
