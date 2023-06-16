# ISuggestOptions
`interface` [官网地址](https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor.ISuggestOptions.html)

## 属性 Properties

### filterGraceful
 + 类型： `boolean` ，可选
+ 默认值： `true` 
+ 可选项：无
+ 描述：启用优雅匹配。默认为真。
 ### insertMode
 + 类型： `string` ，可选
+ 默认值： `"insert" ` 
+ 可选项： `"insert"` ,  `"replace"` 
+ 描述：插入模式或替换模式。默认为插入模式。
 ### localityBonus
 + 类型： `boolean` ，可选
+ 默认值： `true` 
+ 可选项：无
+ 描述：启用局部匹配奖励。默认为真。
 ### matchOnWordStartOnly
 + 类型： `boolean` ，可选
+ 默认值： `true` 
+ 可选项：无
+ 描述：只在单词开头匹配。默认为真。
 ### preview
 + 类型： `boolean` ，可选
+ 默认值： `true` 
+ 可选项：无
+ 描述：启用预览。默认为真。
 ### previewMode
 + 类型： `string` ，可选
+ 默认值： `"prefix"` 
+ 可选项： `"prefix"` ,  `"subword"` ， `"subwordSmart"` ,  `"plaintext"` 
+ 描述：预览模式。默认为前缀模式。
 ### selectionMode
 + 类型： `string` ，可选
+ 默认值： `"recentlyUsed"` 
+ 可选项： `"recentlyUsed"` ,  `"first"` ,  `"recentlyUsedByPrefix"` ,  `"recentlyUsedByScore"` 
+ 描述：选择模式。默认为最近使用的模式。
 ### shareSuggestSelections
 + 类型： `boolean` ，可选
+ 默认值： `false` 
+ 可选项：无
+ 描述：共享建议选择。默认为假。
 ### showClasses
 + 类型： `boolean` ，可选
+ 默认值： `true` 
+ 可选项：无
+ 描述：显示类。默认为真。
 ### showColors
 + 类型： `boolean` ，可选
+ 默认值： `true` 
+ 可选项：无
+ 描述：显示颜色。默认为真。
 ### showConstants
 + 类型： `boolean` ，可选
+ 默认值： `true` 
+ 可选项：无
+ 描述：显示常量。默认为真。
 ### showConstructors
 + 类型： `boolean` ，可选
+ 默认值： `true` 
+ 可选项：无
+ 描述：显示构造函数。默认为真。
 ### showDeprecated
 + 类型： `boolean` ，可选
+ 默认值： `false` 
+ 可选项：无
+ 描述：显示已弃用的内容。默认为假。
 ### showEnumMembers
 + 类型： `boolean` ，可选
+ 默认值： `true` 
+ 可选项：无
+ 描述：显示枚举成员。默认为真。
 ### showEnums
 + 类型： `boolean` ，可选
+ 默认值： `true` 
+ 可选项：无
+ 描述：显示枚举。默认为真。
 ### showEvents
 + 类型： `boolean` ，可选
+ 默认值： `true` 
+ 可选项：无
+ 描述：显示事件。默认为真。
 ### showFields
 + 类型： `boolean` ，可选
+ 默认值： `true` 
+ 可选项：无
+ 描述：显示字段。默认为真。
 ### showFiles
 + 类型： `boolean` ，可选
+ 默认值： `true` 
+ 可选项：无
+ 描述：显示文件。默认为真。
 ### showFolders
 + 类型： `boolean` ，可选
+ 默认值： `true` 
+ 可选项：无
+ 描述：显示文件夹。默认为真。
 ### showFunctions
 + 类型： `boolean` ，可选
+ 默认值： `true` 
+ 可选项：无
+ 描述：显示函数。默认为真。
 ### showIcons
 + 类型： `boolean` ，可选
+ 默认值： `true` 
+ 可选项：无
+ 描述：显示图标。默认为真。
 ### showInlineDetails
 + 类型： `boolean` ，可选
+ 默认值： `false` 
+ 可选项：无
+ 描述：显示内联细节。默认为假。
以下是  `editor.ISuggestOptions`  接口中的属性，按照题目要求的顺序和格式进行排列：
 ### showInterfaces
+ 类型:  `boolean`   `可选` 
+ 默认值:  `true` 
+ 可选项:  `-` 
+ 描述:  `是否显示接口建议` 
 ### showIssues
+ 类型:  `boolean`   `可选` 
+ 默认值:  `true` 
+ 可选项:  `-` 
+ 描述:  `是否显示问题建议` 
 ### showKeywords
+ 类型:  `boolean`   `可选` 
+ 默认值:  `true` 
+ 可选项:  `-` 
+ 描述:  `是否显示关键字建议` 
 ### showMethods
+ 类型:  `boolean`   `可选` 
+ 默认值:  `true` 
+ 可选项:  `-` 
+ 描述:  `是否显示方法建议` 
 ### showModules
+ 类型:  `boolean`   `可选` 
+ 默认值:  `true` 
+ 可选项:  `-` 
+ 描述:  `是否显示模块建议` 
 ### showOperators
+ 类型:  `boolean`   `可选` 
+ 默认值:  `true` 
+ 可选项:  `-` 
+ 描述:  `是否显示运算符建议` 
 ### showProperties
+ 类型:  `boolean`   `可选` 
+ 默认值:  `true` 
+ 可选项:  `-` 
+ 描述:  `是否显示属性建议` 
 ### showReferences
+ 类型:  `boolean`   `可选` 
+ 默认值:  `true` 
+ 可选项:  `-` 
+ 描述:  `是否显示引用建议` 
 ### showSnippets
+ 类型:  `boolean`   `可选` 
+ 默认值:  `true` 
+ 可选项:  `-` 
+ 描述:  `是否显示代码片段建议` 
 ### showStatusBar
+ 类型:  `boolean`   `可选` 
+ 默认值:  `false` 
+ 可选项:  `-` 
+ 描述:  `是否在状态栏中显示建议` 
 ### showStructs
+ 类型:  `boolean`   `可选` 
+ 默认值:  `true` 
+ 可选项:  `-` 
+ 描述:  `是否显示结构建议` 
 ### showTypeParameters
+ 类型:  `boolean`   `可选` 
+ 默认值:  `true` 
+ 可选项:  `-` 
+ 描述:  `是否显示类型参数建议` 
 ### showUnits
+ 类型:  `boolean`   `可选` 
+ 默认值:  `true` 
+ 可选项:  `-` 
+ 描述:  `是否显示单位建议` 
 ### showUsers
+ 类型:  `boolean`   `可选` 
+ 默认值:  `true` 
+ 可选项:  `-` 
+ 描述:  `是否显示用户建议` 
 ### showValues
+ 类型:  `boolean`   `可选` 
+ 默认值:  `true` 
+ 可选项:  `-` 
+ 描述:  `是否显示值建议` 
 ### showVariables
+ 类型:  `boolean`   `可选` 
+ 默认值:  `true` 
+ 可选项:  `-` 
+ 描述:  `是否显示变量建议` 
 ### showWords
+ 类型:  `boolean`   `可选` 
+ 默认值:  `true` 
+ 可选项:  `-` 
+ 描述:  `是否显示单词建议` 
 ### snippetsPreventQuickSuggestions
+ 类型:  `boolean`   `可选` 
+ 默认值:  `true` 
+ 可选项:  `-` 
+ 描述:  `是否禁用快速建议，以便在代码片段中进行建议` 