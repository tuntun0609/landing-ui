'use client'

import { Laptop, Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

import { Button } from '@/components/ui/button'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { cn } from '@/lib/utils'

export const getSystemTheme = () => {
  const media = window.matchMedia('(prefers-color-scheme: dark)')
  const isDark = media.matches
  const systemTheme = isDark ? 'dark' : 'light'
  return systemTheme
}

const themeConfig = [
  {
    label: 'Light',
    icon: <Sun className="h-4 w-4" />,
    value: 'light',
  },
  {
    label: 'Dark',
    icon: <Moon className="h-4 w-4" />,
    value: 'dark',
  },
  {
    label: 'System',
    icon: <Laptop className="h-4 w-4" />,
    value: 'system',
  },
]

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  const onChangeTheme = (value: string) => {
    const systemTheme = getSystemTheme()

    // if the selected theme is the same as the current theme, return
    if (value === theme) {
      return
    }

    // switch to system, but if the current theme is the same as the system theme, switch directly
    if (value === 'system' && theme === systemTheme) {
      setTheme('system')
      return
    }

    // switch to system, but if the current theme is the same as the system theme, switch directly
    if (theme === 'system' && value === systemTheme) {
      setTheme(value)
      return
    }

    setTheme(value)
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost" size="sm" className="h-10 w-10 p-0">
          <Sun className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="flex w-[150px] flex-col gap-1 p-1" align="end">
        {themeConfig.map(config => (
          <Button
            key={config.value}
            variant="ghost"
            className={cn(
              'w-full justify-start gap-2 p-2 pl-4',
              theme === config.value && 'bg-gray-100 dark:bg-gray-800'
            )}
            onClick={() => onChangeTheme(config.value)}
          >
            {config.icon}
            {config.label}
          </Button>
        ))}
      </PopoverContent>
    </Popover>
  )
}
