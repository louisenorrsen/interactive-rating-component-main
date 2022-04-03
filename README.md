# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Frontend Mentor - Interactive rating component solution](#frontend-mentor---interactive-rating-component-solution)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Screenshot](#screenshot)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
  - [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot

![](./images/Screenshot%202022-04-03%20at%2016-25-14%20Frontend%20Mentor%20Interactive%20rating%20component.png)
![](./images/Screenshot%202022-04-03%20at%2016-49-38%20Frontend%20Mentor%20Interactive%20rating%20component.png)

### Links

- Solution URL: [Solution](https://github.com/louisenorrsen/interactive-rating-component-main)
- Live Site URL: [Live Site](https://louisenorrsen.github.io/interactive-rating-component-main/)

## My process

### Built with

- Flexbox
- Mobile-first workflow

### What I learned

I am very proud that I learned something new when I did this project. 

```js
const buttons = document.querySelectorAll('.rating')

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        rating = e.target.textContent
        showRating()
    })
})
```

## Author

- Frontend Mentor - [Louise Norrsén](https://www.frontendmentor.io/profile/louisenorrsen)

