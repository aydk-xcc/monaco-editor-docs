# IMouseTargetOutsideEditor
`interface` [官网地址](https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor.IMouseTargetOutsideEditor.html)

## 属性 Properties
### element
+ 类型： `HTMLElement` 
+ 默认值： `-` 
+ 可选项： `-` 
+ 描述： `与鼠标事件相关联的HTML元素。` 
### mouseColumn
+ 类型： `number` 
+ 默认值： `-` 
+ 可选项： `任何整数` 
+ 描述： `所需的鼠标列（例如，当 position.column 被限制为文本长度时——在一行文本后单击）。` 

### outsideDistance
+ 类型: `number`  `可选`
+ 默认值: `-`
+ 可选项: ``
+ 描述: ``

### outsidePosition
+ 类型: `enum`  `可选`
+ 默认值: `-`
+ 可选项: `"right" | "left" | "above" | "below"`
+ 描述: ``

### position
+ 类型： [Position](../../global/classes/Position.md)
+ 默认值： `-` 
+ 可选项： `-` 
+ 描述： `鼠标事件发生的位置。` 
### range
+ 类型： [Range](../../global/classes/Range.md)
+ 默认值： `-` 
+ 可选项： `-` 
+ 描述： `鼠标事件发生的范围。` 
### type
+ 类型： [OUTSIDE_EDITOR](../enumerations.md#outside_editor-13)
+ 默认值： `-` 
+ 可选项： `-` 
+ 描述： `鼠标事件的类型。` 