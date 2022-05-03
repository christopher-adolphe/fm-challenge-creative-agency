# Frontend Mentor - Art gallery website

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

- Solution URL: [Creative agency single page]()
- Live Site URL: [fm-creative-agency.netlify.app]()

## My process

### Built with

- Semantic HTML5 markup
- Mobile-first approach
- Flexbox
- CSS Grid
- GSAP animation
- [TypeScript](https://www.typescriptlang.org/)
- [Sass](https://sass-lang.com/)
- [webpack](https://webpack.js.org/)

### What I learned
- While I have been using Sass CSS preprocessor for a long time, I primarily used it for its variables and nested rules features. As I spent more time reviewing other projects I noticed that I could gain efficiency in my CSS authoring by implementing Sass maps in conjunction with `At-rules` like `@each` etc. I started using these to generate helper classes in my project.
```scss
$colors: (
  dark: (
    color-1: rgba(68, 68, 68, 1),
    color-2: rgba(21, 21, 21, 1)
  )
);

@each $color, $shade  in  $colors {
  @each $key, $value  in  $shade {
    .text-#{""  + $color}-#{$key} {
      color: #{$value}  !important;
    }
  }
}

// CSS Output
.text-dark-color-1 {
  color: #444444 !important;
}

.text-dark-color-2 {
  color: #151515 !important;
}
```

### Useful resources

- [Responsive grid in 2 minutes with CSS grid layout](https://travishorn.com/responsive-grid-in-2-minutes-with-css-grid-layout-4842a41420fe)
- [Responsive grid magazine layout in just 20 line of CSS](https://css-tricks.com/responsive-grid-magazine-layout-in-just-20-lines-of-css/)

## Author

- Christopher Adolphe
- Frontend Mentor - [@christopher-adolphe](https://www.frontendmentor.io/profile/christopher-adolphe)
- Twitter - [@cadolphe23](https://twitter.com/cadolphe23)
