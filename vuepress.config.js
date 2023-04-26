import { defineUserConfig } from 'vuepress';
import { defaultTheme } from 'vuepress';
import { searchPlugin } from '@vuepress/plugin-search';
import { googleAnalyticsPlugin } from '@vuepress/plugin-google-analytics'

export default {
  base: '/monaco-editor-docs/',
  lang: 'zh-CN',
  title: 'Monaco-editor 学习文档',
  description: 'Monaco-editor 学习文档',
  head: [['link', { rel: 'icon', href: '/logo.png' }]],
  theme: defaultTheme({
    logo: 'logo.png',
    repo: 'aydk-xcc/monaco-editor-docs',
    // 默认主题配置
    navbar: [
      { text: '主页', link: '/' },
      { 
        text: '自定义language教程',
        children: [
          {
            text: '自定义YAML',
            link: '/language/custom-yaml.md' 
          }
        ]
      },
      { 
        text: 'Monaco-editor',
        children: [
          {
            text: '官方仓库',
            link: 'https://microsoft.github.io/monaco-editor/' 
          },
          {
            text: '官方文档',
            link: 'https://microsoft.github.io/monaco-editor/' 
          }
        ]
       },
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
          '/editor/instance.md',
          '/editor/editor.md',
          '/editor/theme.md',
          // '/editor/action.md',
          '/questions.md'
        ],
      }
    ]
  }),
  plugins: [
    searchPlugin({
        // 配置项
    }),
    googleAnalyticsPlugin({
      // 配置项
      id: 'G-9JXXNEMHNK'
    }),
  ]
}
