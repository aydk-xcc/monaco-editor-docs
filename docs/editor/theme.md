# 主题配置

## 颜色
```javascript
monaco.editor.create(document.getElementById("container"), {
	value: "My to-do list:\n* buy milk\n* buy coffee\n* write awesome code",
	language: "text/plain",
	fontFamily: "Arial",
	fontSize: 20,
});
```
这是我安装完配置好之后页面效果:

![theme-1](/img/theme-1.png)
看官方demo，自定义color可以通过css和js方式来进行覆盖，接下来分别试一下：

``` javascript 
// The editor colors can be customized through CSS or through JS
// 定义一个主题
monaco.editor.defineTheme("myTheme", {
	base: "vs",
	inherit: true,
	rules: [],
	colors: {
		"editor.foreground": "#000000",
		"editor.background": "#EDF9FA",
		"editorCursor.foreground": "#8B0000",
		"editor.lineHighlightBackground": "#0000FF20",
		"editorLineNumber.foreground": "#008800",
		"editor.selectionBackground": "#88000030",
		"editor.inactiveSelectionBackground": "#88000015",
	},
});
monaco.editor.setTheme("myTheme");

```
设置主题之后之后页面效果:

![theme-2](/img/theme-2.png)
通过 `defineTheme` 定义一个主题, `setTheme`设置定义的主题生效。其中`defineTheme` 支持的参数如下：
### base 
+ 类型: `string` `必选`
+ 默认值: ``
+ 可选项: `"vs" | "vs-dark" | "hc-black" | "hc-light"`
+ 描述: `表示主题的基础样式，可以是以下值之一："vs"：Visual Studio 样式。"vs-dark"：Visual Studio 暗色样式。"hc-black"：高对比度黑色样式。"hc-light"：高对比度白色样式`

### colors
+ 类型: `IColors` `必选`
+ 默认值: `-`
+ 可选项: `-`
+ 描述: `其中包含了一些键值对，每个键值对表示一个颜色的定义。键是颜色的名称，值是颜色的 CSS 字符串。`

以下是一个示例：
```javascript
Copy codemonaco.editor.defineTheme('myTheme', {
    base: 'vs',
    inherit: true,
    colors: {
        'editor.background': '#1e1e1e',
        'editor.foreground': '#d4d4d4',
        'editor.selectionBackground': '#add6ff',
        'editor.lineHighlightBackground': '#2a2a2a',
        'editorCursor.foreground': '#d4d4d4',
        'editorWhitespace.foreground': '#404040'
    },
    rules: [
        { token: 'comment', foreground: 'green', fontStyle: 'italic' },
        { token: 'keyword', foreground: 'blue', fontStyle: 'bold' }
    ]
});
```
其中，`editor.background`表示编辑器的背景色，`editor.foreground`表示编辑器的前景色，`editor.selectionBackground`表示选中文本的背景色，`editor.lineHighlightBackground`表示当前行的背景色，`editorCursor.foreground`表示光标的颜色，`editorWhitespace.foreground`表示空格的颜色。

在定义了颜色之后，我们还可以在规则中使用这些颜色，例如：
```javascript
Copy codemonaco.editor.defineTheme('myTheme', {
    base: 'vs',
    inherit: true,
    colors: {
        'editor.background': '#1e1e1e',
        'editor.foreground': '#d4d4d4',
        'editor.selectionBackground': '#add6ff',
        'editor.lineHighlightBackground': '#2a2a2a',
        'editorCursor.foreground': '#d4d4d4',
        'editorWhitespace.foreground': '#404040'
    },
    rules: [
        { token: 'comment', foreground: 'green', fontStyle: 'italic' },
        { token: 'keyword', foreground: 'blue', fontStyle: 'bold' },
        { token: 'string', foreground: 'editor.foreground', background: 'editor.background' }
    ]
});
```

### encodedTokensColors
+ 类型: `string[]` `可选`
+ 默认值: `-`
+ 可选项: `-`
+ 描述: `来定义主题中的编码 token 的颜色。编码 token 是指一些特殊的 token，它们的值是一些 Unicode 字符，例如 emoji 表情等。`

以下是一个示例：
```javascript
Copy codemonaco.editor.defineTheme('myTheme', {
    base: 'vs',
    inherit: true,
    encodedTokensColors: {
        'editorBracketMatch.background': '#ffa500',
        'editorBracketMatch.border': '#ffa500'
    },
    rules: [
        { token: 'comment', foreground: 'green', fontStyle: 'italic' },
        { token: 'keyword', foreground: 'blue', fontStyle: 'bold' }
    ]
});
```
其中，`editorBracketMatch.background`表示匹配的括号的背景色，`editorBracketMatch.border`表示匹配的括号的边框颜色。

在定义了编码 token 的颜色之后，我们还可以在规则中使用这些颜色，例如：
```javascript
Copy codemonaco.editor.defineTheme('myTheme', {
    base: 'vs',
    inherit: true,
    encodedTokensColors: {
        'editorBracketMatch.background': '#ffa500',
        'editorBracketMatch.border': '#ffa500'
    },
    rules: [
        { token: 'comment', foreground: 'green', fontStyle: 'italic' },
        { token: 'keyword', foreground: 'blue', fontStyle: 'bold' },
        { token: 'string.escape', foreground: 'editorBracketMatch.background' }
    ]
});
```
在这个示例中，我们定义了一个名为`string.escape`的编码 token，它的前景色使用了`editorBracketMatch.background`定义的颜色。

### inherit
+ 类型: `boolean` `必选`
+ 默认值: `-`
+ 可选项: `-`
+ 描述: `表示是否继承基础样式，可以是一个布尔值。`


### rules
+ 类型: `ITokenThemeRule[]` `必选`
+ 默认值: `-`
+ 可选项: `-`
+ 描述: `用于定义语法高亮的规则。具体来说，它定义了一个 token 的样式，包括前景色、背景色、字体样式等。`

::: tip ITokenThemeRule
#### background
+ 类型: `string` `可选`
+ 默认值: `-`
+ 可选项: `-`
+ 描述: `表示 token 的背景色，可以是一个 CSS 颜色值。`

#### fontStyle
+ 类型: `string` `可选`
+ 默认值: `-`
+ 可选项: `-`
+ 描述: `表示 token 的字体样式，可以是一个字符串，包括以下值：`

#### foreground
+ 类型: `string` `可选`
+ 默认值: `-`
+ 可选项: `-`
+ 描述: `表示 token 的前景色，可以是一个 CSS 颜色值。`

#### token
+ 类型: `string` `必选`
+ 默认值: `-`
+ 可选项: `-`
+ 描述: `表示要应用规则的 token 类型，可以是一个字符串或一个正则表达式。`
:::

例如，以下是一个定义了两个规则的示例：
```javascript
Copy codeconst myTheme: monaco.editor.ITokenTheme = {
    base: 'vs',
    inherit: true,
    rules: [
        { token: 'comment', foreground: 'green', fontStyle: 'italic' },
        { token: 'keyword', foreground: 'blue', fontStyle: 'bold' }
    ]
};
```
这个示例定义了两个规则，分别应用于 `comment`和 `keyword`类型的 token。其中，`comment`类型的token 会使用绿色的前景色和斜体字体样式，而 `keyword`类型的 token 会使用蓝色的前景色和粗体字体样式。


### 附录
官网demo列的颜色的样式

``` javascript
// A list of color names:
("foreground"); // Overall foreground color. This color is only used if not overridden by a component.
("errorForeground"); // Overall foreground color for error messages. This color is only used if not overridden by a component.
("descriptionForeground"); // Foreground color for description text providing additional information, for example for a label.
("focusBorder"); // Overall border color for focused elements. This color is only used if not overridden by a component.
("contrastBorder"); // An extra border around elements to separate them from others for greater contrast.
("contrastActiveBorder"); // An extra border around active elements to separate them from others for greater contrast.
("selection.background"); // The background color of text selections in the workbench (e.g. for input fields or text areas). Note that this does not apply to selections within the editor.
("textSeparator.foreground"); // Color for text separators.
("textLink.foreground"); // Foreground color for links in text.
("textLink.activeForeground"); // Foreground color for active links in text.
("textPreformat.foreground"); // Foreground color for preformatted text segments.
("textBlockQuote.background"); // Background color for block quotes in text.
("textBlockQuote.border"); // Border color for block quotes in text.
("textCodeBlock.background"); // Background color for code blocks in text.
("widget.shadow"); // Shadow color of widgets such as find/replace inside the editor.
("input.background"); // Input box background.
("input.foreground"); // Input box foreground.
("input.border"); // Input box border.
("inputOption.activeBorder"); // Border color of activated options in input fields.
("input.placeholderForeground"); // Input box foreground color for placeholder text.
("inputValidation.infoBackground"); // Input validation background color for information severity.
("inputValidation.infoBorder"); // Input validation border color for information severity.
("inputValidation.warningBackground"); // Input validation background color for information warning.
("inputValidation.warningBorder"); // Input validation border color for warning severity.
("inputValidation.errorBackground"); // Input validation background color for error severity.
("inputValidation.errorBorder"); // Input validation border color for error severity.
("dropdown.background"); // Dropdown background.
("dropdown.foreground"); // Dropdown foreground.
("dropdown.border"); // Dropdown border.
("list.focusBackground"); // List/Tree background color for the focused item when the list/tree is active. An active list/tree has keyboard focus, an inactive does not.
("list.focusForeground"); // List/Tree foreground color for the focused item when the list/tree is active. An active list/tree has keyboard focus, an inactive does not.
("list.activeSelectionBackground"); // List/Tree background color for the selected item when the list/tree is active. An active list/tree has keyboard focus, an inactive does not.
("list.activeSelectionForeground"); // List/Tree foreground color for the selected item when the list/tree is active. An active list/tree has keyboard focus, an inactive does not.
("list.inactiveSelectionBackground"); // List/Tree background color for the selected item when the list/tree is inactive. An active list/tree has keyboard focus, an inactive does not.
("list.inactiveSelectionForeground"); // List/Tree foreground color for the selected item when the list/tree is inactive. An active list/tree has keyboard focus, an inactive does not.
("list.hoverBackground"); // List/Tree background when hovering over items using the mouse.
("list.hoverForeground"); // List/Tree foreground when hovering over items using the mouse.
("list.dropBackground"); // List/Tree drag and drop background when moving items around using the mouse.
("list.highlightForeground"); // List/Tree foreground color of the match highlights when searching inside the list/tree.
("pickerGroup.foreground"); // Quick picker color for grouping labels.
("pickerGroup.border"); // Quick picker color for grouping borders.
("button.foreground"); // Button foreground color.
("button.background"); // Button background color.
("button.hoverBackground"); // Button background color when hovering.
("badge.background"); // Badge background color. Badges are small information labels, e.g. for search results count.
("badge.foreground"); // Badge foreground color. Badges are small information labels, e.g. for search results count.
("scrollbar.shadow"); // Scrollbar shadow to indicate that the view is scrolled.
("scrollbarSlider.background"); // Slider background color.
("scrollbarSlider.hoverBackground"); // Slider background color when hovering.
("scrollbarSlider.activeBackground"); // Slider background color when active.
("progressBar.background"); // Background color of the progress bar that can show for long running operations.
("editor.background"); // Editor background color.
("editor.foreground"); // Editor default foreground color.
("editorWidget.background"); // Background color of editor widgets, such as find/replace.
("editorWidget.border"); // Border color of editor widgets. The color is only used if the widget chooses to have a border and if the color is not overridden by a widget.
("editor.selectionBackground"); // Color of the editor selection.
("editor.selectionForeground"); // Color of the selected text for high contrast.
("editor.inactiveSelectionBackground"); // Color of the selection in an inactive editor.
("editor.selectionHighlightBackground"); // Color for regions with the same content as the selection.
("editor.findMatchBackground"); // Color of the current search match.
("editor.findMatchHighlightBackground"); // Color of the other search matches.
("editor.findRangeHighlightBackground"); // Color the range limiting the search.
("editor.hoverHighlightBackground"); // Highlight below the word for which a hover is shown.
("editorHoverWidget.background"); // Background color of the editor hover.
("editorHoverWidget.border"); // Border color of the editor hover.
("editorLink.activeForeground"); // Color of active links.
("diffEditor.insertedTextBackground"); // Background color for text that got inserted.
("diffEditor.removedTextBackground"); // Background color for text that got removed.
("diffEditor.insertedTextBorder"); // Outline color for the text that got inserted.
("diffEditor.removedTextBorder"); // Outline color for text that got removed.
("editorOverviewRuler.currentContentForeground"); // Current overview ruler foreground for inline merge-conflicts.
("editorOverviewRuler.incomingContentForeground"); // Incoming overview ruler foreground for inline merge-conflicts.
("editorOverviewRuler.commonContentForeground"); // Common ancestor overview ruler foreground for inline merge-conflicts.
("editor.lineHighlightBackground"); // Background color for the highlight of line at the cursor position.
("editor.lineHighlightBorder"); // Background color for the border around the line at the cursor position.
("editor.rangeHighlightBackground"); // Background color of highlighted ranges, like by quick open and find features.
("editorCursor.foreground"); // Color of the editor cursor.
("editorWhitespace.foreground"); // Color of whitespace characters in the editor.
("editorIndentGuide.background"); // Color of the editor indentation guides.
("editorLineNumber.foreground"); // Color of editor line numbers.
("editorLineNumber.activeForeground"); // Color of editor active line number.
("editorRuler.foreground"); // Color of the editor rulers.
("editorCodeLens.foreground"); // Foreground color of editor code lenses
("editorInlayHint.foreground"); // Foreground color of editor inlay hints
("editorInlayHint.background"); // Background color of editor inlay hints
("editorBracketMatch.background"); // Background color behind matching brackets
("editorBracketMatch.border"); // Color for matching brackets boxes
("editorOverviewRuler.border"); // Color of the overview ruler border.
("editorGutter.background"); // Background color of the editor gutter. The gutter contains the glyph margins and the line numbers.
("editorError.foreground"); // Foreground color of error squigglies in the editor.
("editorError.border"); // Border color of error squigglies in the editor.
("editorWarning.foreground"); // Foreground color of warning squigglies in the editor.
("editorWarning.border"); // Border color of warning squigglies in the editor.
("editorMarkerNavigationError.background"); // Editor marker navigation widget error color.
("editorMarkerNavigationWarning.background"); // Editor marker navigation widget warning color.
("editorMarkerNavigation.background"); // Editor marker navigation widget background.
("editorSuggestWidget.background"); // Background color of the suggest widget.
("editorSuggestWidget.border"); // Border color of the suggest widget.
("editorSuggestWidget.foreground"); // Foreground color of the suggest widget.
("editorSuggestWidget.selectedBackground"); // Background color of the selected entry in the suggest widget.
("editorSuggestWidget.highlightForeground"); // Color of the match highlights in the suggest widget.
("editor.wordHighlightBackground"); // Background color of a symbol during read-access, like reading a variable.
("editor.wordHighlightStrongBackground"); // Background color of a symbol during write-access, like writing to a variable.
("peekViewTitle.background"); // Background color of the peek view title area.
("peekViewTitleLabel.foreground"); // Color of the peek view title.
("peekViewTitleDescription.foreground"); // Color of the peek view title info.
("peekView.border"); // Color of the peek view borders and arrow.
("peekViewResult.background"); // Background color of the peek view result list.
("peekViewResult.lineForeground"); // Foreground color for line nodes in the peek view result list.
("peekViewResult.fileForeground"); // Foreground color for file nodes in the peek view result list.
("peekViewResult.selectionBackground"); // Background color of the selected entry in the peek view result list.
("peekViewResult.selectionForeground"); // Foreground color of the selected entry in the peek view result list.
("peekViewEditor.background"); // Background color of the peek view editor.
("peekViewEditorGutter.background"); // Background color of the gutter in the peek view editor.
("peekViewResult.matchHighlightBackground"); // Match highlight color in the peek view result list.
("peekViewEditor.matchHighlightBackground"); // Match highlight color in the peek view editor.

/*
var colors = require('vs/platform/registry/common/platform').Registry.data.get('base.contributions.colors').colorSchema.properties
Object.keys(colors).forEach(function(key) {
    var val = colors[key];
    console.log( '//' + val.description + '\n' + key);
})
*/
```
