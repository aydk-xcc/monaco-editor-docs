# IEditorScrollbarOptions
`interface` [官网地址](https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor.BracketPairColorizationOptions.html)
## 参数 Properties

### alwaysConsumeMouseWheel?
+ 类型: `boolean`  `可选`
+ 默认值: `true`
+ 可选项: `-`
+ 描述: `始终使用鼠标滚轮事件（始终在浏览器事件上调用 preventDefault() 和 stopPropagation()）。默认为true。注意：此选项无法使用 updateOptions() 更新。 `

### arrowSize?
+ 类型: `number` `可选`
+ 默认值: `11`
+ 可选项: `-`
+ 描述: `指定箭头按钮的大小。默认值为 11 ,注意：此选项无法使用 updateOptions() 更新。`

### handleMouseWheel?
+ 类型: `boolean`  `可选`
+ 默认值: `true`
+ 可选项: `-`
+ 描述: `指示滚动条是否响应鼠标滚轮事件。默认值为 true 。 `

### horizontal?
+ 类型: `enum`  `可选`
+ 默认值: `auto`
+ 可选项: `"auto" | "visible" | "hidden"`
+ 描述: `渲染水平滚动条的方式，默认是auto。`

### horizontalHasArrows?
+ 类型: `boolean` `可选`
+ 默认值: `false`
+ 可选项: `-`
+ 描述: `指示水平滚动条是否具有箭头按钮。默认值为 false 。 注意：此选项无法使用 updateOptions() 更新。`

### horizontalScrollbarSize?
+ 类型: `number`  `可选`
+ 默认值: `10`
+ 可选项: `-`
+ 描述: `水平滚动滑块（注意和下面的区分）的高度，默认是`10`，单位是px。`

### horizontalSliderSize?
+ 类型: `number` `可选`
+ 默认值: `10`
+ 可选项: `-`
+ 描述: `水平滚动条滚动条的高度，默认和滑块一致，注意：此选项无法使用 updateOptions() 更新。`

### scrollByPage?
+ 类型: `boolean`  `可选`
+ 默认值: `false`
+ 可选项: `-`
+ 描述: `单击滚动条时，页面时按照页面的大小往下跳动还是直接跳动到点击的位置，默认是false，表示直接跳到点击位置`

### useShadows?
+ 类型: `boolean`  `可选`
+ 默认值: `true`
+ 可选项: `-`
+ 描述: `滚动条是否应使用阴影来指示滚动位置。默认值为 true 。 注意：此选项无法使用 updateOptions() 更新。`

### vertical?
+ 类型: `enum`  `可选`
+ 默认值: `auto`
+ 可选项: `"auto" | "visible" | "hidden"`
+ 描述: `渲染垂直滚动条的方式，默认是auto。`

### verticalHasArrows?
+ 类型: `boolean` `可选`
+ 默认值: `false`
+ 可选项: `-`
+ 描述: `指示垂直滚动条是否具有箭头按钮。默认值为 false 。 注意：此选项无法使用 updateOptions() 更新。`

### verticalScrollbarSize?
+ 类型: `number`  `可选`
+ 默认值: `10`
+ 可选项: `-`
+ 描述: `垂直滚动滑块（注意和下面的区分）的宽度，默认是`10`，单位是px。`


### verticalSliderSize?
+ 类型: `number`  `可选`
+ 默认值: `10`
+ 可选项: `-`
+ 描述: `水垂直滚动条滚动条的高度，默认和滑块一致，注意：此选项无法使用 updateOptions() 更新。`
