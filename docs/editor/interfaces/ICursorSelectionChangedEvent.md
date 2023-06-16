# ICursorSelectionChangedEvent
`interface` [官网地址](https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor.ICursorSelectionChangedEvent.html)

## 属性 Properties
### modelVersionId
+ 类型： `number`   `只读` 
+ 默认值： `-` 
+ 可选项： `-` 
+ 描述： `表示当前模型的版本 ID。` 
 ### oldModelVersionId
+ 类型： `number`   `只读` 
+ 默认值： `-` 
+ 可选项： `-` 
+ 描述： `表示更改前模型的版本 ID。` 
 ### oldSelections
+ 类型： [Selection](../../global/classes/Selection.md)[]   `只读` 
+ 默认值： `-` 
+ 可选项： `-` 
+ 描述： `表示更改前的选择。` 
 ### reason
+ 类型： [CursorChangeReason](../enumerations.md#cursorchangereason)   `只读` 
+ 默认值： `-` 
+ 可选项： `-` 
+ 描述： `表示更改光标位置的原因。` 
 ### secondarySelections
+ 类型： [Selection](../../global/classes/Selection.md)[]   `只读` 
+ 默认值： `-` 
+ 可选项： `-` 
+ 描述： `表示更改前的次要选择。` 
 ### selection
+ 类型： [Selection](../../global/classes/Selection.md)  `只读` 
+ 默认值： `-` 
+ 可选项： `-` 
+ 描述： `表示更改后的选择。` 
 ### source
+ 类型： `string`   `只读` 
+ 默认值： `-` 
+ 可选项： `-` 
+ 描述： `表示导致选择更改的源。` 