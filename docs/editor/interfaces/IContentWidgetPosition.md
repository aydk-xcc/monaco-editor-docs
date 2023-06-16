# IContentWidgetPosition
`interface` [官网地址](https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor.IContentWidgetPosition.html)
渲染内容小部件的位置。
## 属性 Properties
### position
+ 类型: [IPosition](../../global/interfaces/IPosition.md) `必选` 
+ 默认值: `-`
+ 可选项: `-`
+ 描述: `用作放置内容小部件的锚点的所需位置。 小部件将根据提供的首选项放置在指定位置的上方、下方或下方。 小部件将始终触摸此位置。 如果有足够的水平空间，小部件将放置在传入位置的右侧。 这可以通过提供 secondaryPosition 来调整。`

### positionAffinity
+ 类型: [positionAffinity](../enumerations.md#positionaffinity) `可选`
+ 默认值: `-`
+ 可选项: `-`
+ 描述: `多个视图位置引用相同（模型）位置时的放置首选项。当涉及注入的文本时，这会起作用。`

### preference
+ 类型:  [ContentWidgetPositionPreference](../enumerations.md#contentwidgetpositionpreference)[] `必选` 
+ 默认值: `-`
+ 可选项: `-`
+ 描述: `位置的放置偏好，按偏好顺序排列。`

### secondaryPosition
+ 类型: [IPosition](../../global/interfaces/IPosition.md) `可选`
+ 默认值: `-`
+ 可选项: `-`
+ 描述: `可选,可以提供次要位置以进一步定义内容小部件的放置。 次要位置必须与主要位置具有相同的行号。 如果可能的话，小部件将被放置在它也接触到次要位置的位置。`
