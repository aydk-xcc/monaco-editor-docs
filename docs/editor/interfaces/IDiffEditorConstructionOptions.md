# IDiffEditorConstructionOptions
`interface` [官网地址](https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor.IDiffEditorConstructionOptions.html)

## 属性 Properties
## acceptSuggestionOnCommitCharacter
+ 类型: `boolean` `可选`
+ 默认值: `true`
+ 可选项: `-`
+ 描述: 用于控制是否在输入特定字符时自动接受建议（suggestion）
如果将 acceptSuggestionOnCommitCharacter 设置为 true ，则在输入特定字符时，如果当前有建议，编辑器会自动接受建议并将其插入到文本中。可以使用 monaco.languages.registerCompletionItemProvider 方法注册一个代码补全提供程序，并在提供程序的 triggerCharacters 属性中指定要触发自动接受建议的字符。

下面是一个例子：
```javascript
monaco.languages.registerCompletionItemProvider('javascript', {
    triggerCharacters: ['.', ':'], // 指定触发自动接受建议的字符
    provideCompletionItems: function(model, position, token, context) {
        // 返回代码补全建议
        return {
            suggestions: [
                {
                    label: 'console',
                    kind: monaco.languages.CompletionItemKind.Function,
                    insertText: 'console.', // 插入文本，如果用户按下 '.'，则自动接受建议
                    commitCharacters: ['.'] // 指定插入建议后自动接受建议的字符
                }
            ]
        };
    }
});
// 将 acceptSuggestionOnCommitCharacter 设置为 true
monaco.editor.create(document.getElementById('container'), {
    value: '',
    language: 'javascript',
    acceptSuggestionOnCommitCharacter: true
});
```
在上面的示例中，当用户输入 console. 时，会触发代码补全建议，建议中的 insertText 为 console. ，如果用户按下 . ，则自动接受建议。


## acceptSuggestionOnEnter
+ 类型:  `string`   `可选` 
+ 默认值:  `'on'` 
+ 可选项:  `'on'` ,  `'smart'` ,  `'off'` 
+ 描述: 用于控制是否在按下回车键时自动接受建议（suggestion）
如果将 acceptSuggestionOnEnter 设置为  `'on'`  ，则在按下回车键时，如果当前有建议，编辑器会自动接受建议并将其插入到文本中。如果将其设置为  `'smart'`  ，则只有在建议中存在文本更改时才会自动接受建议。如果将其设置为  `'off'`  ，则不会自动接受建议。

## accessibilityPageSize
+ 类型:  `number`   `可选` 
+ 默认值:  `10` 
+ 可选项:  `-` 
+ 描述: 用于控制屏幕阅读器一次读取的行数
如果将 accessibilityPageSize 设置为一个正整数，则屏幕阅读器在读取编辑器内容时会一次读取指定行数的文本。

## accessibilitySupport
+ 类型:  `string`   `可选` 
+ 默认值:  `'auto'` 
+ 可选项:  `'auto'` ,  `'off'` ,  `'on'` 
+ 描述: 用于控制屏幕阅读器的支持级别
如果将 accessibilitySupport 设置为  `'auto'`  ，则编辑器会自动检测当前环境是否支持屏幕阅读器，并相应地启用或禁用辅助功能。如果将其设置为  `'on'`  ，则编辑器将始终启用辅助功能。如果将其设置为  `'off'`  ，则编辑器将始终禁用辅助功能。

## accessibilityVerbose
+ 类型:  `boolean`   `可选` 
+ 默认值:  `false` 
+ 可选项:  `-` 
+ 描述: 用于控制屏幕阅读器的详细程度
如果将 accessibilityVerbose 设置为 true ，则屏幕阅读器在读取编辑器内容时会提供更详细的信息。

## ariaLabel
+ 类型:  `string`   `可选` 
+ 默认值:  `''` 
+ 可选项:  `-` 
+ 描述: 用于控制编辑器的 ARIA 标签
如果将 ariaLabel 设置为一个非空字符串，则编辑器会将其作为 ARIA 标签添加到编辑器的容器元素中，以提高可访问性。

## autoClosingBrackets
+ 类型:  [EditorAutoClosingStrategy](../aliase.md#editorautoclosingstrategy)   `可选` 
+ 默认值:  `true` 
+ 可选项:  `-` 
+ 描述: 用于控制是否自动闭合括号
如果将 autoClosingBrackets 设置为 true ，则在输入左括号时，编辑器会自动插入相应的右括号，并将光标放置在括号之间。可以使用 [monaco.languages.setLanguageConfiguration](../../language/language.md#setlanguageconfiguration) 方法设置语言的括号匹配规则。默认以lanuage的设置为准


## autoClosingDelete
+ 类型:  [EditorAutoClosingStrategy](../aliase.md#editorautoclosingeditstrategy)    `可选` 
+ 默认值:  `-` 
+ 可选项:  `-` 
+ 描述: 用于控制是否在删除时自动删除闭合的括号


## autoClosingOvertype
+ 类型:  [EditorAutoClosingStrategy](../aliase.md#editorautoclosingeditstrategy)   `可选` 
+ 默认值:  `-` 
+ 可选项:  `-` 
+ 描述: 用于控制是否在覆盖模式下自动闭合括号

## autoClosingQuotes
+ 类型:  [EditorAutoClosingStrategy](../aliase.md#editorautoclosingstrategy)    `可选` 
+ 默认值:  `-` 
+ 可选项:  `-` 
+ 描述: 用于控制是否自动闭合引号

## autoIndent
+ 类型:  `string`   `可选` 
+ 默认值:  `advanced` 
+ 可选项:  `"none" | "advanced" | "full" | "brackets" | "keep"` 
+ 描述: 用于控制是否自动缩进


## autoSurround
+ 类型:  [EditorAutoSurroundStrategy](../aliase.md#editorautosurroundstrategy)   `可选` 
+ 默认值:  `languageDefined` 
+ 可选项:  `-` 
+ 描述: 用于控制是否自动包围选定的文本

## automaticLayout
+ 类型:  `boolean`   `可选` 
+ 默认值:  `false` 
+ 可选项:  `-` 
+ 描述: 用于控制是否自动调整编辑器的大小
如果将 automaticLayout 设置为 true ，则编辑器会在窗口大小发生变化时自动调整大小以适应新的窗口大小。

## bracketPairColorization
+ 类型:  [IBracketPairColorizationOptions](IBracketPairColorizationOptions.md)   `可选` 
+ 默认值:  `-` 
+ 可选项:  `-` 
+ 描述: 用于控制是否高亮显示匹配的括号
如果将 bracketPairColorization 设置为 true ，则编辑器会在输入左括号时高亮显示相应的右括号，并在将光标放在左括号或右括号上时高亮显示相应的匹配括号。


## codeActionsOnSaveTimeout
+ 类型:  `number`   `可选` 
+ 默认值:  `750` 
+ 可选项:  `-` 
+ 描述: 用于控制代码保存时执行代码操作的超时时间
如果将 codeActionsOnSaveTimeout 设置为一个正整数，则在保存代码时，编辑器会等待指定的时间以执行代码操作。

## codeLens
+ 类型:  `boolean`   `可选` 
+ 默认值:  `true` 
+ 可选项:  `-` 
+ 描述: 用于控制是否启用代码镜头（CodeLens）
如果将 codeLens 设置为 true ，则编辑器会在代码中显示代码镜头，其中包含有关代码的其他信息，例如代码的引用和测试状态。

## codeLensFontFamily
+ 类型:  `string`   `可选` 
+ 默认值:  `editor default` 
+ 可选项:  `-` 
+ 描述: 用于控制代码镜头的字体系列
如果将 codeLensFontFamily 设置为一个非空字符串，则编辑器会使用指定的字体系列来呈现代码镜头。

## codeLensFontSize
+ 类型:  `number`   `可选` 
+ 默认值:  `editor 字体大小的 90%` 
+ 可选项:  `-` 
+ 描述: 用于控制代码镜头的字体大小
如果将 codeLensFontSize 设置为一个正整数，则编辑器会使用指定的字体大小来呈现代码镜头。

## colorDecorators
+ 类型:  `boolean`   `可选` 
+ 默认值:  `true` 
+ 可选项:  `-` 
+ 描述: 用于控制是否启用颜色修饰器
如果将 colorDecorators 设置为 true ，则编辑器会在代码中使用颜色修饰器，以提供有关代码的其他信息，例如代码的引用和测试状态。

## colorDecoratorsLimit
+ 类型:  `number`   `可选` 
+ 默认值:  `5000` 
+ 可选项:  `-` 
+ 描述: 控制文本编辑器中颜色装饰器的数量限制。

## columnSelection
+ 类型:  `boolean`   `可选` 
+ 默认值:  `false` 
+ 可选项:  `-` 
+ 描述: 控制是否启用列选择。

## comments
+ 类型:  [IEditorCommentsOptions](IEditorCommentsOptions.md)  `可选` 
+ 默认值:  `undefined` 
+ 可选项:  `-` 
+ 描述: 控制编辑器中注释的行为。

## contextmenu
+ 类型:  `boolean`   `可选` 
+ 默认值:  `true` 
+ 可选项:  `-` 
+ 描述: 控制是否启用上下文菜单。

## copyWithSyntaxHighlighting
+ 类型:  `boolean`   `可选` 
+ 默认值:  `true` 
+ 可选项:  `-` 
+ 描述: 控制复制时是否包含语法高亮。

## cursorBlinking
+ 类型:  `string`   `可选` 
+ 默认值:  `blink` 
+ 可选项:  `blink` ,  `smooth` ,  `phase` ,  `expand` ,  `solid` 
+ 描述: 控制光标闪烁的方式。

## cursorSmoothCaretAnimation
+ 类型:  `string`   `可选` 
+ 默认值:  `off` 
+ 可选项:  `"on" | "off" | "explicit"` 
+ 描述: 控制是否启用光标平滑动画。

## cursorStyle
+ 类型:  `string`   `可选` 
+ 默认值:  `line` 
+ 可选项:  `line` ,  `block` ,  `underline` ,  `line-thin` ,  `block-outline` ,  `underline-thin` 
+ 描述: 控制光标样式。

## cursorSurroundingLines
+ 类型:  `number`   `可选` 
+ 默认值:  `0` 
+ 可选项:  `-` 
+ 描述: 控制光标周围可见的行数。

## cursorSurroundingLinesStyle
+ 类型:  `string`   `可选` 
+ 默认值:  `default` 
+ 可选项:  `default` ,  `all` 
+ 描述: 控制光标周围可见的行的样式。

## cursorWidth
+ 类型:  `number`   `可选` 
+ 默认值:  `0` 
+ 可选项:  `-` 
+ 描述: 控制光标宽度。

## defaultColorDecorators
+ 类型:  `boolean`   `可选` 
+ 默认值:  `true` 
+ 可选项:  `-` 
+ 描述: 控制是否启用默认的颜色装饰器。

## definitionLinkOpensInPeek
+ 类型:  `boolean`   `可选` 
+ 默认值:  `false` 
+ 可选项:  `-` 
+ 描述: 控制定义链接是否在峰视图中打开。

## diffAlgorithm
+ 类型:  `string`   `可选` 
+ 默认值:  `original` 
+ 可选项:  "advanced" | "legacy" | [IDocumentDiffProvider](IDocumentDiffProvider.md)
+ 描述: 控制差异算法。  

## diffCodeLens
+ 类型:  `boolean`   `可选` 
+ 默认值:  `true` 
+ 可选项:  `-` 
+ 描述: 控制是否启用差异代码镜头。

## diffWordWrap
+ 类型:  `boolean`   `可选` 
+ 默认值:  `false` 
+ 可选项:  `-` 
+ 描述: 控制差异编辑器中是否启用自动换行。

## dimension
+ 类型:  `monaco.editor.IDimension`   `可选` 
+ 默认值:  `undefined` 
+ 可选项:  `-` 
+ 描述: 控制编辑器的大小。

## disableLayerHinting
+ 类型:  `boolean`   `可选` 
+ 默认值:  `false` 
+ 可选项:  `-` 
+ 描述: 控制是否禁用层提示。

## disableMonospaceOptimizations
+ 类型:  `boolean`   `可选` 
+ 默认值:  `false` 
+ 可选项:  `-` 
+ 描述: 控制是否禁用等宽字体优化。

## domReadOnly
+ 类型:  `boolean`   `可选` 
+ 默认值:  `false` 
+ 可选项:  `-` 
+ 描述: 控制是否将编辑器设置为只读。

## dragAndDrop
+ 类型:  `boolean`   `可选` 
+ 默认值:  `true` 
+ 可选项:  `-` 
+ 描述: 控制是否启用拖放。

## dropIntoEditor
+ 类型:  `boolean`   `可选` 
+ 默认值:  `true` 
+ 可选项:  `-` 
+ 描述: 控制是否启用将文件拖放到编辑器中。

## emptySelectionClipboard
+ 类型:  `boolean`   `可选` 
+ 默认值:  `true` 
+ 可选项:  `-` 
+ 描述: 控制是否将空选择复制到剪贴板中。

## enableSplitViewResizing
+ 类型:  `boolean`   `可选` 
+ 默认值:  `true` 
+ 可选项:  `-` 
+ 描述: 控制是否启用分割视图调整大小。

## experimental
+ 类型:  `如下代码`   `可选` 
+ 默认值:  `collapseUnchangedRegions 默认值为 false` 
+ 可选项:  `-` 
+ 描述: 控制是否启用实验性特性。

```javascript
experimental?: {
    collapseUnchangedRegions?: boolean;
}
```

## experimentalWhitespaceRendering
+ 类型:  `enum`   `可选` 
+ 默认值:  `svg` 
+ 可选项:  `"off" | "svg" | "font"` 
+ 描述: 控制是否启用实验性的空格渲染。

## extraEditorClassName
+ 类型:  `string`   `可选` 
+ 默认值:  `undefined` 
+ 可选项:  `-` 
+ 描述: 控制编辑器的额外 CSS 类名。

## fastScrollSensitivity
+ 类型:  `number`   `可选` 
+ 默认值:  `5` 
+ 可选项:  `-` 
+ 描述: 控制快速滚动的灵敏度。

## find
+ 类型:  [monaco.editor.IEditorFindOptions](IEditorFindOptions.md)   `可选` 
+ 默认值:  `undefined` 
+ 可选项:  `-` 
+ 描述: 控制查找行为。

## fixedOverflowWidgets
+ 类型:  `boolean`   `可选` 
+ 默认值:  `false` 
+ 可选项:  `-` 
+ 描述: 控制是否固定溢出的小部件。

## folding
+ 类型:  `boolean`   `可选` 
+ 默认值:  `true` 
+ 可选项:  `-` 
+ 描述: 控制是否启用折叠。

## foldingHighlight
+ 类型:  `boolean`   `可选` 
+ 默认值:  `true` 
+ 可选项:  `-` 
+ 描述: 控制是否突出显示折叠范围。

## foldingImportsByDefault
+ 类型:  `boolean`   `可选` 
+ 默认值:  `false` 
+ 可选项:  `-` 
+ 描述: 控制是否默认折叠导入语句。

## foldingMaximumRegions
+ 类型:  `number`   `可选` 
+ 默认值:  `5000` 
+ 可选项:  `-` 
+ 描述: 控制最大折叠区域数。

## foldingStrategy
+ 类型:  `string`   `可选` 
+ 默认值:  `auto` 
+ 可选项:  `auto` ,  `indentation` 
+ 描述: 控制折叠策略。 'auto' 使用为当前文档的策略，'indentation' 使用基于缩进的折叠策略。默认为“自动”。

## fontFamily
+ 类型:  `string`   `可选` 
+ 默认值:  `'Menlo', 'Monaco', 'Consolas', 'source-code-pro', 'monospace'` 
+ 可选项:  `-` 
+ 描述: 控制字体系列。

## fontLigatures
+ 类型:  `boolean`   `可选` 
+ 默认值:  `false` 
+ 可选项:  `-` 
+ 描述: 控制是否启用字体连字。

## fontSize
+ 类型:  `number`   `可选` 
+ 默认值:  `0` 
+ 可选项:  `-` 
+ 描述: 控制字体大小。

## fontVariations
+ 类型:  `string`   `可选` 
+ 默认值:  `undefined` 
+ 可选项:  `-` 
+ 描述: 控制字体变体。

## fontWeight
+ 类型:  `string`   `可选` 
+ 默认值:  `normal` 
+ 可选项:  `normal` ,  `bold` ,  `bolder` ,  `lighter` ,  `100` ,  `200` ,  `300` ,  `400` ,  `500` ,  `600` ,  `700` ,  `800` ,  `900` 
+ 描述: 控制字体粗细。

## formatOnPaste
+ 类型:  `boolean`   `可选` 
+ 默认值:  `false` 
+ 可选项:  `-` 
+ 描述: 控制是否在粘贴时格式化文本。

## formatOnType
+ 类型:  `boolean`   `可选` 
+ 默认值:  `false` 
+ 可选项:  `-` 
+ 描述: 控制是否在键入时格式化文本。

## glyphMargin
+ 类型:  `boolean`   `可选` 
+ 默认值:  `true` 
+ 可选项:  `-` 
+ 描述: 控制是否启用符号边距。

## gotoLocation
+ 类型:  [monaco.editor.IGotoLocationOptions](IGotoLocationOptions.md)   `可选` 
+ 默认值:  `-` 
+ 可选项:  `-` 
+ 描述: 控制跳转位置的行为。


## guides
+ 类型: [monaco.editor.IGuidesOptions](IGuidesOptions.md)   `可选` 
+ 默认值:  `-` 
+ 可选项:  `-` 
+ 描述: 控制是否显示编辑器中的垂直参考线。

## hideCursorInOverviewRuler
+ 类型:  `boolean`   `可选` 
+ 默认值:  `false` 
+ 可选项:  `-` 
+ 描述: 控制是否在概览标尺中隐藏光标。

## hover
+ 类型: [monaco.editor.IEditorHoverOptions](IEditorHoverOptions.md)  `可选` 
+ 默认值:  `-` 
+ 可选项:  `-` 
+ 描述: 控制是否在编辑器中启用悬停提示。

## ignoreTrimWhitespace
+ 类型:  `boolean`   `可选` 
+ 默认值:  `true` 
+ 可选项:  `-` 
+ 描述: 控制是否在比较差异时忽略空格。

## inDiffEditor
+ 类型:  `boolean`   `可选` 
+ 默认值:  `false` 
+ 可选项:  `-` 
+ 描述: 控制是否在差异编辑器中启用编辑器。

## inlayHints
+ 类型:  [monaco.editor.IEditorInlayHintsOptions](IEditorInlayHintsOptions.md)   `可选` 
+ 默认值:  `-` 
+ 可选项:  `-` 
+ 描述: 控制是否在编辑器中启用内联提示。

## inlineSuggest
+ 类型:  [monaco.editor.IInlineSuggestOptions](IInlineSuggestOptions.md)   `可选` 
+ 默认值:  `-` 
+ 可选项:  `-}` 
+ 描述: 控制是否在编辑器中启用内联建议。

## isInEmbeddedEditor
+ 类型:  `boolean`   `可选` 
+ 默认值:  `false` 
+ 可选项:  `-` 
+ 描述: 控制是否在嵌入式编辑器中启用编辑器。

## letterSpacing
+ 类型:  `number`   `可选` 
+ 默认值:  `0` 
+ 可选项:  `-` 
+ 描述: 控制字符间距。

## lightbulb
+ 类型:  [monaco.editor.IEditorLightbulbOptions](IEditorLightbulbOptions.md)   `可选` 
+ 默认值:  `{ enabled: true }` 
+ 可选项:  `{ enabled: boolean }` 
+ 描述: 控制是否在编辑器中启用轻量级提示。

## lineDecorationsWidth
+ 类型:  `string`   `可选` 
+ 默认值:  `1px` 
+ 可选项:  `-` 
+ 描述: 控制行装饰的宽度。

## lineHeight
+ 类型:  `number`   `可选` 
+ 默认值:  `0` 
+ 可选项:  `-` 
+ 描述: 控制行高。

## lineNumbers
+ 类型: [LineNumbersType](../aliase.md#linenumberstype)  `可选` 
+ 默认值:  `on` 
+ 可选项:  `-` 
+ 描述: 控制行号的呈现。 如果是函数，在渲染一个行号的时候会调用它，渲染返回值。 否则，如果它是真值，行号将被正常渲染（相当于使用恒等函数）。 否则，将不会呈现行号。 默认为开。

## lineNumbersMinChars
+ 类型:  `number`   `可选` 
+ 默认值:  `5` 
+ 可选项:  `-` 
+ 描述: 控制行号的最小字符数。保留水平空间来呈现至少一定数量的数字.

## linkedEditing
+ 类型:  `boolean`   `可选` 
+ 默认值:  `false` 
+ 可选项:  `-` 
+ 描述: 控制是否启用链接编辑。

## links
+ 类型:  `boolean`   `可选` 
+ 默认值:  `true` 
+ 可选项:  `-` 
+ 描述: 控制是否启用链接。

## matchBrackets
+ 类型:  `string`   `可选` 
+ 默认值:  `always` 
+ 可选项:  `"always" | "never" | "near"` 
+ 描述: 控制是否突出显示匹配括号。

## matchOnWordStartOnly
+ 类型:  `boolean`   `可选` 
+ 默认值:  `false` 
+ 可选项:  `-` 
+ 描述: 控制是否仅在单词开头匹配。

## maxComputationTime
+ 类型:  `number`   `可选` 
+ 默认值:  `5000` 
+ 可选项:  `-` 
+ 描述: 控制计算的最大时间（以毫秒为单位）。

## maxFileSize
+ 类型:  `number`   `可选` 
+ 默认值:  `50` 
+ 可选项:  `-` 
+ 描述: 控制最大文件大小 单位MB。

## minimap
+ 类型:  [editor.IEditorMinimapOptions](IEditorMinimapOptions.md)   `可选` 
+ 默认值:  `{ enabled: true }` 
+ 可选项:  `{ enabled: boolean, maxColumn: number, renderCharacters: boolean, showSlider: 'always' | 'mouseover' }` 
+ 描述: 控制是否显示缩略图。

## modifiedAriaLabel
+ 类型:  `string`   `可选` 
+ 默认值:  `undefined` 
+ 可选项:  `-` 
+ 描述: 控制修改版面板的 ARIA 标签。

## mouseStyle
+ 类型:  `string`   `可选` 
+ 默认值:  `text` 
+ 可选项:  `'text' | 'default' | 'copy'` 
+ 描述: 控制鼠标样式。
 

## mouseWheelScrollSensitivity
+ 类型:  `number`   `可选` 
+ 默认值:  `1` 
+ 可选项:  `-` 
+ 描述: 用于控制鼠标滚轮滚动时的滚动速度。

## mouseWheelZoom
+ 类型:  `boolean`   `可选` 
+ 默认值:  `false` 
+ 可选项:  `-` 
+ 描述: 用于控制是否启用鼠标滚轮缩放。

## multiCursorLimit
+ 类型:  `number`   `可选` 
+ 默认值:  `100` 
+ 可选项:  `-` 
+ 描述: 用于控制多光标的数量限制。

## multiCursorMergeOverlapping
+ 类型:  `boolean`   `可选` 
+ 默认值:  `true` 
+ 可选项:  `-` 
+ 描述: 用于控制多光标是否可以合并重叠的部分。

## multiCursorModifier
+ 类型:  `string`   `可选` 
+ 默认值:  `'alt'` 
+ 可选项:  `'alt'` ,  `'ctrlCmd'` 
+ 描述: 用于控制触发多光标的修改键。

## multiCursorPaste
+ 类型:  `string`   `可选` 
+ 默认值:  `'spread'` 
+ 可选项:  `'spread'` ,  `'full'` 
+ 描述: 用于控制多光标粘贴时的行为。

## occurrencesHighlight
+ 类型:  `boolean`   `可选` 
+ 默认值:  `true` 
+ 可选项:  `-` 
+ 描述: 用于控制是否高亮显示所有匹配项。

## originalAriaLabel
+ 类型:  `string`   `可选` 
+ 默认值:  `undefined` 
+ 可选项:  `-` 
+ 描述: 用于控制编辑器的原始 ARIA 标签。

## originalEditable
+ 类型:  `boolean`   `可选` 
+ 默认值:  `undefined` 
+ 可选项:  `-` 
+ 描述: 用于控制编辑器是否可编辑。

## overflowWidgetsDomNode
+ 类型:  `HTMLElement`   `可选` 
+ 默认值:  `undefined` 
+ 可选项:  `-` 
+ 描述: 用于控制溢出小部件的 DOM 节点。

## overviewRulerBorder
+ 类型:  `boolean`   `可选` 
+ 默认值:  `true` 
+ 可选项:  `-` 
+ 描述: 用于控制概览标尺是否显示边框。

## overviewRulerLanes
+ 类型:  `number`   `可选` 
+ 默认值:  `3` 
+ 可选项:  `-` 
+ 描述: 用于控制概览标尺的宽度。

## padding
+ 类型:  [editor.IEditorPaddingOptions](IEditorPaddingOptions.md)   `可选` 
+ 默认值:  `{ top: 0, bottom: 0 }` 
+ 可选项:  `-` 
+ 描述: 用于控制编辑器的填充。

## parameterHints
+ 类型:  [editor.IEditorParameterHintOptions](IEditorParameterHintOptions.md) `可选` 
+ 默认值:  `{ enabled: true }` 
+ 可选项:  `-` 
+ 描述: 用于控制参数提示的行为。

## pasteAs
+ 类型:  [editor.IPasteOptions](IPasteAsOptions.md)   `可选` 
+ 默认值:  `{ pastedText: 'default' }` 
+ 可选项:  `-` 
+ 描述: 用于控制粘贴时的行为。

## peekWidgetDefaultFocus
+ 类型:  `enum`  `可选` 
+ 默认值:  `false` 
+ 可选项:  `"tree" | "editor"` 
+ 描述: 用于控制查看小部件的默认焦点。

## quickSuggestions
+ 类型:  `boolean` | [editor.IQuickSuggestionsOptions](IQuickSuggestionsOptions.md)   `可选` 
+ 默认值:  `true` 
+ 可选项:  `-` 
+ 描述: 用于控制是否启用快速建议。

## quickSuggestionsDelay
+ 类型:  `number`   `可选` 
+ 默认值:  `10` 
+ 可选项:  `-` 
+ 描述: 用于控制快速建议的延迟时间。单位 ms

## readOnly
+ 类型:  `boolean`   `可选` 
+ 默认值:  `false` 
+ 可选项:  `-` 
+ 描述: 用于控制编辑器是否只读。

## renameOnType
+ 类型:  `boolean`   `可选` 
+ 默认值:  `false` 
+ 可选项:  `-` 
+ 描述: 用于控制是否在输入时自动重命名符号。

## renderControlCharacters
+ 类型:  `boolean`   `可选` 
+ 默认值:  `true` 
+ 可选项:  `-` 
+ 描述: 用于控制是否渲染控制字符。

## renderFinalNewline
+ 类型:  `boolean`   `可选` 
+ 默认值:  `on` 
+ 可选项:  ` "on" | "off" | "dimmed"` 
+ 描述: 用于控制是否渲染最终的换行符。

## renderIndicators
+ 类型:  `boolean`   `可选` 
+ 默认值:  `true` 
+ 可选项:  `-` 
+ 描述: 用于控制是否渲染指示器。

## renderLineHighlight
+ 类型:  `string`   `可选` 
+ 默认值:  `'all'` 
+ 可选项:  `'none'` ,  `'gutter'` ,  `'line'` ,  `'all'` 
+ 描述: 用于控制行高亮的行为。

## renderLineHighlightOnlyWhenFocus
+ 类型:  `boolean`   `可选` 
+ 默认值:  `false` 
+ 可选项:  `-` 
+ 描述: 用于控制是否只在编辑器获得焦点时才高亮显示行。

## renderMarginRevertIcon
+ 类型:  `boolean`   `可选` 
+ 默认值:  `true` 
+ 可选项:  `-` 
+ 描述: 用于控制是否渲染边距还原图标。

## renderOverviewRuler
+ 类型:  `boolean`   `可选` 
+ 默认值:  `true` 
+ 可选项:  `-` 
+ 描述: 用于控制是否渲染概览标尺。

## renderSideBySide
+ 类型:  `boolean`   `可选` 
+ 默认值:  `true` 
+ 可选项:  `-` 
+ 描述: 用于控制是否渲染并排视图。

## renderValidationDecorations
+ 类型:  `string`   `可选` 
+ 默认值:  `'editable'` 
+ 可选项:  `'on'` ,  `'off'` ,  `'editable'`  
+ 描述: 用于控制验证装饰的行为。

## renderWhitespace
+ 类型:  `string`   `可选` 
+ 默认值:  `'selection'` 
+ 可选项:  `"all" | "none" | "boundary" | "selection" | "trailing"` 
+ 描述: 用于控制渲染空白字符的行为。


## revealHorizontalRightPadding
+ 类型:  `number`   `可选` 
+ 默认值:  `30` 
+ 可选项:  `-` 
+ 描述: 控制编辑器在水平滚动时距离视窗右侧的像素数。

## roundedSelection
+ 类型:  `boolean`   `可选` 
+ 默认值:  `true` 
+ 可选项:  `-` 
+ 描述: 控制编辑器是否使用圆形选择。

## rulers
+ 类型:  (`number`| [IRulerOption](IRulerOption.md))[]   `可选` 
+ 默认值:  `[]` 
+ 可选项:  `-` 
+ 描述: 控制编辑器的垂直标尺的位置。

## screenReaderAnnounceInlineSuggestion
+ 类型:  `boolean`   `可选` 
+ 默认值:  `-` 
+ 可选项:  `-` 
+ 描述: 控制编辑器是否应该在屏幕阅读器中宣布内联建议。

## scrollBeyondLastColumn
+ 类型:  `number`   `可选` 
+ 默认值:  `5` 
+ 可选项:  `-` 
+ 描述: 控制编辑器在水平滚动时是否滚动超过最后一列。

## scrollBeyondLastLine
+ 类型:  `boolean`   `可选` 
+ 默认值:  `true` 
+ 可选项:  `-` 
+ 描述: 控制编辑器在垂直滚动时是否滚动超过最后一行。

## scrollPredominantAxis
+ 类型:  `boolean`   `可选` 
+ 默认值:  `true` 
+ 可选项:  `-` 
+ 描述: 控制编辑器在垂直和水平滚动时是否只滚动主轴。

## scrollbar
+ 类型:  [IEditorScrollbarOptions](IEditorScrollbarOptions.md)  `可选` 
+ 默认值:  `{}`  
+ 可选项:  `-` 
+ 描述: 控制编辑器滚动条的外观和行为。

## selectOnLineNumbers
+ 类型:  `boolean`   `可选` 
+ 默认值:  `true` 
+ 可选项:  `-` 
+ 描述: 控制编辑器是否应该在单击行号时选择整行。

## selectionClipboard
+ 类型:  `boolean`   `可选` 
+ 默认值:  `true` 
+ 可选项:  `-` 
+ 描述: 控制编辑器是否应该将选择内容复制到剪贴板。

## selectionHighlight
+ 类型:  `boolean`   `可选` 
+ 默认值:  `true` 
+ 可选项:  `-` 
+ 描述: 控制编辑器是否应该突出显示与所选内容相同的内容。

## showDeprecated
+ 类型:  `boolean`   `可选` 
+ 默认值:  `false` 
+ 可选项:  `-` 
+ 描述: 控制是否应该显示已弃用的代码。

## showFoldingControls
+ 类型:  `string`   `可选` 
+ 默认值:  `"mouseover"` 
+ 可选项:  `"always" | "never" | "mouseover"` 
+ 描述: 控制折叠控件何时可见。

## showUnused
+ 类型:  `boolean`   `可选` 
+ 默认值:  `true` 
+ 可选项:  `-` 
+ 描述: 控制是否应该显示未使用的代码。

## smartSelect
+ 类型:  [ISmartSelectOptions](ISmartSelectOptions.md)   `可选` 
+ 默认值:  `true` 
+ 可选项:  `-` 
+ 描述: 控制编辑器是否应该使用智能选择。

## smoothScrolling
+ 类型:  `boolean`   `可选` 
+ 默认值:  `false` 
+ 可选项:  `-` 
+ 描述: 控制编辑器是否应该使用平滑滚动。

## snippetSuggestions
+ 类型:  `string`   `可选` 
+ 默认值:  `"bottom"` 
+ 可选项:  `"top"` ,  `"bottom"` ,  `"inline"` ,  `"none"` 
+ 描述: 控制代码段建议的位置。

## splitViewDefaultRatio
+ 类型:  `number`   `可选` 
+ 默认值:  `0.5` 
+ 可选项:  `-` 
+ 描述: 控制拆分编辑器的默认比率。必须是0-1之间的数字

## stickyScroll
+ 类型:  [IEditorStickyScrollOptions](IEditorStickyScrollOptions.md)   `可选` 
+ 默认值:  `true` 
+ 可选项:  `-` 
+ 描述: 控制编辑器是否应该在滚动时保持光标位置不变。

## stickyTabStops
+ 类型:  `boolean`   `可选` 
+ 默认值:  `true` 
+ 可选项:  `-` 
+ 描述: 控制编辑器是否应该使用固定的制表位。

## stopRenderingLineAfter
+ 类型:  `number`   `可选` 
+ 默认值:  `10000` 
+ 可选项:  `-` 
+ 描述: 控制编辑器在渲染时停止渲染行的数量。

## suggest
+ 类型:  [ISuggestOptions](ISuggestOptions.md)   `可选` 
+ 默认值:  `{}`  
+ 可选项:  `-` 
+ 描述: 控制编辑器的建议行为。

## suggestFontSize
+ 类型:  `number`   `可选` 
+ 默认值:  `0` 
+ 可选项:  `-` 
+ 描述: 控制建议列表中字体的大小。

## suggestLineHeight
+ 类型:  `number`   `可选` 
+ 默认值:  `0` 
+ 可选项:  `-` 
+ 描述: 控制建议列表中行高的大小。

## suggestOnTriggerCharacters
+ 类型:  `boolean`   `可选` 
+ 默认值:  `true` 
+ 可选项:  `-` 
+ 描述: 控制是否应该在输入触发字符时显示建议。

## suggestSelection
+ 类型:  `string`   `可选` 
+ 默认值:  `"recentlyUsed"` 
+ 可选项:  `"first"` ,  `"recentlyUsed"` ,  `"recentlyUsedByPrefix"` 
+ 描述: 控制建议列表中默认选择的建议。

## tabCompletion
+ 类型:  `string`   `可选` 
+ 默认值:  `"off"` 
+ 可选项:  `"on"` ,  `"off"` ,  `"onlySnippets"` 
+ 描述: 控制编辑器是否应该在按下 Tab 键时插入建议。

## tabFocusMode
+ 类型:  `boolean`   `可选` 
+ 默认值:  `false` 
+ 可选项:  `-` 
+ 描述: 控制编辑器是否应该在 Tab 键按下时启用焦点模式。

## tabIndex
+ 类型:  `number`   `可选` 
+ 默认值:  `0` 
+ 可选项:  `-` 
+ 描述: 控制编辑器的 Tab 键顺序。


## unfoldOnClickAfterEndOfLine
+ 类型:  `boolean`   `可选` 
+ 默认值:  `false` 
+ 可选项:  `-` 
+ 描述: 控制编辑器是否应该在单击行末时展开该行。

## unicodeHighlight
+ 类型:  [IUnicodeHighlightOptions](IUnicodeHighlightOptions.md)   `可选` 
+ 默认值:  `true` 
+ 可选项:  `-` 
+ 描述: 控制编辑器是否应该突出显示 Unicode 字符。

## unusualLineTerminators
+ 类型:  `boolean`   `可选` 
+ 默认值:  `prompt` 
+ 可选项:  `"off" | "auto" | "prompt"` 
+ 描述: 控制编辑器是否应该突出显示非常规换行符。

## useShadowDOM
+ 类型:  `boolean`   `可选` 
+ 默认值:  `false` 
+ 可选项:  `-` 
+ 描述: 控制编辑器是否应该使用 Shadow DOM。

## useTabStops
+ 类型:  `boolean`   `可选` 
+ 默认值:  `true` 
+ 可选项:  `-` 
+ 描述: 控制编辑器是否应该使用制表位。

## wordBreak
+ 类型:  `string`   `可选` 
+ 默认值:  `"normal"` 
+ 可选项:  `"normal" | "keepAll"` 
+ 描述: 控制编辑器的单词换行。


## wordSeparators
+ 类型:  `string`   `可选` 
+ 默认值:  `" ~!@#$%^&*()-=+[{]}\\|;:'\",.<>/?"` 
+ 可选项:  `-` 
+ 描述: 用于定义单词分隔符。默认情况下，Monaco 编辑器使用空格和标点符号作为单词分隔符。可以使用此选项自定义单词分隔符。

## wordWrap
+ 类型:  `string`   `可选` 
+ 默认值:  `"off"` 
+ 可选项:  `"off"` ,  `"on"` ,  `"wordWrapColumn"` ,  `"bounded"` 
+ 描述: 用于控制文本的换行。当设置为  `"off"`  时，文本不会自动换行。当设置为  `"on"`  时，文本将在视区宽度内自动换行。当设置为  `"wordWrapColumn"`  时，文本将在指定的列数处自动换行。当设置为  `"bounded"`  时，文本将在视区宽度和指定列数的较小值处自动换行。

## wordWrapBreakAfterCharacters
+ 类型:  `string`   `可选` 
+ 默认值:  `"\t\r\n\x20.,;:!?'\"\\)]}"` 
+ 可选项:  `-` 
+ 描述: 用于定义单词换行符。默认情况下，Monaco 编辑器使用空格和标点符号作为单词换行符。可以使用此选项自定义单词换行符。

## wordWrapBreakBeforeCharacters
+ 类型:  `string`   `可选` 
+ 默认值:  `"\t\r\n\x20.,;:!?'\"([{"` 
+ 可选项:  `-` 
+ 描述: 用于定义单词前的换行符。默认情况下，Monaco 编辑器使用空格和标点符号作为单词前的换行符。可以使用此选项自定义单词前的换行符。

## wordWrapColumn
+ 类型:  `number`   `可选` 
+ 默认值:  `80` 
+ 可选项:  `-` 
+ 描述: 用于定义文本的列数。当设置为  `"wordWrapColumn"`  时，文本将在指定的列数处自动换行。

## wordWrapOverride1
+ 类型:  `Function`   `可选` 
+ 默认值:  `-` 
+ 可选项:  `"on" | "off" | "inherit"` 
+ 描述: 用于定义自定义的文本换行逻辑。可以使用此选项自定义文本的换行方式。覆盖[wordWrap](#wordwrap)的配置

## wordWrapOverride2
+ 类型:  `Function`   `可选` 
+ 默认值:  `-` 
+ 可选项:  `-` 
+ 描述: 用于定义自定义的文本换行逻辑。可以使用此选项自定义文本的换行方式。覆盖[wordWrapOverride1](#wordWrapOverride1)的配置

## wrappingIndent
+ 类型:  `string`   `可选` 
+ 默认值:  `"none"` 
+ 可选项:  `"none"` ,  `"same"` ,  `"indent"` ,  `"deepIndent"` 
+ 描述: 用于控制换行后的缩进方式。当设置为  `"none"`  时，换行后不进行缩进。当设置为  `"same"`  时，换行后的行与上一行的缩进相同。当设置为  `"indent"`  时，换行后的行会进行一次缩进。当设置为  `"deepIndent"`  时，换行后的行会进行两次缩进。

## wrappingStrategy
+ 类型:  `string`   `可选` 
+ 默认值:  `"simple"` 
+ 可选项:  `"simple"` ,  `"advanced"` 
+ 描述: 用于控制文本的换行策略。当设置为  `"simple"`  时，文本将根据视区宽度自动换行。当设置为  `"advanced"`  时，文本将根据语言的语法规则和视区宽度自动换行。如果您的语言支持语法分析，则建议使用  `"advanced"`  模式。
 

 