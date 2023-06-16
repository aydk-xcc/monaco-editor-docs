# Language

## getEncodedLanguageId
+ 语法: `getEncodedLanguageId(languageId: string): number`
+ 参数: `languageId`
+ 返回值: `number` 指定语言的编码ID。
描述: 用于获取指定语言的编码ID。这个编码ID可以用于在编辑器中设置语言模式。
示例代码：

```javascript
// 引入monaco-editor
import * as monaco from 'monaco-editor';

// 获取JavaScript语言的编码ID
const languageId = monaco.languages.getEncodedLanguageId('javascript');

// 在编辑器中设置语言模式
monaco.editor.setModelLanguage(editor.getModel(), languageId);
```
## getLanguages
+ 语法: `getLanguages(): string[]`
+ 返回值: `string[]` 所有已注册的语言ID的数组。
描述: 用于获取所有已注册的语言ID的数组。
示例代码：

```javascript
// 引入monaco-editor
import * as monaco from 'monaco-editor';

// 获取所有已注册的语言ID的数组
const languages = monaco.languages.getLanguages();

// 打印所有语言ID
console.log(languages);
```
## onLanguage
+ 语法: `onLanguage(languageId: string, callback: () => void): IDisposable`
+ 参数: `languageId` 要监听的语言ID。`callback` 当指定语言被注册时要执行的回调函数。
+ 返回值: `IDisposable`一个对象，用于取消监听。
描述: 用于监听指定语言的注册事件。
示例代码：

```javascript
// 引入monaco-editor
import * as monaco from 'monaco-editor';

// 监听JavaScript语言的注册事件
const disposable = monaco.languages.onLanguage('javascript', () => {
  console.log('JavaScript language is registered!');
});

// 取消监听
disposable.dispose();
```
## onLanguageEncountered
+ 语法: `nLanguageEncountered(callback: (languageId: string) => void): IDisposabl`
+ 参数: `allback` 当遇到未注册的语言时要执行的回调函数，该函数接收一个参数`languageId`，表示遇到的未注册语言的ID。
+ 返回值: `IDisposable`一个对象，用于取消监听。
描述: 用于监听遇到未注册的语言事件。
示例代码：

```javascript
// 引入monaco-editor
import * as monaco from 'monaco-editor';

// 监听遇到未注册的语言事件
const disposable = monaco.languages.onLanguageEncountered((languageId) => {
  console.log(`Encountered an unregistered language: ${languageId}`);
});

// 取消监听
disposable.dispose();
```
## register
+ 语法: `egister(language: ILanguageExtensionPoint): voi`
+ 参数: `anguage`要注册的语言的扩展点对象。
描述: 用于注册一种新的语言。
示例代码：
```javascript
// 引入monaco-editor
import * as monaco from 'monaco-editor';

// 定义要注册的语言的扩展点对象
const language = {
  id: 'myLanguage',
  extensions: ['.mylang'],
  aliases: ['My Language'],
  mimetypes: ['text/mylang'],
  loader: () => Promise.resolve({}),
};

// 注册新语言
monaco.languages.register(language);
```
## registerCodeActionProvider
+ 语法: `egisterCodeActionProvider(languageId: string, provider: CodeActionProvider): IDisposable`
+ 参数:`languageId`要注册代码操作提供程序的语言ID。`provider`代码操作提供程序对象。
+ 返回值: `IDisposable`一个对象，用于取消注册。
描述: 用于注册代码操作提供程序。
示例代码：

```javascript
const disposable = monaco.languages.registerCodeActionProvider('javascript', {
  provideCodeActions: function(model, range, context, token) {
    // 在此处添加自定义代码操作
    return [
      {
        title: 'Custom Code Action',
        command: 'customCodeAction',
        arguments: []
      }
    ];
  }
});

// 取消注册
disposable.dispose();

```

该提供程序将在JavaScript文件中提供自定义代码操作。我们传递一个对象作为第二个参数，该对象包含一个 provideCodeActions 方法，该方法将在用户右键单击代码时调用。该方法接收以下参数： 
 
-  model ：编辑器的模型。 
-  range ：用户右键单击的文本范围。 
-  context ：包含有关代码操作上下文的信息的对象。 
-  token ：取消标记，用于在操作提供程序执行时取消操作。 
 
在 provideCodeActions 方法中，我们可以添加自定义代码操作并将其作为数组返回。每个操作都是一个对象，该对象包含以下属性： 
 
-  title ：操作的标题。 
-  command ：要执行的命令的ID。 
-  arguments ：传递给命令的参数。在此示例中，我们将空数组传递给命令。 
 
请注意，要执行自定义命令，您需要使用 monaco.commands.registerCommand  API注册命令。

## registerCodeLensProvider

+ 语法: `registerCodeLensProvider(languageId: string, provider: CodeLensProvider): IDisposable`
+ 参数:   `languageId` 要注册代码镜头提供程序的语言ID。`provider` 代码镜头提供程序对象。
+ 返回值: `IDisposable` 一个对象，用于取消注册。
描述: 用于注册代码镜头提供程序。

示例代码：
```javascript
// 引入monaco-editor
import * as monaco from 'monaco-editor';

// 定义代码镜头提供程序对象
const provider = {
  provideCodeLenses: (model, token) => {
    return [];
  },
  resolveCodeLens: (model, codeLens, token) => {
    return codeLens;
  },
};

// 注册代码镜头提供程序
const disposable = monaco.languages.registerCodeLensProvider('myLanguage', provider);

// 取消注册
disposable.dispose();
```
## registerColorProvider

+ 语法: `registerColorProvider(languageId: string, provider: DocumentColorProvider): IDisposable`
+ 参数:   `languageId` 要注册颜色提供程序的语言ID。
  `provider` 颜色提供程序对象。
+ 返回值: `IDisposable` 一个对象，用于取消注册。
描述: 用于注册颜色提供程序。

示例代码：
```javascript
// 引入monaco-editor
import * as monaco from 'monaco-editor';

// 定义颜色提供程序对象
const provider = {
  provideDocumentColors: (model, token) => {
    return [];
  },
  provideColorPresentations: (model, colorInfo, token) => {
    return [];
  },
};

// 注册颜色提供程序
const disposable = monaco.languages.registerColorProvider('myLanguage', provider);

// 取消注册
disposable.dispose();

```
## registerCompletionItemProvider

+ 语法: `registerCompletionItemProvider(languageId: string, provider: CompletionItemProvider): IDisposable`
+ 参数:   `languageId` 要注册自动完成提供程序的语言ID。
  `provider` 自动完成提供程序对象。
+ 返回值: `IDisposable` 一个对象，用于取消注册。
描述: 用于注册自动完成提供程序。

示例代码：
```javascript
// 引入monaco-editor
import * as monaco from 'monaco-editor';

// 定义自动完成提供程序对象
const provider = {
provideCompletionItems: (model, position, context, token) => {
return {
suggestions: [],
incomplete: false,
};
},
resolveCompletionItem: (model, position, item, token) => {
return item;
},
};

// 注册自动完成提供程序
const disposable = monaco.languages.registerCompletionItemProvider('myLanguage', provider);

// 取消注册
disposable.dispose();

```
## registerDeclarationProvider

+ 语法: `registerDeclarationProvider(languageId: string, provider: DeclarationProvider): IDisposable`
+ 参数:   `languageId` 要注册声明提供程序的语言ID。
  `provider` 声明提供程序对象。
+ 返回值: `IDisposable` 一个对象，用于取消注册。
描述: 用于注册声明提供程序。

示例代码：
```javascript
// 引入monaco-editor
import * as monaco from 'monaco-editor';

// 定义声明提供程序对象
const provider = {
provideDeclaration: (model, position, token) => {
return [];
},
};

// 注册声明提供程序
const disposable = monaco.languages.registerDeclarationProvider('myLanguage', provider);

// 取消注册
disposable.dispose();

```
## registerDefinitionProvider

+ 语法: `registerDefinitionProvider(languageId: string, provider: DefinitionProvider): IDisposable`
+ 参数:   `languageId` 要注册定义提供程序的语言ID。
  `provider` 定义提供程序对象。
+ 返回值: `IDisposable` 一个对象，用于取消注册。
描述: 用于注册定义提供程序。

示例代码：
```javascript
// 引入monaco-editor
import * as monaco from 'monaco -editor';

// 定义定义提供程序对象
const provider = {
provideDefinition: (model, position, token) => {
return [];
},
};

// 注册定义提供程序
const disposable = monaco.languages.registerDefinitionProvider('myLanguage', provider);

// 取消注册
disposable.dispose();

```
## registerDocumentFormattingEditProvider

+ 语法: `registerDocumentFormattingEditProvider(languageId: string, provider: DocumentFormattingEditProvider): IDisposable`
+ 参数:   `languageId` 要注册文档格式化提供程序的语言ID。
  `provider` 文档格式化提供程序对象。
+ 返回值: `IDisposable` 一个对象，用于取消注册。
描述: 用于注册文档格式化提供程序。

示例代码：
```javascript
// 引入monaco-editor
import * as monaco from 'monaco-editor';

// 定义文档格式化提供程序对象
const provider = {
provideDocumentFormattingEdits: (model, options, token) => {
return [];
},
};

// 注册文档格式化提供程序
const disposable = monaco.languages.registerDocumentFormattingEditProvider('myLanguage', provider);

// 取消注册
disposable.dispose();

```
## registerDocumentHighlightProvider

+ 语法: `registerDocumentHighlightProvider(languageId: string, provider: DocumentHighlightProvider): IDisposable`
+ 参数:   `languageId` 要注册文档高亮提供程序的语言ID。
  `provider` 文档高亮提供程序对象。
+ 返回值: `IDisposable` 一个对象，用于取消注册。
描述: 用于注册文档高亮提供程序。

示例代码：
```javascript
// 引入monaco-editor
import * as monaco from 'monaco-editor';

// 定义文档高亮提供程序对象
const provider = {
provideDocumentHighlights: (model, position, token) => {
return [];
},
};

// 注册文档高亮提供程序
const disposable = monaco.languages.registerDocumentHighlightProvider('myLanguage', provider);

// 取消注册
disposable.dispose();

```
## registerDocumentRangeFormattingEditProvider

+ 语法: `registerDocumentRangeFormattingEditProvider(languageId: string, provider: DocumentRangeFormattingEditProvider): IDisposable`
+ 参数:   `languageId` 要注册文档范围格式化提供程序的语言ID。
  `provider` 文档范围格式化提供程序对象。
+ 返回值: `IDisposable` 一个对象，用于取消注册。
描述: 用于注册文档范围格式化提供程序。

示例代码：
```javascript
// 引入monaco-editor
import * as monaco from 'monaco-editor';

// 定义文档范围格式化提供程序对象
const provider = {
    provideDocumentRangeFormattingEdits: (model, range, options, token) => {
        return [];
    },
};

// 注册文档范围格式化提供程序
const disposable = monaco.languages.registerDocumentRangeFormattingEditProvider('myLanguage', provider);

// 取消注册
disposable.dispose();

```
## registerDocumentRangeSemanticTokensProvider

+ 语法: `registerDocumentRangeSemanticTokensProvider(languageId: string, provider: DocumentRangeSemanticTokensProvider): IDisposable`
+ 参数:   `languageId` 要注册文档范围语义标记提供程序的语言ID。
  `provider` 文档范围语义标记提供程序对象。
+ 返回值: `IDisposable` 一个对象，用于取消注册。
描述: 用于注册文档范围语义标记提供程序。

示例代码：
```javascript
// 引入monaco-editor
import * as monaco from 'monaco-editor';

// 定义文档范围语义标记提供程序对象
const provider = {
    provideDocumentRangeSemanticTokens: (model, range, token) => {
        return {
            data: new Uint32Array(),
        };
    },
};

// 注册文档范围语义标记提供程序
const disposable = monaco.languages.registerDocumentRangeSemanticTokensProvider('myLanguage', provider);

// 取消注册
disposable.dispose();

```
## registerDocumentSemanticTokensProvider

+ 语法: `egisterDocumentSemanticTokensProvider(languageId: string, provider: DocumentSemanticTokensProvider): IDisposable`
+ 参数:`languageId`要注册文档语义标记提供程序的语言ID。`provider`文档语义标记提供程序对象。
+ 返回值: `IDisposable`一个对象，用于取消注册。

描述: 用于注册文档语义标记提供程序。
示例代码：

```javascript
// 引入monaco-editor
import * as monaco from 'monaco-editor';

// 定义文档语义标记提供程序对象
const provider = {
  provideDocumentSemanticTokens: (model, lastResultId, token) => {
    return {
      data: new Uint32Array(),
      resultId: '',
    };
  },
  releaseDocumentSemanticTokens: (resultId) => {},
};

// 注册文档语义标记提供程序
const disposable = monaco.languages.registerDocumentSemanticTokensProvider('myLanguage', provider);

// 取消注册
disposable.dispose();
```
## registerDocumentSymbolProvider
+ 语法: `egisterDocumentSymbolProvider(languageId: string, provider: DocumentSymbolProvider): IDisposable`
+ 参数:`languageId`要注册文档符号提供程序的语言ID。`provider`文档符号提供程序对象。
+ 返回值: `IDisposable`一个对象，用于取消注册。
描述: 用于注册文档符号提供程序。
示例代码：

```javascript
// 引入monaco-editor
import * as monaco from 'monaco-editor';

// 定义文档符号提供程序对象
const provider = {
  provideDocumentSymbols: (model, token) => {
    return [];
  },
};

// 注册文档符号提供程序
const disposable = monaco.languages.registerDocumentSymbolProvider('myLanguage', provider);

// 取消注册
disposable.dispose();
```
## registerFoldingRangeProvider
+ 语法: `egisterFoldingRangeProvider(languageId: string, provider: FoldingRangeProvider): IDisposable`
+参数:`languageId`要注册折叠范围提供程序的语言ID。`provider`折叠范围提供程序对象。
+ 返回值: `IDisposable`一个对象，用于取消注册。

描述: 用于注册折叠范围提供程序。
示例代码：

```javascript
// 引入monaco-editor
import * as monaco from 'monaco-editor';

// 定义折叠范围提供程序对象
const provider = {
  provideFoldingRanges: (model, context, token) => {
    return [];
  },
};

// 注册折叠范围提供程序
const disposable = monaco.languages.registerFoldingRangeProvider('myLanguage', provider);

// 取消注册
disposable.dispose();
```
## registerHoverProvider
+ 语法: `egisterHoverProvider(languageId: string, provider: HoverProvider): IDisposable`
+ 参数:`languageId`要注册悬停提供程序的语言ID。`provider`悬停提供程序对象。
+ 返回值: `IDisposable`一个对象，用于取消注册。
描述: 用于注册悬停提供程序。
示例代码：

```javascript
// 引入monaco-editor
import * as monaco from 'monaco-editor';

// 定义悬停提供程序对象
const provider = {
  provideHover: (model, position, token) => {
    return {
      contents: [],
    };
  },
};

// 注册悬停提供程序
const disposable = monaco.languages.registerHoverProvider('myLanguage', provider);

// 取消注册
disposable.dispose();
```
## registerImplementationProvider
+ 语法: `egisterImplementationProvider(languageId: string, provider: ImplementationProvider): IDisposable`
+ 参数: `languageId`要注册实现提供程序的语言ID。`provider`实现提供程序对象。
+ 返回值: IDisposable一个对象，用于取消注册。
  
描述: 用于注册实现提供程序。
示例代码：

```javascript
// 引入monaco-editor
import * as monaco from 'monaco-editor';

// 定义实现供程序对象
const provider = {
provideImplementation: (model, position, token) => {
return [];
},
};

// 注册实现提供程序
const disposable = monaco.languages.registerImplementationProvider('myLanguage', provider);

// 取消注册
disposable.dispose();

```
## registerReferenceProvider

+ 语法: `registerReferenceProvider(languageId: string, provider: ReferenceProvider): IDisposable`
+ 参数:   `languageId` 要注册引用提供程序的语言ID。
  `provider` 引用提供程序对象。
+ 返回值: `IDisposable` 一个对象，用于取消注册。
描述: 用于注册引用提供程序。

示例代码：
```javascript
// 引入monaco-editor
import * as monaco from 'monaco-editor';

// 定义引用提供程序对象
const provider = {
provideReferences: (model, position, context, token) => {
return [];
},
};

// 注册引用提供程序
const disposable = monaco.languages.registerReferenceProvider('myLanguage', provider);

// 取消注册
disposable.dispose();

```
## registerRenameProvider

+ 语法: `registerRenameProvider(languageId: string, provider: RenameProvider): IDisposable`
+ 参数:   `languageId` 要注册重命名提供程序的语言ID。
  `provider` 重命名提供程序对象。
+ 返回值: `IDisposable` 一个对象，用于取消注册。
+ 描述: 用于注册重命名提供程序。

示例代码：
```javascript
// 引入monaco-editor
import * as monaco from 'monaco-editor';

// 定义重命名提供程序对象
const provider = {
    provideRenameEdits: (model, position, newName, token) => {
        return {
            edits: [],
        };
    },
};

// 注册重命名提供程序
const disposable = monaco.languages.registerRenameProvider('myLanguage', provider);

// 取消注册
disposable.dispose();

```
## registerSignatureHelpProvider

+ 语法: `registerSignatureHelpProvider(languageId: string, provider: SignatureHelpProvider): IDisposable`
+ 参数:   `languageId` 要注册签名帮助提供程序的语言ID。
  `provider` 签名帮助提供程序对象。
+ 返回值: `IDisposable` 一个对象，用于取消注册。
+ 描述: 用于注册签名帮助提供程序。

示例代码：
```javascript
// 引入monaco-editor
import * as monaco from 'monaco-editor';

// 定义签名帮助提供程序对象
const provider = {
    provideSignatureHelp: (model, position, token, context) => {
        return {
            signatures: [],
            activeSignature: 0,
            activeParameter: 0
        };
    },
};

// 注册签名帮助提供程序
const disposable = monaco.languages.registerSignatureHelpProvider('myLanguage', provider);

// 取消注册
disposable.dispose();

```
## registerTypeDefinitionProvider

+ 语法: `registerTypeDefinitionProvider(languageId: string, provider: TypeDefinitionProvider): IDisposable`
+ 参数:   `languageId` 要注册类型定义提供程序的语言ID。
  `provider` 类型定义提供程序对象。
+ 返回值: `IDisposable` 一个对象，用于取消注册。
+ 描述: 用于注册类型定义提供程序。

示例代码：
```javascript
// 引入monaco-editor
import * as monaco from 'monaco-editor';

// 定义类型定义提供程序对象
const provider = {
    provideTypeDefinition: (model, position, token) => {
        return [];
    },
};

// 注册类型定义提供程序
const disposable = monaco.languages.registerTypeDefinitionProvider('myLanguage', provider);

// 取消注册
disposable.dispose();
```

## registerTokensProviderFactory

Monaco Editor中的一个方法，用于注册一个标记提供程序工厂。标记提供程序负责为编辑器中的文本提供语法高亮和其他标记信息。以下是使用 registerTokensProviderFactory 方法的示例代码：
```javascript
monaco.languages.registerTokensProviderFactory('javascript', {
  getInitialState: function() {
    return new MyState();
  },
  tokenize: function(line, state, offsetDelta, stopAtOffset) {
    return MyTokenizer.tokenize(line, state, offsetDelta, stopAtOffset);
  }
});

function MyState() {
  this.line = '';
  this.tokens = [];
}

function MyTokenizer() {}

MyTokenizer.tokenize = function(line, state, offsetDelta, stopAtOffset) {
  var tokens = [];
  // tokenization logic goes here
  return {
    tokens: tokens,
    endState: state
  };
};
```
在这个示例中，使用 monaco.languages.registerTokensProviderFactory 方法注册了一个名为 javascript 的语言的标记提供程序工厂。该工厂包含两个方法： getInitialState 和 tokenize 。 getInitialState 方法返回一个新的状态对象，该对象将在每次调用 tokenize 方法时传递给它。 tokenize 方法接收一行文本、当前状态、偏移量增量和停止偏移量等参数，并返回一个包含标记和新状态的对象。在这个示例中，我们使用 MyTokenizer 类作为标记化逻辑的实现，并使用 MyState 类作为状态对象的实现。 MyTokenizer.tokenize 方法实现了标记化逻辑，将标记添加到 tokens 数组中，并返回一个包含标记和状态对象的对象。 
 
 ## registerTypeDefinitionProvider
+ 用法：`registerTypeDefinitionProvider(languageSelector: LanguageSelector, provider: TypeDefinitionProvider): IDisposable`
+ 参数：
   + `languageSelector`: `languageSelector`
   +  `provider`:  `TypeDefinitionProvider`
+  返回值： `IDisposable`

允许您为特定语言注册类型定义提供程序。类型定义提供程序允许您为特定类型定义提供跳转和浏览功能。该方法接受两个参数，第一个参数是语言标识符，第二个参数是类型定义提供程序对象。 
以下是 registerTypeDefinitionProvider 的一个示例用法：
```javascript
monaco.languages.registerTypeDefinitionProvider('javascript', {
  provideTypeDefinition: function(model, position, token) {
    // your implementation goes here
  }
});
```
在此示例中，我们使用 registerTypeDefinitionProvider 方法为 javascript 语言注册了一个类型定义提供程序。我们传递了一个包含 provideTypeDefinition 方法的对象作为第二个参数。 provideTypeDefinition 方法接受三个参数： model ， position 和 token 。 model 参数是一个 ITextModel 对象，表示当前编辑器文本模型。 position 参数是一个 Position 对象，表示要查找类型定义的位置。 token 参数是一个取消令牌，用于取消操作（可选）。 
在 provideTypeDefinition 方法中，您可以实现自己的逻辑来查找并返回类型定义。例如，您可以使用 monaco.languages.getTypeDefinitions 方法来查找类型定义。该方法接受三个参数： model ， position 和 token 。 model 和 position 参数与 provideTypeDefinition 方法中的相同。 token 参数是一个取消令牌，用于取消操作（可选）。 getTypeDefinitions 方法返回一个 Promise ，该 Promise 解析为一个类型定义数组。每个类型定义都是一个 Location 对象，表示类型定义的位置。
```javascript
monaco.languages.registerTypeDefinitionProvider('javascript', {
  provideTypeDefinition: function(model, position, token) {
    return monaco.languages.getTypeDefinitions('javascript', model.uri, position, token);
  }
});
```
在此示例中，我们使用 monaco.languages.getTypeDefinitions 方法在 javascript 语言中查找类型定义。我们使用相同的 model 和 position 参数，并将 token 参数传递给 getTypeDefinitions 方法。然后，我们返回 getTypeDefinitions 方法返回的 Promise 。 

 ## setColorMap
+ 用法：`setColorMap(colorMap: string[]): void`
+ 参数：
   + `colorMap`: string[]
+  返回值： `-`

设置自定义颜色映射。该方法接受一个参数，该参数是一个包含颜色映射的对象。 
以下是 setColorMap 的一个示例用法：
```javascript
monaco.editor.setColorMap({
  'editor.background': '#282c34',
  'editor.foreground': '#abb2bf',
  'editor.lineHighlightBackground': '#3e4451',
  'editorLineNumber.foreground': '#636d83',
  'editor.selectionBackground': '#4d5b70',
  'editorCursor.foreground': '#528bff',
  'editorWhitespace.foreground': '#abb2bf'
});
monaco.editor.create(document.getElementById('container'), {
  value: 'function foo() { console.log("Hello, world!"); }',
  language: 'javascript'
});
```
在此示例中，我们使用 setColorMap 方法为编辑器设置了自定义颜色映射。我们传递了一个包含颜色映射的对象，该对象具有多个属性，每个属性都是一个编辑器颜色的名称和对应的颜色值。在此示例中，我们设置了编辑器的背景、前景、行高亮背景、行号前景、选择背景、光标前景和空白字符前景颜色。 

 ## setLanguageConfiguration
+ 用法：`setLanguageConfiguration(languageId: string, configuration: LanguageConfiguration): IDisposable`
+ 参数：
   + `languageId` string
   +  `configuration`:  `LanguageConfiguration`
+  返回值： `IDisposable`

为特定语言设置自定义配置。该方法接受两个参数，第一个参数是语言标识符，第二个参数是包含配置选项的对象。 
以下是 setLanguageConfiguration 的一个示例用法：
```javascript
monaco.languages.register({ id: 'mySpecialLanguage' });
monaco.languages.setLanguageConfiguration('mySpecialLanguage', {
  comments: {
    lineComment: '//',
    blockComment: ['/*', '*/']
  },
  brackets: [['{', '}'], ['[', ']'], ['(', ')']],
  autoClosingPairs: [
    { open: '{', close: '}' },
    { open: '[', close: ']' },
    { open: '(', close: ')' }
  ],
  surroundingPairs: [
    { open: '{', close: '}' },
    { open: '[', close: ']' },
    { open: '(', close: ')' }
  ]
});
monaco.editor.create(document.getElementById('container'), {
  value: 'function foo() { console.log("Hello, world!"); }',
  language: 'mySpecialLanguage'
});
```
在此示例中，我们首先使用 register 方法注册了一个名为 mySpecialLanguage 的新语言。然后，我们使用 setLanguageConfiguration 方法为其设置了自定义配置。我们将 mySpecialLanguage 作为第一个参数传递给 setLanguageConfiguration 方法，以指定我们要为其设置自定义配置。然后，我们传递了一个包含配置选项的对象，该对象具有 comments 、 brackets 、 autoClosingPairs 和 surroundingPairs 属性，每个属性都包含一个或多个配置选项。在此示例中，我们为该语言设置了单行和多行注释、括号、自动闭合对和周围的对。 

 ## setMonarchTokensProvider
+ 用法：`setMonarchTokensProvider(languageId: string, languageDef: IMonarchLanguage | Thenable<IMonarchLanguage>): IDisposable`
+ 参数：
   + `languageId` string
   +  `languageDef`:  `IMonarchLanguage | Thenable<IMonarchLanguage>`
+  返回值： `IDisposable`
为编辑器设置自定义语法高亮规则。该方法接受两个参数，第一个参数是语言标识符，第二个参数是包含语法规则的对象。 
以下是 setMonarchTokensProvider 的一个示例用法：
```javascript
monaco.languages.register({ id: 'mySpecialLanguage' });

monaco.languages.setMonarchTokensProvider('mySpecialLanguage', {
  tokenizer: {
    root: [
      [/\bif\b/, 'keyword'],
      [/\b\d+\b/, 'number'],
      [/\b(a|an|the)\b/, 'article'],
      [/[a-z][a-z0-9]*/, 'identifier'],
      [/[A-Z][a-z0-9]*/, 'type.identifier'],
      [/"/, 'string', '@string']
    ],
    string: [
      [/[^\\"]+/, 'string'],
      [/\\./, 'string.escape'],
      [/"/, 'string', '@pop']
    ]
  }
});

monaco.editor.create(document.getElementById('container'), {
  value: 'if (x > 0) { console.log("Hello, world!"); }',
  language: 'mySpecialLanguage'
});
```
在此示例中，我们首先使用 register 方法注册了一个名为 mySpecialLanguage 的新语言。然后，我们使用 setMonarchTokensProvider 方法为其设置了自定义语法高亮规则。我们将 mySpecialLanguage 作为第一个参数传递给 setMonarchTokensProvider 方法，以指定我们要为其设置语法高亮规则。然后，我们传递了一个包含语法规则的对象，该对象具有一个名为 tokenizer 的属性，该属性包含一个名为 root 的数组，该数组包含一组正则表达式和对应的标记类型。我们还定义了一个名为 string 的标记类型，用于高亮字符串文字。最后，我们创建了一个使用新语言的编辑器，并将一些示例代码设置为其值。 
您可以根据需要自定义语法高亮规则的实现。

 ## setTokensProvider
 + 用法：`setTokensProvider(languageId: string, provider: TokensProvider | EncodedTokensProvider | Thenable<TokensProvider | EncodedTokensProvider>): IDisposable`
 + 参数：
   + `languageId` string
   +  `provider`:  ` TokensProvider | EncodedTokensProvider | Thenable<TokensProvider | EncodedTokensProvider>`
  +  返回值： `IDisposable`

允许您为编辑器设置自定义标记提供程序。该方法接受一个参数，该参数是实现 monaco.languages.TokensProvider 接口的对象。 
以下是 setTokensProvider 的一个示例用法：
```javascript
monaco.editor.create(document.getElementById('container'), {
  value: 'function foo() { console.log("Hello, world!"); }',
  language: 'javascript'
});

monaco.languages.setTokensProvider('javascript', {
  getInitialState: function() { ... },
  tokenize: function(line, state, offsetDelta, stopAtOffset) { ... }
});
```
在此示例中，我们首先创建了一个JavaScript编辑器，然后使用 setTokensProvider 方法为其设置了自定义标记提供程序。我们将JavaScript作为参数传递给 setTokensProvider 方法，以指定我们要为其设置标记提供程序。然后，我们传递了一个对象，该对象实现了 monaco.languages.TokensProvider 接口，并具有 getInitialState 和 tokenize 方法。 getInitialState 方法返回初始状态，而 tokenize 方法接受一行代码和状态作为输入，并返回一个标记数组。 
 
您可以根据需要自定义标记提供程序的实现。

