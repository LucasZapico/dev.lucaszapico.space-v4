---
title: _git
description:
date-created: 2022-02-11
last-modified: '2022/08/11'
categories: []
tags: []
isdraft: false
type:
---

# \_git

- [[notes/git/catch]]
- [[ssh]]

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

**See Remote Url**

```shell
git config --get remote.origin.url
```

## Multi User Challenge

```sh
git credential --help
``
```
