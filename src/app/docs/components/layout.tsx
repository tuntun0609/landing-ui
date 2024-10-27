import Sidebar from '@/components/side-bar'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex-1 items-start px-4 pt-12 md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 md:px-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10 lg:px-8">
      <div className="fixed top-[5rem] z-30 hidden h-[calc(100vh-6.5rem)] w-full md:sticky md:block">
        <div className="">
          <Sidebar />
        </div>
      </div>
      <main className="pb-12">{children}</main>
    </div>
  )
}
