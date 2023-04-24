import { defineUserConfig } from 'vuepress';
import { defaultTheme } from 'vuepress'
import { searchPlugin } from '@vuepress/plugin-search'

export default {
  lang: 'zh-CN',
  title: 'Monaco-editor 学习文档',
  description: '这是我的第一个 VuePress 站点',
  theme: defaultTheme({
    logo: 'logo.png',
    repo: 'aydk-xcc/monaco-editor-docs',
    // 默认主题配置
    navbar: [
      { text: '主页', link: '/' },
      { text: '自定义语言', link: '/test1/' },
      { text: '官方文档', link: 'https://microsoft.github.io/monaco-editor/' },
    ],
    sidebar: [
      // SidebarItem
      {
        text: '指南',
        children: [
          // SidebarItem
          '/editor/declare.md',
          '/editor/install.md',
          '/editor/create.md',
          '/editor/theme.md',
          '/questions.md'
        ],
      }
    ]
  }),
  plugins: [
    searchPlugin({
        // 配置项
      }),
  ]
}