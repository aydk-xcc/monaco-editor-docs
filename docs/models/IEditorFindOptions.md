# IEditorFindOptions
`interface` 编辑器查找组件的配置选项

## 参数 Properties

### addExtraSpaceOnTop
+ 类型 `boolean` 
+ 说明 是否在编辑器的顶部增加额外的空格

### autoFindInSelection?
+ 类型 `enum`  
+ 可选项 `"always" | "never" | "multiline"` 
+ 说明 控制是否在编辑器中打开“在选择中查找”标志

### cursorMoveOnType?
+ 类型 `boolean` 
+ 说明 控制光标是否应在键入时移动以查找匹配项

### loop?
+ 类型 `boolean` 
+ 说明 控制搜索结果和差异结果是否在找不到更多匹配项时自动从头（或尾）重新开始

### seedSearchStringFromSelection?
+ 类型 `enum` 
+ 可选项 `"always" | "never" | "selection"` 
+ 说明 控制我们是否使用当前选中的字符串作为查找的初始值。