import{_ as d}from"./plugin-vue_export-helper-c27b6911.js";import{r as s,o as r,c,a as l,b as e,d as n,w as i,e as t}from"./app-c481a5ec.js";const u={},p=l("h1",{id:"istandalonediffeditor",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#istandalonediffeditor","aria-hidden":"true"},"#"),e(" IStandaloneDiffEditor")],-1),h=l("code",null,"interface",-1),_={href:"https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor.IStandaloneDiffEditor.html",target:"_blank",rel:"noopener noreferrer"},D=t('<h2 id="事件-events" tabindex="-1"><a class="header-anchor" href="#事件-events" aria-hidden="true">#</a> 事件 Events</h2><h3 id="ondidchangemodel" tabindex="-1"><a class="header-anchor" href="#ondidchangemodel" aria-hidden="true">#</a> onDidChangeModel</h3><ul><li>语法: <code>onDidChangeModel: IEvent&lt;void&gt;</code></li><li>参数: ``</li><li>返回值: <code>IEvent&lt;void&gt;</code></li><li>描述: <code>更改差异模型时发出的事件（即差异编辑器显示新内容）。</code></li></ul><h3 id="ondidupdatediff" tabindex="-1"><a class="header-anchor" href="#ondidupdatediff" aria-hidden="true">#</a> onDidUpdateDiff</h3><ul><li>语法: <code>onDidUpdateDiff: IEvent&lt;void&gt;</code></li><li>参数: ``</li><li>返回值: <code>IEvent&lt;void&gt;</code></li><li>描述: <code>当对比信息计算发生变更时触发</code></li></ul><h3 id="ondiddispose" tabindex="-1"><a class="header-anchor" href="#ondiddispose" aria-hidden="true">#</a> onDidDispose</h3>',6),f=l("li",null,[e("语法: "),l("code",null,"onDidDispose(listener: (() => void)): IDisposable")],-1),y=l("li",null,[e("参数: "),l("ul",null,[l("li",null,"listener: (() => void) (): void Returns void")])],-1),m=l("li",null,[e("描述: "),l("code",null,"当编辑器被释放时发出的事件")],-1),v=t(`<h2 id="方法-methods" tabindex="-1"><a class="header-anchor" href="#方法-methods" aria-hidden="true">#</a> 方法 Methods</h2><h2 id="addaction" tabindex="-1"><a class="header-anchor" href="#addaction" aria-hidden="true">#</a> addAction</h2><ul><li>语法: <code>addAction(descriptor: monaco.editor.IActionDescriptor): IDisposable;</code></li><li>参数: <code>monaco.editor.IActionDescriptor</code></li><li>返回值: <code>IDisposable对象</code></li><li>描述: <code>用来向编辑器中添加自定义的操作。</code></li></ul><p>其中，descriptor参数是一个对象，用来描述要添加的操作。它包含以下属性：</p><div class="hint-container tip"><p class="hint-container-title">descriptor参数</p><p>id：操作的唯一标识符，必须是字符串类型。</p><p>label：操作的显示名称，必须是字符串类型。</p><p>keybindings：操作的快捷键，可以是字符串类型的快捷键，也可以是字符串类型的快捷键数组。</p><p>contextMenuGroupId：操作在右键菜单中的分组 ID，必须是字符串类型。</p><p>contextMenuOrder：操作在右键菜单中的排序位置，必须是数字类型。</p><p>run：操作的执行函数，必须是一个函数类型，接受一个 ICodeEditor类型的参数。</p></div><p>addAction方法返回一个 IDisposable对象，用来取消添加的操作。可以通过调用 dispose方法来取消添加的操作。 下面是一个示例，演示如何向编辑器中添加一个自定义的操作：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#569CD6;">const</span><span style="color:#D4D4D4;"> </span><span style="color:#4FC1FF;">editor</span><span style="color:#D4D4D4;"> = </span><span style="color:#9CDCFE;">monaco</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">editor</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">create</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">document</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">getElementById</span><span style="color:#D4D4D4;">(</span><span style="color:#CE9178;">&#39;container&#39;</span><span style="color:#D4D4D4;">), {</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">value:</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">language:</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;plaintext&#39;</span></span>
<span class="line"><span style="color:#D4D4D4;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#9CDCFE;">editor</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">addAction</span><span style="color:#D4D4D4;">({</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">id:</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;my-custom-action&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">label:</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;My Custom Action&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">keybindings:</span><span style="color:#D4D4D4;"> [</span></span>
<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#9CDCFE;">monaco</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">KeyMod</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">CtrlCmd</span><span style="color:#D4D4D4;"> | </span><span style="color:#9CDCFE;">monaco</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">KeyCode</span><span style="color:#D4D4D4;">.</span><span style="color:#4FC1FF;">KEY_S</span></span>
<span class="line"><span style="color:#D4D4D4;">    ],</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">contextMenuGroupId:</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;navigation&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">contextMenuOrder:</span><span style="color:#D4D4D4;"> </span><span style="color:#B5CEA8;">1.5</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#DCDCAA;">run</span><span style="color:#9CDCFE;">:</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">function</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">ed</span><span style="color:#D4D4D4;">) {</span></span>
<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#9CDCFE;">console</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">log</span><span style="color:#D4D4D4;">(</span><span style="color:#CE9178;">&#39;My custom action executed&#39;</span><span style="color:#D4D4D4;">);</span></span>
<span class="line"><span style="color:#D4D4D4;">    }</span></span>
<span class="line"><span style="color:#D4D4D4;">});</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个示例中，我们创建了一个编辑器，并向它添加了一个名为 my-custom-action的自定义操作。这个操作的显示名称为 My Custom Action，快捷键为 Ctrl/Cmd + S，在右键菜单中的分组 ID 为 navigation，排序位置为 1.5。当这个操作被执行时，会在控制台输出相关信息。</p><h2 id="addcommand" tabindex="-1"><a class="header-anchor" href="#addcommand" aria-hidden="true">#</a> addCommand</h2><ul><li>语法: <code>addCommand(keybinding: number, handler: ICommandHandler, context: string):string</code></li><li>参数: <code>keybinding</code>、<code>handler</code>、<code>context</code></li><li>返回值: <code>IDisposable对象</code></li><li>描述: <code>用来向编辑器中添加自定义的操作。</code></li></ul><p>其中，<code>keybinding</code> 参数是一个对象，用来描述要添加的命令的快捷键。它包含以下属性：</p><ul><li>ctrlCmd：是否按下了 Ctrl或 Cmd键，必须是布尔类型。</li><li>shift：是否按下了 Shift键，必须是布尔类型。</li><li>alt：是否按下了Alt键，必须是布尔类型。</li><li>keyCode：按下的键的键码，必须是数字类型。</li></ul><p><code>handler</code> 参数是一个函数，用来处理命令的执行逻辑。它接受一个 ICodeEditor类型的参数。</p><p><code>context</code>参数是一个字符串，用来指定命令的上下文。可以是 editor、textarea 或 global中的一个。</p><p><code>addCommand</code>方法返回一个字符串，表示添加的命令的 ID。可以通过调用 removeCommand方法来移除添加的命令。 下面是一个示例，演示如何向编辑器中添加一个自定义的命令：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#569CD6;">const</span><span style="color:#D4D4D4;"> </span><span style="color:#4FC1FF;">editor</span><span style="color:#D4D4D4;"> = </span><span style="color:#9CDCFE;">monaco</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">editor</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">create</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">document</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">getElementById</span><span style="color:#D4D4D4;">(</span><span style="color:#CE9178;">&#39;container&#39;</span><span style="color:#D4D4D4;">), {</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">value:</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">language:</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;plaintext&#39;</span></span>
<span class="line"><span style="color:#D4D4D4;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#9CDCFE;">editor</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">addCommand</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">monaco</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">KeyMod</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">CtrlCmd</span><span style="color:#D4D4D4;"> | </span><span style="color:#9CDCFE;">monaco</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">KeyCode</span><span style="color:#D4D4D4;">.</span><span style="color:#4FC1FF;">KEY_S</span><span style="color:#D4D4D4;">, </span><span style="color:#569CD6;">function</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">ed</span><span style="color:#D4D4D4;">) {</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">console</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">log</span><span style="color:#D4D4D4;">(</span><span style="color:#CE9178;">&#39;Custom command executed&#39;</span><span style="color:#D4D4D4;">);</span></span>
<span class="line"><span style="color:#D4D4D4;">}, </span><span style="color:#CE9178;">&#39;editor&#39;</span><span style="color:#D4D4D4;">);</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个示例中，我们创建了一个编辑器，并向它添加了一个名为 Custom command的自定义命令。这个命令的快捷键为 Ctrl/Cmd + S，当这个命令被执行时，会在控制台输出相关信息。</p><h3 id="createcontextkey" tabindex="-1"><a class="header-anchor" href="#createcontextkey" aria-hidden="true">#</a> createContextKey</h3><ul><li>语法: <code>createContextKey&lt;T&gt;(key: string, defaultValue: T): IContextKey&lt;T&gt;</code></li><li>参数: <ul><li><code>T extends ContextKeyValue = ContextKeyValue</code></li></ul></li><li>返回值: <code>IContextKey&lt;T&gt;</code></li><li>描述: \`\`</li></ul><h3 id="createdecorationscollection" tabindex="-1"><a class="header-anchor" href="#createdecorationscollection" aria-hidden="true">#</a> createDecorationsCollection</h3>`,20),g=l("code",null,"createDecorationsCollection(",-1),b=l("code",null,"):",-1),C=l("code",null,"可选",-1),I=l("li",null,[e("描述: "),l("code",null,"创建一个装饰集合。通过此集合添加的所有装饰都将获得编辑器的所有者ID（这意味着它们不会显示在其他编辑器中）。当编辑器的模型更改时，这些装饰将自动清除。")],-1),T=t('<h3 id="dispose" tabindex="-1"><a class="header-anchor" href="#dispose" aria-hidden="true">#</a> dispose</h3><ul><li>语法: <code>dispose(): void</code></li><li>描述: <code>释放此小部件使用的所有资源。调用此方法后，小部件将不再被使用。</code></li></ul><h3 id="focus" tabindex="-1"><a class="header-anchor" href="#focus" aria-hidden="true">#</a> focus</h3><ul><li>语法: <code>focus(): void</code></li><li>描述: <code>聚焦到此小部件上。</code></li></ul><h3 id="getcontainerdomnode" tabindex="-1"><a class="header-anchor" href="#getcontainerdomnode" aria-hidden="true">#</a> getContainerDomNode</h3><ul><li>语法: <code>getContainerDomNode(): HTMLElement | null</code></li><li>返回值: <code>HTMLElement | null</code></li><li>描述: <code>获取此小部件的容器 DOM 节点。返回 null 表示该小部件当前未附加到 DOM。</code></li></ul><h3 id="getdifflineinformationformodified" tabindex="-1"><a class="header-anchor" href="#getdifflineinformationformodified" aria-hidden="true">#</a> getDiffLineInformationForModified</h3>',7),E=l("li",null,[e("语法: "),l("code",null,"getDiffLineInformationForModified(lineNumber: number): IDiffLinesInformation")],-1),x=l("li",null,[e("参数： "),l("ul",null,[l("li",null,[e("lineNumber： "),l("code",null,"number")])])],-1),S=l("li",null,[e("描述: "),l("code",null,"获取修改后的文本的行信息。")],-1),L=l("h3",{id:"getdifflineinformationfororiginal",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#getdifflineinformationfororiginal","aria-hidden":"true"},"#"),e(" getDiffLineInformationForOriginal")],-1),F=l("li",null,[e("语法: "),l("code",null,"getDiffLineInformationForOriginal(): IDiffLinesInformation")],-1),N=l("li",null,[e("描述: "),l("code",null,"获取原始文本的行信息。")],-1),P=t('<h3 id="geteditortype" tabindex="-1"><a class="header-anchor" href="#geteditortype" aria-hidden="true">#</a> getEditorType</h3><ul><li>语法: <code>getEditorType(): EditorType</code></li><li>返回值: <code>string</code></li><li>描述: <code>获取此小部件所属的编辑器类型。</code></li></ul><h3 id="getid" tabindex="-1"><a class="header-anchor" href="#getid" aria-hidden="true">#</a> getId</h3><ul><li>语法: <code>getId(): string</code></li><li>返回值: <code>string</code></li><li>描述: <code>获取此小部件的唯一标识符。</code></li></ul><h3 id="getlinechanges" tabindex="-1"><a class="header-anchor" href="#getlinechanges" aria-hidden="true">#</a> getLineChanges</h3>',5),w=l("li",null,[e("语法: "),l("code",null,"getLineChanges(): ILineChange[] | undefined")],-1),M=l("li",null,[e("描述: "),l("code",null,"获取在此小部件中显示的行更改。")],-1),A=l("h3",{id:"getmodel",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#getmodel","aria-hidden":"true"},"#"),e(" getModel")],-1),V=l("li",null,[e("语法: "),l("code",null,"getModel(): ITextModel | null")],-1),R=l("code",null,"null",-1),O=l("li",null,[e("描述: "),l("code",null,"获取此小部件的文本模型。")],-1),k=l("h3",{id:"getmodifiededitor",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#getmodifiededitor","aria-hidden":"true"},"#"),e(" getModifiedEditor")],-1),K=l("li",null,[e("语法: "),l("code",null,"getModifiedEditor(): ICodeEditor")],-1),B=l("li",null,[e("描述: "),l("code",null,"获取修改后的文本编辑器。")],-1),j=l("h3",{id:"getoriginaleditor",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#getoriginaleditor","aria-hidden":"true"},"#"),e(" getOriginalEditor")],-1),H=l("li",null,[e("语法: "),l("code",null,"getOriginalEditor(): ICodeEditor")],-1),G=l("li",null,[e("描述: "),l("code",null,"获取原始文本编辑器。")],-1),U=l("h3",{id:"getposition",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#getposition","aria-hidden":"true"},"#"),e(" getPosition")],-1),Y=l("li",null,[e("语法: "),l("code",null,"getPosition(): Position | null")],-1),q=l("code",null,"null",-1),z=l("li",null,[e("描述: "),l("code",null,"获取此小部件的当前位置。")],-1),J=l("h3",{id:"getselection",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#getselection","aria-hidden":"true"},"#"),e(" getSelection")],-1),Q=l("li",null,[e("语法: "),l("code",null,"getSelection(): Selection | null")],-1),W=l("code",null,"null",-1),X=l("li",null,[e("描述: "),l("code",null,"获取此小部件的当前选择。")],-1),Z=l("h3",{id:"getselections",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#getselections","aria-hidden":"true"},"#"),e(" getSelections")],-1),$=l("li",null,[e("语法: "),l("code",null,"getSelections(): Selection[] | null")],-1),ll=l("code",null,"null",-1),el=l("li",null,[e("描述: "),l("code",null,"获取此小部件的当前选择集合。")],-1),nl=l("h3",{id:"getsupportedactions",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#getsupportedactions","aria-hidden":"true"},"#"),e(" getSupportedActions")],-1),ol=l("li",null,[e("语法: "),l("code",null,"getSupportedActions(): IEditorAction[]")],-1),il=l("li",null,[e("描述: "),l("code",null,"获取此小部件支持的所有操作。")],-1),tl=l("h3",{id:"getvisiblecolumnfromposition",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#getvisiblecolumnfromposition","aria-hidden":"true"},"#"),e(" getVisibleColumnFromPosition")],-1),sl=l("li",null,[e("语法: "),l("code",null,"getVisibleColumnFromPosition(position: IPosition): number")],-1),al=l("li",null,[e("返回值: "),l("code",null,"number")],-1),dl=l("li",null,[e("描述: "),l("code",null,"获取指定位置的可见列。")],-1),rl=t('<h3 id="hastextfocus" tabindex="-1"><a class="header-anchor" href="#hastextfocus" aria-hidden="true">#</a> hasTextFocus</h3><ul><li>语法: <code>hasTextFocus(): boolean</code></li><li>返回值: <code>boolean</code></li><li>描述: <code>如果此小部件当前具有文本焦点，则返回 true。</code></li></ul><h3 id="layout" tabindex="-1"><a class="header-anchor" href="#layout" aria-hidden="true">#</a> layout</h3>',3),cl=l("li",null,[e("语法: "),l("code",null,"layout(dimension?: IDimension): void")],-1),ul=l("li",null,[e("描述: "),l("code",null,"指示编辑器重新测量其容器。调整编辑器容器大小时应调用此方法。 如果传入维度，则将使用传入的值。")],-1),pl=l("h3",{id:"restoreviewstate",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#restoreviewstate","aria-hidden":"true"},"#"),e(" restoreViewState")],-1),hl=l("li",null,[e("语法： "),l("code",null,"restoreViewState(state: IDiffEditorViewState): void")],-1),_l=l("li",null,[e("返回值： "),l("code",null,"void")],-1),Dl=l("li",null,[e("描述： "),l("code",null,"还原编辑器的视图状态。")],-1),fl=l("h3",{id:"revealline",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#revealline","aria-hidden":"true"},"#"),e(" revealLine")],-1),yl=l("li",null,[e("语法： "),l("code",null,"revealLine(lineNumber: number, scrollType?: ScrollType): void")],-1),ml=l("li",null,"lineNumber：number",-1),vl=l("code",null,"可选",-1),gl=l("li",null,[e("返回值： "),l("code",null,"void")],-1),bl=l("li",null,[e("描述： "),l("code",null,"将给定行滚动到视图中。")],-1),Cl=l("h3",{id:"reveallineincenter",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#reveallineincenter","aria-hidden":"true"},"#"),e(" revealLineInCenter")],-1),Il=l("li",null,[e("语法： "),l("code",null,"revealLineInCenter(lineNumber: number, scrollType?: ScrollType): void")],-1),Tl=l("li",null,"lineNumber：number",-1),El=l("code",null,"可选",-1),xl=l("li",null,[e("返回值： "),l("code",null,"void")],-1),Sl=l("li",null,[e("描述： "),l("code",null,"将给定行滚动到视图中心。")],-1),Ll=l("h3",{id:"reveallineincenterifoutsideviewport",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#reveallineincenterifoutsideviewport","aria-hidden":"true"},"#"),e(" revealLineInCenterIfOutsideViewport")],-1),Fl=l("li",null,[e("语法： "),l("code",null,"revealLineInCenterIfOutsideViewport(lineNumber: number, scrollType?: ScrollType): void")],-1),Nl=l("li",null,"lineNumber：number",-1),Pl=l("code",null,"可选",-1),wl=l("li",null,[e("返回值： "),l("code",null,"void")],-1),Ml=l("li",null,[e("描述： "),l("code",null,"如果给定行在视口之外，则将其滚动到视图中心。")],-1),Al=l("h3",{id:"reveallineneartop",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#reveallineneartop","aria-hidden":"true"},"#"),e(" revealLineNearTop")],-1),Vl=l("li",null,[e("语法： "),l("code",null,"revealLineNearTop(lineNumber: number, scrollType?: ScrollType): void")],-1),Rl=l("li",null,"lineNumber：number",-1),Ol=l("code",null,"可选",-1),kl=l("li",null,[e("返回值： "),l("code",null,"void")],-1),Kl=l("li",null,[e("描述： "),l("code",null,"将给定行滚动到视图的顶部。")],-1),Bl=l("h3",{id:"reveallines",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#reveallines","aria-hidden":"true"},"#"),e(" revealLines")],-1),jl=l("li",null,[e("语法： "),l("code",null,"revealLines(startLineNumber: number, endLineNumber: number, scrollType?: ScrollType): void")],-1),Hl=l("li",null,"startLineNumber：number",-1),Gl=l("li",null,"endLineNumber：number",-1),Ul=l("code",null,"可选",-1),Yl=l("li",null,[e("返回值： "),l("code",null,"void")],-1),ql=l("li",null,[e("描述： "),l("code",null,"将给定行范围滚动到视图中。")],-1),zl=l("h3",{id:"reveallinesincenter",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#reveallinesincenter","aria-hidden":"true"},"#"),e(" revealLinesInCenter")],-1),Jl=l("li",null,[e("语法： "),l("code",null,"revealLinesInCenter(startLineNumber: number, endLineNumber: number, scrollType?: ScrollType): void")],-1),Ql=l("li",null,"startLineNumber：number",-1),Wl=l("li",null,"endLineNumber：number",-1),Xl=l("code",null,"可选",-1),Zl=l("li",null,[e("返回值： "),l("code",null,"void")],-1),$l=l("li",null,[e("描述： "),l("code",null,"将给定行范围滚动到视图中心。")],-1),le=l("h3",{id:"reveallinesincenterifoutsideviewport",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#reveallinesincenterifoutsideviewport","aria-hidden":"true"},"#"),e(" revealLinesInCenterIfOutsideViewport")],-1),ee=l("li",null,[e("语法： "),l("code",null,"revealLinesInCenterIfOutsideViewport(startLineNumber: number, endLineNumber: number, scrollType?: ScrollType): void")],-1),ne=l("li",null,"startLineNumber：number",-1),oe=l("li",null,"endLineNumber：number",-1),ie=l("code",null,"可选",-1),te=l("li",null,[e("返回值： "),l("code",null,"void")],-1),se=l("li",null,[e("描述： "),l("code",null,"如果给定行范围在视口之外，则将其滚动到视图中心。")],-1),ae=l("h3",{id:"reveallinesneartop",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#reveallinesneartop","aria-hidden":"true"},"#"),e(" revealLinesNearTop")],-1),de=l("li",null,[e("语法： "),l("code",null,"revealLinesNearTop(startLineNumber: number, endLineNumber: number, scrollType?: ScrollType): void")],-1),re=l("li",null,"startLineNumber：number",-1),ce=l("li",null,"endLineNumber：number",-1),ue=l("code",null,"可选",-1),pe=l("li",null,[e("返回值： "),l("code",null,"void")],-1),he=l("li",null,[e("描述： "),l("code",null,"将给定行范围滚动到视图的顶部。")],-1),_e=l("h3",{id:"revealposition",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#revealposition","aria-hidden":"true"},"#"),e(" revealPosition")],-1),De=l("li",null,[e("语法： "),l("code",null,"revealPosition(position: IPosition, scrollType?: ScrollType): void")],-1),fe=l("code",null,"可选",-1),ye=l("li",null,[e("返回值： "),l("code",null,"void")],-1),me=l("li",null,[e("描述： "),l("code",null,"将给定位置滚动到视图中。")],-1),ve=l("h3",{id:"revealpositionincenter",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#revealpositionincenter","aria-hidden":"true"},"#"),e(" revealPositionInCenter")],-1),ge=l("li",null,[e("语法： "),l("code",null,"revealPositionInCenter(position: IPosition, scrollType?: ScrollType): void")],-1),be=l("code",null,"可选",-1),Ce=l("li",null,[e("返回值： "),l("code",null,"void")],-1),Ie=l("li",null,[e("描述： "),l("code",null,"将给定位置滚动到视图中心。")],-1),Te=l("h3",{id:"revealpositionincenterifoutsideviewport",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#revealpositionincenterifoutsideviewport","aria-hidden":"true"},"#"),e(" revealPositionInCenterIfOutsideViewport")],-1),Ee=l("li",null,[e("语法： "),l("code",null,"revealPositionInCenterIfOutsideViewport(position: IPosition, scrollType?: ScrollType): void")],-1),xe=l("code",null,"可选",-1),Se=l("li",null,[e("返回值： "),l("code",null,"void")],-1),Le=l("li",null,[e("描述： "),l("code",null,"如果给定位置在视口之外，则将其滚动到视图中心。")],-1),Fe=l("h3",{id:"revealpositionneartop",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#revealpositionneartop","aria-hidden":"true"},"#"),e(" revealPositionNearTop")],-1),Ne=l("li",null,[e("语法： "),l("code",null,"revealPositionNearTop(position: IPosition, scrollType?: ScrollType): void")],-1),Pe=l("code",null,"可选",-1),we=l("li",null,[e("返回值： "),l("code",null,"void")],-1),Me=l("li",null,[e("描述： "),l("code",null,"将给定位置滚动到视图的顶部。")],-1),Ae=l("h3",{id:"revealrange",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#revealrange","aria-hidden":"true"},"#"),e(" revealRange")],-1),Ve=l("li",null,[e("语法： "),l("code",null,"revealRange(range: IRange, scrollType?: ScrollType): void")],-1),Re=l("code",null,"可选",-1),Oe=l("li",null,[e("返回值： "),l("code",null,"void")],-1),ke=l("li",null,[e("描述： "),l("code",null,"将给定范围滚动到视图中。")],-1),Ke=l("h3",{id:"revealrangeattop",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#revealrangeattop","aria-hidden":"true"},"#"),e(" revealRangeAtTop")],-1),Be=l("li",null,[e("语法: "),l("code",null,"revealRangeAtTop(range: IRange, scrollType?: ScrollType): void")],-1),je=l("code",null,"可选",-1),He=l("li",null,[e("返回值: "),l("code",null,"无")],-1),Ge=l("li",null,[e("描述: "),l("code",null,"将指定范围滚动到编辑器的顶部。如果revealVerticalInCenter为true，则将范围滚动到编辑器垂直中心。如果scrollType为Smooth，则使用平滑滚动。")],-1),Ue=l("h3",{id:"revealrangeincenter",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#revealrangeincenter","aria-hidden":"true"},"#"),e(" revealRangeInCenter")],-1),Ye=l("li",null,[e("语法: "),l("code",null,"revealRangeInCenter(range: IRange, scrollType?: ScrollType): void")],-1),qe=l("code",null,"可选",-1),ze=l("li",null,[e("返回值: "),l("code",null,"无")],-1),Je=l("li",null,[e("描述: "),l("code",null,"将指定范围滚动到编辑器的中心。如果revealVerticalInCenter为true，则将范围滚动到编辑器垂直中心。如果scrollType为Smooth，则使用平滑滚动。")],-1),Qe=l("h3",{id:"revealrangeincenterifoutsideviewport",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#revealrangeincenterifoutsideviewport","aria-hidden":"true"},"#"),e(" revealRangeInCenterIfOutsideViewport")],-1),We=l("li",null,[e("语法: "),l("code",null,"revealRangeInCenterIfOutsideViewport(range: IRange, scrollType?: ScrollType): void")],-1),Xe=l("code",null,"可选",-1),Ze=l("li",null,[e("返回值: "),l("code",null,"无")],-1),$e=l("li",null,[e("描述: "),l("code",null,"如果指定的范围不在编辑器的视口中，则将其滚动到编辑器的中心。如果revealVerticalInCenter为true，则将范围滚动到编辑器垂直中心。如果scrollType为Smooth，则使用平滑滚动。")],-1),ln=l("h3",{id:"revealrangeneartop",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#revealrangeneartop","aria-hidden":"true"},"#"),e(" revealRangeNearTop")],-1),en=l("li",null,[e("语法: "),l("code",null,"revealRangeNearTop(range: IRange, scrollType?: ScrollType): void")],-1),nn=l("code",null,"可选",-1),on=l("li",null,[e("返回值: "),l("code",null,"无")],-1),tn=l("li",null,[e("描述: "),l("code",null,"将指定范围滚动到编辑器的顶部，如果可能的话，将其保持在视口的顶部。如果revealVerticalInCenter为true，则将范围滚动到编辑器垂直中心。如果scrollType为Smooth，则使用平滑滚动。")],-1),sn=l("h3",{id:"revealrangeneartopifoutsideviewport",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#revealrangeneartopifoutsideviewport","aria-hidden":"true"},"#"),e(" revealRangeNearTopIfOutsideViewport")],-1),an=l("li",null,[e("语法: "),l("code",null,"revealRangeNearTopIfOutsideViewport(range: IRange, scrollType?: ScrollType): void")],-1),dn=l("li",null,[e("revealVerticalInCenter: "),l("code",null,"可选"),e(" boolean")],-1),rn=l("code",null,"可选",-1),cn=l("li",null,[e("返回值: "),l("code",null,"无")],-1),un=l("li",null,[e("描述: "),l("code",null,"如果指定的范围不在编辑器的视口中，则将其滚动到编辑器的顶部，如果可能的话，将其保持在视口的顶部。如果revealVerticalInCenter为true，则将范围滚动到编辑器垂直中心。如果scrollType为Smooth，则使用平滑滚动。")],-1),pn=l("h3",{id:"saveviewstate",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#saveviewstate","aria-hidden":"true"},"#"),e(" saveViewState")],-1),hn=l("li",null,[e("语法: "),l("code",null,"saveViewState(): IDiffEditorViewState")],-1),_n=l("li",null,[e("参数: "),l("code",null,"无")],-1),Dn=l("li",null,[e("描述: "),l("code",null,"返回当前编辑器的视图状态。")],-1),fn=l("h3",{id:"setmodel",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#setmodel","aria-hidden":"true"},"#"),e(" setModel")],-1),yn=l("li",null,[e("语法: "),l("code",null,"setModel(model: IDiffEditorModel | null): void")],-1),mn=l("code",null,"null",-1),vn=l("li",null,[e("返回值: "),l("code",null,"无")],-1),gn=l("li",null,[e("描述: "),l("code",null,"设置附加到此编辑器的当前模型。 如果之前的模型是由编辑器通过选项文字对象中的值键创建的，它将被销毁。 否则，如果先前的模型是通过 setModel 设置的，或者选项文字对象中的模型键，则不会销毁先前的模型。 调用 setModel(null) 以简单地将当前模型与编辑器分离是安全的")],-1),bn=l("h3",{id:"setposition",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#setposition","aria-hidden":"true"},"#"),e(" setPosition")],-1),Cn=l("li",null,[e("语法: "),l("code",null,"setPosition(position: IPosition, source?: string): void")],-1),In=l("li",null,[e("source: "),l("code",null,"string"),e(),l("code",null,"可选")],-1),Tn=l("li",null,[e("返回值: "),l("code",null,"无")],-1),En=l("li",null,[e("描述: "),l("code",null,"将编辑器的光标位置设置为指定的位置。")],-1),xn=l("h3",{id:"setselection",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#setselection","aria-hidden":"true"},"#"),e(" setSelection")],-1),Sn=l("li",null,[e("语法: "),l("code",null,"setSelection(selection: IRange, source?: string): void")],-1),Ln=l("li",null,[e("source: "),l("code",null,"string"),e(),l("code",null,"可选")],-1),Fn=l("li",null,[e("返回值: "),l("code",null,"无")],-1),Nn=l("li",null,[e("描述: "),l("code",null,"将编辑器的选择设置为指定的范围。")],-1),Pn=l("h3",{id:"setselections",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#setselections","aria-hidden":"true"},"#"),e(" setSelections")],-1),wn=l("li",null,[e("语法: "),l("code",null,"setSelections(selections: ISelection[], source?: string): void")],-1),Mn=l("li",null,[e("source: "),l("code",null,"string"),e(),l("code",null,"可选")],-1),An=l("li",null,[e("返回值: "),l("code",null,"无")],-1),Vn=l("li",null,[e("描述: "),l("code",null,"将编辑器的选择设置为指定的范围数组。")],-1),Rn=t('<h3 id="trigger" tabindex="-1"><a class="header-anchor" href="#trigger" aria-hidden="true">#</a> trigger</h3><ul><li>语法: <code>trigger(source: string, handlerId: string, payload?: any): void</code></li><li>参数: <ul><li>source: <code>string</code></li><li>handlerId: <code>string</code></li><li>payload: <code>可选</code> any</li></ul></li><li>返回值: <code>无</code></li><li>描述: <code>触发指定的命令。</code></li></ul><h3 id="updateoptions" tabindex="-1"><a class="header-anchor" href="#updateoptions" aria-hidden="true">#</a> updateOptions</h3>',3),On=l("li",null,[e("语法: "),l("code",null,"updateOptions(newOptions: IDiffEditorOptions): void")],-1),kn=l("li",null,[e("返回值: "),l("code",null,"无")],-1),Kn=l("li",null,[e("描述: "),l("code",null,"更新编辑器的选项。")],-1);function Bn(jn,Hn){const a=s("ExternalLinkIcon"),o=s("RouterLink");return r(),c("div",null,[p,l("p",null,[h,e(),l("a",_,[e("官网地址"),n(a)])]),D,l("ul",null,[f,y,l("li",null,[e("返回值: "),n(o,{to:"/global/interfaces/IDisposable.html"},{default:i(()=>[e("IDisposable")]),_:1})]),m]),v,l("ul",null,[l("li",null,[e("语法: "),g,e("decorations?: "),n(o,{to:"/editor/interfaces/IModelDeltaDecoration.html"},{default:i(()=>[e("IModelDeltaDecoration")]),_:1}),e("[]"),b,e(),n(o,{to:"/editor/interfaces/IEditorDecorationsCollection.html"},{default:i(()=>[e("IEditorDecorationsCollection")]),_:1})]),l("li",null,[e("参数: "),n(o,{to:"/editor/interfaces/IModelDeltaDecoration.html"},{default:i(()=>[e("IModelDeltaDecoration")]),_:1}),e("[] "),C]),l("li",null,[e("返回值: "),n(o,{to:"/editor/interfaces/IEditorDecorationsCollection.html"},{default:i(()=>[e("IEditorDecorationsCollection")]),_:1})]),I]),T,l("ul",null,[E,x,l("li",null,[e("返回值: "),n(o,{to:"/editor/interfaces/IDiffLineInformation.html"},{default:i(()=>[e("IDiffLineInformation")]),_:1})]),S]),L,l("ul",null,[F,l("li",null,[e("返回值: "),n(o,{to:"/editor/interfaces/IDiffLineInformation.html"},{default:i(()=>[e("IDiffLineInformation")]),_:1})]),N]),P,l("ul",null,[w,l("li",null,[e("返回值: "),n(o,{to:"/editor/interfaces/ILineChange.html"},{default:i(()=>[e("ILineChange")]),_:1}),e("[]")]),M]),A,l("ul",null,[V,l("li",null,[e("返回值: "),n(o,{to:"/editor/interfaces/ITextModel.html"},{default:i(()=>[e("ITextModel")]),_:1}),e(" | "),R]),O]),k,l("ul",null,[K,l("li",null,[e("返回值: "),n(o,{to:"/editor/interfaces/ICodeEditor.html"},{default:i(()=>[e("ICodeEditor")]),_:1})]),B]),j,l("ul",null,[H,l("li",null,[e("返回值: "),n(o,{to:"/editor/interfaces/ICodeEditor.html"},{default:i(()=>[e("ICodeEditor")]),_:1})]),G]),U,l("ul",null,[Y,l("li",null,[e("返回值: "),n(o,{to:"/global/classes/Position.html"},{default:i(()=>[e(" Position")]),_:1}),e(" | "),q]),z]),J,l("ul",null,[Q,l("li",null,[e("返回值: "),n(o,{to:"/global/classes/Selection.html"},{default:i(()=>[e("Selection")]),_:1}),e(" | "),W]),X]),Z,l("ul",null,[$,l("li",null,[e("返回值: "),n(o,{to:"/global/classes/Selection.html"},{default:i(()=>[e("Selection")]),_:1}),e("[] | "),ll]),el]),nl,l("ul",null,[ol,l("li",null,[e("返回值: "),n(o,{to:"/editor/interfaces/IEditorAction.html"},{default:i(()=>[e("IEditorAction")]),_:1}),e("[]")]),il]),tl,l("ul",null,[sl,l("li",null,[e("参数: "),l("ul",null,[l("li",null,[e("position: "),n(o,{to:"/global/interfaces/IPosition.html"},{default:i(()=>[e("IPosition")]),_:1})])])]),al,dl]),rl,l("ul",null,[cl,l("li",null,[e("参数： "),l("ul",null,[l("li",null,[e("dimension： "),n(o,{to:"/editor/interfaces/IDimension.html"},{default:i(()=>[e("IDimension")]),_:1})])])]),ul]),pl,l("ul",null,[hl,l("li",null,[e("参数： "),l("ul",null,[l("li",null,[e("state："),n(o,{to:"/editor/interfaces/IDiffEditorViewState.html"},{default:i(()=>[e("IDiffEditorViewState")]),_:1})])])]),_l,Dl]),fl,l("ul",null,[yl,l("li",null,[e("参数： "),l("ul",null,[ml,l("li",null,[e("scrollType: "),n(o,{to:"/editor/enumerations.html#scrolltype"},{default:i(()=>[e("scrollType")]),_:1}),e(),vl])])]),gl,bl]),Cl,l("ul",null,[Il,l("li",null,[e("参数： "),l("ul",null,[Tl,l("li",null,[e("scrollType: "),n(o,{to:"/editor/enumerations.html#scrolltype"},{default:i(()=>[e("scrollType")]),_:1}),e(),El])])]),xl,Sl]),Ll,l("ul",null,[Fl,l("li",null,[e("参数： "),l("ul",null,[Nl,l("li",null,[e("scrollType: "),n(o,{to:"/editor/enumerations.html#scrolltype"},{default:i(()=>[e("scrollType")]),_:1}),e(),Pl])])]),wl,Ml]),Al,l("ul",null,[Vl,l("li",null,[e("参数： "),l("ul",null,[Rl,l("li",null,[e("scrollType: "),n(o,{to:"/editor/enumerations.html#scrolltype"},{default:i(()=>[e("scrollType")]),_:1}),e(),Ol])])]),kl,Kl]),Bl,l("ul",null,[jl,l("li",null,[e("参数： "),l("ul",null,[Hl,Gl,l("li",null,[e("scrollType: "),n(o,{to:"/editor/enumerations.html#scrolltype"},{default:i(()=>[e("scrollType")]),_:1}),e(),Ul])])]),Yl,ql]),zl,l("ul",null,[Jl,l("li",null,[e("参数： "),l("ul",null,[Ql,Wl,l("li",null,[e("scrollType: "),n(o,{to:"/editor/enumerations.html#scrolltype"},{default:i(()=>[e("scrollType")]),_:1}),e(),Xl])])]),Zl,$l]),le,l("ul",null,[ee,l("li",null,[e("参数： "),l("ul",null,[ne,oe,l("li",null,[e("scrollType: "),n(o,{to:"/editor/enumerations.html#scrolltype"},{default:i(()=>[e("scrollType")]),_:1}),e(),ie])])]),te,se]),ae,l("ul",null,[de,l("li",null,[e("参数： "),l("ul",null,[re,ce,l("li",null,[e("scrollType: "),n(o,{to:"/editor/enumerations.html#scrolltype"},{default:i(()=>[e("scrollType")]),_:1}),e(),ue])])]),pe,he]),_e,l("ul",null,[De,l("li",null,[e("参数： "),l("ul",null,[l("li",null,[e("position："),n(o,{to:"/global/interfaces/IPosition.html"},{default:i(()=>[e("IPosition")]),_:1})]),l("li",null,[e("scrollType: "),n(o,{to:"/editor/enumerations.html#scrolltype"},{default:i(()=>[e("scrollType")]),_:1}),e(),fe])])]),ye,me]),ve,l("ul",null,[ge,l("li",null,[e("参数： "),l("ul",null,[l("li",null,[e("position："),n(o,{to:"/global/interfaces/IPosition.html"},{default:i(()=>[e("IPosition")]),_:1})]),l("li",null,[e("scrollType: "),n(o,{to:"/editor/enumerations.html#scrolltype"},{default:i(()=>[e("scrollType")]),_:1}),e(),be])])]),Ce,Ie]),Te,l("ul",null,[Ee,l("li",null,[e("参数： "),l("ul",null,[l("li",null,[e("position："),n(o,{to:"/global/interfaces/IPosition.html"},{default:i(()=>[e("IPosition")]),_:1})]),l("li",null,[e("scrollType: "),n(o,{to:"/editor/enumerations.html#scrolltype"},{default:i(()=>[e("scrollType")]),_:1}),e(),xe])])]),Se,Le]),Fe,l("ul",null,[Ne,l("li",null,[e("参数： "),l("ul",null,[l("li",null,[e("position："),n(o,{to:"/global/interfaces/IPosition.html"},{default:i(()=>[e("IPosition")]),_:1})]),l("li",null,[e("scrollType: "),n(o,{to:"/editor/enumerations.html#scrolltype"},{default:i(()=>[e("scrollType")]),_:1}),e(),Pe])])]),we,Me]),Ae,l("ul",null,[Ve,l("li",null,[e("参数： "),l("ul",null,[l("li",null,[e("range："),n(o,{to:"/global/interfaces/IRange.html"},{default:i(()=>[e("IPosition")]),_:1})]),l("li",null,[e("scrollType: "),n(o,{to:"/editor/enumerations.html#scrolltype"},{default:i(()=>[e("scrollType")]),_:1}),e(),Re])])]),Oe,ke]),Ke,l("ul",null,[Be,l("li",null,[e("参数: "),l("ul",null,[l("li",null,[e("range: "),n(o,{to:"/global/interfaces/IRange.html"},{default:i(()=>[e("IPosition")]),_:1})]),l("li",null,[e("scrollType: "),je,e(),n(o,{to:"/editor/enumerations.html#scrolltype"},{default:i(()=>[e("scrollType")]),_:1})])])]),He,Ge]),Ue,l("ul",null,[Ye,l("li",null,[e("参数: "),l("ul",null,[l("li",null,[e("range: "),n(o,{to:"/global/interfaces/IRange.html"},{default:i(()=>[e("IPosition")]),_:1})]),l("li",null,[e("scrollType: "),qe,e(),n(o,{to:"/editor/enumerations.html#scrolltype"},{default:i(()=>[e("scrollType")]),_:1})])])]),ze,Je]),Qe,l("ul",null,[We,l("li",null,[e("参数: "),l("ul",null,[l("li",null,[e("range: "),n(o,{to:"/global/interfaces/IRange.html"},{default:i(()=>[e("IPosition")]),_:1})]),l("li",null,[e("scrollType: "),Xe,e(),n(o,{to:"/editor/enumerations.html#scrolltype"},{default:i(()=>[e("scrollType")]),_:1})])])]),Ze,$e]),ln,l("ul",null,[en,l("li",null,[e("参数: "),l("ul",null,[l("li",null,[e("range: "),n(o,{to:"/global/interfaces/IRange.html"},{default:i(()=>[e("IPosition")]),_:1})]),l("li",null,[e("scrollType: "),nn,e(),n(o,{to:"/editor/enumerations.html#scrolltype"},{default:i(()=>[e("scrollType")]),_:1})])])]),on,tn]),sn,l("ul",null,[an,l("li",null,[e("参数: "),l("ul",null,[l("li",null,[e("range: "),n(o,{to:"/global/interfaces/IRange.html"},{default:i(()=>[e("IPosition")]),_:1})]),dn,l("li",null,[e("scrollType: "),rn,e(),n(o,{to:"/editor/enumerations.html#scrolltype"},{default:i(()=>[e("scrollType")]),_:1})])])]),cn,un]),pn,l("ul",null,[hn,_n,l("li",null,[e("返回值: "),n(o,{to:"/editor/interfaces/IDiffEditorViewState.html"},{default:i(()=>[e("IDiffEditorViewState")]),_:1})]),Dn]),fn,l("ul",null,[yn,l("li",null,[e("参数: "),l("ul",null,[l("li",null,[e("model: "),n(o,{to:"/editor/interfaces/IDiffEditorModel.html"},{default:i(()=>[e("IDiffEditorModel")]),_:1}),e(" 或 "),mn])])]),vn,gn]),bn,l("ul",null,[Cn,l("li",null,[e("参数: "),l("ul",null,[l("li",null,[e("position: "),n(o,{to:"/global/interfaces/IPosition.html"},{default:i(()=>[e("IPosition")]),_:1})]),In])]),Tn,En]),xn,l("ul",null,[Sn,l("li",null,[e("参数: "),l("ul",null,[l("li",null,[e("selection: "),n(o,{to:"/global/interfaces/IRange.html"},{default:i(()=>[e("IPosition")]),_:1})]),Ln])]),Fn,Nn]),Pn,l("ul",null,[wn,l("li",null,[e("参数: "),l("ul",null,[l("li",null,[e("selections: "),n(o,{to:"/global/interfaces/ISelection.html"},{default:i(()=>[e("ISelection")]),_:1}),e("[]")]),Mn])]),An,Vn]),Rn,l("ul",null,[On,l("li",null,[e("参数: "),l("ul",null,[l("li",null,[e("newOptions: "),n(o,{to:"/editor/interfaces/IDiffEditorOptions.html"},{default:i(()=>[e("IDiffEditorOptions")]),_:1})])])]),kn,Kn])])}const Yn=d(u,[["render",Bn],["__file","IStandaloneDiffEditor.html.vue"]]);export{Yn as default};
