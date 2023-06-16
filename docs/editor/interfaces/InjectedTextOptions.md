# InjectedTextOptions
`interface` [官网地址](https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor.InjectedTextOptions.html)
用于描述注入文本的选项。
## 属性 Properties

### attachedData
+ 类型： `unknown`   `可选`   `只读` 
+ 默认值： `-` 
+ 可选项： `-` 
+ 描述： `该字段允许将数据附加到此注入的文本。当查询给定位置的注入文本时，可以读取数据。` 
 ### content
+ 类型： `string` 
+ 默认值： `-` 
+ 可选项： `-` 
+ 描述： `注入的文本内容。` 
 ### cursorStops
+ 类型： `boolean`  `可选` `只读` 
+ 默认值： `false` 
+ 可选项： `-` 
+ 描述： `指示注入文本的末尾是否应该成为光标停止的标志。` 
 ### inlineClassName
+ 类型： `string`   `可选` 
+ 默认值： `-` 
+ 可选项： `-` 
+ 描述： `注入文本的 CSS 类名。` 
 ### inlineClassNameAffectsLetterSpacing
+ 类型： `boolean`   `可选` `只读` 
+ 默认值： `false` 
+ 可选项： `-` 
+ 描述： `指示注入文本的 CSS 类名是否应影响字母间距。` 