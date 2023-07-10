# DocumentRangeFormattingEditProvider
`interface` [官网地址](https://microsoft.github.io/monaco-editor/docs.html#interfaces/languages.DocumentRangeFormattingEditProvider.html)
## 属性 Properties
### displayName
+ 类型: `string`  `可选` `只读` 
+ 默认值: `-`
+ 可选项: `-`
+ 描述: ``
## 方法 Methods

### provideDocumentRangeFormattingEdits
+ 语法: `provideDocumentRangeFormattingEdits(model: ITextModel, range: Range, options: FormattingOptions, token: CancellationToken): ProviderResult<TextEdit[]>`
+ 参数: 
  + model: [ITextModel](../../editor/interfaces/ITextModel.md)
  + range: [Range](../../global/classes/Range.md)
  + position: [FormattingOptions](./FormattingOptions.md)
  + token: [CancellationToken](../../global/interfaces/CancellationToken.md)
+ 返回值: [ProviderResult](../alias.md#providerresult)\<[TextEdit](./TextEdit.md)\>`
+ 描述: ``


### provideDocumentRangesFormattingEdits
+ 语法: `provideDocumentRangesFormattingEdits(model: ITextModel, ranges: Range[], options: FormattingOptions, token: CancellationToken): ProviderResult<TextEdit[]>`
+ 参数: 
  + model: [ITextModel](../../editor/interfaces/ITextModel.md)
  + ranges: [Range](../../global/classes/Range.md)[]
  + position: [FormattingOptions](./FormattingOptions.md)
  + token: [CancellationToken](../../global/interfaces/CancellationToken.md)
+ 返回值: [ProviderResult](../alias.md#providerresult)\<[TextEdit](./TextEdit.md)\>`
+ 描述: ``


