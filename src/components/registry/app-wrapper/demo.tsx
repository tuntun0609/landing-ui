import { AppWrapper } from '.'

export default function AppWrapperDemo() {
  return (
    <div className="flex flex-col gap-4">
      <AppWrapper url="https://example.com/path">
        <div className="flex h-[200px] w-[400px] items-center justify-center">Hello World!</div>
      </AppWrapper>
      <AppWrapper>
        <div className="flex h-[200px] w-[400px] items-center justify-center">
          Hello World! no url
        </div>
      </AppWrapper>
    </div>
  )
}
