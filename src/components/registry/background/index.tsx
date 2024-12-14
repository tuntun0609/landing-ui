'use client'

import { toast } from 'sonner'

import { Button } from '@/components/ui/button'

export const BackgroundCase = ({
  children,
  copyCode,
}: {
  children: React.ReactNode
  copyCode?: string
}) => {
  const handleCopy = () => {
    if (copyCode) {
      navigator.clipboard.writeText(copyCode)
      toast.success('Copied to clipboard', {
        duration: 3000,
      })
    }
  }
  return (
    <div className="relative h-[300px] w-full overflow-hidden rounded-xl border border-gray-200 dark:border-gray-800">
      {children}
      <Button
        variant="outline"
        className="absolute bottom-2 right-2 h-6 p-0 px-2 text-sm"
        size="sm"
        onClick={handleCopy}
      >
        copy
      </Button>
    </div>
  )
}

export const Background = ({ children }: { children: React.ReactNode }) => (
  <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">{children}</div>
)
