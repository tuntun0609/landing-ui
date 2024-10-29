import { MDXContent } from '@/components/mdx'
import { allDocs } from 'contentlayer/generated'

export default function Introduction() {
  const introductionDocs = allDocs.find(doc => doc.slugAsParams === 'introduction')!
  return (
    <div>
      <MDXContent code={introductionDocs?.body.code} />
    </div>
  )
}
