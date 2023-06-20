# 别名&常量

## CharacterPair
## Definition
## IMonarchLanguageAction
## IMonarchLanguageRule
## IShortMonarchLanguageAction
## IShortMonarchLanguageRule1
## IShortMonarchLanguageRule2
## LanguageSelector
+ LanguageSelector: string | [LanguageFilter](./interfaces/LanguageFilter.md) | ReadonlyArray\<string | [LanguageFilter](./interfaces/LanguageFilter.md)\>
## ProviderResult
+ ProviderResult\<T\>: T | undefined | null | Thenable\<T | undefined | null\>
+ 提供者结果表示提供者（如 HoverProvider）可能返回的值。此外，可以返回 null 和 undefined - 直接返回或从 thenable 返回。