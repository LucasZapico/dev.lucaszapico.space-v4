---
title: "_os-environments"
description: ""
date-created: "2022/02/24"
last-modified: "2022/08/24"
categories: ["os"]
tags: ["os"]
isdraft: true
type: ""
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
