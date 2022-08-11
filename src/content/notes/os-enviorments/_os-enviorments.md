---
title: '_os-environments'
description: ''
date-created: '2022/02/24'
last-modified: '2022/08/11'
categories: []
tags: []
isdraft: false
type: ''
---

# \_os-environments

## Catch

### Mac

**list users**

```shell
dscl . list /User
```

or

```shell
dscl . list /User | grep -v '_'
```
