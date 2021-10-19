---
layout: post
title: 'Server virtualization for roadrunners | Hypervisor'
author: Tharun Shiv
tags: ['system-admin']
image: img/virtualization.png
date: '2021-10-19T13:17:37.121Z'
draft: false
---

## Listen to the episode

<small>Open on Spotify to listen to the complete episode</small>

<iframe src="https://open.spotify.com/embed/episode/60cYMUjKPby1LaN0LgDicB" width="100%" height="232" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>

## A Yummy Analogy

Imagine you have ordered your favorite pizza of large size. You see, the pizza is divided into 8 slices. Assuming you are kind enough to share the pizza with 3 of your friends, each of you gets 2 slices each. Now let’s observe the following:

1. Cost savings: You can buy one whole pizza, and share it among 4 people
2. Isolation: What you do with your slice of pizza has no effect whatsoever on your friend’s slice.
3. Efficient pizza sharing: If one of your friends wants to eat 3 slices, and another one just wants one, it can be done.

Compare it with buying a large pizza that you are not able to eat all by yourself and 5 pieces of it going to waste, or a plate of dessert that you have to share with your friends where anyone can eat as much as they want according to their speeds ( which is unfair 😜 ). In these two scenarios, we see that there is no cost savings, no isolation.

## Introducing Virtualization

I know the article made you hungry, let’s get back to the topic.

You need to know two basic things:

1. Host machine: Imagine a huge machine on which multiple other smaller machines will be created
2. Guest machine: The multiple smaller machines that are created on top of the huge machine, that uses the resources provided by the huge machine is a guest machine.

Virtualization creates a software representation of the underlying hardware resources on a host and shares it among the virtual machines that are created on top of it. Each virtual machine has its own operating system and applications, thereby being able to utilize the resources of a host machine by its guest machines in an isolated manner.

> A virtual machine ( VM ) is an isolated guest machine that has it’s own operating system and applications. Each VM is completely independent of other VMs running on the same host machine.

If you remember our x86 vs x64 architecture systems blog post, the x86 systems are not capable of running more than one operating system or application at a time. The concept of multi-processing came up only with the x64 systems introducing the dual-core, quad-core so on. Because of this reason, the earlier datacenters which were based on x86 systems had to increase the number of servers, whereas the server utilization remained underutilized.

Today, this is not the scenario. Virtualization has gone beyond just server virtualization and has reached network virtualization, disk virtualization, and so on. But how is this possible?

## Hypervisor — The hero of our story

The concept of Virtual Machines is made possible only because of the thin layer of software known as the Hypervisor, which is installed on the host machine. The hypervisor enables the virtualization of resources and isolation between the Virtual machines that are created on the same host. This enables efficient and transparent utilization of data center resources.

### Types of Hypervisors:

1. Type one hypervisors ( Bare-metal hypervisors )
2. Type two hypervisors ( Hosted hypervisors )

### Type one hypervisors

![type one hypervisor](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/m399qk95pzjbdy1m26tu.png)

Type 1 hypervisors as depicted above lay directly above the physical server and host the virtual machines on top of them. They are also known as bare-metal hypervisors. It has shown far better performance than type two hypervisors.

Dynamic resource allocation in Type 1 hypervisor allows VMs to consume resources only as much as they need to be fully functional, even if you allocate more than that. For example, if you allocate 32GB of RAM to a VM, it will not reserve all 32GB of RAM to the VM, but only that resource which it needs to fully function. ( This is not the case with Type 2 hypervisors ).

Example: The open-source KVM ( Kernel-based Virtual Machine )

### Type two hypervisors

![Type two hypervisors](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/91p1qeopnihohi3l8rw8.png)

Type 2 hypervisors as depicted above have an operating system on top of the physical server layer, over which a type two hypervisor is installed. So, there is a host operating system ( a software layer ) that comes in between the physical server and the type two hypervisor.

There is no dynamic resource allocation facility available in type two hypervisors. For example, if you allocate 32GB of RAM to a VM running on a type two hypervisor, it will reserve all 32GB of RAM, even though the VM could be using only a fraction of it, unlike type one hypervisors.

Example: Oracle VM VirtualBox

## Benefits of using a hypervisor/virtualization

As we already saw the benefits of sharing a pizza, we can conclude the below benefits:

1. Cost benefits: There will be huge savings when we allocate just the resources that a VM needs, instead of over-provisioning anywhere, thereby leading to a reduction in the number of servers that are needed and more efficient use of data center.
2. Efficient resource utilization: When the resources are shared transparently with the guest VMs, each and every GB of resource can be planned and utilized efficiently, and very few resources will go non-utilized.
3. Easier management: With the tools that the hypervisors provide, it becomes easy to manage the VMs, migrate the VMs, have failover for VMs, dynamically allocate resources to the VM, and more with lesser effort.
4. Isolation between VMs: Even though the VMs are hosted on the same host, the applications running on one VM cannot affect any other VM running on the same host even if one of the VMs crashes.

You can find more articles here: https://www.tharunshiv.com

Roadrunners is a series that is aimed at delivering concepts as precisely as possible. Here, a roadrunner is referred to as a person who does things super fast & efficiently. Are you a roadrunner?

Thank you

Thank you
https://www.tharunshiv.com

Check out my YouTube Channel here: <a href="https://www.youtube.com/c/developerTharun">Being a Pro - YouTube</a> Thank you for reading!\*\*

> Follow my articles on Dev.to: https://dev.to/developertharun
