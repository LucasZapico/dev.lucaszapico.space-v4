---
title: "Solution for setting up HombeBrew with multiple users macOS"
description: "Solution for setting up for multiple users on macOS"
date-created: "2022/09/19"
last-modified: "2022/09/19"
isdraft: false
categories: ["solution", "env"]
tags: ["solution", "brew"]
type: "article"
---

> 💡 The HomeBrew community has added a solution prompt after the user permission error which make this artilce redundent but will be left as personal reference.

This article walks through a solution to leverage HomeBrew on macOS with multiple user accounts. A common use case for this is if you have a "work" and a "personal" user profile. ~The challenge arises when installing a brew package from the secondary user (the user we didn't install brew initially from). We run into the following error or something similar.~

```sh
Error: Command failed with exit 128: git
Error: The following directories are not writable by your user:
/usr/local/lib/pkgconfig
/usr/local/share/aclocal
/usr/local/share/man/man3
/usr/local/share/man/man7
/usr/local/share/zsh
/usr/local/share/zsh/site-functions
```

## Solution One (Brew cli solution)

```sh
 sudo chown -R $(whoami) /usr/local/lib/pkgconfig /usr/local/share/aclocal /usr/local/share/man/man3 /usr/local/share/man/man7 /usr/local/share/zsh /usr/local/share/zsh/site-functions
```

```sh
 chmod u+w /usr/local/lib/pkgconfig /usr/local/share/aclocal /usr/local/share/man/man3 /usr/local/share/man/man7 /usr/local/share/zsh /usr/local/share/zsh/site-functions
```

## Solution Two

**Reference**

[Alternative install - Homebrew docs](https://docs.brew.sh/Installation#alternative-installs)

If for one reason or another solution one is not effective an alternative is to install homebrew at each user root rather then the system root. The downside to this solution is that the packages will have to be installed individually on in each each user.

```sh
mkdir homebrew && curl -L https://github.com/Homebrew/brew/tarball/master | tar xz --strip 1 -C homebrew
```

```sh
git clone https://github.com/Homebrew/brew homebrew
```

## Premission Fixes

**Error example**

```sh
 Permission denied @ rb_sysopen - /usr/local/var/homebrew/locks/icu4c.formula.lock
```

```sh
sudo chown -R "$USER":admin /usr/local
```

```sh
sudo chown -R "$USER":admin /Library/Caches/Homebrew
```

## References

[HomeBrew docs](https://docs.brew.sh)
[Homebrew (un)install - github.com](https://github.com/Homebrew/install)
