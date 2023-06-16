# IContentWidget
`interface` [官网地址](https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor.IContentWidget.html)
内容小部件与文本内联呈现，并且可以轻松放置在编辑器位置“附近”。
## 属性 Properties
### allowEditorOverflow
+ 类型： `boolean`   `可选` 
+ 默认值： `false` 
+ 可选项： `-` 
+ 描述： `指示内容小部件是否可以溢出编辑器的边界。` 
### suppressMouseDown
+ 类型： `boolean`   `可选` 
+ 默认值： `false` 
+ 可选项： `-` 
+ 描述： `指示是否应该在小部件上按下鼠标时阻止默认的编辑器行为。` 

## 方法 Methods
### afterRender
+ 语法： `afterRender(position: ContentWidgetPositionPreference): void` 
+ 参数：
    + position：[ContentWidgetPositionPreference](../enumerations.md#contentwidgetpositionpreference)
+ 返回值： `void` 
+ 描述： `执行操作的方法。` 
 ### beforeRender
+ 语法： `beforeRender?(): IDimension` 
+ 参数： `-` 
+ 返回值： [IDimension](IDimension.md) 
+ 描述： `在渲染内容之前执行的可选操作。` 
 ### getDomNode
+ 语法： `getDomNode(): HTMLElement | null` 
+ 参数： `-` 
+ 返回值： `HTMLElement | null` 
+ 描述： `获取内容窗口小部件的 DOM 节点。` 
 ### getId
+ 语法： `getId(): string` 
+ 参数： `-` 
+ 返回值： `string` 
+ 描述： `获取内容窗口小部件的唯一标识符。` 
 ### getPosition
+ 语法： `getPosition(): IContentWidgetPosition | null` 
+ 参数： `-` 
+ 返回值： [IContentWidgetPosition](IContentWidgetPosition.md) | null` 
+ 描述： `获取内容窗口小部件的位置。` 