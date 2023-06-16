# IModelContentChange
`interface` [官网地址](https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor.IModelContentChange.html)

## 属性 Properties
### range
+ 类型： [IRange](../../global/interfaces/IRange.md)
+ 描述：表示更改的范围。范围是从一行中的某个列开始，到另一行的某个列结束。
### rangeLength
+ 类型： `number` 
+ 描述：表示更改前范围内的字符数。
### rangeOffset
+ 类型： `number` 
+ 描述：表示更改前范围的字符偏移量。
### text
+ 类型： `string` 
+ 描述：表示要插入或删除的文本。如果文本为空，则表示删除范围内的所有字符。如果文本为非空，则表示要插入文本。