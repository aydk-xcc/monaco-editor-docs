# ICommand
`interface` [官网地址](https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor.ICommand.html)

修改模型上的文本/光标状态的命令

## 方法 Methods

### computeCursorState
+ 语法: `computeCursorState(model: ITextModel, helper: ICursorStateComputerData): Selection`
+ 参数: 
  + model： [ITextModel](ITextModel.md)
  + helper: [ICursorStateComputerData](ICursorStateComputerData.md)
+ 返回值: [Selection](../../global/classes/Selection.md)
+ 描述: `计算操作之后的光标状态`

### getEditOperations
+ 语法: `getEditOperations(model: ITextModel, builder: IEditOperationBuilder): void`
+ 参数: 
  + model： [ITextModel](ITextModel.md)
  + builder： [IEditOperationBuilder](IEditOperationBuilder.md)
+ 返回值: `-`
+ 描述: `获取执行此命令所需的编辑操作。`