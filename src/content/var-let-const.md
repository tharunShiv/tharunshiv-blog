---
layout: post
title: 'Differences between Let Var Const that you didnt know - ES6 [Video + Article]'
author: Tharun Shiv
tags: ['web development']
image: img/30.png
date: '2020-08-01T13:10:00.121Z'
draft: false
---

> In this post we will discuss the differences between the let, var and const along with code examples and their outputs

**Video:**

<iframe width="560" height="315" src="https://www.youtube.com/embed/kkgULxmJPaM " frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

> Consider subscribing to the Youtube Channel if you find it helpful 😊 https://youtube.com/c/developerTharun

### What are Let Var and Const

In order to use a variable in JavaScript, you will have to declare that variable. Before ES6, we had only `var` using which we used to declare variables. From ES6 onwards `let` and `const` were introduced and there are some significant differences that you need to know among these.

### The differences

We will look at the differences in three aspects:

1. Function or block scoped
2. Redeclaring
3. Redefining

### 1. Function or block scoped

**Var: Function scoped:** This means that once a variable is declared using `var`, it is accessible anywhere within that function. This sounds nice, but we will face problem when we use `var` in a `for-loop`, and the variable leaks out.

```javascript
for (var i = 0; i < 5; i++) {
  console.log(i);
}

console.log(i); // i is still accessible here
```

_Output_

```json
0
1
2
3
4
5
```

**Let: Block Scoped:** A block is nothing but a piece of code that is enclosed by the curly braces `{ }`. So when a variable is declared using the `let`, it will stay within that block and doesn't leak out.

```javascript
for (let i = 0; i < 5; i++) {
  console.log(i);
}

console.log(i); // the variable i is not accessible here
```

_Output_

```json
0
1
2
3
4
console.log(i);
            ^
ReferenceError: i is not defined
```

**Const: Block Scoped:** The variable declared with `const` has a block scope just like let, and isn't accessible outside the scope.

```javascript
{
  const i = 10;
  console.log(i);
}

console.log(i);
```

_Output_

```json
10
console.log(i);
            ^
ReferenceError: i is not defined
```

### 2. Redeclaring

**Var: Can be Redeclared:** The variables declared using `var` can be declared again using `var` anywhere in the program.

```javascript
var cat = 'meow';
var cat = 'psssss'; // no error
```

**Let: Cannot be Redeclared:** The variables declared using `let` cannot be redeclared within the same scope of it.

```javascript
let dog;

let dog; // causes error
```

_Output_

```json
let dog;
    ^
SyntaxError: Identifier 'dog' has already been declared
```

**Const: Cannot be Redeclared:** The variables declared using `const` cannot be redeclared within the same scope of it.

```javascript
const lion;

const lion; // causes error
```

_Output_

```json
const lion;
      ^
SyntaxError: Identifier 'lion' has already been declared
```

### 3. Redefining

**Var: can be redefined:** Defining is different from declaring in the sense that, defining assigns a value to the variable.

```javascript
var dog = 'boww';
dog = 'voww'; // no error
```

**Let: can be redefined:** Defining is different from declaring in the sense that, defining assigns a value to the variable.

```javascript
let cat = 'meow';
cat = 'prrr'; // no error
```

**Const: cannot be redefined:** This results in an error. This applied to the scope only.

```javascript
const lion = 'roar';
lion = 'rooor'; // cannot redefine
```

_Output_

```json
const lion = "roooor";
      ^
SyntaxError: Identifier 'lion' has already been declared
```

## Summary

![Summary](https://dev-to-uploads.s3.amazonaws.com/i/uarhjnu8twbu9z7vguww.png)

If you liked this article, give it a ❤ 🦄 and Save it for later. **Subscribe to my YouTube Channel if you like it https://youtube.com/c/developerTharun**

#### You might like this

https://dev.to/tharunshiv/4-ways-to-use-generator-functions-in-javascript-examples-advantages-2ohd

> **Considering Subscribing to my YouTube Channel if you like the video content: https://youtube.com/c/developerTharun** 😊

Written by,
<a href="https://www.tharunshiv.com/about">Tharun Shiv</a>

> Follow my articles on Dev.to: https://dev.to/developertharun

**Read about 9 ways in which you can build like Facebook! Facebook's new Tech Stack revealed!
https://www.tharunshiv.com/new-tech-stack-facebook**
