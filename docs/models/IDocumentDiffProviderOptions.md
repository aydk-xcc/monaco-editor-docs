# IDocumentDiffProviderOptions
`Interface` 表示差异计算的配置选项

## 参数 
### ignoreTrimWhitespace
+ 类型：[LineRangeMapping](LineRangeMapping.md)[]
+ 说明：当设置为 true 时，diff 会忽略空白变化

### maxComputationTimeMs
+ 类型： `number` 
+ 说明： 如果差异计算花费的时间超过此值，则会抛出差异计算。
