# CodeActionProviderMetadata
`interface` [官网地址](https://microsoft.github.io/monaco-editor/docs.html#interfaces/languages.CodeActionProviderMetadata.html)

有关 CodeActionProvider 提供的代码操作类型的元数据。

## 属性 Properties

### documentation
+ 类型: `string`  `可选` `只读` 
+ 默认值: `-`
+ 可选项: `-`
+ 描述: ``

``` javascript
documentation?: readonly {
    command: Command;
    kind: string;
}[]
```

### providedCodeActionKinds
+ 类型: `string` [] `可选` `只读` 
+ 默认值: `-`
+ 可选项: `-`
+ 描述: `一个字符串数组，表示提供的代码操作的类型或分类。例如，可以包含 "refactor"（重构）或 "quickfix"（快速修复）等。 `


