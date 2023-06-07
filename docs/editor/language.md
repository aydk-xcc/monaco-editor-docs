# Language

### getEncodedLanguageId
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
### getLanguages
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
### onLanguage
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
### onLanguageEncountered
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
### register
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
### registerCodeActionProvider
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

### registerCodeLensProvider

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
### registerColorProvider

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
### registerCompletionItemProvider

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
### registerDeclarationProvider

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
### registerDefinitionProvider

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
### registerDocumentFormattingEditProvider

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
### registerDocumentHighlightProvider

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
### registerDocumentRangeFormattingEditProvider

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
### registerDocumentRangeSemanticTokensProvider

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
### registerDocumentSemanticTokensProvider

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
### registerDocumentSymbolProvider
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
### registerFoldingRangeProvider
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
### registerHoverProvider
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
### registerImplementationProvider
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
### registerReferenceProvider

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
### registerRenameProvider

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
### registerSignatureHelpProvider

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
### registerTypeDefinitionProvider

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