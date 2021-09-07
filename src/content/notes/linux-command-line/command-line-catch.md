---
title: 'Linux and Command Line'
description: ''
date-created: 2018/03/15 14:19:17
last-modified: 2021/09/07 07:29:42
isdraft: false
categories: ['linux','command-line', 'notes']
tags: []
type: 'notes'
---

**Copy directory from to another**

```shell
cp -R <source_folder> <destination_folder>
```

**copy dir into destination**

```shell
cp -Rv dirOne dirTwo
# dirOne -> dirTwo/dirOne
# dirOne/item-1.txt -> dirTwo/dirOne/item-1.txt
```
*v for verbose* 

**copy dir content into destination**

```shell
cp -Rv dirOne/ dirTwo/

# dirOne/ -> dirTwo
# dirOne//item-1.txt -> dirTwo/item-1.txt
```