---
title: "CLI select and multi select Bash"
description: "Bash patterns for select and multi select"
date-created: "2022/09/27"
last-modified: "2022/09/27"
isdraft: true
categories: ["bash", "pattern", "reference"]
tags: ["bash", "pattern", "reference"]
type: "note"
---

## Single select

```sh title="single-select.sh"
#!/bin/bash
# Bash Menu Script Example

PS3='Please enter your choice: '
options=("Option 1" "Option 2" "Option 3" "Quit")
select opt in "${options[@]}"
do
    case $opt in
        "Option 1")
            echo "you chose choice 1"
            ;;
        "Option 2")
            echo "you chose choice 2"
            ;;
        "Option 3")
            echo "you chose choice $REPLY which is $opt"
            ;;
        "Quit")
            break
            ;;
        *) echo "invalid option $REPLY";;
    esac
done

```

## Multi Select

```sh title="multi-select.sh"
#!/bin/bash
# Purpose: Demonstrate usage of select and case with toggleable flags to indicate choices
# 2013-05-10 - Dennis Williamson

choice () {
    local choice=$1
    if [[ ${opts[choice]} ]] # toggle
    then
        opts[choice]=
    else
        opts[choice]=+
    fi
}

PS3='Please enter your choice: '
while :
do
    clear
    options=("Option 1 ${opts[1]}" "Option 2 ${opts[2]}" "Option 3 ${opts[3]}" "Done")
    select opt in "${options[@]}"
    do
        case $opt in
            "Option 1 ${opts[1]}")
                choice 1
                break
                ;;
            "Option 2 ${opts[2]}")
                choice 2
                break
                ;;
            "Option 3 ${opts[3]}")
                choice 3
                break
                ;;
            "Option 4 ${opts[4]}")
                choice 4
                break
                ;;
            "Done")
                break 2
                ;;
            *) printf '%s\n' 'invalid option';;
        esac
    done
done

printf '%s\n' 'Options chosen:'
for opt in "${!opts[@]}"
do
    if [[ ${opts[opt]} ]]
    then
        printf '%s\n' "Option $opt"
    fi
done
```
