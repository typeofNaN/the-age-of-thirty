import { defineConfig } from 'vitepress'

import { BASE_URL } from './constants'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: BASE_URL,
  title: "typeofNaN",
  description: "A VitePress Site",
  lang: 'zh-CN',
  head: [
    ['link', { rel: 'icon', href: `${BASE_URL}favicon.ico`, type: 'image/x-icon' }],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    search: {
      provider: 'local'
    },

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/typeofNaN/the-age-of-thirty' }
    ]
  }
})
