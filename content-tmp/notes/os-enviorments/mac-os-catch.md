---
title: "MacOS Productivity Enviroment Notes and CheatSheet"
description: "Reference notes for mac"
date-created: 2022/07/06
last-modified: "2022/09/22"
isdraft: false
categories: ["macos", "notes", "cheatsheet"]
tags: ["macos", "notes", "workflow", "cheatsheet"]
type: "note"
---

## Mac Intel Chip Boot Modes

[Support apple](https://support.apple.com/en-us/HT201255)

- recovery mode
- internet recovery

### Recovery Mode

<Kbd>Command</Kbd> + <Kbd>R</Kbd>

### Internet Recovery

<Kbd>Option</Kbd> + <Kbd>Command</Kbd> + <Kbd>R</Kbd>

### Start Up Manager

This mode allow you to pick your boot location. For example if you have multiple OS's installed.

### Start In Safe Mode

Hold <Kbd>shift</Kbd>

## Create Bootable USB From Recovery Mode

1. boot into recovery mode <Kbd>Command</Kbd> + <Kbd>R</Kbd>
2. click disk utility
3. ❗ View > Show All Devices
4. click on the device in "External"
5. earse and formate to "Mac OS Extended(Journalized)
6. quick disk utility
7. click on install OS <your-machine-os>
8. walk through steps
9. choose install location (our formated USB)
10. ✨ Done

## MacOS Common Action CheatSheet

### Set hidden files in Finder to "show" or "hide"

> 💡 For changes to take effect restart or `killall Finder`

**Show hidden files**

```sh
defaults write com.apple.finder AppleShowAllFiles TRUE
```

**Hide hidden files**

```sh
defaults write com.apple.finder AppleShowAllFiles FALSE
```

### Increase Mouse/trackpad tracking speed

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