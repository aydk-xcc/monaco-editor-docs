# ILineChange
`interface` [官网地址](https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor.ILineChange.html)

## 属性 Properties
### charChanges
+ 类型：[ICharChange](ICharChange.md)[] `只读` 
+ 默认值： `-` 
+ 可选项： `-` 
+ 描述： `表示在此行中进行的字符更改的数组。每个字符更改都包含更改前后的字符范围和更改后的文本。` 
### modifiedEndLineNumber
+ 类型： `number`  `只读` 
+ 默认值： `-` 
+ 可选项： `-` 
+ 描述： `表示修改后的文本结束行号。` 
### modifiedStartLineNumber
+ 类型： `number`  `只读` 
+ 默认值： `-` 
+ 可选项： `-` 
+ 描述： `表示修改后的文本起始行号。` 
### originalEndLineNumber
+ 类型： `number`  `只读` 
+ 默认值： `-` 
+ 可选项： `-` 
+ 描述： `表示修改前的文本结束行号。` 
### originalStartLineNumber
+ 类型： `number`  `只读` 
+ 默认值： `-` 
+ 可选项： `-` 
+ 描述： `表示修改前的文本起始行号。` 