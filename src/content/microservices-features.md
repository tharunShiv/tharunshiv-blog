---
layout: post
title: 'Microservices Architecture for Roadrunners | 6 key benefits'
author: Tharun Shiv
tags: ['system-admin']
image: img/microservices.png
date: '2021-10-24T14:17:37.121Z'
draft: false
---

## Freaky Analogy

Imagine a feature in your application that records the number of times a user has visited a page. Suppose there is a bug in the code that does this, and if you have put all of the code that you need to render the application in a single code base, then chances are your entire application will go down, and you will face downtime just because of a bug in a small part of the code. 🤯
Now, imagine an alternate scenario, where the code that is responsible to record the number of times the user has visited a page is isolated from the entire application, and any bug or downtime in it will in no ways affect the functionality of the application as a whole apart from just this feature not working. Introducing microservices architecture.

## Microservices architecture

Microservices architecture is a technique where you have multiple tiny applications that function together towards serving an entire application in such a way that each of the smaller applications can be worked on independently and doesn't have major impact on other smaller applications that form the entire application.

![Monolithic vs microservices architecture illustration](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/uk3dvyepbdqa1j8svtzd.png)

If you observe the above illustration,

The monolithic architecture has all 4 components of the social media application together, and needs all 4 to function properly in order for the application as a whole to serve traffic. Here, all 4 services are tightly coupled with each other. Even if one of the service is malfunctioning, then it might affect the application as a whole.

The microservices architecture has individual services functioning in a loosely coupled manner. The social media application would be further divided into smaller applications for any depth. This means, the authentication app in the above diagram could be further divided into several smaller applications. These applications can have their individual teams who work on them independently and the applications would have interfaces through which they communicate with each other. It would be possible to allocate resources on a granular level to only those applications that need it. If one of the smaller application, say the Ads app goes down either for maintenance or due to a bug, even then rest of the application should function as usual besides the issue with displaying the Ads on the application.

## Features of Microservices architecture:

1. **Loosely coupled micro applications**
   The application that follows microservices architecture will consist of multiple smaller applications that are loosely coupled with each other. They are least dependent on each other.

2. **Easily maintainable and testable**
   Since the applications would be isolated, individual teams will be able to work on it in parallel, have down times when needed without affecting other micro applications, will be able to test micro applications individually.

3. **Independently deployable, scalable & cost-saving**
   The individual teams will be able to deploy the micro services individually, rollback or fix bugs when necessary and redeploy when needed without worrying about the rest of the applications. The resource allocation can be defined on a granular level for each and every micro service as and when needed, and there will be minimal over provisioning, thereby saving costs for huge enterprises.

4. **Fresher friendly**
   The new joinees to the project will be able to pick up the responsibilities quicker, no matter what the size of the entire application is, because of the microservice architecture. The stakeholder only needs to pick up the knowledge pertaining to the micro services that his team handles, and the interfaces it uses, and need not look at the application as a whole at once. This significantly reduces the time needed to on-board an employee.

5. **Better fault isolation & monitoring**
   Individual teams will be able to monitor their respective microservices. They will be able to monitor, identify and isolate the issues effectively. As discussed earlier, this also prevents cascading effect of issues.

6. **No technical dependency**
   The microservices do not have any dependency in the technologies used in building or maintaining the applications. They are free to use their own technologies and communicate using an interface like REST APIs. This dissolves all technical dependencies across teams.

7. **Better data security & compliance**
   Each microservices or smaller application groups can have their own data stores, and can prevent other parts of application from accessing it. This ensures enhanced security. This is also extended to isolation between teams, in such a way that, only the team that manages the microservice is given access to it, even within the same organization.

Most of the next-gen organizations today function based on a microservices architecture, that helps them to delegate, secure, be resilient, deliver performant applications and reduce costs.

You can find more articles here: https://www.tharunshiv.com

_Roadrunners is a series that is aimed at delivering concepts as precisely as possible. Here, a roadrunner is referred to as a person who does things super fast & efficiently. Are you a roadrunner?_

Thank you

https://www.tharunshiv.com

Check out my YouTube Channel here: <a href="https://www.youtube.com/c/developerTharun">Being a Pro - YouTube</a> Thank you for reading!\*\*

> Follow my articles on Dev.to: https://dev.to/developertharun
