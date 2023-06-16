# IMouseTargetViewZoneData
`interface` [官网地址](https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor.IMouseTargetViewZoneData.html)
通常用于处理与视图区域相关的鼠标事件。可以使用  editor.onMouseDown  或  editor.onMouseUp  等事件来监听这些事件。
## 属性 Properties
### afterLineNumber
+ 类型： `number`  `只读` 
+ 默认值： `-` 
+ 可选项： `-` 
+ 描述： `视图区域后面的行号` 

### position
+ 类型： [Position](../../global/classes/Position.md)
+ 默认值： `-` 
+ 可选项： `-` 
+ 描述： `鼠标事件发生视图区域的位置。` 

### positionAfter
+ 类型： [Position](../../global/classes/Position.md)
+ 默认值： `-` 
+ 可选项： `-` 
+ 描述： `鼠标事件发生的视图区域的前面` 

### positionBefore
+ 类型： [Position](../../global/classes/Position.md)
+ 默认值： `-` 
+ 可选项： `-` 
+ 描述： `鼠标事件发生的视图区域的后面。` 

### viewZoneId
+ 类型： `string`   `只读` 
+ 默认值： `-` 
+ 可选项： `-` 
+ 描述： `与鼠标事件相关联的视图区域的 ID。 ` 