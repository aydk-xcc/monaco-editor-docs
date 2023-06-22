# CodeLensProvider
`interface` [官网地址](https://microsoft.github.io/monaco-editor/docs.html#interfaces/languages.CodeLensProvider.html)
## 属性 Properties
### onDidChange
+ 类型: [IEvent](../../global/interfaces/IEvent.md)\<[CodeLensProvider](CodeLensProvider.md)\>` `可选`
+ 默认值: `-`
+ 可选项: `-`
+ 描述: ``
## 方法 Methods

### provideCodeLenses
+ 语法: `provideCodeLenses(model: ITextModel, token: CancellationToken): ProviderResult<CodeLensList>`
+ 参数: 
  + model: [ITextModel](../../editor/interfaces/ITextModel.md)
  + token: [CancellationToken](../../global/interfaces/CancellationToken.md)
+ 返回值: [ProviderResult](../alias.md#providerresult)\<[CodeLensList](./CodeActionList.md)\>
+ 描述: ``

### resolveCodeLens
+ 语法: `resolveCodeLens(model: ITextModel, codeLens: CodeLens, token: CancellationToken): ProviderResult<CodeLens>`
+ 参数: 
  + model: [ITextModel](../../editor/interfaces/ITextModel.md)
  + codeLens: [codeLens](./CodeLens.md)
  + token: [CancellationToken](../../global/interfaces/CancellationToken.md)
+ 返回值: [ProviderResult](../alias.md#providerresult)\<[CodeLens](./CodeLens.md)\>
+ 描述: ``
