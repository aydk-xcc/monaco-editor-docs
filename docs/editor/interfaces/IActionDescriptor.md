# IActionDescriptor
`interface` [官网地址](https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor.IActionDescriptor.html)

editor action 的描述

## 属性 Properties

### contextMenuGroupId?
+ 类型: `string`  `可选`
+ 默认值: `-`
+ 可选项: `-`
+ 描述: `控制操作是否应显示在上下文菜单中以及显示位置。 编辑器的上下文菜单有这些默认值： navigation - 导航组在所有情况下都排在第一位。 1_modification - 该组紧随其后，包含修改代码的命令。 9_cutcopypaste - 带有基本编辑命令的最后一个默认组。 您也可以创建自己的群组。 默认为空（不显示在上下文菜单中）。`

### contextMenuOrder?
+ 类型: `string`  `可选`
+ 默认值: `-`
+ 可选项: `-`
+ 描述: `上下文菜单的排序`

### id
+ 类型: `string` `必选` 
+ 默认值: `-`
+ 可选项: `-`
+ 描述: `描述action的唯一的id`

### keybindingContext?
+ 类型: `string`  `可选` 
+ 默认值: `-`
+ 可选项: `-`
+ 描述: `键绑定规则（前提规则之上）`


### keybindings?
+ 类型: `number[]`  `可选`
+ 默认值: `-`
+ 可选项: `-`
+ 描述: `一组键绑定`

### label
+ 类型: `string` `必选` 
+ 默认值: `-`
+ 可选项: `-`
+ 描述: `用户可以看到的action的名称`

### precondition?
+ 类型: `string`  `可选`
+ 默认值: `-`
+ 可选项: `-`
+ 描述: `前提规则`

## 方法 Methods

### run
+ 语法: `run(editor: ICodeEditor, ...args: any[]): void | Promise<void>`
+ 参数: 
  + ICodeEditor：[ICodeEditor](ICodeEditor.md)
  + args： any[]
+ 返回值: `-`
+ 描述: `action 的执行方法`