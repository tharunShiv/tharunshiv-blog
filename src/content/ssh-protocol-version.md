---
layout: post
title: 'Be safe with the SSH version you use — for Roadrunners'
author: Tharun Shiv
tags: ['system-admin']
image: img/ssh-proto.png
date: '2021-10-24T13:17:37.121Z'
draft: false
---

SSH ( Secure Shell ) is a program that is used to create a secure connection between two network enabled hosts. With this connection, the user will be able to get remote access to machines or transfer data between machines. Both these operations are critical from a security point of view, and even one slight vulnerability will cause a heavy damage.

## There are two major components involved in SSH:

1. SSH server: It is the component that will enable a machine to listen or be open to accept SSH connections from clients.
2. SSH client: It is the component that will allow a machine to connect to a remote server that is listening to incoming connections.

## Major versions of SSH

There are two major versions of SSH. SSH version 1 & SSH version 2.

SSH is secure, only because of the encryption that is involved. Now what is encryption? It is basically converting all the raw data that would be transmitted from Machine A to Machine B in a form that would be understandable only by those two machines.

The encryption involved in SSH version 1 is weak enough for a middleman to decrypt it, view the contents, and even modify it without both the parties knowing about it.

Thus, make sure to use SSH version 2 both on client side, as well as enforcing the same on the server side.

## Check SSH client version

```bash
> grep -irn "Protocol" /etc/ssh/sshd_config
2:Protocol 2
```

Make sure the protocol is 2. By default, if this field is missing, then the SSH client will try to connect to the server using SSH protocol 2, and will fallback to SSH protocol 1. Hence, if you want to be strictly secure, then we have to add Protocol 2 to the /etc/ssh/sshd_config file and restart the ssh client.

## Check the SSH server versions allowed

```bash
> grep -irn "Protocol" /etc/ssh/sshd_config
2:Protocol 2
```

The process is similar to SSH configuring the ssh client, but is more critical to configure on the server. We have to add Protocol 2 to the /etc/ssh/sshd_config file and restart the ssh client.

More articles on SSH coming up, but before moving ahead with them, I wanted to make sure you are aware of the SSH protocol versions.

You can find more articles here: https://www.tharunshiv.com

Roadrunners is a series that is aimed at delivering concepts as precisely as possible. Here, a roadrunner is referred to as a person who does things super fast & efficiently. Are you a roadrunner?

Thank you

Thank you
https://www.tharunshiv.com

Check out my YouTube Channel here: <a href="https://www.youtube.com/c/developerTharun">Being a Pro - YouTube</a> Thank you for reading!\*\*

> Follow my articles on Dev.to: https://dev.to/developertharun
