---
title: git
description: Notes on CORS policy and common error and solutions
date-created: '2017/03/15 14:19:17'
last-modified: 2022/01/29 09:18:27
isdraft: false
categories:
  - git
  - notes
tags:
  - null
type: note
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

### Delete Local and Remote Branches

```shell
// delete branch locally
git branch -d localBranchName

// delete branch remotely
git push origin --delete remoteBranchName
```
