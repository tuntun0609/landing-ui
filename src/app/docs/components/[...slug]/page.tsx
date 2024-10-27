import { notFound } from 'next/navigation'

import { MDXContent } from '@/components/mdx'
import { docsConfig } from '@/config/docs'
import { DocsConfig } from '@/types/docs'
import { allDocs } from 'contentlayer/generated'

export const generateStaticParams = async () => {
  const componentsSlugs: string[] = []
  const componentsDocs = docsConfig.find(item => item.title === 'Component')!

  // 递归
  const getSlugs = (docs: DocsConfig) => {
    docs.items?.forEach(item => {
      componentsSlugs.push(item.href)
      if (item.items) {
        getSlugs(item)
      }
    })
  }
  getSlugs(componentsDocs)
  const slugs = componentsSlugs.map(slug => ({ slug: slug.split('/').slice(3) }))
  console.log(slugs)
  return slugs
}

export default async function Components({ params }: { params: Promise<{ slug: string[] }> }) {
  const { slug } = await params
  const doc = allDocs.find(doc => doc.slugAsParams === `components/${slug.join('/')}`)

  if (!doc) {
    notFound()
  }

  return (
    <div>
      <h1 className="mb-2 text-4xl font-bold">{doc?.title}</h1>
      <p className="mb-8 text-sm text-gray-500">{doc?.description}</p>
      <article>
        <MDXContent code={doc.body.code} />
      </article>
    </div>
  )
}
