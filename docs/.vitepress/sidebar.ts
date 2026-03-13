import { DefaultTheme } from 'vitepress'

export const sidebar: DefaultTheme.Sidebar = [
  {
    text: '序章',
    items: [{ text: '老男孩', link: '/prologue/old-boy' }]
  },
  {
    text: '你好，世界',
    items: [
      { text: '一场大雨', link: '/life/rain' },
      { text: '这是家', link: '/life/family' },
      { text: '我的老家，就住在这个屯', link: '/life/hometown' },
      { text: '童年', link: '/life/childhood' }
    ]
  },
  {
    text: '读书郎，上学堂',
    items: [{ text: '学前班', link: '/study/preschool' }]
  }
]
