---
layout: post
title: '9 things to learn from Facebook's New Tech Stack - 2020 in terms of Atomic CSS & JavaScript'
author: Tharun Shiv
tags: ['web development']
image: img/19.png
date: '2020-05-21T23:46:37.121Z'
draft: false
---

# Looking back at the early Facebook

During the initial years of Facebook, it was a server-rendered PHP website. We have seen as to how many improvements were done and the number of features that were added to this website over time. I have always been a huge admirer of the kind of features, UI, animations, and contributions that **The Facebook** comes up with.

Be it the smoothness of the website, the animations that go into the emojis when you react to a post, the recent dark mode, the stages of loading, loads of features like Marketplace, live streams, games. When I consider what they've given to the developer community, I remember React & React Native ❤

# Why can't they just upgrade to the latest tech stack?

Facebook is a huge company with a lot of intelligent minds in it. _Shouldn't it be easy for Facebook to just rebuild the entire website with the latest and the best stack?_...
It is not at all easy! To a company that is on such a huge scale, it is not possible to write a scalable new website every time the community comes up with better technology.

---

# 2 main things FB focussed on

1. To deliver the necessary features as early as possible
2. Considering UX ( User Experience ) as a part of the engineering process by default

---

# The Fantastic Four ways which Facebook taught us

### Rethinking CSS

If you had worked on any production level web development application, you would know the number of CSS lines and files that go into it. Thousands of lines are very common even for a beginner level CSS application. Just imagine the amount of CSS that would go into an application like FaceBook.
**Firstly, they reduced the homepage by 80 percent**

First of all Facebook is written by world's best engineers, and on top of that if they optimize it by 80%, it is super-engineering. Let us look at the ways in which they achieved this.

**1. Generating Atomic CSS**

_Now what on earth is Atomic CSS?_ It is a way of writing CSS. As the name suggests "Atomic", means indivisible. So this CSS is indivisible. The styling is done using Classes, where each class will have **only one style**. Yes, you read that right.

_Example usage of Atomic CSS:_

```html
<div class="Bgc(#0280ae.5) C(#fff) P(20px)">
  Lorem ipsum
</div>
```

```css
.Bgc\(\#0280ae\.5\) {
  background-color: rgba(2, 128, 174, 0.5);
}

.C\(\#fff\) {
  color: #fff;
}

.P\(20px\) {
  padding: 20px;
}
```

_Output:_

![Output](https://dev-to-uploads.s3.amazonaws.com/i/gou63d4oxtar9z17i5f7.png)

> Learn more about Atomic CSS at https://acss.io/

Writing in this way for such a huge platform manually isn't a human task, so they use tools to generate Atomic CSS. Atomic CSS has a logarithmic growth curve because it is proportional to the number of unique styles declarations rather than to the number of styles and features we write. **[ That is Brilliant! ]**

**2. Managing unused CSS**

Another reason why CSS grows over time is that, because of a lot of newly written features, there will be newly written CSS introduced into the Code. There might be old CSS that is not removed is being loaded into the page. This will again account for the increase in the downloaded CSS size. So they colocated their styles with the components so that they can be deleted parallelly and only split them into separate bundles at build time. This is also solved by using Atomic CSS and tools.
They also addressed the CSS precedence problem, because when tools are used to generate bundles and render pages, there might be a mix up in the order, so they use a familiar syntax inspired by **React Native's** styling APIs. They also do not support CSS descendants any more.

**3. Changing font sizes for better accessibility**

They have completely moved into using **rems**, to mention the size. There are several ways to mention sizes, like px, em, rem, etc., The _rem_ is a smart way to mention sizes, because it sizes the elements based on the size of the root element. So if the root element is 16px, then an element of 2rems would be of size 32px.

_example:_

```css
html {
  font-size: 16px;
}

.heading-text {
  font-size: 1.2rem;
}

.caption {
  font-size: 0.9rem;
}
```

**4. Build time handling of code**

They also improved the website by using other techniques like using Atomic CSS in the build time also by concatenating individual classes.

_Example Generated Code_

```css
.class0 {
  font-weight: bold;
}
.class1 {
  font-weight: normal;
}
.class2 {
  font-size: 0.9rem;
}
```

```javascript
function MyComponent(props) {
  return <span className={(props.isEmphasized ? 'class0 ' : 'class1 ') + 'class2 '} />;
}
```

**5. Using CSS variables for theming**

_ How was theming handled in the old version of FaceBook? _ They used to apply classes according to the theme, which used to override the existing styles with rules that had a higher specificity. But this approach no longer works when using Atomic CSS. So now, they use CSS variables where the CSS properties are present already when the page loads and the theme can be changed without reloading the page. Advantages of using this approach are:

- Combine all themes into a single stylesheet
- No need to reload the page on changing the theme
- Different pages can have different themes without the need to download
- different features can have different themes at the same time on the same page

_example_

```css
.light-theme {
  --card-bg: #eee;
}
.dark-theme {
  --card-bg: #111;
}
.card {
  background-color: var(--card-bg);
}
```

---

## Rethinking JavaScript

**1. Using SVGs directly in JavaScript**

They faced flickering when the icons were loaded after the rest of the content. Now this problem is resolved by using inline SVGs, by creating a component to return this SVG. This improved the performance as the SVGs are now bundled with JavaScript and can be delivered together with the other components. Hence no more flickering of icons that get loaded later.

```javascript
function MyIcon(props) {
  return (
    <svg
      {...props}
      className={styles({
        /*...*/
      })}
    >
      <path d="M17.5 ... 25.479Z" />
    </svg>
  );
}
```

Another advantage of using SVGs this way is that, we can change the properties of these SVGs without having to reload the website.

**2. Incremental code download**

Using this method, the page is loaded in several steps. Each step focuses on showing the minimum valuable content possible. In this way, we can prevent users from leaving the page too early.

**3. Delivering dependencies only when necessary**

In this technique, the server will deliver the dependencies such as experiment-driven dependencies and data-driven dependencies only when they're needed. Say they're performing A/B testing on features, they will deliver the dependencies only if they are being shown, else it will not be delivered.

```javascript
const Composer = importCond('NewComposerExperiment', {
  true: 'NewComposer',
  false: 'OldComposer',
});
```

Consider the user's feed is full of images, they will deliver only those dependencies which these components need.
This functionality is achieved using GraphQL Relay

```javascript
... on Post {
  ... on PhotoPost {
    @module('PhotoComponent.js')
    photo_data
  }
  ... on VideoPost {
    @module('VideoComponent.js')
    video_data
  }
}
```

**4. Introducing JavaScript Budgets**

Earlier we saw there the page has several features and phases in which the page will load. Here they have to make sure that each phase stays under control over time. To manage this, they have introduced per-product JavsScript budgets.

So these budgets are based on performance goals, technical constraints, and product considerations. They have allocated page-level budgets, product boundaries, and team boundaries.

---

There are much more details about CSS, JS, Data, and Navigation on the official blog of The Facebook Engineering Team. I have tried my best to simplify it further. This article and the examples are inspired by the official blog article. Thank you for reading.

Written by
Tharun Shiv

Thank you for reading 😊
**Considering Subscribing to my YouTube Channel if you like the Video content: https://youtube.com/c/developerTharun**

_Find the official article from The Facebook here https://engineering.fb.com/web/facebook-redesign/_
