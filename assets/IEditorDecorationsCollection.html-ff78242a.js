import{_ as c}from"./plugin-vue_export-helper-c27b6911.js";import{r as i,o as r,c as s,a as e,b as l,d as o,w as t,e as a}from"./app-c481a5ec.js";const h={},u=e("h1",{id:"ieditordecorationscollection",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#ieditordecorationscollection","aria-hidden":"true"},"#"),l(" IEditorDecorationsCollection")],-1),_=e("code",null,"interface",-1),g={href:"https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor.IEditorDecorationsCollection.html",target:"_blank",rel:"noopener noreferrer"},f=a('<h2 id="属性-properties" tabindex="-1"><a class="header-anchor" href="#属性-properties" aria-hidden="true">#</a> 属性 Properties</h2><h3 id="length" tabindex="-1"><a class="header-anchor" href="#length" aria-hidden="true">#</a> length</h3><ul><li>类型: <code>number</code> <code>可选</code></li><li>默认值: <code>-</code></li><li>可选项: <code>-</code></li><li>描述: <code>获取装饰计数。</code></li></ul><h3 id="ondidchange" tabindex="-1"><a class="header-anchor" href="#ondidchange" aria-hidden="true">#</a> onDidChange</h3>',4),m=e("code",null,"可选",-1),b=e("li",null,[l("默认值: "),e("code",null,"-")],-1),x=e("li",null,[l("可选项: "),e("code",null,"-")],-1),D=e("li",null,[l("描述: "),e("code",null,"当编辑器中的装饰发生变化时发出的事件，但变化不是由我们设置或清除集合引起的。")],-1),p=a('<h2 id="方法-methods" tabindex="-1"><a class="header-anchor" href="#方法-methods" aria-hidden="true">#</a> 方法 Methods</h2><h3 id="clear" tabindex="-1"><a class="header-anchor" href="#clear" aria-hidden="true">#</a> clear</h3><ul><li>语法: <code>clear(): void</code></li><li>参数: ``</li><li>返回值: <code>-</code></li><li>描述: <code>删除所有以前的装饰。</code></li></ul><h3 id="getrange" tabindex="-1"><a class="header-anchor" href="#getrange" aria-hidden="true">#</a> getRange</h3>',4),I=e("li",null,[l("语法: "),e("code",null,"getRange(index: number): Range")],-1),R=e("li",null,[l("参数: "),e("ul",null,[e("li",null,[l("index: "),e("code",null,"number")])])],-1),E=e("li",null,[l("描述: "),e("code",null,"获取装饰的范围。")],-1),C=e("h3",{id:"getranges",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#getranges","aria-hidden":"true"},"#"),l(" getRanges")],-1),M=e("li",null,[l("语法: "),e("code",null,"getRanges(): Range[]")],-1),k=e("li",null,"参数: ``",-1),v=e("li",null,[l("描述: "),e("code",null,"获取装饰品的所有范围。")],-1),w=e("h3",{id:"has",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#has","aria-hidden":"true"},"#"),l(" has")],-1),L=e("li",null,[l("语法: "),e("code",null,"has(decoration: IModelDecoration): boolean")],-1),N=e("li",null,[l("返回值: "),e("code",null,"boolean")],-1),V=e("li",null,[l("描述: "),e("code",null,"确定装饰是否在此集合中。")],-1),B=e("h3",{id:"set",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#set","aria-hidden":"true"},"#"),l(" set")],-1),y=e("li",null,[l("语法: "),e("code",null,"set(newDecorations: readonly IModelDeltaDecoration[]): string[]")],-1),P=e("li",null,[l("返回值: "),e("code",null,"string[]")],-1),S=e("li",null,[l("描述: "),e("code",null,"用 newDecorations 替换所有以前的装饰。")],-1);function T(j,q){const d=i("ExternalLinkIcon"),n=i("RouterLink");return r(),s("div",null,[u,e("p",null,[_,l(),e("a",g,[l("官网地址"),o(d)]),l(" 装饰品的集合")]),f,e("ul",null,[e("li",null,[l("类型: IEvent"),o(n,{to:"/editor/interfaces/IModelDecorationsChangedEvent.html"},{default:t(()=>[l("IModelDecorationsChangedEvent")]),_:1}),l(),m]),b,x,D]),p,e("ul",null,[I,R,e("li",null,[l("返回值: "),o(n,{to:"/global/classes/Range.html"},{default:t(()=>[l("Range")]),_:1})]),E]),C,e("ul",null,[M,k,e("li",null,[l("返回值: "),o(n,{to:"/global/classes/Range.html"},{default:t(()=>[l("Range")]),_:1})]),v]),w,e("ul",null,[L,e("li",null,[l("参数: "),e("ul",null,[e("li",null,[l("decoration: "),o(n,{to:"/editor/interfaces/IModelDecoration.html"},{default:t(()=>[l("IModelDecoration")]),_:1})])])]),N,V]),B,e("ul",null,[y,e("li",null,[l("参数: "),e("ul",null,[e("li",null,[l("newDecorations: "),o(n,{to:"/editor/interfaces/IModelDeltaDecoration.html"},{default:t(()=>[l("IModelDeltaDecoration")]),_:1}),l("[]")])])]),P,S])])}const F=c(h,[["render",T],["__file","IEditorDecorationsCollection.html.vue"]]);export{F as default};