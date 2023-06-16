# EditorWrappingInfo
`interface` [官网地址](https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor.EditorWrappingInfo.html)

编辑器的换行信息

## 属性 Properties
### isDominatedByLongLines
+ 类型: `boolean`  `只读` 
+ 默认值: `-`
+ 可选项: `-`
+ 描述: `表示代码是否被长行所占据。如果代码中存在很长的行，那么它们可能会导致编辑器的布局出现问题，使得编辑器的其他部分无法正常显示。这个属性可以用来检查编辑器中是否存在这个问题，并采取相应的措施来解决它。`

### isViewportWrapping
+ 类型:  `只读` 
+ 默认值: `-`
+ 可选项: `-`
+ 描述: `表示是否启用了视口换行（Viewport Wrapping）。视口换行是一种特殊的换行模式，它只在当前视口内的文本行中进行换行，而不会对整个文档进行重新排版。这种模式可以提高编辑器的性能和响应速度，特别是在处理大型文档时。如果这个属性被设置为  true ，则表示启用了视口换行；如果设置为  false ，则表示禁用了视口换行`


### isWordWrapMinified
+ 类型: `boolean`  `只读` 
+ 默认值: `-`
+ 可选项: `-`
+ 描述: `表示是否启用了单词换行缩短（Word Wrap Minification）。单词换行缩短是一种特殊的换行模式，它会在换行处缩短单词，以便在有限的空间内显示更多的文本。如果这个属性被设置为  true ，则表示启用了单词换行缩短；如果设置为  false ，则表示禁用了单词换行缩短。`


### wrappingColumn
+ 类型: `number`  `只读` 
+ 默认值: `-`
+ 可选项: `-`
+ 描述: `表示在哪个列数处进行换行。如果这个属性被设置为一个正整数，则表示在这个列数处进行换行。如果这个属性被设置为  0  或负整数，则表示禁用换行。当编辑器中的一行超过了指定的列数时，编辑器会自动将其拆分为多行，以便在编辑器中显示。该属性可以通过编辑器的  updateOptions  方法进行设置。`
