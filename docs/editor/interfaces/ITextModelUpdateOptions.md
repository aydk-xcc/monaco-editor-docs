# ITextModelUpdateOptions
`interface` [官网地址](https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor.ITextModelUpdateOptions.html)
用于描述更新文本模型时的选项
## 属性 Properties
### tabSize
+ 类型： `number` `可选` 
+ 描述：指定制表符的大小。
### insertSpaces
+ 类型： `boolean` `可选` 
+ 描述：如果为 true，则使用空格而不是制表符进行缩进。
### trimAutoWhitespace
+ 类型： `boolean` `可选` 
+ 描述：如果为 true，则自动删除空格。
使用 ITextModelUpdateOptions 接口，可以在更新文本模型时指定选项，例如指定制表符的大小、使用空格而不是制表符进行缩进以及自动删除空格。

### bracketColorizationOptions?
+ 类型: [BracketPairColorizationOptions](BracketPairColorizationOptions.md) `可选`
+ 默认值: `-`
+ 可选项: `-`
+ 描述: ``

### indentSize?
+ 类型: `number | "tabSize"` `可选`
+ 默认值: `-`
+ 可选项: `-`
+ 描述: `缩进值的大小`
