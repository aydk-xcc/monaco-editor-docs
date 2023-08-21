# DocumentSymbolProvider
`interface` [官网地址](https://microsoft.github.io/monaco-editor/docs.html#interfaces/languages.DocumentSymbolProvider.html)
## 属性 Properties
### displayName
+ 类型: `string`  `可选`
+ 默认值: `-`
+ 可选项: `-`
+ 描述: ``


## 方法 Methods

### provideDocumentSymbols
+ 语法: `provideDocumentSymbols(model: ITextModel, token: CancellationToken): ProviderResult<DocumentSymbol[]>`
+ 参数: 
  + model: [ITextModel](../../editor/interfaces/ITextModel.md)
  + token: [CancellationToken](../../global/interfaces/CancellationToken.md)
+ 返回值: [ProviderResult](../alias.md#providerresult)\<[DocumentSymbol](./DocumentSymbol.md)[]\>
+ 描述: ``

