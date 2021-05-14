---
layout: post
title: 'head | tail | How to follow logs in real time? | Linux'
author: Tharun Shiv
tags: ['system-admin']
image: img/head-tail.png
date: '2021-05-14T13:10:37.121Z'
draft: false
---

> Ever regretted opening a huge file? Don't worry. The head and tail commands can be used to look into either the beginning or the end of the file that you are interested. We will also see how you can use the tail command to follow the logs in real time without having to reopen the file or refresh anything.

_Contents of this article:_

- [head command](#one)
- [tail command](#two)

<h2 id="one">The head command</h2>

The head command is used to view the file from the first line of the file, that is from the beginning of the file. You can use the head command to view only a certain lines from the beginning.

1. Print the first N number of lines

To view the first N number of lines, pass the file name as an argument with -n option as shown below.

```bash
$ head -n 5 fruits.txt
apple
mango
lemon
banana
watermelon
```

Note: When you simply pass the file name as an argument to head, it prints out the first 10 lines of the file.

2. Print N number of lines by specifying N with –

You don’t even need to pass the -n option as an argument, simply specify the N number of lines followed by '-' as shown below.

```bash
$ head -4 fruits.txt
apple
mango
lemon
banana
```

3. Print all but not the last N lines

By placing ‘-‘ in front of the number with -n option, it prints all the lines of each file but not the last N lines as shown below,

```bash
$ head -n -3 fruits.txt
apple
mango
```

4. Print the N number of bytes

You can use the -c option to print the N number of bytes from the initial part of file.

```bash
$ head -c 5 fruits.txt
apple
```

Note : As like -n option, here also you can pass ‘-‘ in front of number to print all bytes but not the last N bytes.

5. Passing Output of Other command to Head Input

You may pass the output of other commands to the head command via pipe as shown below,

```bash
$ ls | head
bin
boot
cdrom
dev
etc
home
initrd.img
lib
lost+found
media
```

**Syntax and Options**

```bash
head [OPTIONS]… [FILE]…
Short Option 	Long Option 	Option Description
-c 	–bytes 	to print N bytes from each input file.
-n 	–lines 	to print N lines from each input file.
-q 	–silent, –quiet 	Prevent printing of header information that contains file name
-v 	–verbose 	to print header information always.
```

<h2 id="two">The tail command</h2>

The Tail command prints the last N number of lines from given input. By default, it prints last 10 lines of each given file.

1. Print the last N lines

To view the last N number of lines from file, just pass the file name with -n option as shown below.

```bash
$ tail -n 5 fruits.txt
apple
mango
lemon
banana
watermelon
```

Note: When you simply pass the filename, it prints out the last 10 lines of the file.

2. Print the appended lines as and when the file grows

You can use -f option to output the appended lines of file instantly as shown below,

```bash
$ tail -f /var/log/messages
```

Note: This is very useful to monitor the log files.

3. Terminate the tail command once PID dies

Using –pid with -f option, you can terminate the tail command when the specific process gets over or killed as shown below.

```bash
$ tail -f /tmp/debug.log --pid=2575
```

In the above tail gets terminated immediately when the pid 2575 vanishes.

4. Keep on trying to tail the file even if it is non-existent

Sometimes, the file intended to tail may not be available when you run the tail command and it may get created later or the files becomes inaccessible . By this time, you can use the –retry option to keep on trying to open the file as shown below.

```bash
$ tail -f /tmp/debug.log --retry
tail: warning: --retry is useful mainly when following by name
tail: cannot open `/tmp/log' for reading: No such file or directory
```

After giving the above warnings, it is trying to open the file.

**Syntax and Options**

```bash
tail [OPTIONS]… [FILE]…
Short Option Long Option Option Description
-c –bytes to print last N bytes from each input file
-f –follow to print appended data as and when the file grows
-n –lines to print last N lines from each input file
–pid with -f, to terminate after PID dies
-q –silent, –quiet to prevent printing of header information
–retry to keep retrying to open a file even when it is not exist or becomes inaccessible. Useful when it is used with -f
-s –sleep-interval to sleep for N seconds between iterations
-v –verbose to print header information always
```

Thank you
https://www.tharunshiv.com

Check out my YouTube Channel here: <a href="https://www.youtube.com/c/developerTharun">Being a Pro - YouTube</a> Thank you for reading!\*\*

        Now you can subscribe to my blog to get the latest posts delivered directly to your inbox.

        Just enter your email below and confirm to subscribe!
        Get a FREE Ebook from me very soon!

> Follow my articles on Dev.to: https://dev.to/developertharun
