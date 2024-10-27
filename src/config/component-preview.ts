import { lazy } from 'react'

export const componentPreviewConfig = {
  RainbowButton: {
    name: 'RainbowButton',
    demo: lazy(() => import('@/components/registry/rainbox-button/demo')),
  },
  ThemeToggle: {
    name: 'ThemeToggle',
    demo: lazy(() => import('@/components/registry/theme-toggle/demo')),
  },
}
