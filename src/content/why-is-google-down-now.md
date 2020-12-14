---
layout: post
title: 'Google Down worldwide | Why is Google Down?'
author: Tharun Shiv
tags: ['tech']
image: img/google-down.png
date: '2020-14-12T13:48:37.121Z'
draft: false
---

### What are people seeing?

We can observe that Google went down for a very long time on December 14th evening time. On this occasion, tweeters have taken it to twitter and we can see many people tweet about it. Companies also observed that many of their internal services, including the services and dashboards on production. There are several companies who use Google's popular GSuite for all of their employees, we can also see such companies affected by this outage.

So it is not only a Google Outage, but unofficially an IT Network disruption.

### The services impacted

Gmail, Google Calendar, Google Drive, Google Docs, Google Sheets, Google Slides , Google Sites , Google Groups , Google Hangouts , Google Chat , Google Meet , Google Vault , YouTube, Currents , Google Forms, Google Cloud Search , Google Keep , Google Tasks , Google Voice, Google Analytics , App Maker , Google Maps , Blogger , Google Sync for Mobile , Classroom, Admin console

We mostly noticed that the Login service was the most affected. People were not able to login into any of the Google Auth based services.

You can see the status of these at: https://www.google.com/appsstatus#hl=en-GB&v=status

There are several third party websites too, which show the status of websites like the DownDetector. We can observe that as soon as Google Services went down, people started reporting the same on these websites and on Twitter.

Infact, we can also note that the meme creators, companies started creating memes and marketing lines on this and rolled out content on it.

### What could have caused the outage?

It is definitely not easy to keep software up and running, there are a lot of highly skilled people who go into maintaining such software. When it comes to the global scale of Google, it takes a lot to keep it up and running 24x7. While the Google Engineers and Site-Reliability Engineers are already doing an amazing job in keepng Google up and running almost all time of the year, somethings like this is prone to happen to anyone, and Google isn't an exception.

There could have been several reasons why this could have happened.

1. Any core component of the Google Service that doesn't have a fail-over ( which means, a backup component that can serve if this component is down ) could have gone down.
2. There could have been a cascading effect of one component going down, on the other component. Any core services could have caused other related services to go down.
3. There could have been Network Outages that can lead to this. Third party network providers for the datacenters could have faced outages, which could have resulted in the whole data-center being out of connectivity for sometime, until they move to a backup network. But this in unlikely for a global outage.
4. Unfortunately, there could also have been a huge cyber attack, hoping there wasn't one.
5. There could have been data-corruption or database corruption that could have lead to this staggering.
6. Bad code pushes usually would not lead to whole Google going down, but we can still consider this one as the last option.

Thank you
https://www.tharunshiv.com

Check out my YouTube Channel here: <a href="https://www.youtube.com/c/developerTharun">Being a Pro - YouTube</a> Thank you for reading!\*\*

        Now you can subscribe to my blog to get the latest posts delivered directly to your inbox.

        Just enter your email below and confirm to subscribe!
        Get a FREE Ebook from me very soon!

> Follow my articles on Dev.to: https://dev.to/developertharun
