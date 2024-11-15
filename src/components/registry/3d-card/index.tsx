'use client'

import { useRef } from 'react'

import { cn } from '@/lib/utils'

function ThreeDCard({
  children,
  rotateSize = 'medium',
  className,
}: {
  children: React.ReactNode
  rotateSize?: 'small' | 'medium' | 'large' | number
  className?: string
}) {
  const containerRef = useRef<HTMLDivElement>(null)
  const rotateSizeMap = {
    small: 30,
    medium: 20,
    large: 10,
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) {
      return
    }
    const rotateSizeNumber = typeof rotateSize === 'number' ? rotateSize : rotateSizeMap[rotateSize]
    const { left, top, width, height } = containerRef.current.getBoundingClientRect()
    const x = (e.clientX - left - width / 2) / rotateSizeNumber
    const y = (e.clientY - top - height / 2) / rotateSizeNumber
    containerRef.current.style.transform = `rotateY(${x}deg) rotateX(${-y}deg)`
  }

  const handleMouseLeave = () => {
    if (!containerRef.current) {
      return
    }
    containerRef.current.style.transform = 'rotateY(0deg) rotateX(0deg)'
  }

  return (
    <div style={{ perspective: '1000px' }} className="flex items-center justify-center">
      <div
        className={cn(
          'relative min-h-[100px] min-w-[100px] rounded-md border border-gray-200 bg-background transition-all duration-200 ease-linear dark:border-gray-900',
          className
        )}
        style={{
          transformStyle: 'preserve-3d',
        }}
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {children}
      </div>
    </div>
  )
}

ThreeDCard.displayName = 'ThreeDCard'

export default ThreeDCard
