---
layout: post
title: 'JavaScript DOM - Part 4 - innerHTML vs innerText vs textContent [video + article]'
author: Tharun Shiv
tags: ['web development']
image: img/26.png
date: '2020-05-21T23:46:37.121Z'
draft: false
---

> This is going to be a multi-part Video + article tutorial series on JavaScript DOM. You're reading Part 4

**Read Part 3 here: https://www.tharunshiv.com/js-dom-3**

**Part 4 - Video**

<iframe width="560" height="315" src="https://www.youtube.com/embed/bfjkU6Hd4yo " frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## innerText | innerHTML | textContent

All three of them are attributes that you can get from the elements. They are not the same and we will be looking at how they are different with the below illustrations.

## innerText

When applied to an element, it returns only the text which is inside the element, the text part wrapped by the element and nothing else, it also ignores the space.

_syntax:_

```javascript
element.innerText;
```

_example:_

```html
<p id="experiment">
  <br />
  Hello this is <span>Tharun</span> How are you?
  <br />
</p>
```

```javascript
let p = document.getElementById('experiment');
console.log(p.innerText);
```

_output_

```
"
Hello this is Tharun How are you?
"
```

## innerHTML

When applied to an element, it returns the text part enclosed by the element, along with the HTML tags inside, and also considers the spacing given inside. Look at the example below.

_syntax:_

```javascript
element.innerHTML;
```

_example:_

```html
<p id="experiment">
  <br />
  Hello this is <span>Tharun</span> How are you?
  <br />
</p>
```

```javascript
let p = document.getElementById('experiment');
console.log(p.innerHTML);
```

_output_

```
"
  <br>
  Hello this is <span>Tharun<span/> How are you?
  <br>
"
```

## textContent

When applied to an element, it returns the text part enclosed by the element and considers the spacing given inside. Look at the example below.

_syntax:_

```javascript
element.textContent;
```

_example:_

```html
<p id="experiment">
  <br />
  Hello this is <span>Tharun</span> How are you?
  <br />
</p>
```

```javascript
let p = document.getElementById('experiment');
console.log(p.textContent);
```

_output_

```
"

  Hello this is Tharun How are you?

"
```

> Follow my articles on Dev.to: https://dev.to/developertharun

So these are the main differences between these three that you need to know.
You can access and do a lot more magic by grabbing the elements. We will explore and do stuff in this series.

Next Part: https://www.tharunshiv.com/js-dom-5

Thank you for reading 😊

> **Considering Subscribing to my YouTube Channel if you like the Video content: https://youtube.com/c/developerTharun**

Written by Tharun Shiv
