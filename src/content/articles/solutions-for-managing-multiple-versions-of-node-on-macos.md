---
title: 'Solution for Managing Multiple Versions of Node on MacOS'
description: 'Solutions for handling multiple versions of Node on macOS using HomeBrew'
date-created: '2022/09/19'
last-modified: '2022/09/19'
isdraft: false
categories: ['solution', 'env']
tags: ['solution']
type: 'article'
---

This article goes over solutions for managing multiple versions of Node.js on macOS. We'll start with a solution that I felt was straight forward and easily managemable. This is a living article and other solutions may be added over time. This solution was pulled form [How to manage multiple Node.js versions on macOS X - Notiz.dev](https://notiz.dev/blog/how-to-manage-multiple-node-versions-on-mac) and this artilce is meant as a public personal reference. 

## Assumptions 

- HomeBrew is installed 
- general understanding of bash/zsh profiles

## Install Desired Node Versions

```sh
brew istall node@<version>
```

__Example__

```sh
brew install node@16
```

> The default `brew install node` installed the latest version 

### Useful CLI commands to check work

Check node verison 

```sh 
node --version 
```

Check node install location
```sh
which node
```

### Use Alsias to switch Node versions

Add and alias to `.zshrc` for each Node version installed. 

*.zshrc*
```sh
alias node16='export PATH="/usr/local/opt/node@16/bin:$PATH"'
alias node14='export PATH="/usr/local/opt/node@14/bin:$PATH"'
```

> Refernece alias in CLI to switch between node versions 

**Example**
```sh 
 node16
 node -v # v16.11.0
```

> 📔 This soluton only changes the Node version in the terminal instance