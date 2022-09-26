---
title: _git
description:
date-created: 2022-02-11
last-modified: '2022/08/23'
categories: ['git']
tags: ['git']
isdraft: false
type: 'note'
---

# \_git


- [[ssh]]

### Solving Git Ignoring GitIgnore

```shell
git rm -r --cached .
git add .
git commit -m "fixed untracked files"

```

### Revert a Commited Change with reset HEAD

[How to Git Reset to HEAD - devconnected](https://devconnected.com/how-to-git-reset-to-head)


Go back to `HEAD`
```sh
git reset --hard HEAD
```

Go back to commit before `HEAD`
```sh 
git reset --hard HEAD^
git reset --hard HEAD~1
```

Go back two commits before `HEAD`
```sh 
git reset --hard HEAD~2
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
