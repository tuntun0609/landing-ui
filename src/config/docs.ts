import { DocsConfig } from '@/types/docs'

export const docsConfig: DocsConfig[] = [
  {
    title: 'Get Started',
    items: [
      {
        title: 'Introduction',
        href: '/docs/components/introduction',
      },
    ],
  },
  {
    title: 'Component',
    items: [
      {
        title: 'Theme Toggle',
        href: '/docs/components/theme-toggle',
      },
      {
        title: 'Fade Text',
        href: '/docs/components/fade-text',
      },
      {
        title: 'App Wrapper',
        href: '/docs/components/app-wrapper',
      },
      {
        title: 'Hyper Text',
        href: '/docs/components/hyper-text',
      },
      // {
      //   title: 'Common Header',
      //   href: '/docs/components/common-header',
      // },
      {
        title: 'Underline Text',
        href: '/docs/components/underline-text',
      },
      {
        title: '3D Card',
        href: '/docs/components/3d-card',
      },
    ],
  },
  {
    title: 'Dev Components',
    href: '/docs/dev-components',
    items: [
      {
        title: 'Tailwind Indicator',
        href: '/docs/components/tailwind-indicator',
      },
    ],
  },
]
