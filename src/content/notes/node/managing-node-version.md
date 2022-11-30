---
title: "Managing Node Versions on MacOS"
description: "Notes on how to manage different node versions on a single machine"
date-created: "2022/09/12"
last-modified: "2022/10/17"
isdraft: true
categories: ["node", "notes", "dev-opts"]
tags: ["node", "notes", "reference", "dev-opts"]
type: "note"
---

## Brew install the desired node versions

```sh
brew install node@14
brew install node@16
```

## Use Alias's to switch node versions

_zshrc_

```sh
alias node13='export PATH="/usr/local/opt/node@13/bin:$PATH"'
alias node12='export PATH="/usr/local/opt/node@12/bin:$PATH"'
alias node10='export PATH="/usr/local/opt/node@10/bin:$PATH"'

```
