# CompletionItem
`interface` [官网地址](https://microsoft.github.io/monaco-editor/docs.html#interfaces/languages.CompletionItem.html)
## 属性 Properties
以下是根据您提供的顺序和格式处理的  `https://microsoft.github.io/monaco-editor/docs.html#interfaces/languages.CompletionItem.html`  中的属性：
 ## additionalTextEdits
+ 类型: [ISingleEditOperation](./ISingleEditOperation.md)[]   `可选` 
+ 默认值:  `true` 
+ 可选项:  `-` 
+ 描述: 选择此完成时应用的附加文本编辑的可选数组。编辑不得与主编辑重叠，也不得与其自身重叠。
 ## command
+ 类型: [Command](./Command.md)   `可选` 
+ 默认值:  `-` 
+ 可选项:  `-` 
+ 描述: 与该建议关联的命令。如果设置了命令，编辑器将在选择该建议时执行该命令。
 ## commitCharacters
+ 类型: string[]   `可选` 
+ 默认值:  `-` 
+ 可选项:  `-` 
+ 描述: 触发自动接受建议的字符。当用户输入其中一个字符时，如果当前有建议，编辑器将自动接受建议并将其插入到文本中。
 ## detail
+ 类型: string   `可选` 
+ 默认值:  `-` 
+ 可选项:  `-` 
+ 描述: 其中包含有关此项目的附加信息，例如类型或符号信息。
 ## documentation
+ 类型: string | [IMarkdownString](./IMarkdownString.md)   `可选` 
+ 默认值:  `-` 
+ 可选项:  `-` 
+ 描述: 建议的文档信息。可以是纯文本或 Markdown 格式。
 ## filterText
+ 类型: string   `可选` 
+ 默认值:  `-` 
+ 可选项:  `-` 
+ 描述: 用于过滤建议的文本。当用户输入时，编辑器将使用此文本来过滤建议列表。
 ## insertText
+ 类型: string   `可选` 
+ 默认值:  `-` 
+ 可选项:  `-` 
+ 描述: 插入到文本中的建议内容。
 ## insertTextRules
+ 类型: [InsertTextRule](../enumerations.md#CompletionItemInsertTextRule)   `可选` 
+ 默认值:  `-` 
+ 可选项:  `-` 
+ 描述: 插入建议时的规则。可以是  `InsertTextRule.InsertAsSnippet`  或  `InsertTextRule.InsertAsPlainText` 。
 ## kind
+ 类型: [CompletionItemKind](../enumerations.md#CompletionItemKind)   `可选` 
+ 默认值:  `-` 
+ 可选项:  `-` 
+ 描述: 建议的类型。
 ## label
+ 类型: string | [CompletionItemLabel](./CompletionItemLabel.md)   `必需` 
+ 默认值:  `-` 
+ 可选项:  `-` 
+ 描述: 建议的显示文本。
 ## preselect
+ 类型: boolean   `可选` 
+ 默认值:  `-` 
+ 可选项:  `-` 
+ 描述: 是否预选中该建议。显示时选择此项。请注意，只能选择一个完成项目，并且由编辑者决定选择哪一个项目。规则是选择最匹配的第一个项目
 ## range
+ 类型: [IRange](./IRange.md) | [CompletionItemRanges](./CompletionItemRanges.md)  `可选` 
+ 默认值:  `-` 
+ 可选项:  `-` 
+ 描述: 建议适用的文本范围。TextDocument.getWordRangeAtPosition 当前单词的开头到当前位置的范围。
+ 注意：该范围必须是 Range.isSingleLine 单行，并且它必须 Range.contains 包含请求完成的位置。
 ## sortText
+ 类型: string   `可选` 
+ 默认值:  `-` 
+ 可选项:  `-` 
+ 描述: 用于排序建议的文本。
 ## tags
+ 类型: [CompletionItemTag](../enumerations.md#completionitemtag)[]   `可选` `只读` 
+ 默认值:  `-` 
+ 可选项:  `-` 
+ 描述: 建议的标签。
 希望这可以满足您的需求！如果您有任何其他问题，请随时提问。

