'use client'
import { Github } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { useScrollTop } from '@/lib/hook/use-scroll-top'
import { cn } from '@/lib/utils'
import Logo from '@public/image/logo.svg'

import { ThemeToggle } from '../theme'
import { Button } from '../ui/button'

const Header = () => {
  const pathname = usePathname()
  // 是否滚动超过 100px
  const top = useScrollTop(10)

  return (
    <div
      className={cn(
        'sticky top-0 z-[50] box-border w-full transition-colors duration-300 dark:border-white/[0.1]',
        pathname === '/'
          ? `${top < 60 ? 'border-none bg-transparent' : 'border-b bg-white dark:bg-black'}`
          : 'border-b border-neutral-200 bg-white dark:bg-black'
      )}
    >
      <div className="flex h-14 items-center justify-between px-4 md:px-8">
        <div className="flex items-center gap-2">
          <Link className="logo flex items-center gap-2" href="/">
            <Logo className="h-6 w-6" />
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
        <div className="flex items-center">
          <Link target="_blank" href="https://github.com/tuntun0609/landing-ui">
            <Button variant="ghost" size="sm" className="h-10 w-10 p-0">
              <Github className="h-4 w-4" />
            </Button>
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </div>
  )
}

export default Header
