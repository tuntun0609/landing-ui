'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { cn } from '@/lib/utils'

export const MenuItem = ({ children, href }: { children: React.ReactNode; href: string }) => {
  const pathname = usePathname()
  const isActive = pathname === href
  return (
    <Link
      className={cn(
        'block h-full w-full cursor-pointer px-2 py-1 text-sm transition duration-200 hover:translate-x-1 hover:text-purple-600',
        isActive ? 'font-medium text-foreground' : 'text-muted-foreground'
      )}
      href={href}
    >
      {children}
    </Link>
  )
}
