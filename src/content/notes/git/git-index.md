---
title: git
description: 'General catch of notes, cheatsheet and reference for git related functionality'
date-created: '2022/02/11'
last-modified: '2022/09/29'
categories: ['git', 'cheatsheet', 'reference']
tags: ['git', 'cheatsheet', 'reference']
isdraft: false
type: 'note'
---

# git

## Related

- [[ssh]]

## CheatSheet

### Check Git Configurations

```sh
git config --global --list
git config --local --list
git config --system --list
```

### Get Remote Origin Url

```shell
git config --get remote.origin.url
```

## Reference for Common Challenge and Solutions

### Solving Git Ignoring GitIgnore

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

## Multi User Challenge

```sh
git credential --help
``


## Reference

[Atlassian git tutorials](https://www.atlassian.com/git/tutorials/)

```