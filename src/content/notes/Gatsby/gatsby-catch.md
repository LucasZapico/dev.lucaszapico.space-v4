---
title: 'Gatsby Notes'
description: 'Genernal notes on gatsby'
date-created: 2020/30/09
last-modified: 2021/09/01 19:47:01
isdraft: false
categories: ['gatsby', 'notes']
tags: ['gatsby', 'env']
type: 'note'
---

## Setting Gatsby Env

The Gatsby uses a similar env set up as the create react app.

_package.json_

```json
"scripts": {
  "staging": "set GATSBY_ENV=staging gatsby develop --port 8005",
}
```
