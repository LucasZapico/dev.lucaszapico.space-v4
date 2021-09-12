---
title: 'Shell and Terminal Notes'
description: ''
date-created: 2018/03/15 14:19:17
last-modified: 2021/09/07 07:07:49
isdraft: false
categories: ['linux','command-line', 'shell', 'notes']
tags: []
type: 'notes'
---


## Catch

From within a CLI(command line interface) environment__Echo__

```
// prints to CLI
echo "some text"
```

```
~ echo "1\t2\t3"
1\t2\t3

~ echo -e "1\t2\t3"
1	2	3
```
__Color text__

| color   | code |
|:--------|:-----|
| Reset   | 0    |
| black   | 30   |
| red     | 31   |
| green   | 32   |
| yellow  | 33   |
| blue    | 34   |
| magenta | 35   |
| cyan    | 36   |
| white   | 37   |

__Example:__ Print out blue text

```
~ echo -e "\e[1;34m This is blue text \e[0m"
 This is blue text
```

__Color Background__

| color   | code |
|:--------|:-----|
| Reset   | 0    |
| black   | 40   |
| red     | 41   |
| green   | 42   |
| yellow  | 43   |
| blue    | 44   |
| magenta | 45   |
| cyan    | 46   |
| white   | 47   |


```
~ echo -e "\e[1;43m This is text has a yellow background \e[0m"
 This text has a yellow background
```

#### Variables and Environment Variables


#### Commands Basics

__Basic General Syntax__

```
 > some-command some-option some-arguments
 ```
__WHEN IN DOUBT__

Opens a documentation/manual for a given command.

```Bash
man some-command
```

```Bash
 env
 //shows the variables which describe the shell environment

 'command' /dir > file.txt
 // will save the return of the command to the defined file

 pwd
 // print working directory

cd
//change directory

cd -
//change to most recent directory

 touch my-file
 // makes a file

 touch {file1,file2,file3}
 touch {01..1000}
 //makes all three defined files

 mkdir directory-name/
 // make a folder/directory

 mv my-file directory-name/
 // moves my-file to a given directory

 cp my-file directory-copy/
 // copies given file to defined directory

 rm some-file
 // removes defined file

 rm -r some-directory
 // removes defined directory and all children

 cat some-file
 // returns contents of file

 file some-file.type
 // returns file type
 // example
 file index.html
 return: index.html: ASCII text

vim some-file.type
// opens file in vim for editing

less some-file.type
// opens file in less for editing.
// note: in less 'h' opens up command navigation reference

bg
//(background) sends currently running script to the background

fg
//(foreground) brings scripts running in background to foreground

```
### Bash

####  Commands

__Echo__
```
~ echo "some text"
// prints some text to the terminal
```

 ```
 // bash commands

 which some-command
 // file path to command

 ```

### Zsh

####  Commands

 ```
 // zsh commands

man some-command
// opens manual for 'some-command'

whatis some-command
// brief descrption of command

 ```

---------------------------------------------------------
-----------------------------------------------------

### Network Status Commands

```
netstat -ap tcp | grep -i "LISTEN"
//

netstat -ap tcp
//

sudo lsof -i -P -n | grep LISTEN
//

sudo lsof -PiTCP -sTCP:LISTEN
//command/app, PID, user, FD, TYPE, DEVICE, SIZE, NODE, NAME(PORT)

lsof -i tcp:<port>
//command/app, PID, user, FD, TYPE, DEVICE, SIZE, NODE, NAME(defined-PORT)

kill -9 <PID>
//kill by process ID

```





--------------------------------------------------------------
---------------------------------------------------------------
# Reference #

| Directory/Folder                         | Contents                                 |
| ---------------------------------------- | ---------------------------------------- |
| /                                        | root                                     |
| /bin                                     | binaries, programs                       |
| /sbin                                    | system binaries, system programs         |
| /dev                                     | devices: hard drives, keyboard, mouse, etc |
| /etc                                     | system configurations                    |
| /home                                    | user home directories                    |
| /lib                                     | libraries of code                        |
| /tmp                                     | temporary files                          |
| /var                                     | variousr, mostly files the system uses   |
| /usr </br> /usr/bin </br> /usr/etc </br>/urs/lib</br>/urs/local | user programs, tools and libraries       |



------------------------------------------------------------------------------
## Resources and Reference 

Notes within this doc have been drawn from the following sources:
- source: __Shell Sytle Guide__
  - link: https://google.github.io/styleguide/shell.xml
- source: __Bash Programming- Introduction How-To__
  - link: http://tldp.org/HOWTO/Bash-Prog-Intro-HOWTO.html
    source: __Linux Kernel Codeing Style__
   - link: https://www.kernel.org/doc/Documentation/process/coding-style.rst

  __EXAMPLE__
- source: __Example of literal cite__
  - Sheldon Ross M(2010). A first course in probability/ Sheldon Ross. - 8th ed. Upper Saddle River, NJ: Pearson Prentice Hall

### Document Details 

date initialized: November,25,1017
passes to date: 1
current pass:
subject:




## LOG
4/21/2018, 2PM

