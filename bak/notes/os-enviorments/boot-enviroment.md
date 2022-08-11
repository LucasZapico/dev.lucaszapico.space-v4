---
title: Booting Os's
description: Reference notes on window
date-created: '2021/03/15 14:19:17'
last-modified: '2022/07/17'
isdraft: false
categories: ['window', 'notes']
tags: ['windows', 'notes', 'iso', 'provisioning']
type: 'note'
---

## Set up USB drive with single ISO

The [ubuntu walk](https://ubuntu.com/tutorials/create-a-usb-stick-on-macos) through work for most Linux derivatives.

> The process uses Etcher which does not support writing to a partition of a given drive

## Set up USB drive with multiple ISO's

1. partition the drive
2. unmount the partition we wish to write to
3.

The most direct solution to this is to use the terminal.

### Example

Assumes disk is partitioned, formatted and ISO's are downloaded.

1. identity target disk identifier: `diskutil list`
2. unmount target: `diskutil unmount disk3s8`
3. flash or burn iso to partition

```shell
 sudo dd if=<path-to-iso>/ubuntu-21.04-desktop-amd64.iso of=/dev/rdisk3s9 bs=4m
```

> There is no progress bar so just wait it out, how long the ISO copy process takes depends on a variety of things, including the speed of the Mac, the speed of the target volume, and the size of the ISO file being copied or burned to the destination.

## Partition usb

A usb drive can be partition from diskutility

> navigate to view and "show all devices"

### Command Reference

#### `diskutil list`

#### unmount disk

`sudo umount /dev/<identifier>`

or

`diskutil unmount /dev/<identifier>`

`diskutil unmount /dev/disk3s9`

or

`diskutil unmountDisk /dev/disk3`

<<<<<<< HEAD:bak/notes/os-enviorments/boot-enviroment.md
<<<<<<< HEAD:bak/notes/os-enviorments/boot-enviroment.md

## Reference

=======

=======
>>>>>>> fd21fd6232681710c98ae70d534cb1106ed2c16c:src/content/notes/os-enviorments/boot-enviroment.md
## Other

1. keymap escape to caplock `setxkbmap -option caps:swapescape`
2. [keys to macos](https://github.com/petrstepanov/gnome-macos-remap)

- sudo apt-get install gnome-tweak-tool -y && gnome-tweak-tool

## Reference

<<<<<<< HEAD:bak/notes/os-enviorments/boot-enviroment.md
> > > > > > > 17d7e9df15633500cbf6996ad5dedd40c6e09354:src/content/notes/os-enviorments/boot-enviroment.md

=======
>>>>>>> fd21fd6232681710c98ae70d534cb1106ed2c16c:src/content/notes/os-enviorments/boot-enviroment.md
#### Articles

[Copy ISO to USB Mac os command line](https://osxdaily.com/2015/06/05/copy-iso-to-usb-drive-mac-os-x-command/)

[Balena - Recover USB drive](https://www.balena.io/blog/did-etcher-break-my-usb-sd-card/)

[How to make dd command verbose](https://askubuntu.com/questions/363842/how-to-make-the-dd-command-be-verbose)

[balena Etcher](https://www.balena.io/etcher/)

Flash OS images to SD cards & USB drives, safely and easily.

[Ventoy](https://www.ventoy.net/)

A New Bootable USB Solution

[Multiboot options](https://www.linuxbabe.com/apps/create-multiboot-usb-linux-windows-iso)
