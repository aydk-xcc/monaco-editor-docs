# IViewZoneChangeAccessor
`interface` [官网地址](https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor.IViewZoneChangeAccessor.html)
允许添加或删除区域的访问器。

## 方法 Methods
### addZone
+ 语法: `addZone(zone: IViewZone): string`
+ 参数: ``
+ 返回值: `string`
+ 描述: `创建一个新的视图区域。`
### layoutZone
+ 语法: `layoutZone(id: string): void`
+ 参数: ``
+ 返回值: `-`
+ 描述: `更改区域的位置。编辑器将重新扫描视图区域的 afterLineNumber 和 afterColumn 属性。`
### removeZone
+ 语法: `removeZone(id: string): void`
+ 参数: ``
+ 返回值: `-`
+ 描述: `删除区域`
