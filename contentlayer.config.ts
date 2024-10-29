import { defineDocumentType, makeSource } from 'contentlayer2/source-files'
import { fromHtmlIsomorphic } from 'hast-util-from-html-isomorphic'
import { remarkImgToJsx } from 'pliny/mdx-plugins/index.js'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypePrettyCode from 'rehype-pretty-code'
import rehypeSlug from 'rehype-slug'
import remarkGfm from 'remark-gfm'
import { remarkAlert } from 'remark-github-blockquote-alert'

const linkIcon = fromHtmlIsomorphic(
  '<span aria-hidden="true" class="content-header-link"><svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 linkIcon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg></span>',
  {
    fragment: true,
  }
)

export const Docs = defineDocumentType(() => ({
  name: 'Docs',
  filePathPattern: 'docs/**/*.(md|mdx)',
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      required: true,
    },
    description: {
      type: 'string',
      required: true,
    },
  },
  computedFields: {
    slug: { type: 'string', resolve: doc => doc._raw.flattenedPath },
    slugAsParams: {
      type: 'string',
      resolve: doc => doc._raw.flattenedPath.split('/').slice(1).join('/'),
    },
  },
}))

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Docs],
  mdx: {
    cwd: process.cwd(),
    remarkPlugins: [remarkGfm, remarkImgToJsx, remarkAlert],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypeAutolinkHeadings,
        {
          behavior: 'prepend',
          headingProperties: {
            className: ['content-header'],
          },
          properties: {
            ariaHidden: undefined,
          },
          content: linkIcon.children,
        },
      ],
      [
        rehypePrettyCode,
        {
          theme: 'one-dark-pro',
        },
      ],
    ],
  },
  onSuccess: async importData => {
    // const { allDocs } = await importData()
    // console.log(allDocs)
  },
})
