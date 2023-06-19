# CodeActionProvider
`interface` [官网地址](https://microsoft.github.io/monaco-editor/docs.html#interfaces/languages.CodeActionProvider.html)

## 方法 Methods

### provideCodeActions
+ 语法: `provideCodeActions(model: ITextModel, range: Range, context: CodeActionContext, token: CancellationToken): ProviderResult<CodeActionList>`
+ 参数: 
  + model: [ITextModel](../../editor/interfaces/ITextModel.md)
  + range: [Range](../../global/classes/Range.md)
  + context: [CodeActionContext](CodeActionContext.md)
  + token: [CancellationToken](../../global/interfaces/CancellationToken.md)
+ 返回值: [ProviderResult](../alias.md#providerresult)\<[CodeActionList](./CodeActionList.md)\>
+ 描述: `为给定的文档和范围提供命令。`


### resolveCodeAction
+ 语法: `resolveCodeAction(codeAction: CodeAction, token: CancellationToken): ProviderResult<CodeAction>`
+ 参数: 
  + codeAction： [CodeAction](./CodeAction.md)
  + token: [CancellationToken](../../global/interfaces/CancellationToken.md)
+ 返回值: [ProviderResult](../alias.md#providerresult)\<[CodeActionList](./CodeActionList.md)\>
+ 描述: `给定代码操作填写编辑。仅在丢失时调用。`

