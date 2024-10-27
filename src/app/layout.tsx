import localFont from 'next/font/local'

import Footer from '@/components/footer'
import Header from '@/components/header'
import { ThemeProvider } from '@/components/theme'

import type { Metadata } from 'next'

import '@/styles/globals.css'
import '@/styles/mdx.css'
import 'remark-github-blockquote-alert/alert.css'

export const metadata: Metadata = {
  title: 'Landing UI',
  description: 'Build your landing page with Landing UI easy and fast',
  keywords: ['Tailwindcss', 'Framer Motion', 'Landing Page', 'Next.js', 'React', 'Shadcn/UI'],
  icons: {
    icon: '/image/logo.svg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={'font-sans antialiased'}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="flex min-h-screen flex-col">
            <Header />
            <div className="min-h-[calc(100vh-3.5rem)] border-b">{children}</div>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
