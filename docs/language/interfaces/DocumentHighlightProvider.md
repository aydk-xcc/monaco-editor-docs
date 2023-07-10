# DocumentHighlightProvider
`interface` [官网地址](https://microsoft.github.io/monaco-editor/docs.html#interfaces/languages.DocumentHighlightProvider.html)

## 方法 Methods

### provideDocumentHighlights
+ 语法: `provideDocumentHighlights(model: ITextModel, position: Position, token: CancellationToken): ProviderResult<DocumentHighlight[]>`
+ 参数: 
  + model: [ITextModel](../../editor/interfaces/ITextModel.md)
  + position: [Position](../../global/classes/Position.md)
  + token: [CancellationToken](../../global/interfaces/CancellationToken.md)
+ 返回值: [ProviderResult](../alias.md#providerresult)\<[DocumentHighlight](./DocumentHighlight.md)\>`
+ 描述: `提供一组文档亮点，例如变量的所有出现或函数的所有退出点。`
