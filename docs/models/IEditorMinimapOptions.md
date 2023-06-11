# IEditorMinimapOptions
`interface` minimap的配置参数

## 参数 Properties
### autohide?
+ 类型: `boolean`  `可选`
+ 默认值: `-`
+ 可选项: `-`
+ 描述: `控制minimap的渲染方式`

### enabled?
+ 类型: `boolean`  `可选`
+ 默认值: `true`
+ 可选项: `-`
+ 描述: `一个布尔值，指示是否启用缩略图。默认为 true `
  
### maxColumn?
+ 类型: `number`  `可选`
+ 默认值: `120`
+ 可选项: `-`
+ 描述: `渲染的最大列数，默认是120`

### renderCharacters?
+ 类型: `boolean`  `可选`
+ 默认值: `true`
+ 可选项: `-`
+ 描述: `一个布尔值，指示是否在缩略图中显示字符。默认为 true 。`

### scale?
+ 类型: `number`  `可选`
+ 默认值: `1`
+ 可选项: `-`
+ 描述: `字体的放大倍数，默认是1`

### showSlider?
+ 类型: `enum`  `可选`
+ 默认值: `mouseover`
+ 可选项: `"always" | "mouseover"`
+ 描述: `指示是否显示缩略图上的滑块。默认为'mouseover' ，表示仅在鼠标悬停在缩略图上时显示滑块。如果设置为 true ，则始终显示滑块。如果设置为 false ，则不显示滑块。 `

### side?
+ 类型: `enum`  `可选`
+ 默认值: `right`
+ 可选项: `"right" | "left"`
+ 描述: `指示缩略图的位置。可以是 left 或 right 。默认为 right 。`

### size?
+ 类型: `enum`  `可选`
+ 默认值: `actual`
+ 可选项: `-`
+ 描述: `"proportional" | "fill" | "fit"`