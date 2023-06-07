import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/editor/": [
    '/editor/declare.md',
    '/editor/install.md',
    '/editor/create.md',
    '/editor/instance.md',
    '/editor/TextModel.md',
    '/editor/editor.md',
    '/editor/theme.md',
    '/editor/language.md',
    // '/editor/action.md',
    '/editor/questions.md',
    '/editor/appendix.md'
  ],
  "/language/": [
    '/language/custom-yaml.md',
  ],
  "/example/": [
    '/example/README.md',
    '/example/cursor.md',
    '/example/contextMenu.md',
  ]
});
