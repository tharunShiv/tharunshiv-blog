---
layout: post
title: 'Convert any website into a PWA in just 3 simple steps'
author: Tharun Shiv
tags: ['web development']
image: img/20.png
date: '2020-05-24T23:46:37.121Z'
draft: false
---

> This will be a do-as-you-read article, where I will provide you the base code and the code that you can use to try it along to build a basic PWA.

## PWA - Progressive Web Apps

PWA stands for **Progressive Web Apps.** PWA is a web app, which can be displayed in the form of a regular App on a phone ( platform-independent) and also works like a regular responsive website on the internet. It is like building a usual website, using the same technologies that you would use, but giving that extra functionalities and advantages of Progressive Web Apps. It is light, fast and secure.

## What goes into a Progressive Web App?

You can build your website mostly the way you would always, considering you have set up a responsive layout and works on majority of the browsers. It consists of Javascript mainly and uses Service Workers, in which the server of the PWA is saved in the user’s web browser, and from time to time new feeds are loaded into it. This is the main reason of the speed of a PWA. So these service workers takes care of features which we will be talking about below.

## Read more about the Advantages and Disadvantages of PWA here

https://tharunshiv.com/pwa-adv-disadv

## Convert any website\* into a PWA in just 3 simple steps

### Features of this PWA that we're building

1. Works responsively on deskop and mobile
2. Works Offline
3. Can be installed on desktop and mobile like an App
4. Extremely light weight

### 1. Build the basic website

The first step would require you to _build your simple website_ using the steps that you usually would. Websites are built using the basic building blocks such as the HTML, CSS, and JavaScript. There are a few things that you need to make sure:

1. When you deploy the website, make sure you serve through HTTPS ( running it locally is an exception )
2. Make sure you build a responsive site, that works responsively on both Mobile and desktop
   You're good to go when you have these setup.

To help you get started with the step one quickly, you can clone my sample github project: {% github tharunShiv/stick-it-notes no-readme %}

### 2. Create a Web App Manifest file

The Manifest file is a JSON file that has the metadata about your PWA like the name, short_name, start_url, the scope, the icons for the PWA, the Theme color, the background color, and how your PWA should display.

Create a `manifest.json` in the root folder of the project and fill in the JSON such as the below one.

```json
{
  "name": "Stick-it Notes by Tharun",
  "short_name": "Stick-it",
  "start_url": "index.html",
  "scope": "./",
  "icons": [
    {
      "src": "contract.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "contract.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ],
  "theme_color": "#ffd31d",
  "background_color": "#333",
  "display": "standalone"
}
```

In the `index.html`, add the link tag to link to the manifest.json file so that it knows that there is a manifest file to use.

```html
<link rel="manifest" href="manifest.json" />
```

If you noticed the contract.png, that is the _icon_ of the app. You can create your own by using any tool of your choice or check out a generator like https://realfavicongenerator.net which generates the tags and favicons that you need for your site.

Now your site is installable.

### 3. Adding Service Workers

A **service worker** is a JavaScript file that is completely asynchronous and runs on a separate thread, that takes care of intercepting network requests, caching or retrieving resources from the cache, and delivering push messages.

It works even when the website is not active, as this is necessary to _deliver the push notifications_. It also _cannot access the DOM directly_. It helps us enable the feature of _caching_, which helps _us run our web app offline_.
Now let's do this last step to create our PWA

Add this line of code to the existing JavaScript file or create a new one and link it. In this project we already have a linked JavaScript file, we will use this file to register our _Service Workers_.

_In the myscripts.js_

```javascript
if ('serviceWorker' in navigator) {
  // register service worker
  navigator.serviceWorker.register('service-worker.js');
}
```

Now time to automatically generate the service-worker.js file. We will be using a NPM package called **sw-precache**.

_In the command line/terminal_

```
$ npm install --global sw-precache
```

_Once it is installed, run the below command, make sure you are in the same path as your project root directory, and wait for the eye candy_

```
$ sw-precache
```

### Hurray!

Now your website is completely converted into a PWA and is ready to roll. You can now go to free hosting services such as Netlify and host your GitHub repository there and watch the fun.

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/2qx2a4vq1tifpun1wzgr.png)

You can notice the **Add Stick-it to Home screen** which will install your PWA to your phone.

> **Considering Subscribing to my YouTube Channel if you like the Video content: https://youtube.com/c/developerTharun**

> Follow my articles on Dev.to: https://dev.to/developertharun

**Read about 9 ways in which you can build like Facebook! Facebook's new Tech Stack revealed!
https://tharunshiv.com/new-tech-stack-facebook**
