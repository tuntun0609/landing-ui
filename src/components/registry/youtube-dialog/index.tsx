'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { PlayIcon } from 'lucide-react'
import Image from 'next/image'

import { cn } from '@/lib/utils'

interface YoutubeDialogProps {
  videoSrc: string
  videoCover: string
  videoAlt?: string
  className?: string
}

const YoutubeDialog = ({
  videoSrc,
  videoCover,
  videoAlt = 'youtube video',
  className,
}: YoutubeDialogProps) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={cn('relative', className)}>
      <div
        className="group aspect-video w-full cursor-pointer overflow-hidden rounded-md"
        onClick={() => setIsOpen(true)}
      >
        <Image
          src={videoCover}
          alt={videoAlt}
          width={1920}
          height={1080}
          className="w-full border shadow-lg transition-all duration-200 ease-out group-hover:brightness-[0.8]"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white transition-all duration-200 ease-out group-hover:scale-110 dark:bg-black">
            <PlayIcon
              size={18}
              className="text-black transition-all duration-200 ease-out group-hover:scale-110 dark:text-white"
            />
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          >
            <div className="aspect-video w-full max-w-4xl">
              <iframe
                src={videoSrc}
                className="size-full rounded-2xl"
                allowFullScreen
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default YoutubeDialog
