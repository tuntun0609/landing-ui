import { lazy } from 'react'

export const componentPreviewConfig = {
  ThemeToggle: {
    name: 'ThemeToggle',
    demo: lazy(() => import('@/components/registry/theme-toggle/demo')),
  },
  TailwindIndicator: {
    name: 'TailwindIndicator',
    demo: lazy(() => import('@/components/registry/tailwind-Indicator')),
  },
  FadeText: {
    name: 'FadeText',
    demo: lazy(() => import('@/components/registry/fade-text/demo')),
  },
  AppWrapper: {
    name: 'AppWrapper',
    demo: lazy(() => import('@/components/registry/app-wrapper/demo')),
  },
}
