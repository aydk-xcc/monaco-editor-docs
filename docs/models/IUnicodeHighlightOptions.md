# IUnicodeHighlightOptions
`interface` 用于定义Unicode高亮的选项

## 参数 Properties

### allowedCharacters?
+ 类型: `Record<string, true>` `可选`
+ 默认值: `-`
+ 可选项: `-`
+ 描述: `定义未突出显示的允许字符`

### allowedLocales?
+ 类型: `Record<string, true>` `可选`
+ 默认值: `-`
+ 可选项: `-`
+ 描述: `未突出显示在允许的语言环境中常见的 Unicode 字符。`

### ambiguousCharacters?
+ 类型: `boolean`  `可选`
+ 默认值: `-`
+ 可选项: `-`
+ 描述: `控制是否突出显示可能与基本 ASCII 字符混淆的字符，当前用户区域设置中常见的字符除外。`

### includeComments?
+ 类型: `boolean | "inUntrustedWorkspace"` `可选`
+ 默认值: `-`
+ 可选项: `-`
+ 描述: `控制注释中的字符是否也应使用​​ unicode 高亮显示。`

### includeStrings?
+ 类型: `boolean | "inUntrustedWorkspace"` `可选`
+ 默认值: `-`
+ 可选项: `-`
+ 描述: `控制字符串中的字符是否也应进行 unicode 突出显示。`

### invisibleCharacters?
+ 类型: `boolean`  `可选`
+ 默认值: `-`
+ 可选项: `-`
+ 描述: `控制是否突出显示仅保留空间或根本没有宽度的字符。`

### nonBasicASCII?
+ 类型: `boolean | "inUntrustedWorkspace"` `可选`
+ 默认值: `-`
+ 可选项: `-`
+ 描述: `控制是否突出显示所有非基本 ASCII 字符。只有 U+0020 和 U+007E 之间的字符、制表符、换行符和回车符被认为是基本 ASCII。`