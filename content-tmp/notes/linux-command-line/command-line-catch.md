---
title: "Linux and Command Line"
description: ""
date-created: 2018/03/15 14:19:17
last-modified: 2021/09/07 07:36:04
isdraft: false
categories: ["linux", "command-line", "notes"]
tags: []
type: "notes"
---

#### Copy Current Dir to Clip board

```sh
pwd | pbcopy
```

#### Copying Files and Directories

**copy directory from to another**

```shell
cp -R <source_folder> <destination_folder>
```

**copy dir into destination**

```shell
cp -Rv dirOne dirTwo
# dirOne -> dirTwo/dirOne
# dirOne/item-1.txt -> dirTwo/dirOne/item-1.txt
```

_v for verbose_

**copy dir content into destination**

```shell
cp -Rv dirOne/ dirTwo/

# dirOne/ -> dirTwo
# dirOne//item-1.txt -> dirTwo/item-1.txt
```

#### Remove Directories and Content

**shell docs for command**

```shell
man rm
```

**remove directory and contents**

```shell
rm -R dirOne
```

**alt remove directory and contents force and verbose**

```shell
rm -rfv dirOne
```

_f force flag_
_v verbose flag_
