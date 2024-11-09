import Link from 'next/link'

import { docsConfig } from '@/config/docs'

export default function Home() {
  return (
    <div className="container">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {docsConfig
          .find(item => item.title === 'Component')
          ?.items?.map(component => (
            <Link
              key={component.title}
              href={component.href ?? ''}
              className="group relative cursor-pointer rounded-lg border p-6 hover:border-foreground/20"
            >
              <h3 className="font-bold">{component.title}</h3>
              {/* <p className="mt-2 text-sm text-muted-foreground">{component.description}</p> */}
            </Link>
          ))}
      </div>
    </div>
  )
}
