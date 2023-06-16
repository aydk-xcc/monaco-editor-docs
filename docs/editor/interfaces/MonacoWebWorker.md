# MonacoWebWorker
`interface` [官网地址](https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor.MonacoWebWorker.html)
可以为任意文件提供代理的web进程。
## 方法 Methods
### dispose
+ 语法: `dispose(): void`
+ 参数: ``
+ 返回值: `-`
+ 描述: `终止网络进程，从而使返回的代理无效。`

### getProxy
+ 语法: `getProxy(): Promise<T>`
+ 参数: ``
+ 返回值: `-`
+ 描述: `获取任意加载代码的代理。`


### withSyncedResources
+ 语法: `withSyncedResources(resources: Uri[]): Promise<T>`
+ 参数: 
  + resources： [Url](../../global/classes/Url.md)[]
+ 返回值: `Promise<T>`
+ 描述: `将资源中的模型同步（发送）到网络工作者，使它们在 monaco.worker.getMirrorModels() 中可用。`