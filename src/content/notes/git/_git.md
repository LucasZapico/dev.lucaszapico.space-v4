---
title: _git
description: 'Notes on CORS policy and common error and solutions'
date-created: 2017/03/15 14:19:17
last-modified: 2021/10/03 08:19:27
isdraft: false
categories: ['git', 'notes']
tags: ['git', 'notes']
type: 'note'
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
