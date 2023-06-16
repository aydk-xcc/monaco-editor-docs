# IEditorInlayHintsOptions
`interface` [官网地址](https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor.IEditorInlayHintsOptions.html)
编辑器 editor inlayHints的配置
## 属性 Properties

### enabled?
+ 类型 `enum`  
+ 默认值 `on`
+ 可选项 `"on" | "off" | "offUnlessPressed" | "onUnlessPressed"` 
+ 说明 是否允许配置行内提示
### fontFamily?
+ 类型 `string`  
+ 默认值 `编辑器的字体`
+ 说明 行内提示的字体样式，默认为编辑器字体。
### fontSize?
+ 类型 `number`  
+ 可选项 `editor font 90%` 
+ 说明 行内提示的字体大小，默认为编辑器字体大小的 90%。
### padding?
+ 类型 `boolean`  
+ 默认值 `false`
+ 说明 设置行内提示的padding