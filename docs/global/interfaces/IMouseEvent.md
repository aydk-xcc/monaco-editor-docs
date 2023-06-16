# IMouseEvent
`interface` [官网地址](https://microsoft.github.io/monaco-editor/typedoc/interfaces/IMouseEvent.html)

## 属性 Properties
### altKey
+ 类型： `boolean` ， `只读` 
+ 默认值： `-` 
+ 可选项： `-` 
+ 描述： `指示鼠标事件是否同时按下了“Alt”键。` 
### browserEvent
+ 类型： `MouseEvent` ， `只读` 
+ 默认值： `-` 
+ 可选项： `-` 
+ 描述： `原始的鼠标事件或模拟的鼠标事件。` 
### buttons
+ 类型： `number` ， `只读` 
+ 默认值： `-` 
+ 可选项： `-` 
+ 描述： `指示鼠标事件中按下了哪些鼠标按钮。` 
### detail
+ 类型： `number` ， `只读` 
+ 默认值： `-` 
+ 可选项： `-` 
+ 描述： `指示鼠标事件的详细信息，如单击次数。` 
### leftButton
+ 类型： `boolean` ， `只读` 
+ 默认值： `-` 
+ 可选项： `-` 
+ 描述： `指示鼠标事件是否同时按下了鼠标左键。` 
### middleButton
+ 类型： `boolean` ， `只读` 
+ 默认值： `-` 
+ 可选项： `-` 
+ 描述： `指示鼠标事件是否同时按下了鼠标中键。` 
### posx
+ 类型： `number` ， `只读` 
+ 默认值： `-` 
+ 可选项： `-` 
+ 描述： `鼠标事件在编辑器视图中的水平位置。` 
### posy
+ 类型： `number` ， `只读` 
+ 默认值： `-` 
+ 可选项： `-` 
+ 描述： `鼠标事件在编辑器视图中的垂直位置。` 
### rightButton
+ 类型： `boolean` ， `只读` 
+ 默认值： `-` 
+ 可选项： `-` 
+ 描述： `指示鼠标事件是否同时按下了鼠标右键。` 

### shiftKey
+ 类型： `boolean` ， `只读` 
+ 默认值： `-` 
+ 可选项： `-` 
+ 描述： `指示鼠标事件是否同时按下了“Shift”键。` 
### target
+ 类型： `HTMLElement` ， `只读` 
+ 默认值： `-` 
+ 可选项： `-` 
+ 描述： `鼠标事件的目标元素。` 
### timestamp
+ 类型： `number` ， `只读` 
+ 默认值： `-` 
+ 可选项： `-` 
+ 描述： `鼠标事件发生的时间戳。` 
## 方法 Methods

### preventDefault
+ 语法： `preventDefault(): void` 
+ 参数： `无` 
+ 返回值： `void` 
+ 描述： `阻止事件的默认行为。在此处，事件指的是鼠标事件。` 
### stopPropagation
+ 语法： `stopPropagation(): void` 
+ 参数： `无` 
+ 返回值： `void` 
+ 描述： `停止事件的传播。在此处，事件指的是鼠标事件。` 