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
    // site-level locales config
    locales: {
      '/': {
        lang: 'en-US',
        title: 'VuePress',
        description: 'Vue-powered Static Site Generator',
      },
      '/zh/': {
        lang: 'zh-CN',
        title: 'VuePress',
        description: 'Vue 驱动的静态网站生成器',
      },
    },
    sidebar: [
      // SidebarItem
      {
        text: '指南',
        children: [
          // SidebarItem
          '/editor/declare.md',
          '/editor/install.md'
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