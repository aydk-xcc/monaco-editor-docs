# 光标操作

## 如何获取光标选中的内容
要获取 Monaco Editor 中光标选择的内容，可以使用 [getModel()](https://aydk-xcc.github.io/monaco-editor-docs/editor/instance.html#getmodel)方法获取编辑器的模型，然后使用 [getSelection()](https://aydk-xcc.github.io/monaco-editor-docs/editor/instance.html#getselection)方法获取当前选择的区域，最后使用 [getValueInRange()]()方法获取选择区域的文本。以下是一个示例：

```javascript
codeconst editor = monaco.editor.create(document.getElementById("container"), {
  value: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  language: "javascript"
});

const model = editor.getModel();
const selection = editor.getSelection();
const selectedText = model.getValueInRange(selection);

console.log(selectedText);

// 在划选过程中打印选中的值
editor.onDidChangeCursorSelection((e) => {
    let select = editor.getSelection();
    console.log(mode.getValueInRange(select));
});



```