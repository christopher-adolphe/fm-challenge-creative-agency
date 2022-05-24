# Frontend Mentor - Creative agency single page site

This is my solution to the [Creative agency single page site challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/creative-agency-singlepage-site-Pq6V3I2RM).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Navigate the slider using either their mouse/trackpad or keyboard

### Screenshot

#### Home page

![Preview for the Creative agency single page](./preview.jpg)

### Links

- Solution URL: [Creative agency single page](https://www.frontendmentor.io/challenges/creative-agency-singlepage-site-Pq6V3I2RM)
- Live Site URL: [fm-creative-agency.netlify.app](https://fm-creative-agency.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- Mobile-first approach
- CUBE CSS methodology
- Swiper
- [TypeScript](https://www.typescriptlang.org/)
- [Sass](https://sass-lang.com/)
- [webpack](https://webpack.js.org/)

### What I learned
I have been using the **Block, Element, Modifier** methodology (commonly referred to as BEM) for my `CSS` authoring for a very long time because I benefit of a better structured `CSS` with low specificity and ease of readability and maintainability. However, I recently heard of the **CUBE CSS** methodology created by (Andy Bell)[https://piccalil.li] and was curious to know how if differs from BEM. So I decided to read more about it and use this project as a way to implement what I've learned.

- CUBE stands for **Composition Utility Block Exception**
  - **Composition** is the layer that controls the overall layout *(i.e how elements interact with each other)* and the rhythm *(i.e the space around those elements)*
  - **Utility** is the layer that defines re-usable helper classes that apply a single `CSS` property or a concise group of related properties *(i.e a single-responsibility class)*
  - **Block** is the layer that defines a group of rules for a specific context *(i.e the rules for a specific component)*. This layer leverages on the work done by the two previous layers
  - **Exception** is the layer that defines a variation to the rules defined by a block *(i.e the rules that affect the state or behavior of a block)*
- This methodology leverages greatly on the cascading and the inheritance mechanism of `CSS` rather than working against it
- Since we can have multiples classes applied on a single element, this methodology also enforces a grouping mechanism for related classes. The order of the grouping is also important and should be as follows:
  - First the primary **block** class
  - Then any subsequent **block** classes
  - Then standard **utility** classes
  - And finally design token **utility** classes

### Useful resources

- [CUBE CSS](https://cube.fyi/)
- [Build a dashboard with CUBE CSS](https://piccalil.li/tutorial/build-a-dashboard-with-cube-css/)
- [Every Layout](https://every-layout.dev/)

## Author

- Christopher Adolphe
- Frontend Mentor - [@christopher-adolphe](https://www.frontendmentor.io/profile/christopher-adolphe)
- Twitter - [@cadolphe23](https://twitter.com/cadolphe23)
