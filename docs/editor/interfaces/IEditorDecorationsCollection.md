# IEditorDecorationsCollection
`interface` [官网地址](https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor.IEditorDecorationsCollection.html)
装饰品的集合
## 属性 Properties
### length
+ 类型: `number`  `可选`
+ 默认值: `-`
+ 可选项: `-`
+ 描述: `获取装饰计数。`

### onDidChange
+ 类型: IEvent[IModelDecorationsChangedEvent](IModelDecorationsChangedEvent.md) `可选`
+ 默认值: `-`
+ 可选项: `-`
+ 描述: `当编辑器中的装饰发生变化时发出的事件，但变化不是由我们设置或清除集合引起的。`

## 方法 Methods
### clear
+ 语法: `clear(): void`
+ 参数: ``
+ 返回值: `-`
+ 描述: `删除所有以前的装饰。`

### getRange
+ 语法: `getRange(index: number): Range`
+ 参数: 
  + index: `number` 
+ 返回值: [Range](../../global/classes/Range.md)
+ 描述: `获取装饰的范围。`

### getRanges
+ 语法: `getRanges(): Range[]`
+ 参数: ``
+ 返回值: [Range](../../global/classes/Range.md)
+ 描述: `获取装饰品的所有范围。`

### has
+ 语法: `has(decoration: IModelDecoration): boolean`
+ 参数: 
  + decoration: [IModelDecoration](IModelDecoration.md)
+ 返回值: `boolean` 
+ 描述: `确定装饰是否在此集合中。`

### set
+ 语法: `set(newDecorations: readonly IModelDeltaDecoration[]): string[]`
+ 参数: 
  + newDecorations: [IModelDeltaDecoration](IModelDeltaDecoration.md)[]
+ 返回值: `string[]`
+ 描述: `用 newDecorations 替换所有以前的装饰。`
