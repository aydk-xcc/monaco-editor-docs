# IGotoLocationOptions
`interface` [官网地址](https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor.IGotoLocationOptions.html)

## 属性 Properties
### alternativeDeclarationCommand
+ 类型： `字符串` `可选`   
+ 默认值： `-` 
+ 可选项： `-` 
+ 描述：用于在编辑器中查找当前光标所在的单词的替代声明。这个命令通常用于在代码中查找函数、变量、类等的声明，以便进行编辑或参考。
 ### alternativeDefinitionCommand
+ 类型： `字符串`     `可选`   
+ 默认值： `-` 
+ 可选项： `-` 
+ 描述：用于在编辑器中查找当前光标所在的单词的替代定义。这个命令通常用于在代码中查找函数、变量、类等的定义，以便进行编辑或参考。。
 ### alternativeImplementationCommand
+ 类型： `字符串`     `可选`   
+ 默认值： `-` 
+ 可选项： `-` 
+ 描述：定义此选项将覆盖默认实现命令，并在转到实现时使用。如果未指定，则使用默认命令。
 ### alternativeReferenceCommand
+ 类型： `字符串`     `可选`   
+ 默认值： `-` 
+ 可选项： `-` 
+ 描述：定义此选项将覆盖默认引用命令，并在转到引用时使用。如果未指定，则使用默认命令。
 ### alternativeTypeDefinitionCommand
+ 类型： `字符串`     `可选`   
+ 默认值： `-` 
+ 可选项： `-` 
+ 描述：定义此选项将覆盖默认类型定义命令，并在转到类型定义时使用。如果未指定，则使用默认命令。
 ### multiple
+ 类型：[GoToLocationValues](../aliase.md#gotolocationvalues) `可选`   
+ 默认值： `false` 
+ 可选项： `true` ， `false` 
+ 描述：定义此选项将覆盖默认多个命令，并在转到多个结果时使用。如果未指定，则使用默认命令。
 ### multipleDeclarations
+ 类型： [GoToLocationValues](../aliase.md#gotolocationvalues) `可选`   
+ 默认值： `false` 
+ 可选项： `true` ， `false` 
+ 描述：定义此选项将覆盖默认多个声明命令，并在转到多个声明时使用。如果未指定，则使用默认命令。
 ### multipleDefinitions
+ 类型：[GoToLocationValues](../aliase.md#gotolocationvalues)  `可选`   
+ 默认值： `false` 
+ 可选项： `true` ， `false` 
+ 描述：定义此选项将覆盖默认多个定义命令，并在转到多个定义时使用。如果未指定，则使用默认命令。
 ### multipleImplementations
+ 类型： [GoToLocationValues](../aliase.md#gotolocationvalues)   `可选`   
+ 默认值： `false` 
+ 可选项： `true` ， `false` 
+ 描述：定义此选项将覆盖默认多个实现命令，并在转到多个实现时使用。如果未指定，则使用默认命令。
 ### multipleReferences
+ 类型： [GoToLocationValues](../aliase.md#gotolocationvalues)  `可选`   
+ 默认值： `false` 
+ 可选项： `true` ， `false` 
+ 描述：定义此选项将覆盖默认多个引用命令，并在转到多个引用时使用。如果未指定，则使用默认命令。
 ### multipleTypeDefinitions
+ 类型： [GoToLocationValues](../aliase.md#gotolocationvalues) `可选`   
+ 默认值： `false` 
+ 可选项： `true` ， `false` 
+ 描述：定义此选项将覆盖默认多个类型定义命令，并在转到多个类型定义时使用。如果未指定，则使用默认命令。

## 方法 Methods
# IGotoLocationOptions
`interface` 跳转的配置选项

## 参数 Properties

### alternativeDeclarationCommand?
+ 类型 `string` 
+ 说明
### alternativeDefinitionCommand?
+ 类型 `string` 
+ 说明
### alternativeImplementationCommand?
+ 类型 `string` 
+ 说明
### alternativeReferenceCommand?
+ 类型 `string` 
+ 说明
### alternativeTypeDefinitionCommand?
+ 类型 `string` 
+ 说明
### multiple?
+ 类型 [GoToLocationValues](../aliase.md#gotolocationvalues)
+ 说明
### multipleDeclarations?
+ 类型 [GoToLocationValues](../aliase.md#gotolocationvalues)
+ 说明
### multipleDefinitions?
+ 类型 [GoToLocationValues](../aliase.md#gotolocationvalues)
+ 说明
### multipleImplementations?
+ 类型 [GoToLocationValues](../aliase.md#gotolocationvalues)
+ 说明
### multipleReferences?
+ 类型 [GoToLocationValues](../aliase.md#gotolocationvalues)
+ 说明
### multipleTypeDefinitions?
+ 类型 [GoToLocationValues](../aliase.md#gotolocationvalues)
+ 说明