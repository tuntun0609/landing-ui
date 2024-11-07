'use client'

import { FadeText } from '../registry/fade-text'
import { UnderlineText } from '../registry/underline-text'

export const Hero = () => (
  <div className="flex flex-col items-center justify-center text-center">
    <FadeText>
      <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl">
        Make your <UnderlineText>landing page</UnderlineText> easier
      </h1>
      <h1 className="mt-6 text-3xl font-bold md:text-4xl lg:text-5xl">
        {/* 组件合集 */}
        The Component Collection
      </h1>
    </FadeText>

    <FadeText delay={0.3}>
      <h2 className="mt-12 p-4 text-lg lg:p-0 lg:text-xl">
        Build with <span className="font-bold">Nextjs, Tailwind CSS, Shadcn UI, Framer Motion</span>
      </h2>
      <p className="text-sm text-gray-500">Some components are from open source projects</p>
    </FadeText>
  </div>
)
