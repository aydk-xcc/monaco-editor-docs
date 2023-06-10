# IGuidesOptions
`interface` 

## 参数 Properties

### bracketPairs?
+ 类型 `boolean | "active"`
+ 默认值 `false` 
+ 可选项 `boolean | "active"`
+ 说明 指定是否显示括号对的提示
### bracketPairsHorizontal?
+ 类型 `boolean | "active"`
+ 默认值 `active`
+ 可选项 `boolean | "active"`
+ 说明 指定是否在水平方向上绘制括号对。当启用此选项时，编辑器将在当前行上绘制一个边框，以突出显示当前行中的括号对。这可以帮助您更好地了解代码结构和括号匹配。 
### highlightActiveBracketPair?
+ 类型 `boolean` 
+ 默认值 `true`
+ 可选项 `-`
+ 说明 用于指定是否高亮显示活动括号对。当启用此选项时，编辑器将在当前光标所在的括号对上绘制一个边框，以突出显示它们。这可以帮助您更好地了解代码结构和括号匹配。
### highlightActiveIndentation?
+ 类型 `boolean | "always"`
+ 默认值 `true`
+ 可选项 `boolean | "always"`
+ 说明 用于指定是否突出显示活动缩进指南线。当启用此选项时，编辑器将在当前行上方绘制一条垂直线，表示当前行的缩进级别。这条线称为活动缩进指南线，它可以帮助您更好地了解当前行的缩进级别和代码结构。 
### indentation?
+ 类型 `boolean` 
+ 默认值 `true`
+ 可选项 `-`
+ 说明 用于指定是否渲染缩进指南线