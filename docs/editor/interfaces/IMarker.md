# IMarker
`interface` [官网地址](https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor.IMarker.html)

## 属性 Properties

### code
+ 类型： `string` 
+ 默认值： `-` 
+ 可选项： `可选` 
+ 描述： `表示标记的错误代码。通常是与错误相关的唯一标识符。` 
### endColumn
+ 类型： `number` 
+ 默认值： `-` 
+ 可选项： `必需` 
+ 描述： `表示标记结束的列号。` 
### endLineNumber
+ 类型： `number` 
+ 默认值： `-` 
+ 可选项： `必需` 
+ 描述： `表示标记结束的行号。` 
### message
+ 类型： `string` 
+ 默认值： `-` 
+ 可选项： `必需` 
+ 描述： `表示标记的错误消息。` 
### modelVersionId
+ 类型： `number` 
+ 默认值： `-` 
+ 可选项： `可选` 
+ 描述： `与标记关联的模型版本号。` 
### owner
+ 类型： `string` 
+ 默认值： `-` 
+ 可选项： `必需` 
+ 描述： `标记的所有者。通常是与错误相关的插件或第三方库的名称。` 
### relatedInformation
+ 类型：[IRelatedInformation](IRelatedInformation.md)[]
+ 默认值： `-` 
+ 可选项： `可选` 
+ 描述： `与标记关联的其他信息。通常是一些上下文信息，如与错误相关的其他文件的位置。` 
### resource
+ 类型： [Uri](../../global/classes/Url.md)
+ 默认值： `-` 
+ 可选项： `必需` 
+ 描述： `标记所属的资源。` 
### severity
+ 类型： [MarkerSeverity](../../global/enumerations.md#markerseverity)
+ 默认值： `-` 
+ 可选项： `必需` 
+ 描述： `标记的严重程度。` 
### source
+ 类型： `string` 
+ 默认值： `-` 
+ 可选项： `可选` 
+ 描述： `标记的来源。通常是与错误相关的插件或第三方库的名称。` 
### startColumn
+ 类型： `number` 
+ 默认值： `-` 
+ 可选项： `必需` 
+ 描述： `表示标记开始的列号。` 
### startLineNumber
+ 类型： `number` 
+ 默认值： `-` 
+ 可选项： `必需` 
+ 描述： `表示标记开始的行号。` 
### tags
+ 类型： [MarkerTag](../../global/enumerations.md#markertag)[] 
+ 默认值： `-` 
+ 可选项： `可选` 
+ 描述： `标记的标签。通常是与标记相关的一些元数据，如“未使用的变量”或“过时的API”。` 