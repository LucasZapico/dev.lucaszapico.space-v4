---
title: ssh Catch
description: 
date-created: 2022-02-11
last-modified: 2022-02-11
categories: [git, reference] 
tags: [github, gitlab, bitbucket, version-control, notes]
isdraft: false
type: note
---

# ssh Catch 

## Set-Up

### Single Service

__Generate Key__

```shell
ssh-keygen -t rsa
```

For a single service use the default file `.ssh/id_rsa` but for multiple services follow the steps below. 

### Setting Up Unique SSH for Multiple Services 

__Make a config__

```shell
touch ~/.ssh/config
```

__Example config__

*config*
```txt
# contents of $HOME/.ssh/config
Host github.com
   IdentityFile ~/.ssh/github.key
Host gitlab.com
   IdentityFile ~/.ssh/gitlab.key
```

Now when `ssh-keygen -t rsa` asks for a file specify the file associated with the domain or service 

__Example key gen__

```shell
ssh-keygen -t ed25519 -C <github-email>
```

```
Generating public/private ed25519 key pair.
Enter file in which to save the key (/Users/lkuno/.ssh/id_ed25519): github.key
```

>💡  note: if the file does not show up in `.ssh/` using the full path should correct


### Add to Service 
> 🔥 make sure to use the `.pub` extension as this is where our public key is stored

```shell 
pbcopy < ~/.ssh/github.key.pub
```

Add this to the services we want to Authorize. 

## Reference 

[how to set up ssh for multiple services](https://nerderati.com/2011/03/17/simplify-your-life-with-an-ssh-config-file/)

[Generating new ssh key and adding it to ssh-agent - github](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)