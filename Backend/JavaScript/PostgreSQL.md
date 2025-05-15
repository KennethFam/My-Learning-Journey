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
            connectionString: "postgresql://<role_name>:<role_password>@localhost:5432/top_users"
        });
        ```


## Basic Commands
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