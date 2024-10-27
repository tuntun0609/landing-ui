'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { cn } from '@/lib/utils'

import { ThemeToggle } from '../theme'

const Header = () => {
  const pathname = usePathname()

  return (
    <div className="sticky top-0 z-[50] w-full border-b border-neutral-200 bg-white dark:border-white/[0.1] dark:bg-black">
      <div className="flex h-14 items-center justify-between px-4 md:px-8">
        <div className="flex items-center gap-2">
          <Link className="logo flex items-center gap-2" href="/">
            <Image src="/image/logo.svg" alt="logo" width={25} height={25} />
            <h1
              className={cn(
                'hidden font-sans text-xl font-bold text-black dark:text-white md:block'
              )}
            >
              Landing UI
            </h1>
          </Link>
          <nav className="ml-2 flex items-center gap-2 text-sm md:ml-4">
            <Link
              className={cn(
                'transition-colors hover:text-foreground/80',
                pathname.startsWith('/docs/components')
                  ? 'font-medium text-foreground'
                  : 'text-foreground/60'
              )}
              href="/docs/components"
            >
              Components
            </Link>
          </nav>
        </div>
        <ThemeToggle />
      </div>
    </div>
  )
}

export default Header
