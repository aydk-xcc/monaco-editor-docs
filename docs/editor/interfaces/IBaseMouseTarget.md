# IBaseMouseTarget
`interface` [官网地址](https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor.IBaseMouseTarget.html)
鼠标的操作目标

## 属性 Properties

### element
+ 类型: `Element`  `可选`
+ 默认值: `-`
+ 可选项: `-`
+ 描述: `目标节点`

### mouseColumn
+ 类型: `number` `可选`
+ 默认值: `-`
+ 可选项: `-`
+ 描述: `所需的鼠标列（例如，当 position.column 被限制为文本长度时——在一行文本后单击）。`

### position
+ 类型: [Position](../../global/classes/Position.md) `可选`
+ 默认值: `-`
+ 可选项: `-`
+ 描述: `位置（行和列）`


### range
+ 类型: [Range](../../global/classes/Range.md)  `可选`
+ 默认值: `-`
+ 可选项: `-`
+ 描述: `范围（行和列）`