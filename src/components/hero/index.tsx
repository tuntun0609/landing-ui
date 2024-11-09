'use client'
import { DotLottiePlayer, PlayMode } from '@dotlottie/react-player'

import { FadeText } from '../registry/fade-text'
import { UnderlineText } from '../registry/underline-text'

export const Hero = () => (
  <div className="mt-24 flex flex-col items-center justify-center overflow-hidden text-center lg:mt-32">
    <FadeText>
      <h1 className="p-4 text-4xl font-bold leading-tight md:text-5xl lg:p-0 lg:text-6xl">
        Make your Landing Page <UnderlineText>Easier</UnderlineText>
      </h1>
      <h1 className="mt-4 text-3xl font-bold md:text-4xl lg:mt-14 lg:text-5xl">
        By{' '}
        <span className="relative rounded-xl bg-gradient-to-r from-[#03b2de] to-[#8e03ff] px-4 py-1 text-white lg:rounded-2xl lg:px-6">
          Landing UI
          <DotLottiePlayer
            className="absolute left-[50%] top-[50%] !w-[220%] -translate-x-[50%] -translate-y-[53%] scale-y-[-1]"
            playMode={PlayMode.Bounce}
            src="/star.lottie "
            autoplay
            loop
          />
        </span>
      </h1>
    </FadeText>

    <FadeText delay={0.3}>
      <h2 className="mt-16 p-4 text-lg lg:p-0 lg:text-xl">
        Build with <span className="font-bold">Nextjs, Tailwind CSS, Shadcn UI, Framer Motion</span>
      </h2>
      <p className="text-sm text-gray-500">Some components are from open source projects</p>
    </FadeText>
  </div>
)
