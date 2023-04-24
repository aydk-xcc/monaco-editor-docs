# 初始化
```javascript
this.editor = monaco.editor.create(document.getElementById('editor'), {
    value: 'const foo = () => 0;',
    language: 'javascript',
    theme: 'vs-dark'
});
```
`monaco.editor.create`会创建一个编辑器实例，create方法有三个参数
+ domElement: `必填` 渲染编辑器的dom节点 
+ options: `可选 ` 配置参数 下面会展开说
+ override: `可选` 重写

## options
### acceptSuggestionOnCommitCharacter
+ 类型: `Bollean` `可选`
+ 默认值: `true`
+ 可选项: `true | false`
+ 描述: `用于控制在输入时是否自动接受建议。如果启用了该设置，当您输入一个特定的字符时，编辑器将自动接受建议。如果禁用了该设置，则不会自动接受建议。
如果要启用 acceptSuggestionOnCommitCharacter设置，将其设置为 true。如果要禁用该设置，则将其设置为 false。如果您希望在输入特定字符时自动接受建议，则可以将其设置为一个字符或字符数组。例如，如果要在输入 . 或 : 时自动接受建议，则可以将其设置为 ['.', ':']。`

### acceptSuggestionOnEnter
+ 类型: `String` `可选`
+ 默认值: `on`
+ 可选项:  `"on" | "off" | "smart"`
+ 描述: `用于控制在按下 Enter键时是否自动接受建议。如果启用了该设置，当您按下Enter键时，编辑器将自动接受建议。如果禁用了该设置，则不会自动接受建议。`

### accessibilityHelpUrl
+ 类型: `String` `可选`
+ 默认值: `https://go.microsoft.com/fwlink/?linkid=852450`
+ 可选项:  `-`
+ 描述: `用于指定辅助功能帮助文档的URL。如果启用了该设置，并且用户按下 F1键，则编辑器将打开指定的URL以显示帮助文档。如果禁用了该设置，则不会打开帮助文档。如果要禁用该设置，则将其设置为 null。`

### accessibilityPageSize
+ 类型: `number` `可选`
+ 默认值: `-`
+ 可选项:  `-`
+ 描述: `用于指定辅助功能分页大小。如果启用了该设置，并且用户使用辅助功能浏览器或屏幕阅读器浏览编辑器内容，则编辑器将按照指定的分页大小进行分页。如果禁用了该设置，则不会进行分页。如果要禁用该设置，则将其设置为 null。`

### accessibilitySupport
+ 类型: `string` `可选`
+ 默认值: `auto`
+ 可选项:  `"on" | "off" | "auto"`
+ 描述: `用于启用或禁用辅助功能支持。如果启用了该设置，则编辑器将支持辅助功能浏览器和屏幕阅读器。如果禁用了该设置，则不会支持辅助功能。`

### ariaContainerElement
+ 类型: `HTMLElement` `可选`
+ 默认值: `document.body`
+ 可选项:  `-`
+ 描述: `用于指定ARIA元素的容器。如果启用了该设置，则编辑器将使用指定的容器来包装ARIA元素。如果禁用了该设置，则编辑器将使用默认的容器。如果要禁用该设置，则将其设置为 null。`

::: tip ARIA元素
ARIA（Accessible Rich Internet Applications）是一组用于增强Web应用程序可访问性的技术。ARIA元素是一种特殊的HTML元素，用于描述Web应用程序中的交互元素和控件，以便辅助功能浏览器和屏幕阅读器可以正确地解释和呈现这些元素。

ARIA元素包括角色（role）、状态（state）和属性（property）。角色定义了元素的类型和功能，状态描述了元素的当前状态，属性提供了有关元素的其他信息。

例如，一个按钮可以使用 
role="button"
 属性来指定其角色，使用 
aria-pressed="true"
 属性来指定其状态，使用 
aria-label="Click me"
 属性来指定其标签文本。

使用ARIA元素可以使Web应用程序更易于使用和访问，特别是对于那些使用辅助功能浏览器和屏幕阅读器的用户。
:::

### ariaLabel
+ 类型: `string` `可选`
+ 默认值: `-`
+ 可选项:  `-`
+ 描述: `用于指定编辑器的ARIA标签。如果启用了该设置，则编辑器将使用指定的ARIA标签来描述编辑器。如果禁用了该设置，则编辑器将使用默认的ARIA标签。如果要禁用该设置，则将其设置为 null。`

### autoClosingBrackets
+ 类型: `EditorAutoClosingStrategy` `可选`
+ 默认值: `-`
+ 可选项:  `"always" | "languageDefined" | "beforeWhitespace" | "never"`
+ 描述: `用于控制在输入括号时是否自动闭合括号。如果启用了该设置，当您输入左括号时，编辑器将自动插入右括号。如果禁用了该设置，则不会自动插入右括号。`

### autoClosingDelete
+ 类型: `EditorAutoClosingEditStrategy` `可选`
+ 默认值: `-`
+ 可选项:  `"always" | "auto" | "never"`
+ 描述: `用于控制在删除括号时是否同时删除相应的右括号。如果启用了该设置，当您删除一个左括号时，编辑器将自动删除相应的右括号。如果禁用了该设置，则不会自动删除右括号。`。
::: tip 补充
如果您希望仅在删除特定类型的括号时同时删除相应的右括号，则可以将其设置为一个对象，该对象包含要自动删除右括号的括号类型。例如，如果要仅在删除圆括号时同时删除相应的右括号，则可以将其设置为 
{ brackets: false, parentheses: true, curlyBraces: false }
。
:::

### autoClosingOvertype
+ 类型: `EditorAutoClosingEditStrategy` `可选`
+ 默认值: `-`
+ 可选项:  `"always" | "auto" | "never"`
+ 描述: `用于控制在覆盖模式下输入括号时是否自动闭合括号。如果启用了该设置，当您在覆盖模式下输入一个左括号时，编辑器将自动插入相应的右括号。如果禁用了该设置，则不会自动插入右括号。如果您希望仅在输入特定类型的括号时自动闭合括号,配置同autoClosingDelete`

### autoClosingQuotes
+ 类型: `EditorAutoClosingStrategy` `可选`
+ 默认值: `-`
+ 可选项:  `"always" | "languageDefined" | "beforeWhitespace" | "never"`
+ 描述: `用于控制在输入引号时是否自动闭合引号。如果启用了该设置，当您输入一个引号时，编辑器将自动插入相应的另一个引号。如果禁用了该设置，则不会自动插入另一个引号。`
::: tip 补充
如果您希望仅在输入特定类型的引号时自动闭合引号，则可以将其设置为一个对象，该对象包含要自动闭合的引号类型。例如，如果要仅在输入双引号时自动闭合引号，则可以将其设置为 
{ languageDefined: false, mark: '"' }。
:::

### autoDetectHighContrast
+ 类型: `Bollean` `可选`
+ 默认值: `true`
+ 可选项: `true | false`
+ 描述: `用于控制编辑器是否自动检测高对比度模式。如果启用了该设置，当用户在操作系统中启用高对比度模式时，编辑器将自动应用高对比度主题。如果禁用了该设置，则不会自动应用高对比度主题。`

### autoIndent
+ 类型: `string` `可选`
+ 默认值: `advanced`
+ 可选项: `"none" | "advanced" | "full" | "brackets" | "keep"`
+ 描述: `用于控制在输入新行时是否自动缩进。如果启用了该设置，当您在新行中输入内容时，编辑器将自动缩进到与上一行相同的缩进级别。如果禁用了该设置，则不会自动缩进。`

::: tip 每个取值的含义

"none"：禁用自动缩进。不会自动缩进。

"advanced"：启用高级自动缩进。编辑器将尝试根据上下文自动缩进，而不仅仅是复制上一行的缩进级别。这是默认值。

"full"：启用完全自动缩进。编辑器将尝试根据上下文自动缩进，并在需要时自动调整缩进级别。这可能会导致缩进级别的不一致。

"brackets"：启用基于括号的自动缩进。编辑器将尝试根据括号匹配自动缩进，并在需要时自动调整缩进级别。这可能会导致缩进级别的不一致。

"keep"：保持缩进不变。编辑器将不会自动缩进，而是保留输入的缩进
:::

### autoSurround
+ 类型: `string` `可选`
+ 默认值: `advanced`
+ 可选项: `"languageDefined" | "quotes" | "brackets" | "never"`
+ 描述: `用于控制在选中文本并输入括号或引号时是否自动将文本包裹在括号或引号中。如果启用了该设置，当您选中文本并输入括号或引号时，编辑器将自动将文本包裹在括号或引号中。如果禁用了该设置，则不会自动包裹文本。`

::: tip 每个取值的含义

"languageDefined"：根据语言定义自动添加括号或引号。

"quotes"：自动添加引号。

"brackets"：自动添加括号。

"never"：不自动添加括号或引号。
:::

### automaticLayout
### bracketPairColorization
### codeActionsOnSaveTimeout
### codeLens
### codeLensFontFamily
### codeLensFontSize
### colorDecorators
### colorDecoratorsLimit
### columnSelection
### comments
### contextmenu
### copyWithSyntaxHighlighting
### cursorBlinking
### cursorSmoothCaretAnimation
### cursorStyle
### cursorSurroundingLines
### cursorSurroundingLinesStyle
### cursorWidth
### definitionLinkOpensInPeek
### detectIndentation
### dimension
### disableLayerHinting
### disableMonospaceOptimizations
### domReadOnly
### dragAndDrop
### dropIntoEditor
### emptySelectionClipboard
### experimentalWhitespaceRendering
### extraEditorClassName
### fastScrollSensitivity
### find
### folding
### foldingHighlight
### foldingImportsByDefault
### foldingMaximumRegions
### foldingStrategy
### fontFamily
### fontLigatures
### fontSize
### fontVariations
### fontWeight
### formatOnPaste
### formatOnType

### glyphMargin
### gotoLocation
### guides
### hideCursorInOverviewRuler
### hover
### inDiffEditor
### inlayHints
### inlineSuggest
### insertSpaces
### language
### largeFileOptimizations
### letterSpacing
### lightbulb
### lineDecorationsWidth
### lineHeight
### lineNumbers
### lineNumbersMinChars
### linkedEditing
### links
### matchBrackets
### matchOnWordStartOnly
### maxTokenizationLineLength
### minimap
### model
### mouseStyle
### mouseWheelScrollSensitivity
### mouseWheelZoom
### multiCursorLimit
### multiCursorMergeOverlapping
### multiCursorModifier
### multiCursorPaste
### occurrencesHighlight
### overflowWidgetsDomNode
### overviewRulerBorder
### overviewRulerLanes
### padding
### parameterHints
### peekWidgetDefaultFocus
### quickSuggestions
### quickSuggestionsDelay
### readOnly
### renameOnType
### renderControlCharacters
### renderFinalNewline
### renderLineHighlight
### renderLineHighlightOnlyWhenFocus
### renderValidationDecorations
### renderWhitespace
### revealHorizontalRightPadding
### roundedSelection
### rulers
### screenReaderAnnounceInlineSuggestion
### scrollBeyondLastColumn
### scrollBeyondLastLine
### scrollPredominantAxis
### scrollbar
### selectOnLineNumbers
### selectionClipboard
### selectionHighlight
### semanticHighlighting.enabled
### showDeprecated
### showFoldingControls
### showUnused
### smartSelect
### smoothScrolling
### snippetSuggestions
### stablePeek
### stickyScroll
### stickyTabStops
### stopRenderingLineAfter
### suggest
### suggestFontSize
### suggestLineHeight
### suggestOnTriggerCharacters
### suggestSelection
### tabCompletion
### tabFocusMode
### tabIndex
### tabSize
### theme
### trimAutoWhitespace
### unfoldOnClickAfterEndOfLine
### unicodeHighlight
### unusualLineTerminators
### useShadowDOM
### useTabStops
### value
### wordBasedSuggestions
### wordBasedSuggestionsOnlySameLanguage
### wordBreak
### wordSeparators
### wordWrap
### wordWrapBreakAfterCharacters
### wordWrapBreakBeforeCharacters
### wordWrapColumn
### wordWrapOverride1
### wordWrapOverride2
### wrappingIndent
### wrappingStrategy

