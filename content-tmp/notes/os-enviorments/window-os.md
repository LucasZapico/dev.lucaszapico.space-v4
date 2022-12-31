---
title: "Window 10 Notes"
description: "Reference notes on window"
date-created: 2021/03/15 14:19:17
last-modified: 2021/09/01 19:08:28
isdraft: false
categories: ["window", "notes"]
tags: []
type: "note"
---

# Window 10 OS Notes

## Keyboard Shortcuts - Workflow

```
win + left-arrow
// snap left

win + right-arrow
// snap right

win + up-arrow
// maximize window

win + down-arrow
// minimize window
```

## Screen Grab

```txt
 win + Shift + S
```

## Command Prompt Catch

Command prompt is officially called Windows Command Processor.

```
> help
// prints all commands

> help some-command
// prints documentation
```

```
> mkdir
// makes a directory
```

```
set
// list all env variables

set <some-variable>
// is the same as echo $<variable>
```

```
ctrl + c

```

```
> dir
// show directories in given folder
```

```
> attrib
// set ownership on files and directories
```

```
> cd
// print current directory
```

```
> chkdsk
// checks filesystem and repairs filesystem
```

```
> cls
// clear window
```

```
> copy

```

```
> date
> time
```

```
> del
//

> deltree
// recursively deletes entire directory tree
```

```
> edit
// simple text editor
// Note the variable EDITOR should be set to the user's preferred editor
```

```
> type
// displays the contents of a text file
```

```
> rename
// renames file or files
```

### Logic and Conditionals

```
> if
// performs a condistional processing in batch programs
```

```
> for
// runs a specified command for each file in a set of files
```

## PowerShell

[Learning PowerShell](https://github.com/PowerShell/PowerShell/tree/master/docs/learning-powershell)
[Cook Book - Power shell](https://docs.microsoft.com/en-us/powershell/scripting/samples/sample-scripts-for-administration?view=powershell-6)

```powershell
> Get-Command *-Service
// show list of cmdlets
```

For a given **Service** user;

```powershell
Get-Help <some-service
// to see documentation for service
```

#### Show list of Running Processes

```powershell
Get-Process
```

##### Show Directories

```powershell
ls
// show current directories
```

### Quick Reference

<table>
<thead>
<tr>
<th align="left">Bash</th>
<th align="left">PowerShell</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td align="left">ls</td>
<td align="left">dir, Get-ChildItem</td>
<td align="left">List files and folders</td>
</tr>
<tr>
<td align="left">tree</td>
<td align="left">dir -Recurse, Get-ChildItem -Recurse</td>
<td align="left">List all files and folders</td>
</tr>
<tr>
<td align="left">cd</td>
<td align="left">cd, Set-Location</td>
<td align="left">Change directory</td>
</tr>
<tr>
<td align="left">pwd</td>
<td align="left">pwd, $pwd, Get-Location</td>
<td align="left">Show working directory</td>
</tr>
<tr>
<td align="left">clear, Ctrl+L, reset</td>
<td align="left">cls, clear</td>
<td align="left">Clear screen</td>
</tr>
<tr>
<td align="left">mkdir</td>
<td align="left">New-Item -ItemType Directory</td>
<td align="left">Create a new folder</td>
</tr>
<tr>
<td align="left">touch test.txt</td>
<td align="left">New-Item -Path test.txt</td>
<td align="left">Create a new empty file</td>
</tr>
<tr>
<td align="left">cat test1.txt test2.txt</td>
<td align="left">Get-Content test1.txt, test2.txt</td>
<td align="left">Display files contents</td>
</tr>
<tr>
<td align="left">cp ./source.txt ./dest/dest.txt</td>
<td align="left">Copy-Item source.txt dest/dest.txt</td>
<td align="left">Copy a file</td>
</tr>
<tr>
<td align="left">cp -r ./source ./dest</td>
<td align="left">Copy-Item ./source ./dest -Recurse</td>
<td align="left">Recursively copy from one folder to another</td>
</tr>
<tr>
<td align="left">mv ./source.txt ./dest/dest.txt</td>
<td align="left">Move-Item ./source.txt ./dest/dest.txt</td>
<td align="left">Move a file to other folder</td>
</tr>
<tr>
<td align="left">rm test.txt</td>
<td align="left">Remove-Item test.txt</td>
<td align="left">Delete a file</td>
</tr>
<tr>
<td align="left">rm -r &lt;folderName&gt;</td>
<td align="left">Remove-Item &lt;folderName&gt; -Recurse</td>
<td align="left">Delete a folder</td>
</tr>
<tr>
<td align="left">find -name build*</td>
<td align="left">Get-ChildItem build* -Recurse</td>
<td align="left">Find a file or folder starting with 'build'</td>
</tr>
<tr>
<td align="left">grep -Rin "sometext" --include="*.cs"</td>
<td align="left">Get-ChildItem -Recurse -Filter *.cs <br> | Select-String -Pattern "sometext"</td>
<td align="left">Recursively case-insensitive search for text in files</td>
</tr>
<tr>
<td align="left">curl <a href="https://github.com">https://github.com</a></td>
<td align="left">Invoke-RestMethod <a href="https://github.com">https://github.com</a></td>
<td align="left">Transfer data to or from the web</td>
</tr>
</tbody>
</table>

## RESOURCES

[Command Prompt: What is is and how to use it](https://www.lifewire.com/command-prompt-2625840)

[Window and unix command line equivalents](https://www.lemoda.net/windows/windows2unix/windows2unix.html)

### REFERENCES
