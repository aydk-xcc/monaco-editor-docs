# IMouseTargetMargin
`interface` [官网地址](https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor.IMouseTargetMargin.html)

## 属性 Properties
### detail
+ 类型： [IMouseTargetMarginData](IMouseTargetMarginData.md) `只读` 
+ 默认值： `-` 
+ 可选项： `-` 
+ 描述： `关于鼠标事件的详细信息。` 
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
+ 类型： [GUTTER_GLYPH_MARGIN](../enumerations.md#gutter_glyph_margin-2) | [GUTTER_LINE_NUMBERS](../enumerations.md#gutter_line_numbers-3) | [GUTTER_LINE_DECORATIONS](../enumerations.md#gutter_line_decorations-4)
+ 默认值： `-` 
+ 可选项： `-` 
+ 描述： `鼠标事件的类型。` 