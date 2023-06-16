# Range
`class` [官网地址](https://microsoft.github.io/monaco-editor/typedoc/classes/Range.html)

编辑器的范围（起点必须小于等于终点）

## 构造方法 Constructors
+ 语法: `new Range(startLineNumber: number, startColumn: number, endLineNumber: number, endColumn: number): Range`
+ 参数: 
  + startLineNumber: `number` 
  + startColumn: `number` 
  + endLineNumber: `number` 
  + endColumn: `number` 
+ 返回值: [Range](Range.md)
## 参数 Properties
### endColumn
+ 类型: `number`  `只读` 
+ 默认值: `-`
+ 可选项: `-`
+ 描述: `结束列`

### endLineNumber
+ 类型: `number`  `只读` 
+ 默认值: `-`
+ 可选项: `-`
+ 描述: `结束行`

### startColumn
+ 类型: `number`  `只读` 
+ 默认值: `-`
+ 可选项: `-`
+ 描述: `开始列`

### startLineNumber
+ 类型: `number`  `只读` 
+ 默认值: `-`
+ 可选项: `-`
+ 描述: `开始行`

## 方法 Methods

### collapseToEnd
+ 语法: `collapseToEnd(): Range`
+ 参数: `-`
+ 返回值: [Range](Range.md)
+ 描述: `使用此范围的结束位置创建一个新的空范围`

### collapseToStart
+ 语法: `collapseToStart(): Range`
+ 参数: `-`
+ 返回值: [Range](Range.md)
+ 描述: `使用此范围的开始位置创建一个新的空范围`

### containsPosition
+ 语法: `containsPosition(position: IPosition): boolean`
+ 参数: [IPosition](../interfaces/IPosition.md)
+ 返回值: `boolean` 
+ 描述: `测试位置是否在此范围内。如果位置在范围内部，将返回 true。`

### containsRange
+ 语法: `containsRange(range: IRange): boolean`
+ 参数: [IRange](../interfaces/IRange.md)
+ 返回值: `boolean` 
+ 描述: `测试范围是否在此范围内。如果位置在范围内部，将返回 true。`
  
### delta
+ 语法: `delta(lineCount: number): Range`
+ 参数: 
  + lineCount： `number` 
+ 返回值: [Range](Range.md)
+ 描述: `将范围移动给定的行数。`

### equalsRange
+ 语法: `equalsRange(other: IRange): boolean`
+ 参数: 
  + other： [IRange](../interfaces/IRange.md)
+ 返回值: `boolean` 
+ 描述: `测试这个范围是否相等`

### getEndPosition
+ 语法: `getEndPosition(): Position`
+ 参数: ``
+ 返回值: [Position](Position.md)
+ 描述: `返回结束位置（将在或等于开始位置之后）`

### getStartPosition
+ 语法: `getStartPosition(): Position`
+ 参数: `-`
+ 返回值: [Position](Position.md)
+ 描述: `返回开始位置（将在结束位置之前或等于结束位置）`

### intersectRanges
+ 语法: `intersectRanges(range: IRange): Range`
+ 参数: 
  + range: [IRange](../interfaces/IRange.md)
+ 返回值: [Range](Range.md)
+ 描述: `两个范围的交集`

### isEmpty
+ 语法: `isEmpty(): boolean`
+ 参数: `-`
+ 返回值: `boolean` 
+ 描述: `测试此范围是否为空`

### plusRange
+ 语法: `plusRange(range: IRange): Range`
+ 参数: 
  + range: [IRange](../interfaces/IRange.md)
+ 返回值: [Range](Range.md)
+ 描述: `两个范围的合并。最小的位置将用作起点，最大的位置将用作终点。`

### setEndPosition
+ 语法: `setEndPosition(endLineNumber: number, endColumn: number): Range`
+ 参数: 
  + endLineNumber: `number` 
  + endColumn: `number` 
+ 返回值: [Range](Range.md)
+ 描述: `使用此范围的开始位置创建一个新范围，并使用 endLineNumber 和 endColumn 作为结束位置。`

### setStartPosition
+ 语法: `setStartPosition(startLineNumber: number, startColumn: number): Range`
+ 参数: 
  + startLineNumber: `number` 
  + startColumn: `number` 
+ 返回值: [Range](Range.md)
+ 描述: `使用此范围的结束位置创建一个新范围，并使用 startLineNumber 和 startColumn 作为起始位置。`

### strictContainsRange
+ 语法: `strictContainsRange(range: IRange): boolean`
+ 参数: 
  +  range: [IRange](../interfaces/IRange.md)
+ 返回值: `boolean` 
+ 描述: `测试范围是否严格在此范围内。范围必须在此范围之后开始并在此范围之前结束，结果才为真。`

### toJSON
+ 语法: `toJSON(): IRange`
+ 参数: `-`
+ 返回值: [IRange](../interfaces/IRange.md)
+ 描述: `json`

### toString
+ 语法: `toString(): string`
+ 参数: `-`
+ 返回值: `string` 
+ 描述: ``

### areIntersecting
+ 语法: `areIntersecting(a: IRange, b: IRange): boolean`
+ 参数: 
  + a: [IRange](../interfaces/IRange.md)
  + b: [IRange](../interfaces/IRange.md)
+ 返回值: `boolean` 
+ 描述: `测试两个范围是否相交。如果范围接触，则返回 true。`

### areIntersectingOrTouching
+ 语法: `areIntersectingOrTouching(a: IRange, b: IRange): boolean`
+ 参数: 
  + a: [IRange](../interfaces/IRange.md)
  + b: [IRange](../interfaces/IRange.md)
+ 返回值: `boolean` 
+ 描述: `测试这两个范围是否以任何方式接触。`

### collapseToEnd
+ 语法: `collapseToEnd(range: IRange): Range`
+ 参数: 
  + range: [IRange](../interfaces/IRange.md)
+ 返回值: [Range](Range.md)
+ 描述: `使用此范围的结束位置创建一个新的空范围。`

### collapseToStart
+ 语法: `collapseToStart(range: IRange): Range`
+ 参数: 
  + range: [IRange](../interfaces/IRange.md)
+ 返回值: [Range](Range.md)
+ 描述: `使用此范围的起始位置创建一个新的空范围`

### compareRangesUsingEnds
+ 语法: `compareRangesUsingEnds(a: IRange, b: IRange): number`
+ 参数: 
  + a: [IRange](../interfaces/IRange.md)
  + b: [IRange](../interfaces/IRange.md)
+ 返回值: `number` 
+ 描述: `比较范围的函数，对范围排序很有用它将首先比较 endPosition 上的范围，然后比较 startPosition 上的范围`

### compareRangesUsingStarts
+ 语法: `compareRangesUsingStarts(a: IRange, b: IRange): number`
+ 参数: 
  + a: [IRange](../interfaces/IRange.md)
  + b: [IRange](../interfaces/IRange.md)
+ 返回值: `number` 
+ 描述: `比较范围的函数，对范围排序很有用它将首先比较 startPosition 上的范围，然后在 endPosition 上比较范围`

### containsPosition
+ 语法: `containsPosition(range: IRange, position: IPosition): boolean`
+ 参数: 
  + range: [IRange](../interfaces/IRange.md)
  + position: [IPosition](../interfaces/IPosition.md)
+ 返回值: `boolean` 
+ 描述: `测试位置是否在范围内。如果位置在边缘，将返回 true。`

### containsRange
+ 语法: `containsRange(range: IRange, otherRange: IRange): boolean`
+ 参数: 
  + range: [IRange](../interfaces/IRange.md)
  + otherRange: [IRange](../interfaces/IRange.md)
+ 返回值: `boolean` 
+ 描述: `测试 otherRange 是否在范围内。如果范围相等，将返回 true。`

### equalsRange
+ 语法: `equalsRange(a: IRange, b: IRange): boolean`
+ 参数: 
  + a: [IRange](../interfaces/IRange.md)
  + b: [IRange](../interfaces/IRange.md)
+ 返回值: `boolean` 
+ 描述: `测试范围 a 是否等于 b`

### fromPositions
+ 语法: `fromPositions(start: IPosition, end?: IPosition): Range`
+ 参数: 
  + start: [IPosition](../interfaces/IPosition.md)
  + end: [IPosition](../interfaces/IPosition.md) `可选` 
+ 返回值: [Range](Range.md)
+ 描述: ``

### getEndPosition
+ 语法: `getEndPosition(range: IRange): Position`
+ 参数: 
  + range： [IRange](../interfaces/IRange.md)
+ 返回值: [Position](Position.md)
+ 描述: `返回结束位置（将在或等于开始位置之后）`

### getStartPosition
+ 语法: `getStartPosition(range: IRange): Position`
+ 参数: 
  + range： [IRange](../interfaces/IRange.md)
+ 返回值: [Position](Position.md)
+ 描述: `返回开始位置（将在结束位置之前或等于结束位置）`

### intersectRanges
+ 语法: `intersectRanges(a: IRange, b: IRange): Range`
+ 参数: 
  + a: [IRange](../interfaces/IRange.md)
  + b: [IRange](../interfaces/IRange.md)
+ 返回值: [Range](Range.md)
+ 描述: `两个范围的交集。`

### isEmpty
+ 语法: `isEmpty(range: IRange): boolean`
+ 参数: 
  + range： [IRange](../interfaces/IRange.md)
+ 返回值: `boolean` 
+ 描述: `判断是否为空`

### isIRange
+ 语法: `isIRange(obj: any): obj is IRange`
+ 参数: 
  + obj： any
+ 返回值: `obj is IRange`
+ 描述: `测试一个对象是否是range`

### lift
+ 语法: `lift(range: IRange): Range`
+ 参数: 
  + range： [IRange](../interfaces/IRange.md)
+ 返回值: [Range](Range.md)
+ 描述: `从 IRange 创建一个范围。`

### plusRange
+ 语法: `plusRange(a: IRange, b: IRange): Range`
+ 参数: 
  + a: [IRange](../interfaces/IRange.md)
  + b: [IRange](../interfaces/IRange.md)
+ 返回值: [Range](Range.md)
+ 描述: `两个范围的聚合。最小的位置将用作起点，最大的位置将用作终点。`

### spansMultipleLines
+ 语法: `spansMultipleLines(range: IRange): boolean`
+ 参数: 
  + range： [IRange](../interfaces/IRange.md)
+ 返回值: `boolean` 
+ 描述: `测试范围是否跨越多行。`

### strictContainsRange
+ 语法: `strictContainsRange(range: IRange, otherRange: IRange): boolean`
+ 参数: 
  + range: [IRange](../interfaces/IRange.md)
  + otherRange: [IRange](../interfaces/IRange.md)
+ 返回值: `boolean` 
+ 描述: `测试 otherRange 是否严格在范围内（必须在之后开始，在之前结束）。如果范围相等，将返回 false。`