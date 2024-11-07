'use client'

import { ReactNode, useState } from 'react'
import { RotateCcw } from 'lucide-react'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { componentPreviewConfig } from '@/config/component-preview'

import { Button } from '../ui/button'

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

export function ComponentPreviewContent({
  name,
  isReloadButton = false,
}: {
  name: string
  isReloadButton: boolean
}) {
  const [key, setKey] = useState(0)
  const Preview = componentPreviewConfig[name as keyof typeof componentPreviewConfig]?.demo
  return (
    <TabsContent className="mt-2 w-full p-0" value="preview" key={key}>
      <div className="relative flex min-h-[350px] w-full flex-col items-center justify-center overflow-x-auto rounded-lg border border-neutral-200 p-2 dark:border-neutral-800 sm:p-10">
        <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:10px_10px] dark:bg-neutral-900" />
        {isReloadButton && (
          <div className="absolute right-2 top-2">
            <Button
              onClick={() => setKey(prev => prev + 1)}
              className="absolute right-1.5 top-1.5 z-10 ml-4 flex items-center rounded-lg px-3 py-1"
              variant="ghost"
            >
              <RotateCcw aria-label="restart-btn" size={16} />
            </Button>
          </div>
        )}
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
