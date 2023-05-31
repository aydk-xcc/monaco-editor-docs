import { defaultTheme } from 'vuepress';
import { searchPlugin } from '@vuepress/plugin-search';
import { googleAnalyticsPlugin } from '@vuepress/plugin-google-analytics';
import theme from './theme/theme';

export default {
  base: '/monaco-editor-docs/',
  head: [['script', 
    { 
      src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6740405326847035',
      crossorigin: 'anonymous',
      async : ''
    }
  ]],
  // lang: 'zh-CN',
  title: 'Monaco-editor 学习文档',
  description: 'Monaco-editor 学习文档',
  theme,
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
