import{_ as D}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as c,c as r,a as n,b as s,d as a,w as e,e as p}from"./app-c481a5ec.js";const i={},y=n("h1",{id:"菜单",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#菜单","aria-hidden":"true"},"#"),s(" 菜单")],-1),d=n("p",null,"关于鼠标右键的菜单定义相关的例子：",-1),C=n("h2",{id:"移除默认菜单",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#移除默认菜单","aria-hidden":"true"},"#"),s(" 移除默认菜单")],-1),u={href:"https://github.com/microsoft/monaco-editor/issues/1567",target:"_blank",rel:"noopener noreferrer"},v=p(`<p>上述url会有一些问题参考下面注意事项</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">*</span><span style="color:#D4D4D4;"> </span><span style="color:#C586C0;">as</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">actions</span><span style="color:#D4D4D4;"> </span><span style="color:#C586C0;">from</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&quot;monaco-editor/esm/vs/platform/actions/common/actions&quot;</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6;">let</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">menus</span><span style="color:#D4D4D4;"> = </span><span style="color:#9CDCFE;">actions</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">MenuRegistry</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">_menuItems</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#6A9955;">// 注意 entry[0].id</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#569CD6;">let</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">contextMenuEntry</span><span style="color:#D4D4D4;"> = [...</span><span style="color:#9CDCFE;">menus</span><span style="color:#D4D4D4;">].</span><span style="color:#DCDCAA;">find</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">entry</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">entry</span><span style="color:#D4D4D4;">[</span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">].</span><span style="color:#9CDCFE;">id</span><span style="color:#D4D4D4;"> == </span><span style="color:#CE9178;">&quot;EditorContext&quot;</span><span style="color:#D4D4D4;">);</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#569CD6;">let</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">contextMenuLinks</span><span style="color:#D4D4D4;"> = </span><span style="color:#9CDCFE;">contextMenuEntry</span><span style="color:#D4D4D4;">[</span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#6A9955;">// 感谢群里同学的贡献</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#569CD6;">let</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">removableIds</span><span style="color:#D4D4D4;"> = [</span></span>
<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#CE9178;">&quot;editor.action.clipboardCutAction&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#CE9178;">&quot;editor.action.clipboardCopyAction&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#CE9178;">&quot;editor.action.clipboardPasteAction&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#CE9178;">&quot;editor.action.refactor&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#CE9178;">&quot;editor.action.sourceAction&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#CE9178;">&quot;editor.action.revealDefinition&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#CE9178;">&quot;editor.action.revealDeclaration&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#CE9178;">&quot;editor.action.goToTypeDefinition&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#CE9178;">&quot;editor.action.goToImplementation&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#CE9178;">&quot;editor.action.goToReferences&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#CE9178;">&quot;editor.action.formatDocument&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#CE9178;">&quot;editor.action.formatSelection&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#CE9178;">&quot;editor.action.changeAll&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#CE9178;">&quot;editor.action.rename&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#CE9178;">&quot;editor.action.quickOutline&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#CE9178;">&quot;editor.action.quickCommand&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#CE9178;">&quot;Peek&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">    ];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#569CD6;">let</span><span style="color:#D4D4D4;"> </span><span style="color:#DCDCAA;">removeById</span><span style="color:#D4D4D4;"> = (</span><span style="color:#9CDCFE;">list</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">ids</span><span style="color:#D4D4D4;">) </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#569CD6;">let</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">node</span><span style="color:#D4D4D4;"> = </span><span style="color:#9CDCFE;">list</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">_first</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#C586C0;">do</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#6A9955;">// 注意 node.element?.command?.id || node.element?.title 的用法</span></span>
<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#569CD6;">let</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">shouldRemove</span><span style="color:#D4D4D4;"> = </span><span style="color:#9CDCFE;">ids</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">includes</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">node</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">element</span><span style="color:#D4D4D4;">?.</span><span style="color:#9CDCFE;">command</span><span style="color:#D4D4D4;">?.</span><span style="color:#9CDCFE;">id</span><span style="color:#D4D4D4;"> || </span><span style="color:#9CDCFE;">node</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">element</span><span style="color:#D4D4D4;">?.</span><span style="color:#9CDCFE;">title</span><span style="color:#D4D4D4;">);</span></span>
<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#C586C0;">if</span><span style="color:#D4D4D4;"> (</span><span style="color:#9CDCFE;">shouldRemove</span><span style="color:#D4D4D4;">) { </span><span style="color:#9CDCFE;">list</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">_remove</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">node</span><span style="color:#D4D4D4;">)  }</span></span>
<span class="line"><span style="color:#D4D4D4;">      } </span><span style="color:#C586C0;">while</span><span style="color:#D4D4D4;"> ((</span><span style="color:#9CDCFE;">node</span><span style="color:#D4D4D4;"> = </span><span style="color:#9CDCFE;">node</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">next</span><span style="color:#D4D4D4;">));</span></span>
<span class="line"><span style="color:#D4D4D4;">    };</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#DCDCAA;">removeById</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">contextMenuLinks</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">removableIds</span><span style="color:#D4D4D4;">);</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container danger"><p class="hint-container-title">注意</p><ol><li><p>issue中的 entry[e]._debugName 已经找不到了，调试发现现在是entry[0].id</p></li><li><p>let shouldRemove = ids.includes(node.element?.command?.id); 这一行代码移除不掉peek这个菜单，原因是它是个二级菜单，数据结构不太一样，推测应该是版本更新导致的，所以调试之后改成 let shouldRemove = ids.includes(node.element?.command?.id || node.element?.title); 兼容一下，就可以全部移除默认的菜单啦</p></li></ol></div><h2 id="自定义菜单" tabindex="-1"><a class="header-anchor" href="#自定义菜单" aria-hidden="true">#</a> 自定义菜单</h2>`,4),m=p(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"></span>
<span class="line"><span style="color:#9CDCFE;">editor</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">addAction</span><span style="color:#D4D4D4;">({</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">id:</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;my-custom-action&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">label:</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;My Custom Action&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">contextMenuGroupId:</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;navigation&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#DCDCAA;">run</span><span style="color:#9CDCFE;">:</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">function</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">ed</span><span style="color:#D4D4D4;">) {</span></span>
<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#9CDCFE;">console</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">log</span><span style="color:#D4D4D4;">(</span><span style="color:#CE9178;">&#39;My custom action was clicked!&#39;</span><span style="color:#D4D4D4;">);</span></span>
<span class="line"><span style="color:#D4D4D4;">    }</span></span>
<span class="line"><span style="color:#D4D4D4;">});</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function E(b,h){const t=o("ExternalLinkIcon"),l=o("RouterLink");return c(),r("div",null,[y,d,C,n("p",null,[s("移除菜单的操作，应该比较简单，但是官方文档硬是没找到方案，搜索了"),n("a",u,[s("issue"),a(t)]),s("和咨询微信群里的同学（欢迎扫码加群）找到了思路， 具体代码如下，这里是删除所有的，如果想单个删除可以参考"),a(l,{to:"/editor/appendix.html"},{default:e(()=>[s("action")]),_:1}),s("的含义自行决定,")]),v,n("p",null,[s("直接使用 实例的"),a(l,{to:"/editor/editor.html#addaction"},{default:e(()=>[s("addAction")]),_:1}),s("方法即可")]),m])}const _=D(i,[["render",E],["__file","contextMenu.html.vue"]]);export{_ as default};