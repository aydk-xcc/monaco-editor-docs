import { defaultTheme } from 'vuepress';
import { searchPlugin } from '@vuepress/plugin-search';
import { googleAnalyticsPlugin } from '@vuepress/plugin-google-analytics';
import theme from './theme/theme';

export default {
  base: '/',
  head: [['meta', 
    { 
      name: 'baidu_union_verify',
      content: 'f3196ecc94e3228c1b7d6190535d098a',
    }
  ]],
  // lang: 'zh-CN',
  title: 'Monaco-editor 学习文档',
  description: 'Monaco-editor 学习文档',
  theme,
  plugins: [
    searchPlugin({
        // 配置项
        locales: {
          '/': {
            placeholder: '搜索',
          },
        },
        maxSuggestions: 10
    }),
    googleAnalyticsPlugin({
      // 配置项
      id: 'G-9JXXNEMHNK'
    }),
  ]
}
