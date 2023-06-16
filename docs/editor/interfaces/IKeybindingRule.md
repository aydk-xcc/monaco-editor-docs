# IKeybindingRule
`interface` [官网地址](https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor.IKeybindingRule.html)

## 属性 Properties
### command
+ 类型： `string`   `可选` 
+ 默认值： `-` 
+ 可选项： `-` 
+ 描述： `命令的名称。如果提供了该属性，则必须与其他规则中的命令名称相同才能触发此规则。` 
 ### commandArgs
+ 类型： `any`   `可选` 
+ 默认值： `-` 
+ 可选项： `-` 
+ 描述： `传递给命令的参数。如果提供了该属性，则必须与其他规则中的命令参数相同才能触发此规则。` 
 ### keybinding
+ 类型： `number` 
+ 默认值： `-` 
+ 可选项： `-` 
+ 描述： `表示按键的虚拟键代码。` 
 ### when
+ 类型： `string`   `可选` 
+ 默认值： `-` 
+ 可选项： `-` 
+ 描述： `定义何时应触发此规则的条件。如果提供了该属性，则必须与其他规则中的条件相同才能触发此规则。` 
