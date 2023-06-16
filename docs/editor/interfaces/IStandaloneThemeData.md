# IStandaloneThemeData
`interface` [官网地址](https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor.IStandaloneThemeData.html)
描述 Monaco 编辑器的主题数据
## 属性 Properties
### base
+ 类型： [BuiltinTheme](../aliase.md#builtintheme)
+ 描述：表示主题的基础样式规则。
### inherit
+ 类型： `boolean` 
+ 默认值： `true` 
+ 描述：如果为 true，则继承父级主题的样式规则。
### rules
+ 类型： [ITokenThemeRule](ITokenThemeRule.md) [] 
+ 描述：表示主题的样式规则。
### colors
+ 类型： [Icolor](../aliase.md#icolors)
+ 默认值： `[]` 
+ 描述：表示颜色。

### encodedTokensColors 
+ 类型： string[]  `可选`  
+ 默认值： []  
+ 描述：表示编码颜色的字符串数组。 
使用 IStandaloneThemeData 接口，可以描述 Monaco 编辑器的主题数据，并将其应用于编辑器。可以使用 base 属性指定基础样式规则，使用 inherit 属性指定是否继承父级主题的样式规则，使用 rules 属性指定主题的样式规则，使用 encodedTokensColors 属性指定编码颜色的字符串数组。