# Object Relational Mappers (ORMs)

## What are they?
- ORMs are tools that let you manipulate data in your database and are widely used in the software industry.

## Why do we need them?

### Challenges with raw SQLin'
- With the couple of projects you’ve done earlier, you might’ve run into the tediousness of raw SQL queries. Let’s briefly discuss some of these challenges.

#### So much more code
- You need a `SELECT` statement? Cool, write a query. Need a `SELECT` statement for a different table? Write another query. Or if your programmer senses are tingling, you could create a utility function for `SELECT`. But now you need a `SELECT` statement for specific columns? You’ll have to modify the utility function. What about filters and sorting? You get the point.

    Replicate the above for insert queries, and all of its variations. Or you could go in a different direction. Create modules per entity. For example, the books module would have:

    ```js
    class Book {
        async getBooks(filters) {}
        async getBookById(id) {}
        async createBook(data) {}
        async updateBook(id, data) {}
        async deleteBook(id) {}
        async getBookAuthors(id) {}
        async getBookGenres(id) {}
        // and so on
    }
    ```

    Or you could mix and match the two approaches. Create a Database class and inherit from it in your entity classes. Or you fancy composition, and just want to deal with pure functions.

    Now do this over and over for each entity, across multiple projects. You get the point. It can be argued that writing more code is not necessarily bad, as you’re learning and practicing, and it isn’t. It’s sufficient for solo projects and we even suggest you explore the above ideas. But as you work in teams, and with large scale software, it becomes imperative to have a standard way of interacting with the database, either with an external library or a homegrown solution. You’ll realize how much an ORM really helps you focus on writing code that’s business critical.

### Navigating the codebase
- When all database interactions are done in raw SQL, there’s nowhere in the codebase where you can understand the database tables, their relations, and column data types. You might have to log in to your database to make sense of what the codebase is doing. To attain a technical understanding of the project, you now rely on the codebase as well as access to the database.

    Most ORMs out there solve this problem by bringing database definitions into the codebase. This is called a “schema”. This allows you to quickly glance at the schema of a table and understand what columns it has and so forth.

## Altering production data
- Databases inevitably change as the requirements of the project evolve. You might have to add a new column or populate a new table with existing data. In technical terms, this is called a migration. Without an ORM or a similar library, you’ll be hand rolling these migrations, which will be error-prone and tedious. ORMs standardize migrations via changelogs, and have processes to deal with conflicts. Granted, you won’t be running as many migrations in your curriculum projects, but as you work professionally, you might do it every other day.
