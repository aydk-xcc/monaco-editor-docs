# IDocumentDiffProvider
`Interface` 一个文档对比提供程序用来计算两个文本模型之间的差异。

## 属性 Properties

### onDidChange
+ 类型IEvent 
+ 说明： 当 diff 算法的设置更改可能会改变 diff 计算的结果时触发。

## 方法 methods

### computeDiff
+ 用法：`computeDiff(original: ITextModel, modified: ITextModel, options: IDocumentDiffProviderOptions): Promise<IDocumentDiff>`
+ 参数：
  + original [ITextModel](./ITextModel.md)
  + modified [ITextModel](./ITextModel.md)
  + options [IDocumentDiffProviderOptions](IDocumentDiffProviderOptions.md)
+ 返回值：Promise\<[IDocumentDiff](IDocumentDiff.md)>
+ 说明： 计算original和modified之间的差异,参数说明