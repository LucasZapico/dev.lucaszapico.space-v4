---
title: "HomeBrew Notes"
description: "General notes and cheatsheet for HomeBrew"
date-created: "2020/10/21"
last-modified: "2022/09/18"
isdraft: false
categories: ["brew", "notes", "cheatsheet"]
tags: ["brew", "notes", "dev-env", "cheatsheet"]
type: "note"
---

## What is HomeBrew

> The missing package manager for macOS (or Linux)

HomeBrew is or commonly called Brew is an open-source package manger that enables easy managment of Apps and software all from the CLI.

## Why use HomeBrew

### Software and Package Managment

Homebrew centralized and makes the managment of packages and apps faster and more straight forward. Software can be installed directly from the CLI rather then going to a download page.

### Management of Multiple Versions

HomeBrew simplifies handling multiple versions of languages such as Node and Python.

- [Solutions for manging multiple version of node on macOS](src/content/articles/solutions-for-managing-multiple-versions-of-node-on-macos.md)

## CheatSheet

Get info on a given formula

- version
- description

```shell
brew info wget
```

List current installed packages

```sh
brew list
```

Search for package

```sh
brew search <package-name>
```

Install package or cask

```sh
brew install <package-name>
```

Install `cask`

```sh
brew install. --cask <cask-name>
```

uninstall package

```sh
brew uninstall <package-name>
```

## uninstall

```shell
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/uninstall.sh)"
```
