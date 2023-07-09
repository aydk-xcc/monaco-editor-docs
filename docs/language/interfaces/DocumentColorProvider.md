# DocumentColorProvider
`interface` [官网地址](https://microsoft.github.io/monaco-editor/docs.html#interfaces/languages.DocumentColorProvider.html)

## 方法 Methods

### provideColorPresentations
+ 语法: `provideColorPresentations(model: ITextModel, colorInfo: IColorInformation, token: CancellationToken): ProviderResult<IColorPresentation[]>`
+ 参数: 
  + model: [ITextModel](../../editor/interfaces/ITextModel.md)
  + position: [IColorInformation](./IColorInformation.md)
  + token: [CancellationToken](../../global/interfaces/CancellationToken.md)
+ 返回值: [ProviderResult](../alias.md#providerresult)\<[IColorPresentation](./IColorPresentation.md)\>`
+ 描述: `提供颜色的字符串表示形式。`


### provideDocumentColors
+ 语法: `provideDocumentColors(model: ITextModel, token: CancellationToken): ProviderResult<IColorInformation[]>`
+ 参数: 
  + model: [ITextModel](../../editor/interfaces/ITextModel.md)
  + token: [CancellationToken](../../global/interfaces/CancellationToken.md)
+ 返回值: [ProviderResult](../alias.md#providerresult)\<[IColorInformation](./IColorInformation.md)\>`
+ 描述: `提供特定型号的颜色范围。`
