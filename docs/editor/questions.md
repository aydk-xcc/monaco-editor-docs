# 常见问题

## vue2 + webpack4 运行报错
``` javascript
monaco-editor@0.37.1/node_modules/monaco-editor/esm/vs/language/typescript/monaco.contribution.js

Module parse failed: Unexpected token (37:13)
You may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders
|     return lazyLanguageLoaders[languageId];
|   }
>   _languageId;
|   _loadingTriggered;
|   _lazyLoadPromise;

```
官方仓库issues[issues](https://github.com/microsoft/monaco-editor/issues/2903) 解决问题
::: tip 
1.要么升级webpack到5.**

2.要么降低monaco-editor的版本到0.30.1以下
:::

::: danger 注意
如果降低monaco-editor的版本的时候，要选择匹配的插件版本
:::
[monaco-editor-webpack-plugin](https://www.npmjs.com/package/monaco-editor-webpack-plugin)

| monaco-editor-webpack-plugin |	monaco-editor|
|------------------------------|-------------|
|7.*.*|	>= 0.31.0|
|6.*.*|	0.30.*|
|5.*.*|	0.29.*|
|4.*.*|	0.25.*, 0.26.*, 0.27.*, 0.28.*|
|3.*.*|	0.22.*, 0.23.*, 0.24.*|
|2.*.*|	0.21.*|
|1.9.*|	0.20.*|
|1.8.*|	0.19.*|
|1.7.*|	0.18.*|
