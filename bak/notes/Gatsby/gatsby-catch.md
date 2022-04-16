---
title: Gatsby Notes
description: Genernal notes on gatsby
date-created: 2020/30/09
last-modified: 2022/01/29 09:18:10
isdraft: false
categories:
  - gatsby
  - notes
tags:
  - gatsby
  - env
type: note
---

## Setting Gatsby Env

The Gatsby uses a similar env set up as the create react app.

_package.json_

```json
"scripts": {
  "staging": "set GATSBY_ENV=staging gatsby develop --port 8005",
}
```
