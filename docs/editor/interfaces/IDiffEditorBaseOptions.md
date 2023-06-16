# IDiffEditorBaseOptions
`interface` [官网地址](https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor.IDiffEditorBaseOptions.html)

## 属性 Properties
### accessibilityVerbose
+ 类型： `boolean`    `可选`   
+ 默认值： `-` 
+ 可选项： `-` 
+ 描述： `是否应该在 diff 编辑器的 ARIA 标签中使用详细的描述。` 
 ### diffAlgorithm
+ 类型： `string`    `可选`   
+ 默认值： `'myers'` 
+ 可选项： `"advanced" | "legacy" | ` [IDocumentDiffProvider](IDocumentDiffProvider.md) 
+ 描述：用于计算差异的算法。
 ### diffCodeLens
+ 类型： `boolean`    `可选`   
+ 默认值： `true` 
+ 可选项： `-` 
+ 描述：是否在差异编辑器中启用 CodeLens。
 ### diffWordWrap
+ 类型： `enum`    `可选`   
+ 默认值： `off` 
+ 可选项： `"on" | "off" | "inherit"` 
+ 描述：是否在差异编辑器中启用单词换行。
 ### enableSplitViewResizing
+ 类型： `boolean`    `可选`   
+ 默认值： `true` 
+ 可选项： `-` 
+ 描述：是否允许用户调整分割视图的大小。
 ### experimental
+ 类型： `any`    `可选`   
+ 默认值： `undefined` 
+ 可选项： `-` 
+ 描述：实验性选项，可能会在未来的版本中更改或删除。
 ### ignoreTrimWhitespace
+ 类型： `boolean`    `可选`   
+ 默认值： `true` 
+ 可选项： `-` 
+ 描述：是否忽略差异编辑器中的空格。
 ### maxComputationTime
+ 类型： `number`    `可选`   
+ 默认值： `5000` 
+ 可选项： `-` 
+ 描述：计算差异的最大允许时间（以毫秒为单位）。
 ### maxFileSize
+ 类型： `number`    `可选`   
+ 默认值： `50` 
+ 可选项： `-` 
+ 描述：支持的最大文件大小（以 MB 为单位）。默认为 50。
 ### originalEditable
+ 类型： `boolean`    `可选`   
+ 默认值： `true` 
+ 可选项： `-` 
+ 描述：是否允许用户在差异编辑器中编辑原始文件。
 ### renderIndicators
+ 类型： `boolean`    `可选`   
+ 默认值： `true` 
+ 可选项： `-` 
+ 描述：是否在差异编辑器中渲染指示器。
 ### renderMarginRevertIcon
+ 类型： `boolean`    `可选`   
+ 默认值： `true` 
+ 可选项： `-` 
+ 描述：是否在差异编辑器中渲染还原图标。
 ### renderOverviewRuler
+ 类型： `boolean`    `可选`   
+ 默认值： `true` 
+ 可选项： `-` 
+ 描述：是否在差异编辑器中渲染概览标尺。
 ### renderSideBySide
+ 类型： `boolean`    `可选`   
+ 默认值： `true` 
+ 可选项： `-` 
+ 描述：是否在差异编辑器中启用并排显示。
 ### splitViewDefaultRatio
+ 类型： `number`    `可选`   
+ 默认值： `0.5` 
+ 可选项： `-` 
+ 描述：呈现并排编辑器时的默认比例。必须是 0 到 1 之间的数字，适用最小尺寸。默认为 0.5。