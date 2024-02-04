---
order: 3
---
# 布局

## 编辑器大小
 在create编辑时，通过配置 [automaticLayout](../editor/interfaces/IStandaloneDiffEditorConstructionOptions.md#automaticlayout) 实现编辑器大小自适应：
 ``` javascript
    monaco.editor.create(editorRef.value, {
                value: '',
                language: "javascript",
                fixedOverflowWidgets: true,
                fontFamily: "Arial",
                fontSize: 14,
                readOnly: true,
                tabSize: 8,
                insertSpaces: true,
                wordWrap: 'on',
                wordWrapColumn: 120,
                // 默认值为false
                automaticLayout: true,
            });
 ```

::: danger 

这个属性设置设置为 true ，则编辑器会在窗口大小发生变化时自动调整大小以适应新的窗口大小。 所以需要注意的是，如果有类似于侧边栏菜单关闭和展开的逻辑，一定要保证编辑器的容器盒子能够自使用宽度变化，否则无法触发编辑器的自适应

:::