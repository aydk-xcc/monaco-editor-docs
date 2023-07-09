# DefinitionProvider
`interface` [官网地址](https://microsoft.github.io/monaco-editor/docs.html#interfaces/languages.DefinitionProvider.html)

## 方法 Methods

### provideDefinition
+ 语法: `provideDefinition(model: ITextModel, position: Position, token: CancellationToken): ProviderResult<Definition>`
+ 参数: 
  + model: [ITextModel](../../editor/interfaces/ITextModel.md)
  + position: [Position](../../global/classes/Position.md)
  + token: [CancellationToken](../../global/interfaces/CancellationToken.md)
+ 返回值: [ProviderResult](../alias.md#providerresult)\<[Definition](../alias.md#definition)\>`
+ 描述: `提供给定位置和文档中符号的定义。`
