---
layout: post
title: 'JavaScript DOM - Part 7 - Query Selectors - Power to Grab anything [video + article]'
author: Tharun Shiv
tags: ['web development']
image: img/29.png
date: '2020-08-01T13:00:00.121Z'
draft: false
---

> This is going to be a multi-part Video + article tutorial series on JavaScript DOM. You're reading Part 7

**Read Part 6 here: https://www.tharunshiv.com/js-dom-6**

<iframe width="560" height="315" src="https://www.youtube.com/embed/gPKDxjiZZZs " frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

> **Considering Subscribing to my YouTube Channel if you like the video content: https://youtube.com/c/developerTharun**

## Recap

- An ID used as a unique identifier for elements. No two elements on a page should have the same ID.
- A Class is used as an identifier for any number of elements. So, a number of elements can have the same class.
- `document.getElementById('id')` is used to get the element by Id.
- `document.getElementsByClassName('class')` is used to get the elements by className and returns us a _HTMLCollection_ which is like an array. We can get the length of this using `.length`and index it to get the individial elements.
- `document.getElementsByTagName('tagname')` is used to get the elements by tag name and returns us a _HTMLCollection_ which is like an array. We can get the length of this using `.length`and index it to get the individual elements.

## Query Selector

Instead of using different methods to grab elements by referring to their Id, Class Name, Tag Name, You can use the Query Selector to grab any one of them. We will look at more of this in the examples below.

_Example: Grabbing an element by ID_

_HTML_

```html
<p id="ts">The paragraph to be grabbed</p>
```

_JavaScript_

```javascript
let para = document.querySelector('#ts'); // notice the '#'
console.log(para.innerText);
```

_Output_

```
The paragraph to be grabbed
```

_Example: Grabbing an element by class name_

_HTML_

```html
<p class="sp">The paragraph to be grabbed</p>
<p class="sp">This wont be grabbed</p>
```

_JavaScript_

```javascript
let para = document.querySelector('.sp'); // notice the '.'
console.log(para.innerText);
```

_Output_

```
The paragraph to be grabbed
```

> Wait, the output is not incorrect, the QuerySelector returns us the first element that it matches. Ouch! There is a solution to this, and it is `QuerySelectorAll` which we will read in the next article.

_Example: Grabbing an element by tag name_

_HTML_

```html
<p>The paragraph to be grabbed</p>
<p>This wont be grabbed</p>
```

_JavaScript_

```javascript
let para = document.querySelector('p'); // mention the element
console.log(para.innerText);
```

_Output_

```
The paragraph to be grabbed
```

> Here again, the output is not incorrect, the QuerySelector returns us the first element that it matches. Ouch! There is a solution to this, and it is `QuerySelectorAll` which we will read in the next article.

So this is Query Selector where you grab elements by ID using the `#` and the ID of the element, you grab the elements by Class Name using the `.` and the Class of the element, you grab the elements by Tag Name by using the tag name of the elements.

In the next article, we will look at the most popularly used `QuerySelectorAll`.

> **Considering Subscribing to my YouTube Channel if you like the video content: https://youtube.com/c/developerTharun** 😊

Written by,
<a href="https://www.tharunshiv.com/about">Tharun Shiv</a>

> Follow my articles on Dev.to: https://dev.to/developertharun

**Read about 9 ways in which you can build like Facebook! Facebook's new Tech Stack revealed!
https://www.tharunshiv.com/new-tech-stack-facebook**
