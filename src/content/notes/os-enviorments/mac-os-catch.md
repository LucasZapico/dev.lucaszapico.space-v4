---
title: 'MacOS Productivity Enviroment Notes and CheatSheet'
description: 'Reference notes for mac'
date-created: 2022/07/06
last-modified: '2022/09/22'
isdraft: false
categories: ['macos', 'notes', 'cheatsheet']
tags: ['macos', 'notes', 'workflow', 'cheatsheet']
type: 'note'
---

## Set hidden files in Finder to "show" or "hide"

> 💡 For changes to take effect restart or `killall Finder`

**Show hidden files**

```sh
defaults write com.apple.finder AppleShowAllFiles TRUE
```

**Hide hidden files**

```sh 
defaults write com.apple.finder AppleShowAllFiles FALSE
```

## Increase Mouse/trackpad tracking speed

**See current speed**

```sh
defaults read -g com.apple.mouse.scaling
```

**Edit speed**

```sh
defaults write -g com.apple.mouse.scaling 8.0
```

## Macos Starter Script 2022 

`gist:LucasZapico/d6751e5ed72ef5c5dd5bcfe9f364130f#macos-starter-script-2022.sh`

