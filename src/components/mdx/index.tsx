'use client'

import { useMDXComponent } from 'next-contentlayer2/hooks'

import MDXComponents from './mdx-components'

export const MDXContent = ({ code }: { code: string }) => {
  const MDXContent = useMDXComponent(code)
  return (
    <div className="article">
      <MDXContent components={MDXComponents} />
    </div>
  )
}
