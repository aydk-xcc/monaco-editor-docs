# IDocumentDiffProviderOptions
`interface` [官网地址](https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor.IDocumentDiffProviderOptions.html)

示差异计算的配置选项
## 属性 Properties

### ignoreTrimWhitespace
+ 类型：[LineRangeMapping](../classes/LineRangeMapping.md)[]
+ 说明：当设置为 true 时，diff 会忽略空白变化

### maxComputationTimeMs
+ 类型： `number` 
+ 说明： 如果差异计算花费的时间超过此值，则会抛出差异计算。
