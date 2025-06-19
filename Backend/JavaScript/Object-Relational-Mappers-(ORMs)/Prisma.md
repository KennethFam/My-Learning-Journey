# Prisma

## What is it?
- Prisma is a popular ORM in the Node.js landscape.
- Prisma ORM consists of several libraries, so we can use npm to install whichever one(s) our application needs.

## Installation
- Installing Prisma using npm:
    ```shell
    npm install prisma --save-dev
    ```

- Installing and generating Prisma Client:
    ```shell
    npm install @prisma/client
    ```
    ```shell
    npx prisma generate
    ```

## Commands
- Invoking the Prisma CLI:
    ```shell
    npx prisma
    ```

- Creating a [Prisma Schema](https://www.prisma.io/docs/orm/prisma-schema) file:
    ```shell
    npx prisma init --datasource-provider postgresql --output ../generated/prisma
    ```
    - This command does a few things:
        - Creates a new directory called `prisma` that contains a file called `schema.prisma`, which contains the Prisma Schema with your database connection variable and schema models.
        - Sets the `datasource` to PostgreSQL and the output to a custom location, respectively.
        - Creates the `.env` file in the root directory of the project, which is used for defining environment variables (such as your database connection)

        Note that the default schema created by `prisma init` uses PostgreSQL as the `provider`. If you didn't specify a provider with the `datasource-provider` option, you need to edit the `datasource` block to use the `postgresql` provider instead:
        ```
        datasource db {
            provider = "postgresql"
            url      = env("DATABASE_URL")
        }
        ```

- To map your data model to the database schema, you need to use the prisma migrate CLI commands:

    ```shell
    npx prisma migrate dev --name init
    ```

    This command does two things:
    1. It creates a new SQL migration file for this migration
    2. It runs the SQL migration file against the database
    
    - `generate` is called under the hood by default, after running `prisma migrate dev`. If the `prisma-client-js` generator is defined in your schema, this will check if `@prisma/client` is installed and install it if it's missing.

- Whenever you update your Prisma schema, you will have to update your database schema using either `prisma migrate dev` or `prisma db push`. This will keep your database schema in sync with your Prisma schema. These commands will also run `prisma generate` under the hood to re-generate your Prisma Client.

- Prisma Studio is a visual editor for the data in your database. Run this command in your terminal to invoke it:
    ```shell
    npx prisma studio
    ```

## Prisma Schema
- The Prisma schema is a file where you will define your models. For example, consider a message table in a chat app:
    ```
    model Message {
        id        Int      @id @default(autoincrement())
        content   String   @db.VarChar(255) 
        createdAt DateTime @default(now())
        author    User     @relation(fields: [authorId], references: [id])
        authorId  Int     
    }

    model User {
        // user's fields
    }
    ```

    There’s a bunch of new stuff up here. Prisma schema files are written in Prisma Schema Language. You can see how not only are there column definitions for the table, but also a relation to another table defined within the `Message` model.

    This schema file lives in your codebase and is tracked by version control. You can guess by now how useful this is.

## Prisma Client
- The client is a separate library that you will use to interact with your database. The Prisma client is a bit special in that it’s customized to your schema.

    ```js
    // instantiate the client
    import { PrismaClient } from '@prisma/client';
    const prisma = new PrismaClient();

    // when creating a new message
    await prisma.message.create({
        data: {
            content: 'Hello, world!',
            authorId: 1
        }
    })

    // when fetching all messages
    const messages = await prisma.message.findMany();
    ```

    Notice the `prisma.message` object? How did Prisma Client know that there’s a `message` model? Once you create or update the schema file, all you have to do is run
    ```shell
    npx prisma generate
    ```
    in the CLI, and Prisma ORM will generate the client for you. The client can handle all sorts of querying: joins, filters, sorting, pagination, and more.

    You might have a complex query that you just are unable to get right via the Prisma client, or if you feel more comfortable writing a query raw, you can do that too. Prisma Client supports raw queries as well.

## Prisma Migrate
- Prisma migrate is a tool that helps you perform database migrations. When you decide to change the schema in any way, you run a Prisma migration to apply the schema changes to the database. These changes are tracked in a `migrations` folder in your codebase.

## Prisma ORM Limitations
- In the [Using PostgreSQL lesson](https://www.theodinproject.com/lessons/nodejs-using-postgresql), we learned about Identity columns. PostgreSQL recommends the use of Identity columns, as they comply with the SQL standard. Prisma ORM, however, does not support these columns, and will create PostgreSQL specific [Serial Types](https://www.postgresql.org/docs/16/datatype-numeric.html#DATATYPE-SERIAL) instead. This most likely will not affect your projects, but it can be important to keep in mind. See this Stackoverflow answer for a short description on the [difference between Serial and Identity](https://stackoverflow.com/a/55300741/1882858).

## Links
- [Prisma website](https://www.prisma.io/orm)
- [Prisma's "Getting Started" Guide](https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/relational-databases-node-postgresql)
- [The Odin Project's Prisma Lesson](https://www.theodinproject.com/lessons/nodejs-prisma-orm)
- [Prisma API Reference](https://www.prisma.io/docs/orm/prisma-client)