# IDiffNavigator
`interface` [官网地址](https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor.IDiffNavigator.html)

用于导航差异的 API。它允许您在两个文档之间进行导航

## 方法 Methods
### canNavigate
+ 语法: `canNavigate(): boolean`
+ 参数: ``
+ 返回值: `boolean` 
+ 描述: `是否允许导航`

### dispose
+ 语法: `dispose(): boolean`
+ 参数: ``
+ 返回值: `void` 
+ 描述: `用于释放资源`

### next
+ 语法: `next(): boolean`
+ 参数: ``
+ 返回值: `void` 
+ 描述: `导航到下一个差异`

### previous
+ 语法: `previous(): boolean`
+ 参数: ``
+ 返回值: `void` 
+ 描述: `导航到上一个差异`