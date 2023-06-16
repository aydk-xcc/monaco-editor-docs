# IIdentifiedSingleEditOperation
`interface` [官网地址](https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor.IIdentifiedSingleEditOperation.html)

## 属性 Properties
### forceMoveMarkers?
+ 类型: `boolean`  `可选`
+ 默认值: `-`
+ 可选项: `-`
+ 描述: `这表明此操作具有“插入”语义。即 forceMoveMarkers = true => 如果范围折叠，该位置的所有标记都将被移动。`

### range
+ 类型: [IRange](../../global/interfaces/IRange.md) `可选`
+ 默认值: `-`
+ 可选项: `-`
+ 描述: `要替换的范围。这可以为空以模拟简单的插入。`

### text
+ 类型: `string`  `可选`
+ 默认值: `-`
+ 可选项: `-`
+ 描述: `要替换为的文本。这可以为 null 以模拟简单的删除。`
