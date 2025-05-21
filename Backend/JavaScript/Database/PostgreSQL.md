# PostgreSQL

## Introduction
- Data persistence is integral to the vast majority of web applications. Data persistence is achieved through databases. Being able to understand how to structure, build, and query your own database are important skills for any full-stack developer to have.
- Note that values encapsulated in `<>` are meant to be filled with your own values without `<>`. You will see this notation throughout the sections.

## Installation

<details>
<summary>Linux</summary>

1. Make sure the system is up to date
    - Before installing PostgreSQL, it’s a good idea to make sure the operating system is up to date. To update our system, run this command:
        ```bash
        sudo apt update && sudo apt upgrade
        ```

2. Install the PostgreSQL packages
    - After our system is up to date, we will install the packages for PostgreSQL.
        ```
        sudo apt install postgresql postgresql-contrib libpq-dev
        ```
    - After installation is complete, let’s start the server using this command:
        ```
        sudo systemctl start postgresql.service && systemctl status postgresql.service
        ```
    - If `postgresql` is active, you can press `Q` to quit the status screen and move on to the next step.

3. Setting up PostgreSQL
    - PostgreSQL is now running, but we have to configure it in order to be able to use it with our local Express applications.

    3.1 PostgreSQL roles
    - PostgreSQL authenticates via roles. A role is like a user, which is how we interact with the service. The default PostgreSQL installation has set up a `postgres` role that we can use. This is great, but that would mean having to switch to that role every time we wanted to do something with the database server.
    - Instead, we will set up our own role to avoid switching to the `postgres` role all the time.

    3.2 Creating a new role
    - We will be creating a new role with the same name as our Linux username. If you’re not sure of your Linux username, you can run the command whoami in your terminal to get it. Once you have that information ready, let’s create a role in PostgreSQL. The command to do so is:
        ```
        sudo -i -u postgres createuser --interactive
        ```
    - Remember that we want the role name to be the same as our Linux user name and be sure to make that new role a superuser. Setting up a role like this means we can leverage “peer authentication” making using the local database very easy.

    3.3 Creating the role database
    - One other important step in setting up PostgreSQL is that each role must have its own database of the same name. Without it, the role we just created will not be able to log in or interact with PostgreSQL.
    - You can try to run `psql` now, but you will get an error that the database does not exist. Not to worry, let’s create one to fix this:
        ```
        sudo -i -u postgres createdb <linux_username>
        ```
        - Note: If your username has any capital letters, you must surround it in quotes when running the below command.
    - Now our role is fully set up: we’ve got `<role_name>` and that role has a database.

    3.4 Securing our new role
    - One important thing that we have to do is to set up a password for our new role so that the data is protected. Now that our role is set up, we can actually use it to administer PostgreSQL. All you have to do is enter this command to get into the PostgreSQL prompt:
        ```
        psql
        ```
    - You should see the PostgreSQL prompt come up with the new role we just created, like so:
        ```
        role_name=#
        ```
    - If you do see a similar prompt, then we can create a password for the role like so:
        ```
        \password <role_name>
        ```
    - You’ll be prompted to enter a password and to verify it. Once you are done, the prompt will return to normal. Now, we will configure the permissions for our new role (note the semicolon at the end):
        ```
        GRANT ALL PRIVILEGES ON DATABASE <role_database_name> TO <role_name>;

        ```
        - Remember that you should change the `<role_database_name>` and `<role_name>` (they should both be the same)! If you see GRANT in response to the command, then you can type `\q` to exit the prompt.

    3.5 Saving access information in the environment
    - After finishing our configuration, the last step is save it into the environment to access later.
    - In order to save our password to the environment, we can run this command:
        ```
        echo 'export DATABASE_PASSWORD="<role_password>"' >> ~/.bashrc
        ```
        - Note here the name we’ve chosen for our environment variable: `DATABASE_PASSWORD`. Also, remember to update `<role_password>` in the command to what was set above!
    - Now, this variable lives in our environment for us to use. As the variable is new, we’ll want to reload the environment so that we can access it. To reload the environment, you can close and re-open your terminal.
    - Once that’s done, we can move to testing it out!
</details>

<details>
<summary>macOS</summary>

1. Make sure the system is up to date
    - Before running commands with homebrew, you’ll want to make sure things are up to date. Run the following commands one by one:
        ```bash
        brew update
        brew upgrade
        ```

2. Install the PostgreSQL packages
    - Now that we’ve ensured our packages are up to date, we will use brew to install PostgreSQL.
        ```
        brew install postgresql@14
        ```
    - After installation is complete, let’s start the server using this command:
        ```
        brew services start postgresql@14
        ```
    - If you are unsure about whether `postgresql` is active, it’s possible to check with this command:
        ```
        brew services info postgresql@14
        ```
    - If the `postgresql` service is active, move on to the next step.

3. Setting up PostgreSQL
    - PostgreSQL is now running, but we have to configure it in order to be able to use it with our local Express applications.

    3.1 PostgreSQL roles
    - PostgreSQL authenticates via roles. A role is like a user, and by default, the install on MacOS should have a role set up with your MacOS username. If you’re not sure of your username, you can run the command whoami in your terminal to get it. To verify that you have a role in PostgreSQL matching your username, enter the following command:
        ```
        psql postgres
        ```
        And you should see a prompt like this:
        ```
        psql (14.x (Homebrew))
        Type "help" for help.

        postgres=#
        ```
        Input `\du`, hit Return, and check that your MacOS username is the listed role name.
    
    3.2 Creating the role database
    - One other important step in setting up PostgreSQL is that each role must have its own database of the same name. We need this to login as the role matching our username. While still in the PostgreSQL session prompt, type the following command to create the new database. Make sure you include the semicolon.
        ```
        CREATE DATABASE <username>;
        ```
        - Note: If your username has any capital letters, you must surround it in quotes when running the below command.
    - Now our role is fully set up: we’ve got `<role_name>` and that role has a database. Enter the command `\q` to exit the interactive terminal for `postgres`.

    3.3 Securing our new role
    - One important thing we have to do is set up a password for our new role to protect the data. Now that we have our role, we can use it to administer PostgreSQL. All you have to do is enter this command to get into the PostgreSQL prompt for the database matching your user:
        ```
        psql
        ```
    - You should now see the PostgreSQL prompt come up like this:
        ```
        role_name=#
        ```
    - If you do see a similar prompt, then we can create a password for the role like so:
        ```
        \password <role_name>
        ```
    - You’ll be prompted to enter a password and to verify it. Once you are done, the prompt will return to normal. Now, we will configure the permissions for our new role (note the semicolon at the end):
        ```
        GRANT ALL PRIVILEGES ON DATABASE <role_database_name> TO <role_name>;
        ```
        - Remember that you should change the `<role_database_name>` and `<role_name>` (they should both be the same)! If you see GRANT in response to the command, then you can type `\q` to exit the prompt.
    
    3.4 Saving access information in the environment
    - After finishing our configuration, the last step is save it into the environment to access later.
    - In order to save our password to the environment, we can run this command:
        ```
        echo 'export DATABASE_PASSWORD="<role_password>"' >> ~/.zshrc
        ```
    - Note here the name we’ve chosen for our environment variable: `DATABASE_PASSWORD`. Also, remember to update `<role_password>` in the command to what was set above!
    - Now, this variable lives in our environment for us to use. As the variable is new, we’ll want to reload the environment so that we can access it. To reload the environment, you can close and re-open your terminal.
    - Once that’s done, we can move to testing it out!
</details>

## Node Package Installation
- Run:
    ```shell
    npm install pg
    ```
    - `pg` is short for `node-postgres`.

## Basic Shell Commands
- Launch the PostgreSQL shell:
    ```
    psql
    ```
- Exit the PostgreSQL shell:
    ```
    \q
    ```
- View the current dbs:
    ```
    \l
    ```
- Create a database:
    ```sql
    CREATE DATABASE <db_name>;
    ```
- Connect to a database:
    ```
    \c <db_name>
    ```
- Create a table:
    ```sql
    CREATE TABLE <relation_name> (
        <varname> <type> ...,
        <varname> <type> ...
    );
    ```
    - Example:
        ```sql
        CREATE TABLE usernames (
            id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
            username VARCHAR ( 255 ) 
        );
        ```
        - Entering the command `\d` will result in:
            ```
            |       Name       |   Type   |
            + -----------------+----------+
            | usernames        | table    |
            | usernames_id_seq | sequence |
            ```
            - What is `usernames_id_seq`? The `GENERATED ALWAYS AS IDENTITY` clause caused this to be made. It defined the `id` column as an [identity column](https://www.postgresql.org/docs/current/sql-createtable.html#SQL-CREATETABLE-PARMS-GENERATED-IDENTITY). PostgreSQL now automatically generates a value for this column. By default it starts at 1 and increments by 1 for each new row. Additionally, PostgreSQL implicitly creates usernames_id_seq, which is a sequence object, that keeps track of the next value to be used.
            - To avoid the `id_seq` outputs, do `\dt` instead.

- Check for relations:
    ```
    \d
    ```
- Insert (a) value(s) into a relation:
    ```sql
    INSERT INTO <relation_name> (<var_name>)
    VALUES (<val1>), (<val2>), ...;
    ```
    - Example:
        ```sql
        INSERT INTO usernames (username)
        VALUES ('Mao'), ('nevz'), ('Lofty');
        ```
- Selecting values from a relation (similar to sql):
    ```sql
    SELECT <var_name> FROM <relation_name>;
    ```
    - Example:
        ```sql
        SELECT * FROM usernames;
        ```
- Dropping a table:
    ```sql
    DROP TABLE <relation_name>
    ```

## Using node-postgres in Express

### Connecting to the database in JavaScript
- Connect to the db in JavaScript:
    ```js
    const { Pool } = require("pg");

    // All of the following properties should be read from environment variables
    // We're hardcoding them here for simplicity
    module.exports = new Pool({
        host: "localhost", // or wherever the db is hosted
        user: "<role_name>",
        database: "<db_name>",
        password: "<role_password>",
        port: 5432 // The default port
    });

    ```
    - An alternative to defining the connection information is through a [Connection URI](https://node-postgres.com/features/connecting#connection-uri). You’ll likely be using connection URIs when connecting with a hosted database service. Here’s what it would look like based on the above properties:
        ```js
        const { Pool } = require("pg");

        // Again, this should be read from an environment variable
        module.exports = new Pool({
            connectionString: "postgresql://<role_name>:<role_password>@localhost:5432/<db_name>"
        });
        ```

#### Two ways of connecting with pg
- `pg` as two ways to connect to a db: a client and a pool.
    - Client is an individual connection to the DB, which you manually manage. You open a connection, do your query, then close it. This is fine for one-off queries, but can become expensive if you’re dealing with a lot of queries. Wouldn’t this problem be alleviated if we could somehow hold onto a client? Yes!
    - Enter pool. As the name suggests, it’s a pool of clients. A pool holds onto connections. And when you query, it’ll programmatically open a new connection unless there’s an existing spare one. Perfect for web servers.

### Querying with pg
- Let's take a look at some example queries:
    ```js
    async function getAllUsernames() {
        const { rows } = await pool.query("SELECT * FROM usernames");
        return rows;
    }

    async function insertUsername(username) {
        await pool.query("INSERT INTO usernames (username) VALUES ($1)", [username]);
    }
    ```
    - The first one is self-explanatory, but what's the `$1`? `pg` provides what's called [query parameterization](https://node-postgres.com/features/queries#parameterized-query). Instead of passing user input directly, we pass it in an array as the second argument. `pg` handles the rest. Why is this needed? We’re passing user entered value i.e. `username` directly into our query. A nefarious user could enter something like `sike'); DROP TABLE usernames;` -- and wreak havoc. This is called [SQL Injection](https://en.wikipedia.org/wiki/SQL_injection). `pg` prevents this through parameterization.

### Populate the db via a script
- You might have noticed how cumbersome it is to create a table and populate it with data. Luckily, we have the power of c(n)ode by our side. We can automate it via a script.
    - Example:
        ```js
        #! /usr/bin/env node

        const { Client } = require("pg");

        const SQL = `
        CREATE TABLE IF NOT EXISTS usernames (
            id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
            username VARCHAR ( 255 )
        );

        INSERT INTO usernames (username) 
        VALUES
            ('Bryan'),
            ('Odin'),
            ('Damon');
        `;

        async function main() {
            console.log("seeding...");
            const client = new Client({
            connectionString: "postgresql://<role_name>:<role_password>@localhost:5432/top_users",
            });
            await client.connect();
            await client.query(SQL);
            await client.end();
            console.log("done");
        }

        main();
        ```
        - You can run this script using node or add it as a [script in package.json](https://stackoverflow.com/a/36433748).

## Local vs production dbs
- Great! You’ve just learned how to set up and use a local db with PostgreSQL. Local databases are ideal for development because they offer faster interactions, easier modifications, and don’t require an internet connection. This makes them especially useful when prototyping or testing new features.
- When you’re ready to make your project public, you’ll need to transition to a production database hosted on an external server independent of your local machine. A production database allows for global accessibility, scalability and more robust security. Most of the hosting providers introduced in the [deployment lesson](https://www.theodinproject.com/lessons/nodejs-using-postgresql) also offer database services. Now that we know the difference, lets see how we can populate a production database.

### Populating production dbs
- We’ve hardcoded our local db connection information in the script. Hence, the script only populates our local db. We need a way to populate our production db as well. One way to do this is by using environment variables, though this leads to unnecessary hassle. Why? Because now, the script can only populate the production db on the production server i.e. we’ll need to access the production server’s cli to run the script. Or, we could sneakily edit our environment file to point to the production db and run the script on our machine, and revert it.
- We should aim to make our script as independent from our codebase as possible.
- A far more painless approach is providing the connection information as an argument to the script. This way, we can run the script for local db as well as production db on our machine. You can access arguments via [process.argv](https://nodejs.org/docs/latest/api/process.html#processargv).
    ```shell
    # populating local db 
    node db/populatedb.js <local-db-url>

    # populating production db
    # run it from your machine once after deployment of your app & db
    node db/populatedb.js <production-db-url>
    ```

## Links
- [Documentation.](https://node-postgres.com/)
