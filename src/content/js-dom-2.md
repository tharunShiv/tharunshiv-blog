---
layout: post
title: 'JavaScript DOM - Part 2 - The Document and Window Object [video + article]'
author: Tharun Shiv
tags: ['web development']
image: img/24.png
date: '2020-05-19T23:46:37.121Z'
draft: false
---

> This is going to be a multi part Video + article tutorial series on JavaScript DOM. You're reading Part 2

**Read Part 1 here: https://www.tharunshiv.com/js-dom-1**

**Part 2 - Video**

<iframe width="560" height="315" src="https://www.youtube.com/embed/0VKqXwgqpf8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## The Window Object

This is a Global object, which has several objects, attributes and functions within it. It can be described as an object with a lot of meta data and data about your webpage. It also contains the Document Object which is popularly used.

## The Document Object

The Document Object is another global object which contains the attributes, objects, and functions of the website but of course lesser information than the window object as it is a subset of it.
You can access the complete information and elements of the DOM from this document object. To be precise, you can access each and every element of the page with a lot of functionality attached to it like methods, attributes, values, etc.,

```javascript
// code

console.log(document.domain);

console.log(document.URL);

console.log(document.title);

console.log(document.all);

console.log(document.all[0]);
```

```javascript
// respective output

tharunshiv.com

https://tharunshiv.com

Tharun Shiv - A blog to quench programming thirst

HTMLAllCollection(311) [html, head, meta, ...
...
...
...]

<html lang="en" data-react-helmet="lang">
  <head>...</head>
  <body>...</body>
</html>

```

You can access and do a lot more magic with the Document Object. We will explore and do stuff in this series. All you have to know now is that there is **The Window Object** and there is a **Document Object**. You can access any element in the website using the Document Object. There are ways in which you can grab the necessary element that you want to, which we will be learning from the next video onwards.

**Read the next part here: https://www.tharunshiv.com/js-dom-3**

Thank you for reading 😊

> Follow my articles on Dev.to: https://dev.to/tharunshiv

Written by,
Tharun Shiv
