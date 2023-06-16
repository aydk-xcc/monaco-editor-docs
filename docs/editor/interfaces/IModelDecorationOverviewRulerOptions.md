# IModelDecorationOverviewRulerOptions
`interface` [官网地址](https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor.BracketPairColorizationOptions.html)

## 属性 Properties
### color
+ 类型： `string` | [ThemeColor](ThemeColor.md)
+ 描述：表示装饰在小地图中的颜色。可以是CSS颜色名称，HEX颜色代码或RGB颜色代码。如果未设置，则使用主题颜色。
### darkColor
+ 类型： `string`  | [ThemeColor](ThemeColor.md)  `可选` 
+ 默认值： `null` 
+ 可选项： `-` 
+ 描述：表示在小地图中使用的暗色。可以是CSS颜色名称，HEX颜色代码或RGB颜色代码。如果未设置，则使用主题颜色的暗色。
### position
+ 类型： [OverviewRulerLane](../enumerations.md#overviewrulerlane)
+ 描述：表示小地图上的装饰位置。可以是左侧或右侧。