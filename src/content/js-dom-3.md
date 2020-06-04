---
layout: post
title: 'JavaScript DOM - Part 3 - Get Element By ID [video + article]'
author: Tharun Shiv
tags: ['web development']
image: img/25.png
date: '2020-05-20T23:46:37.121Z'
draft: false
---

> This is going to be a multi part Video + article tutorial series on JavaScript DOM. You're reading Part 3

**Read Part 2 here: https://www.tharunshiv.com/js-dom-2**

**Part 3 - Video**

<iframe width="560" height="315" src="https://www.youtube.com/embed/G67f2oMDz6I" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## In the video

We will be using a project Stick-It Notes to learn the DOM commands in this course. We will also be learning how to build this website step by step after a while in this series.

**Project website:** http://bit.ly/stick-it-notes
**Project Code:** https://github.com/tharunShiv/stick-it-notes

## Difference between a class and an id

The same class can be used more than once for several elements, but a unique ID can be used only for one element. So when we are grabbing an element using ID, we will get only one element in return.

**Syntax:**

```javascript
document.getElementById('id-of-the-element');
```

**Example:**

```html
<p id="ts">The para to pick</p>
```

```javascript
let paragraphElement = document.getElementById('ts');
```

## What's the point in grabbing the element?

1. You can get to know the values or the content in the element [ coming up in the next article... ]

2. You can style the element

**Example:**

```javascript
let paragraphElement = document.getElementById('ts');
paragraphElement.style.color = 'yellow';
```

You can change the color, the font size, background color, pretty much any CSS Style that you would apply normally. Note: we don't use hyphens here '-' as a separator between styles like background-color, font-size, font-family, etc., Instead, you've to remove the hyphen and capitalize the first word after it.

**Example:**

```javascript
let paragraphElement = document.getElementById('ts');
paragraphElement.style.backgroundColor = 'red';
paragraphElement.style.fontSize = '0.9rem';
```

You can access and do a lot more magic by grabbing the elements. We will explore and do stuff in this series. All you have to know now is that there is _getElementById_ grabs only one element. And once you get that element, store it in a variable and use it for the purpose.

Next Part, where we discuss about what TextContent, innerText and innerHTML are and the differences between them.
https://tharunshiv.com/js-dom-4

Thank you for reading 😊
**Considering Subscribing to my YouTube Channel if you like the Video content: https://youtube.com/c/developerTharun**

> Follow my articles on Dev.to: https://dev.to/tharunshiv

Written by,
Tharun Shiv
