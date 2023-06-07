# 附录-默认action

查询当前编辑器的action

```javascript
editor = monaco.editor.create(editorRef.value, {
    value: 'My to-do list:\n* buy milk\n* buy coffee\n* write awesome code',
    language: "javascript",
    fixedOverflowWidgets: true
});

console.log(editor.getContribution('editor.contrib.contextmenu'));
```
这里列的都是默认的action https://github.com/microsoft/monaco-editor/issues/1567
##
```javascript
[
    {
        "alias":"Go to Next Difference",
        "id":"editor.action.diffReview.next",
        "label":"Go to Next Difference"
    },
    {
        "alias":"Go to Previous Difference",
        "id":"editor.action.diffReview.prev",
        "label":"Go to Previous Difference"
    },
    {
        "alias":"Set Selection Anchor",
        "id":"editor.action.setSelectionAnchor",
        "label":"Set Selection Anchor"
    },
    {
        "alias":"Go to Selection Anchor",
        "id":"editor.action.goToSelectionAnchor",
        "label":"Go to Selection Anchor"
    },
    {
        "alias":"Select from Anchor to Cursor",
        "id":"editor.action.selectFromAnchorToCursor",
        "label":"Select from Anchor to Cursor"
    },
    {
        "alias":"Cancel Selection Anchor",
        "id":"editor.action.cancelSelectionAnchor",
        "label":"Cancel Selection Anchor"
    },
    {
        "alias":"Select to Bracket",
        "id":"editor.action.selectToBracket",
        "label":"Select to Bracket"
    },
    {
        "alias":"Go to Bracket",
        "id":"editor.action.jumpToBracket",
        "label":"Go to Bracket"
    },
    {
        "alias":"Remove Brackets",
        "id":"editor.action.removeBrackets",
        "label":"Remove Brackets"
    },
    {
        "alias":"Move Selected Text Left",
        "id":"editor.action.moveCarretLeftAction",
        "label":"Move Selected Text Left"
    },
    {
        "alias":"Move Selected Text Right",
        "id":"editor.action.moveCarretRightAction",
        "label":"Move Selected Text Right"
    },
    {
        "alias":"Transpose Letters",
        "id":"editor.action.transposeLetters",
        "label":"Transpose Letters"
    },
    {
        "alias":"Copy With Syntax Highlighting",
        "id":"editor.action.clipboardCopyWithSyntaxHighlightingAction",
        "label":"Copy With Syntax Highlighting"
    },
    {
        "alias":"Quick Fix...",
        "id":"editor.action.quickFix",
        "label":"Quick Fix..."
    },
    {
        "alias":"Refactor...",
        "id":"editor.action.refactor",
        "label":"Refactor..."
    },
    {
        "alias":"Source Action...",
        "id":"editor.action.sourceAction",
        "label":"Source Action..."
    },
    {
        "alias":"Organize Imports",
        "id":"editor.action.organizeImports",
        "label":"Organize Imports"
    },
    {
        "alias":"Auto Fix...",
        "id":"editor.action.autoFix",
        "label":"Auto Fix..."
    },
    {
        "alias":"Fix All",
        "id":"editor.action.fixAll",
        "label":"Fix All"
    },
    {
        "alias":"Show CodeLens Commands For Current Line",
        "id":"codelens.showLensesInCurrentLine",
        "label":"Show CodeLens Commands For Current Line"
    },
    {
        "alias":"Go to Next Problem (Error, Warning, Info)",
        "id":"editor.action.marker.next",
        "label":"Go to Next Problem (Error, Warning, Info)"
    },
    {
        "alias":"Go to Previous Problem (Error, Warning, Info)",
        "id":"editor.action.marker.prev",
        "label":"Go to Previous Problem (Error, Warning, Info)"
    },
    {
        "alias":"Go to Next Problem in Files (Error, Warning, Info)",
        "id":"editor.action.marker.nextInFiles",
        "label":"Go to Next Problem in Files (Error, Warning, Info)"
    },
    {
        "alias":"Go to Previous Problem in Files (Error, Warning, Info)",
        "id":"editor.action.marker.prevInFiles",
        "label":"Go to Previous Problem in Files (Error, Warning, Info)"
    },
    {
        "alias":"Show or Focus Hover",
        "id":"editor.action.showHover",
        "label":"Show or Focus Hover"
    },
    {
        "alias":"Show Definition Preview Hover",
        "id":"editor.action.showDefinitionPreviewHover",
        "label":"Show Definition Preview Hover"
    },
    {
        "alias":"Scroll Up Hover",
        "id":"editor.action.scrollUpHover",
        "label":"Scroll Up Hover"
    },
    {
        "alias":"Scroll Down Hover",
        "id":"editor.action.scrollDownHover",
        "label":"Scroll Down Hover"
    },
    {
        "alias":"Scroll Left Hover",
        "id":"editor.action.scrollLeftHover",
        "label":"Scroll Left Hover"
    },
    {
        "alias":"Scroll Right Hover",
        "id":"editor.action.scrollRightHover",
        "label":"Scroll Right Hover"
    },
    {
        "alias":"Page Up Hover",
        "id":"editor.action.pageUpHover",
        "label":"Page Up Hover"
    },
    {
        "alias":"Page Down Hover",
        "id":"editor.action.pageDownHover",
        "label":"Page Down Hover"
    },
    {
        "alias":"Go To Bottom Hover",
        "id":"editor.action.goToTopHover",
        "label":"Go To Top Hover"
    },
    {
        "alias":"Go To Bottom Hover",
        "id":"editor.action.goToBottomHover",
        "label":"Go To Bottom Hover"
    },
    {
        "alias":"Escape Focus Hover",
        "id":"editor.action.escapeFocusHover",
        "label":"Escape Focus Hover"
    },
    {
        "alias":"Toggle Line Comment",
        "id":"editor.action.commentLine",
        "label":"Toggle Line Comment"
    },
    {
        "alias":"Add Line Comment",
        "id":"editor.action.addCommentLine",
        "label":"Add Line Comment"
    },
    {
        "alias":"Remove Line Comment",
        "id":"editor.action.removeCommentLine",
        "label":"Remove Line Comment"
    },
    {
        "alias":"Toggle Block Comment",
        "id":"editor.action.blockComment",
        "label":"Toggle Block Comment"
    },
    {
        "alias":"Show Editor Context Menu",
        "id":"editor.action.showContextMenu",
        "label":"Show Editor Context Menu"
    },
    {
        "alias":"Cursor Undo",
        "id":"cursorUndo",
        "label":"Cursor Undo"
    },
    {
        "alias":"Cursor Redo",
        "id":"cursorRedo",
        "label":"Cursor Redo"
    },
    {
        "alias":"Find",
        "id":"actions.find",
        "label":"Find"
    },
    {
        "alias":"Replace",
        "id":"editor.action.startFindReplaceAction",
        "label":"Replace"
    },
    {
        "alias":"Find With Arguments",
        "id":"editor.actions.findWithArgs",
        "label":"Find With Arguments"
    },
    {
        "alias":"Find With Selection",
        "id":"actions.findWithSelection",
        "label":"Find With Selection"
    },
    {
        "alias":"Find Next",
        "id":"editor.action.nextMatchFindAction",
        "label":"Find Next"
    },
    {
        "alias":"Find Previous",
        "id":"editor.action.previousMatchFindAction",
        "label":"Find Previous"
    },
    {
        "alias":"Go to Match...",
        "id":"editor.action.goToMatchFindAction",
        "label":"Go to Match..."
    },
    {
        "alias":"Find Next Selection",
        "id":"editor.action.nextSelectionMatchFindAction",
        "label":"Find Next Selection"
    },
    {
        "alias":"Find Previous Selection",
        "id":"editor.action.previousSelectionMatchFindAction",
        "label":"Find Previous Selection"
    },
    {
        "alias":"Unfold",
        "id":"editor.unfold",
        "label":"Unfold"
    },
    {
        "alias":"Unfold Recursively",
        "id":"editor.unfoldRecursively",
        "label":"Unfold Recursively"
    },
    {
        "alias":"Fold",
        "id":"editor.fold",
        "label":"Fold"
    },
    {
        "alias":"Fold Recursively",
        "id":"editor.foldRecursively",
        "label":"Fold Recursively"
    },
    {
        "alias":"Fold All",
        "id":"editor.foldAll",
        "label":"Fold All"
    },
    {
        "alias":"Unfold All",
        "id":"editor.unfoldAll",
        "label":"Unfold All"
    },
    {
        "alias":"Fold All Block Comments",
        "id":"editor.foldAllBlockComments",
        "label":"Fold All Block Comments"
    },
    {
        "alias":"Fold All Regions",
        "id":"editor.foldAllMarkerRegions",
        "label":"Fold All Regions"
    },
    {
        "alias":"Unfold All Regions",
        "id":"editor.unfoldAllMarkerRegions",
        "label":"Unfold All Regions"
    },
    {
        "alias":"Fold All Regions Except Selected",
        "id":"editor.foldAllExcept",
        "label":"Fold All Regions Except Selected"
    },
    {
        "alias":"Unfold All Regions Except Selected",
        "id":"editor.unfoldAllExcept",
        "label":"Unfold All Regions Except Selected"
    },
    {
        "alias":"Toggle Fold",
        "id":"editor.toggleFold",
        "label":"Toggle Fold"
    },
    {
        "alias":"Go to Parent Fold",
        "id":"editor.gotoParentFold",
        "label":"Go to Parent Fold"
    },
    {
        "alias":"Go to Previous Folding Range",
        "id":"editor.gotoPreviousFold",
        "label":"Go to Previous Folding Range"
    },
    {
        "alias":"Go to Next Folding Range",
        "id":"editor.gotoNextFold",
        "label":"Go to Next Folding Range"
    },
    {
        "alias":"Create Folding Range from Selection",
        "id":"editor.createFoldingRangeFromSelection",
        "label":"Create Folding Range from Selection"
    },
    {
        "alias":"Remove Manual Folding Ranges",
        "id":"editor.removeManualFoldingRanges",
        "label":"Remove Manual Folding Ranges"
    },
    {
        "alias":"Fold Level 1",
        "id":"editor.foldLevel1",
        "label":"Fold Level 1"
    },
    {
        "alias":"Fold Level 2",
        "id":"editor.foldLevel2",
        "label":"Fold Level 2"
    },
    {
        "alias":"Fold Level 3",
        "id":"editor.foldLevel3",
        "label":"Fold Level 3"
    },
    {
        "alias":"Fold Level 4",
        "id":"editor.foldLevel4",
        "label":"Fold Level 4"
    },
    {
        "alias":"Fold Level 5",
        "id":"editor.foldLevel5",
        "label":"Fold Level 5"
    },
    {
        "alias":"Fold Level 6",
        "id":"editor.foldLevel6",
        "label":"Fold Level 6"
    },
    {
        "alias":"Fold Level 7",
        "id":"editor.foldLevel7",
        "label":"Fold Level 7"
    },
    {
        "alias":"Editor Font Zoom In",
        "id":"editor.action.fontZoomIn",
        "label":"Editor Font Zoom In"
    },
    {
        "alias":"Editor Font Zoom Out",
        "id":"editor.action.fontZoomOut",
        "label":"Editor Font Zoom Out"
    },
    {
        "alias":"Editor Font Zoom Reset",
        "id":"editor.action.fontZoomReset",
        "label":"Editor Font Zoom Reset"
    },
    {
        "alias":"Format Document",
        "id":"editor.action.formatDocument",
        "label":"Format Document"
    },
    {
        "alias":"Format Selection",
        "id":"editor.action.formatSelection",
        "label":"Format Selection"
    },
    {
        "alias":"Trigger Suggest",
        "id":"editor.action.triggerSuggest",
        "label":"Trigger Suggest"
    },
    {
        "alias":"Reset Suggest Widget Size",
        "id":"editor.action.resetSuggestSize",
        "label":"Reset Suggest Widget Size"
    },
    {
        "alias":"Trigger Inline Suggestion",
        "id":"editor.action.inlineSuggest.trigger",
        "label":"Trigger Inline Suggestion"
    },
    {
        "alias":"Show Next Inline Suggestion",
        "id":"editor.action.inlineSuggest.showNext",
        "label":"Show Next Inline Suggestion"
    },
    {
        "alias":"Show Previous Inline Suggestion",
        "id":"editor.action.inlineSuggest.showPrevious",
        "label":"Show Previous Inline Suggestion"
    },
    {
        "alias":"Accept Next Word Of Inline Suggestion",
        "id":"editor.action.inlineSuggest.acceptNextWord",
        "label":"Accept Next Word Of Inline Suggestion"
    },
    {
        "alias":"Accept Inline Suggestion",
        "id":"editor.action.inlineSuggest.commit",
        "label":"Accept Inline Suggestion"
    },
    {
        "alias":"Hide Inline Suggestion",
        "id":"editor.action.inlineSuggest.hide",
        "label":"Hide Inline Suggestion"
    },
    {
        "alias":"Undo Accept Word",
        "id":"editor.action.inlineSuggest.undo",
        "label":"Undo Accept Word"
    },
    {
        "alias":"Convert Indentation to Spaces",
        "id":"editor.action.indentationToSpaces",
        "label":"Convert Indentation to Spaces"
    },
    {
        "alias":"Convert Indentation to Tabs",
        "id":"editor.action.indentationToTabs",
        "label":"Convert Indentation to Tabs"
    },
    {
        "alias":"Indent Using Tabs",
        "id":"editor.action.indentUsingTabs",
        "label":"Indent Using Tabs"
    },
    {
        "alias":"Indent Using Spaces",
        "id":"editor.action.indentUsingSpaces",
        "label":"Indent Using Spaces"
    },
    {
        "alias":"Change Tab Display Size",
        "id":"editor.action.changeTabDisplaySize",
        "label":"Change Tab Display Size"
    },
    {
        "alias":"Detect Indentation from Content",
        "id":"editor.action.detectIndentation",
        "label":"Detect Indentation from Content"
    },
    {
        "alias":"Reindent Lines",
        "id":"editor.action.reindentlines",
        "label":"Reindent Lines"
    },
    {
        "alias":"Reindent Selected Lines",
        "id":"editor.action.reindentselectedlines",
        "label":"Reindent Selected Lines"
    },
    {
        "alias":"Replace with Previous Value",
        "id":"editor.action.inPlaceReplace.up",
        "label":"Replace with Previous Value"
    },
    {
        "alias":"Replace with Next Value",
        "id":"editor.action.inPlaceReplace.down",
        "label":"Replace with Next Value"
    },
    {
        "alias":"Expand Line Selection",
        "id":"expandLineSelection",
        "label":"Expand Line Selection"
    },
    {
        "alias":"Copy Line Up",
        "id":"editor.action.copyLinesUpAction",
        "label":"Copy Line Up"
    },
    {
        "alias":"Copy Line Down",
        "id":"editor.action.copyLinesDownAction",
        "label":"Copy Line Down"
    },
    {
        "alias":"Duplicate Selection",
        "id":"editor.action.duplicateSelection",
        "label":"Duplicate Selection"
    },
    {
        "alias":"Move Line Up",
        "id":"editor.action.moveLinesUpAction",
        "label":"Move Line Up"
    },
    {
        "alias":"Move Line Down",
        "id":"editor.action.moveLinesDownAction",
        "label":"Move Line Down"
    },
    {
        "alias":"Sort Lines Ascending",
        "id":"editor.action.sortLinesAscending",
        "label":"Sort Lines Ascending"
    },
    {
        "alias":"Sort Lines Descending",
        "id":"editor.action.sortLinesDescending",
        "label":"Sort Lines Descending"
    },
    {
        "alias":"Delete Duplicate Lines",
        "id":"editor.action.removeDuplicateLines",
        "label":"Delete Duplicate Lines"
    },
    {
        "alias":"Trim Trailing Whitespace",
        "id":"editor.action.trimTrailingWhitespace",
        "label":"Trim Trailing Whitespace"
    },
    {
        "alias":"Delete Line",
        "id":"editor.action.deleteLines",
        "label":"Delete Line"
    },
    {
        "alias":"Indent Line",
        "id":"editor.action.indentLines",
        "label":"Indent Line"
    },
    {
        "alias":"Outdent Line",
        "id":"editor.action.outdentLines",
        "label":"Outdent Line"
    },
    {
        "alias":"Insert Line Above",
        "id":"editor.action.insertLineBefore",
        "label":"Insert Line Above"
    },
    {
        "alias":"Insert Line Below",
        "id":"editor.action.insertLineAfter",
        "label":"Insert Line Below"
    },
    {
        "alias":"Delete All Left",
        "id":"deleteAllLeft",
        "label":"Delete All Left"
    },
    {
        "alias":"Delete All Right",
        "id":"deleteAllRight",
        "label":"Delete All Right"
    },
    {
        "alias":"Join Lines",
        "id":"editor.action.joinLines",
        "label":"Join Lines"
    },
    {
        "alias":"Transpose characters around the cursor",
        "id":"editor.action.transpose",
        "label":"Transpose characters around the cursor"
    },
    {
        "alias":"Transform to Uppercase",
        "id":"editor.action.transformToUppercase",
        "label":"Transform to Uppercase"
    },
    {
        "alias":"Transform to Lowercase",
        "id":"editor.action.transformToLowercase",
        "label":"Transform to Lowercase"
    },
    {
        "alias":"Transform to Snake Case",
        "id":"editor.action.transformToSnakecase",
        "label":"Transform to Snake Case"
    },
    {
        "alias":"Transform to Camel Case",
        "id":"editor.action.transformToCamelcase",
        "label":"Transform to Camel Case"
    },
    {
        "alias":"Transform to Title Case",
        "id":"editor.action.transformToTitlecase",
        "label":"Transform to Title Case"
    },
    {
        "alias":"Transform to Kebab Case",
        "id":"editor.action.transformToKebabcase",
        "label":"Transform to Kebab Case"
    },
    {
        "alias":"Start Linked Editing",
        "id":"editor.action.linkedEditing",
        "label":"Start Linked Editing"
    },
    {
        "alias":"Open Link",
        "id":"editor.action.openLink",
        "label":"Open Link"
    },
    {
        "alias":"Add Cursor Above",
        "id":"editor.action.insertCursorAbove",
        "label":"Add Cursor Above"
    },
    {
        "alias":"Add Cursor Below",
        "id":"editor.action.insertCursorBelow",
        "label":"Add Cursor Below"
    },
    {
        "alias":"Add Cursors to Line Ends",
        "id":"editor.action.insertCursorAtEndOfEachLineSelected",
        "label":"Add Cursors to Line Ends"
    },
    {
        "alias":"Add Selection To Next Find Match",
        "id":"editor.action.addSelectionToNextFindMatch",
        "label":"Add Selection To Next Find Match"
    },
    {
        "alias":"Add Selection To Previous Find Match",
        "id":"editor.action.addSelectionToPreviousFindMatch",
        "label":"Add Selection To Previous Find Match"
    },
    {
        "alias":"Move Last Selection To Next Find Match",
        "id":"editor.action.moveSelectionToNextFindMatch",
        "label":"Move Last Selection To Next Find Match"
    },
    {
        "alias":"Move Last Selection To Previous Find Match",
        "id":"editor.action.moveSelectionToPreviousFindMatch",
        "label":"Move Last Selection To Previous Find Match"
    },
    {
        "alias":"Select All Occurrences of Find Match",
        "id":"editor.action.selectHighlights",
        "label":"Select All Occurrences of Find Match"
    },
    {
        "alias":"Change All Occurrences",
        "id":"editor.action.changeAll",
        "label":"Change All Occurrences"
    },
    {
        "alias":"Add Cursors To Bottom",
        "id":"editor.action.addCursorsToBottom",
        "label":"Add Cursors To Bottom"
    },
    {
        "alias":"Add Cursors To Top",
        "id":"editor.action.addCursorsToTop",
        "label":"Add Cursors To Top"
    },
    {
        "alias":"Focus Next Cursor",
        "id":"editor.action.focusNextCursor",
        "label":"Focus Next Cursor"
    },
    {
        "alias":"Focus Previous Cursor",
        "id":"editor.action.focusPreviousCursor",
        "label":"Focus Previous Cursor"
    },
    {
        "alias":"Trigger Parameter Hints",
        "id":"editor.action.triggerParameterHints",
        "label":"Trigger Parameter Hints"
    },
    {
        "alias":"Rename Symbol",
        "id":"editor.action.rename",
        "label":"Rename Symbol"
    },
    {
        "alias":"Expand Selection",
        "id":"editor.action.smartSelect.expand",
        "label":"Expand Selection"
    },
    {
        "alias":"Shrink Selection",
        "id":"editor.action.smartSelect.shrink",
        "label":"Shrink Selection"
    },
    {
        "alias":"Developer: Force Retokenize",
        "id":"editor.action.forceRetokenize",
        "label":"Developer: Force Retokenize"
    },
    {
        "alias":"Disable highlighting of ambiguous characters",
        "id":"editor.action.unicodeHighlight.disableHighlightingOfAmbiguousCharacters",
        "label":"Disable highlighting of ambiguous characters"
    },
    {
        "alias":"Disable highlighting of invisible characters",
        "id":"editor.action.unicodeHighlight.disableHighlightingOfInvisibleCharacters",
        "label":"Disable highlighting of invisible characters"
    },
    {
        "alias":"Disable highlighting of non basic ASCII characters",
        "id":"editor.action.unicodeHighlight.disableHighlightingOfNonBasicAsciiCharacters",
        "label":"Disable highlighting of non basic ASCII characters"
    },
    {
        "alias":"Show Exclude Options",
        "id":"editor.action.unicodeHighlight.showExcludeOptions",
        "label":"Show Exclude Options"
    },
    {
        "alias":"Go to Next Symbol Highlight",
        "id":"editor.action.wordHighlight.next",
        "label":"Go to Next Symbol Highlight"
    },
    {
        "alias":"Go to Previous Symbol Highlight",
        "id":"editor.action.wordHighlight.prev",
        "label":"Go to Previous Symbol Highlight"
    },
    {
        "alias":"Trigger Symbol Highlight",
        "id":"editor.action.wordHighlight.trigger",
        "label":"Trigger Symbol Highlight"
    },
    {
        "alias":"Delete Word",
        "id":"deleteInsideWord",
        "label":"Delete Word"
    },
    {
        "alias":"Show Accessibility Help",
        "id":"editor.action.showAccessibilityHelp",
        "label":"Show Accessibility Help"
    },
    {
        "alias":"Developer: Inspect Tokens",
        "id":"editor.action.inspectTokens",
        "label":"Developer: Inspect Tokens"
    },
    {
        "alias":"Go to Line/Column...",
        "id":"editor.action.gotoLine",
        "label":"Go to Line/Column..."
    },
    {
        "alias":"Go to Symbol...",
        "id":"editor.action.quickOutline",
        "label":"Go to Symbol..."
    },
    {
        "alias":"Command Palette",
        "id":"editor.action.quickCommand",
        "label":"Command Palette"
    },
    {
        "alias":"Toggle High Contrast Theme",
        "id":"editor.action.toggleHighContrast",
        "label":"Toggle High Contrast Theme"
    }
]
```