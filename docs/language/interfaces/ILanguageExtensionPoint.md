# ILanguageExtensionPoint
`interface` [官网地址](https://microsoft.github.io/monaco-editor/docs.html#interfaces/languages.ILanguageExtensionPoint.html)
## 属性 Properties
### aliases?
+ 类型: `string`[]  `可选`
+ 默认值: `-`
+ 可选项: `-`
+ 描述: `字符串数组，可选。该语言的别名。 `

### configuration?
+ 类型: [Url](../../global/classes/Url.md) `可选`
+ 默认值: `-`
+ 可选项: `-`
+ 描述: `对象，可选。该语言的配置信息。`

### extensions?
+ 类型: `string`[]  `可选`
+ 默认值: `-`
+ 可选项: `-`
+ 描述: ``

### filenamePatterns?
+ 类型: `string`[] `可选`
+ 默认值: `-`
+ 可选项: `-`
+ 描述: `字符串数组，可选。文件名模式数组。 `

### filenames?
+ 类型: `string`[] `可选`
+ 默认值: `-`
+ 可选项: `-`
+ 描述: ``

### firstLine?
+ 类型: `string` `可选`
+ 默认值: `-`
+ 可选项: `-`
+ 描述: `字符串数组，可选。该语言的第一行文本。 `

### id
+ 类型: `string`  `必选` 
+ 默认值: `-`
+ 可选项: `-`
+ 描述: `字符串，必需。语言 ID。 `

### mimetypes?
+ 类型: `string`[] `可选`
+ 默认值: `-`
+ 可选项: `-`
+ 描述: `字符串数组，可选。该语言的 MIME 类型。 `


```javascript
import { ILanguageExtensionPoint } from 'monaco-editor';
 const myLanguage: ILanguageExtensionPoint = {
  id: 'mySpecialLanguage',
  extensions: ['.msl'],
  aliases: ['My Special Language', 'mySL'],
  mimetypes: ['text/x-my-special-language'],
  filenamePatterns: ['*.mySL', '*.msl'],
  firstLine: ['// My Special Language'],
  configuration: {
    comments: {
      lineComment: '//',
      blockComment: ['/*', '*/'],
    },
    brackets: [['{', '}'], ['[', ']'], ['(', ')']],
    autoClosingPairs: [
      { open: '{', close: '}' },
      { open: '[', close: ']' },
      { open: '(', close: ')' },
    ],
  },
};
```