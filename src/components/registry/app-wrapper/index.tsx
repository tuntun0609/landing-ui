export type AppWrapperProps = {
  url?: string
  children?: React.ReactNode
}

export const AppWrapper = ({ url, children }: AppWrapperProps) => (
  <div className="relative flex flex-col overflow-hidden rounded-lg border">
    <div className="relative flex min-w-96 items-center justify-between gap-2 border-b bg-muted p-2">
      <div className="flex-2 flex gap-1">
        <div className="h-3 w-3 rounded-full border-[#ed6a5f] bg-[#ed6a5e]" />
        <div className="h-3 w-3 rounded-full border-[#f4b407] bg-[#f4b400]" />
        <div className="h-3 w-3 rounded-full border-[#51b707] bg-[#51b707]" />
      </div>
      {url && (
        <div className="absolute left-[50%] top-[50%] flex -translate-x-[50%] -translate-y-[50%] items-center justify-end rounded-md border bg-slate-200 px-2 text-xs text-muted-foreground dark:bg-[#0a0a0a]">
          {url}
        </div>
      )}
      <div />
    </div>
    <div className="flex-1 bg-background">{children}</div>
  </div>
)

AppWrapper.displayName = 'AppWrapper'
