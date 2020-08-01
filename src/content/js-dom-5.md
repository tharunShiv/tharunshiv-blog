---
layout: post
title: 'JavaScript DOM - Part 5 - Get Elements By ClassName [video + article]'
author: Tharun Shiv
tags: ['web development']
image: img/27.png
date: '2020-05-22T23:46:37.121Z'
draft: false
---

> This is going to be a multi-part Video + article tutorial series on JavaScript DOM. You're reading Part 5

**Read Part 4 here: https://www.tharunshiv.com/js-dom-4**

**Part 5 - Video**

<iframe width="560" height="315" src="https://www.youtube.com/embed/_yDvHb2Z3kE " frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

> **Considering Subscribing to my YouTube Channel if you like the Video content: https://youtube.com/c/developerTharun**

## Several Elements with the same Class Name

The same class can be used by several elements. We can grab all of these elements having a particular class name. Example use cases may be like, grabbing all the buttons of the page having the same class name, grabbing all the images with the same class name, or any element for that matter.

## Get elements by class name

When we use `document.getElementsByClassName('class-name')`, it grabs all the elements that have the same class name and returns us an HTML Collection that we can index or iterate to get the elements that we need in particular. A HTML Collection is similar to an Array that we're used to, so you can index it or get the length of it.

_syntax:_

```javascript
document.getElementsByClassName('classname');
```

_example:_
_HTML_

```html
<p class="experiment">Hey there</p>
<p class="experiment">How's it going?</p>
<p class="experiment">Great!</p>
<p class="experiment">A set of elements with same class</p>
```

_JavaScript_

```javascript
let p = document.getElementsByClassName('experiment');
console.log(p);

console.log(p[0].innerText);
```

_output_

```
HTMLCollection[]

Hey there
```

You can access to the individual elements by indexing and access their properties, change them, and do anything. But wait, that's not all of it.

## Iterating through the HTML Collection

We can iterate through the HTML Collection, apply a particular operation on all of them. Below is an example of such iteration.

_HTML_

```html
<p class="experiment">Hey there</p>
<p class="experiment">How's it going?</p>
<p class="experiment">Great!</p>
<p class="experiment">A set of elements with same class</p>
```

_JavaScript_

```javascript
let p = document.getElementsByClassName('experiment');

for (let x = 0; x < p.length; x++) {
  p[x].style.color = 'dodgerblue';
}
```

When this code is run, all the elements that have the class name as 'experiment' are changed to `dodgerblue` text color. In the for loop, the `p.length` gives the length of the HTML Collection, which is used by the `for-loop`.
So as the usual rule goes by, once you grab an element, you can do anything with it.

> Note: it is getElementsByClassName , remember to add the 's' and be cautious about the capitalizations.

So this is all you need to know for now about getting Elements By Class Name

Next Part coming tomorrow, where we discuss about how you can get multiple elements by using getElementsByTagName.

Thank you for reading 😊

> **Considering Subscribing to my YouTube Channel if you like the Video content: https://youtube.com/c/developerTharun**

> Follow my articles on Dev.to: https://dev.to/developertharun
