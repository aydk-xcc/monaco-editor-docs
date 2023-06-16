# IModelDecoration
`interface` [官网地址](https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor.IModelDecoration.html)

## 属性 Properties
### id
+ 类型： `string` `只读` 
+ 描述：表示装饰的唯一标识符。
### options
+ 类型：[ `IModelDecorationOptions` ](IModelDecorationMinimapOptions.md) `只读` 
+ 描述：表示装饰的选项。装饰选项定义了装饰的外观和行为。
### ownerId
+ 类型： `number`  `只读` 
+ 描述：表示装饰的所有者标识符。装饰的所有者可以是任何对象。
### range
+ 类型：[ `Range` ](../../global/classes/Range.md) `只读` 
+ 描述：表示装饰的范围。装饰的范围可以是文档中的任何位置或文本范围。