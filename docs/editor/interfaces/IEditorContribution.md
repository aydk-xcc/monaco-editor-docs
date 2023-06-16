# IEditorContribution
`interface` [官网地址](https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor.IEditorContribution.html)
每次创建新编辑器时都会创建编辑器贡献，并在编辑器被处置时被处置。
## 方法 Methods
### dispose
+ 语法: `dispose(): void`
+ 参数: ``
+ 返回值: `-`
+ 描述: ``

### restoreViewState?
+ 语法: `restoreViewState(state: any): void`
+ 参数: `state: any`
+ 返回值: `void`
+ 描述: `恢复视图状态。`

### saveViewState?
+ 语法: `saveViewState(): any`
+ 参数: ``
+ 返回值: `any`
+ 描述: `存储视图状态`
