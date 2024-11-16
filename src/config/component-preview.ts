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
  HyperText: {
    name: 'HyperText',
    demo: lazy(() => import('@/components/registry/hyper-text/demo')),
  },
  UnderlineText: {
    name: 'UnderlineText',
    demo: lazy(() => import('@/components/registry/underline-text/demo')),
  },
  ThreeDCard: {
    name: 'ThreeDCard',
    demo: lazy(() => import('@/components/registry/3d-card/demo')),
  },
  Avatar: {
    name: 'Avatar',
    demo: lazy(() => import('@/components/registry/avatar/demo')),
  },
}
