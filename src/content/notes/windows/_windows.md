---
title: 'Window Dev Notes 2022'
description: 'General notes on making Windows Development better'
date-created: '2022/05/22'
last-modified: '2022/05/22'
isdraft: true
categories: ['windows', 'notes', 'dev-env']
tags: ['windows', 'notes', 'dev-env']
type: 'notes'
---

## Chocolaty

### install Chocolatey

Open PowerShell in Admin and run 👇

```sh
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))
```

### Chocolatey Reference Commands

**Check install**

```sh
choco -?
```

**Search for package or app**

```sh
choco search <app/package-name>
```

**Install package or app**

```sh
choco install <app/package-name>
```
