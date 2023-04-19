# Github Users - DevHunter

This project is a dev searcher on Github, through the REST API. Enjoy :)

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)



## Overview

### The challenge

Users should be able to:

- Enter a GitHub username
- Collect data from that user: profile picture, name, Github profile link and followers.

### Screenshot

![](https://github.com/carolmedici/github-users/blob/main/public/images/print.png)
![](https://github.com/carolmedici/github-users/blob/main/public/images/print2.png)

### Links

- Solution URL: [https://github.com/carolmedici/github-users](https://github.com/carolmedici/github-users)
- Live Site URL: [https://github-users-203bi32m2-carolmedici.vercel.app/](https://github-users-203bi32m2-carolmedici.vercel.app/)

## My process

### Built with

- API : REST Countries API 
- SCSS 
- [React](https://reactjs.org/) - JS library


### What I learned

In this project I kept improving my RECT skills, consuming a new API

Check out some code: 



```js
import axios from "axios";

function api(username) {
  const api = axios.create({
    baseURL: `https://api.github.com/users/${username}`,
  });

  return api.get();
}

export default api;
```


### Continued development

I will continue studying React library

### Useful resources

- [React JS](https://legacy.reactjs.org/) - The library contains great documents and tutorials.


## Author

- LinkedIn - [Carolina Médici](https://www.linkedin.com/in/carolina-medici/)
- Frontend Mentor - [@carolmedici](https://www.frontendmentor.io/profile/carolmedici)




