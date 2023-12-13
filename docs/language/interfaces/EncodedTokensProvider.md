# EncodedTokensProvider
`interface` [官网地址](https://microsoft.github.io/monaco-editor/docs.html#interfaces/languages.EncodedTokensProvider.html)

## 方法 Methods

### getInitialState
+ 语法: `getInitialState(): `[IState](./IState.md)
+ 参数: `-`
+ 返回值: [IState](./IState.md)
+ 描述: `语言的初始化状态`

### tokenize
+ 语法: `tokenize(line: string, state:`[IState](./IState.md)`): `[ILineTokens](./ILineTokens.md)
+ 参数: 
  + line: `string` 
  + state: [IState](./IState.md)
+ 返回值: [ILineTokens](./ILineTokens.md)
+ 描述: `在给定行开头的状态的情况下对行进行标记`

### tokenizeEncoded
+ 语法: `tokenizeEncoded(line: string, state: IState): ` [IEncodedLineTokens](./IEncodedLineTokens.md)
+ 参数: 
  + line: `string` 
  + state: [IState](./IState.md)
+ 返回值: [IEncodedLineTokens](./IEncodedLineTokens.md)
+ 描述: `在给定行开头的状态的情况下对行进行标记。`
