'use client'

import React from 'react'
import Image from 'next/image'

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { cn } from '@/lib/utils'

interface AvatarItem {
  url: string
  tooltip?: string
  onClick?: React.MouseEventHandler<HTMLImageElement>
  className?: string
}

interface AvatarProps {
  className?: string
  numPeople?: number
  avatarUrls: AvatarItem[]
  isHoverable?: boolean
  onClickAll?: React.MouseEventHandler<HTMLDivElement>
}

const Avatar = ({
  numPeople,
  className,
  avatarUrls,
  isHoverable = false,
  onClickAll,
}: AvatarProps) => (
  <TooltipProvider>
    <div className={cn('z-10 flex', className)}>
      {avatarUrls.map((item, index) =>
        item.tooltip ? (
          <Tooltip key={index}>
            <TooltipTrigger asChild>
              <Image
                className={cn(
                  'z-1 relative -mr-4 h-10 w-10 rounded-full border-2 border-white dark:border-gray-800',
                  isHoverable && 'hover:z-20',
                  item.onClick && 'cursor-pointer',
                  item.className
                )}
                src={item.url}
                width={40}
                height={40}
                alt={item.tooltip ?? item.url}
                onClick={item.onClick}
              />
            </TooltipTrigger>
            <TooltipContent>
              <p>{item.tooltip}</p>
            </TooltipContent>
          </Tooltip>
        ) : (
          <Image
            key={index}
            className={cn(
              'z-1 relative -mr-4 h-10 w-10 rounded-full border-2 border-white dark:border-gray-800',
              isHoverable && 'hover:z-20',
              item.onClick && 'cursor-pointer',
              item.className
            )}
            src={item.url}
            width={40}
            height={40}
            alt={item.tooltip ?? item.url}
            onClick={item.onClick}
          />
        )
      )}
      <div
        className="z-2 relative flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border-2 border-white bg-black text-center text-xs font-medium text-white hover:bg-gray-600 dark:border-gray-800 dark:bg-white dark:text-black"
        onClick={onClickAll}
      >
        +{numPeople}
      </div>
    </div>
  </TooltipProvider>
)

export default Avatar
