# ITextModel
`interface` [官网地址](https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor.ITextModel.html)

## 属性 Properties

## applyEdits
+ 语法 applyEdits(operations: IIdentifiedSingleEditOperation[]): void
+ 参数 operations
+ 返回值 -
+ 描述: 用于将一组文本编辑应用于模型。该方法接受一个编辑操作数组和一个选项对象作为参数，并返回一个IMarkerData数组，其中包含所有已插入的标记的位置和数据。
::: tip operations
operations参数是一个IIdentifiedSingleEditOperation类型的数组，用来描述操作的类型。它包含以下属性：
+ forceMoveMarkers: bool类型，表示用于控制是否强制移动标记 markers。标记是一段文本的注释，通常用于标记某些位置或者标记某些文本的属性。当文本被修改时，标记也会相应地被修改。如果 forceMoveMarkers属性为 true，那么当文本被修改时，标记也会被强制移动，即它们会被重新计算并移动到新的位置。如果 forceMoveMarkers属性为 false，那么标记不会被强制移动，而是保持原来的位置。在一些情况下，如果文本被修改了，标记的位置可能已经发生了变化，这时如果不强制移动标记，可能会导致标记的位置不准确或者出现错误。因此，如果需要保证标记的位置准确性，可以将 
forceMoveMarkers属性设置为 true。
+ range: IRange类型，表示替换的范围。这可以为空以模拟简单的插入。
+ text: string类型，表示要替换为的文本。这可以为 null以模拟简单的删除。
:::
以下是一个示例代码，演示如何使用 applyEdits方法将文本编辑应用于模型：
```javascript
const editor = monaco.editor.create(document.getElementById("container"), {
  value: "Hello, world!",
  language: "javascript"
});
const model = editor.getModel();
const edits = [
  {
    range: new monaco.Range(1, 1, 1, 5),
    text: "Hello"
  },
  {
    range: new monaco.Range(1, 6, 1, 10),
    text: "Monaco"
  }
];
const markerData = model.applyEdits(edits);
console.log(markerData);
```
我们首先创建了一个编辑器实例，并获取了其模型。然后，我们定义了一个编辑操作数组，其中包含两个文本编辑操作。最后，我们使用 applyEdits方法将编辑操作应用于模型，并将返回的 `IMarkerData`数组打印到控制台中。
需要注意的是，applyEdits方法返回的 IMarkerData数组包含所有已插入的标记的位置和数据。如果您不想插入标记，可以将 IMarkerData数组作为第二个参数传递给 
applyEdits方法，并将其设置为 `null`。

## createSnapshot
+ 语法 createSnapshot(): number
+ 参数 -
+ 返回值 number
+ 描述: 创建一个模型的快照，并返回该快照的 ID。快照是一段时间点的模型状态，可以用于撤销和重做操作。

以下是一个示例代码，演示如何使用 
createSnapshot
 方法创建一个模型的例子：
```javascript
const editor = monaco.editor.create(document.getElementById("container"), {
  value: "Hello, world!",
  language: "javascript"
});
const model = editor.getModel();
const snapshotId = model.createSnapshot();
console.log(snapshotId);
```
我们首先创建了一个编辑器实例，并获取了其模型。然后，我们使用 
createSnapshot
 方法创建一个模型的快照，并将返回的快照 ID 打印到控制台中。

需要注意的是，创建快照后，模型的状态将被锁定，直到调用 
dispose
 方法释放该快照。

## deltaDecorations
+ 语法 deltaDecorations(oldDecorations: string[], newDecorations: IDecorationOptions[]): string[]
+ 参数:

  + oldDecorations: string[]类型，表示要修改的装饰器 ID 数组。
  + newDecorations: `IDecorationOptions[]` 类型，表示要添加或修改的装饰器选项数组。
+ 返回值 string[]
 类型，表示修改后的装饰器 ID 数组。
+ 描述: 用于修改模型中的装饰器。该方法接受两个参数，分别是要修改的装饰器 ID 数组和要添加或修改的装饰器选项数组。该方法返回一个数组，其中包含修改后的装饰器 ID 数组。

以下是一个示例代码，演示如何使用 
deltaDecorations
 方法修改模型中的装饰器：
```javascript
const editor = monaco.editor.create(document.getElementById("container"), {
  value: "Hello, world!",
  language: "javascript"
});
const model = editor.getModel();
const oldDecorations = [
  {
    range: new monaco.Range(1, 1, 1, 5),
    options: {
      inlineClassName: "inline-class-name"
    }
  }
];
const newDecorations = [
  {
    range: new monaco.Range(1, 1, 1, 5),
    options: {
      inlineClassName: "new-inline-class-name"
    }
  }
];
const newDecorationsIds = model.deltaDecorations(oldDecorations, newDecorations);
console.log(newDecorationsIds);
```
我们首先创建了一个编辑器实例，并获取了其模型。然后，我们定义了一个要修改的装饰器选项数组和一个要添加或修改的装饰器选项数组。最后，我们使用 
deltaDecorations
 方法修改模型中的装饰器，并将返回的修改后的装饰器 ID 数组打印到控制台中。

需要注意的是，
deltaDecorations
 方法可以用于添加、删除或修改模型中的装饰器。如果要删除装饰器，可以将要修改的装饰器 ID 数组设置为一个空数组。

## dispose
+ 语法 dispose(): void
+ 参数 -
+ 返回值 -
+ 描述: 释放模型和编辑器实例。释放模型和编辑器实例后，它们将不再可用。

以下是一个示例代码，演示如何使用 
dispose
 方法释放模型和编辑器实例：
```javascript
const editor = monaco.editor.create(document.getElementById("container"), {
  value: "Hello, world!",
  language: "javascript"
});
const model = editor.getModel();
model.dispose();
editor.dispose();
```
我们首先创建了一个编辑器实例，并获取了其模型。然后，我们使用 
dispose
 方法释放模型和编辑器实例。

需要注意的是，释放模型和编辑器实例后，它们将不再可用。如果您需要重新使用这些实例，请重新创建它们。

## findMatches
+ 语法 findMatches(searchString: string, searchOnlyEditableRange: boolean, isRegex: boolean, matchCase: boolean, wordSeparators: string | null): IFindMatch[]
+ 参数 searchString
: 
string
 类型，表示要查找的字符串。
searchOnlyEditableRange
: 
boolean
 类型，表示是否仅在可编辑范围内查找。
isRegex
: 
boolean
 类型，表示是否使用正则表达式进行查找。
matchCase
: 
boolean
 类型，表示是否区分大小写。
wordSeparators
: 
string | null
 类型，表示单词分隔符。
返回值 IFindMatch[]
 类型，表示查找结果。
+ 描述: 查找模型中的文本，并返回查找结果。该方法接受五个参数，分别是要查找的字符串、是否仅在可编辑范围内查找、是否使用正则表达式进行查找、是否区分大小写以及单词分隔符。该方法返回一个 
IFindMatch
 类型的数组，其中包含查找结果。

以下是一个示例代码，演示如何使用 
findMatches
 方法查找模型中的文本：
```javascript
const editor = monaco.editor.create(document.getElementById("container"), {
  value: "Hello, world!",
  language: "javascript"
});
const model = editor.getModel();
const searchString = "world";
const searchOnlyEditableRange = false;
constisRegex = false;
const matchCase = false;
const wordSeparators = null;
const matches = model.findMatches(searchString, searchOnlyEditableRange, isRegex, matchCase, wordSeparators);
console.log(matches);
```
我们首先创建了一个编辑器实例，并获取了其模型。然后，我们定义了要查找的字符串、是否仅在可编辑范围内查找、是否使用正则表达式进行查找、是否区分大小写以及单词分隔符。最后，我们使用 `findMatches` 方法查找模型中的文本，并将返回的查找结果打印到控制台中。

需要注意的是，`findMatches` 方法返回的 `IFindMatch` 类型的数组包含查找结果的位置和匹配项。如果没有找到匹配项，该数组将为空。

## findNextMatch

+ 语法 
`findNextMatch(previousMatch: IFindMatch, searchString: string, searchOnlyEditableRange: boolean, isRegex: boolean, matchCase: boolean, wordSeparators: string | null): IFindMatch | null`

+ 参数

  - `previousMatch`: `IFindMatch` 类型，表示上一个匹配项。
  - `searchString`: `string` 类型，表示要查找的字符串。
  - `searchOnlyEditableRange`: `boolean` 类型，表示是否仅在可编辑范围内查找。
  - `isRegex`: `boolean` 类型，表示是否使用正则表达式进行查找。
  - `matchCase`: `boolean` 类型，表示是否区分大小写。
  - `wordSeparators`: `string | null` 类型，表示单词分隔符。

+ 返回值 
`IFindMatch | null` 类型，表示下一个匹配项。

+ 描述 查找模型中的文本，并返回下一个匹配项。该方法接受六个参数，分别是上一个匹配项、要查找的字符串、是否仅在可编辑范围内查找、是否使用正则表达式进行查找、是否区分大小写以及单词分隔符。该方法返回一个 `IFindMatch` 类型的对象，表示下一个匹配项。如果没有找到下一个匹配项，该方法将返回 `null`。

以下是一个示例代码，演示如何使用 `findNextMatch` 方法查找模型中的文本：
```javascript
const editor = monaco.editor.create(document.getElementById("container"), {
value: "Hello, world!",
language: "javascript"
});
const model = editor.getModel();
const searchString = "world";
const searchOnlyEditableRange = false;
const isRegex = false;
const matchCase = false;
const wordSeparators = null;
const previousMatch = null;
const nextMatch = model.findNextMatch(previousMatch, searchString, searchOnlyEditableRange, isRegex, matchCase, wordSeparators);
console.log(nextMatch);
```
我们首先创建了一个编辑器实例，并获取了其模型。然后，我们定义了要查找的字符串、是否仅在可编辑范围内查找、是否使用正则表达式进行查找、是否区分大小写以及单词分隔符。最后，我们使用 `findNextMatch` 方法查找模型中的文本，并将返回的下一个匹配项打印到控制台中。

需要注意的是，`findNextMatch` 方法返回的 `IFindMatch` 类型的对象表示下一个匹配项。如果没有找到下一个匹配项，该方法将返回 `null`。

## findPreviousMatch

+ 语法 
`findPreviousMatch(nextMatch: IFindMatch, searchString: string, searchOnlyEditableRange: boolean, isRegex: boolean, matchCase: boolean, wordSeparators: string | null): IFindMatch | null`

+ 参数

  - `nextMatch`: `IFindMatch` 类型，表示下一个匹配项。
  - `searchString`: `string` 类型，表示要查找的字符串。
  - `searchOnlyEditableRange`: `boolean` 类型，表示是否仅在可编辑范围内查找。
  - `isRegex`: `boolean` 类型，表示是否使用正则表达式进行查找。
  - `matchCase`: `boolean` 类型，表示是否区分大小写。
  - `wordSeparators`: `string | null` 类型，表示单词分隔符。

+ 返回值 
`IFindMatch | null` 类型，表示上一个匹配项。

+ 描述 模型中的文本，并返回上一个匹配项。该方法接受六个参数，分别是下一个匹配项、要查找的字符串、是否仅在可编辑范围内查找、是否使用正则表达式进行查找、是否区分大小写以及单词分隔符。该方法返回一个 
IFindMatch
 类型的对象，表示上一个匹配项。如果没有找到上一个匹配项，该方法将返回 
null
。

以下是一个示例代码，演示如何使用 
findPreviousMatch
 方法查找模型中的文本：
```javascript
const editor = monaco.editor.create(document.getElementById("container"), {
  value: "Hello, world!",
  language: "javascript"
});
const model = editor.getModel();
const searchString = "world";
const searchOnlyEditableRange = false;
const isRegex = false;
const matchCase = false;
const wordSeparators = null;
const nextMatch = null;
const previousMatch = model.findPreviousMatch(nextMatch, searchString, searchOnlyEditableRange, isRegex, matchCase, wordSeparators);
console.log(previousMatch);
```
我们首先创建了一个编辑器实例，并获取了其模型。然后，我们定义了要查找的字符串、是否仅在可编辑范围内查找、是否使用正则表达式进行查找、是否区分大小写以及单词分隔符。最后，我们使用 
findPreviousMatch
 方法查找模型中的文本，并将返回的上一个匹配项打印到控制台中。

需要注意的是，
findPreviousMatch
 方法返回的 
IFindMatch
 类型的对象表示上一个匹配项。如果没有找到上一个匹配项，该方法将返回 
null
。

## getAllDecorations 
+ 语法:  getAllDecorations(ownerId?: number, filterOutValidation?: boolean): IModelDecoration[]  
+ 参数:  ownerId ,  filterOutValidation  
+ 返回值:  IModelDecoration[]  
+ 描述: 获取模型中的所有装饰。可以通过 ownerId 和 filterOutValidation 参数来过滤装饰。 
  其中， ownerId  参数是一个可选的数字，用于指定装饰的所有者。如果提供了 ownerId ，则只返回属于该所有者的装饰。 filterOutValidation  参数是一个可选的布尔值，用于指定是否过滤掉验证装饰。如果将其设置为 true ，则不会返回验证装饰。 
 
示例代码：
const decorations = model.getAllDecorations();
console.log(decorations);
## getAlternativeVersionId 
+ 语法:  getAlternativeVersionId(): number  
+ 参数: 无 
+ 返回值:  number  
+ 描述: 获取模型的替代版本ID。此ID在每次编辑时都会递增。 
 
示例代码：
const alternativeVersionId = model.getAlternativeVersionId();
console.log(alternativeVersionId);
## getCharacterCountInRange 
+ 语法:  getCharacterCountInRange(range: IRange, eol: EndOfLinePreference): number  
+ 参数:  range ,  eol  
+ 返回值:  number  
+ 描述: 获取指定范围内的字符数量。可以通过 eol 参数来指定行尾字符的偏好。 
  其中， range  参数是一个 IRange 类型的对象，用于指定要计算字符数量的范围。 eol  参数是一个 EndOfLinePreference 枚举值，用于指定行尾字符的偏好。可选的值有： TextDefined （使用文本中定义的行尾字符）、 LF （使用 \n 作为行尾字符）和 CRLF （使用 \r\n 作为行尾字符）。 
 
示例代码：
const range = new monaco.Range(1, 1, 2, 1);
const characterCount = model.getCharacterCountInRange(range, monaco.editor.EndOfLinePreference.TextDefined);
console.log(characterCount);
## getDecorationOptions 
+ 语法:  getDecorationOptions(id: string): IModelDecorationOptions | null  
+ 参数:  id  
+ 返回值:  IModelDecorationOptions | null  
+ 描述: 根据装饰ID获取装饰选项。如果找不到指定ID的装饰，返回 null 。 
  其中， id  参数是一个字符串，用于指定要获取装饰选项的装饰ID。 
 
示例代码：
const decorationOptions = model.getDecorationOptions("decoration-id");
console.log(decorationOptions);
## getDecorationRange 
+ 语法:  getDecorationRange(id: string): Range | null  
+ 参数:  id  
+ 返回值:  Range | null  
+ 描述: 根据装饰ID获取装饰范围。如果找不到指定ID的装饰，返回 null 。 
  其中， id  参数是一个字符串，用于指定要获取装饰范围的装饰ID。 
 
示例代码：
const decorationRange = model.getDecorationRange("decoration-id");
console.log(decorationRange);
## getDecorationsInRange 
+ 语法:  getDecorationsInRange(range: IRange, ownerId?: number, filterOutValidation?: boolean): IModelDecoration[]  
+ 参数:  range ,  ownerId ,  filterOutValidation  
+ 返回值:  IModelDecoration[]  
+ 描述: 获取指定范围内的装饰。可以通过 ownerId 和 filterOutValidation 参数来过滤装饰。 
  其中， range  参数是一个 IRange 类型的对象，用于指定要获取装饰的范围。 ownerId  参数是一个可选的数字，用于指定装饰的所有者。如果提供了 ownerId ，则只返回属于该所有者的装饰。 filterOutValidation  参数是一个可选的布尔值，用于指定是否过滤掉验证装饰。如果将其设置为 true ，则不会返回验证装饰。 
 
示例代码：
const range = new monaco.Range(1, 1, 2, 1);
const decorations = model.getDecorationsInRange(range);
console.log(decorations);

## getEOL 
+ 语法:  getEOL(): string  
+ 参数: 无 
+ 返回值:  string  
+ 描述: 获取当前模型的行结束符。行结束符是用于分隔文本中各行的字符，通常为 \n （UNIX风格）或 \r\n （Windows风格）。 
 
## getEndOfLineSequence 
+ 语法:  getEndOfLineSequence(): string  
+ 参数: 无 
+ 返回值:  string  
+ 描述: 获取当前模型的行结束符序列。 
 
## getFullModelRange 
+ 语法:  getFullModelRange(): IRange  
+ 参数: 无 
+ 返回值:  IRange  
+ 描述: 获取模型的完整范围，即从第一行的第一个字符到最后一行的最后一个字符的范围。 
 
## getInjectedTextDecorations 
+ 语法:  getInjectedTextDecorations(lineNumber: number): IModelDecoration[]  
+ 参数:  lineNumber  
+ 返回值:  IModelDecoration[]  
+ 描述: 获取指定行的注入文本装饰。 lineNumber 参数是一个数字，表示要获取注入文本装饰的行号。 
 
## getLanguageId 
+ 语法:  getLanguageId(): string  
+ 参数: 无 
+ 返回值:  string  
+ 描述: 获取模型的语言ID。 
 
## getLineContent 
+ 语法:  getLineContent(lineNumber: number): string  
+ 参数:  lineNumber  
+ 返回值:  string  
+ 描述: 获取指定行的内容。 lineNumber 参数是一个数字，表示要获取内容的行号。 
 
## getLineCount 
+ 语法:  getLineCount(): number  
+ 参数: 无 
+ 返回值:  number  
+ 描述: 获取模型的行数。 
 
## getLineDecorations 
+ 语法:  getLineDecorations(lineNumber: number): IModelDecoration[]  
+ 参数:  lineNumber  
+ 返回值:  IModelDecoration[]  
+ 描述: 获取指定行的装饰。 lineNumber 参数是一个数字，表示要获取装饰的行号。 
 
## getLineFirstNonWhitespaceColumn 
+ 语法:  getLineFirstNonWhitespaceColumn(lineNumber: number): number  
+ 参数:  lineNumber  
+ 返回值:  number  
+ 描述: 获取指定行的第一个非空白字符的列号。 lineNumber 参数是一个数字，表示要获取列号的行号。 
 
## getLineLastNonWhitespaceColumn 
+ 语法:  getLineLastNonWhitespaceColumn(lineNumber: number): number  
+ 参数:  lineNumber  
+ 返回值:  number  
+ 描述: 获取指定行的最后一个非空白字符的列号。 lineNumber 参数是一个数字，表示要获取列号的行号。 
 
## getLineLength 
+ 语法:  getLineLength(lineNumber: number): number  
+ 参数:  lineNumber  
+ 返回值:  number  
+ 描述: 获取指定行的长度。 lineNumber 参数是一个数字，表示要获取长度的行号。 
 
## getLineMaxColumn 
+ 语法:  getLineMaxColumn(lineNumber: number): number  
+ 参数:  lineNumber  
+ 返回值:  number  
+ 描述: 获取指定行的最大列号。 lineNumber 参数是一个数字，表示要获取列号的行号。 
 
## getLineMinColumn 
+ 语法:  getLineMinColumn(lineNumber: number): number  
+ 参数:  lineNumber  
+ 返回值:  number  
+ 描述: 获取指定行的最小列号。 lineNumber 参数是一个数字，表示要获取列号的行号。 
 
## getLinesContent 
+ 语法:  getLinesContent(): string[]  
+ 参数: 无 
+ 返回值:  string[]  
+ 描述: 获取模型的所有行的内容。 
 
## getLinesDecorations 
+ 语法:  getLinesDecorations(startLineNumber: number, endLineNumber: number): IModelDecoration[]  
+ 参数:  startLineNumber ,  endLineNumber  
+ 返回值:  IModelDecoration[]  
+ 描述: 获取指定行范围内的装饰。 startLineNumber 和 endLineNumber 参数分别表示要获取装饰的起始行号和结束行号。 
 
## getOffsetAt 
+ 语法:  getOffsetAt(position: IPosition): number  
+ 参数:  position  
+ 返回值:  number  
+ 描述: 获取指定位置的偏移量。 position 参数是一个 IPosition 类型，表示要获取偏移量的位置。 
 
## getOptions 
+ 语法:  getOptions(): TextModelResolvedOptions  
+ 参数: 无 
+ 返回值:  TextModelResolvedOptions  
+ 描述: 获取模型的选项。 
 
## getOverviewRulerDecorations 
+ 语法:  getOverviewRulerDecorations(ownerId: number): IModelDecoration[]  
+ 参数:  ownerId  
+ 返回值:  IModelDecoration[]  
+ 描述: 获取属于指定所有者的概览标尺装饰。 ownerId 参数是一个数字，表示装饰的所有者ID。

## getOffsetAt 
+ 语法:  getOffsetAt(position: IPosition): number  
+ 参数:  position  
+ 返回值:  number  
+ 描述: 用于获取给定位置的偏移量。 position  参数是一个  IPosition  类型，表示要获取偏移量的位置。 
 
## getOptions 
+ 语法:  getOptions(): ITextModelResolvedOptions  
+ 参数: 无 
+ 返回值:  ITextModelResolvedOptions  
+ 描述: 用于获取模型的选项。 
 
## getOverviewRulerDecorations 
+ 语法:  getOverviewRulerDecorations(ownerId: number, filterOutValidation: boolean): IModelDecoration[]  
+ 参数:  ownerId ,  filterOutValidation  
+ 返回值:  IModelDecoration[]  
+ 描述: 用于获取概览标尺装饰。 ownerId  参数是一个  number  类型，表示装饰的所有者ID。 filterOutValidation  参数是一个  boolean  类型，表示是否过滤掉验证装饰。 
 
## getPositionAt 
+ 语法:  getPositionAt(offset: number): IPosition  
+ 参数:  offset  
+ 返回值:  IPosition  
+ 描述: 用于获取给定偏移量的位置。 offset  参数是一个  number  类型，表示要获取位置的偏移量。 
 
## getValue 
+ 语法:  getValue(options?: { preserveBOM: boolean; eol: string }): string  
+ 参数:  options  
+ 返回值:  string  
+ 描述: 用于获取模型的值。 options  参数是一个对象，包含两个可选属性： preserveBOM  和  eol 。 
 
## getValueInRange 
+ 语法:  getValueInRange(range: IRange, eol?: string): string  
+ 参数:  range ,  eol  
+ 返回值:  string  
+ 描述: 用于获取指定范围内的值。 range  参数是一个  IRange  类型，表示要获取值的范围。 eol  参数是一个可选的  string  类型，表示行结束符。 
 
## getValueLength 
+ 语法:  getValueLength(options?: { preserveBOM: boolean; eol: string }): number  
+ 参数:  options  
+ 返回值:  number  
+ 描述: 用于获取模型值的长度。 options  参数是一个对象，包含两个可选属性： preserveBOM  和  eol 。 
 
## getValueLengthInRange 
+ 语法:  getValueLengthInRange(range: IRange, eol?: string): number  
+ 参数:  range ,  eol  
+ 返回值:  number  
+ 描述: 用于获取指定范围内的值的长度。 range  参数是一个  IRange  类型，表示要获取值长度的范围。 eol  参数是一个可选的  string  类型，表示行结束符。 
 
## getVersionId 
+ 语法:  getVersionId(): number  
+ 参数: 无 
+ 返回值:  number  
+ 描述: 用于获取模型的版本ID。

## getWordAtPosition 
+ 语法:  getWordAtPosition(position: IPosition): IWordAtPosition  
+ 参数:  position  
+ 返回值:  IWordAtPosition  
+ 描述: 用于获取给定位置的单词。该方法接受一个位置对象作为参数，并返回一个  IWordAtPosition  对象，其中包含单词的名称、起始列和结束列。如果给定位置不包含单词，则返回  null 。 
 
其中， position  参数是一个  IPosition  类型的对象，用来描述位置。它包含以下属性： 
+ lineNumber:  number  类型，表示行号。 
+ column:  number  类型，表示列号。 
 
以下是一个示例代码，演示如何使用  getWordAtPosition  方法获取给定位置的单词：
```javascript
const editor = monaco.editor.create(document.getElementById("container"), {
  value: "function helloWorld() {\n    console.log('Hello, world!');\n}",
  language: "javascript"
});
const position = { lineNumber: 1, column: 9 }; // 获取第一行第九列的单词
const word = editor.getModel().getWordAtPosition(position);
console.log(word); // 输出：{ word: 'helloWorld', startColumn: 9, endColumn: 19 }
```
在上面的例子中，我们创建了一个  monaco-editor  实例，并在其中输入了一段 JavaScript 代码。然后，我们使用  getWordAtPosition  方法获取第一行第九列的单词，并将结果输出到控制台。
 
 getWordAtPosition  方法返回一个对象，其中包含单词的名称、起始列和结束列。如果给定位置不包含单词，则返回  null 。

## getWordUntilPosition 
+ 语法:  getWordUntilPosition(position: IPosition): IWordAtPosition  
+ 参数:  position  
+ 返回值:  IWordAtPosition  
+ 描述: 用于获取给定位置之前的单词。该方法接受一个位置对象作为参数，并返回一个  IWordAtPosition  对象，其中包含单词的名称、起始列和结束列。如果给定位置之前没有单词，则返回  null 。 
 
## isAttachedToEditor 
+ 语法:  isAttachedToEditor(): boolean  
+ 参数: 无 
+ 返回值:  boolean  
+ 描述: 用于检查模型是否附加到编辑器。如果模型已附加到编辑器，则返回  true ，否则返回  false 。 
 
## isDisposed 
+ 语法:  isDisposed(): boolean  
+ 参数: 无 
+ 返回值:  boolean  
+ 描述: 用于检查模型是否已被销毁。如果模型已被销毁，则返回  true ，否则返回  false 。 
 
## modifyPosition 
+ 语法:  modifyPosition(position: IPosition, offset: number): IPosition  
+ 参数:  position ,  offset  
+ 返回值:  IPosition  
+ 描述: 用于修改给定位置的列。该方法接受一个位置对象和一个偏移量作为参数，并返回一个新的位置对象，其中列已根据偏移量进行了修改。 
 
## normalizeIndentation 
+ 语法:  normalizeIndentation(str: string): string  
+ 参数:  str  
+ 返回值:  string  
+ 描述: 用于将字符串中的制表符和空格转换为适当的缩进。该方法接受一个字符串作为参数，并返回一个新的字符串，其中制表符和空格已被转换为适当的缩进。 
 
## onDidChangeContent 
+ 语法:  onDidChangeContent(listener: (e: IModelContentChangedEvent) => void): IDisposable  
+ 参数:  listener  
+ 返回值:  IDisposable  
+ 描述: 用于在模型内容发生更改时触发一个事件。该方法接受一个事件监听器作为参数，并返回一个  IDisposable  对象，用于取消事件监听。 
 
## popStackElement 
+ 语法:  popStackElement(): void  
+ 参数: 无 
+ 返回值: 无 
+ 描述: 用于从撤销/重做堆栈中弹出一个元素。 
 
## pushEOL 
+ 语法:  pushEOL(eol: EndOfLineSequence): void  
+ 参数:  eol  
+ 返回值: 无 
+ 描述: 用于将一个换行符推送到模型的末尾。该方法接受一个  EndOfLineSequence  枚举值作为参数。 
 
## pushEditOperations 
+ 语法:  pushEditOperations(beforeCursorState: Selection[], editOperations: IIdentifiedSingleEditOperation[], cursorStateComputer: ICursorStateComputer): Selection[]  
+ 参数:  beforeCursorState ,  editOperations ,  cursorStateComputer  
+ 返回值:  Selection[]  
+ 描述: 用于将一组编辑操作推送到模型。该方法接受三个参数：一个选择对象数组，一个编辑操作数组，以及一个计算光标状态的函数。方法返回一个新的选择对象数组，表示在编辑操作应用后的光标状态。 
 
## pushStackElement 
+ 语法:  pushStackElement(): void  
+ 参数: 无 
+ 返回值: 无 
+ 描述: 用于将一个元素推送到撤销/重做堆栈中。 
 
## setEOL 
+ 语法:  setEOL(eol: EndOfLineSequence): void  
+ 参数:  eol  
+ 返回值: 无 
+ 描述: 用于设置模型的换行符。该方法接受一个  EndOfLineSequence  枚举值作为参数。 
 
## setValue 
+ 语法:  setValue(newValue: string): void  
+ 参数:  newValue  
+ 返回值: 无 
+ 描述: 用于设置模型的内容。该方法接受一个字符串作为参数，表示新的模型内容。 
 
## updateOptions 
+ 语法:  updateOptions(newOpts: ITextModelUpdateOptions): void  
+ 参数:  newOpts  
+ 返回值: 无 
+ 描述: 用于更新模型的选项。该方法接受一个  ITextModelUpdateOptions  对象作为参数，其中包含要更新的选项。 
 
## validatePosition 
+ 语法:  validatePosition(position: IPosition): IPosition  
+ 参数:  position  
+ 返回值:  IPosition  
+ 描述: 用于验证给定位置是否有效。如果位置无效，则返回一个修正后的有效位置。 
 
## validateRange 
+ 语法:  validateRange(range: IRange): IRange  
+ 参数:  range  
+ 返回值:  IRange  
+ 描述: 用于验证给定范围是否有效。如果范围无效，则返回一个修正后的有效范围。