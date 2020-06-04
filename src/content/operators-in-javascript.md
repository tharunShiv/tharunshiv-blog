---
layout: post
title: '7 Bitwise Operators in JavaScript you never knew about'
author: Tharun Shiv
tags: ['web development']
image: img/generator-functions.png
date: '2020-04-05T23:46:37.121Z'
draft: true
---

<h3 id='what-is-gf-now'> What are Generator Functions? </h3>

_Ever imagined what would happen if a function had an infinite input or output to deal with? That is exactly what you can handle with Generator functions._

A Generator function returns us an iterator, which can be used to stop the function in the middle, do something, and then resume it whenever. A normal function starts executing and returns when the function completes, but a Generator function can be stopped any number of times and resumed later.

    Want to learn Modern JavaScript ES6 - 2020??
    Scroll to the end of the post

<h3 id='function'>Recap: What is a Function? </h3>

A function is a block of code that can be called any number of times to get the functionlaity done and sometimes the result returned.

<h3 id='how-it-works'> How does it Work? </h3>

1. Calling a Generator function does not execute the function completely as soon as its called. It will return an **iterator** object that can be used to use the function.
2. So this function can be executed part by part, where these parts are decided by the `yield` expression. ( Code explanation below, don't worry ).
3. To execute these parts, the `.next()` method is used on the iterator. When the `.next()` method is called, the function resumes execution until the next `yield` is found, or the function completes or a `return` statement is executed.
4. Everytime you execute the `.next()` method, the generator function returns you with an object that looks like this
   {
   value: 'some-value',
   done: false
   }

The `value` here is the value sent by the `yield` and the `done`indicates if the generator function has run completely.

<h3 id='examples'> Examples </h3>

<br/>

###### 1. Basic usage of Generator Function

Generator functions are defined using the `*` asterisk either immediately after the function keyword or right before the function name. The below example creates an infinie number of natural numbers, which can be used when needed.

    function* naturalNumbers() {
        let number=1;
        while (true)
            yield number++;
    }

    var naturalNumberIterator = naturalNumbers();

    console.log(naturalNumberIterator.next().value);
    console.log(naturalNumberIterator.next().value);
    console.log(naturalNumberIterator.next().value);
    console.log(naturalNumberIterator.next().value);

The output for the above code:

    1
    2
    3
    4

<br/>

###### 2. Calling Generator within a Generator (wooo... inception)

We can use the `yield*` to call another generator from within a generator. _( Crazy right? )_

    function *anotherGenerator(name) {
        yield `From Another Generator, ${name}`
    }

    function *myGenerator(name) {
        yield `Hi ${name}`;
        yield* anotherGenerator(name)
        yield 'Bye!'
    }

    let gen = myGenerator('shiv')
    console.log(gen.next().value);
    console.log(gen.next().value);
    console.log(gen.next().value);

The output for the above code:

    Hi shiv
    From Another Generator, shiv
    Bye!

<br/>

###### 3. Passing arguments into Generators

Wonder what else the Generators could do? What if I told you that you can pass arguments into Generators? Again, just pass the parameters in the `.next()` and use it in the `yield` keyword inside the Generator function. Below is an demonstrated example of it.

    function *myGenerator() {
        console.log('Hey ', yield)
        console.log('Are you ',yield)
    }

    let gen = myGenerator()

    gen.next()
    gen.next('tharun')
    gen.next('shiv')

Note that, you have to call `.next()` method once in the beginning, which will execute the function until the yield keyword. The next `.next('tharun')` will send the `'tharun'` to the Generator and is replaced in place of yield. Below is the output of the program.

    Hey tharun
    Are you shiv

<br/>

###### 4. Once returned, no more yields

Wonder what would happen if you execute a `return` statement inside a generator? Well, I have demonstrated just that in the below example. It returns from the generator function without providing access to any of the `yield` below.

    function* yieldAndReturn() {
    yield "Y";
    return "R";
    yield "unreachable";
    }

    var gen = yieldAndReturn()
    console.log(gen.next());
    console.log(gen.next());
    console.log(gen.next());

The output is given below. You cannot `yield` the "unreachable".

    {"value":"Y","done":false}
    {"value":"R","done":true}
    {"done":true}

<br/>

<h3 id='pros'> Advantages of using Generators? Why Should you use them? </h3>

###### 1. Lazy Evaulation - Run only when you need

Say there is an Infinite Stream of data, we cannot spend our whole life evaluating that data. Hence we can use Generator function to evaluate as and when required.

###### 2. Memory Efficient

As the Lazy Evaluation method is used, only those data and those computations that are necessary, are used.

##### Where do I learn these?

**I have got the exact place where you can learn these from, ask doubts and also get a Certificate on Completetion. Check out this course from Udemy <a href="https://www.udemy.com/course/javascript-tharunshiv/?referralCode=6326CE49CCF4074B11CE" target="_blank">(Click) JavaScript Modern ES6 - 2020 - The Complete Course - Udemy</a>. The first few videos are free on my YouTube Channel. Try them out here: <a href="https://www.youtube.com/playlist?list=PLQTwHWAmj18Y2dfj-8PkIogD9hrBzp4M9">Being a Pro - YouTube - JavaScript Playlist</a> Thank you for reading!**

        Now you can subscribe to my blog to get the latest posts delivered directly to your inbox.

        Just enter your email below and confirm to subscribe!
        Get a FREE Ebook from me very soon!

> Follow my articles on Dev.to: https://dev.to/tharunshiv
