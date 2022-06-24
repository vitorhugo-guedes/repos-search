# repos-search

Search github users repositories easy.

## Table of contents

- [Overview](#overview)
  - [Goals](#goals)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [Process](#process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Next Step](#next-step)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### Goals

The main goal for this project is to practice Reactjs concepts. Users should be able to:

- Search for a github username and get all your repositories.
- Access last saved search, click and search again.
- Delete any last saved search.
- Access each repository in github or homepage for every repo listed on the site.
- See important information about each repository like name, description, stars and topics.
- Access on every device. Its responsive.

### Screenshot

<!-- ![](./screenshot.jpg) -->
![image](https://user-images.githubusercontent.com/67174283/175696398-2cb9177b-846e-4efd-aa60-78cbfd65d58e.png)

![image](https://user-images.githubusercontent.com/67174283/175696473-9a0a83f0-d2cf-4ddd-92ad-1c24e8c115bd.png)


### Links

- Live Site URL: [Repos Search](https://repos-search.vercel.app/)

## Process

### Built with

- JavaScript
- CSS
- [React](https://reactjs.org/) - JS library
- [Vite](https://vitejs.dev/) - Build tool
- [React Icons](https://react-icons.github.io/react-icons/) - For icons

### What I learned

Building this project i learned the React basic concepts like create functional components, build custom hooks and use useState and useEffect hooks, conditional rendering, work with lists (arrays), consume api endpoint with a custom hook, save information in localStorage with a custom hook.

The biggest difficulty was the custom hooks, state sharing between components and useEffect, because you really need to research and know how they work to mastering the knowledge. One example is that you need to know the difference between value and reference in Javascript to understand useEffect behaviour.

### Next Step

I want to divide the Repos component in other components to make more reusable and organized code. Refactor ErrorMessage to accept data and verify if it is a error or just a normal message. Refactor the createID function to generate decent unique id's. Show the user profile and other code improvements. 

### Useful resources

- [React Docs] (https://pt-br.reactjs.org/docs/hello-world.html) - The best way to start learning Reactjs. Helped me to learn how react works and your purpose.
- [Rocketseat Video] (https://www.youtube.com/watch?v=pDbcC-xSat4) - (Portuguese) Introduced me React with Vite and other tools that i want to learn.
- [CrossCromom - Anthony Garritano Video] (https://www.youtube.com/watch?v=i793Qm6kv3U) - (English) All about react rendering process.
- [Fabio Vedovelli Video] (https://www.youtube.com/watch?v=agnAk8ay2gM) - (Portuguese) - Helped me with the basics concepts and inspired me to create this project.

## Author

- Linkedin - [Vitor](https://www.linkedin.com/in/vitor-guedesdev/)

