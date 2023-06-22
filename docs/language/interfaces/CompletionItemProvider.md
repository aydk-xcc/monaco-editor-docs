# CompletionItemProvider
`interface` [官网地址](https://microsoft.github.io/monaco-editor/docs.html#interfaces/languages.CompletionItemProvider.html)
## 属性 Properties
### triggerCharacters
+ 类型: `string[]` `可选`
+ 默认值: `-`
+ 可选项: `-`
+ 描述: ``
## 方法 Methods

### provideCompletionItems
+ 语法: `provideCompletionItems(model: ITextModel, position: Position, context: CompletionContext, token: CancellationToken): ProviderResult<CompletionList>`
+ 参数: 
  + model: [ITextModel](../../editor/interfaces/ITextModel.md)
  + position: [Position](../../global/classes/Position.md)
  + context: [CompletionContext](./CompletionContext.md)
  + token: [CancellationToken](../../global/interfaces/CancellationToken.md)
+ 返回值: [ProviderResult](../alias.md#providerresult)\<[CompletionList](./CompletionList.md)\>
+ 描述: ``

### resolveCompletionItem
+ 语法: `resolveCompletionItem(item: CompletionItem, token: CancellationToken): ProviderResult<CompletionItem>`
+ 参数: 
  + item: [CompletionItem](./CompletionItem.md)
  + token: [CancellationToken](../../global/interfaces/CancellationToken.md)
+ 返回值: [ProviderResult](../alias.md#providerresult)\<[CompletionItem](./CompletionItem.md)\>
+ 描述: ``

