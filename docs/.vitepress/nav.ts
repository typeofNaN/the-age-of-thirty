import { DefaultTheme } from 'vitepress'
import { SIDEBAR_GROUP } from './constants'

export const nav: DefaultTheme.NavItem[] = [
  {
    text: '那些年',
    activeMatch: SIDEBAR_GROUP.thoseYears,
    items: [
      { text: '序章', link: `${SIDEBAR_GROUP.thoseYears}prologue/old-boy` },
      { text: '你好，世界', link: `${SIDEBAR_GROUP.thoseYears}life/rain` },
      { text: '读书郎，上学堂', link: `${SIDEBAR_GROUP.thoseYears}study/preschool` }
    ]
  },
  {
    text: '那些人',
    activeMatch: SIDEBAR_GROUP.thosePeople,
    items: [{ text: '那些朋友', link: `${SIDEBAR_GROUP.thosePeople}friend/yong` }]
  }
]
