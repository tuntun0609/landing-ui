import { Analytics } from '@/components/analytics'
import Footer from '@/components/footer'
import Header from '@/components/header'
import { TailwindIndicator } from '@/components/tailwind-Indicator'
import { ThemeProvider } from '@/components/theme'
import { Toaster } from '@/components/ui/sonner'

import type { Metadata } from 'next'

import '@/styles/globals.css'
import '@/styles/mdx.css'
import 'remark-github-blockquote-alert/alert.css'

export const metadata: Metadata = {
  title: 'Landing UI',
  description: 'Build your landing page with Landing UI easy and fast',
  keywords: ['Tailwindcss', 'Framer Motion', 'Landing Page', 'Next.js', 'React', 'Shadcn/UI'],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta
          name="google-site-verification"
          content="Z42CCDW8go3yBEHauSeZ5Uw2ycicfXbp1Wgli-bv2vw"
        />
      </head>
      <body className={'font-sans antialiased'}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="flex min-h-screen flex-col">
            <Header />
            <div className="min-h-[calc(100vh-3.5rem)] border-b">{children}</div>
            <Footer />
          </div>
          <TailwindIndicator />
          <Toaster />
        </ThemeProvider>
      </body>
      <Analytics />
    </html>
  )
}
