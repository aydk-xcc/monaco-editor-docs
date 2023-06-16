# IEditOperationBuilder
`interface` [官网地址](https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor.IEditOperationBuilder.html)

用于命令编辑操作的构建器和工具

## 方法 Methods
### addEditOperation
+ 语法： `addEditOperation(range: IRange, text: string | null, forceMoveMarkers?: boolean): void` 
+ 参数：
  + range：[IRange](../../global/interfaces/IRange.md) - 描述要编辑的文本范围。
  + text： `string | null`  - 要插入或替换的文本。如果为 null，则表示删除范围内的文本。
  + forceMoveMarkers： `boolean`  - 一个可选的布尔值，指示是否应强制移动与范围中的文本相关联的标记。
+ 返回值： `void` 
+ 描述：添加一个编辑操作，该操作将在编辑器的模型中指定的范围内插入、删除或替换文本。如果 forceMoveMarkers 为 true，则与范围中的文本相关联的标记也将被移动。
 ### addTrackedEditOperation
+ 语法： `addTrackedEditOperation(range: IRange, text: string | null, forceMoveMarkers?: boolean): IIdentifiedSingleEditOperation` 
+ 参数：
  + range：[IRange](../../global/interfaces/IRange.md) - 描述要编辑的文本范围。
  + text： `string | null`  - 要插入或替换的文本。如果为 null，则表示删除范围内的文本。
  + forceMoveMarkers： `boolean`  - 一个可选的布尔值，指示是否应强制移动与范围中的文本相关联的标记。
+ 返回值：[IIdentifiedSingleEditOperation](IIdentifiedSingleEditOperation.md)
+ 描述：添加一个编辑操作，该操作将在编辑器的模型中指定的范围内插入、删除或替换文本。如果 forceMoveMarkers 为 true，则与范围中的文本相关联的标记也将被移动。此方法将返回一个标识符，该标识符可用于跟踪此编辑操作。
 ### trackSelection
+ 语法： `trackSelection(selection: ISelection, trackPreviousOnEmpty?: boolean): string` 
+ 参数：
  + selection：[ISelection](../../global/interfaces/ISelection.md) - 要跟踪的选择。
  + trackPreviousOnEmpty： `boolean`  - 一个可选的布尔值，指示当选择为空时是否应返回上一个跟踪的标识符。
+ 返回值： `string` 
+ 描述：跟踪给定选择的位置，并返回一个标识符，该标识符可用于跟踪此选择。如果 trackPreviousOnEmpty 为 true，则当选择为空时，将返回上一个跟踪的标识符。