---
title: "General Reference For Networking"
description: "General networking notes"
date-created: "2022/10/26"
last-modified: "2022/10/26"
isdraft: true
categories: ["network", "general", "reference"]
tags: ["network", "tools"]
type: "note"
---

- list ip's on LAN

```sh
arp -a
```

```sh
ifconfig
```

## `ip` utility reference

Get a `ip` linux utility wrapped for MacOS

```sh
brew install iproute2mac
```

### `ip` Cheatsheet

- List all addresses `ip addr`
- List IPv4 addresses `ip route`
- List IPv6 addresses `ip -6 route`

#### List IPv4 addresses

```sh
ip route
```

```sh
default via 192.168.0.1 dev en1
127.0.0.1/32 via 127.0.0.1 dev lo0
169.254.0.0/19 dev en1  scope link
192.168.0.0/23 dev en1  scope link
192.168.0.1/31 dev en1  scope link
224.0.0.0/4 dev en1  scope link
255.255.255.255/32 dev en1  scope link
```

## Reference

[Linux Ip command alternative for mac](https://superuser.com/questions/687310/ip-command-in-mac-os-x-terminal)

[iproute2mac - github](https://github.com/brona/iproute2mac)

[cli bases linux tools - itsubuntu.com](https://itsubuntu.com/cli-based-linux-network-management-tools/)

[linux networking commands](https://geekflare.com/linux-networking-commands/)
