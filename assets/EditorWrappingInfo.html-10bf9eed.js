import{_ as d}from"./plugin-vue_export-helper-c27b6911.js";import{r,o as a,c as n,a as e,b as i,d as c,e as t}from"./app-c481a5ec.js";const l={},s=e("h1",{id:"editorwrappinginfo",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#editorwrappinginfo","aria-hidden":"true"},"#"),i(" EditorWrappingInfo")],-1),p=e("code",null,"interface",-1),h={href:"https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor.EditorWrappingInfo.html",target:"_blank",rel:"noopener noreferrer"},f=t('<p>编辑器的换行信息</p><h2 id="属性-properties" tabindex="-1"><a class="header-anchor" href="#属性-properties" aria-hidden="true">#</a> 属性 Properties</h2><h3 id="isdominatedbylonglines" tabindex="-1"><a class="header-anchor" href="#isdominatedbylonglines" aria-hidden="true">#</a> isDominatedByLongLines</h3><ul><li>类型: <code>boolean</code> <code>只读</code></li><li>默认值: <code>-</code></li><li>可选项: <code>-</code></li><li>描述: <code>表示代码是否被长行所占据。如果代码中存在很长的行，那么它们可能会导致编辑器的布局出现问题，使得编辑器的其他部分无法正常显示。这个属性可以用来检查编辑器中是否存在这个问题，并采取相应的措施来解决它。</code></li></ul><h3 id="isviewportwrapping" tabindex="-1"><a class="header-anchor" href="#isviewportwrapping" aria-hidden="true">#</a> isViewportWrapping</h3><ul><li>类型: <code>只读</code></li><li>默认值: <code>-</code></li><li>可选项: <code>-</code></li><li>描述: <code>表示是否启用了视口换行（Viewport Wrapping）。视口换行是一种特殊的换行模式，它只在当前视口内的文本行中进行换行，而不会对整个文档进行重新排版。这种模式可以提高编辑器的性能和响应速度，特别是在处理大型文档时。如果这个属性被设置为 true ，则表示启用了视口换行；如果设置为 false ，则表示禁用了视口换行</code></li></ul><h3 id="iswordwrapminified" tabindex="-1"><a class="header-anchor" href="#iswordwrapminified" aria-hidden="true">#</a> isWordWrapMinified</h3><ul><li>类型: <code>boolean</code> <code>只读</code></li><li>默认值: <code>-</code></li><li>可选项: <code>-</code></li><li>描述: <code>表示是否启用了单词换行缩短（Word Wrap Minification）。单词换行缩短是一种特殊的换行模式，它会在换行处缩短单词，以便在有限的空间内显示更多的文本。如果这个属性被设置为 true ，则表示启用了单词换行缩短；如果设置为 false ，则表示禁用了单词换行缩短。</code></li></ul><h3 id="wrappingcolumn" tabindex="-1"><a class="header-anchor" href="#wrappingcolumn" aria-hidden="true">#</a> wrappingColumn</h3><ul><li>类型: <code>number</code> <code>只读</code></li><li>默认值: <code>-</code></li><li>可选项: <code>-</code></li><li>描述: <code>表示在哪个列数处进行换行。如果这个属性被设置为一个正整数，则表示在这个列数处进行换行。如果这个属性被设置为 0 或负整数，则表示禁用换行。当编辑器中的一行超过了指定的列数时，编辑器会自动将其拆分为多行，以便在编辑器中显示。该属性可以通过编辑器的 updateOptions 方法进行设置。</code></li></ul>',10);function u(m,_){const o=r("ExternalLinkIcon");return a(),n("div",null,[s,e("p",null,[p,i(),e("a",h,[i("官网地址"),c(o)])]),f])}const b=d(l,[["render",u],["__file","EditorWrappingInfo.html.vue"]]);export{b as default};
