# CodeActionContext
`interface` [官网地址](https://microsoft.github.io/monaco-editor/docs.html#interfaces/languages.CodeActionContext.html)

包含有关运行代码操作的上下文的附加诊断信息。

## 属性 Properties

### markers
+ 类型: [IMarkerData](../../editor/interfaces/IMarkerData.md)[]  `可选`
+ 默认值: `-`
+ 可选项: `-`
+ 描述: `诊断数据的数组`

### only
+ 类型: `string`  `可选` `只读` 
+ 默认值: `-`
+ 可选项: `-`
+ 描述: `请求返回的操作类型。`

### trigger
+ 类型: [CodeActionTriggerType](../enumerations.md#codeactiontriggertype) `只读` 
+ 默认值: `-`
+ 可选项: `-`
+ 描述: `请求代码操作的原因。`

