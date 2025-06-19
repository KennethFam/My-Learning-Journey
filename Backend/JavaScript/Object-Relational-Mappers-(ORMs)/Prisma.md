# Prisma

## What is it?
- Prisma is a popular ORM in the Node.js landscape.
- Prisma ORM consists of several libraries, so we can use npm to install whichever one(s) our application needs.

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