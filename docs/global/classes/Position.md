# Position
`class` [官网地址](https://microsoft.github.io/monaco-editor/typedoc/classes/Position.html)

## 构造方法 Constructors
+ 语法: `new Position(lineNumber: number, column: number): Position`
+ 参数: 
  + lineNumber: `number` 
  + column: `number` 
+ 返回值: [Position](Position.md)
## 参数 Properties
### column
+ 类型: `number`  `只读` 
+ 默认值: `-`
+ 可选项: `-`
+ 描述: `列`

### lineNumber
+ 类型: `number` `只读` 
+ 默认值: `-`
+ 可选项: `-`
+ 描述: `行号`

## 方法 Methods
### clone
+ 语法: `clone(): Position`
+ 参数: `-`
+ 返回值: [Position](Position.md)
+ 描述: `克隆这个位置对象`

### delta
+ 语法: `delta(deltaLineNumber?: number, deltaColumn?: number): Position`
+ 参数: 
  + deltaLineNumber： `number`  `可选` 
  + deltaColumn： `number` `可选` 
+ 返回值: [Position](Position.md)
+ 描述: `将节点移动对应的位置`

```javascript
这里和with方法做一个区分
let position = new monaco.Position(1, 2); 

console.log(position.delta(2,3))； 
//  Position(column: 5，lineNumber: 3);
// 可以看出是将传入的行和列和原始的行和列相加得到的结果
// 有意思的是如果传递的是负数 ，依然能够得到结果
console.log(position.delta(-2,-1))
// Position(column: -1，lineNumber: 1);

```

### equals
+ 语法: `equals(other: IPosition): boolean`
+ 参数: 
  + `other`: [IPosition](../../global/interfaces/IPosition.md)
+ 返回值: `boolean` 
+ 描述: `返回和传入的poditon是否相等`

### isBefore
+ 语法: `isBefore(other: IPosition): boolean`
+ 参数: 
  + other: [IPosition](../../global/interfaces/IPosition.md)
+ 返回值: `boolean` 
+ 描述: `判断一个位置是否在传入位置之前，如果相等，则返回false`

### isBeforeOrEqual
+ 语法: `isBeforeOrEqual(other: IPosition): boolean`
+ 参数: 
  + other: [IPosition](../../global/interfaces/IPosition.md)
+ 返回值: `boolean` 
+ 描述: `判断一个位置是否在传入位置之前，如果相等，则返回true`

### toString
+ 语法: `toString(): string`
+ 参数: `-`
+ 返回值: `string`
+ 描述: `字符串格式化`

### with
+ 语法: `with(newLineNumber?: number, newColumn?: number): Position`
+ 参数: ``
+ 返回值: `-`
+ 描述: `with 看起来的效果是复制了复制了一个新的position，看起来和new了一个差不多`

### compare
+ 语法: `compare(a: IPosition, b: IPosition): number` 
+ 类型： `static` 
+ 参数: 
  + a: [IPosition](../../global/interfaces/IPosition.md)
  + b: [IPosition](../../global/interfaces/IPosition.md)
+ 返回值: `number` 
+ 描述: `比较两个节点的差值`

```javascript
let p1 = new monaco.Position(1, 2);
let p2 = new monaco.Position(2, 9);
console.log(monaco.Position.compare(p1, p2))
// -1  linenumber 不相等时比较行

let p1 = new monaco.Position(1, 2);
let p2 = new monaco.Position(1, 9);
console.log(monaco.Position.compare(p1, p2))
// -7  linenumber 相等时比较column
```
  
### equals
+ 语法: `equals(a: IPosition, b: IPosition): boolean`
+ 类型： `static` 
+ 参数: 
  + a: [IPosition](../../global/interfaces/IPosition.md)
  + b: [IPosition](../../global/interfaces/IPosition.md)
+ 返回值: `number` 
+ 描述: `比较两个节点是否相等`


### isBefore
+ 语法: `isBefore(a: IPosition, b: IPosition): boolean`
+ 类型： `static` 
+ 参数: 
  + a: [IPosition](../../global/interfaces/IPosition.md)
  + b: [IPosition](../../global/interfaces/IPosition.md)
+ 返回值: `number` 
+ 描述: `判断一个位置是否在传入位置之前，如果相等，则返回false`

### isBeforeOrEqual
+ 语法: `isBeforeOrEqual(a: IPosition, b: IPosition): boolean`
+ 类型： `static` 
+ 参数: 
  + a: [IPosition](../../global/interfaces/IPosition.md)
  + b: [IPosition](../../global/interfaces/IPosition.md)
+ 返回值: `number` 
+ 描述: `判断一个位置是否在传入位置之前，如果相等，则返回true`

### isIPosition
+ 语法: `isIPosition(obj: any): obj is IPosition`
+ 类型： `static` 
+ 参数: 
  + obj: any
+ 返回值: `obj is IPosition` 
+ 描述: `判断节点是否是IPosition`

### lift
+ 语法: `lift(pos: IPosition): Position`
+ 类型： `static` 
+ 参数: 
  + pos: [IPosition](../../global/interfaces/IPosition.md)
+ 返回值: [Position](../../global/classes/Position.md)
+ 描述: `基于IPosition 创建一个Position`
