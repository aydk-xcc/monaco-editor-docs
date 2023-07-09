# CodeLens
`interface` [官网地址](https://microsoft.github.io/monaco-editor/docs.html#interfaces/languages.CodeLens.html)
## 属性 Properties
### command
+ 类型: [Command](./Command.md) `可选`
+ 默认值: `-`
+ 可选项: `-`
+ 描述: `表示与 CodeLens 关联的命令。它是一个包含  id  和  title  属性的对象。 id  是命令的唯一标识符， title  是命令的显示文本。 `

### id
+ 类型:  `可选`
+ 默认值: `-`
+ 可选项: `-`
+ 描述: `id标识`

### range
+ 类型: [IRange](../../global/interfaces/IRange.md) `可选`
+ 默认值: `-`
+ 可选项: `-`
+ 描述: `表示 CodeLens 所在代码行的范围。它是一个包含  startLineNumber 、 startColumn 、 endLineNumber  和  endColumn  属性的对象。`

