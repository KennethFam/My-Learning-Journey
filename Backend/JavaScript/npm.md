# npm

## What is npm?
- `npm` is the standard package manager for Node.js.
- `npm` installs, updates and manages downloads of dependencies of your project. Dependencies are pre-built pieces of code, such as libraries and packages, that your Node.js application needs to work.

## Basic Commands
- Note: Do not include `<` and `>` for package names. 
- If a project has a `package.json` file, by running
    ```shell
    npm install
    ```
    it will install everything the project needs, in the node_modules folder, creating it if it's not existing already.
- Installing a single package:
    ```shell
    npm install <package-name>
    ```
    Furthermore, since npm 5, this command adds `<package-name>` to the `package.json` file dependencies. Before version 5, you needed to add the flag `--save`. 

    Often you'll see more flags added to this command:
    - `--save-dev` installs and adds the entry to the package.json file devDependencies
    - `--no-save` installs but does not add the entry to the package.json file dependencies
    - `--save-optional` installs and adds the entry to the package.json file optionalDependencies
    - `--no-optional` will prevent optional dependencies from being installed

    Shorthands of the flags can also be used:
    - -S: `--save`
    - -D: `--save-dev`
    - -O: `--save-optional`
- The difference between devDependencies and dependencies is that the former contains development tools, like a testing library, while the latter is bundled with the app in production.
- As for the optionalDependencies the difference is that build failure of the dependency will not cause installation to fail. But it is your program's responsibility to handle the lack of the dependency.
- Updating packages:
    ```shell
    npm update
    ```
    `npm` will check all packages for a newer version that satisfies your versioning constraints.
    You can specify a single package to update as well:
    ```shell
    npm update <package-name>
    ```
- Installing specific version of a package:
    ```shell
    npm install <package-name>@<version>
    ```
- Running a task:
    ```shell
    npm run <task-name>
    ```
    Let's say we have:
    ```json
    {
        "scripts": {
            "start-dev": "node lib/server-development",
            "start": "node lib/server-production"
        }
    }
    ```
    We can use run like this:
    ```shell
        $ npm run watch
        $ npm run dev
        $ npm run prod
    ```
    - Note: $ is used to indicate the command prompt.