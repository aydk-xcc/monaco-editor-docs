# ICodeEditorOpener
`interface` [官网地址](https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor.ICodeEditorOpener.html)

## 方法 Methods

### openCodeEditor
+ 语法: `openCodeEditor(source: ICodeEditor, resource: Uri, selectionOrPosition?: IPosition | IRange): boolean | Promise<boolean>`
+ 参数: 
  + source： [ICodeEditor](ICodeEditor.md) 发起请求的代码编辑器实例。
  + resource：[Url](../../global/classes/Url.md) 资源的 Uri
  + selectionOrPosition：[IPosition](../../global/interfaces/IPosition.md) | [IRange](../../global/interfaces/IRange.md) `可选` 可用于设置光标的资源的可选位置或选择。
+ 返回值: `boolean` | `Promise<boolean>`
+ 描述: `当应打开当前模型以外的资源时调用的回调（例如，当调用“转到定义”时）。如果请求已处理，回调应返回 true，否则返回 false。`

``` javascript
import * as monaco from 'monaco-editor';

// 获取要编辑的文档对象
const uri = monaco.Uri.parse('file:///path/to/my/file.js');

// 获取要使用的编辑器对象
const editor = monaco.editor.create(document, {
  // 指定编辑器的选项
});

// 打开代码编辑器
const selection = new monaco.Range(1, 1, 2, 1);
const openedEditor = await monaco.editor.openCodeEditor(editor, uri, selection);

```