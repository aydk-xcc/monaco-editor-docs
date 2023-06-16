# ISingleEditOperation
`interface` [官网地址](https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor.ISingleEditOperation.html)
接口用于描述单个文本编辑操作
## 属性 Properties

 ### range
+ 类型： [IRange](../../global/interfaces/IRange.md)  对象
+ 描述：表示要编辑的文本范围。
+ 
 ### text
+ 类型： `string` 
+ 描述：表示要插入或替换的文本。
+ 
 ### forceMoveMarkers
+ 类型： `boolean`  可选
+ 默认值： `false` 
+ 描述：如果为 true，则强制移动范围内的标记，即使它们不在文本修改范围内。如果为 false，则在可能的情况下仅移动标记。
 使用 ISingleEditOperation 接口，可以描述单个文本编辑操作，并将其传递给编辑器，以便在编辑器中执行相应的操作。例如，可以使用 ISingleEditOperation 接口将文本插入到编辑器中，或者替换编辑器中的文本。
