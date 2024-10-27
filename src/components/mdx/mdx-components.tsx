import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { cn } from '@/lib/utils'

import {
  ComponentPreview,
  ComponentPreviewCode,
  ComponentPreviewContent,
} from '../component-preview'

import { CopyCodeButton } from './copy-code-btn'
import CustomLink from './custom-link'

import type { MDXComponents as MDXComponentsType } from 'mdx/types'

const MDXComponents: MDXComponentsType = {
  h1: props => <h1 {...props} className={cn('mb-4 mt-6 text-4xl font-bold', props.className)} />,
  h2: props => (
    <h2 {...props} className={cn('mb-4 mt-6 pb-2 text-3xl font-semibold', props.className)} />
  ),
  h3: props => (
    <h3 {...props} className={cn('mb-4 mt-6 text-2xl font-semibold', props.className)} />
  ),
  h4: props => <h4 {...props} className={cn('mb-4 mt-6 text-xl font-semibold', props.className)} />,
  h5: props => <h5 {...props} className={cn('mb-4 mt-6 text-lg font-semibold', props.className)} />,
  h6: props => (
    <h6 {...props} className={cn('mb-4 mt-6 text-base font-semibold', props.className)} />
  ),
  p: props => <p {...props} className={cn('mb-4 mt-0', props.className)} />,
  a: props => (
    <CustomLink
      {...props}
      href={props.href ?? ''}
      className={cn('text-blue-600 underline', props.className)}
    />
  ),
  ul: props => <ul {...props} className={cn('mb-4 mt-0 list-disc pl-5', props.className)} />,
  ol: props => <ol {...props} className={cn('mb-4 mt-0 list-decimal pl-5', props.className)} />,
  li: props => <li {...props} className={cn('mb-2', props.className)} />,
  code: props => (
    <code
      {...props}
      className={cn(
        'mx-1 rounded bg-muted px-[0.3rem] py-[0.2rem] text-sm dark:text-neutral-200',
        props.className
      )}
    />
  ),
  pre: props => (
    <pre
      {...props}
      className={cn(
        'group relative overflow-x-auto rounded bg-gray-600 px-2 py-4',
        props.className
      )}
    >
      <CopyCodeButton />
      {props.children}
    </pre>
  ),
  blockquote: props => (
    <blockquote
      {...props}
      className={cn(
        'my-4 border-l-4 border-gray-200 pl-4 italic text-gray-400 dark:text-gray-300',
        props.className
      )}
      {...props}
    />
  ),
  // img: props => (
  //   <ImagePreview src={props.src}>
  //     {/* eslint-disable-next-line @next/next/no-img-element */}
  //     <img alt="" {...props} className={cn('mb-4 cursor-pointer', props.className)} />
  //   </ImagePreview>
  // ),
  // Image,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  ComponentPreview,
  ComponentPreviewContent,
  ComponentPreviewCode,
}

export default MDXComponents
