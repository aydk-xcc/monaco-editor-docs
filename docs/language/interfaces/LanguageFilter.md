# LanguageFilter
`interface` [官网地址](https://microsoft.github.io/monaco-editor/docs.html#interfaces/languages.LanguageFilter.html)
## 属性 Properties

### exclusive
+ 类型： `boolean` 
+ 可选项： `可选`   `只读` 
+ 默认值： `-` 
+ 描述： `此字段允许将数据附加到此注入的文本。当查询给定位置的注入文本时，可以读取数据。`  
 ### hasAccessToAllModels
+ 类型： `boolean` 
+ 可选项： `可选`   `只读` 
+ 默认值： `-` 
+ 描述： `指示该语言是否可以访问所有模型。如果为true，则该语言可以访问所有模型。` 
 ### isBuiltin
+ 类型： `boolean` 
+ 可选项： `可选`   `只读` 
+ 默认值： `-` 
+ 描述： `指示该语言是否是内置语言。如果为true，则该语言是内置语言。` 
 ### language
+ 类型： `string` 
+ 可选项： `可选`   `只读` 
+ 默认值： `-` 
+ 描述： `指定语言的名称。` 
 ### notebookType
+ 类型： `string` 
+ 可选项： `可选`   `只读` 
+ 默认值： `-` 
+ 描述： `指定笔记本类型。` 
 ### pattern
+ 类型： `GlobPattern` 
+ 可选项： `可选`   `只读` 
+ 默认值： `-` 
+ 描述： `指定与此语言关联的文件名模式。` 
 ### scheme
+ 类型： `string` 
+ 可选项： `可选`   `只读` 
+ 默认值： `-` 
+ 描述： `指定 URI 方案。` 