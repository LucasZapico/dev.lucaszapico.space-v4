---
title: 'Quality of Life Commands'
description: ''
date-created: 2018/03/15 14:19:17
last-modified: 2021/10/23 10:24:52
isdraft: false
categories: ['linux', 'command-line', 'notes', 'quality-of-life']
tags: []
type: 'notes'
---


### One Line replace spaces with "-" 

```shell
for file in *; do mv "$file" `echo $file | tr ' ' '-'` ; done
```

#### As a script

```shell
#!/bin/bash

for f in *
do
  new="${f// /_}"
  if [ "$new" != "$f" ]
  then
    if [ -e "$new" ]
    then
      echo not renaming \""$f"\" because \""$new"\" already exists
    else
      echo moving "$f" to "$new"
    mv "$f" "$new"
  fi
fi
done
```