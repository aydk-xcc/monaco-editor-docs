import { navbar } from "vuepress-theme-hope";

export default navbar([
  { text: "编辑器(editor)", icon: "discover", link: "/editor/" },
  {
    text: "语言(language)",
    icon: "creative",
    link: "/language/"
  },
  {
    text: "worker",
    icon: "creative",
    link: "/worker/"
  },
  {
    text: "样例(demo)",
    icon: "creative",
    link: "/example/"
  },
  // {
  //   text: "自定义语言",
  //   icon: "creative",
  //   prefix: "/language/",
  //   children: [
  //     {
  //       text: "yaml",
  //       icon: "creative",
  //       link: 'custom-yaml.md'
  //     },
  //   ],
  // },
  { 
    text: 'Monaco-editor',
    children: [
      {
        text: '官方仓库',
        link: 'https://github.com/microsoft/monaco-editor' 
      },
      {
        text: '官方文档',
        link: 'https://microsoft.github.io/monaco-editor/' 
      }
    ]
  }
]);
