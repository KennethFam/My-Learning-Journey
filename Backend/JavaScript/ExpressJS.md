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

## Routes
- Some examples of routes:
    ```js
    app.get("/", (req, res) => res.send("Hello, world!"));
    ```

    - Matches any `GET` requests that go through the app router (which is the whole server) to the `/` path.

    ```js
    app.post("/messages", (req, res) => res.send("This is where you can see any messages."));
    ```

    - Matches any `POST` requests that go through the app router to the `/messages` path. 

- Each [HTTP verb](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Methods) has its own Express method. `app.all()` can be used to make a route to match all verbs.

### Paths
- The first argument we pass a route is the path to match, which can either be a string or a regular expression.
    - For example, `/messages` matchs that exactly, while `/messages/all` only matches `/messages/all` and not `/messages`.

- With string paths, we can also use certain symbols like `?`, `+`, `*` and `()` to provide some pattern-matching functionality, similar to regular expressions. Learn more about path syntax [here](https://expressjs.com/en/guide/migrating-5.html#path-syntax). Examples:
    ```js
    // ? makes a character optional
    // The following path matches both /message and /messages
    "/messages?"

    // () groups characters together, allowing symbols to act on the group
    // The following path matches both / and /messages
    "/(messages)?"

    // * is a wildcard matching any number of any characters
    // The following path can match /foo/barbar and even /foo-FOO/bar3sdjsdfbar
    "/foo*/bar*bar"
    ```
- Your routes will be set up in your server in the order they are defined.
    ```js
    app.get("*", (req, res) => {
        res.send("* is a great way to catch all otherwise unmatched paths, e.g. for custom 404 error handling.");
    });
    app.get("/messages", (req, res) => {
        res.send("This route will not be reached because the previous route's path matches first.");
    });
    ```
    - In order for our `GET /messages` request to match the `/messages` route, we will need to reverse the order our routes are defined. Doing so will prevent it from reaching the `*` route, as it will match the `/messages` route first.

### Route Parameters
- Route parameters allow us to extract a value from the path to use.
- Route paramters are denoted as `:` followed by the name of the paramter (which can only consist of case-sensitive alphanumeric characters, or `_`).
- Whatever we name that route parameter, Express will automatically populate the `req.params` object in any of the following middleware functions with whatever value the path passed into the parameter, using the parameter name as its key.
    ```js
    /**
    * GET /odin/messages will have this log
    * { username: 'odin' }
    *
    * GET /theodinproject79687378/messages would instead log
    * { username: 'theodinproject79687378' }
    */
    app.get("/:username/messages", (req, res) => {
        console.log(req.params);
        res.end();
    });

    /**
    * GET /odin/messages/79687378 will have this log
    * { username: "odin", messageId: "79687378" }
    */
    app.get("/:username/messages/:messageId", (req, res) => {
        console.log(req.params);
        res.end();
    });
    ```

### Query Parameters
- Query parameters are a unique and optional part of a URL that appear at the end. A `?` denotes the start of the query parameters, with each query being a key-value pair with the format `key=value`, and each query separated by an `&`. They are special as they are not actually considered part of the path itself, but are essentially more like arguments we can pass in to a given path.
    - For example, `/odin/messages?sort=date&direction=ascending` will still match the route with the `/:username/messages` path, but we can access the `sort=date` and `direction=ascending` key-value pairs inside the middleware chain.
    - Express automatically parses any query parameters in a request and will populate the `req.query` object with any key-value pairs it finds. If any keys are repeated, Express will put all values for that key into an array.
    - Code Example:
        ```js
        /**
        * GET /odin/messages?sort=date&direction=ascending will log
        * Params: { username: "odin" }
        * Query: { sort: "date", direction: "ascending" }
        *
        * GET /odin/messages?sort=date&sort=likes&direction=ascending will log
        * Params: { username: "odin" }
        * Query: { sort: ["date", "likes"], direction: "ascending" }
        */
        app.get("/:username/messages", (req, res) => {
            console.log("Params:", req.params);
            console.log("Query:", req.query);
            res.end();
        });
        ```

### Routers
- So far, we’ve not been using many routes, and all routes we’ve shown have been attached to `app`, our server itself. In a real application with lots of routes, we’d probably want to organize our routes into groups and extract each group out to their own file. We could also then more easily write things that affect only the routes in that file, and not any others.
    - For example, say we were making a library app and we wanted pages that dealt with books and pages that dealt with authors. That’s on top of the homepage and any other miscellaneous pages like “about” or “contact”.

    We might want our server to handle the following routes:

    ```
    GET /
    GET /about
    GET /contact
    POST /contact

    GET /books
    GET /books/:bookId
    GET /books/:bookId/reserve
    POST /books/:bookId/reserve

    GET /authors
    GET /authors/:authorId
    ```

    Let’s add some routers to handle each of our route groups. We’ll need a router first, which we can place in a new `routes` folder. For example, `routes/authorRouter.js`:

    ```js
    // routes/authorRouter.js
    const { Router } = require("express");

    const authorRouter = Router();

    authorRouter.get("/", (req, res) => res.send("All authors"));
    authorRouter.get("/:authorId", (req, res) => {
    const { authorId } = req.params;
        res.send(`Author ID: ${authorId}`);
    });

    module.exports = authorRouter;
    ```

    In the above, we destructure the Express object to get a Router function and use it to create our `authorRouter`. We can use the same `.get` or `.post` methods on this router instead of on the whole server object, meaning we can write routes and middleware scoped to this router. Since we’ll make this router usable only for paths that start with `/authors`, our route paths here don’t need to include it. Instead, they extend the parent path (we wouldn’t want our route to match `/authors/authors/:authorId`).

    After creating the other two routers for the other route groups - `routes/bookRouter.js` and `routes/indexRouter.js`, add them to our server in `app.js`:

    ```js
    // app.js
    const express = require("express");
    const app = express();
    const authorRouter = require("./routes/authorRouter");
    const bookRouter = require("./routes/bookRouter");
    const indexRouter = require("./routes/indexRouter");

    app.use("/authors", authorRouter);
    app.use("/books", bookRouter);
    app.use("/", indexRouter);

    const PORT = 3000;
    app.listen(PORT, () => {
        console.log(`My first Express app - listening on port ${PORT}!`);
    });
    ```

    We specify that any requests with paths starting with `/authors` will be passed through `authorRouter` for route matching. If our request starts with `/books`, it will skip these author routes and then check the routes in `bookRouter` instead. Any other requests that don’t start with either of these will run through `indexRouter`.

    To test these routes, use [Postman](https://www.postman.com/downloads/) which will allow you to send `GET` and `POST` requests without the browser (we can’t send `POST` requests from the browser address bar).

### Express Routing documentation
- Express's primer on Routing can be found [here](https://expressjs.com/en/guide/routing.html).