---
title: ssh Catch
description:
date-created: 2022-02-11
<<<<<<< HEAD
last-modified: 2022-02-11
=======
last-modified: '2022/07/18'
>>>>>>> fd21fd6232681710c98ae70d534cb1106ed2c16c
categories: [git, reference]
tags: [github, gitlab, bitbucket, version-control, notes]
isdraft: false
type: note
---

<<<<<<< HEAD
# ssh Catch
=======
- [ssh Catch](#ssh-catch)
  - [ssh Reference](#ssh-reference)
  - [Set-Up](#set-up)
    - [Single Service](#single-service)
    - [Setting Up Unique SSH for Multiple Services](#setting-up-unique-ssh-for-multiple-services)
    - [Add Host to known Hosts](#add-host-to-known-hosts)
    - [Add to Service](#add-to-service)
  - [Testing and Troubleshooting Connections](#testing-and-troubleshooting-connections)
  - [Use with Github, BitBucket, Gitlab etc](#use-with-github-bitbucket-gitlab-etc)
    - [Cloning a new project](#cloning-a-new-project)
    - [Updating and existing repo](#updating-and-existing-repo)
  - [Reference](#reference)

# ssh Catch

## ssh Reference

ssh into remote server

```shell
ssh <remote-username>@<remote_domain/ip>
```

**Examples**

```shell
ssh root@216.125.129.17
```
>>>>>>> fd21fd6232681710c98ae70d534cb1106ed2c16c

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
Enter file in which to save the key (/Users/<foo>/.ssh/id_ed25519): github.key
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

<<<<<<< HEAD
> 💡 note: if the file does not show up in `.ssh/` using the full path should correct
=======
```shell
ssh-keyscan -H <ip.address> >> ~/.ssh/known_hosts
```
>>>>>>> fd21fd6232681710c98ae70d534cb1106ed2c16c

### Add to Service

> 🔥 make sure to use the `.pub` extension as this is where our public key is stored

```shell
pbcopy < ~/.ssh/github.key.pub
```

Add this to the services we want to Authorize.
<<<<<<< HEAD
=======

## Testing and Troubleshooting Connections

Test ssh connection

```shell
ssh -T git@github.com
```

```shell
ssh -T git@github.com
```

Verbose tst

```shell
ssh -Tv git@github.com
```

We can also test a specific host from out `~/.ssh/config`

## Use with Github, BitBucket, Gitlab etc

### Cloning a new project

Clone repos with the host name declared in ssh config 👇

```
git clone git@work:username/my-work-project.git
git clone git@personal:username/my-personal-project.git
```

For reference this is the default behavior

```
git clone git@bitbucket.org:username/my-work-project.git
git clone git@bitbucket.org:username/my-personal-project.git
```

### Updating and existing repo

To update and existing repo to push to a specific github account/profile. Navigate to the project `.git/config` and add the `Host` from `.ssh/config` as the host in the ssh url.

**Example**

_.git/config_

```txt
...
[remote "origin"]
   url = git@work-profile:username/work-project-two.git

...
```
>>>>>>> fd21fd6232681710c98ae70d534cb1106ed2c16c

## Reference

[how to set up ssh for multiple services](https://nerderati.com/2011/03/17/simplify-your-life-with-an-ssh-config-file/)

[Generating new ssh key and adding it to ssh-agent - github](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)
