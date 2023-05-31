# 编辑器的方法
编辑器的方法和实例的方法：
### addCommand

+ 语法: `addCommand(commandId: string, handler: ICommandHandler, context?: string): string`
+ 参数: `commandId, handler, context`
+ 返回值: `string`
+ 描述: `向编辑器命令服务添加命令处理器`

其中，commandId 参数是一个字符串，表示要添加的命令的 ID；handler 参数是一个 ICommandHandler 类型的函数，表示要添加的命令处理器；context 参数是一个字符串，表示要添加的命令的上下文。addCommand 方法返回一个字符串，表示添加的命令的 ID。
示例：
```javascript
monaco.editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.KEY_S, () => {
    console.log('Save command triggered');
});
```
### addEditorAction

+ 语法: `addEditorAction(action: IAction): IDisposable`
+ 参数: `action`
+ 返回值: `IDisposable`
+ 描述: `向编辑器添加自定义的动作`

其中，action 参数是一个 IAction 对象，用来描述要添加的动作。addEditorAction 方法返回一个 IDisposable 对象，用来取消添加的动作。
示例：
```javascript
const editor = monaco.editor.create(document.getElementById('container'), {
    value: '',
    language: 'plaintext'
});

const action = {
    id: 'my-action',
    label: 'My Action',
    run: () => {
        console.log('My Action triggered');
    }
};

const disposable = editor.addEditorAction(action);
```
### addKeybindingRule

+ 语法: `addKeybindingRule(rule: IKeybindingRule): IDisposable`
+ 参数: `rule`
+ 返回值: `IDisposable`
+ 描述: `向编辑器添加自定义的按键绑定规则`

其中，rule 参数是一个 IKeybindingRule 对象，用来描述要添加的按键绑定规则。addKeybindingRule 方法返回一个 IDisposable 对象，用来取消添加的按键绑定规则。
示例：
```javascript
const editor = monaco.editor.create(document.getElementById('container'), {
    value: '',
    language: 'plaintext'
});

const rule = {
    id: 'my-rule',
    weight: 100,
    when: undefined,
    primary: monaco.KeyMod.CtrlCmd | monaco.KeyCode.KEY_S,
    handler: () => {
        console.log('My Rule triggered');
    }
};

const disposable = editor.addKeybindingRule(rule);
```
### addKeybindingRules

+ 语法: `addKeybindingRules(rules: IKeybindingRule[]): IDisposable`
+ 参数: `rules`
+ 返回值: `IDisposable`
+ 描述: `向编辑器添加多个自定义的按键绑定规则`

其中，rules 参数是一个 IKeybindingRule 数组，用来描述要添加的按键绑定规则。addKeybindingRules 方法返回一个 IDisposable 对象，用来取消添加的按键绑定规则。
示例：
```javascript
const editor = monaco.editor.create(document.getElementById('container'), {
    value: '',
    language: 'plaintext'
});

const rules = [
    {
        id: 'my-rule-1',
        weight: 100,
        when: undefined,
        primary: monaco.KeyMod.CtrlCmd | monaco.KeyCode.KEY_S,
        handler: () => {
            console.log('My Rule 1 triggered');
        }
    },
    {
        id: 'my-rule-2',
        weight: 100,
        when: undefined,
        primary: monaco.KeyMod.CtrlCmd | monaco.KeyCode.KEY_P,
        handler: () => {
            console.log('My Rule 2 triggered');
        }
    }
];

const disposable = editor.addKeybindingRules(rules);
```
### colorize

+ 语法: `colorize(text: string, mimeType: string, options?: IColorizerOptions): Promise`
+ 参数: `text, mimeType, options`
+ 返回值: `Promise`
+ 描述: `对指定的文本进行语法高亮处理`

其中，text 参数是一个字符串，表示要进行语法高亮处理的文本；mimeType 参数是一个字符串，表示要进行语法高亮处理的文本的 MIME 类型；options 参数是一个 IColorizerOptions 对象，表示语法高亮处理的选项。colorize 方法返回一个 Promise 对象，表示语法高亮处理



的结果。

示例：
```javascript
const text = 'function add(a, b) { return a + b; }';
const mimeType = 'text/javascript';

monaco.editor.colorize(text, mimeType, { theme: 'vs-dark' }).then((html) => {
    console.log(html);
});
```
### colorizeElement

+ 语法: `colorizeElement(element: HTMLElement, options?: IColorizerElementOptions): Promise`
+ 参数: `element, options`
+ 返回值: `Promise`
+ 描述: `对指定的 HTML 元素进行语法高亮处理`

其中，element 参数是一个 HTMLElement 对象，表示要进行语法高亮处理的 HTML 元素；options 参数是一个 IColorizerElementOptions 对象，表示语法高亮处理的选项。colorizeElement 方法返回一个 Promise 对象，表示语法高亮处理的结果。
示例：
```javascript
<div id="code">function add(a, b) { return a + b; }</div>
const element = document.getElementById('code');

monaco.editor.colorizeElement(element, { theme: 'vs-dark' }).then(() => {
    console.log('Element colorized');
});
```
### colorizeModelLine

+ 语法: `colorizeModelLine(model: ITextModel, lineNumber: number, tabSize?: number): string`
+ 参数: `model, lineNumber, tabSize`
+ 返回值: `string`
+ 描述: `对指定的文本模型的指定行进行语法高亮处理`

其中，model 参数是一个 ITextModel 对象，表示要进行语法高亮处理的文本模型；lineNumber 参数是一个数字，表示要进行语法高亮处理的行号；tabSize 参数是一个数字，表示制表符的宽度。colorizeModelLine 方法返回一个字符串，表示语法高亮处理的结果。
示例：
```javascript
const model = monaco.editor.createModel('function add(a, b) { return a + b; }', 'text/javascript');

const html = monaco.editor.colorizeModelLine(model, 1, 4);

console.log(html);
```
### create

+ 语法: `create(domElement: HTMLElement, options?: IEditorConstructionOptions, override?: IEditorOverrideServices): IStandaloneCodeEditor`
+ 参数: `domElement, options, override`
+ 返回值: `IStandaloneCodeEditor`
+ 描述: `创建一个新的独立的编辑器实例`

其中，domElement 参数是一个 HTMLElement 对象，表示要将编辑器实例附加到的 DOM 元素；options 参数是一个 IEditorConstructionOptions 对象，表示要创建的编辑器实例的选项；override 参数是一个 IEditorOverrideServices 对象，表示要覆盖的编辑器服务。create 方法返回一个 IStandaloneCodeEditor 对象，表示创建的编辑器实例。
示例：
```javascript
<div id="container"></div>
const domElement = document.getElementById('container');

const options = {
    value: 'function add(a, b) { return a + b; }',
    language: 'javascript'
};

const editor = monaco.editor.create(domElement, options);

console.log(editor.getValue());
```
### createDiffEditor

+ 语法: `createDiffEditor(domElement: HTMLElement, options?: IDiffEditorConstructionOptions, override?: IEditorOverrideServices): IDiffEditor`
+ 参数: `domElement, options, override`
+ 返回值: `IDiffEditor`
+ 描述: `创建一个新的独立的差异编辑器实例`

其中，domElement 参数是一个 HTMLElement 对象，表示要将差异编辑器实例附加到的 DOM 元素；options 参数是一个 IDiffEditorConstructionOptions 对象，表示要创建的差异编辑器实例的选项；override 参数是一个 IEditorOverrideServices 对象，表示要覆盖的编辑器服务。createDiffEditor 方法返回一个 IDiffEditor 对象，表示创建的差异编辑器实例。
示例：
```javascript
<div id="container"></div>
const domElement = document.getElementById('container');

const options = {
    original: {
        value: 'function add(a, b) { return a + b; }',
        language: 'javascript'
    },
    modified: {
        value: 'function add(a, b){ return a + b; }',
        language: 'javascript'
    }
};

const editor = monaco.editor.createDiffEditor(domElement, options);

console.log(editor.getOriginalEditor().getValue());
console.log(editor.getModifiedEditor().getValue());

```
### createDiffNavigator
+ 语法: `createDiffNavigator(diffEditor: IDiffEditor, opts?: IDiffNavigatorOptions): IDiffNavigator`
+ 参数: `diffEditor, opts`
+ 返回值: `IDiffNavigator`
+ 描述: `创建一个新的差异导航器实例`

其中，diffEditor 参数是一个 IDiffEditor 对象，表示要创建差异导航器实例的差异编辑器实例；opts 参数是一个 IDiffNavigatorOptions 对象，表示要创建的差异导航器实例的选项。createDiffNavigator 方法返回一个 IDiffNavigator 对象，表示创建的差异导航器实例。

示例：
```javascript
const domElement = document.getElementById('container');

const options = {
    original: {
        value: 'function add(a, b) { return a + b; }',
        language: 'javascript'
    },
    modified: {
        value: 'function add(a, b) { return a - b; }',
        language: 'javascript'
    }
};

const editor = monaco.editor.createDiffEditor(domElement, options);

const navigator = monaco.editor.createDiffNavigator(editor);

navigator.next();
```
### createModel

+ 语法: `createModel(value: string, language?: string, uri?: Uri): ITextModel`
+ 参数: `value, language, uri`
+ 返回值: `ITextModel`
+ 描述: `创建一个新的文本模型实例`

其中，value 参数是一个字符串，表示要创建的文本模型的初始值；language 参数是一个字符串，表示要创建的文本模型的语言；uri 参数是一个 Uri 对象，表示要创建的文本模型的 URI。createModel 方法返回一个 ITextModel 对象，表示创建的文本模型实例。
示例：
```javascript
const model = monaco.editor.createModel('function add(a, b) { return a + b; }', 'text/javascript');

console.log(model.getValue());
```
### createWebWorker

+ 语法: `createWebWorker(opts: IWebWorkerOptions): MonacoWebWorker`
+ 参数: `opts`
+ 返回值: `MonacoWebWorker`
+ 描述: `创建一个新的 Web Worker 实例`

其中，opts 参数是一个 IWebWorkerOptions 对象，表示要创建的 Web Worker 实例的选项。createWebWorker 方法返回一个 MonacoWebWorker 对象，表示创建的 Web Worker 实例。
示例：
```javascript
const worker = monaco.editor.createWebWorker({
    moduleId: 'myWorker',
    label: 'My Worker',
    createData: {
        languageId: 'javascript'
    }
});

worker.getProxy().then((proxy) => {
    proxy.doSomething();
});
```
### defineTheme

+ 语法: `defineTheme(themeName: string, themeData: IStandaloneThemeData): void`
+ 参数: `themeName, themeData`
+ 返回值: `-`
+ 描述: `定义一个新的主题`

其中，themeName 参数是一个字符串，表示要定义的主题的名称；themeData 参数是一个 IStandaloneThemeData 对象，表示要定义的主题的数据。defineTheme 方法没有返回值。
示例：
```javascript
monaco.editor.defineTheme('my-theme', {
    base: 'vs-dark',
    inherit: true,
    rules: [
        { token: 'comment', foreground: 'ffa500', fontStyle: 'italic' },
        { token: 'keyword', foreground: '00ff00' },
        { token: 'string', foreground: 'ff0000' }
    ],
    colors: {
        'editor.background': '#1e1e1e',
        'editor.foreground': '#d4d4d4',
        'editorCursor.foreground': '#d4d4d4',
        'editor.lineHighlightBackground': '#3c3c3c',
        'editorLineNumber.foreground': '#d4d4d4',
        'editor.selectionBackground': '#3c3c3c'
    }
});

monaco.editor.setTheme('my-theme');
```
### getDiffEditors

+ 语法: `getDiffEditors(): IDiffEditor[]`
+ 参数: `-`
+ 返回值: `IDiffEditor[]`
+ 描述: `获取所有的差异编辑器实例`

getDiffEditors 方法返回一个 IDiffEditor 数组，表示所有的差异编辑器实例。
示例：
```javascript
const editor1 = monaco.editor.create(document.getElementById('container1'), {
    value: 'function add(a, b) { return a + b; }',
    language: 'javascript'
});

const editor2 = monaco.editor.create(document.getElementById('container2'), {
    value: 'function sub(a, b) { return a - b; }',
    language: 'javascript'
});

const diffEditor = monaco.editor.createDiffEditor(document.getElementById('container3'), {
    original: editor1.getModel(),
    modified: editor2.getModel()
});

const editors = monaco.editor.getDiffEditors();

console.log(editors.length);
```
### getModel

+ 语法: `getModel(uri: Uri): ITextModel | null`
+ 参数: `uri`
+ 返回值: `ITextModel | null`
+ 描述: `根据指定的 URI 获取对应的文本模型实例`如果不存在对应的文本模型实例，则返回 null。getModel 方法返回一个 ITextModel 对象或 null。
示例：
```javascript
const uri = monaco.Uri.parse('file:///path/to/file.js');

const model = monaco.editor.getModel(uri);

if (model) {
    console.log(model.getValue());
} else {
    console.log('Model not found');
}
```
### getModels

+ 语法: `getModels(): ITextModel[]`
+ 参数: `-`
+ 返回值: `ITextModel[]`
+ 描述: `获取所有的文本模型实例`

getModels 方法返回一个 ITextModel 数组，表示所有的文本模型实例。
示例：
```javascript
const model1 = monaco.editor.createModel('function add(a, b) { return a + b; }', 'text/javascript');
const model2 = monaco.editor.createModel('function sub(a, b) { return a - b; }', 'text/javascript');

const models = monaco.editor.getModels();

console.log(models.length);
```
### getOrCreateMode

+ 语法: `getOrCreateMode(languageIdentifier: ILanguageIdentifier): Promise`
+ 参数: `languageIdentifier`
+ 返回值: `Promise`
+ 描述: `获取或创建指定语言标识符对应的语言扩展`

getOrCreateMode 方法返回一个 Promise 对象，表示获取或创建指定语言标识符对应的语言扩展点的结果。
示例：
```javascript
const languageIdentifier = {
    language: 'myLanguage',
    id: 'myLanguageId'
};

monaco.editor.getOrCreateMode(languageIdentifier).then((mode) => {
    console.log(mode);
});
```
### getSupportedLanguages

+ 语法: `getSupportedLanguages(): string[]`
+ 参数: `-`
+ 返回值: `string[]`
+ 描述: `获取所有支持的语言`

getSupportedLanguages 方法返回一个字符串数组，表示所有支持的语言。
示例：
```javascript
const languages = monaco.editor.getSupportedLanguages();

console.log(languages);
```
### setModelLanguage

+ 语法: `setModelLanguage(model: ITextModel, languageId: string): void`
+ 参数: `model, languageId`
+ 返回值: `-`
+ 描述: `设置指定文本模型的语言`setModelLanguage 方法没有返回值。
示例：
```javascript
const model = monaco.editor.createModel('function add(a, b) { return a + b; }', 'text/javascript');

monaco.editor.setModelLanguage(model, 'myLanguage');

console.log(model.getModeId());



```
### setTheme

+ 语法: `setTheme(themeName: string): void`
+ 参数: `themeName`
+ 返回值: `-`
+ 描述: `设置当前使用的主题`

setTheme 方法没有返回值。
示例：
```javascript
monaco.editor.setTheme('my-theme');
```
### setColorTheme

+ 语法: `setColorTheme(themeName: string): void`
+ 参数: `themeName`
+ 返回值: `-`
+ 描述: `设置当前使用的颜色主题`setColorTheme 方法没有返回值。
示例：
```javascript
monaco.editor.setColorTheme('my-color-theme');
```
### setLayoutConfiguration

+ 语法: `setLayoutConfiguration(layout: IEditorLayoutInfo): void`
+ 参数: `layout`
+ 返回值: `-`
+ 描述: `设置编辑器布局配置`setLayoutConfiguration 方法没有返回值。
示例：
```javascript
const layout = {
    width: 800,
    height: 600,
    fontSize: 16
};

monaco.editor.setLayoutConfiguration(layout);
```
### setModelMarkers

+ 语法: `setModelMarkers(model: ITextModel, owner: string, markers: IMarkerData[]): void`
+ 参数: `model, owner, markers`
+ 返回值: `-`
+ 描述: `设置指定文本模型的标记`setModelMarkers 方法没有返回值。
示例：
```javascript
const model = monaco.editor.createModel('function add(a, b) { return a + b; }', 'text/javascript');

const markers = [
    {
        startLineNumber: 1,
        startColumn: 1,
        endLineNumber: 1,
        endColumn: 9,
        message: 'Function name should be in camel case',
        severity: monaco.MarkerSeverity.Warning
    }
];

monaco.editor.setModelMarkers(model, 'myMarkerOwner', markers);
```
### setTheme

+ 语法: `setTheme(themeName: string): void`
+ 参数: `themeName`
+ 返回值: `-`
+ 描述: `设置当前使用的主题`

其中，themeName 参数是一个字符串，表示要设置的主题名称。setTheme 方法没有返回值。
示例：
```javascript
monaco.editor.setTheme('my-theme');
```
### tokenize

+ 语法: `tokenize(text: string, languageId: string): Token[]`
+ 参数: `text, languageId`
+ 返回值: `Token[]`
+ 描述: `对指定的文本进行语法分析，返回一个 Token 数组`

其中，text 参数是一个字符串，表示要进行语法分析的文本；languageId 参数是一个字符串，表示要使用的语言标识符。tokenize 方法返回一个 Token 数组，表示语法分析的结果。
示例：
```javascript
const text = 'function add(a, b) { return a + b; }';
const languageId = 'javascript';

const tokens = monaco.editor.tokenize(text, languageId);

console.log(tokens);
```
