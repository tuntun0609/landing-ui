'use client'

import { ReactNode } from 'react'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { componentPreviewConfig } from '@/config/component-preview'

export function ComponentPreview({ children }: { children: ReactNode }) {
  return (
    <Tabs defaultValue="preview">
      <TabsList>
        <TabsTrigger value="preview">Preview</TabsTrigger>
        <TabsTrigger value="code">Code</TabsTrigger>
      </TabsList>
      {children}
    </Tabs>
  )
}

ComponentPreview.displayName = 'ComponentPreview'

export function ComponentPreviewContent({ name }: { name: string }) {
  const Preview = componentPreviewConfig[name as keyof typeof componentPreviewConfig]?.demo
  return (
    <TabsContent className="mt-2 w-full p-0" value="preview">
      <div className="relative flex min-h-[350px] w-full items-center justify-center rounded-lg border border-neutral-200 p-2 dark:border-neutral-800 sm:p-10">
        <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:10px_10px] dark:bg-neutral-900" />
        {Preview ? <Preview /> : 'no preview'}
      </div>
    </TabsContent>
  )
}

ComponentPreviewContent.displayName = 'ComponentPreviewContent'

export function ComponentPreviewCode({ children }: { children: ReactNode }) {
  return (
    <TabsContent className="mt-2 w-full p-0" value="code">
      {children}
    </TabsContent>
  )
}

ComponentPreviewCode.displayName = 'ComponentPreviewCode'
