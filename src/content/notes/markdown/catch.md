---
title: 'Markdown Catch'
description: 'General notes on markdown process, config and workflows'
date-created: '2022/07/15'
last-modified: '2022/07/15'
isdraft: false
categories: ['markdown', 'content', 'process', 'workflows']
tags: ['markdown', 'content', 'process', 'workflows']
type: 'note'
---

## Tools

- [vscdoe]()
- [typora]()
- [paper]()

## Vscode

### Configs

_setting.json_

```json
{
  ...
 "[markdown]": {
    "editor.formatOnSave": true,
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.unicodeHighlight.ambiguousCharacters": false,
    "editor.unicodeHighlight.invisibleCharacters": false,
    "editor.rulers": [70],
    "editor.wordWrap": "wordWrapColumn",
    "editor.wrappingIndent": "same",
    "editor.quickSuggestions": {
      "comments": "off",
      "strings": "off",
      "other": "off"
    },
    ...
}

```

#### Setting Readable Line width

```json
{
  ...
 "[markdown]": {
   ...
    "editor.rulers": [70],
    "editor.wordWrap": "wordWrapColumn",
    "editor.wrappingIndent": "same",
    ...
 }
    ...
}

```

## Reference
