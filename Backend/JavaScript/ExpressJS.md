# Express.js

## What is Express.js?
- An intentionally barebones and unopinionated backend framework; it allows us to do many things how we want, and to extend it with only the features we need.

## Documentation
- Can be found [here](https://expressjs.com/en/api.html).

## Installation
1. Open project directory and run this command to create a package.json:
    ```shell
    npm init -y
    ```

2. Run this command to install express in the project directory.
    ```shell
    npm install express
    ```

- Note: 1 and 2 helps keep track of the version of Express.js used for your project. It is common practice to install a separate package for each project because each project may use a different version of a package.

3. Create your project file. It can be named anything, but the name used in the Express documentaion is `app.js`.

## Basic Server Example:
```js 
const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("Hello, world!"));

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`My first Express app - listening on port ${PORT}!`);
});
```
- Let's break down this code:
    - We import `express` then call it to initialize the `app` variable. This is our server.
    - We then have a `route` - the line beginning with `app.get`.
    - Finally, we tell our server to listen for incoming requests on whatever port we specify, via `localhost` (which is basically just the computer’s local connection). While port 3000 is the default choice, you can use any unused port.
    - For demonstration purposes, we hardcoded a fixed port number above. Usually, the port number would come from an environment variable with a fallback value in case the environment variable does not exist.
        ```js
        const PORT = process.env.PORT || 3000;
        ```
        If the specified port is already in use, we can change the environment variable value without editing the source code. Also, some hosting services configure their own ports which may differ from a fix value hardcoded in.
    
- Go to `http://localhost:3000/` to send a request to the server.
    - Whenever you navigate to any web URL this way, this is essentially what you are doing. Navigating to `https://theodinproject.com/paths` via the address bar is just telling the browser to send a `GET` request to the `/paths` path at `https://theodinproject.com`, then display what it receives in response.
    - Once you navigate to `http://localhost:3000/`, you should see Hello, world! appear in the window.

- When our server receives our `GET` request, Express stores the request in a [request object](https://expressjs.com/en/api.html#req). This request gets passed through a chain of functions we call middleware functions until eventually, a `middleware function` tells Express to respond to the request.
    - In our example, the request comes through as a `GET` request to the `/` path. This matches the route we have in our app.js file.
        ```js
        app.get("/", (req, res) => res.send("Hello, world!"));
        ```
        - To summarize the above line, it tells Express: “if a `GET` request comes through to the `/` path, pass the request through the following chain of middleware functions”. Here, we only have a single function.
        - If we had defined multiple routes, Express would pass the request through the first route that matched the requested HTTP verb (e.g. `GET`) and path (`/`). The order of the routes matters!
        - Express takes the callback function we gave it and passes the request object into the first parameter (conventionally named `req`), and a [response object](https://expressjs.com/en/api.html#res) into the second parameter (`res`). Our callback tells the response object to respond to the request by sending (via `res.send`) the string `"Hello, world!"`.
        - There is no more code to run and the function returns. Since Express has been told to respond to the request, it ends the request-response cycle. Meanwhile, the browser receives our server’s response and displays it on screen, which is our `"Hello, world!"` string. We could send nearly anything in our response. We could even [tell Express to send a file](https://expressjs.com/en/api.html#res.sendFile).

## Auto-Restarting Server Upon File Changes
- When you run your server with `node app.js`, any changes to any JavaScript and JSON files in your project directory won’t be reflected automatically unless you manually interrupt and rerun `node app.js`. To avoid this manual process, you can use [Node’s watch mode](https://nodejs.org/docs/latest-v20.x/api/cli.html#--watch) by adding the `--watch` flag, e.g. `node --watch app.js`. Node will watch `app.js` for changes, as well as any of the files it ultimately depends on. When it detects a change, it will automatically restart the server just like with Webpack and Vite’s dev servers.
- You may also come across [Nodemon](https://www.npmjs.com/package//nodemon), a highly configurable package that can also watch for changes and restart your server for you. Node didn’t always have a stable built-in watch mode, so you’re likely to see Nodemon around the place. Our recommendation would be to stick with Node’s built in watch mode via the `--watch flag`, as this would be by far the simplest method.