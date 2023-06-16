# IOverlayWidget
`interface` [官网地址](https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor.IOverlayWidget.html)

用于创建一个覆盖在编辑器上方的小部件。

## 方法 Methods
### getDomNode
+ 语法: `getDomNode(): HTMLElement`
+ 参数: ``
+ 返回值: `-`
+ 描述: `获取小部件的 DOM 元素。 `

### getId
+ 语法: `getId(): string`
+ 参数: ``
+ 返回值: `-`
+ 描述: `获取小部件的唯一标识符。 `

### getPosition
+ 语法: `getPosition(): IOverlayWidgetPosition`
+ 参数: ``
+ 返回值: [IOverlayWidgetPosition](IOverlayWidgetPosition.md)
+ 描述: `获取小部件的位置。 `