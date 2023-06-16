# 光标操作

## 如何获取光标选中的内容
要获取 Monaco Editor 中光标选择的内容，可以使用 [getModel()](install.md#getmodel)方法获取编辑器的模型，然后使用 getSelection()方法获取当前选择的区域，最后使用 [getValueInRange()]()方法获取选择区域的文本。以下是一个示例：

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

## 如何获取光标悬浮的的内容
首先，您需要在 Monaco Editor 中启用悬停事件。可以通过在编辑器选项中设置[hover](../editor/interfaces/IEditorConstructionOptions.md#hover)选项来实现。例如：
```javascript
const editor = monaco.editor.create(document.getElementById("container"), {
  value: "Hello, world!",
  language: "javascript",
  hover: {
    enabled: true,
    delay: 500,
  },
});
```
然后，您需要在悬停事件处理程序中获取光标所在的位置。可以使用 [getPosition()](../editor/interfaces/IStandaloneCodeEditor.md#getmodel)方法来获取光标的位置。例如：
```javascript
editor.onDidChangeCursorPosition((event) => {
  const position = event.position;
  const word = editor.getModel().getWordAtPosition(position);
  console.log(word.word);
});
```
在上面的代码中，我们使用 
[editor.getModel().getWordAtPosition(position)](../editor/interfaces/ITextModel.md#getwordatposition)
 方法来获取光标所在的单词。这个方法返回一个对象，其中包含单词的起始位置和长度。
最后使用 
word.word
 属性来获取单词的文本。例如：
```javascript
editor.onDidChangeCursorPosition((event) => {
  const position = event.position;
  const word = editor.getModel().getWordAtPosition(position);
  console.log(word.word);
});
```

## 如何设置hover的效果

要在Monaco Editor中设置鼠标悬停内容，可以使用 [monaco.languages.registerHoverProvider](../language/language.md#registerhoverprovider)  API。
```javascript
monaco.languages.registerHoverProvider('javascript', {
    provideHover: function(model, position) {
        return {
            range: new monaco.Range(position.lineNumber, position.column, position.lineNumber, position.column),
            contents: [
                { value: '**EXAMPLE HOVER CONTENT**' },
                { value: '这是有关悬停的一些其他信息。' }
            ]
        };
    }
});

var editor = monaco.editor.create(document.getElementById('container'), {
    value: 'function hello() {\n\talert("Hello world!");\n}',
    language: 'javascript',
    fixedOverflowWidgets: true
});

```
::: danger 关于位置不对
如果出现hover的显示位置不符合预期，可以设置[fixedOverflowWidgets](../editor/interfaces/IEditorConstructionOptions.md#fixedoverflowwidgets)试一下
::: 

 