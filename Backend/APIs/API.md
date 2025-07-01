# API (Application Programming Interfact)

## What is it?
- An application programming interface is a connection between computers or between computer programs. It is a type of software interface, offering a service to other pieces of software. - [Wikipedia](https://en.wikipedia.org/wiki/API)

## API Security
- Securing your API is an important step. 
    - One way to secure your API is to use a username and password scheme to authenticate users using sessions, but there is a strategy that makes more sense: passing a secure token between our back-end and front-end code. Doing so will make sure that our user’s username and password are not compromised and will also give us the ability to expire our user’s session for added security. The basic idea is that when a user signs in to our app, a secure token is created, and then for all subsequent requests that token is passed in the header of our request object. Some example(s) of this strategy are:
        - JWTs (JSON Web Tokens)

## Links
- [API Basics](https://www.theodinproject.com/lessons/nodejs-api-basics)
- [API Security](https://www.theodinproject.com/lessons/nodejs-api-security)