---
layout: post
title: 'Google Down worldwide | Why is Google Down?'
author: Tharun Shiv
tags: ['tech']
image: img/google-down.png
date: '2020-12-14T18:48:37.121Z'
draft: false
---

In this Article (Click to skip to that topic):

- [What are people seeing? ](#one)
- [The services impacted](#two)
- [What could have caused the outage?](#three)
- [What do we observe as a User?](#four)
- [Memes on #GoogleDown](#five)

<h3 id='one'> What are people seeing? </h3>

We can observe that Google went down for a very long time on December 14th evening time. On this occasion, tweeters have taken it to twitter and we can see many people tweet about it. Companies also observed that many of their internal services, including the services and dashboards on production. There are several companies who use Google's popular GSuite for all of their employees, we can also see such companies affected by this outage.

So it is not only a Google Outage, but unofficially an IT Network disruption.

<h3 id='two'> The services impacted </h3>

Gmail, Google Calendar, Google Drive, Google Docs, Google Sheets, Google Slides , Google Sites , Google Groups , Google Hangouts , Google Chat , Google Meet , Google Vault , YouTube, Currents , Google Forms, Google Cloud Search , Google Keep , Google Tasks , Google Voice, Google Analytics , App Maker , Google Maps , Blogger , Google Sync for Mobile , Classroom, Admin console

We mostly noticed that the Login service was the most affected. People were not able to login into any of the Google Auth based services.

You can see the status of these at: https://www.google.com/appsstatus#hl=en-GB&v=status

There are several third party websites too, which show the status of websites like the DownDetector. We can observe that as soon as Google Services went down, people started reporting the same on these websites and on Twitter.

Infact, we can also note that the meme creators, companies started creating memes and marketing lines on this and rolled out content on it. Companies like Swiggy, DuckDuckGo, 9gags started using this situation quickly via marketing.

<h3 id='three'> What could have caused the outage? </h3>

It is definitely not easy to keep software up and running, there are a lot of highly skilled people who go into maintaining such software. When it comes to the global scale of Google, it takes a lot to keep it up and running 24x7. While the Google Engineers and Site-Reliability Engineers are already doing an amazing job in keepng Google up and running almost all time of the year, somethings like this is prone to happen to anyone, and Google isn't an exception.

There could have been several reasons why this could have happened.

1. Any core component of the Google Service that doesn't have a fail-over ( which means, a backup component that can serve if this component is down ) could have gone down.
2. There could have been a cascading effect of one component going down, on the other component. Any core services could have caused other related services to go down.
3. There could have been Network Outages that can lead to this. Third party network providers for the datacenters could have faced outages, which could have resulted in the whole data-center being out of connectivity for sometime, until they move to a backup network. But this in unlikely for a global outage.
4. Unfortunately, there could also have been a huge cyber attack, hoping there wasn't one.
5. There could have been data-corruption or database corruption that could have lead to this staggering.
6. Bad code pushes usually would not lead to whole Google going down, but we can still consider this one as the last option.

Inspite of such a massive service going down, we can notice that services started to work within half an hour to one hour of the service being down. Kudos to every engineer and the Site Reliability Engineer who was behind bringing the services back up for the global usage. If this was brought up incorrectly or temporarily by not estimating the incoming traffic, then this would have caused a second outage due to the rush of traffic as more people would be trying to access Google.

<h3 id='four'> What do we observe as a User? </h3>

1. Things were working fine for a few moments if you were already logged in.
2. Everyone was facing issues with logging into their account.
3. Google.com which didn't need a login was working fine.
4. YouTube was working fine in incognito mode, but showed issues when your account was used.
5. We can also observe companies using Google OAuth Login face issues.

This boils us down to the problems related to **Google Login**. So the above mentioned problems could have affected just the Google Login service too, and this could have been a Single Point of failure for all the applications and services behind it. Google would definitely confirm this in a while.

Every outage, every failure teaches us more, and we should never fail to get up and rise higher. When Google can fail, it is okay for you as a developer to make mistakes, learn from them.

<h3 id='five'> Memes on Google Down</h3>

Meme creators are known for their wit and speed. So many of them are still coming up with a variety of hilarious memes on the same. And these can be found on Twitter and Facebook.

\#googleDown
\#itsOkayGoogle

_Will keep this post updated with the exact reason as to why Google went down, once Google publishes it officially_ Thank you for reading.

Thank you
https://www.tharunshiv.com

Check out my YouTube Channel here: <a href="https://www.youtube.com/c/developerTharun">Being a Pro - YouTube</a> Thank you for reading!\*\*

        Now you can subscribe to my blog to get the latest posts delivered directly to your inbox.

        Just enter your email below and confirm to subscribe!
        Get a FREE Ebook from me very soon!

> Follow my articles on Dev.to: https://dev.to/developertharun
