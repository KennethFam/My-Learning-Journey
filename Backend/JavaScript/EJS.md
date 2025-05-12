# EJS 
- Embedded JavaScript Templating

## Installation
- Run this command in your project directory:
    ```shell
    npm install ejs
    ```

## Usage
- At the root of your project, create a subfolder called `views`.

- Next, we need to let our app know that we intend to use `EJS` as a template engine, as well as where to look for view files. In your `app.js` file, set the following application properties:
    ```js
    app.set("views", path.join(__dirname, "views"));
    app.set("view engine", "ejs");
    ```

- Import the Path CommonJS module from Node near the top:
    ```js
    const path = require("node:path");
    ```
    This enables `EJS` as the view engine, and that our app should look for templates in the `/views` subdirectory.

## Syntax
- In EJS, the `<%` and `%>` tags allow us to use JavaScript. This lets us write conditional statements, `for` loops, as well as use variables.

- In order to output a variable as a value, we use the `<%=` tag.

- Example that includes arrays and loop logic:
    ```js
    <% const animals = ["Cat", "Dog", "Lemur", "Hawk"] %>

    <ul>
        <% animals.map((animal) => { %>
            <li><%= animal %>s are cute</li>
        <% }) %>
    </ul>
    ```

## Basic Example
- Create an EJS template file called `index.ejs` in the views subdirectory, and add the following:
    ```js
    <html>
        <body>
            <%= message %>
        </body>
    </html>
    ```

- In app.js, render this template file in one of your routes:
    ```js
    app.get("/", (req, res) => {
        res.render("index", { message: "EJS rocks!" });
    });
    ```

- Start the server and go to the `/` route in the browser. You should see:
    ```
    EJS rocks!
    ```

- If you inspect the HTML in the browser’s dev tools, you can see the HTML is structured exactly like how we wrote the EJS template with the message variable replaced with its value.

- When you hit the `/` route, `res.render("index", { message: "EJS rocks!" });` is the line that sends back the response. Since we’ve already defined the `views` and `view engine` app properties, the first argument of `res.render` is programmed to look for “a template called index in the specified folder”, while the second argument is an object of variables that are to be made available to that specific template.

## The locals Variable in EJS
- In the example above, how did the template file know about the `message` variable? When we render the view, EJS has access to any properties from the object we pass into `res.render`, as well as any properties on [Express’s res.locals object](https://expressjs.com/en/api.html#res.locals) (`res.locals` can be useful if you need to pass values to the view in one middleware function, but won’t call `res.render` until later in the middleware chain).

- EJS will store these properties in an object called `locals`, which you can access in the view. Similarly to the global `window` object in browsers, this allows you to access the `message` variable in the view via `locals.message`, or simply just `message`.

- If we try to access a variable in a rendered template file that was not defined in the `locals` argument of `res.render` or `res.locals`, this can cause a reference error. For instance if we try to access an undefined `foo` variable, `locals.foo` will return undefined, while `foo` will result in an reference error. Verify this by outputting `locals.foo` in `index.ejs`, then replacing it with `foo`:
    ```js
    <html>
    <body>
        <%= message %>
        <!-- replace the below with the output of just foo -->
        <%= locals.foo %>
    </body>
    </html>
    ```

## Reusable Templates
- You may want to include webpage components that are shared across different pages, such as a sidebar or a header. To insert such components into your pages, we make use of the `include` command. This requires the name of the file to be inserted, and optionally an object of data you wish to pass.
    - For example, let's say we have this code in a file called `navbar.ejs`:

        ```js
        <!-- navbar.ejs -->
        <nav>
        <ul>
            <% for (let i = 0; i < links.length; i++) { %>
            <li>
                <a href="<%= links[i].href %>">
                <span> <%= links[i].text %> </span>
                </a>
            </li>
            <% } %>
        </ul>
        </nav>
        ```

        Note that the navbar expects a `links` variable. To pass this data into the navbar, pass it as a `locals` variable when rendering the template file at `res.render()`. We will render `index.ejs` to include the navbar. To do this, modify `app.js` such that a `links` object is defined and passed into the render function rendering `index.ejs` in the `"/"` route handler:

        ```js
        // app.js
        const links = [
            { href: "/", text: "Home" },
            { href: "about", text: "About" },
        ];

        app.get("/", (req, res) => {
            res.render("index", { links: links });
        }); 
        ```

        Then, modify the previously created `index.ejs` to remove the `<%= message %>` line and instead `include` the `navbar` with the `links` variable like so:

        ```js
        <!-- index.ejs -->
        <html>
        <head>
            <title>Homepage</title>
        </head>
        <body>
            <%- include('navbar', {links: links}) %>
        </body>
        </html>
        ```

        This will include the navbar with links in `index.ejs`.

        Note the use of the raw output tag `<%-` with the include which is used to avoid double-escaping the HTML output. `<%=` outputs html escaped while `<%-` outputs html unescaped. Unescaped means that turning characters like `<`, `>`, etc. are not turned into safe equivalents (`%lt;`, `&gt;`, etc.).

## Another Example Using include
- Let’s use `include` to dynamically render a list of variables a different way. In `app.js`, add the following `users` array just below the `links` variable, and pass it to the `render` function when rendering `index`:
    ```js
    // app.js

    const links = [
        { href: "/", text: "Home" },
        { href: "about", text: "About" },
    ];

    const users = ["Rose", "Cake", "Biff"];

    app.get("/", (req, res) => {
        res.render("index", { links: links, users: users });
    });
    ```

- Then create a new view called `user.ejs` in the `views` directory:
    ```js
    <li><%= user %></li>
    ```

- Then add the following block to `index.ejs`:

    ```js
    <ul>
        <% users.forEach((user) => { %>
            <%- include('user', {user: user}); %>
        <% }); %>
    </ul>
    ```
    
    If successful, Rose, Cake and Biff will be visible when rendering `index.ejs`.

## Directories Within the Views Folder
- Let’s create nested directories of EJS template files within the views. Change the `user.ejs` in the `views` directory to `users/user.ejs`, and in `index.ejs` change the path from `user` to `users/user` in the `users.forEach` block:
    ```js
    <!-- index.ejs -->
    <ul>
        <% users.forEach((user) => { %>
            <%- include('users/user', {user: user}); %>
        <% }); %>
    </ul>
    ```

## Serving Static Assets
- Serving static assets with EJS is similar to how we served assets previously when working directly with HTML, in that we can add external files to the head of the template file using the `link` tag. The main thing to point out is that the app needs to know where to serve assets from. Assuming `express` is installed, set the following lines in `app.js`:

    ```js
    const assetsPath = path.join(__dirname, "public");
    app.use(express.static(assetsPath));
    ```

    `express.static()` is a middleware function that enables the use of static assets, and we tell it to look for assets with the `public` directory as the root.

- Create the following `styles.css` file in the root of the public directory:
    ```css
    body {
        color: red;
    }
    ```

- To serve `styles.css` in `index.ejs`, set the following link tag like so in the head:
    ```html
    <head>
        <link rel="stylesheet" href="/styles.css">
    </head>
    ```
    Your `index.ejs` file should now display red text!

## Documentation
- Check out the documentation [here](https://ejs.co/#docs).