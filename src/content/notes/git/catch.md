---
title: 'git'
description: 'Notes on CORS policy and common error and solutions'
date-created: 2017/03/15 14:19:17
last-modified: 2021/10/01 15:26:22
isdraft: false
categories: ['git', 'notes']
tags: []
type: 'note'
---

### Git Ignoring GitIgnore

```shell
git rm -r --cached .
git add .
git commit -m "fixed untracked files"

```
### Git undo `git add --all`

```shell
git reset HEAD 
```