# IGlobalEditorOptions
`interface` [官网地址](https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor.BracketPairColorizationOptions.html)

## 属性 Properties
### autoDetectHighContrast
+ 类型： `boolean`    `可选` 
+ 默认值： `-` 
+ 可选项： `-` 
+ 描述：如果启用，编辑器将自动检测操作系统是否正在使用高对比度主题，并在检测到时自动更改为高对比度主题。默认为 true。
 ### detectIndentation
+ 类型： `boolean`    `可选` 
+ 默认值： `true` 
+ 可选项： `-` 
+ 描述：如果启用，编辑器将自动检测文档中使用的缩进，并在下次打开该文档时使用相同的缩进。如果禁用，则编辑器将始终使用 tab 字符作为缩进。
 ### insertSpaces
+ 类型： `boolean`    `可选` 
+ 默认值： `true` 
+ 可选项： `-` 
+ 描述：如果启用，编辑器将使用空格而不是 tab 字符进行缩进。如果禁用，则编辑器将始终使用 tab 字符作为缩进。
 ### largeFileOptimizations
+ 类型： `boolean`    `可选` 
+ 默认值： `true` 
+ 可选项： `-` 
+ 描述：如果启用，编辑器将在处理大文件时应用优化。如果禁用，则编辑器可能会在处理大文件时变得缓慢或不稳定。
 ### maxTokenizationLineLength
+ 类型： `number`    `可选` 
+ 默认值： `20000` 
+ 可选项： `-` 
+ 描述：指定编辑器在标记化行时使用的最大行长度。如果行的长度超过此值，则编辑器将不会对该行进行标记化。这可以提高性能，但可能会导致某些语言的语法高亮显示不正确。
 ### semanticHighlighting.enabled
+ 类型： `boolean`    `可选` 
+ 默认值： `true` 
+ 可选项： `-` 
+ 描述：如果启用，编辑器将使用语义高亮显示来突出显示代码中的符号。如果禁用，则编辑器将使用语法高亮显示。
 ### stablePeek
+ 类型： `boolean`    `可选` 
+ 默认值： `true` 
+ 可选项： `-` 
+ 描述：如果启用，编辑器将在查看定义等操作期间尝试保持打开的编辑器不变。如果禁用，则编辑器可能会在查看定义等操作期间打开新的编辑器。
 ### tabSize
+ 类型： `number`    `可选` 
+ 默认值： `4` 
+ 可选项： `-` 
+ 描述：指定编辑器在进行缩进时使用的空格数。如果 insertSpaces 为 false，则此设置无效。
 ### theme
+ 类型： `string`    `可选` 
+ 默认值： `"vs"` 
+ 可选项： `"vs"` ,  `"vs-dark"` ,  `"hc-black"` 
+ 描述：指定编辑器使用的主题。可以是 "vs"（明亮主题），"vs-dark"（暗黑主题）或 "hc-black"（高对比度主题）。
 ### trimAutoWhitespace
+ 类型： `boolean`    `可选` 
+ 默认值： `true` 
+ 可选项： `-` 
+ 描述：如果启用，则编辑器将在保存文件时删除行末尾的自动插入空格。如果禁用，则编辑器将保留这些空格。
 ### wordBasedSuggestions
+ 类型： `boolean`    `可选` 
+ 默认值： `true` 
+ 可选项： `-` 
+ 描述：如果启用，则编辑器将根据当前文档中的单词提供代码建议。如果禁用，则编辑器将仅根据语言中的关键字提供建议。
 ### wordBasedSuggestionsOnlySameLanguage
+ 类型： `boolean`    `可选` 
+ 默认值： `false` 
+ 可选项： `-` 
+ 描述：如果启用，则编辑器将仅根据当前文档中的单词提供与当前文档的语言相同的代码建议。如果禁用，则编辑器将根据当前文档中的单词提供所有可用的代码建议。