# DocumentSemanticTokensProvider
`interface` [官网地址](https://microsoft.github.io/monaco-editor/docs.html#interfaces/languages.DocumentSemanticTokensProvider.html)
## 属性 Properties
### onDidChange
+ 类型: IEvent<void> `可选`
+ 默认值: `-`
+ 可选项: `-`
+ 描述: ``

## 方法 Methods

### getLegend
+ 语法: `getLegend(): SemanticTokensLegend`
+ 参数: ``
+ 返回值: [SemanticTokensLegend](./SemanticTokensLegend.md)
+ 描述: ``

### provideDocumentSemanticTokens
+ 语法: `provideDocumentSemanticTokens(model: ITextModel, lastResultId: string, token: CancellationToken): ProviderResult<SemanticTokens | SemanticTokensEdits>`
+ 参数: 
  + model: [ITextModel](../../editor/interfaces/ITextModel.md)
  + lastResultId: `string` 
  + token: [CancellationToken](../../global/interfaces/CancellationToken.md)
+ 返回值:  [ProviderResult](../alias.md#providerresult)\<[SemanticTokens](./SemanticTokens.md) | [SemanticTokensEdits](./SemanticTokensEdits.md)\>`
+ 描述: ``

### releaseDocumentSemanticTokens
+ 语法: `releaseDocumentSemanticTokens(resultId: string): void`
+ 参数: 
  + resultId: `string` 
+ 返回值: `void`
+ 描述: ``
