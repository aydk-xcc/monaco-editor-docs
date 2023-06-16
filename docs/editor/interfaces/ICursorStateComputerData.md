# ICursorStateComputerData
`interface` [官网地址](https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor.ICursorStateComputerData.html)

## 方法 Methods
### getInverseEditOperations
+ 语法: `getInverseEditOperations(): IValidEditOperation[]`
+ 参数: `-`
+ 返回值: [IValidEditOperation](IValidEditOperation.md)[]
+ 描述: `获取添加的编辑操作的反编辑操作`

### getTrackedSelection
+ 语法: `getTrackedSelection(id: string): Selection`
+ 参数: 
  + id: `string` 
+ 返回值: [Selection](../../global/classes/Selection.md)
+ 描述: `获取以前跟踪的选择。`
