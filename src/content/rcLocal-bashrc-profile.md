---
layout: post
title: ".bashrc vs rc.local vs .profile - Usecases that you didn't know"
author: Tharun Shiv
tags: ['system-admin']
image: img/rclocal-diff.png
date: '2021-01-09T09:48:37.121Z'
draft: false
---

Did you know that you can automate scripts using ~/.bashrc /etc/rc.local ~/.profile. But the three are not the same.

In this Article (Click to skip to that topic):

- [Overall difference](#one)
- [/etc/rc.local](#two)
- [~/.bashrc ](#three)
- [~/.profile or ~/.bash_profile or ~/bash_login](#four)
- [ Are they the same? When do I use what? ](#five)

<h3 id='one'> Overall difference </h3>

The difference is in **who** they are run as and **when** they are run as. The rc.local is run during the change of run level and it runs as a privileged root user, whereas the bashrc is a bash specific file and runs when an interactive shell that is non-login shell is opened as a particular user.

<h3 id='two'> /etc/rc.local </h3>

> The script /etc/rc.local is for use by the system administrator. It is traditionally executed after all the normal system services are started, at the end of the process of switching to a multiuser runlevel. You might use it to start a custom service, for example a server that's installed in /usr/local. Most installations don't need /etc/rc.local, it's provided for the minority of cases where it's needed.

*What is a **run level**? You may ask. Article on it coming soon.*

Some use cases of the file would be:

1. To run a set of commands on boot everytime
2. To start custom services manually, that aren't started automatically on boot
3. To log boot details to a file
4. To take backup of any files on boot
5. To run any scripts that are necessary

<h3 id='three'> ~/.bashrc </h3>

> When an interactive shell that is not a login shell is started, bash reads and executes commands from ~/.bashrc, it is bash specific, if that file exists. This may be inhibited by using the --norc option. The --rcfile file option will force bash to read and execute commands from file instead of ~/.bashrc. - *from MAN pages*

Some use cases of the file would be:

1. Print the server stats like memory, free disk
2. Customize the bash terminal ( like the colors )
3. Show any new emails to the user
4. Display a custom greeting or motd
5. Show the running/suspended jobs
6. Set aliases like `alias rm='rm -i'`

For more examples on this, please refer to: https://tldp.org/LDP/abs/html/sample-bashrc.html

<h3 id='four'> ~/.profile or ~/.bash_profile or ~/bash_login </h3>

> This is when the user logs in. This is most appropriate if the user wants to change his personal Linux environment.

Some use cases of the file would be:

1. Customize the PATH variable
2. Set the custom path to Global Variables or applications
3. Other use cases from the above two files can also be achieved here

<h3 id='five'> Are they the same? When do I use what? </h3>

Good Question. In short, if you want to automate something

i. When the system boots: `/etc/rc.local`
ii. When a user logs in: `~/.profile`
iii. When the user starts a bash shell: `~/.bashrc`

Thank you fo reading, please feel free to checkout other articles.
https://www.tharunshiv.com

Check out my YouTube Channel here: <a href="https://www.youtube.com/c/developerTharun">Being a Pro - YouTube</a> Thank you for reading!\*\*

        Now you can subscribe to my blog to get the latest posts delivered directly to your inbox.

        Just enter your email below and confirm to subscribe!
        Get a FREE Ebook from me very soon!

> Follow my articles on Dev.to: https://dev.to/developertharun
