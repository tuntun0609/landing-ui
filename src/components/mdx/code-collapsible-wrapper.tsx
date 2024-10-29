'use client'

import * as React from 'react'

import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'
import { cn } from '@/lib/utils'

import { Button } from '../ui/button'

interface CodeCollapsibleWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  expandButtonTitle?: string
}

export function CodeCollapsibleWrapper({
  expandButtonTitle = 'View Code',
  className,
  children,
  ...props
}: CodeCollapsibleWrapperProps) {
  const [isOpened, setIsOpened] = React.useState(false)

  return (
    <Collapsible open={isOpened} onOpenChange={setIsOpened}>
      <div className={cn('relative overflow-hidden rounded-sm', className)} {...props}>
        <CollapsibleContent forceMount className={cn('overflow-hidden', !isOpened && 'max-h-48')}>
          <div
            className={cn(
              '[&_pre]:my-0 [&_pre]:max-h-[650px] [&_pre]:pb-[80px]',
              !isOpened ? '[&_pre]:overflow-hidden' : '[&_pre]:overflow-auto]'
            )}
          >
            {children}
          </div>
        </CollapsibleContent>
        <div
          className={cn(
            'absolute flex items-center justify-center rounded-b-sm bg-gradient-to-b from-zinc-700/30 to-zinc-950/90 p-2',
            isOpened ? 'inset-x-0 bottom-4 h-12' : 'inset-0'
          )}
        >
          <CollapsibleTrigger asChild>
            <Button variant="secondary" className="h-8 text-xs">
              {isOpened ? 'Collapse' : expandButtonTitle}
            </Button>
          </CollapsibleTrigger>
        </div>
      </div>
    </Collapsible>
  )
}

CodeCollapsibleWrapper.displayName = 'CodeCollapsibleWrapper'
