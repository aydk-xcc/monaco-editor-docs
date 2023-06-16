# IStandaloneEditorConstructionOptions
`interface` [官网地址](https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor.IStandaloneEditorConstructionOptions.html)

## 属性 Properties
##  acceptSuggestionOnCommitCharacter
+ 类型: `Bollean` `可选`
+ 默认值: `true`
+ 可选项: `true | false`
+ 描述: `用于控制在输入时是否自动接受建议。如果启用了该设置，当您输入一个特定的字符时，编辑器将自动接受建议。如果禁用了该设置，则不会自动接受建议。
如果要启用 acceptSuggestionOnCommitCharacter设置，将其设置为 true。如果要禁用该设置，则将其设置为 false。如果您希望在输入特定字符时自动接受建议，则可以将其设置为一个字符或字符数组。例如，如果要在输入 . 或 : 时自动接受建议，则可以将其设置为 ['.', ':']。`

##  acceptSuggestionOnEnter
+ 类型: `String` `可选`
+ 默认值: `on`
+ 可选项:  `"on" | "off" | "smart"`
+ 描述: `用于控制在按下 Enter键时是否自动接受建议。如果启用了该设置，当您按下Enter键时，编辑器将自动接受建议。如果禁用了该设置，则不会自动接受建议。`

##  accessibilityHelpUrl
+ 类型: `String` `可选`
+ 默认值: `https://go.microsoft.com/fwlink/?linkid=852450`
+ 可选项:  `-`
+ 描述: `用于指定辅助功能帮助文档的URL。如果启用了该设置，并且用户按下 F1键，则编辑器将打开指定的URL以显示帮助文档。如果禁用了该设置，则不会打开帮助文档。如果要禁用该设置，则将其设置为 null。`

##  accessibilityPageSize
+ 类型: `number` `可选`
+ 默认值: `-`
+ 可选项:  `-`
+ 描述: `用于指定辅助功能分页大小。如果启用了该设置，并且用户使用辅助功能浏览器或屏幕阅读器浏览编辑器内容，则编辑器将按照指定的分页大小进行分页。如果禁用了该设置，则不会进行分页。如果要禁用该设置，则将其设置为 null。`

##  accessibilitySupport
+ 类型: `string` `可选`
+ 默认值: `auto`
+ 可选项:  `"on" | "off" | "auto"`
+ 描述: `用于启用或禁用辅助功能支持。如果启用了该设置，则编辑器将支持辅助功能浏览器和屏幕阅读器。如果禁用了该设置，则不会支持辅助功能。`

##  ariaContainerElement
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

##  ariaLabel
+ 类型: `string` `可选`
+ 默认值: `-`
+ 可选项:  `-`
+ 描述: `用于指定编辑器的ARIA标签。如果启用了该设置，则编辑器将使用指定的ARIA标签来描述编辑器。如果禁用了该设置，则编辑器将使用默认的ARIA标签。如果要禁用该设置，则将其设置为 null。`

##  autoClosingBrackets
+ 类型: `EditorAutoClosingStrategy` `可选`
+ 默认值: `-`
+ 可选项:  `"always" | "languageDefined" | "beforeWhitespace" | "never"`
+ 描述: `用于控制在输入括号时是否自动闭合括号。如果启用了该设置，当您输入左括号时，编辑器将自动插入右括号。如果禁用了该设置，则不会自动插入右括号。`

##  autoClosingDelete
+ 类型: `EditorAutoClosingEditStrategy` `可选`
+ 默认值: `-`
+ 可选项:  `"always" | "auto" | "never"`
+ 描述: `用于控制在删除括号时是否同时删除相应的右括号。如果启用了该设置，当您删除一个左括号时，编辑器将自动删除相应的右括号。如果禁用了该设置，则不会自动删除右括号。`。
::: tip 补充
如果您希望仅在删除特定类型的括号时同时删除相应的右括号，则可以将其设置为一个对象，该对象包含要自动删除右括号的括号类型。例如，如果要仅在删除圆括号时同时删除相应的右括号，则可以将其设置为 
{ brackets: false, parentheses: true, curlyBraces: false }
。
:::

##  autoClosingOvertype
+ 类型: `EditorAutoClosingEditStrategy` `可选`
+ 默认值: `-`
+ 可选项:  `"always" | "auto" | "never"`
+ 描述: `用于控制在覆盖模式下输入括号时是否自动闭合括号。如果启用了该设置，当您在覆盖模式下输入一个左括号时，编辑器将自动插入相应的右括号。如果禁用了该设置，则不会自动插入右括号。如果您希望仅在输入特定类型的括号时自动闭合括号,配置同autoClosingDelete`

##  autoClosingQuotes
+ 类型: `EditorAutoClosingStrategy` `可选`
+ 默认值: `-`
+ 可选项:  `"always" | "languageDefined" | "beforeWhitespace" | "never"`
+ 描述: `用于控制在输入引号时是否自动闭合引号。如果启用了该设置，当您输入一个引号时，编辑器将自动插入相应的另一个引号。如果禁用了该设置，则不会自动插入另一个引号。`
::: tip 补充
如果您希望仅在输入特定类型的引号时自动闭合引号，则可以将其设置为一个对象，该对象包含要自动闭合的引号类型。例如，如果要仅在输入双引号时自动闭合引号，则可以将其设置为 
{ languageDefined: false, mark: '"' }。
:::

##  autoDetectHighContrast
+ 类型: `Bollean` `可选`
+ 默认值: `true`
+ 可选项: `true | false`
+ 描述: `用于控制编辑器是否自动检测高对比度模式。如果启用了该设置，当用户在操作系统中启用高对比度模式时，编辑器将自动应用高对比度主题。如果禁用了该设置，则不会自动应用高对比度主题。`

##  autoIndent
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

##  autoSurround
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

##  automaticLayout
+ 类型: `boolean` `可选`
+ 默认值: `false`
+ 可选项: `-`
+ 描述: `用于控制编辑器是否自动调整其布局以适应其容器的大小。如果启用了该设置，当编辑器所在的容器大小发生变化时，编辑器将自动调整其布局以适应新的容器大小。如果禁用了该设置，则编辑器将保持其初始大小，不会自动调整布局。`

##  bracketPairColorization
+ 类型: `IBracketPairColorizationOptions` `可选`
+ 默认值: `disable`
+ 可选项: `-`
+ 描述: `用于控制是否启用括号配对颜色。`

::: tip IBracketPairColorizationOptions

"enabled"：如果启用了该设置，当您将光标放在一个括号上时，编辑器将突出显示与该括号配对的另一个括号。如果禁用了该设置，则不会突出显示括号配对。

"independentColorPoolPerBracketType"：用于控制是否为不同类型的括号使用独立的颜色池。如果启用了该设置，编辑器将为每种类型的括号（例如圆括号、方括号、花括号等）使用独立的颜色池，以确保每种类型的括号都有不同的突出显示颜色。如果禁用了该设置，则编辑器将使用相同的颜色池为所有类型的括号分配颜色。
:::
##  codeActionsOnSaveTimeout
+ 类型: `number` `可选`
+ 默认值: `-`
+ 可选项: `-`
+ 描述: `用于控制在保存文件时执行代码操作的超时时间。如果启用了该设置，当您保存文件时，编辑器将等待指定的时间（以毫秒为单位），以便在执行代码操作之前等待其他可能的代码操作完成。如果禁用了该设置，则编辑器将立即执行代码操作。（以毫秒为单位）`
##  codeLens
+ 类型: `boolean` `可选`
+ 默认值: `true`
+ 可选项: `-`
+ 描述: `用于控制是否启用代码镜头功能。如果启用了该设置，编辑器将在代码中显示代码镜头，这些代码镜头可以提供有关代码的其他信息，例如代码的引用、测试覆盖率等。如果禁用了该设置，则不会显示代码镜头。`
##  codeLensFontFamily
+ 类型: `string` `可选`
+ 默认值: `editor font family`
+ 可选项: `-`
+ 描述: `用于控制代码镜头中文本的字体系列。如果启用了该设置，编辑器将使用指定的字体系列来呈现代码镜头中的文本。如果禁用了该设置，则编辑器将使用默认的字体系列。`
##  codeLensFontSize
+ 类型: `number` `可选`
+ 默认值: `90% of the editor font size`
+ 可选项: `-`
+ 描述: `用于控制代码镜头中文本的字体大小。如果启用了该设置，编辑器将使用指定的字体大小来呈现代码镜头中的文本。如果禁用了该设置，则编辑器将使用默认的字体大小。`
##  colorDecorators
+ 类型: `boolean` `可选`
+ 默认值: `-`
+ 可选项: `-`
+ 描述: `用于控制是否启用颜色装饰器。如果启用了该设置，编辑器将使用颜色装饰器来突出显示代码中的特定文本，例如变量、函数等。如果禁用了该设置，则不会使用颜色装饰器。`
##  colorDecoratorsLimit
+ 类型: `number` `可选`
+ 默认值: `-`
+ 可选项: `-`
+ 描述: `用于控制颜色装饰器的最大数量。如果启用了该设置，编辑器将限制颜色装饰器的数量，以避免性能问题。如果禁用了该设置，则编辑器将不会限制颜色装饰器的数量。`
##  columnSelection
+ 类型: `boolean` `可选`
+ 默认值: `false`
+ 可选项: `-`
+ 描述: `用于控制是否启用列选择模式。如果启用了该设置，编辑器将允许您选择文本的列而不是行。如果禁用了该设置，则编辑器将只允许您选择文本的行。`
##  comments
+ 类型: `IEditorCommentsOptions` `可选`
+ 默认值: `-`
+ 可选项: `-`
+ 描述: `用于控制是否启用注释功能。如果启用了该设置，编辑器将允许您在代码中添加注释。如果禁用了该设置，则不会允许添加注释。`
::: tip IEditorCommentsOptions

"ignoreEmptyLines"：用于控制是否忽略空行。如果启用了该设置，编辑器将忽略注释中的空行。如果禁用了该设置，则不会忽略空行。

"insertSpace"：用于控制是否在注释标记后插入空格。如果启用了该设置，编辑器将在注释标记后插入一个空格。如果禁用了该设置，则不会插入空格。
:::
##  contextmenu
+ 类型: `boolean` `可选`
+ 默认值: `true`
+ 可选项: `-`
+ 描述: `用于控制编辑器中右键菜单的内容和行为，如果启用了该设置，编辑器将在右键单击时显示上下文菜单。如果禁用了该设置，则不会显示上下文菜单。`
```javascript
monaco.editor.create(domElement, {
    // ...
    contextmenu: true, // 启用右键菜单
});
```
::: danger 注意
contextmenuItems、contextmenuCommands 最新版本已经不再支持
:::
##  copyWithSyntaxHighlighting
+ 类型: `boolean` `可选`
+ 默认值: `-`
+ 可选项: `-`
+ 描述: `可以将编辑器中的文本复制到剪贴板，并保留语法高亮。`
##  cursorBlinking
+ 类型: `string` `可选`
+ 默认值: `blink`
+ 可选项: `"blink" | "smooth" | "phase" | "expand" | "solid"`
+ 描述: `用于控制光标的闪烁方式`

::: tip 

"blink": 光标以常规速度闪烁。

"smooth": 光标以平滑的方式闪烁。

"phase": 光标以相位的方式闪烁。

"expand": 光标在插入字符时扩展，然后再缩小。

"solid": 光标不闪烁，而是一直显示为实心。

:::

##  cursorSmoothCaretAnimation
+ 类型: `boolean` `可选`
+ 默认值: `false`
+ 可选项: `-`
+ 描述: `用于控制光标的平滑动画。如果启用了该设置，光标将以平滑的方式移动。如果禁用了该设置，则光标将以常规方式移动。`

##  cursorStyle
+ 类型: `string` `可选`
+ 默认值: `'line'`
+ 可选项: `'line' | 'block' | 'underline'`
+ 描述: `用于控制光标的样式。可以选择 'line'、'block' 或 'underline' 中的一种。`

##  cursorSurroundingLines
+ 类型: `number` `可选`
+ 默认值: `0`
+ 可选项: `-`
+ 描述: `用于控制光标周围的行数。如果设置为 0，则不会滚动视图。如果设置为 1，则将滚动视图以确保光标周围的一行可见。如果设置为 2，则将滚动视图以确保光标周围的两行可见，依此类推。`

##  cursorSurroundingLinesStyle
+ 类型: `string` `可选`
+ 默认值: `'default'`
+ 可选项: `'default' | 'all'`
+ 描述: `用于控制光标周围行的样式。如果设置为 'default'，则只有当前行的背景色会发生变化。如果设置为 'all'，则所有周围行的背景色都会发生变化。`

##  cursorWidth
+ 类型: `number` `可选`
+ 默认值: `0`
+ 可选项: `-`
+ 描述: `用于控制光标的宽度。如果设置为 0，则使用默认宽度。如果设置为大于 0 的值，则使用指定的宽度。`

##  definitionLinkOpensInPeek
+ 类型: `boolean` `可选`
+ 默认值: `false`
+ 可选项: `-`
+ 描述: `用于控制定义链接的行为。如果启用了该设置，单击定义链接将在 Peek 视图中打开定义。如果禁用了该设置，则单击定义链接将在新窗口中打开定义。`

##  detectIndentation
+ 类型: `boolean` `可选`
+ 默认值: `true`
+ 可选项: `-`
+ 描述: `用于控制编辑器是否应自动检测缩进。如果启用了该设置，编辑器将自动检测缩进，并在新行中使用相同的缩进。如果禁用了该设置，则编辑器将不会自动检测缩进。`


##  dimension
+ 类型: `IDimension` `可选`
+ 默认值: `-`
+ 可选项: `-`
+ 描述: `编辑器的初始尺寸。`

##  disableLayerHinting
+ 类型: `boolean` `可选`
+ 默认值: `false`
+ 可选项: `-`
+ 描述: `用于控制是否禁用图层提示。如果启用了该设置，编辑器将不会显示图层提示。如果禁用了该设置，则会显示图层提示。`

##  disableMonospaceOptimizations
+ 类型: `boolean` `可选`
+ 默认值: `false`
+ 可选项: `-`
+ 描述: `用于控制是否禁用等宽字体优化。如果启用了该设置，编辑器将不会使用等宽字体优化。如果禁用了该设置，则会使用等宽字体优化。`

##  domReadOnly
+ 类型: `boolean` `可选`
+ 默认值: `false`
+ 可选项: `-`
+ 描述: `用于控制是否将编辑器设置为只读模式。如果启用了该设置，编辑器将无法编辑。如果禁用了该设置，则可以编辑编辑器。`

##  dragAndDrop
+ 类型: `boolean` `可选`
+ 默认值: `true`
+ 可选项: `-`
+ 描述: `用于控制是否启用拖放功能。如果启用了该设置，编辑器将支持拖放文件和文本。如果禁用了该设置，则不会支持拖放。`

##  dropIntoEditor
+ 类型: `boolean` `可选`
+ 默认值: `false`
+ 可选项: `-`
+ 描述: `用于控制是否启用将文件拖放到编辑器中的功能。如果启用了该设置，编辑器将支持将文件拖放到编辑器中。如果禁用了该设置，则不会支持将文件拖放到编辑器中。`

##  emptySelectionClipboard
+ 类型: `boolean` `可选`
+ 默认值: `true`
+ 可选项: `-`
+ 描述: `用于控制是否启用空选择剪贴板功能。如果启用了该设置，编辑器将支持将空选择复制到剪贴板中。如果禁用了该设置，则不会支持将空选择复制到剪贴板中。`

##  experimentalWhitespaceRendering
+ 类型: `boolean` `可选`
+ 默认值: `false`
+ 可选项: `-`
+ 描述: `用于控制是否启用实验性的空格渲染功能。如果启用了该设置，编辑器将使用实验性的空格渲染功能来渲染空格。如果禁用了该设置，则不会使用实验性的空格渲染功能。`

##  extraEditorClassName
+ 类型: `string` `可选`
+ 默认值: `-`
+ 可选项: `-`
+ 描述: `用于控制编辑器的额外类名。可以使用该设置来自定义编辑器的样式。`

##  fastScrollSensitivity
+ 类型: `number` `可选`
+ 默认值: `5`
+ 可选项: `-`
+ 描述: `用于控制快速滚动的灵敏度。如果启用了该设置，编辑器将在快速滚动时更加灵敏。如果禁用了该设置，则在快速滚动时不会更加灵敏。`

##  find
+ 类型: `Object` `可选`
+ 默认值: `false`
+ 可选项: `-`
+ 描述: `用于控制`

##  fixedOverflowWidgets
+ 类型: `bool` `可选`
+ 默认值: `-`
+ 可选项: `-`
+ 描述: `用于控制overflowingContentWidgets的现实方式`

::: tip 注意
官方关于hover的演示样式，没有设置这个属性，但是此版本会发现hover的位置不符合预期，查看样式发现官方的是overflowingWidgets，当前版本的是overflowingContentWidgets，参考了[官方的issue](https://github.com/microsoft/monaco-editor/issues/480) 加上此选项才正常
:::

##  folding
+ 类型: `boolean` `可选`
+ 默认值: `true`
+ 可选项: `-`
+ 描述: `用于控制是否启用代码折叠功能。如果启用了该设置，编辑器将允许折叠代码块。如果禁用了该设置，则不会显示折叠控件。`

##  foldingHighlight
+ 类型: `boolean` `可选`
+ 默认值: `true`
+ 可选项: `-`
+ 描述: `用于控制是否突出显示折叠范围。如果启用了该设置，编辑器将使用颜色装饰器来突出显示折叠范围。如果禁用了该设置，则不会使用颜色装饰器。`

##  foldingImportsByDefault
+ 类型: `boolean` `可选`
+ 默认值: `false`
+ 可选项: `-`
+ 描述: `用于控制是否默认折叠导入语句。如果启用了该设置，编辑器将默认折叠导入语句。如果禁用了该设置，则不会默认折叠导入语句。`

##  foldingMaximumRegions
+ 类型: `number` `可选`
+ 默认值: `-`
+ 可选项: `-`
+ 描述: `用于控制最大折叠区域数。如果设置为 -1，则没有限制。如果设置为大于 0 的值，则最多允许折叠指定数量的区域。`

##  foldingStrategy
+ 类型: `string` `可选`
+ 默认值: `'auto'`
+ 可选项: `'auto' | 'indentation'`
+ 描述: `用于控制折叠策略。可以选择 'auto' 或 'indentation' 中的一种。如果选择 'auto'，编辑器将尝试自动检测最佳折叠策略。如果选择 'indentation'，编辑器将使用缩进级别来确定折叠范围。`

##  fontFamily
+ 类型: `string` `可选`
+ 默认值: `-`
+ 可选项: `-`
+ 描述: `用于控制编辑器的字体系列。可以设置多个字体系列，以便在第一个不可用时使用备用字体系列。`

##  fontLigatures
+ 类型: `boolean` `可选`
+ 默认值: `false`
+ 可选项: `-`
+ 描述: `用于控制是否启用字体连字。如果启用了该设置，编辑器将使用字体连字来显示代码。如果禁用了该设置，则不会使用字体连字。`

##  fontSize
+ 类型: `number` `可选`
+ 默认值: `-`
+ 可选项: `-`
+ 描述: `用于控制编辑器的字体大小。可以设置为任何数字值。`

##  fontVariations
+ 类型: `string` `可选`
+ 默认值: `-`
+ 可选项: `-`
+ 描述: `用于控制编辑器的字体变体。可以设置多个字体变体，以便在第一个不可用时使用备用字体变体。`

##  fontWeight
+ 类型: `string` `可选`
+ 默认值: `-`
+ 可选项: `-`
+ 描述: `用于控制编辑器的字体粗细。可以设置为 'normal'、'bold' 或任何数字值。`

##  formatOnPaste
+ 类型: `boolean` `可选`
+ 默认值: `false`
+ 可选项: `-`
+ 描述: `用于控制是否在粘贴时自动格式化代码。如果启用了该设置，编辑器将在粘贴时自动格式化代码。如果禁用了该设置，则不会在粘贴时自动格式化代码。`

##  formatOnType
+ 类型: `boolean` `可选`
+ 默认值: `false`
+ 可选项: `-`
+ 描述: `用于控制是否在输入时自动格式化代码。如果启用了该设置，编辑器将在输入时自动格式化代码。如果禁用了该设置，则不会在输入时自动格式化代码。`

##  glyphMargin
+ 类型: `boolean` `可选`
+ 默认值: `true`
+ 可选项: `-`
+ 描述: `用于控制是否显示字形边距。如果启用了该设置，编辑器将在左侧显示字形边距。如果禁用了该设置，则不会显示字形边距。`

##  gotoLocation
+ 类型: `Object` `可选`
+ 默认值: `-`
+ 可选项: `-`
+ 描述: `用于控制转到定义和查找所有引用的行为。`

##  guides
+ 类型: `Object` `可选`
+ 默认值: `-`
+ 可选项: `-`
+ 描述: `用于控制代码缩进指南的行为。`

##  hideCursorInOverviewRuler
+ 类型: `boolean` `可选`
+ 默认值: `false`
+ 可选项: `-`
+ 描述: `用于控制是否在概览标尺中隐藏光标。如果启用了该设置，编辑器将在概览标尺中隐藏光标。如果禁用了该设置，则不会在概览标尺中隐藏光标。`

##  hover
+ 类型: [editor.IEditorHoverOptions](IEditorHoverOptions.md) `可选`
+ 默认值: `-`
+ 可选项: `-`
+ 描述: `用于控制悬停提示的行为。`

##  inDiffEditor
+ 类型: `boolean` `可选`
+ 默认值: `false`
+ 可选项: `-`
+ 描述: `用于控制编辑器是否在差异编辑器中。如果启用了该设置，编辑器将在差异编辑器中。如果禁用了该设置，则不会在差异编辑器中。`

##  inlayHints
+ 类型: `Object` `可选`
+ 默认值: `-`
+ 可选项: `-`
+ 描述: `用于控制内联提示的行为。`

##  inlineSuggest
+ 类型: `Object` `可选`
+ 默认值: `-`
+ 可选项: `-`
+ 描述: `用于控制内联建议的行为。`


##  insertSpaces
+ 类型: `boolean` `可选`
+ 默认值: `true`
+ 可选项: `-`
+ 描述: `用于控制是否使用空格代替制表符。如果启用了该设置，编辑器将使用空格代替制表符。如果禁用了该设置，则使用制表符。`

##  language
+ 类型: `string` `可选`
+ 默认值: `-`
+ 可选项: `-`
+ 描述: `用于设置编辑器的语言。可以设置为任何支持的语言。`

##  largeFileOptimizations
+ 类型: `boolean` `可选`
+ 默认值: `true`
+ 可选项: `-`
+ 描述: `用于控制是否启用大文件优化。如果启用了该设置，编辑器将在处理大文件时进行优化。如果禁用了该设置，则不会进行优化。`

##  letterSpacing
+ 类型: `number` `可选`
+ 默认值: `0`
+ 可选项: `-`
+ 描述: `用于控制编辑器的字母间距。可以设置为任何数字值。`

##  lightbulb
+ 类型: `Object` `可选`
+ 默认值: `-`
+ 可选项: `-`
+ 描述: `用于控制灯泡提示的行为。`

##  lineDecorationsWidth
+ 类型: `number` `可选`
+ 默认值: `1`
+ 可选项: `-`
+ 描述: `用于控制行装饰器的宽度。可以设置为任何数字值。`

##  lineHeight
+ 类型: `number` `可选`
+ 默认值: `-`
+ 可选项: `-`
+ 描述: `用于控制编辑器的行高。可以设置为任何数字值。`

##  lineNumbers
+ 类型: `string` `可选`
+ 默认值: `'on'`
+ 可选项: `'on' | 'off' | 'relative' | 'interval' | 'intervalRelative'`
+ 描述: `用于控制行号的显示方式。可以选择 'on'、'off'、'relative'、'interval' 或 'intervalRelative' 中的一种。`

##  lineNumbersMinChars
+ 类型: `number` `可选`
+ 默认值: `5`
+ 可选项: `-`
+ 描述: `用于控制行号的最小字符数。可以设置为任何数字值。`

##  linkedEditing
+ 类型: `boolean` `可选`
+ 默认值: `false`
+ 可选项: `-`
+ 描述: `用于控制是否启用链接编辑。如果启用了该设置，编辑器将在重命名符号时自动更新所有相关符号。如果禁用了该设置，则不会自动更新相关符号。`

##  links
+ 类型: `boolean` `可选`
+ 默认值: `true`
+ 可选项: `-`
+ 描述: `用于控制是否启用链接。如果启用了该设置，编辑器将在代码中检测链接，并将其呈现为可单击的链接。如果禁用了该设置，则不会检测链接。`

##  matchBrackets
+ 类型: `boolean` `可选`
+ 默认值: `true`
+ 可选项: `-`
+ 描述: `用于控制是否突出显示匹配的括号。如果启用了该设置，编辑器将使用颜色装饰器来突出显示匹配的括号。如果禁用了该设置，则不会使用颜色装饰器。`


##  matchOnWordStartOnly
+ 类型: `boolean` `可选`
+ 默认值: `false`
+ 可选项: `-`
+ 描述: `用于控制是否仅在单词开头匹配。如果启用了该设置，编辑器将仅在单词开头匹配。如果禁用了该设置，则在单词中的任何位置都可以匹配。`

##  maxTokenizationLineLength
+ 类型: `number` `可选`
+ 默认值: `20000`
+ 可选项: `-`
+ 描述: `用于控制最大标记化行长度。可以设置为任何数字值。`

##  minimap
+ 类型: [editor.IEditorMinimapOptions](IEditorMinimapOptions.md) `可选`
+ 默认值: `-`
+ 可选项: `-`
+ 描述: `用于控制缩略图的行为。`

##  model
+ 类型: `Object` `可选`
+ 默认值: `-`
+ 可选项: `-`
+ 描述: `用于设置编辑器的模型。`

##  mouseStyle
+ 类型: `string` `可选`
+ 默认值: `'text'`
+ 可选项: `'text' | 'default' | 'copy'`
+ 描述: `用于控制鼠标样式。可以选择 'text'、'default' 或 'copy' 中的一种。`

##  mouseWheelScrollSensitivity
+ 类型: `number` `可选`
+ 默认值: `1`
+ 可选项: `-`
+ 描述: `用于控制鼠标滚轮滚动的灵敏度。可以设置为任何数字值。`

##  mouseWheelZoom
+ 类型: `boolean` `可选`
+ 默认值: `false`
+ 可选项: `-`
+ 描述: `用于控制是否启用鼠标滚轮缩放。如果启用了该设置，编辑器将在使用鼠标滚轮时缩放。如果禁用了该设置，则不会缩放。`

##  multiCursorLimit
+ 类型: `number` `可选`
+ 默认值: `-`
+ 可选项: `-`
+ 描述: `用于控制多光标的最大数量。可以设置为任何数字值。`

##  multiCursorMergeOverlapping
+ 类型: `boolean` `可选`
+ 默认值: `true`
+ 可选项: `-`
+ 描述: `用于控制是否合并重叠的多光标。如果启用了该设置，编辑器将合并重叠的多光标。如果禁用了该设置，则不会合并重叠的多光标。`

##  multiCursorModifier
+ 类型: `string` `可选`
+ 默认值: `'alt'`
+ 可选项: `'alt' | 'ctrl' | 'meta'`
+ 描述: `用于控制多光标的修改键。可以选择 'alt'、'ctrl' 或 'meta' 中的一种。`

##  multiCursorPaste
+ 类型: `string` `可选`
+ 默认值: `'spread'`
+ 可选项: `'spread' | 'full'`
+ 描述: `用于控制多光标粘贴的行为。可以选择 'spread' 或 'full' 中的一种。`

##  occurrencesHighlight
+ 类型: `boolean` `可选`
+ 默认值: `true`
+ 可选项: `-`
+ 描述: `用于控制是否突出显示所有出现。如果启用了该设置，编辑器将使用颜色装饰器来突出显示所有出现。如果禁用了该设置，则不会使用颜色装饰器。`

##  overflowWidgetsDomNode
+ 类型: `Object` `可选`
+ 默认值: `-`
+ 可选项: `-`
+ 描述: `用于设置溢出小部件的 DOM 节点。`

##  overviewRulerBorder
+ 类型: `boolean` `可选`
+ 默认值: `true`
+ 可选项: `-`
+ 描述: `用于控制是否在概览标尺周围绘制边框。如果启用了该设置，编辑器将在概览标尺周围绘制边框。如果禁用了该设置，则不会绘制边框。`

##  overviewRulerLanes
+ 类型: `number` `可选`
+ 默认值: `3`
+ 可选项: `-`
+ 描述: `用于控制概览标尺的宽度。可以设置为任何数字值。`

##  padding
+ 类型: `Object` `可选`
+ 默认值: `-`
+ 可选项: `-`
+ 描述: `用于设置编辑器的填充。`

##  parameterHints
+ 类型: `Object` `可选`
+ 默认值: `-`
+ 可选项: `-`
+ 描述: `用于控制参数提示的行为。`

##  peekWidgetDefaultFocus
+ 类型: `string` `可选`
+ 默认值: `'editor'`
+ 可选项: `'editor' | 'tree'`
+ 描述: `用于控制查看小部件的默认焦点。可以选择 'editor' 或 'tree' 中的一种。`

##  quickSuggestions
+ 类型: `Object` `可选`
+ 默认值: `true`
+ 可选项: `-`
+ 描述: `用于控制快速建议的行为。`

##  quickSuggestionsDelay
+ 类型: `number` `可选`
+ 默认值: `10`
+ 可选项: `-`
+ 描述: `用于控制快速建议的延迟时间。可以设置为任何数字值。`

##  readOnly
+ 类型: `boolean` `可选`
+ 默认值: `false`
+ 可选项: `-`
+ 描述: `用于控制编辑器是否为只读。如果启用了该设置，编辑器将为只读。如果禁用了该设置，则可以编辑。`

##  renameOnType
+ 类型: `boolean` `可选`
+ 默认值: `false`
+ 可选项: `-`
+ 描述: `用于控制是否在输入时自动重命名符号。如果启用了该设置，编辑器将在输入时自动重命名符号。如果禁用了该设置，则不会自动重命名符号。`

##  renderControlCharacters
+ 类型: `boolean` `可选`
+ 默认值: `false`
+ 可选项: `-`
+ 描述: `用于控制是否呈现控制字符。如果启用了该设置，编辑器将呈现控制字符。如果禁用了该设置，则不会呈现控制字符。`

##  renderFinalNewline
+ 类型: `boolean` `可选`
+ 默认值: `true`
+ 可选项: `-`
+ 描述: `用于控制是否呈现最终换行符。如果启用了该设置，编辑器将呈现最终换行符。如果禁用了该设置，则不会呈现最终换行符。`

##  renderLineHighlight
+ 类型: `string` `可选`
+ 默认值: `'line'`
+ 可选项: `'none' | 'gutter' | 'line' | 'all'`
+ 描述: `用于控制行高亮的行为。可以选择 'none'、'gutter'、'line' 或 'all' 中的一种。`

##  renderLineHighlightOnlyWhenFocus
+ 类型: `boolean` `可选`
+ 默认值: `false`
+ 可选项: `-`
+ 描述: `用于控制是否仅在编辑器获得焦点时才突出显示行。如果启用了该设置，编辑器将仅在获得焦点时突出显示行。如果禁用了该设置，则始终突出显示行。`

##  renderValidationDecorations
+ 类型: `string` `可选`
+ 默认值: `'on'`
+ 可选项: `'on' | 'off' | 'editable'`
+ 描述: `用于控制验证装饰的行为。可以选择 'on'、'off' 或 'editable' 中的一种。`

##  renderWhitespace
+ 类型: `string` `可选`
+ 默认值: `'none'`
+ 可选项: `'none' | 'boundary' | 'all'`
+ 描述: `用于控制空格的呈现方式。可以选择 'none'、'boundary' 或 'all' 中的一种。`

##  revealHorizontalRightPadding
+ 类型: `number` `可选`
+ 默认值: `0`
+ 可选项: `-`
+ 描述: `用于控制水平滚动时的右侧填充。可以设置为任何数字值。`

##  roundedSelection
+ 类型: `boolean` `可选`
+ 默认值: `true`
+ 可选项: `-`
+ 描述: `用于控制是否使用圆角选择。如果启用了该设置，编辑器将使用圆角选择。如果禁用了该设置，则不会使用圆角选择。`

##  rulers
+ 类型: `Array` `可选`
+ 默认值: `[]`
+ 可选项: `-`
+ 描述: `用于控制标尺的行为。`

##  screenReaderAnnounceInlineSuggestion
+ 类型: `string` `可选`
+ 默认值: `'off'`
+ 可选项: `'off' | 'on' | 'auto'`
+ 描述: `用于控制屏幕阅读器是否应该在内联建议上进行注释。可以选择 'off'、'on' 或 'auto' 中的一种。`

##  scrollBeyondLastColumn
+ 类型: `number` `可选`
+ 默认值: `5`
+ 可选项: `-`
+ 描述: `用于控制水平滚动时的额外滚动量。可以设置为任何数字值。`

##  scrollBeyondLastLine
+ 类型: `boolean` `可选`
+ 默认值: `true`
+ 可选项: `-`
+ 描述: `用于控制是否允许滚动超过最后一行。如果启用了该设置，编辑器将允许滚动超过最后一行。如果禁用了该设置，则不会滚动超过最后一行。`

##  scrollPredominantAxis
+ 类型: `boolean` `可选`
+ 默认值: `true`
+ 可选项: `-`
+ 描述: `用于控制是否优先滚动主轴。如果启用了该设置，编辑器将优先滚动主轴。如果禁用了该设置，则不会优先滚动主轴。`

##  scrollbar
+ 类型: [IEditorScrollbarOptions](IEditorScrollbarOptions.md) `可选`
+ 默认值: `-`
+ 可选项: `-`
+ 描述: `用于设置滚动条的行为。配置如下`


##  selectOnLineNumbers
+ 类型: `boolean` `可选`
+ 默认值: `true`
+ 可选项: `-`
+ 描述: `用于控制是否在单击行号时选择整行。如果启用了该设置，编辑器将在单击行号时选择整行。如果禁用了该设置，则不会选择整行。`

##  selectionClipboard
+ 类型: `boolean` `可选`
+ 默认值: `true`
+ 可选项: `-`
+ 描述: `用于控制是否将选择复制到剪贴板。如果启用了该设置，编辑器将将选择复制到剪贴板。如果禁用了该设置，则不会将选择复制到剪贴板。`

##  selectionHighlight
+ 类型: `boolean` `可选`
+ 默认值: `true`
+ 可选项: `-`
+ 描述: `用于控制是否突出显示选定文本。如果启用了该设置，编辑器将突出显示选定文本。如果禁用了该设置，则不会突出显示选定文本。`

##  semanticHighlighting.enabled
+ 类型: `boolean` `可选`
+ 默认值: `false`
+ 可选项: `-`
+ 描述: `用于控制是否启用语义突出显示。如果启用了该设置，编辑器将使用语义信息来突出显示代码中的特定文本，例如变量、函数等。如果禁用了该设置，则不会使用语义信息。`

##  showDeprecated
+ 类型: `boolean` `可选`
+ 默认值: `false`
+ 可选项: `-`
+ 描述: `用于控制是否显示已弃用的代码。如果启用了该设置，编辑器将显示已弃用的代码。如果禁用了该设置，则不会显示已弃用的代码。`

##  showFoldingControls
+ 类型: `string` `可选`
+ 默认值: `'mouseover'`
+ 可选项: `'always' | 'mouseover'`
+ 描述: `用于控制折叠控件的显示方式。可以选择 'always' 或 'mouseover' 中的一种。`

##  showUnused
+ 类型: `boolean` `可选`
+ 默认值: `true`
+ 可选项: `-`
+ 描述: `用于控制是否显示未使用的代码。如果启用了该设置，编辑器将显示未使用的代码。如果禁用了该设置，则不会显示未使用的代码。`

##  smartSelect
+ 类型: `boolean` `可选`
+ 默认值: `true`
+ 可选项: `-`
+ 描述: `用于控制是否启用智能选择。如果启用了该设置，编辑器将使用智能算法来选择文本。如果禁用了该设置，则不会使用智能算法。`

##  smoothScrolling
+ 类型: `boolean` `可选`
+ 默认值: `false`
+ 可选项: `-`
+ 描述: `用于控制是否启用平滑滚动。如果启用了该设置，编辑器将使用平滑滚动。如果禁用了该设置，则不会使用平滑滚动。`

##  snippetSuggestions
+ 类型: `string` `可选`
+ 默认值: `'inline'`
+ 可选项: `'top' | 'bottom' | 'inline' | 'none'`
+ 描述: `用于控制代码段建议的显示位置。可以选择 'top'、'bottom'、'inline' 或 'none' 中的一种。`

##  stablePeek
+ 类型: `boolean` `可选`
+ 默认值: `false`
+ 可选项: `-`
+ 描述: `用于控制是否在查看定义时保持查看窗口打开。如果启用了该设置，编辑器将在查看定义时保持查看窗口打开。如果禁用了该设置，则不会保持查看窗口打开。`

##  stickyScroll
+ 类型: `boolean` `可选`
+ 默认值: `true`
+ 可选项: `-`
+ 描述: `用于控制是否启用粘性滚动。如果启用了该设置，编辑器将使用粘性滚动。如果禁用了该设置，则不会使用粘性滚动。`

##  stickyTabStops
+ 类型: `boolean` `可选`
+ 默认值: `true`
+ 可选项: `-`
+ 描述: `用于控制是否启用粘性制表符。如果启用了该设置，编辑器将使用粘性制表符。如果禁用了该设置，则不会使用粘性制表符。`

##  stopRenderingLineAfter
+ 类型: `number` `可选`
+ 默认值: `10000`
+ 可选项: `-`
+ 描述: `用于控制编辑器停止呈现行的数量。可以设置为任何数字值。`

##  suggest
+ 类型: `Object` `可选`
+ 默认值: `-`
+ 可选项: `-`
+ 描述: `用于设置建议的行为。`

##  suggestFontSize
+ 类型: `number` `可选`
+ 默认值: `-`
+ 可选项: `-`
+ 描述: `用于设置建议的字体大小。可以设置为任何数字值。`

##  suggestLineHeight
+ 类型: `number` `可选`
+ 默认值: `-`
+ 可选项: `-`
+ 描述: `用于设置建议的行高。可以设置为任何数字值。`

##  suggestOnTriggerCharacters
+ 类型: `boolean` `可选`
+ 默认值: `true`
+ 可选项: `-`
+ 描述: `用于控制是否在输入触发字符时显示建议。如果启用了该设置，编辑器将在输入触发字符时显示建议。如果禁用了该设置，则不会在输入触发字符时显示建议。`

##  suggestSelection
+ 类型: `string` `可选`
+ 默认值: `'recentlyUsed'`
+ 可选项: `'first' | 'recentlyUsed' | 'recentlyUsedByPrefix'`
+ 描述: `用于控制建议列表中的默认选择。可以选择 'first'、'recentlyUsed' 或 'recentlyUsedByPrefix' 中的一种。`

##  tabCompletion
+ 类型: `string` `可选`
+ 默认值: `'off'`
+ 可选项: `'on' | 'off' | 'onlySnippets'`
+ 描述: `用于控制制表符完成的行为。可以选择 'on'、'off' 或 'onlySnippets' 中的一种。`

##  tabFocusMode
+ 类型: `boolean` `可选`
+ 默认值: `false`
+ 可选项: `-`
+ 描述: `用于控制是否启用制表符焦点模式。如果启用了该设置，编辑器将使用制表符焦点模式。如果禁用了该设置，则不会使用制表符焦点模式。`

##  tabIndex
+ 类型: `number` `可选`
+ 默认值: `0`
+ 可选项: `-`
+ 描述: `用于设置编辑器的制表符索引。可以设置为任何数字值。`

##  tabSize
+ 类型: `number` `可选`
+ 默认值: `4`
+ 可选项: `-`
+ 描述: `用于设置制表符的大小。可以设置为任何数字值。`

例子：
```javascript
codemonaco.editor.setTheme('vs-dark');
monaco.editor.setLanguage('javascript');

var editor = monaco.editor.create(document.getElementById('container'), {
  tabSize: 2,
  insertSpaces: true
});
```
在上面的代码中，我们使用`tabSize`属性设置tab键的大小为2个空格，使用`insertSpaces`属性设置是否使用空格代替制表符。你可以根据需要调整这些属性的值。

##  theme
+ 类型: `string` `可选`
+ 默认值: `'vs'`
+ 可选项: `"vs" | "vs-dark" | "hc-black" | "hc-light"`
+ 描述: `用于设置编辑器的主题。可以选择任何可用的主题。`

##  trimAutoWhitespace
+ 类型: `boolean` `可选`
+ 默认值: `false`
+ 可选项: `-`
+ 描述: `用于控制是否自动删除行末空格。如果启用了该设置，编辑器将自动删除行末空格。如果禁用了该设置，则不会自动删除行末空格。`

##  unfoldOnClickAfterEndOfLine
+ 类型: `boolean` `可选`
+ 默认值: `false`
+ 可选项: `-`
+ 描述: `用于控制是否在行末单击时展开代码。如果启用了该设置，编辑器将在行末单击时展开代码。如果禁用了该设置，则不会在行末单击时展开代码。`

##  unicodeHighlight
+ 类型: `boolean` `可选`
+ 默认值: `true`
+ 可选项: `-`
+ 描述: `用于控制是否突出显示 Unicode 字符。如果启用了该设置，编辑器将突出显示 Unicode 字符。如果禁用了该设置，则不会突出显示 Unicode 字符。`

##  unusualLineTerminators
+ 类型: `string` `可选`
+ 默认值: `'prompt'`
+ 可选项: `'off' | 'prompt' | 'auto'`
+ 描述: `用于控制是否在文件中检测到非常规行终止符时显示警告。可以选择 'off'、'prompt' 或 'auto' 中的一种。`

##  useShadowDOM
+ 类型: `boolean` `可选`
+ 默认值: `false`
+ 可选项: `-`
+ 描述: `用于控制是否使用 Shadow DOM。如果启用了该设置，编辑器将使用 Shadow DOM。如果禁用了该设置，则不会使用 Shadow DOM。`

##  useTabStops
+ 类型: `boolean` `可选`
+ 默认值: `true`
+ 可选项: `-`
+ 描述: `用于控制是否使用制表符停止。如果启用了该设置，编辑器将使用制表符停止。如果禁用了该设置，则不会使用制表符停止。`

##  value
+ 类型: `string` `可选`
+ 默认值: `''`
+ 可选项: `-`
+ 描述: `用于设置编辑器的初始值。可以设置为任何字符串值。`

##  wordBasedSuggestions
+ 类型: `boolean` `可选`
+ 默认值: `true`
+ 可选项: `-`
+ 描述: `用于控制是否基于单词提供建议。如果启用了该设置，编辑器将基于单词提供建议。如果禁用了该设置，则不会基于单词提供建议。`

##  wordBasedSuggestionsOnlySameLanguage
+ 类型: `boolean` `可选`
+ 默认值: `false`
+ 可选项: `-`
+ 描述: `用于控制是否仅在同一语言中提供基于单词的建议。如果启用了该设置，编辑器将仅在同一语言中提供基于单词的建议。如果禁用了该设置，则不会仅在同一语言中提供基于单词的建议。`

##  wordBreak
+ 类型: `string` `可选`
+ 默认值: `'default'`
+ 可选项: `'default' | 'none' | 'camelCase' | 'hyphenated'`
+ 描述: `用于控制单词如何断开。可以选择 'default'、'none'、'camelCase' 或 'hyphenated' 中的一种。`

##  wordSeparators
+ 类型: `string` `可选`
+ 默认值: `'~!@#+%^&*()-=+[{]}\|;:\'",.<>/?'`
+ 可选项: `-`
+ 描述: `用于设置单词分隔符。可以设置为任何字符串值。`

##  wordWrap
+ 类型: `string` `可选`
+ 默认值: `'off'`
+ 可选项: `'off' | 'on' | 'wordWrapColumn' | 'bounded'`
+ 描述: `用于控制文本如何换行。可以选择 'off'、'on'、'wordWrapColumn' 或 'bounded' 中的一种。`

设置 Monaco Editor 中的单行最大长度，可以使用 `wordWrap`选项和 `wordWrapColumn`选项。

`wordWrap`选项用于启用或禁用自动换行。如果禁用自动换行，则文本将在指定的列数内换行。`wordWrapColumn`选项用于指定文本在哪个列数内换行。如果设置为`0`，则禁用自动换行。

以下是一个示例代码，演示如何设置 Monaco Editor 中的单行最大长度：
``` javascript
codeconst editor = monaco.editor.create(document.getElementById("container"), {
  value: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  language: "javascript",
  wordWrap: "on",
  wordWrapColumn: 80
});
```
在上面的示例中，`wordWrap`选项设置为 `on`，这意味着编辑器将在指定的列数（`wordWrapColumn`选项）处换行。在这个例子中，`wordWrapColumn`被设置为 `80`，这意味着编辑器将在第 80 个字符处换行。
您可以根据需要调整 `wordWrapColum`选项的值来设置单行最大长度。


##  wordWrapBreakAfterCharacters
+ 类型: `string` `可选`
+ 默认值: `' \t})]?|&,;'``
+ 可选项: `-`
+ 描述: `用于设置单词换行后的字符。可以设置为任何字符串值。`

##  wordWrapBreakBeforeCharacters
+ 类型: `string` `可选`
+ 默认值: `'([{<'``
+ 可选项: `-`
+ 描述: `用于设置单词换行前的字符。可以设置为任何字符串值。`

##  wordWrapColumn
+ 类型: `number` `可选`
+ 默认值: `80`
+ 可选项: `-`
+ 描述: `用于设置文本的换行列。可以设置为任何数字值。`

##  wordWrapOverride1
+ 类型: `Function` `可选`
+ 默认值: `-`
+ 可选项: `-`
+ 描述: `用于设置文本的自定义换行逻辑。可以设置为任何函数。`

##  wordWrapOverride2
+ 类型: `Function` `可选`
+ 默认值: `-`
+ 可选项: `-`
+ 描述: `用于设置文本的自定义换行逻辑。可以设置为任何函数。`

##  wrappingIndent
+ 类型: `string` `可选`
+ 默认值: `'none'`
+ 可选项: `'none' | 'same' | 'indent'`
+ 描述: `用于控制换行后的缩进。可以选择 'none'、'same' 或 'indent' 中的一种。`

##  wrappingStrategy
+ 类型: `string` `可选`
+ 默认值: `'simple'`
+ 可选项: `'simple' | 'advanced'`
+ 描述: `用于控制文本的换行策略。可以选择 'simple' 或 'advanced' 中的一种。`

