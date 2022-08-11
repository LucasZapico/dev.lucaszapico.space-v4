---
title: Linux and Command Line
description: ''
date-created: 2018/03/15
last-modified: '2022/07/17'
isdraft: false
categories: ['linux', 'command-line', 'notes']
tags: ['linux', 'command-line', 'notes']
type: 'notes'
---

### User Management

#### List Users

```shell
sudo dscl . list /Users | grep -v "^_"
```

#### List Groups

```shell
sudo dscl . list /Groups
```

#### See Members of Group

```shell
dscl . -read  /Groups/admin
```

or

```shell
dscl . -read /Groups/admin GroupMembership
```

or

```shell
dscacheutil -q group -a name admin
```

#### Add user to Group

```shell
sudo dscl . append /Groups/admin GroupMembership <user_name>
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
