import { withContentlayer } from 'next-contentlayer2'

import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: false,
  images: {
    domains: ['images.unsplash.com'],
  },
}

export default withContentlayer(nextConfig)
