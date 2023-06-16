# ICursorStateComputer
`interface` [官网地址](https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor.ICursorStateComputer.html)
执行某些编辑操作后可以计算结果游标状态的回调。

## 方法 Methods
+ 用法 `ICursorStateComputer(inverseEditOperations: IValidEditOperation[]): Selection[]`
+ 参数：
  + inverseEditOperations： [IValidEditOperation](./IValidEditOperation.md)
+ 返回值: [Selection](../../global/classes/Selection.md)[]