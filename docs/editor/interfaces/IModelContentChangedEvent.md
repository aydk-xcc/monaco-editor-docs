# IModelContentChangedEvent
`interface` [官网地址](https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor.IModelContentChangedEvent.html)

## 属性 Properties
### changes
+ 类型： [IModelContentChange](IModelContentChange.md)[]
+ 描述：表示对文档进行的一系列更改。
### eol
+ 类型： `string` 
+ 描述：表示文档中的行尾字符。如果更改中有换行符，则此属性将反映更改后的换行符。
### isEolChange
+ 类型： `boolean` 
+ 描述：如果更改仅影响文档中的换行符，则为true，否则为false。
### isFlush
+ 类型： `boolean` 
+ 描述：如果更改是由于调用了Model.setValue而导致的，则为true，否则为false。
### isRedoing
+ 类型： `boolean` 
+ 描述：如果更改是由于调用了Model.redo而导致的，则为true，否则为false。
### isUndoing
+ 类型： `boolean` 
+ 描述：如果更改是由于调用了Model.undo而导致的，则为true，否则为false。
### versionId
+ 类型： `number` 
+ 描述：表示更改后的文档版本号。此版本号是对文档进行更改的每个操作的计数器。