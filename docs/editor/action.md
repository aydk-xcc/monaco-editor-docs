# Actions
``` javascript
<script setup lang="ts">
import * as monaco from 'monaco-editor';
import { onBeforeUnmount, onMounted, onUnmounted, ref, toRaw } from 'vue'
import {BASE_HOST} from '../api/serviceConfig';
import request from '../api/request';
import '../worker';
import * as actions from "monaco-editor/esm/vs/platform/actions/common/actions";
let menus = actions.MenuRegistry._menuItems
let contextMenuEntry = [...menus].find(entry => entry[0].id == "EditorContext")
let contextMenuLinks = contextMenuEntry[1]
let removableIds = [
    // "editor.action.clipboardCutAction",
    // "editor.action.clipboardCopyAction",
    // "editor.action.clipboardPasteAction",
    "editor.action.refactor",
    "editor.action.sourceAction",
    "editor.action.revealDefinition",
    "editor.action.revealDeclaration",
    "editor.action.goToTypeDefinition",
    "editor.action.goToImplementation",
    "editor.action.goToReferences",
    "editor.action.formatDocument",
    "editor.action.formatSelection",
    "editor.action.changeAll",
    "editor.action.rename",
    "editor.action.quickOutline",
    "editor.action.quickCommand",
    "Peek",
]
let removeById = (list: any, ids: any) => {
  console.log(ids);
    let node = list._first
    do {
        let shouldRemove = ids.includes(node.element?.command?.id) || ids.includes(node.element?.title)
        if (shouldRemove) { list._remove(node) }
    } while ((node = node.next))
}
removeById(contextMenuLinks, removableIds)

const editorRef = ref<HTMLElement | null>(null);
let editor:monaco.editor.IStandaloneCodeEditor|null = null;
const files = ref({arr:[]});
onMounted(async () => {
	if (editorRef.value && !editor) {
    monaco.languages.registerCompletionItemProvider('javascript', {
      provideCompletionItems: function(model, position) {
          // 取消默认行为
          monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet = 0;
          // 返回您的建议
          return {
              suggestions: [
                  {
                      label: 'myLabel',
                      kind: monaco.languages.CompletionItemKind.Text,
                      insertText: 'myText'
                  }
              ]
          };
      }
  });
		editor = monaco.editor.create(editorRef.value, {
			value: ['function x() {', '\tconsole.log("Hello world!");', '}'].join('\n'),
			language: 'javascript',
      theme: 'vs', //官方自带三种主题vs, hc-black, or vs-dark
      selectOnLineNumbers: true,//显示行号
      roundedSelection: false,
      readOnly: false, // 只读
      cursorStyle: 'line', //光标样式
      automaticLayout: true, //自动布局
      glyphMargin: true, //字形边缘
      useTabStops: false,
      fontSize: 15, //字体大小
      autoIndent: true, //自动布局
      quickSuggestionsDelay: 100, //代码提示延时
		});

	}
  fetch(BASE_HOST + '/files').then(async res => {
    files.value  = await res.json();
    console.log(files.value);
  })
});
onUnmounted(() => toRaw(editor)?.dispose());
function clickFile(name: string) {
  request.get(BASE_HOST + '/singlefile', {
    params: {
      name: name
    }
  }).then(e => {
    console.log(e);
    editor.setValue(e);
  })
}
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-aside class="slider" width="200px">
        <div
          v-for="(item, index) in files.arr"
          :key="index"
          class="file"
          @click="clickFile(item.name)"
        >
          {{ item.name }}
        </div>
      </el-aside>
      <el-main class="main">
        <div class="editor" ref="editorRef" />
      </el-main>
    </el-container>
  </div>
</template>
<style>
  .editor {
    width: 100vw;
    height: 100vh;
  }
  .slider {
    background-color: white;
    border-right: 1px #f0f0f0 solid;
  }

  .file {
    color: black;
    background-color: white;
    padding: 5px 10px;
  }

  .file:hover {
    background-color: #ecf5ff;
  }

  .main {
    padding: 0px;
  }
</style>

```