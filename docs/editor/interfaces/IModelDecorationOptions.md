# IModelDecorationOptions
`interface` [官网地址](https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor.IModelDecorationOptions.html)

## 属性 Properties
### after
+ 类型： [InjectedTextOptions](InjectedTextOptions.md)  `可选` 
+ 默认值： `-` 
+ 可选项： `-` 
+ 描述：如果设置，文本将在范围后的视图中插入。
### afterContentClassName
+ 类型： `string`   `可选` 
+ 默认值： `null` 
+ 可选项： `-` 
+ 描述：一个CSS类名，用于在内容之后呈现附加内容的容器。
### before
+ 类型： [InjectedTextOptions](InjectedTextOptions.md)  `可选` 
+ 默认值： `null` 
+ 可选项： `-` 
+ 描述：一个装饰器，用于在内容之前呈现附加内容。
### beforeContentClassName
+ 类型： `string`   `可选` 
+ 默认值： `null` 
+ 可选项： `-` 
+ 描述：一个CSS类名，用于在内容之前呈现附加内容的容器。
### blockClassName
+ 类型： `string`   `可选` 
+ 默认值： `null` 
+ 可选项： `-` 
+ 描述：一个CSS类名，用于在内容周围呈现一个块装饰器。
### blockDoesNotCollapse
+ 类型： `boolean`   `可选` 
+ 默认值： `false` 
+ 可选项： `-` 
+ 描述：一个布尔值，表示块装饰器是否不应折叠。
### blockIsAfterEnd
+ 类型： `boolean`   `可选` 
+ 默认值： `false` 
+ 可选项： `-` 
+ 描述：一个布尔值，表示块装饰器是否在内容的末尾之后呈现。
### blockPadding
+ 类型： `[top: number, right: number, bottom: number, left: number]`   `可选` 
+ 默认值： `null` 
+ 可选项： `-` 
+ 描述：一个装饰器，用于在块装饰器与内容之间呈现填充。
### className
+ 类型： `string`   `可选` 
+ 默认值： `null` 
+ 可选项： `-` 
+ 描述：一个CSS类名，用于应用于此装饰器。
### firstLineDecorationClassName
+ 类型： `string`   `可选` 
+ 默认值： `null` 
+ 可选项： `-` 
+ 描述：一个CSS类名，用于在第一行上呈现的装饰器。
### glyphMargin
+ 类型：[IModelDecorationGlyphMarginOptions](IModelDecorationGlyphMarginOptions.md) `可选` 
+ 默认值： `null` 
+ 可选项： `-` 
+ 描述：一个装饰器，用于在行号旁边呈现图标。如果已设置并且装饰已设置 glyphMarginClassName，则在字形边距中使用指定的 IModelDecorationGlyphMarginOptions 渲染此装饰。
### glyphMarginClassName
+ 类型： `string`   `可选` 
+ 默认值： `null` 
+ 可选项： `-` 
+ 描述：一个CSS类名，用于应用于行号旁边呈现的图标的容器。
### glyphMarginHoverMessage
+ 类型： [IMarkdownString](../../global/classes/IMarkdownString.md) | [IMarkdownString](../../global/classes/IMarkdownString.md)[]   `可选` 
+ 默认值： `null` 
+ 可选项： `-` 
+ 描述：一个悬停消息，当鼠标悬停在行号旁边呈现的图标上时显示。
### hoverMessage
+ 类型： [IMarkdownString](../../global/classes/IMarkdownString.md) | [IMarkdownString](../../global/classes/IMarkdownString.md)[]  `可选` 
+ 默认值： `null` 
+ 可选项： `-` 
+ 描述：一个悬停消息，当鼠标悬停在装饰器上时显示。
### inlineClassName
+ 类型： `string`   `可选` 
+ 默认值： `null` 
+ 可选项： `-` 
+ 描述：一个CSS类名，用于在内容内呈现的装饰器。
### inlineClassNameAffectsLetterSpacing
+ 类型： `boolean`   `可选` 
+ 默认值： `false` 
+ 可选项： `-` 
+ 描述：一个布尔值，表示内联装饰器是否应影响字间距。
### isWholeLine
+ 类型： `boolean`   `可选` 
+ 默认值： `false` 
+ 可选项： `-` 
+ 描述：一个布尔值，表示装饰器是否应覆盖整行。
### linesDecorationsClassName
+ 类型： `string`   `可选` 
+ 默认值： `null` 
+ 可选项： `-` 
+ 描述：一个CSS类名，用于在整行上呈现的装饰器。
### marginClassName（边距类名）
+ 类型:  `string`   `可选` 
+ 默认值:  `-` 
+ 可选项:  `-` 
+ 描述:  `用于在编辑器的边距处添加自定义类名的选项。` 
 ### minimap（缩略图）
+ 类型:  [editor.IModelDecorationMinimapOptions](IModelDecorationMinimapOptions.md)   `可选` 
+ 默认值:  `-` 
+ 可选项:  `-` 
+ 描述:  `用于在编辑器的缩略图上添加自定义选项的选项。` 
 ### overviewRuler（概览标尺）
+ 类型:  [editor.IModelDecorationOverviewRulerOptions](IModelDecorationOverviewRulerOptions.md)   `可选` 
+ 默认值:  `-` 
+ 可选项:  `-` 
+ 描述:  `用于在编辑器的概览标尺上添加自定义选项的选项。` 
 ### showIfCollapsed（折叠时显示）
+ 类型:  `boolean`   `可选` 
+ 默认值:  `-` 
+ 可选项:  `-` 
+ 描述:  `用于在代码折叠时添加自定义选项的选项。` 
 ### stickiness（粘性）
+ 类型:  [TrackedRangeStickiness](../enumerations.md#trackedrangestickiness)  `可选` 
+ 默认值:  `-` 
+ 可选项:  `1. AlwaysGrowsWhenTypingAtEdges 2. NeverGrowsWhenTypingAtEdges 3. GrowsOnlyWhenTypingBefore` 
+ 描述:  `用于指定在编辑器中添加自定义选项时跟踪范围的行为。` 
 ### zIndex（层级）
+ 类型:  `number`   `可选` 
+ 默认值:  `-` 
+ 可选项:  `-` 
+ 描述:  `用于指定添加自定义选项时的层级顺序。` 