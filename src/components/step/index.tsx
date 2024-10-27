import { cn } from '@/lib/utils'

export function Step({ className, ...props }: React.ComponentProps<'h3'>) {
  return (
    <h3
      className={cn(
        'font-heading my-8 scroll-m-20 text-xl font-semibold tracking-tight',
        className
      )}
      {...props}
    />
  )
}

Step.displayName = 'Step'

export function Steps({ ...props }: React.ComponentProps<'div'>) {
  return (
    <div className="[&>h3]:step steps mb-12 ml-4 border-l pl-8 [counter-reset:step]" {...props} />
  )
}

Steps.displayName = 'Steps'
