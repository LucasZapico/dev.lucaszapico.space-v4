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

## SSH Quick Reference

```shell
ssh <remote-username>@<remote_domain/ip>
```

**Example**

```shell
ssh root@216.125.129.17
```

## Set-Up

### Single Service

**Generate Key**

```shell
ssh-keygen -t rsa
```

For a single service use the default file `.ssh/id_rsa` but for multiple services follow the steps below.

### Setting Up Unique SSH for Multiple Services

**Make a config**

```shell
touch ~/.ssh/config
```

**Example config**

_config_

```txt
# contents of $HOME/.ssh/config
Host github.com
   IdentityFile ~/.ssh/github.key
Host gitlab.com
   IdentityFile ~/.ssh/gitlab.key
```

Now when `ssh-keygen -t rsa` asks for a file specify the file associated with the domain or service

**Example key gen**

```shell
ssh-keygen -t ed25519 -C <github-email>
```

```
Generating public/private ed25519 key pair.
Enter file in which to save the key (/Users/lkuno/.ssh/id_ed25519): github.key
```

> 💡 note: if the file does not show up in `.ssh/` using the full path should correct

### Add Host to known Hosts

**ssh auth Error**

```shell
"The authenticity of host '216.128.129.16 (216.128.129.16)' can't be established.
ED25519 key fingerprint is SHA256:nnzspBxbguoVHYiPiPEL6smGCfyE2KRSMLmayeaH3Mw.
This key is not known by any other names"
Are you sure you want to continue connecting (yes/no/[fingerprint])? yes
```

```shell
ssh-keyscan -H <ip.address> >> ~/.ssh/known_hosts
```

### Add to Service

> 🔥 make sure to use the `.pub` extension as this is where our public key is stored

```shell
pbcopy < ~/.ssh/github.key.pub
```

Add this to the services we want to Authorize.

## Reference

[how to set up ssh for multiple services](https://nerderati.com/2011/03/17/simplify-your-life-with-an-ssh-config-file/)

[Generating new ssh key and adding it to ssh-agent - github](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)

### checks

\_test Github Auth\_\_

```sh
ssh -T git@github.com
``
```
