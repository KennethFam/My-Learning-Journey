# express-validator

## What is it?
- A library that helps with input validation and sanitization.

## Installation
- Run this command to install it:
    ```shell
    npm install express-validator
    ```

## Usage
- To use it in your project, you first need to require it:
    ```js
    const { body, validationResult } = require("express-validator");
    ```
    - `express-validator` comes with many functions for just about every form operation you could think of, but we’ll mainly use `body()` and `validationResult()`.

### Understanding the Body() Function
- The `body()` function allows you to specify which fields in the request body should be validated and sanitized, as well as how to handle it.

- Example:
    ```js
    [
        body("birthdate", "Must be a valid date.")
            .optional({ values: "falsy" })
            .isISO8601() // Enforce a YYYY-MM-DD format.
    ];
    ```
    - This example marks `birthdate` field as optional, but still enforces the ISO8601 date format on inputs. This is because `{ values: "falsy" }` means values that aren’t `undefined`, `null`, `false`, `0` or empty strings `""` will still be validated.

#### Chaining Validations
- You can also chain multiple validation methods, with unique error messages if the checks fail.
    ```js
    [
        body("name")
            .trim()
            .notEmpty()
            .withMessage("Name can not be empty.")
            .isAlpha()
            .withMessage("Name must only contain alphabet letters."),  
    ];
    ```
    - This ensures that `name` is not only present and trimmed, but also only contains alphabet letters. The following shows how the e-mail not in use validation ends up running not only for the sign-up page, but also for the login page:
        ```js
        const baseEmailChain = body('email').isEmail();
        app.post('/login', baseEmailChain, handleLoginRoute);
        app.post('/signup', baseEmailChain.custom(checkEmailNotInUse), handleSignupRoute);
        ```

##### Reusing Validation Chains
- Validation chains are mutable. This means that calling methods on one will cause the original chain object to be updated, just like any references to it. If you wish to reuse the same chain, it's a good idea to return them from functions:
    ```js
    const createEmailChain = () => body('email').isEmail();
    app.post('/login', createEmailChain(), handleLoginRoute);
    app.post('/signup', createEmailChain().custom(checkEmailNotInUse), handleSignupRoute);
    ```

- Storing chains and then calling methods on them might cause bugs.

#### Escaping User Input
- While this might work for outputs we know won’t have special characters, like names or ages, we also have to consider situations that do allow those characters. For example, when writing their “About Me” description, what would happen if the client decides to inject JavaScript code instead?
    - For example:
        ```html
        <div>
            About Me: <%- description %>!
        </div>

        // The client then inputs the following as their page's About Me:
        <script>alert("Hacked!");</script>
        ```
        
        When unescaped, this would be rendered into HTML as:

        ```html
        <div>
            About Me: <script>alert("Hacked!");</script>!
        </div>
        ```
        
        - To prevent this [cross-site scripting (XSS) attack](https://en.wikipedia.org/wiki/Cross-site_scripting), we can escape the output (you may also see this referred to as encoding). Escaped HTML replaces special characters, like `<`, with their respective HTML entities, in this case `&lt;`. In EJS, we can escape the output using `<%= %>`.

- So why not escape the data when we receive it by adding .escape() to the end of our body() validation chain instead? “Dangerous characters” are only dangerous at the point of use, and also only in certain contexts. What’s “dangerous” for HTML may not be dangerous for SQL and vice versa, and they won’t pose risks until they get used in those contexts.

- Also, if we have data with HTML entities after escaping them, if we used escaped output with (`<%= %>)`, then `&lt;` wouldn’t become `<` but output literally as the text `&lt;`. We’d need to either unescape them then re-escape them via escaped output, or end up using unescaped output (`<%- %>`), which, like using `.innerHTML`, is undesirable as shown above.

### Validation Results
- Once the validation rules are applied, you can use `validationResult` to handle any validation errors:
    ```js
    const controller = (req, res, next) => {
    const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).render("index", {
            errors: errors.array(),
            });
        }

        // do stuff if successful
        res.redirect("/success");
        };
    ```

- This setup checks for any failed validation checks, and if there are any (the errors array is NOT empty), then the server sends a [400 status code](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/400), along with any errors that may be present, to our `index` view. Otherwise, we’re redirected to the `/success` route in our router.

## Documentation
- [The documentation for express-validator.](https://express-validator.github.io/docs/)
- [Validation chain methods.](https://express-validator.github.io/docs/api/validation-chain/)