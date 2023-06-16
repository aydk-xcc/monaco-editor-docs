# [LineRangeMapping](https://microsoft.github.io/monaco-editor/docs.html#classes/editor.LineRangeMapping.html)

## 构造方法 constructor 

 用法：`new LineRangeMapping(originalRange: LineRange, modifiedRange: LineRange, innerChanges: RangeMapping[]): LineRangeMapping`
+ 参数说明
  + originalRange: [LineRange](lineRange.md)
  + modifiedRange: [LineRange](lineRange.md)
  + innerChanges: [RangeMapping](RangeMapping.md)

## 参数 Properties
  ### innerChanges:
  + 类型[RangeMapping](RangeMapping.md) 
  + 如果尚未计算内部更改，则将其设置为未定义。 否则，它表示此行范围内的字符级差异。 每个范围映射的原始范围应包含在原始行范围内（修改后相同），换行除外。 不得为空数组。
  ### modifiedRange
  + 类型 [LineRange](lineRange.md)
  + 修改后的文本模型中的行范围
  ### originalRange
  + 类型 [LineRange](lineRange.md)
  + 原始的文本模型中的行范围

## 访问器 Accessors
 + changedLineCount  获取改动的行数


## 方法 Methods
+ toString 字符串格式化方法
+ inverse
  + 用法 `inverse(mapping: LineRangeMapping[], originalLineCount: number, modifiedLineCount: number): LineRangeMapping[]`
  + 参数说明：
    + mapping: LineRangeMapping[]
    + originalLineCount: number
    + modifiedLineCount: number
  + 返回值 LineRangeMapping[]

