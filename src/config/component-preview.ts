import { lazy } from 'react'

export const componentPreviewConfig = {
  RainbowButton: {
    name: 'RainbowButton',
    demo: lazy(() => import('@/components/registry/rainbox-button/demo')),
  },
}
