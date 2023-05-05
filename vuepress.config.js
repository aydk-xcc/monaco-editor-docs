import { defaultTheme } from 'vuepress';
import { searchPlugin } from '@vuepress/plugin-search';
import { googleAnalyticsPlugin } from '@vuepress/plugin-google-analytics';
import theme from './theme/theme';

export default {
  base: '/monaco-editor-docs/',
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
