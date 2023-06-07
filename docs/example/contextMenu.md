# contextmenu

关于鼠标右键的菜单定义相关的例子：

## 移除默认菜单
移除菜单的操作，应该比较简单，但是官方文档硬是没找到方案，搜索了[issue](https://github.com/microsoft/monaco-editor/issues/1567)和咨询微信群里的同学（欢迎扫码加群）找到了思路，
具体代码如下，这里是删除所有的，如果想单个删除可以参考[action](../editor/appendix.md)的含义自行决定,

上述url会有一些问题参考下面注意事项

```javascript
import * as actions from "monaco-editor/esm/vs/platform/actions/common/actions";

let menus = actions.MenuRegistry._menuItems;
    // 注意 entry[0].id
    let contextMenuEntry = [...menus].find(entry => entry[0].id == "EditorContext");
    let contextMenuLinks = contextMenuEntry[1];

    // 感谢群里同学的贡献
    let removableIds = [
        "editor.action.clipboardCutAction",
        "editor.action.clipboardCopyAction",
        "editor.action.clipboardPasteAction",
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
    ];

    let removeById = (list, ids) => {
      let node = list._first;
      do {
        // 注意 node.element?.command?.id || node.element?.title 的用法
        let shouldRemove = ids.includes(node.element?.command?.id || node.element?.title);
        if (shouldRemove) { list._remove(node)  }
      } while ((node = node.next));
    };

    removeById(contextMenuLinks, removableIds);
```

::: danger 注意

1. issue中的 entry[e]._debugName 已经找不到了，调试发现现在是entry[0].id

2. let shouldRemove = ids.includes(node.element?.command?.id); 这一行代码移除不掉peek这个菜单，原因是它是个二级菜单，数据结构不太一样，推测应该是版本更新导致的，所以调试之后改成
   let shouldRemove = ids.includes(node.element?.command?.id || node.element?.title); 兼容一下，就可以全部移除默认的菜单啦

:::


## 自定义菜单

直接使用 实例的[addAction](../editor/instance.md#addaction)方法即可

```javascript

editor.addAction({
    id: 'my-custom-action',
    label: 'My Custom Action',
    contextMenuGroupId: 'navigation',
    run: function(ed) {
        console.log('My custom action was clicked!');
    }
});

```