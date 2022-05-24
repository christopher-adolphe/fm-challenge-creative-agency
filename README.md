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
#### On the CSS side:
I have been using the **Block, Element, Modifier** methodology (commonly referred to as BEM) for my `CSS` authoring for a very long time because I benefit of a better structured `CSS` with low specificity and ease of readability and maintainability. However, I recently heard of the **CUBE CSS** methodology *(created by Andy Bell)* and was curious to know how it differs from BEM. So I decided to read more about it and use this project as a way to implement what I learned.

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

```html
<footer class="footer | stack | bg-wave"></footer>
```

Fortunately, it was not that difficult for me to switch to the CUBE CSS methodoloy. I refactored my boilerplate to create **composition** and **utility** classes and used them to compose the layout. After that, I created **block** classes for the components together with their **exception** rules where required.

#### On the JS side:
- I have used **Swiper** for the project slider. It is the first time that I'm using this plugin and it was easy to implement as it is well documented. It also comes with a parallax option out of the box which is great for customizing animations on the slides.
- I used intersection Observer API to control the display of the scroll to top button. This is a cleaner approach as compared to adding a listener to the scroll event.

```js
const btnElem = document.getElementById('btn-scroll-top');
const projectsSectionElem = document.getElementById('projects');

const handleIntersectionObserver = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      btnElem.style.display = 'inline-flex';
    } else {
      btnElem.style.display = 'none';
    }
  });
};

const observer = new IntersectionObserver(handleIntersectionObserver);

observer.observe(projectsSectionElem);
```

### Useful resources

- [CUBE CSS](https://cube.fyi/)
- [Build a dashboard with CUBE CSS](https://piccalil.li/tutorial/build-a-dashboard-with-cube-css/)
- [Every Layout](https://every-layout.dev/)
- [Swiper](https://swiperjs.com/)
- [Intersection Observer](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)

## Author

- Christopher Adolphe
- Frontend Mentor - [@christopher-adolphe](https://www.frontendmentor.io/profile/christopher-adolphe)
- Twitter - [@cadolphe23](https://twitter.com/cadolphe23)
