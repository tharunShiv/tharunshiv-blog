---
layout: post
title: 'JavaScript DOM - Part 6 - Get Elements By TagName [video + article]'
author: Tharun Shiv
tags: ['web development']
image: img/28.png
date: '2020-05-23T23:46:37.121Z'
draft: false
---

> This is going to be a multi-part Video + article tutorial series on JavaScript DOM. You're reading Part 6

**Read Part 5 here: https://www.tharunshiv.com/js-dom-5**

**Part 6 - Video**

<iframe width="560" height="315" src="https://www.youtube.com/embed/S-GP1OFvAFU " frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

> **Considering Subscribing to my YouTube Channel if you like the Video content: https://youtube.com/c/developerTharun**

## Several Elements with the same Tag Name

> Example of tags: `<p> <img> <form> <h1>`

We know that the same tag can be used. We can grab all of these elements having a particular tag name. Example use cases may be like, grabbing all the buttons of the page, grabbing all the images, or any element for that matter.

## Get elements by tag name

When we use `document.getElementsByTagName('element')`, it grabs all the elements that have the same tag name and returns us an HTML Collection that we can index or iterate to get the elements that we need in particular. An HTML Collection is similar to an Array that we're used to, so you can index it or get the length of it.

_syntax:_

```javascript
document.getElementsByTagName('element');
```

_example:_
_HTML_

```html
<p>Hey there</p>
<p>How's it going?</p>
<p>Great!</p>
<p>A set of elements with same tag</p>
```

_JavaScript_

```javascript
let para = document.getElementsByTagName('p');
console.log(para);

console.log(para[0].innerText);
```

_output_

```
HTMLCollection[]

Hey there
```

You can access the individual elements by indexing and access their properties, change them, and do anything. But wait, that's not all of it.

## Iterating through the HTML Collection

We can iterate through the HTML Collection, apply a particular operation on all of them. Below is an example of such iteration.

_HTML_

```html
<p>Hey there</p>
<p>How's it going?</p>
<p>Great!</p>
<p>A set of elements with same tag</p>
```

_JavaScript_

```javascript
let para = document.getElementsByTagName('p');

for (let x = 0; x < para.length; x++) {
  para[x].style.color = 'dodgerblue';
}
```

When this code is run, all the elements that have the tag name as 'p' are changed to `dodgerblue` text color. In the for loop, the `para.length` gives the length of the HTML Collection, which is used by the `for-loop`.
So as the usual rule goes by, once you grab an element, you can do anything with it.

> Note: it is getElementsByTagName, remember to add the 's' and be cautious about the capitalizations.

So this is all you need to know for now about getting Elements By Tag Name

Next Part coming tomorrow, where we discuss how you can get multiple elements by using QuerySelector.

Thank you for reading 😊

> **Considering Subscribing to my YouTube Channel if you like the Video content: https://youtube.com/c/developerTharun**

> Follow my articles on Dev.to: https://dev.to/tharunshiv
