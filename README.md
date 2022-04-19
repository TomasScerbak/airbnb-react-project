# Airbnb clone react page

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size

### Links

- Solution URL: [https://github.com/TomasScerbak/react-profile-card.git]
- Live Site URL: [https://tomasscerbak.github.io/react-profile-card/]

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- SASS
- Flexbox
- React JS

### What I learned

Learned how to import props to retreive data from another component

```js

export default function Card(props) {
    return (
                <div className='card'>
                    <img src={props.img} alt="random person" />
                    <div class="rating">
                        <img className='star' src={starImage} alt="star rating"/>
                        <span className='opacity'>{props.rating}</span>
                        <span className='opacity'>({props.reviewCount}) - {props.city}</span>
                    </div>
                    <article className='article'>{props.name}</article>
                    <span className='price'>{props.price}</span>
                    <span>/ person</span>
                </div>
    )
}
```

### Continued development

I will continue to use REACT and build REACT projects for further developement.


## Author

- Website - [Tomas Scerbak](https://tomasscerbak.github.io/tomas-scerbak-portfolio/)
- Frontend Mentor - [@Potato](https://www.frontendmentor.io/profile/TomasScerbak)
