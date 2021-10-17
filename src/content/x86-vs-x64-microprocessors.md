---
layout: post
title: 'x86 vs x64 systems for roadrunners'
author: Tharun Shiv
tags: ['system-admin']
image: img/processor.png
date: '2021-10-17T13:17:37.121Z'
draft: false
---

## x86 Systems

x86 is a generic name that is used to refer to all Intel processors that were released after the original 8086 or 8088 variant of Intel processors. The variants like 80286, 80386, 80486 so on.. were named using the convention x86, where the 80 is implicit, and x can be replaced with a number conveniently. These are backward compatible systems.

> 8086 or 8088 are the various names that are used to Identify the microprocessors of Intel that were released in the 1970s.

### Registers used in the early x86 systems

> A Register is a tiny memory holding electronic device that is used by the processor to either store instructions, data or address. These are fundamental units that are used when executing a computer instruction to perform a task.

x86 systems ranged from 8-bit, 16-bit and then 32bit. What do these bits refer to? They are the highest number of bits in a single register that exists in the system.

### Maximum memory limit

When we say 32-bit, the number will contain 32 digits with each of them being either 0 or 1. The number system used here is Binary System ( power 2 ). Hence, the maximum possible value here will be 2³², which is 42,94,967,295. These are the maximum number of memory locations that a 32-bit register can access. We can only attach that memory device which the register can completely make use of.

Thus, a 32-bit register can cater a maximum of 4GB of RAM. This is because, if each memory location that the register points to can hold 1 byte of data, then 42,94,967,295 bytes = 4.29 G. Although this is theoretical, the actual RAM that can be used will be less than around 3.5G, because of certain parts of the register being used to store other types of data.

## x64 Systems

For the systems that evolved to use 64-bit registers, they initially named it x86–64, but since this sounds longer, the naming was changed to x64 systems. x64 is a generic name that is used to refer to all Intel processors that are 64-bit processors.

The x64 systems as mentioned above contains registers that are even capable of storing 64bits in a single register.
Theoretical Maximum memory limit

When we say 64-bit, the number will contain 64 digits with each of them being either 0 or 1. The number system used here will be Binary system just like the 32-bit family. Hence, the maximum possible value here will be 2⁶⁴.

Thus each 64-bit register can cater a maximum of around 18 Quintillion bytes of memory. ( One Quintillion is 10¹⁸ ). Therefore it will be able to handle the usual RAM that we come across everyday effortlessly, including enterprise production servers.

### Processing power of x64 systems

x64 systems come with configurations like dual core, quad core, octa core and so on, which depicts the number of processors that work simultaneously in an integrated circuit. This enables the Operating system to perform tasks parallely. While dual-core has two cores than one single core, every task that it does need not be twice as fast as a single core machine. This is because, even the operating systems and programs that is using the processors should be able to perform parallely using multi processors.

## Current generation

Currently the popular architecture is to use the 64-bit system.

_Roadrunners is a series that is aimed at delivering concepts as precise as possible. Here, a roadrunner is referred to a person who does things super fast & efficient. Are you a roadrunner?_

Thank you
https://www.tharunshiv.com

Check out my YouTube Channel here: <a href="https://www.youtube.com/c/developerTharun">Being a Pro - YouTube</a> Thank you for reading!\*\*

> Follow my articles on Dev.to: https://dev.to/developertharun
