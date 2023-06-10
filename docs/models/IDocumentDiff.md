# IDocumentDiff
`Interface` 表示两个文本模型之间的差异

## 参数 
### changes
+ 类型：[LineRangeMapping](LineRangeMapping.md)[]
+ 说明：文本修改前后的映射关系

### identical
+ 类型： `boolean` 
+ 说明： 如果为`true`，则两个文本模型是相同的（按字节）。

### quitEarly
+ 类型： `boolean` 
+ 说明： 如果为`true`，则差异计算超时并且差异可能不准确。