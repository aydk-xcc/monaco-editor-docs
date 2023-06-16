# ICursorPositionChangedEvent
`interface` [官网地址](https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor.ICursorPositionChangedEvent.html)
描述光标位置已更改的事件。
## 属性 Properties
### position
+ 类型: [Position](../../global/classes/Position.md) `只读` 
+ 默认值: `-`
+ 可选项: `-`
+ 描述: `主光标的位置。`

### reason
+ 类型: [CursorChangeReason](../enumerations.md#cursorchangereason) `只读`
+ 默认值: `-`
+ 可选项: `-`
+ 描述: `光标改变的原因`

### secondaryPositions
+ 类型: [Position](../../global/classes/Position.md)[] `只读`
+ 默认值: `-`
+ 可选项: `-`
+ 描述: `辅助光标的位置`

### source
+ 类型: `string`  `只读`
+ 默认值: `-`
+ 可选项: `-`
+ 描述: `事件的触发源。`