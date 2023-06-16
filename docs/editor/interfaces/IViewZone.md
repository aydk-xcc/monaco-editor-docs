# IViewZone
`interface` [官网地址](https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor.BracketPairColorizationOptions.html)

## 属性 Properties

### afterColumn
+ 类型： `number`   `可选` 
+ 默认值： `-` 
+ 可选项： `-` 
+ 描述： `该区域应出现在其后的列。如果未设置，将使用 afterLineNumber 的 maxLineColumn。这与换行有关。` 
 ### afterColumnAffinity
+ 类型： [PositionAffinity](../enumerations.md#positionaffinity) `可选` 
+ 默认值： `none` 
+ 可选项： `-` 
+ 描述： `如果 afterColumn 有多个视图列，亲和力指定使用哪一个。默认为none。` 
 ### afterLineNumber
+ 类型： `number` 
+ 默认值： `-` 
+ 可选项： `-` 
+ 描述： `该区域应出现在其后的行号。使用 0 在第一行号之前放置一个视图区域。` 
 ### domNode
+ 类型： `HTMLElement` 
+ 默认值： `-` 
+ 可选项： `-` 
+ 描述： `此视图区域的DOM节点。` 
 ### heightInLines
+ 类型： `number`   `可选` 
+ 默认值： `-` 
+ 可选项： `-` 
+ 描述： `区的行高。如果指定，将使用 heightInPx 代替它。如果既未指定 heightInPx 也未指定 heightInLines，则将选择默认值 heightInLines = 1。` 
 ### heightInPx
+ 类型： `number`   `可选` 
+ 默认值： `-` 
+ 可选项： `-` 
+ 描述： `视图区域的高度（以像素为单位）。如果设置了此项，编辑器将优先考虑它而不是上面的 heightInLines。如果既未指定 heightInPx 也未指定 heightInLines，则将选择默认值 heightInLines = 1。` 
 ### marginDomNode
+ 类型： `HTMLElement`   `可选` 
+ 默认值： `-` 
+ 可选项： `-` 
+ 描述： `此视图区域的边距DOM节点。` 
 ### minWidthInPx
+ 类型： `number`   `可选` 
+ 默认值： `-` 
+ 可选项： `-` 
+ 描述： `视图区域的最小宽度（以 px 为单位）。如果设置了这个，编辑器将确保滚动宽度 >= 比这个值。` 
 ### onComputedHeight
+ 类型： `(height: number) => void`   `可选` 
+ 默认值： `undefined` 
+ 可选项： `-` 
+ 描述： `当视图区域的高度已计算并可用时调用的回调函数。` 
 ### onDomNodeTop
+ 类型： `(top: number) => void`   `可选` 
+ 默认值： `undefined` 
+ 可选项： `-` 
+ 描述： `当视图区域的DOM节点的顶部位置已计算并可用时调用的回调函数。` 
 ### ordinal
+ 类型： `number`   `可选` 
+ 默认值： `-` 
+ 可选项： `-` 
+ 描述： `当多个视图区域想要位于同一行之后时使用的决胜局。默认为 afterColumn 否则为 10000；` 
 ### showInHiddenAreas
+ 类型： `boolean`   `可选` 
+ 默认值： `false` 
+ 可选项： `-` 
+ 描述： `如果为true，则即使编辑器中的文本被折叠，视图区域也将保持可见。` 
 ### suppressMouseDown
+ 类型： `boolean`   `可选` 
+ 默认值： `false` 
+ 可选项： `-` 
+ 描述： `抑制鼠标按下事件。如果设置，编辑器会将鼠标按下侦听器附加到视图区域并在其上添加 .preventDefault。默认为false` 