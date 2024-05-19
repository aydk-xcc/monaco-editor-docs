import{_ as r}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o as s,c as d,a as e,b as n,d as i,w as l,e as c}from"./app-c481a5ec.js";const h={},g={id:"linerangemapping",tabindex:"-1"},u=e("a",{class:"header-anchor",href:"#linerangemapping","aria-hidden":"true"},"#",-1),p={href:"https://microsoft.github.io/monaco-editor/docs.html#classes/editor.LineRangeMapping.html",target:"_blank",rel:"noopener noreferrer"},_=e("h2",{id:"构造方法-constructor",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#构造方法-constructor","aria-hidden":"true"},"#"),n(" 构造方法 constructor")],-1),m=e("p",null,[n("用法："),e("code",null,"new LineRangeMapping(originalRange: LineRange, modifiedRange: LineRange, innerChanges: RangeMapping[]): LineRangeMapping")],-1),R=e("h2",{id:"参数-properties",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#参数-properties","aria-hidden":"true"},"#"),n(" 参数 Properties")],-1),f=e("h3",{id:"innerchanges",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#innerchanges","aria-hidden":"true"},"#"),n(" innerChanges:")],-1),L=e("li",null,"如果尚未计算内部更改，则将其设置为未定义。 否则，它表示此行范围内的字符级差异。 每个范围映射的原始范围应包含在原始行范围内（修改后相同），换行除外。 不得为空数组。",-1),M=e("h3",{id:"modifiedrange",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#modifiedrange","aria-hidden":"true"},"#"),n(" modifiedRange")],-1),b=e("li",null,"修改后的文本模型中的行范围",-1),x=e("h3",{id:"originalrange",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#originalrange","aria-hidden":"true"},"#"),n(" originalRange")],-1),C=e("li",null,"原始的文本模型中的行范围",-1),k=c('<h2 id="访问器-accessors" tabindex="-1"><a class="header-anchor" href="#访问器-accessors" aria-hidden="true">#</a> 访问器 Accessors</h2><ul><li>changedLineCount 获取改动的行数</li></ul><h2 id="方法-methods" tabindex="-1"><a class="header-anchor" href="#方法-methods" aria-hidden="true">#</a> 方法 Methods</h2><ul><li>toString 字符串格式化方法</li><li>inverse <ul><li>用法 <code>inverse(mapping: LineRangeMapping[], originalLineCount: number, modifiedLineCount: number): LineRangeMapping[]</code></li><li>参数说明： <ul><li>mapping: LineRangeMapping[]</li><li>originalLineCount: number</li><li>modifiedLineCount: number</li></ul></li><li>返回值 LineRangeMapping[]</li></ul></li></ul>',4);function v(N,V){const o=t("ExternalLinkIcon"),a=t("RouterLink");return s(),d("div",null,[e("h1",g,[u,n(),e("a",p,[n("LineRangeMapping"),i(o)])]),_,m,e("ul",null,[e("li",null,[n("参数说明 "),e("ul",null,[e("li",null,[n("originalRange: "),i(a,{to:"/editor/classes/lineRange.html"},{default:l(()=>[n("LineRange")]),_:1})]),e("li",null,[n("modifiedRange: "),i(a,{to:"/editor/classes/lineRange.html"},{default:l(()=>[n("LineRange")]),_:1})]),e("li",null,[n("innerChanges: "),i(a,{to:"/editor/classes/RangeMapping.html"},{default:l(()=>[n("RangeMapping")]),_:1})])])])]),R,f,e("ul",null,[e("li",null,[n("类型"),i(a,{to:"/editor/classes/RangeMapping.html"},{default:l(()=>[n("RangeMapping")]),_:1})]),L]),M,e("ul",null,[e("li",null,[n("类型 "),i(a,{to:"/editor/classes/lineRange.html"},{default:l(()=>[n("LineRange")]),_:1})]),b]),x,e("ul",null,[e("li",null,[n("类型 "),i(a,{to:"/editor/classes/lineRange.html"},{default:l(()=>[n("LineRange")]),_:1})]),C]),k])}const E=r(h,[["render",v],["__file","LineRangeMapping.html.vue"]]);export{E as default};