# bcrypt.js

## Description
- `bcrypt` is a library used to securely store user passwords.

## Installation
- Run:
    ```shell
    npm install bcryptjs
    ```
    - There is another module called `bcrypt` that does the same thing, but it is written in C++ and is sometimes a pain to get installed. The C++ `bcrypt` is technically faster, so in the future it might be worth getting it running, but for now, the modules work the same so we can just use `bcryptjs`.

    - Once it’s installed you need to require it at the top of your `app.js` and then we are going to put it to use where we save our passwords to the DB, and where we compare them inside the `LocalStrategy`.

## Storing hashed passwords
- Password hashes are the result of passing the user’s password through a one-way hash function, which maps variable sized inputs to fixed size pseudo-random outputs.

- Example use of `bcrypt.hash` on a sign-up `post` handler:
    ```js
    app.post("/sign-up", async (req, res, next) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        await pool.query("insert into users (username, password) values ($1, $2)", [req.body.username, hashedPassword]);
        res.redirect("/");
    } catch (error) {
        console.error(error);
        next(error);
    }
    });
    ```
    - The second argument is the length of the “salt” to use in the hashing function; salting a password means adding extra random characters to it, the password plus the extra random characters are then fed into the hashing function. Salting is used to make a password hash output unique, even for users who use the same password, and to protect against [rainbow tables](https://en.wikipedia.org/wiki/Rainbow_table) and [dictionary attacks](https://en.wikipedia.org/wiki/Dictionary_attack).

        Usually, the salt is stored in the database alongside the hashed value. However, in our case, there is no need to store the salt separately because the `bcryptjs` hashing algorithm automatically incorporates the salt within the hash itself.

        The hash function is somewhat slow, so all of the DB storage stuff needs to go inside the callback. Check to see if you’ve got this working by signing up a new user with a password, then go look at your DB entries to see how it’s being stored. If you’ve done it right, your password should have been transformed into a really long random string.

## Comparing hashed passwords
- We will use the `bcrypt.compare()` function to validate the password input. The function compares the plain-text password in the request object to the hashed password. 

    If you were using raw password comparison before, you'll need to replace the `user.password !== password` expression inside your `LocalStrategy` function with the `bcrypt.compare()` function
    ```js
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
        // passwords do not match!
        return done(null, false, { message: "Incorrect password" });
    }
    ```

    You should now be able to log in using the new user you’ve created (the one with a hashed password). Unfortunately, users that were saved BEFORE you added bcrypt will no longer work, but that’s a small price to pay for security! (and a good reason to include bcrypt from the start on your next project)



    
