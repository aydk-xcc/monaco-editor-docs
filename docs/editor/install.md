# 安装

欢迎大家补充！

## vue2 + webpack4
1. 安装
webpack的版本会影响monaco的版本，这里踩过坑 [vue2 + webpack4 运行报错](../questions.md#vue2--webpack4-运行报错)
``` javascript
// webpack5可以选择较新的版本
npm install --save monaco-editor@0.30.1

// 和monaco-editor版本对应，可以查看上面的踩坑链接
npm install --save monaco-editor-webpack-plugin@6
```
2. 配置webpack插件
``` javascript
const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');
module.exports = {
    ...
    plugins: [
        ...
        new MonacoWebpackPlugin() // 这里使用
    ],
}
```
3. 使用
``` javascript
<template>
    <div id="editor"></div>
</template>
<script>
import * as monaco from 'monaco-editor';
export default {
    name: 'Monaco',
    data() {
        return {
            editor: null
        };
    },
    mounted() {
        this.editor = monaco.editor.create(document.getElementById('editor'), {
            value: 'const foo = () => 0;',
            language: 'javascript',
            theme: 'vs-dark'
        });
    },
    beforeDestroy() {
        this.editor.dispose();
    }
};
</script>
<style scoped>
    #editor {
        width: 100%;
        height: 500px;
    }
</style>

```
这样就可以运行了

## vue3 + vite
1. 安装
``` javascript
npm install --save monaco-editor
```
2. 引入worker
``` javascript
import * as monaco from 'monaco-editor';
import EditorWorker from 'monaco-editor/esm/vs/editor/editor.worker?worker';
import JsonWorker from 'monaco-editor/esm/vs/language/json/json.worker?worker';
import CssWorker from 'monaco-editor/esm/vs/language/css/css.worker?worker';
import HtmlWorker from 'monaco-editor/esm/vs/language/html/html.worker?worker';
import TsWorker from 'monaco-editor/esm/vs/language/typescript/ts.worker?worker';

self.MonacoEnvironment = {
	getWorker(_, label) {
		console.log(_, label);
		if (label === 'json') {
			return new JsonWorker();
		}
		if (label === 'css' || label === 'scss' || label === 'less') {
			return new CssWorker();
		}
		if (label === 'html' || label === 'handlebars' || label === 'razor') {
			return new HtmlWorker();
		}
		if (label === 'typescript' || label === 'javascript') {
			return new TsWorker();
		}
		return new EditorWorker();
	}
};

monaco.languages.typescript.typescriptDefaults.setEagerModelSync(true);
```

``` javascript
// 在入口文件或者使用的地方引入即可
import '../worker';
```




