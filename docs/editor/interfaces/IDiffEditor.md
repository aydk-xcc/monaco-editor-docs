# IDiffEditor
`interface`  diff编辑器的实例相关的方法和属性 [官网地址](https://microsoft.github.io/monaco-editor/typedoc/interfaces/editor.IDiffEditor.html)

继承关系：
+ [IEditor](IEditor.md)
  + [IDiffEditor](IDiffEditor.md)
    + [IStandaloneDiffEditor](IStandaloneCodeEditor.md)

## 事件 Events
### onDidChangeModel
+ 语法: `onDidChangeModel: IEvent<void>`
+ 参数: ``
+ 返回值: `IEvent<void>`
+ 描述: `更改差异模型时发出的事件（即差异编辑器显示新内容）。`

### onDidUpdateDiff
+ 语法: `onDidUpdateDiff: IEvent<void>`
+ 参数: ``
+ 返回值: `IEvent<void>`
+ 描述: `当对比信息计算发生变更时触发`

### onDidDispose
+ 语法: `onDidDispose(listener: (() => void)): IDisposable`
+ 参数: 
  + listener: (() => void)
        (): void
        Returns void
+ 返回值: [IDisposable](../../global/interfaces/IDisposable.md)
+ 描述: `当编辑器被释放时发出的事件`


## 方法 Methods

###  createDecorationsCollection
+ 语法: `createDecorationsCollection(`decorations?: [IModelDeltaDecoration](../interfaces/IModelDeltaDecoration.md)[]`):` [IEditorDecorationsCollection](../interfaces/IEditorDecorationsCollection.md)
+ 参数: [IModelDeltaDecoration](../interfaces/IModelDeltaDecoration.md)[] `可选` 
+ 返回值: [IEditorDecorationsCollection](../interfaces/IEditorDecorationsCollection.md)
+ 描述: `创建一个装饰集合。通过此集合添加的所有装饰都将获得编辑器的所有者ID（这意味着它们不会显示在其他编辑器中）。当编辑器的模型更改时，这些装饰将自动清除。`
 ### dispose
+ 语法:  `dispose(): void` 
+ 描述:  `释放此小部件使用的所有资源。调用此方法后，小部件将不再被使用。` 
 ### focus
+ 语法:  `focus(): void` 
+ 描述:  `聚焦到此小部件上。` 
 ### getContainerDomNode
+ 语法:  `getContainerDomNode(): HTMLElement | null` 
+ 返回值:  `HTMLElement | null` 
+ 描述:  `获取此小部件的容器 DOM 节点。返回 null 表示该小部件当前未附加到 DOM。` 
 ### getDiffLineInformationForModified
+ 语法:  `getDiffLineInformationForModified(lineNumber: number): IDiffLinesInformation` 
+ 参数：
  + lineNumber： `number` 
+ 返回值: [IDiffLineInformation](IDiffLineInformation.md)
+ 描述:  `获取修改后的文本的行信息。` 
 ### getDiffLineInformationForOriginal
+ 语法:  `getDiffLineInformationForOriginal(): IDiffLinesInformation` 
+ 返回值: [IDiffLineInformation](IDiffLineInformation.md)
+ 描述:  `获取原始文本的行信息。` 
 ### getEditorType
+ 语法:  `getEditorType(): string` 
+ 返回值: `string` 
+ 描述:  `获取此小部件所属的编辑器类型。` 
 ### getId
+ 语法:  `getId(): string` 
+ 返回值:  `string` 
+ 描述:  `获取此小部件的唯一标识符。` 
 ### getLineChanges
+ 语法:  `getLineChanges(): ILineChange[] | undefined` 
+ 返回值: [ILineChange](ILineChange.md)[] 
+ 描述:  `获取在此小部件中显示的行更改。` 
 ### getModel
+ 语法:  `getModel(): ITextModel | null` 
+ 返回值: [ITextModel](ITextModel.md) |  `null` 
+ 描述:  `获取此小部件的文本模型。` 
 ### getModifiedEditor
+ 语法:  `getModifiedEditor(): ICodeEditor` 
+ 返回值: [ICodeEditor](ICodeEditor.md)
+ 描述:  `获取修改后的文本编辑器。` 
 ### getOriginalEditor
+ 语法:  `getOriginalEditor(): ICodeEditor` 
+ 返回值: [ICodeEditor](ICodeEditor.md)
+ 描述:  `获取原始文本编辑器。` 
 ### getPosition
+ 语法:  `getPosition():  Position | null` 
+ 返回值: [ Position](../../global/classes/Position.md) |  `null` 
+ 描述:  `获取此小部件的当前位置。` 
 ### getSelection
+ 语法:  `getSelection(): Selection | null` 
+ 返回值: [Selection](../../global/classes/Selection.md) |  `null` 
+ 描述:  `获取此小部件的当前选择。` 
 ### getSelections
+ 语法:  `getSelections(): Selection[] | null` 
+ 返回值: [Selection](../../global/classes/Selection.md)[] |  `null` 
+ 描述:  `获取此小部件的当前选择集合。` 
 ### getSupportedActions
+ 语法:  `getSupportedActions(): IEditorAction[]` 
+ 返回值:  [IEditorAction](IEditorAction.md)[] 
+ 描述:  `获取此小部件支持的所有操作。` 
 ### getVisibleColumnFromPosition
+ 语法:  `getVisibleColumnFromPosition(position: IPosition): number` 
+ 参数: 
    + position: [IPosition](../../global/interfaces/IPosition.md)
+ 返回值:  `number` 
+ 描述:  `获取指定位置的可见列。` 
 ### hasTextFocus
+ 语法:  `hasTextFocus(): boolean` 
+ 返回值:  `boolean` 
+ 描述:  `如果此小部件当前具有文本焦点，则返回 true。` 
 ### layout
+ 语法:  `layout(dimension?: IDimension): void` 
+ 参数：
  + dimension： [IDimension](IDimension.md)
+ 描述:  `指示编辑器重新测量其容器。调整编辑器容器大小时应调用此方法。 如果传入维度，则将使用传入的值。` 

### restoreViewState
+ 语法： `restoreViewState(state: IDiffEditorViewState): void` 
+ 参数： 
    + state：[IDiffEditorViewState](IDiffEditorViewState.md)
+ 返回值： `void` 
+ 描述： `还原编辑器的视图状态。` 
### revealLine
+ 语法： `revealLine(lineNumber: number, scrollType?: ScrollType): void` 
+ 参数： 
    + lineNumber：number
    + scrollType: [scrollType](../enumerations.md#scrolltype) `可选` 
+ 返回值： `void` 
+ 描述： `将给定行滚动到视图中。` 
### revealLineInCenter
+ 语法： `revealLineInCenter(lineNumber: number, scrollType?: ScrollType): void` 
+ 参数： 
    + lineNumber：number
    + scrollType: [scrollType](../enumerations.md#scrolltype) `可选` 
+ 返回值： `void` 
+ 描述： `将给定行滚动到视图中心。` 
### revealLineInCenterIfOutsideViewport
+ 语法： `revealLineInCenterIfOutsideViewport(lineNumber: number, scrollType?: ScrollType): void` 
+ 参数： 
    + lineNumber：number
    + scrollType: [scrollType](../enumerations.md#scrolltype) `可选` 
+ 返回值： `void` 
+ 描述： `如果给定行在视口之外，则将其滚动到视图中心。` 
### revealLineNearTop
+ 语法： `revealLineNearTop(lineNumber: number, scrollType?: ScrollType): void` 
+ 参数： 
    + lineNumber：number
    + scrollType: [scrollType](../enumerations.md#scrolltype) `可选` 
+ 返回值： `void` 
+ 描述： `将给定行滚动到视图的顶部。` 
### revealLines
+ 语法： `revealLines(startLineNumber: number, endLineNumber: number, scrollType?: ScrollType): void` 
+ 参数： 
    + startLineNumber：number
    + endLineNumber：number
    + scrollType: [scrollType](../enumerations.md#scrolltype) `可选` 
+ 返回值： `void` 
+ 描述： `将给定行范围滚动到视图中。` 
### revealLinesInCenter
+ 语法： `revealLinesInCenter(startLineNumber: number, endLineNumber: number, scrollType?: ScrollType): void` 
+ 参数： 
    + startLineNumber：number
    + endLineNumber：number
    + scrollType: [scrollType](../enumerations.md#scrolltype) `可选` 
+ 返回值： `void` 
+ 描述： `将给定行范围滚动到视图中心。` 
### revealLinesInCenterIfOutsideViewport
+ 语法： `revealLinesInCenterIfOutsideViewport(startLineNumber: number, endLineNumber: number, scrollType?: ScrollType): void` 
+ 参数： 
    + startLineNumber：number
    + endLineNumber：number
    + scrollType: [scrollType](../enumerations.md#scrolltype) `可选` 
+ 返回值： `void` 
+ 描述： `如果给定行范围在视口之外，则将其滚动到视图中心。` 
### revealLinesNearTop
+ 语法： `revealLinesNearTop(startLineNumber: number, endLineNumber: number, scrollType?: ScrollType): void` 
+ 参数： 
    + startLineNumber：number
    + endLineNumber：number
    + scrollType: [scrollType](../enumerations.md#scrolltype) `可选` 
+ 返回值： `void` 
+ 描述： `将给定行范围滚动到视图的顶部。` 
### revealPosition
+ 语法： `revealPosition(position: IPosition, scrollType?: ScrollType): void` 
+ 参数： 
    + position：[IPosition](../../global/interfaces/IPosition.md)
    + scrollType: [scrollType](../enumerations.md#scrolltype) `可选` 
+ 返回值： `void` 
+ 描述： `将给定位置滚动到视图中。` 
### revealPositionInCenter
+ 语法： `revealPositionInCenter(position: IPosition, scrollType?: ScrollType): void` 
+ 参数： 
    + position：[IPosition](../../global/interfaces/IPosition.md)
    + scrollType: [scrollType](../enumerations.md#scrolltype) `可选` 
+ 返回值： `void` 
+ 描述： `将给定位置滚动到视图中心。` 
### revealPositionInCenterIfOutsideViewport
+ 语法： `revealPositionInCenterIfOutsideViewport(position: IPosition, scrollType?: ScrollType): void` 
+ 参数： 
    + position：[IPosition](../../global/interfaces/IPosition.md)
    + scrollType: [scrollType](../enumerations.md#scrolltype) `可选` 
+ 返回值： `void` 
+ 描述： `如果给定位置在视口之外，则将其滚动到视图中心。` 
### revealPositionNearTop
+ 语法： `revealPositionNearTop(position: IPosition, scrollType?: ScrollType): void` 
+ 参数： 
    + position：[IPosition](../../global/interfaces/IPosition.md)
    + scrollType: [scrollType](../enumerations.md#scrolltype) `可选` 
+ 返回值： `void` 
+ 描述： `将给定位置滚动到视图的顶部。` 
### revealRange
+ 语法： `revealRange(range: IRange, scrollType?: ScrollType): void` 
+ 参数： 
    + range：[IPosition](../../global/interfaces/IRange.md)
    + scrollType: [scrollType](../enumerations.md#scrolltype) `可选` 
+ 返回值： `void` 
+ 描述： `将给定范围滚动到视图中。` 

### revealRangeAtTop
+ 语法:  `revealRangeAtTop(range: IRange, scrollType?: ScrollType): void` 
+ 参数: 
    + range: [IPosition](../../global/interfaces/IRange.md) 
    + scrollType:  `可选`  [scrollType](../enumerations.md#scrolltype)
+ 返回值:  `无` 
+ 描述:  `将指定范围滚动到编辑器的顶部。如果revealVerticalInCenter为true，则将范围滚动到编辑器垂直中心。如果scrollType为Smooth，则使用平滑滚动。` 
 ### revealRangeInCenter
+ 语法:  `revealRangeInCenter(range: IRange, scrollType?: ScrollType): void` 
+ 参数: 
    + range: [IPosition](../../global/interfaces/IRange.md) 
    + scrollType:  `可选`  [scrollType](../enumerations.md#scrolltype)
+ 返回值:  `无` 
+ 描述:  `将指定范围滚动到编辑器的中心。如果revealVerticalInCenter为true，则将范围滚动到编辑器垂直中心。如果scrollType为Smooth，则使用平滑滚动。` 
 ### revealRangeInCenterIfOutsideViewport
+ 语法:  `revealRangeInCenterIfOutsideViewport(range: IRange, scrollType?: ScrollType): void` 
+ 参数: 
    + range: [IPosition](../../global/interfaces/IRange.md) 
    + scrollType:  `可选`  [scrollType](../enumerations.md#scrolltype)
+ 返回值:  `无` 
+ 描述:  `如果指定的范围不在编辑器的视口中，则将其滚动到编辑器的中心。如果revealVerticalInCenter为true，则将范围滚动到编辑器垂直中心。如果scrollType为Smooth，则使用平滑滚动。` 
 ### revealRangeNearTop
+ 语法:  `revealRangeNearTop(range: IRange, scrollType?: ScrollType): void` 
+ 参数: 
    + range: [IPosition](../../global/interfaces/IRange.md) 
    + scrollType:  `可选`  [scrollType](../enumerations.md#scrolltype)
+ 返回值:  `无` 
+ 描述:  `将指定范围滚动到编辑器的顶部，如果可能的话，将其保持在视口的顶部。如果revealVerticalInCenter为true，则将范围滚动到编辑器垂直中心。如果scrollType为Smooth，则使用平滑滚动。` 
 ### revealRangeNearTopIfOutsideViewport
+ 语法:  `revealRangeNearTopIfOutsideViewport(range: IRange, scrollType?: ScrollType): void` 
+ 参数: 
    + range: [IPosition](../../global/interfaces/IRange.md) 
    + revealVerticalInCenter:  `可选`  boolean
    + scrollType:  `可选`  [scrollType](../enumerations.md#scrolltype)
+ 返回值:  `无` 
+ 描述:  `如果指定的范围不在编辑器的视口中，则将其滚动到编辑器的顶部，如果可能的话，将其保持在视口的顶部。如果revealVerticalInCenter为true，则将范围滚动到编辑器垂直中心。如果scrollType为Smooth，则使用平滑滚动。` 
 ### saveViewState
+ 语法:  `saveViewState(): IDiffEditorViewState` 
+ 参数:  `无` 
+ 返回值: [IDiffEditorViewState](IDiffEditorViewState.md)
+ 描述:  `返回当前编辑器的视图状态。` 
 ### setModel
+ 语法:  `setModel(model: IDiffEditorModel | null): void` 
+ 参数: 
    + model: [IDiffEditorModel](IDiffEditorModel.md) 或  `null` 
+ 返回值:  `无` 
+ 描述:  `设置附加到此编辑器的当前模型。 如果之前的模型是由编辑器通过选项文字对象中的值键创建的，它将被销毁。 否则，如果先前的模型是通过 setModel 设置的，或者选项文字对象中的模型键，则不会销毁先前的模型。 调用 setModel(null) 以简单地将当前模型与编辑器分离是安全的` 
 ### setPosition
+ 语法:  `setPosition(position: IPosition, source?: string): void` 
+ 参数: 
    + position: [IPosition](../../global/interfaces/IPosition.md)
    + source: `string` `可选` 
+ 返回值:  `无` 
+ 描述:  `将编辑器的光标位置设置为指定的位置。` 
 ### setSelection
+ 语法:  `setSelection(selection: IRange, source?: string): void` 
+ 参数: 
    + selection: [IPosition](../../global/interfaces/IRange.md)
    + source: `string` `可选` 
+ 返回值:  `无` 
+ 描述:  `将编辑器的选择设置为指定的范围。` 
 ### setSelections
+ 语法:  `setSelections(selections: ISelection[], source?: string): void` 
+ 参数: 
    + selections: [ISelection](../../global/interfaces/ISelection.md)[]
    + source: `string` `可选` 
+ 返回值:  `无` 
+ 描述:  `将编辑器的选择设置为指定的范围数组。` 
 ### trigger
+ 语法:  `trigger(source: string, handlerId: string, payload?: any): void` 
+ 参数: 
    + source:  `string` 
    + handlerId:  `string` 
    + payload:  `可选`  any
+ 返回值:  `无` 
+ 描述:  `触发指定的命令。` 
 ### updateOptions
+ 语法:  `updateOptions(newOptions: IDiffEditorOptions): void` 
+ 参数: 
    + newOptions: [IDiffEditorOptions](IDiffEditorOptions.md)
+ 返回值:  `无` 
+ 描述:  `更新编辑器的选项。` 
