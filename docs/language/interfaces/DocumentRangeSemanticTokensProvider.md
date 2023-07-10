# DocumentRangeSemanticTokensProvider
`interface` [官网地址](https://microsoft.github.io/monaco-editor/docs.html#interfaces/languages.DocumentRangeSemanticTokensProvider.html)

## 方法 Methods

### getLegend
+ 语法: `getLegend(): SemanticTokensLegend`
+ 参数: `-`
+ 返回值: [SemanticTokensLegend](./SemanticTokensLegend.md)
+ 描述: ``

### provideDocumentRangeSemanticTokens
+ 语法: `provideDocumentRangeSemanticTokens(model: ITextModel, range: Range, token: CancellationToken): ProviderResult<SemanticTokens>`
+ 参数: 
  + model: [ITextModel](../../editor/interfaces/ITextModel.md)
  + range: [Range](../../global/classes/Range.md)
  + token: [CancellationToken](../../global/interfaces/CancellationToken.md)
+ 返回值:  [ProviderResult](../alias.md#providerresult)\<[SemanticTokens](./SemanticTokens.md)\>`
+ 描述: ``

