---
title: 'More Advanced Formating Pattern Bash'
description: 'General notes on Bash formating '
date-created: '2022/09/23'
last-modified: '2022/09/28'
isdraft: false
categories: ['bash', 'process', 'workflows', 'reference']
tags: ['bash', 'process', 'workflows', 'reference']
type: 'note'
---

## Using `printf` 

```sh
printf "%s\n" "hello world from printf"
hello world from printf
```

```sh 
$ printf "%s\n" "hello printf" "in" "bash script"
hello printf
in
bash script
```

### Advanced Formating 

#### Table

```sh title=table.sh
#/bin/bash
divider="=============================="
divider=$divider$divider

header="\n %-10s %8s %10s %11s\n"
format=" %-10s %08d %10s %11.2f\n"

width=43

printf "$header" "ITEM NAME" "ITEM ID" "COLOR" "PRICE"

printf "%$width.${width}s\n" "$divider"

printf "$format" \
Triangle 13  red 20 \
Oval 204449 "dark blue" 65.656 \
Square 3145 orange .7
```