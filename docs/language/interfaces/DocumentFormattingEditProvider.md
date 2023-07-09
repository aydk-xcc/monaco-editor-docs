# DocumentFormattingEditProvider
`interface` [官网地址](https://microsoft.github.io/monaco-editor/docs.html#interfaces/languages.DocumentFormattingEditProvider.html)
## 属性 Properties
### displayName
+ 类型: `string`  `可选` `只读` 
+ 默认值: `-`
+ 可选项: `-`
+ 描述: ``
## 方法 Methods

### provideDocumentFormattingEdits
+ 语法: `provideDocumentFormattingEdits(model: ITextModel, position: Position, token: CancellationToken): ProviderResult<TextEdit[]>`
+ 参数: 
  + model: [ITextModel](../../editor/interfaces/ITextModel.md)
  + position: [FormattingOptions](./FormattingOptions.md)
  + token: [CancellationToken](../../global/interfaces/CancellationToken.md)
+ 返回值: [ProviderResult](../alias.md#providerresult)\<[TextEdit](./TextEdit.md)\>`
+ 描述: `提供给定位置和文档中符号的定义。`

