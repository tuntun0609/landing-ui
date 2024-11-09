import { Rocket } from 'lucide-react'
import Link from 'next/link'

import { Hero } from '@/components/hero'
import { FadeText } from '@/components/registry/fade-text'
import { Button } from '@/components/ui/button'
import FramerLogo from '@public/image/framer-logo.svg'
import NextjsLogo from '@public/image/nextjs.svg'
import ShadcnUiLogo from '@public/image/shadcn-ui.svg'
import TailwindLogo from '@public/image/tailwindcss.svg'

export default function Home() {
  return (
    <div>
      <div className="fixed top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,163,255,0.13)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)] dark:bg-black" />

      <Hero />
      <FadeText delay={0.6} className="mt-12 flex justify-center">
        <Link href="/docs/components">
          <Button>
            Get Started <Rocket />
          </Button>
        </Link>
      </FadeText>

      <FadeText delay={0.9} className="mt-12">
        <div className="flex items-center justify-center gap-8 fill-slate-200">
          <Link href="https://nextjs.org" target="_blank" rel="noopener noreferrer">
            <NextjsLogo className="h-10 w-10 fill-gray-600 text-gray-600" />
          </Link>

          <Link href="https://tailwindcss.com" target="_blank" rel="noopener noreferrer">
            <TailwindLogo className="h-10 w-10 fill-gray-600 text-gray-600" />
          </Link>

          <Link href="https://ui.shadcn.com" target="_blank" rel="noopener noreferrer">
            <ShadcnUiLogo className="h-10 w-10 fill-gray-600 text-gray-600" />
          </Link>

          <Link href="https://www.framer.com/motion/" target="_blank" rel="noopener noreferrer">
            <FramerLogo className="h-10 w-10 fill-gray-600 text-gray-600" />
          </Link>
        </div>
      </FadeText>
    </div>
  )
}
