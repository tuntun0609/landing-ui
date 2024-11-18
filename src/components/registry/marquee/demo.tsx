import { Marquee } from '.'

const MarqueeDemo = () => (
  <div className="relative flex h-[200px] w-[80%] items-center justify-center overflow-hidden rounded-md border bg-background">
    <Marquee pauseOnHover className="[--duration:20s]">
      {Array(10)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className="flex h-20 w-20 items-center justify-center rounded-md border bg-background text-xl font-bold"
          >
            {i}
          </div>
        ))}
    </Marquee>
    <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background" />
    <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background" />
  </div>
)

export default MarqueeDemo
