import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/v-cms/',
  title: '@mark.walker/v-cms',
  description: 'Simple Vue3 CMS',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Docs', link: '/installation' },
    ],

    sidebar: [
      {
        text: 'Installation',
        collapsed: false,
        items: [
          { text: 'Get started', link: '/installation' },
        ],
      },
      {
        text: 'Examples',
        collapsed: false,
        items: [
          { text: 'Basic', link: '/examples/basic' },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/marekprochazka/v-cms' },
      { icon: 'npm', link: 'https://www.npmjs.com/package/@mark.walker/v-cms' },
    ],
  },
})
