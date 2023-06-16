# ICodeEditor
`interface` [官网地址](https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor.ICodeEditor.html)

继承关系：IEditor > ICodeEditor > IStandaloneCodeEditor

## 属性 Properties

##  onContextMenu
+ 参数: [monaco.editor.IEditorMouseEvent](./IEditorMouseEvent.md)
+ 描述: `用户右键点击编辑器时触发。可以通过监听这个事件来实现自定义的右键菜单`
+ 示例: 
```javascript
const editor = monaco.editor.create(document.getElementById('container'), {
    value: 'Hello, world!',
    language: 'plaintext'
});

editor.onContextMenu((e: monaco.editor.IEditorMouseEvent) => {
    console.log('Right-clicked at:', e.event.posx, e.event.posy);
});
```
在这个示例中，我们创建了一个编辑器，并监听了它的 `onContextMenu`事件。当用户右键点击编辑器时，会在控制台输出鼠标的位置信息。

注意，如果要阻止默认的右键菜单，可以在回调函数中调用 `e.event.preventDefault()`方法。例如：
```javascript
editor.onContextMenu((e: monaco.editor.IEditorMouseEvent) => {
    console.log('Right-clicked at:', e.event.posx, e.event.posy);
    e.event.preventDefault();
});
```
##  onDidAttemptReadOnlyEdit
+ 参数: `monaco.editor.IReadOnlyEditAttemptEvent`
+ 描述: `在用户试图编辑只读文本时触发。可以通过监听这个事件来实现自定义的只读文本处理逻辑。`
+ 示例:
```javascript
const editor = monaco.editor.create(document.getElementById('container'), {
    value: 'Hello, world!',
    language: 'plaintext',
    readOnly: true
});

editor.onDidAttemptReadOnlyEdit((e: monaco.editor.IReadOnlyEditAttemptEvent) => {
    console.log('Attempted to edit read-only text:', e.range, e.text);
});
```
在这个示例中，我们创建了一个只读的编辑器，并监听了它的 
onDidAttemptReadOnlyEdit
 事件。当用户试图编辑只读文本时，会在控制台输出相关信息。

注意，如果要阻止试图进行的编辑操作，可以在回调函数中调用 
e.preventDefault()
 方法。

##  onDidBlurEditorText
+ 参数: 无
+ 描述: 在编辑器失去焦点时触发。可以通过监听这个事件来实现自定义的失焦处理逻辑。
+ 示例:
```javascript
const editor = monaco.editor.create(document.getElementById('container'), {
    value: 'Hello, world!',
    language: 'plaintext'
});

editor.onDidBlurEditorText(() => {
    console.log('Editor lost focus');
});
```
在这个示例中，我们创建了一个编辑器，并监听了它的 
onDidBlurEditorText
 事件。当编辑器失去焦点时，会在控制台输出相关信息。

##  onDidBlurEditorWidget
+ 参数: 无
+ 描述: 在编辑器小部件失去焦点时触发。可以通过监听这个事件来实现自定义的失焦处理逻辑。
+ 示例:
```javascript
const editor = monaco.editor.create(document.getElementById('container'), {
    value: 'Hello, world!',
    language: 'plaintext'
});

editor.onDidBlurEditorWidget(() => {
    console.log('Editor widget lost focus');
});
```
在这个示例中，我们创建了一个编辑器，并监听了它的 
onDidBlurEditorWidget
 事件。当编辑器小部件失去焦点时，会在控制台输出相关信息。

##  onDidChangeConfiguration
+ 参数: 无
+ 描述: 在编辑器配置发生变化时触发。可以通过监听这个事件来实现自定义的配置处理逻辑。
+ 示例:
```javascript
const editor = monaco.editor.create(document.getElementById('container'), {
    value: 'Hello, world!',
    language: 'plaintext'
});

editor.onDidChangeConfiguration(() => {
    console.log('Editor configuration changed');
});
```
在这个示例中，我们创建了一个编辑器，并监听了它的 
onDidChangeConfiguration
 事件。当编辑器配置发生变化时，会在控制台输出相关信息。

##  onDidChangeCursorPosition
+ 参数: `monaco.editor.ICursorPositionChangedEvent`
+ 描述: 在光标位置发生变化时触发。可以通过监听这个事件来实现自定义的光标位置处理逻辑。
+ 示例:
```javascript
const editor = monaco.editor.create(document.getElementById('container'), {
    value: 'Hello, world!',
    language: 'plaintext'
});

editor.onDidChangeCursorPosition((e: monaco.editor.ICursorPositionChangedEvent) => {
    console.log('Cursor position changed:', e.position);
});
```
在这个示例中，我们创建了一个编辑器，并监听了它的 
onDidChangeCursorPosition
 事件。当光标位置发生变化时，会在控制台输出相关信息。

 ##  onDidChangeCursorSelection
+ 参数: `monaco.editor.ICursorSelectionChangedEvent`
+ 描述: `在光标选择发生变化时触发。可以通过监听这个事件来实现自定义的光标选择处理逻辑。`
+ 示例:
```javascript
const editor = monaco.editor.create(document.getElementById('container'), {
    value: 'Hello, world!',
    language: 'plaintext'
});

editor.onDidChangeCursorSelection((e: monaco.editor.ICursorSelectionChangedEvent) => {
    console.log('Cursor selection changed:', e.selection);
});
```
在这个示例中，我们创建了一个编辑器，并监听了它的 
onDidChangeCursorSelection
 事件。当光标选择发生变化时，会在控制台输出相关信息。

##  onDidChangeHiddenAreas
+ 参数: `无`
+ 描述: `在编辑器的隐藏区域发生变化时触发。可以通过监听这个事件来实现自定义的隐藏区域处理逻辑。`
+ 示例:
```javascript
const editor = monaco.editor.create(document.getElementById('container'), {
    value: 'Hello, world!',
    language: 'plaintext'
});

editor.onDidChangeHiddenAreas(() => {
    console.log('Editor hidden areas changed');
});
```
在这个示例中，我们创建了一个编辑器，并监听了它的 
onDidChangeHiddenAreas
 事件。当编辑器的隐藏区域发生变化时，会在控制台输出相关信息。

##  onDidChangeModel
+ 参数: `monaco.editor.IModelChangedEvent`
+ 描述: `在编辑器的模型发生变化时触发。可以通过监听这个事件来实现自定义的模型处理逻辑。`
+ 示例:
```javascript
const editor = monaco.editor.create(document.getElementById('container'), {
    value: 'Hello, world!',
    language: 'plaintext'
});

editor.onDidChangeModel((e: monaco.editor.IModelChangedEvent) => {
    console.log('Editor model changed:', e.newModelUrl);
});
```
在这个示例中，我们创建了一个编辑器，并监听了它的 
onDidChangeModel
 事件。当编辑器的模型发生变化时，会在控制台输出相关信息。

##  onDidChangeModelContent
+ 参数: `monaco.editor.IModelContentChangedEvent`
+ 描述: `在编辑器的模型内容发生变化时触发。可以通过监听这个事件来实现自定义的模型内容处理逻辑。`
+ 示例:
```javascript
const editor = monaco.editor.create(document.getElementById('container'), {
    value: 'Hello, world!',
    language: 'plaintext'
});

editor.onDidChangeModelContent((e: monaco.editor.IModelContentChangedEvent) => {
    console.log('Editor model content changed:', e.changes);
});
```
在这个示例中，我们创建了一个编辑器，并监听了它的 onDidChangeModelContent事件。当编辑器的模型内容发生变化时，会在控制台输出相关信息。

##  onDidChangeModelDecorations
+ 参数: `monaco.editor.IModelDecorationsChangedEvent`
+ 描述: `在编辑器的模型装饰发生变化时触发。可以通过监听这个事件来实现自定义的模型装饰处理逻辑。`
+ 示例:
```javascript
const editor = monaco.editor.create(document.getElementById('container'), {
    value: 'Hello, world!',
    language: 'plaintext'
});

const decoration = {
    range: new monaco.Range(1, 1, 1, 6),
    options: {
        isWholeLine: true,
        className: 'myDecoration'
    }
};

const decorations = editor.deltaDecorations([], [decoration]);

editor.onDidChangeModelDecorations((e: monaco.editor.IModelDecorationsChangedEvent) => {
    console.log('Editor model decorations changed:', e);
});
```
在这个示例中，我们创建了一个编辑器，并添加了一个装饰。然后，我们监听了编辑器的 
onDidChangeModelDecorations
 事件。当编辑器的模型装饰发生变化时，会在控制台输出相关信息。

##  onDidChangeModelLanguage
+ 参数: `无`
+ 描述: `在编辑器的模型语言发生变化时触发。可以通过监听这个事件来实现自定义的模型语言处理逻辑。`
+ 示例:
```javascript
const editor = monaco.editor.create(document.getElementById('container'), {
    value: 'Hello, world!',
    language: 'plaintext'
});

editor.onDidChangeModelLanguage(() => {
    console.log('Editor model language changed');
});
```
在这个示例中，我们创建了一个编辑器，并监听了它的 
onDidChangeModelLanguage
 事件。当编辑器的模型语言发生变化时，会在控制台输出相关信息。

##  onDidChangeModelLanguageConfiguration
+ 参数: `无`
+ 描述: `在编辑器的模型语言配置发生变化时触发。可以通过监听这个事件来实现自定义的模型语言配置处理逻辑。`
+ 示例:
```javascript
const editor = monaco.editor.create(document.getElementById('container'), {
    value: 'Hello, world!',
    language: 'plaintext'
});

editor.onDidChangeModelLanguageConfiguration(() => {
    console.log('Editor model language configuration changed');
});
```
在这个示例中，我们创建了一个编辑器，并监听了它的 
onDidChangeModelLanguageConfiguration
 事件。当编辑器的模型语言配置发生变化时，会在控制台输出相关信息。

##  onDidChangeModelOptions
+ 参数: `无`
+ 描述: `在编辑器的模型选项发生变化时触发。可以通过监听这个事件来实现自定义的模型选项处理逻辑。`
+ 示例:
```javascript
const editor = monaco.editor.create(document.getElementById('container'), {
    value: 'Hello, world!',
    language: 'plaintext'
});

editor.onDidChangeModelOptions(() => {
    console.log('Editor model options changed');
});
```
在这个示例中，我们创建了一个编辑器，并监听了它的 
onDidChangeModelOptions
 事件。当编辑器的模型选项发生变化时，会在控制台输出相关信息。

##  onDidCompositionEnd
+ 参数: `void`
+ 描述: `在输入法组合结束时触发。可以通过监听这个事件来实现自定义的输入法组合处理逻辑。`
+ 示例:
```javascript
const editor = monaco.editor.create(document.getElementById('container'), {
    value: '',
    language: 'plaintext'
});

editor.onDidCompositionEnd(() => {
    console.log('Composition ended');
});
```
在这个示例中，我们创建了一个编辑器，并监听了它的 
onDidCompositionEnd
 事件。当输入法组合结束时，会在控制台输出相关信息。

##  onDidCompositionStart
+ 参数: `void`
+ 描述: `在输入法组合开始时触发。可以通过监听这个事件来实现自定义的输入法组合处理逻辑。`
+ 示例:
```javascript
const editor = monaco.editor.create(document.getElementById('container'), {
    value: '',
    language: 'plaintext'
});

editor.onDidCompositionStart(() => {
    console.log('Composition started');
});
```
在这个示例中，我们创建了一个编辑器，并监听了它的 
onDidCompositionStart
 事件。当输入法组合开始时，会在控制台输出相关信息。

##  onDidContentSizeChange
+ 参数: `monaco.editor.IContentSizeChangedEvent`
+ 描述: `在编辑器的内容大小发生变化时触发。可以通过监听这个事件来实现自定义的内容大小处理逻辑。`
+ 示例:
```javascript
const editor = monaco.editor.create(document.getElementById('container'), {
    value: '',
    language: 'plaintext'
});

editor.onDidContentSizeChange((e: monaco.editor.IContentSizeChangedEvent) => {
    console.log('Content size changed:', e.contentWidth, e.contentHeight);
});
```
在这个示例中，我们创建了一个编辑器，并监听了它的 
onDidContentSizeChange
 事件。当编辑器的内容大小发生变化时，会在控制台输出相关信息。

##  onDidFocusEditorText
+ 参数: `void`
+ 描述: `在编辑器文本区域获得焦点时触发。可以通过监听这个事件来实现自定义的文本区域焦点处理逻辑。`
+ 示例:
```javascript
const editor = monaco.editor.create(document.getElementById('container'), {
    value: '',
    language: 'plaintext'
});

editor.onDidFocusEditorText(() => {
    console.log('Editor text area focused');
});
```
在这个示例中，我们创建了一个编辑器，并监听了它的 
onDidFocusEditorText
 事件。当编辑器文本区域获得焦点时，会在控制台输出相关信息。

##  onDidFocusEditorWidget
+ 参数: `void`
+ 描述: `在编辑器小部件获得焦点时触发。可以通过监听这个事件来实现自定义的小部件焦点处理逻辑。`
+ 示例:
```javascript
const editor = monaco.editor.create(document.getElementById('container'), {
    value: '',
    language: 'plaintext'
});

editor.onDidFocusEditorWidget(() => {
    console.log('Editor widget focused');
});
```
在这个示例中，我们创建了一个编辑器，并监听了它的 
onDidFocusEditorWidget
 事件。当编辑器小部件获得焦点时，会在控制台输出相关信息。

 ##  onDidLayoutChange
+ 参数: `monaco.editor.EditorLayoutInfo`
+ 描述: `在编辑器的布局信息发生变化时触发。可以通过监听这个事件来实现自定义的布局处理逻辑。`
+ 示例:
```javascript
const editor = monaco.editor.create(document.getElementById('container'), {
    value: '',
    language: 'plaintext'
});

editor.onDidLayoutChange((layoutInfo: monaco.editor.EditorLayoutInfo) => {
    console.log('Editor layout changed:', layoutInfo);
});
```
在这个示例中，我们创建了一个编辑器，并监听了它的 
onDidLayoutChange
 事件。当编辑器的布局信息发生变化时，会在控制台输出相关信息。

##  onDidPaste
+ 参数: `string`
+ 描述: `在编辑器中粘贴文本时触发。可以通过监听这个事件来实现自定义的粘贴文本处理逻辑。`
+ 示例:
```javascript
const editor = monaco.editor.create(document.getElementById('container'), {
    value: '',
    language: 'plaintext'
});

editor.onDidPaste((text: string) => {
    console.log('Pasted text:', text);
});
```
在这个示例中，我们创建了一个编辑器，并监听了它的 
onDidPaste
 事件。当在编辑器中粘贴文本时，会在控制台输出相关信息。

##  onDidScrollChange
+ 参数: `monaco.editor.IScrollEvent`
+ 描述: `在编辑器的滚动位置发生变化时触发。可以通过监听这个事件来实现自定义的滚动处理逻辑。`
+ 示例:
```javascript
const editor = monaco.editor.create(document.getElementById('container'), {
    value: '',
    language: 'plaintext'
});

editor.onDidScrollChange((e: monaco.editor.IScrollEvent) => {
    console.log('Scroll position changed:', e.scrollTop, e.scrollLeft);
});
```
在这个示例中，我们创建了一个编辑器，并监听了它的 
onDidScrollChange
 事件。当编辑器的滚动位置发生变化时，会在控制台输出相关信息。

##  onKeyDown
+ 参数: `monaco.IKeyboardEvent`
+ 描述: `在编辑器中按下键盘按键时触发。可以通过监听这个事件来实现自定义的键盘按键处理逻辑。`
+ 示例:
```javascript
const editor = monaco.editor.create(document.getElementById('container'), {
    value: '',
    language: 'plaintext'
});

editor.onKeyDown((e: monaco.IKeyboardEvent) => {
    console.log('Key down:', e.keyCode);
});
```
在这个示例中，我们创建了一个编辑器，并监听了它的 
onKeyDown
 事件。当在编辑器中按下键盘按键时，会在控制台输出相关信息。

##  onKeyUp
+ 参数: `monaco.IKeyboardEvent`
+ 描述: `在编辑器中释放键盘按键时触发。可以通过监听这个事件来实现自定义的键盘按键处理逻辑。`
+ 示例:
```javascript
const editor = monaco.editor.create(document.getElementById('container'), {
    value: '',
    language: 'plaintext'
});

editor.onKeyUp((e: monaco.IKeyboardEvent) => {
    console.log('Key up:', e.keyCode);
});
```
在这个示例中，我们创建了一个编辑器，并监听了它的 
onKeyUp
 事件。当在编辑器中释放键盘按键时，会在控制台输出相关信息。

 ##  onMouseDown
+ 参数: `monaco.editor.IEditorMouseEvent`
+ 描述: `在编辑器中按下鼠标按钮时触发。可以通过监听这个事件来实现自定义的鼠标按键处理逻辑。`
+ 示例:
``` javascript
const editor = monaco.editor.create(document.getElementById('container'), {
    value: '',
    language: 'plaintext'
});

editor.onMouseDown((e: monaco.editor.IEditorMouseEvent) => {
    console.log('Mouse down:', e.target.type);
});
```
在这个示例中，我们创建了一个编辑器，并监听了它的 
onMouseDown
 事件。当在编辑器中按下鼠标按钮时，会在控制台输出相关信息。

##  onMouseLeave
+ 参数: `monaco.editor.IEditorMouseEvent`
+ 描述: `在鼠标离开编辑器时触发。可以通过监听这个事件来实现自定义的鼠标离开处理逻辑。`
+ 示例:
``` javascript
const editor = monaco.editor.create(document.getElementById('container'), {
    value: '',
    language: 'plaintext'
});

editor.onMouseLeave((e: monaco.editor.IEditorMouseEvent) => {
    console.log('Mouse left editor');
});
```
在这个示例中，我们创建了一个编辑器，并监听了它的 
onMouseLeave
 事件。当鼠标离开编辑器时，会在控制台输出相关信息。

##  onMouseMove
+ 参数: `monaco.editor.IEditorMouseEvent`
+ 描述: `在鼠标在编辑器中移动时触发。可以通过监听这个事件来实现自定义的鼠标移动处理逻辑。`
+ 示例:
``` javascript
const editor = monaco.editor.create(document.getElementById('container'), {
    value: '',
    language: 'plaintext'
});

editor.onMouseMove((e: monaco.editor.IEditorMouseEvent) => {
    console.log('Mouse moved:', e.target.type);
});
```
在这个示例中，我们创建了一个编辑器，并监听了它的 
onMouseMove
 事件。当鼠标在编辑器中移动时，会在控制台输出相关信息。

##  onMouseUp
+ 参数: `monaco.editor.IEditorMouseEvent`
+ 描述: `在编辑器中释放鼠标按钮时触发。可以通过监听这个事件来实现自定义的鼠标按键处理逻辑。`
+ 示例:
``` javascript
const editor = monaco.editor.create(document.getElementById('container'), {
    value: '',
    language: 'plaintext'
});

editor.onMouseUp((e: monaco.editor.IEditorMouseEvent) => {
    console.log('Mouse up:', e.target.type);
});
```
在这个示例中，我们创建了一个编辑器，并监听了它的 
onMouseUp
 事件。当在编辑器中释放鼠标按钮时，会在控制台输出相关信息

## 方法

##  addAction
+ 语法: `addAction(descriptor: monaco.editor.IActionDescriptor): IDisposable;`
+ 参数: `monaco.editor.IActionDescriptor`
+ 返回值: `IDisposable对象`
+ 描述: `用来向编辑器中添加自定义的操作。`
  
其中，descriptor参数是一个对象，用来描述要添加的操作。它包含以下属性：
::: tip descriptor参数
id：操作的唯一标识符，必须是字符串类型。

label：操作的显示名称，必须是字符串类型。

keybindings：操作的快捷键，可以是字符串类型的快捷键，也可以是字符串类型的快捷键数组。

contextMenuGroupId：操作在右键菜单中的分组 ID，必须是字符串类型。

contextMenuOrder：操作在右键菜单中的排序位置，必须是数字类型。

run：操作的执行函数，必须是一个函数类型，接受一个 ICodeEditor类型的参数。
:::
addAction方法返回一个 IDisposable对象，用来取消添加的操作。可以通过调用 dispose方法来取消添加的操作。
下面是一个示例，演示如何向编辑器中添加一个自定义的操作：
```javascript
const editor = monaco.editor.create(document.getElementById('container'), {
    value: '',
    language: 'plaintext'
});

editor.addAction({
    id: 'my-custom-action',
    label: 'My Custom Action',
    keybindings: [
        monaco.KeyMod.CtrlCmd | monaco.KeyCode.KEY_S
    ],
    contextMenuGroupId: 'navigation',
    contextMenuOrder: 1.5,
    run: function(ed) {
        console.log('My custom action executed');
    }
});
```
在这个示例中，我们创建了一个编辑器，并向它添加了一个名为 my-custom-action的自定义操作。这个操作的显示名称为 My Custom Action，快捷键为 Ctrl/Cmd + S，在右键菜单中的分组 ID 为 navigation，排序位置为 1.5。当这个操作被执行时，会在控制台输出相关信息。

##  addCommand
+ 语法: `addCommand(keybinding: monaco.IKeybinding, handler: ICommandHandler, context: string):string`
+ 参数: `keybinding`、`handler`、`context`
+ 返回值: `IDisposable对象`
+ 描述: `用来向编辑器中添加自定义的操作。`

其中，`keybinding` 参数是一个对象，用来描述要添加的命令的快捷键。它包含以下属性：
+ ctrlCmd：是否按下了 Ctrl或 Cmd键，必须是布尔类型。
+ shift：是否按下了 Shift键，必须是布尔类型。
+ alt：是否按下了Alt键，必须是布尔类型。
+ keyCode：按下的键的键码，必须是数字类型。

`handler` 参数是一个函数，用来处理命令的执行逻辑。它接受一个 ICodeEditor类型的参数。

`context`参数是一个字符串，用来指定命令的上下文。可以是 editor、textarea 或 global中的一个。

`addCommand`方法返回一个字符串，表示添加的命令的 ID。可以通过调用 removeCommand方法来移除添加的命令。
下面是一个示例，演示如何向编辑器中添加一个自定义的命令：
```javascript
const editor = monaco.editor.create(document.getElementById('container'), {
    value: '',
    language: 'plaintext'
});

editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.KEY_S, function(ed) {
    console.log('Custom command executed');
}, 'editor');
```
在这个示例中，我们创建了一个编辑器，并向它添加了一个名为 Custom command的自定义命令。这个命令的快捷键为 Ctrl/Cmd + S，当这个命令被执行时，会在控制台输出相关信息。

##  addContentWidget
+ 语法: `addContentWidget(widget: IContentWidget): void`
+ 参数: `widget`
+ 返回值: `-`
+ 描述: `向编辑器中添加自定义的内容小部件`

其中，widget 参数是一个对象，用来描述要添加的内容小部件。它包含以下属性：

+ getId：获取小部件的唯一标识符的函数，必须是一个函数类型。
+ getDomNode：获取小部件的 DOM 节点的函数，必须是一个函数类型。
+ getPosition：获取小部件的位置信息的函数，必须是一个函数类型。
+ addContentWidget 方法没有返回值。可以通过调用 
+ removeContentWidget 方法来移除添加的内容小部件。

下面是一个示例，演示如何向编辑器中添加一个自定义的内容小部件：
```javascript
const editor = monaco.editor.create(document.getElementById('container'), {
    value: '',
    language: 'plaintext'
});

const widget = {
    getId: function() {
        return 'my-content-widget';
    },
    getDomNode: function() {
        const node = document.createElement('div');
        node.innerHTML = 'My content widget';
        return node;
    },
    getPosition: function() {
        return {
            position: {
                lineNumber: 1,
                column: 1
            },
            preference: [monaco.editor.ContentWidgetPositionPreference.ABOVE, monaco.editor.ContentWidgetPositionPreference.BELOW]
        };
    }
};

editor.addContentWidget(widget);
```
在这个示例中，我们创建了一个编辑器，并向它添加了一个名为 my-content-widget的自定义内容小部件。这个小部件的 DOM 节点为一个包含文本My content widget的div元素，位置信息为第一行第一列的上方或下方。当这个小部件被添加到编辑器中时，会显示在相应的位置。

##  addOverlayWidget
+ 语法: `addOverlayWidget(widget: IOverlayWidget): void`
+ 参数: `widget`
+ 返回值: `-`
+ 描述: `向编辑器中添加自定义的覆盖小部件`

其中，widget 参数是一个对象，用来描述要添加的覆盖小部件。它包含以下属性：

+ getId：获取小部件的唯一标识符的函数，必须是一个函数类型。
+ getDomNode：获取小部件的 DOM 节点的函数，必须是一个函数类型。
+ getPosition：获取小部件的位置信息的函数，必须是一个函数类型。
+ addOverlayWidget 方法没有返回值。可以通过调用
+ removeOverlayWidget 方法来移除添加的覆盖小部件。
  
下面是一个示例，演示如何向编辑器中添加一个自定义的覆盖小部件：
```javascript
const editor = monaco.editor.create(document.getElementById('container'), {
    value: '',
    language: 'plaintext'
});

const widget = {
    getId: function() {
        return 'my-overlay-widget';
    },
    getDomNode: function() {
        const node = document.createElement('div');
        node.innerHTML = 'My overlay widget';
        return node;
    },
    getPosition: function() {
        return {
            preference: [monaco.editor.OverlayWidgetPositionPreference.TOP_RIGHT_CORNER]
        };
    }
};

editor.addOverlayWidget(widget);
```
在这个示例中，我们创建了一个编辑器，并向它添加了一个名为 my-overlay-widget 的自定义覆盖小部件。这个小部件的 DOM 节点为一个包含文本 My overlay widget 的 div 元素，位置信息为右上角。当这个小部件被添加到编辑器中时，会显示在相应的位置。

##  applyFontInfo
+ 语法: `applyFontInfo(target: HTMLElement): void`
+ 参数: `target`
+ 返回值: `-`
+ 描述: `将编辑器的字体信息应用到指定的 DOM 元素上`

其中，target 参数是一个要应用字体信息的 DOM 元素。
下面是一个示例，演示如何将编辑器的字体信息应用到一个指定的 DOM 元素上：
```javascript
const editor = monaco.editor.create(document.getElementById('container'), {
    value: '',
    language: 'plaintext'
});

const target = document.getElementById('target');
editor.applyFontInfo(target);
```
在这个示例中，我们创建了一个编辑器，并将它的字体信息应用到了一个名为 target 的 DOM 元素上。这个元素的字体、字号、行高等信息会与编辑器保持一致。

##  changeViewZones
+ 语法: `changeViewZones(callback: (accessor: IViewZoneChangeAccessor) => void): void`
+ 参数: `callback`
+ 返回值: `-`
+ 描述: `修改编辑器的视图区域`

其中，callback 参数是一个函数，用来描述要修改的视图区域。它接受一个 IViewZoneChangeAccessor 对象作为参数，用来添加、移除或更新视图区域。
下面是一个示例，演示如何使用 changeViewZones 方法来添加一个视图区域：
```javascript
const editor = monaco.editor.create(document.getElementById('container'), {
    value: '',
    language: 'plaintext'
});

editor.changeViewZones(function(changeAccessor) {
    const domNode = document.createElement('div');
    domNode.innerHTML = 'My view zone';
    const afterLineNumber = 3;
    const heightInLines = 2;
    changeAccessor.addZone({
        afterLineNumber: afterLineNumber,
        heightInLines: heightInLines,
        domNode: domNode
    });
});
```
在这个示例中，我们创建了一个编辑器，并使用 changeViewZones 方法添加了一个视图区域。这个视图区域的 DOM 节点为一个包含文本 My view zone 的 div 元素，位置信息为第三行之后，高度为两行。当这个视图区域被添加到编辑器中时，会显示在相应的位置。

##  createContextKey
+ 语法: `createContextKey(key: string, defaultValue: any): IContextKey`
+ 参数: `key, defaultValue`
+ 返回值: `IContextKey`
+ 描述: `创建一个上下文键，用于管理编辑器的上下文信息`

其中，key 参数是一个字符串，用来标识上下文键的名称；defaultValue 参数是一个任意类型的值，用来表示上下文键的默认值。
下面是一个示例，演示如何使用 createContextKey 方法创建一个上下文键：
```javascript
const editor = monaco.editor.create(document.getElementById('container'), {
    value: '',
    language: 'plaintext'
});

const myContextKey = editor.createContextKey('myContextKey', 'default');

console.log(myContextKey.get()); // 输出 'default'
```
在这个示例中，我们创建了一个编辑器，并使用 createContextKey 方法创建了一个名为 myContextKey 的上下文键，它的默认值为 'default'。我们通过调用 get 方法来获取当前上下文键的值，输出结果为 'default'。

##  createDecorationsCollection
+ 语法: `createDecorationsCollection(ownerId: number): IDecorationsController`
+ 参数: `ownerId`
+ 返回值: `IDecorationsController`
+ 描述: `创建一个装饰器集合，用于管理编辑器的装饰器信息`

其中，ownerId 参数是一个数字，用来标识装饰器集合的所有者。
下面是一个示例，演示如何使用 createDecorationsCollection 方法创建一个装饰器集合：
```javascript
const editor = monaco.editor.create(document.getElementById('container'), {
    value: '',
    language: 'plaintext'
});

const decorations = editor.createDecorationsCollection(1);

decorations.createDecoration(1, 1, { isWholeLine: true, className: 'my-decoration' });

editor.deltaDecorations([], decorations.getDecorations());
```
在这个示例中，我们创建了一个编辑器，并使用 createDecorationsCollection 方法创建了一个 ownerId 为 1 的装饰器集合。我们通过调用 createDecoration 方法来创建一个装饰器，它的位置为第一行第一列，样式为整行高亮，类名为 my-decoration。最后，我们通过调用 deltaDecorations 方法来将这个装饰器添加到编辑器中。

##  deltaDecorations
+ 语法: `deltaDecorations(oldDecorations: string[], newDecorations: IModelDeltaDecoration[]): string[]`
+ 参数: `oldDecorations, newDecorations`
+ 返回值: `string[]`
+ 描述: `更新编辑器的装饰器信息`

其中，oldDecorations 参数是一个字符串数组，用来表示要被替换或移除的装饰器的 ID；newDecorations 参数是一个 IModelDeltaDecoration 数组，用来表示要添加或更新的装饰器信息。

下面是一个示例，演示如何使用 deltaDecorations 方法更新编辑器的装饰器信息：
```javascript
const editor = monaco.editor.create(document.getElementById('container'), {
    value: '',
    language: 'plaintext'
});

const decorations = editor.createDecorationsCollection(1);

decorations.createDecoration(1, 1, { isWholeLine: true, className: 'my-decoration' });

editor.deltaDecorations([], decorations.getDecorations());

decorations.changeDecoration(decorations.getDecorations()[0].id, { isWholeLine: true, className: 'my-new-decoration' });

editor.deltaDecorations(decorations.getDecorations().map(d => d.id), decorations.getDecorations());
```
在这个示例中，我们创建了一个编辑器，并使用 createDecorationsCollection 方法创建了一个装饰器集合。我们通过调用 createDecoration 方法来创建一个装饰器，它的位置为第一行第一列，样式为整行高亮，类名为 my-decoration。然后，我们通过调用 deltaDecorations 方法将这个装饰器添加到编辑器中。接着，我们通过调用 changeDecoration 方法来修改这个装饰器的样式，将类名改为 my-new-decoration。最后，我们通过调用 deltaDecorations 方法来更新编辑器的装饰器信息。

##  dispose

+ 语法: `dispose(): void`
+ 参数: `-`
+ 返回值: `-`
+ 描述: `释放编辑器占用的资源`

dispose 方法没有参数和返回值。调用该方法会释放编辑器占用的资源，包括 DOM 元素、事件监听器等。一般情况下，当不再需要使用编辑器时，应该调用该方法来释放资源。
示例：
```javascript
const editor = monaco.editor.create(document.getElementById('container'), {
    value: '',
    language: 'plaintext'
});

// do something with the editor

editor.dispose();
```
##  executeCommand

+ 语法: `executeCommand(command: string, args?: any[]): void`
+ 参数: `command`
+ 返回值: `-`
+ 描述: `执行指定的命令`

其中，command 参数是一个字符串，用来表示要执行的命令。args 参数是一个可选的数组，用来传递命令的参数。executeCommand 方法没有返回值。调用该方法会执行指定的命令。
示例：
```javascript
const editor = monaco.editor.create(document.getElementById('container'), {
    value: '',
    language: 'plaintext'
});

editor.executeCommand('editor.action.selectAll');
```
##  executeCommands

+ 语法: `executeCommands(commands: ICommand[], source?: string): void`
+ 参数: `commands`
+ 返回值: `-`
+ 描述: `执行指定的一组命令`

其中，commands 参数是一个数组，用来表示要执行的一组命令。source 参数是一个可选的字符串，用来表示命令的来源。executeCommands 方法没有返回值。调用该方法会执行指定的一组命令。
示例：
```javascript
const editor = monaco.editor.create(document.getElementById('container'), {
    value: '',
    language: 'plaintext'
});

editor.executeCommands([
    {
        id: 'editor.action.selectAll'
    },
    {
        id: 'editor.action.clipboardCopyAction'
    }
]);
```
##  executeEdits

+ 语法: `executeEdits(source: string, edits: IIdentifiedSingleEditOperation[], endCursorState?: Selection[]): boolean`
+ 参数: `source`
+ 返回值: `boolean`
+ 描述: `执行指定的一组编辑操作`

其中，source 参数是一个字符串，用来表示编辑操作的来源。edits 参数是一个数组，用来表示要执行的一组编辑操作。endCursorState 参数是一个可选的数组，用来表示编辑操作执行后的光标状态。executeEdits 方法返回一个布尔值，表示编辑操作是否执行成功。
示例：
```javascript
const editor = monaco.editor.create(document.getElementById('container'), {
    value: 'Hello\nWorld!',
    language: 'plaintext'
});

const edits = [
    {
        range: new monaco.Range(1, 1, 1, 6),
        text: 'Bonjour'
    },
    {
        range: new monaco.Range(2, 1, 2, 6),
        text: 'Monde'
    }
];

const success = editor.executeEdits('my-source', edits);
console.log(success);
```
##  focus

+ 语法: `focus(): void`
+ 参数: `-`
+ 返回值: `-`
+ 描述: `将焦点设置到编辑器上`

focus 方法没有参数和返回值。调用该方法会将焦点设置到编辑器上。
示例：
```javascript
const editor = monaco.editor.create(document.getElementById('container'), {
    value: '',
    language: 'plaintext'
});

// do something with the editor

editor.focus();
```
##  getAction

+ 语法: `getAction(id: string): IAction`
+ 参数: `id`
+ 返回值: `IAction`
+ 描述: `获取指定 ID 的编辑器动作`

其中，id 参数是一个字符串，用来表示要获取的编辑器动作的 ID。返回值是一个 IAction 对象，表示指定 ID 的编辑器动作。
示例：
```javascript
const editor = monaco.editor.create(document.getElementById('container'), {
    value: '',
    language: 'plaintext'
});

editor.addAction({
    id: 'my-action',
    label: 'My Action',
    keybindings: [monaco.KeyCode.KEY_A],
    run: function(editor) {
        console.log('My Action executed!');
    }
});

const action = editor.getAction('my-action');
console.log(action);

```
##  getBottomForLineNumber
+ 语法: `getBottomForLineNumber(lineNumber: number): number`
+ 参数: `lineNumber`
+ 返回值: `number`
+ 描述: `获取指定行的底部位置`

其中，lineNumber 参数是一个数字，用来表示要获取底部位置的行号。返回值是一个数字，表示指定行的底部位置。

示例：
```javascript
const editor = monaco.editor.create(document.getElementById('container'), {
    value: 'Hello\nWorld!',
    language: 'plaintext'
});

const bottom = editor.getBottomForLineNumber(1);
console.log(bottom);

```
##  getContainerDomNode
+ 语法: `getContainerDomNode(): HTMLElement`
+ 参数: `-`
+ 返回值: `HTMLElement`
+ 描述: `获取编辑器的容器元素`
返回值是一个 HTMLElement 对象，表示编辑器的容器元素。

示例：
```javascript
const editor = monaco.editor.create(document.getElementById('container'), {
    value: '',
    language: 'plaintext'
});

const container = editor.getContainerDomNode();
console.log(container);

```
##  getContentHeight
- 语法: `getContentHeight(): number`
- 参数: `-`
- 返回值: `number`
- 描述: `获取编辑器内容的高度`
返回值是一个数字，表示编辑器内容的高度。

示例：
```javascript
const editor = monaco.editor.create(document.getElementById('container'), {
value: '',
language: 'plaintext'
});

const height = editor.getContentHeight();
console.log(height);

```
##  getContentWidth
- 语法: `getContentWidth(): number`
- 参数: `-`
- 返回值: `number`
- 描述: `获取编辑器内容的宽度`
返回值是一个数字，表示编辑器内容的宽度。

示例：
```javascript
const editor = monaco.editor.create(document.getElementById('container'), {
value: '',
language: 'plaintext'
});

const width = editor.getContentWidth();
console.log(width);

```
##  getContribution
- 语法: `getContribution(id: string): any`
- 参数: `id`
- 返回值: `any`
- 描述: `获取指定 ID 的编辑器贡献`
其中，id 参数是一个字符串，用来表示要获取的编辑器贡献的 ID。返回值是一个任意类型的对象，表示指定 ID 的编辑器贡献。

示例：
```javascript
const editor = monaco.editor.create(document.getElementById('container'), {
value: '',
language: 'plaintext'
});

const contribution = editor.getContribution('editor.contrib.folding');
console.log(contribution);

```
##  getDecorationsInRange
- 语法: `getDecorationsInRange(range: IRange): IModelDecoration[]`
- 参数: `range`
- 返回值: `IModelDecoration[]`
- 描述: `获取指定范围内的装饰器`
其中，range 参数是一个 IRange 对象，用来表示要获取装饰器的范围。返回值是一个 IModelDecoration 数组，表示指定范围内的装饰器。

示例：
```javascript
const editor = monaco.editor.create(document.getElementById('container'), {
value: '',
language: 'plaintext'
});

editor.deltaDecorations([], [
    {
        range: new monaco.Range(1, 1, 1, 5),
        options: {
            isWholeLine: true,
            className: 'my-decoration'
        }
    }
]);

const decorations = editor.getDecorationsInRange(new monaco.Range(1, 1, 2, 1));
console.log(decorations);

```
##  getDomNode
- 语法: `getDomNode(): HTMLElement`
- 参数: `-`
- 返回值: `HTMLElement`
- 描述: `获取编辑器的 DOM 元素`
返回值是一个 HTMLElement 对象，表示编辑器的 DOM 元素。

示例：
```javascript
const editor = monaco.editor.create(document.getElementById('container'), {
    value: '',
    language: 'plaintext'
});

const domNode = editor


.getDomNode();
console.log(domNode);

```
##  getEditorType
- 语法: `getEditorType(): string`
- 参数: `-`
- 返回值: `string`
- 描述: `获取编辑器的类型`
返回值是一个字符串，表示编辑器的类型。

示例：
```javascript
const editor = monaco.editor.create(document.getElementById('container'), {
    value: '',
    language: 'plaintext'
});

const type = editor.getEditorType();
console.log(type);

```
##  getId
- 语法: `getId(): string`
- 参数: `-`
- 返回值: `string`
- 描述: `获取编辑器的唯一标识符`
返回值是一个字符串，表示编辑器的唯一标识符。

示例：
```javascript
const editor = monaco.editor.create(document.getElementById('container'), {
    value: '',
    language: 'plaintext'
});

const id = editor.getId();
console.log(id);

```
##  getLayoutInfo
- 语法: `getLayoutInfo(): IEditorLayoutInfo`
- 参数: `-`
- 返回值: `IEditorLayoutInfo`
- 描述: `获取编辑器的布局信息`
返回值是一个 IEditorLayoutInfo 对象，表示编辑器的布局信息。

示例：
```javascript
const editor = monaco.editor.create(document.getElementById('container'), {
    value: '',
    language: 'plaintext'
});

const layoutInfo = editor.getLayoutInfo();
console.log(layoutInfo);

```
##  getLineDecorations
- 语法: `getLineDecorations(lineNumber: number): IModelDecoration[]`
- 参数: `lineNumber`
- 返回值: `IModelDecoration[]`
- 描述: `获取指定行的装饰器`
其中，lineNumber 参数是一个数字，用来表示要获取装饰器的行号。返回值是一个 IModelDecoration 数组，表示指定行的装饰器。

示例：
```javascript
const editor = monaco.editor.create(document.getElementById('container'), {
    value: '',
    language: 'plaintext'
});

editor.deltaDecorations([], [
    {
        range: new monaco.Range(1, 1, 1, 5),
        options: {
            isWholeLine: true,
            className: 'my-decoration'
        }
    }
]);

const decorations = editor.getLineDecorations(1);
console.log(decorations);

```
##  getModel
- 语法: `getModel(): ITextModel`
- 参数: `-`
- 返回值: `ITextModel`
- 描述: `获取编辑器的文本模型`
返回值是一个 ITextModel 对象，表示编辑器的文本模型。

示例：
```javascript
const editor = monaco.editor.create(document.getElementById('container'), {
    value: '',
    language: 'plaintext'
});

const model = editor.getModel();
console.log(model);

```
##  getOffsetForColumn
- 语法: `getOffsetForColumn(lineNumber: number, column: number): number`
- 参数: `lineNumber`
- 返回值: `number`
- 描述: `获取指定行和列的偏移量`
其中，lineNumber 参数是一个数字，用来表示要获取偏移量的行号。column 参数是一个数字，用来表示要获取偏移量的列号。返回值是一个数字，表示指定行和列的偏移量。

示例：
```javascript
const editor = monaco.editor.create(document.getElementById('container'), {
    value: 'Hello\nWorld!',
    language: 'plaintext'
});

const offset = editor.getOffsetForColumn(1, 3);
console.log(offset);

```
##  getOption
- 语法: `getOption(id: string): any`
- 参数: `id`
- 返回值: `any`
- 描述: `获取指定 ID 的编辑器选项`
其中，id 参数是一个字符串，用来表示要获取的编辑器选项的 ID。返回值是一个任意类型的对象，表示指定 ID 的编辑器选项。

示例：
```javascript
const editor = monaco.editor.create(document.getElementById('container'), {
    value: '',
    language: 'plaintext',
    wordWrap: 'on'
});

const option = editor.getOption('wordWrap');
console.log(option);

```
##  getOptions
- 语法: `getOptions(): IEditorOptions`
- 参数: `-`

返回值: `IEditorOptions`
描述: `获取编辑器的所有选项`
返回值是一个 IEditorOptions 对象，表示编辑器的所有选项。
示例：
```javascript
const editor = monaco.editor.create(document.getElementById('container'), {
    value: '',
    language: 'plaintext',
    wordWrap: 'on'
});

const options = editor.getOptions();
console.log(options);
```
##  getPosition

语法: `getPosition(): IPosition`
参数: `-`
返回值: `IPosition`
描述: `获取当前光标位置`
返回值是一个 IPosition 对象，表示当前光标位置。
示例：
```javascript
const editor = monaco.editor.create(document.getElementById('container'), {
    value: '',
    language: 'plaintext'
});

// move the cursor to line 2, column 3
editor.setPosition({ lineNumber: 2, column: 3 });

const position = editor.getPosition();
console.log(position);
```
##  getRawOptions

+ 语法: `getRawOptions(): IEditorOptions`
+ 参数: `-`
+ 返回值: `IEditorOptions`
+ 描述: `获取编辑器的所有选项（包括默认选项）`

 返回值是一个 IEditorOptions 对象，表示编辑器的所有选项（包括默认选项）。
示例：
```javascript
const editor = monaco.editor.create(document.getElementById('container'), {
    value: '',
    language: 'plaintext',
    wordWrap: 'on'
});

const options = editor.getRawOptions();
console.log(options);
```
##  getScrollHeight

+ 语法: `getScrollHeight(): number`
+ 参数: `-`
+ 返回值: `number`
+ 描述: `获取编辑器的滚动高度`

 返回值是一个数字，表示编辑器的滚动高度。
示例：
```javascript
const editor = monaco.editor.create(document.getElementById('container'), {
    value: '',
    language: 'plaintext'
});

const height = editor.getScrollHeight();
console.log(height);
```
##  getScrollLeft

+ 语法: `getScrollLeft(): number`
+ 参数: `-`
+ 返回值: `number`
+ 描述: `获取编辑器的水平滚动位置`

 返回值是一个数字，表示编辑器的水平滚动位置。
示例：
```javascript
const editor = monaco.editor.create(document.getElementById('container'), {
    value: '',
    language: 'plaintext'
});

const scrollLeft = editor.getScrollLeft();
console.log(scrollLeft);
```
##  getScrollTop

+ 语法: `getScrollTop(): number`
+ 参数: `-`
+ 返回值: `number`
+ 描述: `获取编辑器的垂直滚动位置`

 返回值是一个数字，表示编辑器的垂直滚动位置。
示例：
```javascript
const editor = monaco.editor.create(document.getElementById('container'), {
    value: '',
    language: 'plaintext'
});

const scrollTop = editor.getScrollTop();
console.log(scrollTop);
```
##  getScrollWidth

+ 语法: `getScrollWidth(): number`
+ 参数: `-`
+ 返回值: `number`
+ 描述: `获取编辑器的滚动宽度`

 返回值是一个数字，表示编辑器的滚动宽度。
示例：
```javascript
const editor = monaco.editor.create(document.getElementById('container'), {
    value: '',
    language: 'plaintext'
});

const width = editor.getScrollWidth();
console.log(width);
```
##  getScrolledVisiblePosition

+ 语法: `getScrolledVisiblePosition(position: IPosition): { top: number, left: number, height: number }`
+ 参数: `position`
+ 返回值: `{ top: number, left: number, height: number }`
+ 描述: `获取指定位置在编辑器中可见的位置信息`

其中，position 参数是一个 IPosition 对象，表示要获取可见位置信息的位置。返回值是一个对象，包含以下属性：

+ top：指定位置在编辑器中的垂直位置。
+ left：指定位置在编辑器中的水平位置。
+ height：指定位置在编辑器中的高度。
  
下面是一个示例，演示如何获取指定位置在编辑器中可见的位置信息：
```javascript
const editor = monaco.editor.create(document.getElementById('container'), {
    value: 'Hello\nWorld!',
    language: 'plaintext'
});

const position = { lineNumber: 2, column: 3 };
const visiblePosition = editor.getScrolledVisiblePosition(position);
console.log(visiblePosition);
```
在这个示例中，我们创建了一个编辑器，并获取了第二行第三列的位置在编辑器中可见的位置信息。

##  getSelection

+ 语法: `getSelection(): Selection`
+ 参数: `-`
+ 返回值: `Selection`
+ 描述: `获取当前选中文本的范围和方向`

 返回值是一个 Selection 对象，表示当前选中文本的范围和方向。
示例：
```javascript
const editor = monaco.editor.create(document.getElementById('container'), {
    value: 'Hello\nWorld!',
    language: 'plaintext'
});

// select the text "World!"
editor.setSelection(new monaco.Range(2, 1, 2, 6));

const selection = editor.getSelection();
console.log(selection);
```
##  getSelections

+ 语法: `getSelections(): Selection[]`
+ 参数: `-`
+ 返回值: `Selection[]`
+ 描述: `获取当前所有选中文本的范围和方向`

 返回值是一个 Selection 数组，表示当前所有选中文本的范围和方向。
示例：
```javascript
const editor = monaco.editor.create(document.getElementById('container'), {
    value: 'Hello\nWorld!',
    language: 'plaintext'
});

// select the text "Hello" and "World!"
editor.setSelections([
    new monaco.Selection(1, 1, 1, 6),
    new monaco.Selection(2, 1, 2, 6)
]);

const selections = editor.getSelections();
console.log(selections);
```
##  getSupportedActions

+ 语法: `getSupportedActions(): string[]`
+ 参数: `-`
+ 返回值: `string[]`
+ 描述: `获取编辑器支持的所有操作的名称`

 返回值是一个字符串数组，表示编辑器支持的所有操作的名称。
示例：
```javascript
const editor = monaco.editor.create(document.getElementById('container'), {
    value: '',
    language: 'plaintext'
});

const actions = editor.getSupportedActions();
console.log(actions);
```
##  getTargetAtClientPoint

+ 语法: `getTargetAtClientPoint(clientX: number, clientY: number): IEditorMouseEventTarget | null`
+ 参数: `clientX, clientY`
+ 返回值: `IEditorMouseEventTarget | null`
+ 描述: `获取指定客户端坐标下的编辑器元素`

其中，clientX 和 clientY 参数是数字，表示要获取元素的客户端坐标。返回值是一个 IEditorMouseEventTarget 对象或 null，表示指定坐标下的编辑器元素。
示例：
```javascript
const editor = monaco.editor.create(document.getElementById('container'), {
    value: '',
    language: 'plaintext'
});

const target = editor.getTargetAtClientPoint(10, 10);
console.log(target);
```
##  getTopForLineNumber

+ 语法: `getTopForLineNumber(lineNumber: number): number`
+ 参数: `lineNumber`
+ 返回值: `number`
+ 描述: `获取指定行号的顶部位置`

其中，lineNumber 参数是一个数字，表示要获取顶部位置的行号。返回值是一个数字，表示指定行号的顶部位置。
示例：
```javascript
const editor = monaco.editor.create(document.getElementById('container'), {
    value: 'Hello\nWorld!',
    language: 'plaintext'
});

const top = editor.getTopForLineNumber(2);
console.log(top);
```
##  getTopForPosition

+ 语法: `getTopForPosition(position: IPosition): number`
+ 参数: `position`
+ 返回值: `number`
+ 描述: `获取指定位置的顶部位置`

其中，position 参数是一个 IPosition 对象，表示要获取顶部位置的位置。返回值是一个数字，表示指定位置的顶部位置。
示例：
```javascript
const editor = monaco.editor.create(document.getElementById('container'), {
    value: 'Hello\nWorld!',
    language: 'plaintext'
});

const position = { lineNumber: 2, column: 3 };
const top = editor.getTopForPosition(position);
console.log(top);
```
##  getValue

+ 语法: `getValue(): string`
+ 参数: `-`
+ 返回值: `string`
+ 描述: `获取编辑器的文本内容`

 返回值是一个字符串，表示编辑器的文本内容。
示例：
```javascript
const editor = monaco.editor.create(document.getElementById('container'), {
    value: 'Hello, world!',
    language: 'plaintext'
});

const value = editor.getValue();
console.log(value);
```
##  getVisibleColumnFromPosition

+ 语法: `getVisibleColumnFromPosition(position: IPosition): number`
+ 参数: `position`
+ 返回值: `number`
+ 描述: `获取指定位置在编辑器中可见的列数`
  
其中，position 参数是一个 IPosition 对象，表示要获取可见列数的位置。返回值是一个数字，表示指定位置在编辑器中可见的列数。
示例：
```javascript
const editor = monaco.editor.create(document.getElementById('container'), {
    value: 'Hello, world!',
    language: 'plaintext'
});

const position = { lineNumber: 1, column: 8 };
const visibleColumn = editor.getVisibleColumnFromPosition(position);
console.log(visibleColumn);
```
##  getVisibleRanges

+ 语法: `getVisibleRanges(): Range[]`
+ 参数: `-`
+ 返回值: `Range[]`
+ 描述: `获取编辑器中可见的文本范围`

 返回值是一个 Range 数组，表示编辑器中可见的文本范围。
示例：
```javascript
const editor = monaco.editor.create(document.getElementById('container'), {
    value: 'Hello, world!',
    language: 'plaintext'
});

const ranges = editor.getVisibleRanges();
console.log(ranges);
```
##  hasTextFocus

+ 语法: `hasTextFocus(): boolean`
+ 参数: `-`
+ 返回值: `boolean`
+ 描述: `判断编辑器是否拥有文本焦点`

 返回值是一个布尔值，表示编辑器是否拥有文本焦点。
示例：
```javascript
const editor = monaco.editor.create(document.getElementById('container'), {
    value: 'Hello, world!',
    language: 'plaintext'
});

const hasFocus = editor.hasTextFocus();
console.log(hasFocus);
```
##  hasWidgetFocus

+ 语法: `hasWidgetFocus(): boolean`
+ 参数: `-`
+ 返回值: `boolean`
+ 描述: `判断编辑器是否拥有小部件焦点`

 返回值是一个布尔值，表示编辑器是否拥有小部件焦点。
示例：
```javascript
const editor = monaco.editor.create(document.getElementById('container'), {
    value: 'Hello, world!',
    language: 'plaintext'
});

const hasFocus = editor.hasWidgetFocus();
console.log(hasFocus);
```
##  layout

+ 语法: `layout(dimension?: IDimension): void`
+ 参数: `dimension`
+ 返回值: `-`
+ 描述: `重新布局编辑器`
  
其中，dimension 参数是一个 IDimension 对象，表示编辑器的尺寸。如果省略该参数，则使用编辑器容器的尺寸。
示例：
```javascript
const editor = monaco.editor.create(document.getElementById('container'), {
    value: 'Hello, world!',
    language: 'plaintext'
});

editor.layout();
```
##  layoutContentWidget

+ 语法: `layoutContentWidget(widget: IContentWidget): void`
+ 参数: `widget`
+ 返回值: `-`
+ 描述: `重新布局指定的内容小部件`
  
其中，widget 参数是一个 IContentWidget 对象，表示要重新布局的内容小部件。
示例：
```javascript
const editor = monaco.editor.create(document.getElementById('container'), {
    value: 'Hello, world!',
    language: 'plaintext'
});

const widget = {
    getId: function() { return 'my-content-widget'; },
    getDomNode: function() { return document.getElementById('my-content-widget'); },
    getPosition: function() { return { position: { lineNumber: 1, column: 1 }, preference: [monaco.editor.ContentWidgetPositionPreference.ABOVE, monaco.editor.ContentWidgetPositionPreference.BELOW] }; }
};

editor.addContentWidget(widget);
editor.layoutContentWidget(widget);
```
##  layoutOverlayWidget

+ 语法: `layoutOverlayWidget(widget: IOverlayWidget): void`
+ 参数: `widget`
+ 返回值: `-`
+ 描述: `重新布局指定的覆盖小部件`
  
其中，widget 参数是一个 IOverlayWidget 对象，表示要重新布局的覆盖小部件。
示例：
```javascript
const editor = monaco.editor.create(document.getElementById('container'), {
    value: 'Hello, world!',
    language: 'plaintext'
});

const widget = {
    getId: function() { return 'my-overlay-widget'; },
    getDomNode: function() { return document.getElementById('my-overlay-widget'); },
    getPosition: function() { return { preference: [monaco.editor.OverlayWidgetPositionPreference.TOP_RIGHT_CORNER] }; }
};

editor.addOverlayWidget(widget);
editor.layoutOverlayWidget(widget);
```
##  onDidDispose

+ 语法: `onDidDispose(listener: () => void): IDisposable`
+ 参数: `listener`
+ 返回值: `IDisposable`
+ 描述: `注册一个当编辑器被销毁时触发的回调函数`
  
其中，listener 参数是一个函数，表示当编辑器被销毁时要执行的回调函数。返回值是一个 IDisposable 对象，表示注册的回调函数。
示例：
```javascript
const editor = monaco.editor.create(document.getElementById('container'), {
    value: 'Hello, world!',
    language: 'plaintext'
});

const disposable = editor.onDidDispose(function() {
    console.log('Editor disposed!');
});

// Dispose the editor
editor.dispose();

// Dispose the listener
disposable.dispose();
```
##  popUndoStop

+ 语法: `popUndoStop(): void`
+ 参数: `-`
+ 返回值: `-`
+ 描述: `弹出一个撤销操作的栈帧`
  
该方法会弹出一个撤销操作的栈帧，使得之前的操作可以一起撤销。
示例：
```javascript
const editor = monaco.editor.create(document.getElementById('container'), {
    value: 'Hello, world!',
    language: 'plaintext'
});

editor.pushUndoStop();
// Do some editing
editor.popUndoStop();
```
##  pushUndoStop

+ 语法: `pushUndoStop(): void`
+ 参数: `-`
+ 返回值: `-`
+ 描述: `推入一个撤销操作的栈帧`
  
该方法会推入一个撤销操作的栈帧，使得之后的操作可以一起撤销。
示例：
```javascript
const editor = monaco.editor.create(document.getElementById('container'), {
    value: 'Hello, world!',
    language: 'plaintext'
});

editor.pushUndoStop();
// Do some editing
editor.popUndoStop();
```
##  removeContentWidget

+ 语法: `removeContentWidget(widget: IContentWidget): void`
+ 参数: `widget`
+ 返回值: `-`
+ 描述: `从编辑器中移除指定的内容小部件`
  
其中，widget 参数是一个 IContentWidget 对象，表示要移除的内容小部件。
示例：
```javascript
const editor = monaco.editor.create(document.getElementById('container'), {
    value: 'Hello, world!',
    language: 'plaintext'
});

const widget = {
    getId: function() { return 'my-content-widget'; },
    getDomNode: function() { return document.getElementById('my-content-widget'); },
    getPosition: function() { return { position: { lineNumber: 1, column: 1 }, preference: [monaco.editor.ContentWidgetPositionPreference.ABOVE, monaco.editor.ContentWidgetPositionPreference.BELOW] }; }
};

editor.addContentWidget(widget);
editor.removeContentWidget(widget);
```
##  removeDecorations

+ 语法: `removeDecorations(decorationType: string): void`
+ 参数: `decorationType`
+ 返回值: `-`
+ 描述: `从编辑器中移除指定类型的装饰`
  
其中，decorationType 参数是一个字符串，表示要移除的装饰的类型。
示例：
```javascript
const editor = monaco.editor.create(document.getElementById('container'), {
    value: 'Hello, world!',
    language: 'plaintext'
});

const decorations = editor.deltaDecorations([], [
    { range: new monaco.Range(1, 1, 1, 5), options: { isWholeLine: true, className: 'my-decoration' } }
]);

editor.removeDecorations('my-decoration');
```
##  removeOverlayWidget

+ 语法: `removeOverlayWidget(widget: IOverlayWidget): void`
+ 参数: `widget`
+ 返回值: `-`
+ 描述: `从编辑器中移除指定的覆盖小部件`
  
其中，widget 参数是一个 IOverlayWidget 对象，表示要移除的覆盖小部件。
示例：
```javascript
const editor = monaco.editor.create(document.getElementById('container'), {
    value: 'Hello, world!',
    language: 'plaintext'
});

const widget = {
    getId: function() { return 'my-overlay-widget'; },
    getDomNode: function() { return document.getElementById('my-overlay-widget'); },
    getPosition: function() { return { preference: [monaco.editor.OverlayWidgetPositionPreference.TOP_RIGHT_CORNER] }; }
};

editor.addOverlayWidget(widget);
editor.removeOverlayWidget(widget);
```
##  render

+ 语法: `render(): void`
+ 参数: `-`
+ 返回值: `-`
+ 描述: `重新渲染编辑器`
  
该方法会重新渲染编辑器，以便更新编辑器中的内容。
示例：
```javascript
const editor = monaco.editor.create(document.getElementById('container'), {
    value: 'Hello, world!',
    language: 'plaintext'
});

// Do some editing
editor.render();
```
##  restoreViewState

+ 语法: `restoreViewState(state: ICodeEditorViewState): void`
+ 参数: `state`
+ 返回值: `-`
+ 描述: `恢复编辑器的视图状态`

其中，state 参数是一个 ICodeEditorViewState 对象，表示要恢复的视图状态。
示例：
```javascript
const editor = monaco.editor.create(document.getElementById('container'), {
    value: 'Hello, world!',
    language: 'plaintext'
});

const state = editor.saveViewState();
// Do some editing
editor.restoreViewState(state);
```
##  revealLine

+ 语法: `revealLine(lineNumber: number, scrollType?: ScrollType): void`
+ 参数: `lineNumber, scrollType`
+ 返回值: `-`
+ 描述: `滚动编辑器以便使指定行可见`

其中，lineNumber 参数是一个数字，表示要滚动到的行号；scrollType 参数是一个 ScrollType 枚举值，表示滚动的类型。如果省略该参数，则默认为 ScrollType.Smooth。
示例：
```javascript
const editor = monaco.editor.create(document.getElementById('container'), {
    value: 'Hello, world!\nHow are you?',
    language: 'plaintext'
});

editor.revealLine(2);
```
##  revealLineInCenter

+ 语法: `revealLineInCenter(lineNumber: number, scrollType?: ScrollType): void`
+ 参数: `lineNumber, scrollType`
+ 返回值: `-`
+ 描述: `滚动编辑器以便使指定行在编辑器中垂直居中显示`

其中，lineNumber 参数是一个数字，表示要滚动到的行号；scrollType 参数是一个 ScrollType 枚举值，表示滚动的类型。如果省略该参数，则默认为 ScrollType.Smooth。
示例：
```javascript
const editor = monaco.editor.create(document.getElementById('container'), {
    value: 'Hello, world!\nHow are you?',
    language: 'plaintext'
});

editor.revealLineInCenter(2);
```
##  revealLineInCenterIfOutsideViewport

+ 语法: `revealLineInCenterIfOutsideViewport(lineNumber: number, scrollType?: ScrollType): void`
+ 参数: `lineNumber, scrollType`
+ 返回值: `-`
+ 描述: `滚动编辑器以便使指定行在编辑器中垂直居中显示，但仅当该行不在视口中时才滚动`

其中，lineNumber 参数是一个数字，表示要滚动到的行号；scrollType 参数是一个 ScrollType 枚举值，表示滚动的类型。如果省略该参数，则默认为 ScrollType.Smooth。
示例：
```javascript
const editor = monaco.editor.create(document.getElementById('container'), {
    value: 'Hello, world!\nHow are you?',
    language: 'plaintext'
});

editor.revealLineInCenterIfOutsideViewport(2);
```
##  revealLineNearTop

+ 语法: `revealLineNearTop(lineNumber: number, scrollType?: ScrollType): void`
+ 参数: `lineNumber, scrollType`
+ 返回值: `-`
+ 描述: `滚动编辑器以便使指定行在编辑器中靠近顶部显示`

其中，lineNumber 参数是一个数字，表示要滚动到的行号；scrollType 参数是一个 ScrollType 枚举值，表示滚动的类型。如果省略该参数，则默认为 ScrollType.Smooth。
示例：
```javascript
const editor = monaco.editor.create(document.getElementById('container'), {
    value: 'Hello, world!\nHow are you?',
    language: 'plaintext'
});

editor.revealLineNearTop(2);
```
##  revealLines

+ 语法: `revealLines(startLineNumber: number, endLineNumber: number, scrollType?: ScrollType): void`
+ 参数: `startLineNumber, endLineNumber, scrollType`
+ 返回值: `-`
+ 描述: `滚动编辑器以便使指定行范围可见`

其中，startLineNumber 和 endLineNumber 参数是数字，表示要滚动到的行号范围；scrollType 参数是一个 ScrollType 枚举值，表示滚动的类型。如果省略该参数，则默认为 ScrollType.Smooth。
示例：
```javascript
const editor = monaco.editor.create(document.getElementById('container'), {
    value: 'Hello, world!\nHow are you?\nI am fine, thank you!',
    language: 'plaintext'
});

editor.revealLines(2, 3);
```
##  revealLinesInCenter

+ 语法: `revealLinesInCenter(startLineNumber: number, endLineNumber: number, scrollType?: ScrollType): void`
+ 参数: `startLineNumber, endLineNumber, scrollType`
+ 返回值: `-`
+ 描述: `滚动编辑器以便使指定行范围在编辑器中垂直居中显示`

其中，startLineNumber 和 endLineNumber 参数是数字，表示要滚动到的行号范围；scrollType 参数是一个 ScrollType 枚举值，表示滚动的类型。如果省略该参数，则默认为 ScrollType.Smooth。
示例：
```javascript
const editor = monaco.editor.create(document.getElementById('container'), {
    value: 'Hello, world!\nHow are you?\nI am fine, thank you!',
    language: 'plaintext'
});

editor.revealLinesInCenter(2, 3);
```
##  revealLinesInCenterIfOutsideViewport

+ 语法: `revealLinesInCenterIfOutsideViewport(startLineNumber: number, endLineNumber: number, scrollType?: ScrollType): void`
+ 参数: `startLineNumber, endLineNumber, scrollType`
+ 返回值: `-`
+ 描述: `滚动编辑器以便使指定行范围在编辑器中垂直居中显示，但仅当该范围不在视口中时才滚动`

其中，startLineNumber 和 endLineNumber 参数是数字，表示要滚动到的行号范围；scrollType 参数是一个 ScrollType 枚举值，表示滚动的类型。如果省略该参数，则默认为 ScrollType.Smooth。
示例：
```javascript
const editor = monaco.editor.create(document.getElementById('container'), {
    value: 'Hello, world!\nHow are you?\nI am fine, thank you!',
    language: 'plaintext'
});

editor.revealLinesInCenterIfOutsideViewport(2, 3);
```
##  revealLinesNearTop

+ 语法: `revealLinesNearTop(startLineNumber: number, endLineNumber: number, scrollType?: ScrollType): void`
+ 参数: `startLineNumber, endLineNumber, scrollType`
+ 返回值: `-`
+ 描述: `滚动编辑器以便使指定行范围在编辑器中靠近顶部显示`

其中，startLineNumber 和 endLineNumber 参数是数字，表示要滚动到的行号范围；scrollType 参数是一个 ScrollType 枚举值，表示滚动的类型。如果省略该参数，则默认为 ScrollType.Smooth。
示例：
```javascript
const editor = monaco.editor.create(document.getElementById('container'), {
    value: 'Hello, world!\nHow are you?\nI am fine, thank you!',
    language: 'plaintext'
});

editor.revealLinesNearTop(2, 3);
```
##  revealPosition

+ 语法: `revealPosition(position: IPosition, scrollType?: ScrollType): void`
+ 参数: `position, scrollType`
+ 返回值: `-`
+ 描述: `滚动编辑器以便使指定位置可见`

其中，position 参数是一个 IPosition 对象，表示要滚动到的位置；scrollType 参数是一个 ScrollType 枚举值，表示滚动的类型。如果省略该参数，则默认为 ScrollType.Smooth。
示例：
```javascript
const editor = monaco.editor.create(document.getElementById('container'), {
    value: 'Hello, world!',
    language: 'plaintext'
});

editor.revealPosition({ lineNumber: 1, column: 6 });
```
##  revealPositionInCenter

+ 语法: `revealPositionInCenter(position: IPosition, scrollType?: ScrollType): void`
+ 参数: `position, scrollType`
+ 返回值: `-`
+ 描述: `滚动编辑器以便使指定位置在编辑器中垂直居中显示`

其中，position 参数是一个 IPosition 对象，表示要滚动到的位置；scrollType 参数是一个 ScrollType 枚举值，表示滚动的类型。如果省略该参数，则默认为 ScrollType.Smooth。
示例：
```javascript
const editor = monaco.editor.create(document.getElementById('container'), {
    value: 'Hello, world!',
    language: 'plaintext'
});

editor.revealPositionInCenter({ lineNumber: 1, column: 6 });
```
##  revealLinesInCenterIfOutsideViewport

+ 语法: `revealLinesInCenterIfOutsideViewport(startLineNumber: number, endLineNumber: number, scrollType?: ScrollType): void`
+ 参数: `startLineNumber, endLineNumber, scrollType`
+ 返回值: `-`
+ 描述: `滚动编辑器以便使指定行范围在编辑器中垂直居中显示，但仅当该范围不在视口中时才滚动`

其中，startLineNumber 和 endLineNumber 参数是数字，表示要滚动到的行号范围；scrollType 参数是一个 ScrollType 枚举值，表示滚动的类型。如果省略该参数，则默认为 ScrollType.Smooth。
示例：
```javascript
const editor = monaco.editor.create(document.getElementById('container'), {
    value: 'Hello, world!\nHow are you?\nI am fine, thank you!',
    language: 'plaintext'
});

editor.revealLinesInCenterIfOutsideViewport(2, 3);
```
##  revealLinesNearTop

+ 语法: `revealLinesNearTop(startLineNumber: number, endLineNumber: number, scrollType?: ScrollType): void`
+ 参数: `startLineNumber, endLineNumber, scrollType`
+ 返回值: `-`
+ 描述: `滚动编辑器以便使指定行范围在编辑器中靠近顶部显示`

其中，startLineNumber 和 endLineNumber 参数是数字，表示要滚动到的行号范围；scrollType 参数是一个 ScrollType 枚举值，表示滚动的类型。如果省略该参数，则默认为 ScrollType.Smooth。
示例：
```javascript
const editor = monaco.editor.create(document.getElementById('container'), {
    value: 'Hello, world!\nHow are you?\nI am fine, thank you!',
    language: 'plaintext'
});

editor.revealLinesNearTop(2, 3);
```
##  revealPosition

+ 语法: `revealPosition(position: IPosition, scrollType?: ScrollType): void`
+ 参数: `position, scrollType`
+ 返回值: `-`
+ 描述: `滚动编辑器以便使指定位置可见`

其中，position 参数是一个 IPosition 对象，表示要滚动到的位置；scrollType 参数是一个 ScrollType 枚举值，表示滚动的类型。如果省略该参数，则默认为 ScrollType.Smooth。
示例：
```javascript
const editor = monaco.editor.create(document.getElementById('container'), {
    value: 'Hello, world!',
    language: 'plaintext'
});

editor.revealPosition({ lineNumber: 1, column: 6 });
```
##  revealPositionInCenter

+ 语法: `revealPositionInCenter(position: IPosition, scrollType?: ScrollType): void`
+ 参数: `position, scrollType`
+ 返回值: `-`
+ 描述: `滚动编辑器以便使指定位置在编辑器中垂直居中显示`

其中，position 参数是一个 IPosition 对象，表示要滚动到的位置；scrollType 参数是一个 ScrollType 枚举值，表示滚动的类型。如果省略该参数，则默认为 ScrollType.Smooth。
示例：
```javascript
const editor = monaco.editor.create(document.getElementById('container'), {
    value: 'Hello, world!',
    language: 'plaintext'
});

editor.revealPositionInCenter({ lineNumber: 1, column: 6 });
```
##  revealPositionInCenterIfOutsideViewport

+ 语法: `revealPositionInCenterIfOutsideViewport(position: IPosition, scrollType?: ScrollType): void`
+ 参数: `position, scrollType`
+ 返回值: `-`
+ 描述: `滚动编辑器以便使指定位置在编辑器中垂直居中显示，但仅当该位置不在视口中时才滚动`

其中，position 参数是一个 IPosition 对象，表示要滚动到的位置；scrollType 参数是一个 ScrollType 枚举值，表示滚动的类型。如果省略该参数，则默认为 ScrollType.Smooth。
示例：
```javascript
const editor = monaco.editor.create(document.getElementById('container'), {
    value: 'Hello, world!',
    language: 'plaintext'
});

editor.revealPositionInCenterIfOutsideViewport({ lineNumber: 1, column: 6 });

```
##  revealPositionNearTop
- 语法: `revealPositionNearTop(position: IPosition, scrollType?: ScrollType): void`
- 参数: `position, scrollType`
- 返回值: `-`
- 描述: `滚动编辑器以便使指定位置在编辑器中靠近顶部显示`

其中，position 参数是一个 IPosition 对象，表示要滚动到的位置；scrollType 参数是一个 ScrollType 枚举值，表示滚动的类型。如果省略该参数，则默认为 ScrollType.Smooth。

示例：
```javascript
const editor = monaco.editor.create(document.getElementById('container'), {
value: 'Hello, world!',
language: 'plaintext'
});

editor.revealPositionNearTop({ lineNumber: 1, column: 6 });

```
##  revealRange
- 语法: `revealRange(range: IRange, scrollType?: ScrollType): void`
- 参数: `range, scrollType`
- 返回值: `-`
- 描述: `滚动编辑器以便使指定范围可见`

其中，range 参数是一个 IRange 对象，表示要滚动到的范围；scrollType 参数是一个 ScrollType 枚举值，表示滚动的类型。如果省略该参数，则默认为 ScrollType.Smooth。

示例：
```javascript
const editor = monaco.editor.create(document.getElementById('container'), {
value: 'Hello, world!\nHow are you?\nI am fine, thank you!',
language: 'plaintext'
});

editor.revealRange({ startLineNumber: 2, startColumn: 1, endLineNumber: 3, endColumn: 5 });

```
##  revealRangeAtTop
- 语法: `revealRangeAtTop(range: IRange, scrollType?: ScrollType): void`
- 参数: `range, scrollType`
- 返回值: `-`
- 描述: `滚动编辑器以便使指定范围在编辑器中靠近顶部显示`

其中，range 参数是一个 IRange 对象，表示要滚动到的范围；scrollType 参数是一个 ScrollType 枚举值，表示滚动的类型。如果省略该参数，则默认为 ScrollType.Smooth。

示例：
```javascript
const editor = monaco.editor.create(document.getElementById('container'), {
value: 'Hello, world!\nHow are you?\nI am fine, thank you!',
language: 'plaintext'
});

editor.revealRangeAtTop({ startLineNumber: 2, startColumn: 1, endLineNumber: 3, endColumn: 5 });

```
##  revealRangeInCenter
- 语法: `revealRangeInCenter(range: IRange, scrollType?: ScrollType): void`
- 参数: `range, scrollType`
- 返回值: `-`
- 描述: `滚动编辑器以便使指定范围在编辑器中垂直居中显示`

其中，range 参数是一个 IRange 对象，表示要滚动到的范围；scrollType 参数是一个 ScrollType 枚举值，表示滚动的类型。如果省略该参数，则默认为 ScrollType.Smooth。

示例：
```javascript
const editor = monaco.editor.create(document.getElementById('container'), {
value: 'Hello, world!\nHow are you?\nI am fine, thank you!',
language: 'plaintext'
});

editor.revealRangeInCenter({ startLineNumber: 2, startColumn: 1, endLineNumber: 3, endColumn: 5 });

```
##  revealRangeInCenterIfOutsideViewport
- 语法: `revealRangeInCenterIfOutsideViewport(range: IRange, scrollType?: ScrollType): void`
- 参数: `range, scrollType`
- 返回值: `-`
- 描述: `滚动编辑器以便使指定范围在编辑器中垂直居中显示，但仅当该范围不在视口中时才滚动`

其中，range 参数是一个 IRange 对象，表示要滚动到的范围；scrollType 参数是一个 ScrollType 枚举值，表示滚动的类型


。如果省略该参数，则默认为 ScrollType.Smooth。

示例：
```javascript
const editor = monaco.editor.create(document.getElementById('container'), {
    value: 'Hello, world!\nHow are you?\nI am fine, thank you!',
    language: 'plaintext'
});

editor.revealRangeInCenterIfOutsideViewport({ startLineNumber: 2, startColumn: 1, endLineNumber: 3, endColumn: 5 });
```
##  revealRangeNearTop

+ 语法: `revealRangeNearTop(range: IRange, scrollType?: ScrollType): void`
+ 参数: `range, scrollType`
+ 返回值: `-`
+ 描述: `滚动编辑器以便使指定范围在编辑器中靠近顶部显示`

其中，range 参数是一个 IRange 对象，表示要滚动到的范围；scrollType 参数是一个 ScrollType 枚举值，表示滚动的类型。如果省略该参数，则默认为 ScrollType.Smooth。
示例：
```javascript
const editor = monaco.editor.create(document.getElementById('container'), {
    value: 'Hello, world!\nHow are you?\nI am fine, thank you!',
    language: 'plaintext'
});

editor.revealRangeNearTop({ startLineNumber: 2, startColumn: 1, endLineNumber: 3, endColumn: 5 });
```
##  revealRangeNearTopIfOutsideViewport

+ 语法: `revealRangeNearTopIfOutsideViewport(range: IRange, scrollType?: ScrollType): void`
+ 参数: `range, scrollType`
+ 返回值: `-`
+ 描述: `滚动编辑器以便使指定范围在编辑器中靠近顶部显示，但仅当该范围不在视口中时才滚动`

其中，range 参数是一个 IRange 对象，表示要滚动到的范围；scrollType 参数是一个 ScrollType 枚举值，表示滚动的类型。如果省略该参数，则默认为 ScrollType.Smooth。
示例：
```javascript
const editor = monaco.editor.create(document.getElementById('container'), {
    value: 'Hello, world!\nHow are you?\nI am fine, thank you!',
    language: 'plaintext'
});

editor.revealRangeNearTopIfOutsideViewport({ startLineNumber: 2, startColumn: 1, endLineNumber: 3, endColumn: 5 });
```
##  saveViewState

+ 语法: `saveViewState(): ICodeEditorViewState | null`
+ 参数: `-`
+ 返回值: `ICodeEditorViewState | null`
+ 描述: `保存编辑器的视图状态，以便在以后恢复`
如果编辑器当前没有焦点，则返回 null。
示例：
```javascript
const editor = monaco.editor.create(document.getElementById('container'), {
    value: 'Hello, world!',
    language: 'plaintext'
});

const viewState = editor.saveViewState();
```
##  setBanner

+ 语法: `setBanner(banner: IBanner): IDisposable`
+ 参数: `banner`
+ 返回值: `IDisposable`
+ 描述: `设置编辑器的横幅（Banner）`

其中，banner 参数是一个 IBanner 对象，用来描述要设置的横幅。它包含以下属性：

+ text：横幅的文本内容。
+ backgroundColor：横幅的背景颜色。
+ color：横幅的文本颜色。
+ actions：横幅的操作按钮，是一个数组，每个元素都是一个 IAction 对象。
  
setBanner 方法返回一个 IDisposable 对象，用来取消设置的横幅。
示例：
```javascript
const editor = monaco.editor.create(document.getElementById('container'), {
    value: '',
    language: 'plaintext'
});

const banner = {
    text: 'This is a banner',
    backgroundColor: '#ff0000',
    color: '#ffffff',
    actions: [
        {
            id: 'banner-action',
            label: 'Close',
            run: () => {
                disposable.dispose();
            }
        }
    ]
};

const disposable = editor.setBanner(banner);
```
##  setModel

+ 语法: `setModel(model: ITextModel): void`
+ 参数: `model`
+ 返回值: `-`
+ 描述: `设置编辑器的文本模型`

其中，model 参数是一个 ITextModel 对象，表示要设置的文本模型。
示例：
```javascript
const editor = monaco.editor.create(document.getElementById('container'), {
    value: '',
    language: 'plaintext'
});

const model = monaco.editor.createModel('Hello, world!', 'plaintext');
editor.setModel(model);
```
##  setPosition

+ 语法: `setPosition(position: IPosition): void`
+ 参数: `position`
+ 返回值: `-`
+ 描述: `设置编辑器的光标位置`

其中，position 参数是一个 IPosition 对象，表示要设置的光标位置。
示例：
```javascript
const editor = monaco.editor.create(document.getElementById('container'), {
    value: 'Hello, world!',
    language: 'plaintext'
});

editor.setPosition({ lineNumber: 1, column: 6 });
```
##  setScrollPosition

+ 语法: `setScrollPosition(position: INewScrollPosition): void`
+ 参数: `position`
+ 返回值: `-`
+ 描述: `设置编辑器的滚动位置`

其中，position 参数是一个 INewScrollPosition 对象，表示要设置的滚动位置。它包含以下属性：

+ scrollTop：滚动条的垂直位置。
+ scrollLeft：滚动条的水平位置。
+ scrollWidth：滚动条的宽度。
+ scrollHeight：滚动条的高度。
  
示例：
```javascript
const editor = monaco.editor.create(document.getElementById('container'), {
    value: 'Hello, world!',
    language: 'plaintext'
});

editor.setScrollPosition({ scrollTop: 100, scrollLeft: 50 });
```
##  setSelection

+ 语法: `setSelection(selection: ISelection): void`
+ 参数: `selection`
+ 返回值: `-`
+ 描述: `设置编辑器的选区`

其中，selection 参数是一个 ISelection 对象，表示要设置的选区。
示例：
```javascript
const editor = monaco.editor.create(document.getElementById('container'), {
    value: 'Hello, world!',
    language: 'plaintext'
});

editor.setSelection({ startLineNumber: 1, startColumn: 1, endLineNumber: 1, endColumn: 5 });
```
##  trigger

+ 语法: `trigger(source: string, handlerId: string, payload?: any): void`
+ 参数: `source, handlerId, payload`
+ 返回值: `-`
+ 描述: `触发编辑器的命令处理器`
::: tip 如果版本是0.30的请用以下方式触发
editor.getAction(handlerId : string | array)._run() 
```javascript
editor.getAction('editor.action.formatDocument')._run() 
```
:::
其中，source 参数是一个字符串，表示命令的来源；handlerId 参数是一个字符串，表示要触发的命令处理器的 ID；payload 参数是一个任意类型的值，表示要传递给命令处理器的数据。
示例：
```javascript
const editor = monaco.editor.create(document.getElementById('container'), {
    value: 'Hello, world!',
    language: 'plaintext'
});

editor.trigger('my-source', 'my-handler', { data: 'Hello' });
```
##  updateOptions

+ 语法: `updateOptions(newOptions: IEditorOptions): void`
+ 参数: `newOptions`
+ 返回值: `-`
+ 描述: `更新编辑器的选项`

其中，newOptions 参数是一个 IEditorOptions 对象，表示要更新的选项。
示例：
```javascript
const editor = monaco.editor.create(document.getElementById('container'), {
    value: 'Hello, world!',
    language: 'plaintext'
});

editor.updateOptions({ readOnly: true });
```
##  writeScreenReaderContent

+ 语法: `writeScreenReaderContent(content: string): IDisposable`
+ 参数: `content`
+ 返回值: `IDisposable`
+ 描述: `向编辑器的屏幕阅读器输出内容`

其中，content 参数是一个字符串，表示要输出的内容。writeScreenReaderContent 方法返回一个 IDisposable 对象，用来取消输出的内容。
示例：
```javascript
const editor = monaco.editor.create(document.getElementById('container'), {
    value: '',
    language: 'plaintext'
});

const disposable = editor.writeScreenReaderContent('This is a message for screen readers');

