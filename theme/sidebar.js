import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/editor/": [
    '/editor/declare.md',
    '/editor/editor.md',
    '/editor/create.md',
    '/editor/instance.md',
    '/editor/diffEditorOption.md',
    '/editor/diffEditorInstance.md',
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
    '/example/install.md',
    '/example/show.md',
    '/example/cursor.md',
    '/example/contextMenu.md',
  ],

  "/models/": [
    '/models/README.md',
    '/models/Alias.md',
    '/models/IDocumentDiff.md',
    '/models/IDocumentDiffProvider.md',
    '/models/IDocumentDiffProviderOptions.md',
    '/models/IEditorFindOptions.md',
    '/models/IEditorHoverOptions.md',
    '/models/IGotoLocationOptions.md',
    '/models/ITextModel.md',
    '/models/lineRange.md',
    '/models/lineRange.md',
    '/models/LineRangeMapping.md',
  
  ]
});
