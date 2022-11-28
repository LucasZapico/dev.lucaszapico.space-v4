---
title: "Electron Notes"
description: "Genernal notes on electron"
date-created: 2020/30/09
last-modified: "2022/09/30"
isdraft: true
categories: ["electron", "notes"]
tags: ["electron", "env"]
type: "note"
---

## Quick fix to CORS error

_electron.js_

```javascript
const mainWindow = new BrowserWindow({
  webPreferences: {
    webSecurity: false,
  },
})
```
