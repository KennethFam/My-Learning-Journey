# C++

## Information
- My notes will be taken from [learncpp](https://www.learncpp.com/).

## Background
- C++ utilizes a compiler to compile C++ code into machine language.
- Although C++ is technically considered a high-level language, newer programming languages (e.g. scripting languages) provide an even higher level of abstraction. Today, C++ would probably be more accurately described as a mid-level language. However, this also highlights one of C++’s key strengths: it often provides the ability to work at different levels of abstraction. You can choose to operate at a lower level for better performance and precision, or at a higher level for greater convenience and simplicity.
- The underlying design philosophy of C and C++ can be summed up as “trust the programmer” -- which is both wonderful and dangerous. C++ is designed to allow the programmer a high degree of freedom to do what they want. However, this also means the language often won’t stop you from doing things that don’t make sense, because it will assume you’re doing so for some reason it doesn’t understand. There are quite a few pitfalls that new programmers are likely to fall into if caught unaware. This is one of the primary reasons why knowing what you shouldn’t do in C/C++ is almost as important as knowing what you should do.

## What is C++ good at?
- C++ excels in situations where high performance and precise control over memory and other resources is needed. Here are a few types of applications that C++ would excel in:
    - Video games
    - Real-time systems (e.g. for transportation, manufacturing, etc…)
    - High-performance financial applications (e.g. high frequency trading)
    - Graphical applications and simulations
    - Productivity / office applications
    - Embedded software
    - Audio and video processing
    - Artificial intelligence and neural networks
- C++ also has a large number of high-quality 3rd party libraries available, which can shorten development times significantly.

## Do I need to know C before I do these tutorials?
- Nope! It’s perfectly fine to start with C++, and we’ll teach you everything you need to know (including pitfalls to avoid) along the way.
- Once you know C++, it should be pretty easy to learn standard C if you ever have the need. These days, C is mostly used for niche use cases: code that runs on embedded devices, when you need to interact with other languages that can only interface with C, etc… For most other cases, C++ is recommended.

## Simplistic approach to how C++ programs are developed.
- ![alt text](images/cpp_dev.png)
    - Read about steps 1-3 [here](https://www.learncpp.com/cpp-tutorial/introduction-to-cpp-development/) and steps 4-7 [here](https://www.learncpp.com/cpp-tutorial/introduction-to-the-compiler-linker-and-libraries/).

## IDEs (Integrated Development Environments) for C++
- [VS Code](https://code.visualstudio.com/docs/cpp/config-linux)
    - You can follow the steps to compile your program from here or you can use the terminal and do this:
        ```shell
        g++ filename.ext
        ```
        then 
        ```shell
        ./a.out
        ```
        - You can also change the name of the output file by doing:
            ```shell
            g++ -o new_name filename.ext
            ```
            then 
            ```shell
            ./new_name
            ```
            - Putting filename after g++ would work too.

- [Other Options](https://www.learncpp.com/cpp-tutorial/installing-an-integrated-development-environment-ide/)

- Find out how to start a C++ in one of the IDEs listed [here](https://www.learncpp.com/cpp-tutorial/compiling-your-first-program/).

## Common C++ Problems/Errors
- Common problems/errors and their solutions can be found [here](https://www.learncpp.com/cpp-tutorial/a-few-common-cpp-problems/).

## Compiler Configuration
- Use the `debug` build configuration when developing your programs. When you’re ready to release your executable to others, or want to test performance, use the `release` build configuration.

- More on setting compiler configurations [here](https://www.learncpp.com/cpp-tutorial/configuring-your-compiler-build-configurations/).

- Whenever you update your project settings, make the change for all build configurations (unless it’s not appropriate for some reason).

## Configuring Your Compiler 

### Extensions
- The C++ standard defines rules about how programs should behave in specific circumstances. And in most cases, compilers will follow these rules. However, many compilers implement their own changes to the language, often to enhance compatibility with other versions of the language (e.g. C99), or for historical reasons. These compiler-specific behaviors are called **compiler extensions**.

- Best practice: Disable compiler extensions to ensure your programs (and coding practices) remain compliant with C++ standards and will work on any system.

- Figure out how to configure your compiler extensions for your specific environment [here](https://www.learncpp.com/cpp-tutorial/configuring-your-compiler-compiler-extensions/).

### Warning and error levels
- In most cases, when the compiler encounters some kind of issue, it will emit diagnostic message (often called a diagnostic for short). The C++ standard does not define how diagnostic messages should be categorized, worded, or how those issues should affect the compilation of the program. However, modern compilers have conventionally adopted the following:
    - A diagnostic error (error for short) means the compiler has decided to halt compilation, because it either cannot proceed or deems the error serious enough to stop. Diagnostic errors generated by the compiler are often called compilation errors, compiler errors, or compile errors.
    - A diagnostic warning (warning for short) means the compiler has decided not to halt compilation. In such cases, the issue is simply ignored, and compilation proceeds.

- Key insight: Compilers determine whether a non-blocking issue is a warning or an error. While they usually align in their categorization, in some cases, compilers may not agree -- with one compiler emitting an error and another compiler emitting a warning for the same issue.

- By default, most compilers will only generate warnings about the most obvious issues. However, you can request your compiler be more assertive about providing warnings, and it is generally a good idea to do so.

- It is also possible to tell your compiler to treat all warnings as if they were errors (in which case, the compiler will halt compilation if it finds any warnings). This is a good way to enforce the recommendation that you should fix all warnings (if you lack self-discipline, which most of us do).

- Best practices:
    - Don’t let warnings pile up. Resolve them as you encounter them (as if they were errors). Otherwise a warning about a serious issue may be lost amongst warnings about non-serious issues.
    - Turn your warning levels up, especially while you are learning. The additional diagnostic information may help in identifying programming mistakes that can cause your program to malfunction.
    - Enable “Treat warnings as errors”. This will force you to resolve all issues causing warnings.

- Learn how to configure compiler errors for your specific environment [here](https://www.learncpp.com/cpp-tutorial/configuring-your-compiler-choosing-a-language-standard/).

### Choosing a language standard
- With many different versions of C++ available (C++98, C++03, C++11, C++14, C++17, C++20, C++23, etc…) how does your compiler know which one to use? Generally, a compiler will pick a standard to default to. Typically the default is not the most recent language standard -- many default to C++14, which is missing many of the latest and greatest features.

- The conventional names for language standards (e.g. C++20) are based on the year the language standard was published (or expected to be published). Because the year of publication is not actually known until it is close, language standards that are early in development sometimes use a development name instead. For example, C++20 is also known as C++2a.

- In professional environments, it’s common to choose a language standard that is one or two versions back from the latest finalized standard (e.g. if C++20 were the latest finalized version, that means C++14 or C++17). This is typically done to ensure the compiler makers have had a chance to resolve defects, and so that best practices for new features are well understood. Where relevant, this also helps ensure better cross-platform compatibility, as compilers on some platforms may not provide full support for newer language standards immediately.

- When changing your language standard (or any other project setting), make the change to all build configurations.

- Find out how to configure your C++ standard on your specific environment [here](https://www.learncpp.com/cpp-tutorial/configuring-your-compiler-choosing-a-language-standard/).

- [Code to check the language standard your compiler is running.](https://www.learncpp.com/cpp-tutorial/what-language-standard-is-my-compiler-using/)

<details>
<summary><strong>VS Code Configurations</strong></summary>

- `tasks.json` (debug build configuration)
    ```json
    {
        "tasks": [
            {
                "type": "cppbuild",
                "label": "C/C++: g++ build active file",
                "command": "/usr/bin/g++",
                "args": [
                    "-fdiagnostics-color=always",
                    "-g",
                    "-ggdb",                                    // extra debugging information for use by GDB
                    "-pedantic-errors",                         // treat non-standard code as errors
                    "-Wall",                                    //-Wall to -Wsign-conversion: makes compiler more assertive about warnings
                    "-Weffc++",
                    "-Wextra",
                    "-Wconversion",
                    "-Wsign-conversion",
                    "-Werror",                                  // treat warnings as errors
                    "-std=c++20",                               // use C++20 standard
                    "${file}",
                    "-o",
                    "${fileDirname}/${fileBasenameNoExtension}"
                ],
                "options": {
                    "cwd": "${fileDirname}"
                },
                "problemMatcher": [
                    "$gcc"
                ],
                "group": {
                    "kind": "build",
                    "isDefault": true
                },
                "detail": "Task generated by Debugger."
            }
        ],
        "version": "2.0.0"
    }
    ```

- `tasks.json` (release build configuration)
    ```json
    {
        "tasks": [
            {
                "type": "cppbuild",
                "label": "C/C++: g++ build active file",
                "command": "/usr/bin/g++",
                "args": [
                    "-fdiagnostics-color=always",
                    "-g",
                    "-O2",                                      // recommended optimization level for release builds
                    "-DNDEBUG",                                 // disables asserts during runtime for performance                              
                    "-pedantic-errors",                         // treat non-standard code as errors
                    "-Wall",                                    //-Wall to -Wsign-conversion: makes compiler more assertive about warnings
                    "-Weffc++",
                    "-Wextra",
                    "-Wconversion",
                    "-Wsign-conversion",
                    "-Werror",                                  // treat warnings as errors
                    "-std=c++20",                               // use C++20 standard
                    "${file}",
                    "-o",
                    "${fileDirname}/${fileBasenameNoExtension}"
                ],
                "options": {
                    "cwd": "${fileDirname}"
                },
                "problemMatcher": [
                    "$gcc"
                ],
                "group": {
                    "kind": "build",
                    "isDefault": true
                },
                "detail": "Task generated by Debugger."
            }
        ],
        "version": "2.0.0"
    }
    ```

- `settings.json`
    ```json
    {
        "files.insertFinalNewline": true,
        "notebook.insertFinalNewline": true,
        "C_Cpp.default.cppStandard": "c++20"    // configure Intellisense to use the same language standard
    }
    ```
</details>

## Syntax

### The `main` function
- Every C++ program must have a special function named `main` (all lower case letters).

- When the program is run, the statements inside of `main` are executed in sequential order.

- Programs typically terminate (finish running) after the last statement inside function main has been executed (though programs may abort early in some circumstances, or do some cleanup afterwards).

### Comments
- A comment is a programmer-readable note that is inserted directly into the source code of the program. Comments are ignored by the compiler and are for the programmer’s use only.

- In C++ there are two different styles of comments, both of which serve the same purpose: to help programmers document the code in some way.

#### Single-line comments
- The `//` symbol begins a C++ single-line comment, which tells the compiler to ignore everything from the `//` symbol to the end of the line. For example:
    ```cpp
    std::cout << "Hello world!"; // Everything from here to the end of the line is ignored
    ```

- Typically, the single-line comment is used to make a quick comment about a single line of code like so:
    ```cpp
    std::cout << "Hello world!\n"; // std::cout lives in the iostream library
    std::cout << "It is very nice to meet you!\n"; // these comments make the code hard to read
    std::cout << "Yeah!\n"; // especially when lines are different lengths
    ```

- Having comments to the right of a line can make both the code and the comment hard to read, particularly if the line is long. If the lines are fairly short, the comments can simply be aligned (usually to a tab stop), like so:
    ```cpp
    std::cout << "Hello world!\n";                 // std::cout lives in the iostream library
    std::cout << "It is very nice to meet you!\n"; // this is much easier to read
    std::cout << "Yeah!\n";                        // don't you think so?
    ```

- However, if the lines are long, placing comments to the right can make your lines really long. In that case, single-line comments are often placed above the line it is commenting:
    ```cpp
    // std::cout lives in the iostream library
    std::cout << "Hello world!\n";

    // this is much easier to read
    std::cout << "It is very nice to meet you!\n";

    // don't you think so?
    std::cout << "Yeah!\n";
    ```

#### Multi-line Comments
- The `/*` and `*/` pair of symbols denotes a C-style multi-line comment. Everything in between the symbols is ignored.
    ```cpp
    /* This is a multi-line comment.
       This line will be ignored.
       So will this one. */
   ```

- Since everything between the symbols is ignored, you will sometimes see programmers “beautify” their multi-line comments:
    ```cpp
    /* This is a multi-line comment.
     * the matching asterisks to the left
     * can make this easier to read
     */
    ```

- Multi-line style comments can not be nested. Consequently, the following will have unexpected results:
    ```cpp
    /* This is a multi-line /* comment */ this is not inside the comment */
    // The above comment ends at the first */, not the second */
    ```
    - When the compiler tries to compile this, it will ignore everything from the first `/*` to the first `*/`. Since this is not inside the comment `*/` is not considered part of the comment, the compiler will try to compile it. That will inevitably result in a compile error.
    - Don’t use multi-line comments inside other multi-line comments. Wrapping single-line comments inside a multi-line comment is okay.

#### Proper use of comments
- Typically, comments should be used for three things. First, for a given library, program, or function, comments are best used to describe what the library, program, or function, does. These are typically placed at the top of the file or library, or immediately preceding the function. For example:
    ```cpp
    // This program calculates the student's final grade based on their test and homework scores.
    ```
    ```cpp
    // This function uses Newton's method to approximate the root of a given equation.
    ```
    ```cpp
    // The following lines generate a random item based on rarity, level, and a weight factor.
    ```
    All of these comments give the reader a good idea of what the library, program, or function is trying to accomplish without having to look at the actual code. The user (possibly someone else, or you if you’re trying to reuse code you’ve previously written) can tell at a glance whether the code is relevant to what he or she is trying to accomplish. This is particularly important when working as part of a team, where not everybody will be familiar with all of the code.

- Second, within a library, program, or function described above, comments can be used to describe how the code is going to accomplish its goal.
    ```cpp
    /* To calculate the final grade, we sum all the weighted midterm and homework scores
       and then divide by the number of scores to assign a percentage, which is
       used to calculate a letter grade. */
    ```
    ```cpp
    // To generate a random item, we're going to do the following:
    // 1) Put all of the items of the desired rarity on a list
    // 2) Calculate a probability for each item based on level and weight factor
    // 3) Choose a random number
    // 4) Figure out which item that random number corresponds to
    // 5) Return the appropriate item
    ```
    These comments give the user an idea of how the code is going to accomplish its goal without having to understand what each individual line of code does.

- Third, at the statement level, comments should be used to describe why the code is doing something. A bad statement comment explains what the code is doing. If you ever write code that is so complex that needs a comment to explain what a statement is doing, you probably need to rewrite your statement, not comment it. Here are some examples of bad line comments and good statement comments.
    - Bad comment:
        ```cpp
        // Set sight range to 0
        sight = 0;
        ```
        Reason: We already can see that sight is being set to 0 by looking at the statement
    - Good comment:
        ```cpp
        // The player just drank a potion of blindness and can not see anything
        sight = 0;
        ```
        Reason: Now we know why the player’s sight is being set to 0
    - Bad comment:
        ```cpp
        // Calculate the cost of the items
        cost = quantity * 2 * storePrice;
        ```
        Reason: We can see that this is a cost calculation, but why is quantity multiplied by 2?
    - Good Comment:
        ```cpp
        // We need to multiply quantity by 2 here because they are bought in pairs
        cost = quantity * 2 * storePrice;
        ```
        Reason: Now we know why this formula makes sense.

- Programmers often have to make a tough decision between solving a problem one way, or solving it another way. Comments are a great way to remind yourself (or tell somebody else) the reason you made one decision instead of another. Good comments:
    ```cpp
    // We decided to use a linked list instead of an array because
    // arrays do insertion too slowly.
    ```
    ```cpp
    // We're going to use Newton's method to find the root of a number because
    // there is no deterministic way to solve these equations.
    ```

- Finally, comments should be written in a way that makes sense to someone who has no idea what the code does. It is often the case that a programmer will say “It’s obvious what this does! There’s no way I’ll forget about this”. Guess what? It’s not obvious, and you will be amazed how quickly you forget. :) You (or someone else) will thank you later for writing down the what, how, and why of your code in human language. Reading individual lines of code is easy. Understanding what goal they are meant to accomplish is not.

- Best Practice: Comment your code liberally, and write your comments as if speaking to someone who has no idea what the code does. Don’t assume you’ll remember why you made specific choices.

#### Commenting out code
- Converting one or more lines of code into a comment is called **commenting out your code**. This provides a convenient way to (temporarily) exclude parts of your code from being included in your compiled program

- A quick way to comment out code is to highlight the line(s) you want to comment out and press `ctrl` + `/` (`cmd` instead of `ctrl` for Mac) (shortcut may vary per ide). You should also just use `//` for a single line or `/* *\` for multiple lines. 

- There are quite a few reasons you might want to do this:
    1. You’re working on a new piece of code that won’t compile yet, and you need to run the program. The compiler won’t let you compile the code if there are compiler errors. Commenting out the code that won’t compile will allow the program to compile so you can run it. When you’re ready, you can uncomment the code, and continue working on it.
    2. You’ve written new code that compiles but doesn’t work correctly, and you don’t have time to fix it until later. Commenting out the broken code will ensure the broken code doesn’t execute and cause problems until you can fix it.
    3. To find the source of an error. If a program isn’t producing the desired results (or is crashing), it can sometimes be useful to disable parts of your code to see if you can isolate what’s causing it to not work correctly. If you comment out one or more lines of code, and your program starts working as expected (or stops crashing), odds are whatever you last commented out was part of the problem. You can then investigate why those lines of code are causing the problem.
    4. You want to replace one piece of code with another piece of code. Instead of just deleting the original code, you can comment it out and leave it there for reference until you’re sure your new code works properly. Once you are sure your new code is working, you can remove the old commented out code. If you can’t get your new code to work, you can always delete the new code and uncomment the old code to revert to what you had before.

#### Summary
- At the library, program, or function level, use comments to describe what.
- Inside the library, program, or function, use comments to describe how.
- At the statement level, use comments to describe why.

### Data and values
- Programs are collections of instructions that manipulate data to produce a desired result. In computing, data is any information that can be moved, processed, or stored by a computer.

- In programming, a single piece of data is called a value (sometimes called a data value). Common examples of values include:
    - Numbers (e.g. `5` or `-6.7`).
    - Characters, which are placed between single-quotes (e.g. `'H'` or `'$'`). Only a single symbol may be used.
    - Text, which must be placed between double-quotes (e.g. `"Hello"` or `"H"`). Text can contain 0 or more characters.
    - In general, values placed in single-quotes are interpreted by the compiler as character values, values placed in double-quotes are interpreted by the compiler as text values, and numeric values are not quoted.

- Values that are placed directly into the source code are called literals.

- If a character value or text value is not properly quoted, the compiler will try to interpret that value as if it were C++ code. That will almost always result in a compilation error.

- Literals are the easiest way to provide values for your program, but they have some shortcomings. Literals are read-only values, so their values can’t be modified. Thus, if we want to store data in memory, we need some other way to do this.

#### Random Access Memory (RAM)
- The main memory in a computer is called **Random Access Memory** (often called **RAM** for short). When we run a program, the operating system loads the program into RAM. Any data that is hardcoded into the program itself (e.g. text such as “Hello, world!”) is loaded at this point.

- The operating system also reserves some additional RAM for the program to use while it is running. Common uses for this memory are to store values entered by the user, to store data read in from a file or network, or to store values calculated while the program is running (e.g. the sum of two values) so they can be used again later.

- You can think of RAM as a series of numbered boxes that can be used to store data while the program is running.

#### Objects and variables
- An object is used to store a value in memory. It represents a region of storage that can hold a value. Although objects in C++ can be unnamed (anonymous), more often we name our objects using an identifier. A variable is an object that has a name (identifier).

- In general programming, the term object typically refers to an unnamed object in memory, a variable, or a function. In C++, the term object has a narrower definition that excludes functions. When we use the term object in this tutorial series, this narrower C++ definition is the one we mean.

#### Variable definition
- In order to use a variable in our program, we need to tell the compiler that we want one. The most common way to do this is by use of a special kind of declaration statement called a definition. Here’s an example of defining a variable named `x`:
    ```cpp
    int x; // define a variable named x (of type int)
    ```
    - At **compile-time** (when the program is being compiled), when encountering this statement, the compiler makes a note to itself that we want a variable with the name `x`, and that the variable has the data type int. From that point forward (with some limitations based on scope), whenever we use the identifier x in our code, the compiler will know that we are referring to this variable. The compiler handles all of the other details about this variable for us, including determining how much memory the object will need, in what kind of storage the object will be placed (e.g. in RAM or a CPU register), where it will be placed relative to other objects, when it will be created and destroyed, etc.

- A variable created via a definition statement is said to be defined at the point where the definition statement is placed.

#### Variable Creation
- At **runtime** (when the program is loaded into memory and run), each object is given an actual storage location (such as RAM, or a CPU register) that it can use to store values. The process of reserving storage for an object’s use is called **allocation**. Once allocation has occurred, the object has been created and can be used. For example, let’s say that variable `x` is instantiated at memory location 140. Whenever the program uses variable `x`, it will access the value in memory location 140.

#### Data types
- A **data type** (more commonly just called a **type**) determines what kind of value (e.g. a number, a letter, text, etc…) the object will store.

- `int` is short for integer and is a data type in C++. An integer is a number that can be written without a fractional component, such as `4`, `27`, `0`, `-2`, or `-12`. Defining an integer named `x` would look like this:
    ```cpp
    int x
    ```

- The data type of an object must be known at compile-time (so the compiler knows how much memory that object requires). In C++, that type can not be changed without recompiling the program. This means an integer variable can only hold integer values. If you want to store some other kind of value, you’ll need to use a different type.

- `double` is a data type in C++ that can store numbers with fractional components. Defining an double named `x` would look like this:
    ```cpp
    double x
    ```

#### Defining multiple variables
- It is possible to define multiple variables of the same type in a single statement by separating the names with a comma. The following code snippet:
    ```cpp
    int a;
    int b;
    ```
    is effectively the same as this one:
    ```cpp
    int a, b;
    ```

- When defining multiple variables this way, there are three common mistakes that new programmers tend to make (neither serious, since the compiler will catch these and ask you to fix them):
    1. Giving each variable a type when defining variables in sequence
        ```cpp
        int a, int b; // wrong (compiler error)

        int a, b; // correct
        ```
    2. Trying to define variables of different types in the same statement, which is not allowed. Variables of different types must be defined in separate statements.
        ```cpp
        int a, double b; // wrong (compiler error)

        int a; double b; // correct (but not recommended)

        // correct and recommended (easier to read)
        int a;
        double b;
        ```
    - We’ll discuss the third issue next lesson, when we cover initialization of variables.

- Best practice: Although the language allows you to do so, avoid defining multiple variables of the same type in a single statement. Instead, define each variable in a separate statement on its own line (and then use a single-line comment to document what it is used for).

#### Summary 
- In C++, we use objects to access memory. A named object is called a variable. Each variable has an identifier, a type, and a value (and some other attributes that aren’t relevant here). A variable’s type is used to determine how the value in memory should be interpreted.

- Variables are actually created at runtime, when memory is allocated for their use.

### Variable assignment and initialization

#### Variable assignment
- After a variable has been defined, you can give it a value (in a separate statement) using the `=` operator. This process is called **assignment**, and the `=` operator is called the **assignment operator**.
    ```cpp
    int width; // define an integer variable named width
    width = 5; // assignment of value 5 into variable width

    // variable width now has value 5
    ```

- By default, assignment copies the value on the right-hand side of the `=` operator to the variable on the left-hand side of the operator. This is called **copy-assignment**.

- Once a variable has been given a value, the value of that variable can be printed via `std::cout` and the `<<` operator.

- Assignment can be used whenever we want to change the value held by a variable. Here’s an example where we use assignment twice:
    ```cpp
    #include <iostream>

    int main()
    {
        int width; // define a variable named width
        width = 5; // copy assignment of value 5 into variable width

        std::cout << width; // prints 5

        width = 7; // change value stored in variable width to 7

        std::cout << width; // prints 7

        return 0;
    }
    ```
    Output: 
    ```
    57
    ```
    - When this program is run, execution begins at the top of the `main` function and proceeds sequentially. First, memory for variable `width` is allocated. We then assign `width` the value `5`. When we output the value of `width`, it prints `5` to the console. When we then assign value `7` to `width`, any prior value (in this case `5`) is overwritten. Thus when we output `width` again, this time it prints `7`.

- Normal variables can only hold one value at a time.

#### Variable initialization
- One downside of assignment is that assigning a value to a just-defined object requires two statements: one to define the variable, and another to assign the value. These two steps can be combined. When an object is defined, you can optionally provide an initial value for the object. The process of specifying an initial value for an object is called **initialization**, and the syntax used to initialize an object is called an **initializer**. Informally, the initial value is often called an “initializer” as well. For example, the following statement both defines a variable named `width` (of type `int`) and initializes it with the value `5`:
    ```cpp
    #include <iostream>

    int main()
    {
        int width { 5 };    // define variable width and initialize with initial value 5
        std::cout << width; // prints 5

        return 0;
    }
    ```
    - In the above initialization of variable `width`, `{ 5 }` is the initializer, and `5` is the initial value.

#### Different forms of initialization
- There are 5 common forms of initialization in C++:
    ```cpp
    int a;         // default-initialization (no initializer)

    // Traditional initialization forms:
    int b = 5;     // copy-initialization (initial value after equals sign)
    int c ( 6 );   // direct-initialization (initial value in parenthesis)

    // Modern initialization forms (preferred):
    int d { 7 };   // direct-list-initialization (initial value in braces)
    int e {};      // value-initialization (empty braces)
    ```
    - You may see the above forms written with different spacing (e.g. `int b=5;`, `int c(6);`, `int d{7};`, `int e{};`). Whether you use extra spaces for readability or not is a matter of personal preference.

#### Default-initialization
- When no initializer is provided, this is called **default-initialization**. In many cases, default-initialization performs no initialization, and leaves the variable with an indeterminate value (a value that is not predictable, sometimes called a “garbage value”).

#### Copy-initialization
- When an initial value is provided after an equals sign, this is called **copy-initialization**. This form of initialization was inherited from the C language.
    ```cpp
    int width = 5; // copy-initialization of value 5 into variable width
    ```
    - Much like copy-assignment, this copies the value on the right-hand side of the equals into the variable being created on the left-hand side. In the above snippet, variable `width` will be initialized with value `5`.

- Copy-initialization had fallen out of favor in modern C++ due to being less efficient than other forms of initialization for some complex types. However, C++17 remedied the bulk of these issues, and copy-initialization is now finding new advocates. You will also find it used in older code (especially code ported from C), or by developers who simply think it looks more natural and is easier to read.

- Copy-initialization is also used whenever values are implicitly copied, such as when passing arguments to a function by value, returning from a function by value, or catching exceptions by value.

#### Direct-initialization
- When an initial value is provided inside parenthesis, this is called **direct-initialization**.
    ```cpp
    int width ( 5 ); // direct initialization of value 5 into variable width
    ```

- Direct-initialization was initially introduced to allow for more efficient initialization of complex objects (those with class types). Just like copy-initialization, direct-initialization had fallen out of favor in modern C++, largely due to being superseded by direct-list-initialization. However, direct-list-initialization has a few quirks of its own, and so direct-initialization is once again finding use in certain cases.

- Direct-initialization is also used when values are explicitly cast to another type (e.g. via `static_cast`).

#### List-initialization
- The modern way to initialize objects in C++ is to use a form of initialization that makes use of curly braces. This is called `list-initialization` (or `uniform initialization` or `brace initialization`).

- List-initialization comes in two forms:
    ```cpp
    int width { 5 };    // direct-list-initialization of initial value 5 into variable width (preferred)
    int height = { 6 }; // copy-list-initialization of initial value 6 into variable height (rarely used)
    ```

- Prior to C++11, some types of initialization required using copy-initialization, and other types of initialization required using direct-initialization. Copy-initialization can be hard to differentiate from copy-assignment (because both use an =). And direct-initialization can be difficult to differentiate from function-related operations (because both use parentheses).

- List-initialization was introduced to provide a initialization syntax that works in almost all cases, behaves consistently, and has an unambiguous syntax that makes it easy to tell where we’re initializing an object.

#### List-initialization disallows narrowing conversions
- One of the primary benefits of list-initialization for new C++ programmers is that “narrowing conversions” are disallowed. This means that if you try to list-initialize a variable using a value that the variable can not safely hold, the compiler is required to produce a diagnostic (compilation error or warning) to notify you. For example:
    ```cpp
    int main()
    {
        // An integer can only hold non-fractional values.
        // Initializing an int with fractional value 4.5 requires the compiler to convert 4.5 to a value an int can hold.
        // Such a conversion is a narrowing conversion, since the fractional part of the value will be lost.

        int w1 { 4.5 }; // compile error: list-init does not allow narrowing conversion

        int w2 = 4.5;   // compiles: w2 copy-initialized to value 4
        int w3 (4.5);   // compiles: w3 direct-initialized to value 4

        return 0;
    }
    ```
    - On line 7 of the above program, we’re using a value (`4.5`) with a fractional component (`.5`) to list-initialize an integer variable (which can only hold non-fractional values). Because this is a narrowing conversion, the compiler is required to generate a diagnostic in such cases.
    - Copy-initialization and direct-initialization both silently drop the .5 and initialize the variable with the value 4 (which probably isn’t what we want). Your compiler may warn you about this (since losing data is rarely desired), but it also may not.

- Note that this restriction on narrowing conversions only applies to the list-initialization, not to any subsequent assignments to the variable:
    ```cpp
    int main()
    {
        int w1 { 4.5 }; // compile error: list-init does not allow narrowing conversion of 4.5 to 4

        w1 = 4.5;       // okay: copy-assignment allows narrowing conversion of 4.5 to 4

        return 0;
    }
    ```

#### Value-initialization and zero-initialization
- When a variable is initialized using an empty set of braces, a special form of list-initialization called **value-initialization** takes place. In most cases, value-initialization will implicitly initialize the variable to zero (or whatever value is closest to zero for a given type). In cases where zeroing occurs, this is called **zero-initialization**. 
    ```cpp
    int width {}; // value-initialization / zero-initialization to value 0
    ```

- For class types, value-initialization (and default-initialization) may instead initialize the object to predefined default values, which may be non-zero.

#### List-initialization is the preferred form of initialization in modern C++
- List-initialization (including value-initialization) is generally preferred over the other initialization forms because it works in most cases (and is therefore most consistent), it disallows narrowing conversions (which we normally don’t want), and it supports initialization with a list of values.

- When should I initialize with { 0 } vs {}?
    - Use direct-list-initialization when you’re actually using the initial value:
        ```cpp
        int x { 0 };    // direct-list-initialization with initial value 0
        std::cout << x; // we're using that 0 value here
        ```
    - Use value-initialization when the object’s value is temporary and will be replaced:
        ```cpp
        int x {};      // value initialization
        std::cin >> x; // we're immediately replacing that value so an explicit 0 would be meaningless
        ```

#### Initialize your variables
- Initialize your variables upon creation. You may eventually find cases where you want to ignore this advice for a specific reason (e.g. a performance critical section of code that uses a lot of variables), and that’s okay, as long as the choice is made deliberately.

#### Instantiation
- The term **instantiation** is a fancy word that means a variable has been created (allocated) and initialized (this includes default initialization). An instantiated object is sometimes called an **instance**. Most often, this term is applied to class type objects, but it is occasionally applied to objects of other types as well.

#### Initializing multiple variables
- We noted that best practice is to avoid multiple variable declaration syntax altogether. However, since you may encounter other code that uses this style, it’s still useful to talk a little bit more about it, if for no other reason than to reinforce some of the reasons you should be avoiding it. 

- You can initialize multiple variables defined on the same line:
    ```cpp
    int a = 5, b = 6;          // copy-initialization
    int c ( 7 ), d ( 8 );      // direct-initialization
    int e { 9 }, f { 10 };     // direct-list-initialization
    int i {}, j {};            // value-initialization
    ```

- Unfortunately, there’s a common pitfall here that can occur when the programmer mistakenly tries to initialize both variables by using one initialization statement:
    ```cpp
    int a, b = 5;     // wrong: a is not initialized to 5!
    int a = 5, b = 5; // correct: a and b are initialized to 5
    ```
    - In the top statement, variable `a` will be left uninitialized, and the compiler may or may not complain. If it doesn’t, this is a great way to have your program intermittently crash or produce sporadic results.

- The best way to remember that this is wrong is to note that each variable can only be initialized by its own initializer:
    ```cpp
    int a = 4, b = 5; // correct: a and b both have initializers
    int a, b = 5;     // wrong: a doesn't have its own initializer
    ``

#### Unused initialized variables warnings
- Modern compilers will typically generate warnings if a variable is initialized but not used (since this is rarely desirable). And if “treat warnings as errors” is enabled, these warnings will be promoted to errors and cause the compilation to fail.

- There are a few easy ways to fix this.
    1. If the variable really is unused and you don’t need it, then the easiest option is to remove the definition of x (or comment it out). After all, if it’s not used, then removing it won’t affect anything.
    2. Another option is to simply use the variable somewhere, but this requires some effort to write code that uses it, and has the downside of potentially changing your program’s behavior.

##### The `[[maybe_unused]]` attribute `C++17`
- In some cases, neither of the above options are desirable. Consider the case where we have a set of math/physics values that we use in many different programs:
    ```cpp
    #include <iostream>

    int main()
    {
        // Here's some math/physics values that we copy-pasted from elsewhere
        double pi { 3.14159 };
        double gravity { 9.8 };
        double phi { 1.61803 };

        std::cout << pi << '\n';  // pi is used
        std::cout << phi << '\n'; // phi is used

        // The compiler will likely complain about gravity being defined but unused

        return 0;
    }
    ```
    - If we use these values a lot, we probably have these saved somewhere and copy/paste/import them all together. However, in any program where we don’t use all of these values, the compiler will likely complain about each variable that isn’t actually used. In the above example, we could easily just remove the definition of gravity. But what if there were 20 or 30 variables instead of 3? And what if we use them in multiple places? Going through the list of variables to remove/comment out the unused ones takes time and energy. And later if we need one that we’ve previously removed, we’ll have to spend more time and energy to go back and re-add/uncomment it. To address such cases, C++17 introduced the `[[maybe_unused]]` attribute, which allows us to tell the compiler that we’re okay with a variable being unused. The compiler will not generate unused variable warnings for such variables. The following program should generate no warnings/errors:
        ```cpp
        #include <iostream>

        int main()
        {
            [[maybe_unused]] double pi { 3.14159 };  // Don't complain if pi is unused
            [[maybe_unused]] double gravity { 9.8 }; // Don't complain if gravity is unused
            [[maybe_unused]] double phi { 1.61803 }; // Don't complain if phi is unused

            std::cout << pi << '\n';
            std::cout << phi << '\n';

            // The compiler will no longer warn about gravity not being used

            return 0;
        }
        ```
        - Additionally, the compiler will likely optimize these variables out of the program, so they have no performance impact.

- The `[[maybe_unused]]` attribute should only be applied selectively to variables that have a specific and legitimate reason for being unused (e.g. because you need a list of named values, but which specific values are actually used in a given program may vary). Otherwise, unused variables should be removed from the program.

### Introduction to iostream: cout, cin, and endl

#### The input/output library
- The input/output library (io library) is part of the C++ standard library that deals with basic input and output. We’ll use the functionality in this library to get input from the keyboard and output data to the console. The io part of iostream stands for input/output.

- To use the functionality defined within the iostream library, we need to include the iostream header at the top of any code file that uses the content defined in iostream, like so:
    ```cpp
    #include <iostream>

    // rest of code that uses iostream functionality here
    ```

#### `std::cout`
- The iostream library contains a few predefined variables for us to use. One of the most useful is `std::cout`, which allows us to send data to the console to be printed as text. `cout` stands for “character output”. As a reminder, here’s our Hello world program:
    ```cpp
    #include <iostream> // for std::cout

    int main()
    {
        std::cout << "Hello world!"; // print Hello world! to console

        return 0;
    }
    ```
    - In this program, we have included iostream so that we have access to `std::cout`. Inside our main function, we use `std::cout`, along with the insertion operator (`<<`), to send the text `Hello world!` to the console to be printed.

- `std::cout` can not only print text, it can also print numbers:
    ```cpp
    #include <iostream> // for std::cout

    int main()
    {
        std::cout << 4; // print 4 to console

        return 0;
    }
    ```
    Output:
    ```
    4
    ```

- It can also be used to print the value of variables:
    ```cpp
    #include <iostream> // for std::cout

    int main()
    {
        int x{ 5 }; // define integer variable x, initialized with value 5
        std::cout << x; // print value of x (5) to console
        return 0;
    }
    ```
    Output:
    ```
    5
    ```

- To print more than one thing on the same line, the insertion operator (`<<`) can be used multiple times in a single statement to concatenate (link together) multiple pieces of output. For example:
    ```cpp
    #include <iostream> // for std::cout

    int main()
    {
        std::cout << "Hello" << " world!";
        return 0;
    }
    ```
    Output:
    ```
    Hello world!
    ```
    - This uses the << operator twice, first to output `Hello` and then to output `world!`.

- Tip: It might be helpful to imagine the `<<` operator (and `>>` operator) as a conveyor belt that moves data in the direction indicated. In this case, when the content is conveyed to `std::cout`, it gets output.

- Here’s another example where we print both text and the value of a variable in the same statement:
    ```cpp
    #include <iostream> // for std::cout

    int main()
    {
        int x{ 5 };
        std::cout << "x is equal to: " << x;
        return 0;
    }
    ```
    Output:
    ```
    x is equal to: 5
    ```

#### Using `std::endl` to output a newline
- What would you expect this program to print?
    ```cpp
    #include <iostream> // for std::cout

    int main()
    {
        std::cout << "Hi!";
        std::cout << "My name is Alex.";
        return 0;
    }
    ```
    Output:
    ```
    Hi!My name is Alex.
    ```
    - Separate output statements don’t result in separate lines of output on the console. If we want to print separate lines of output to the console, we need to tell the console to move the cursor to the next line. We can do that by outputting a newline. A **newline** is an OS-specific character or sequence of characters that moves the cursor to the start of the next line.

- One way to output a newline is to output `std::endl` (which stands for “end line”):
    ```cpp
    #include <iostream> // for std::cout and std::endl

    int main()
    {
        std::cout << "Hi!" << std::endl; // std::endl will cause the cursor to move to the next line
        std::cout << "My name is Alex." << std::endl;

        return 0;
    }
    ```
    Output:
    ```
    Hi!
    My name is Alex.
    ```
    - Tip: In the above program, the second `std::endl` isn’t technically necessary, since the program ends immediately afterward. However, it serves a few useful purposes.
        1. It helps indicate that the line of output is a “complete thought” (as opposed to partial output that is completed somewhere later in the code). In this sense, it functions similarly to using a period in standard English.
        2. It positions the cursor on the next line, so that if we later add additional lines of output (e.g. have the program say “bye!”), those lines will appear where we expect (rather than appended to the prior line of output).
        3. After running an executable from the command line, some operating systems do not output a new line before showing the command prompt again. If our program does not end with the cursor on a new line, the command prompt may appear appended to the prior line of output, rather than at the start of a new line as the user would expect.

- Best practice: Output a newline whenever a line of output is complete.

#### `std::cout` is buffered
- Consider a rollercoaster ride at your favorite amusement park. Passengers show up (at some variable rate) and get in line. Periodically, a train arrives and boards passengers (up to the maximum capacity of the train). When the train is full, or when enough time has passed, the train departs with a batch of passengers, and the ride commences. Any passengers unable to board the current train wait for the next one.
    - This analogy is similar to how output sent to `std::cout` is typically processed in C++. Statements in our program request that output be sent to the console. However, that output is typically not sent to the console immediately. Instead, the requested output “gets in line”, and is stored in a region of memory set aside to collect such requests (called a **buffer**). Periodically, the buffer is flushed, meaning all of the data collected in the **buffer** is transferred to its destination (in this case, the console). This also means that if your program crashes, aborts, or is paused (e.g. for debugging purposes) before the buffer is flushed, any output still waiting in the buffer will not be displayed.

- Key insight: The opposite of buffered output is unbuffered output. With unbuffered output, each individual output request is sent directly to the output device. Writing data to a buffer is typically fast, whereas transferring a batch of data to an output device is comparatively slow. Buffering can significantly increase performance by batching multiple output requests together to minimize the number of times output has to be sent to the output device.

#### `std::endl` vs `\n`
- Using `std::endl` is often inefficient, as it actually does two jobs: it outputs a newline (moving the cursor to the next line of the console), and it flushes the buffer (which is slow). If we output multiple lines of text ending with `std::endl`, we will get multiple flushes, which is slow and probably unnecessary.

- When outputting text to the console, we typically don’t need to explicitly flush the buffer ourselves. C++’s output system is designed to self-flush periodically, and it’s both simpler and more efficient to let it flush itself.

- To output a newline without flushing the output buffer, we use `\n` (inside either single or double quotes), which is a special symbol that the compiler interprets as a newline character. `\n` moves the cursor to the next line of the console without causing a flush, so it will typically perform better. `\n` is also more concise to type and can be embedded into existing double-quoted text.

- Here’s an example that uses `\n` in a few different ways:
    ```cpp
    #include <iostream> // for std::cout

    int main()
    {
        int x{ 5 };
        std::cout << "x is equal to: " << x << '\n'; // single quoted (by itself) (conventional)
        std::cout << "Yep." << "\n";                 // double quoted (by itself) (unconventional but okay)
        std::cout << "And that's all, folks!\n";     // between double quotes in existing text (conventional)
        return 0;
    }
    ```
    Output:
    ```
    x is equal to: 5
    Yep.
    And that's all, folks!
    ```
    - When `\n` is not being embedded into an existing line of double-quoted text (e.g. "hello\n"), it is conventionally single quoted (`'\n'`).

- Convention: In C++, we use single quotes to represent single characters (such as `'a'` or `'$'`), and double-quotes to represent text (zero or more characters). Even though `'\n'` is represented in source code as two symbols, it is treated by the compiler as a single linefeed (LF) character (with ASCII value 10), and thus is conventionally single quoted (unless embedded into existing double-quoted text). When `'\n'` is output, the library doing the outputting is responsible for translating this single LF character into the appropriate newline sequence for the given OS.

- Best practice: Prefer `\n` over `std::endl` when outputting text to the console.

#### `std::cin`
- `std::cin` is another predefined variable in the iostream library. Whereas std::cout prints data to the console (using the insertion operator `<<` to provide the data), `std::cin` (which stands for “character input”) reads input from keyboard. We typically use the extraction operator `>>` to put the input data in a variable (which can then be used in subsequent statements).
    ```cpp
    #include <iostream>  // for std::cout and std::cin

    int main()
    {
        std::cout << "Enter a number: "; // ask user for a number

        int x{};       // define variable x to hold user input (and value-initialize it)
        std::cin >> x; // get number from keyboard and store it in variable x

        std::cout << "You entered " << x << '\n';
        return 0;
    }
    ```
    Example output (entering the value `4` as input):
    ```
    Enter a number: 4
    You entered 4
    ```
    - When you run the program, line 5 will print “Enter a number: “. When the code gets to line 8, your program will wait for you to enter input. Once you enter a number (and press `enter`), the number you enter will be assigned to variable `x`. Finally, on line 10, the program will print “You entered ” followed by the number you just entered.
    - This is an easy way to get keyboard input from the user.
    - Note that you don’t need to output `'\n'` when accepting a line of input, as the user will need to press the enter key to have their input accepted, and this will move the cursor to the next line of the console.

- Just like it is possible to output more than one bit of text in a single line, it is also possible to input more than one value on a single line:
    ```cpp
    #include <iostream>  // for std::cout and std::cin

    int main()
    {
        std::cout << "Enter two numbers separated by a space: ";

        int x{}; // define variable x to hold user input (and value-initialize it)
        int y{}; // define variable y to hold user input (and value-initialize it)
        std::cin >> x >> y; // get two numbers and store in variable x and y respectively

        std::cout << "You entered " << x << " and " << y << '\n';

        return 0;
    }
    ```
    Example output (entering the value `5 6` as input):
    ```
    Enter two numbers separated by a space: 5 6
    You entered 5 and 6
    ```
    - Values entered should be separated by whitespace (spaces, tabs, or newlines).
    - There’s some debate over whether it’s necessary to initialize a variable immediately before you give it a user provided value via another source (e.g. std::cin), since the user-provided value will just overwrite the initialization value. In line with our previous recommendation that variables should always be initialized, best practice is to initialize the variable first.

#### `std::cin` is buffered
- In a prior section, we noted that outputting data is actually a two stage process:
    - The data from each output request is added (to the end) of an output buffer.
    - Later, data from (the front of) the output buffer is flushed to the output device (the console).

- Adding data to the end of a buffer and removing it from the front of a buffer ensures data is processed in the same order in which it was added. This is sometimes called FIFO (first in, first out).

- Similarly, inputting data is also a two stage process:
    - The individual characters you enter as input are added to the end of an input buffer (inside `std::cin`). The `enter` key (pressed to submit the data) is also stored as a `'\n'` character.
    - The extraction operator `>>` removes characters from the front of the input buffer and converts them into a value that is assigned (via copy-assignment) to the associated variable. This variable can then be used in subsequent statements.

- Each line of input data in the input buffer is terminated by a `'\n'` character.

- Example of `cin`'s buffer:
    ```cpp
    #include <iostream>  // for std::cout and std::cin

    int main()
    {
        std::cout << "Enter two numbers: ";

        int x{};
        std::cin >> x;

        int y{};
        std::cin >> y;

        std::cout << "You entered " << x << " and " << y << '\n';

        return 0;
    }
    ```
    - This program inputs to two variables (this time as separate statements). We’ll run this program twice.
    - Run #1: 
        - When `std::cin >> x;` is encountered, the program will wait for input. Enter the value `4`. The input `4\n` goes into the input buffer, and the value `4` is extracted to variable `x`.
        - When `std::cin >> y;` is encountered, the program will again wait for input. Enter the value `5`. The input `5\n` goes into the input buffer, and the value `5` is extracted to variable `y`. Finally, the program will print `You entered 4 and 5`.
    - Run #2:
        - When `std::cin >> x;` is encountered, the program will wait for input. Enter `4 5`. The input `4 5\n` goes into the input buffer, but only the `4` is extracted to variable `x` (extraction stops at the space).
        - When `std::cin >> y;` is encountered, the program will not wait for input. Instead, the `5` that is still in the input buffer is extracted to variable `y`. The program then prints `You entered 4 and 5`.
    - Note that in run 2, the program didn’t wait for the user to enter additional input when extracting to variable `y` because there was already prior input in the input buffer that could be used.
    - `std::cin` is buffered because it allows us to separate the entering of input from the extract of input. We can enter input once and then perform multiple extraction requests on it.

#### The basic extraction process
- Here’s a simplified view of how operator `>>` works for input.
    1. If `std::cin` is not in a good state (e.g. the prior extraction failed and `std::cin` has not yet been cleared), no extraction is attempted, and the extraction process aborts immediately.
    2. Leading whitespace characters (spaces, tabs, and newlines at the front of the buffer) are discarded from the input buffer. This will discard an unextracted newline character remaining from a prior line of input.
    3. If the input buffer is now empty, operator `>>` will wait for the user to enter more data. Any leading whitespace is discarded from the entered data.
    4. operator `>>` then extracts as many consecutive characters as it can, until it encounters either a newline character (representing the end of the line of input) or a character that is not valid for the variable being extracted to.

- The result of the extraction process is as follows:
    - If the extraction aborted in step 1, then no extraction attempt occurred. Nothing else happens.
    - If any characters were extracted in step 4 above, extraction is a success. The extracted characters are converted into a value that is then copy-assigned to the variable.
    - If no characters could be extracted in step 4 above, extraction has failed. The object being extracted to is copy-assigned the value 0 (as of C++11), and any future extractions will immediately fail (until `std::cin` is cleared).

- Any non-extracted characters (including newlines) remain available for the next extraction attempt.

- For example, given the following snippet:
    ```cpp
    int x{};
    std::cin >> x;
    ```
    - Here’s what happens in a three different input cases:
        - If the user types `5a` and enter, `5a\n` will be added to the buffer. `5` will be extracted, converted to an integer, and assigned to variable `x`. `a\n` will be left in the input buffer for the next extraction.
        - If the user types `b` and enter, `b\n` would be added to the buffer. Because `b` is not a valid integer, no characters can be extracted, so this is an extraction failure. Variable `x` would be set to `0`, and future extractions will fail until the input stream is cleared.
        - If `std::cin` is not in a good state due to a prior failed extraction, nothing happens here. The value of variable `x` is not altered.

#### `operator<<` vs `operator>>`
- New programmers often mix up `std::cin`, `std::cout`, the insertion operator (`<<`) and the extraction operator (`>>`). Here’s an easy way to remember:
    - `std::cin` and `std::cout` always go on the left-hand side of the operator.
    - `std::cout` is used to output a value (cout = character output).
    - `std::cin` is used to get an input value (cin = character input).
    - `<<` is used with `std::cout`, and shows the direction that data is moving. `std::cout << 4` moves the value `4` to the console.
    - `>>` is used with `std::cin`, and shows the direction that data is moving. `std::cin >> x` moves the value the user entered from the keyboard into variable `x`.

#### Quiz
<details>
<summary><strong> Question </strong></summary>

- Consider the following program that we used above. The program expects you to enter an integer value, as the variable `x` that the user input will be put into is an integer variable. 
    ```cpp
    #include <iostream>  // for std::cout and std::cin

    int main()
    {
        std::cout << "Enter a number: "; // ask user for a number
        int x{}; // define variable x to hold user input
        std::cin >> x; // get number from keyboard and store it in variable x
        std::cout << "You entered " << x << '\n';

        return 0;
    }
    ```
    - Run this program multiple times and describe the output that results when you enter the following types of input:
        - A letter, such as `h`.
            - Result: `0` is always printed. 
            - What’s happening: An integer can’t hold a letter, so extraction completely fails. `x` is assigned the value `0`.
        - A number with a fractional part (e.g. `3.2`). Try numbers with fractional parts less than `0.5` and greater than `0.5` (e.g. `3.2` and `3.7`).
            - Result: The fractional part is dropped (not rounded). 
            - What’s happening: Given the number `3.2`, the `3` gets extracted, but `.` is an invalid character, so extraction stops here. The `.2` remains for a future extraction attempt. 
            - If you are wondering why this isn’t a disallowed narrowing conversion, narrowing conversions are only disallowed during list-initialization (which happens on line 6). The extraction happens on line 7.
        - A small negative integer, such as `-3`.
            - Result: The entered number is output.
            - What’s happening: A minus sign at the beginning of a number is acceptable, so it is extracted. The remaining numbers are extracted as well.
        - A word, such as `Hello`.
            - Result: `0` is always printed.
            - What’s happening: An integer can’t hold a letter, so extraction completely fails. x` is assigned the value `0`.
        - A really big number (at least 3 billion).
            - Result: You are most likely to get the number `2147483647`.
            - What’s happening: `x` can only hold numbers up to a certain size. If you enter a value larger than the largest number `x` can hold, it will be set to the largest number that `x` can hold (which is probably `2147483647`, but might be different on your system). We discuss this further in lesson [4.4 -- Signed integers](https://www.learncpp.com/cpp-tutorial/signed-integers/).
        - A small number followed by some letters, such as `123abc`.
            - Result: The numeric values are printed (e.g. `123`).
            - What’s happening: `123` is extracted, the remaining characters (e.g. `abc`) are left for a later extraction.
        - A few letters followed by a small number, such as `abc123`.
            - Result: `0` is always printed.
            - What’s happening: An integer can’t hold a letter, so extraction completely fails. `x` is assigned the value `0`.
        - `   +5` (three spaces, followed by a plus symbol, and a 5).
            - Result: `5` is printed.
            - What’s happening: The leading whitespace is skipped. Plus is a valid symbol at the start of a number (just as a minus sign would be), so it is extracted. The `5` is also extracted.
        - `5b6`.
            - Result: `5` is printed.
            - What’s happening: `5` is extracted. `b` is invalid, so extraction stops here. The `b6` remains for a future extraction attempt.

</details>

## Vocabulary
- statement: an instruction in a computer program that tells the computer to perform an action. Most (but not all) statements in C++ end in a semicolon. If you see a line that ends in a semicolon, it’s probably a statement.

- function: collection of statements that executes sequentially
    - When discussing functions, it’s fairly common shorthand to append a pair of parenthesis to the end of the function’s name. For example, if you see the term `main()` or `doSomething()`, this is shorthand for functions named `main` or `doSomething` respectively. This helps differentiate functions from other things with names (such as variables) without having to write the word “function” each time.

- identifier: name of a function (or object, type, template, etc…)

- character: a written symbol or mark, such as a letter, digit, punctuation mark, or mathematical symbol

- string/text: a sequence of characters
    - Conventionally, the term “text” is also used to mean plain text, which is text that contains only characters that appear on a standard keyboard, with no special formatting or styling. For example, plain text cannot represent bold words, as that requires styling.

- control character: characters that have special meaning to the computer system, but either aren’t intended to be displayed, or display as something other than a single visible symbol. Examples of well-known control characters include “escape” (which doesn’t display anything), “tab” (which displays as some number of spaces), and “backspace” (which erases the previous character).

- syntax error: error that occurs when your program violates the grammar rules of the C++ language

- data: any information that can be moved, processed, or stored by a computer

- program: collections of instructions that manipulate data to produce a desired result

- value (sometimes called a data value): a single piece of data

- literals: values that are placed directly into the source code

- RAM (Random Access Memory): main memory in a computer. When we run a program, the operating system loads the program into RAM. Any data that is hardcoded into the program itself (e.g. text such as “Hello, world!”) is loaded at this point.

- object: used to store a value in memory. It represents a region of storage that can hold a value.

- variable: object that has a name (identifier). Each variable has an identifier, a type, and a value (and some other attributes that aren’t relevant here). A variable’s type is used to determine how the value in memory should be interpreted. Variables are actually created at runtime, when memory is allocated for their use.

- definition statement: used to tell the compiler that we want to use a variable in our program

- compile time: when the program is being compiled

- runtime: when the program is loaded into memory and run

- allocation: process of reserving storage for an object’s use

- data type (more commonly just called a type): determines what kind of value (e.g. a number, a letter, text, etc…) the object will store

- integer: a number that can be written without a fractional component, such as `4`, `27`, `0`, `-2`, or `-12`

- initialization: process of specifying an initial value for an object

- initializer: syntax used to initialize an object

- instantiation: a variable has been created (allocated) and initialized (this includes default initialization)

- instance: instantiated object. Most often, this term is applied to class type objects, but it is occasionally applied to objects of other types as well.

- encapsulation: combining a number of items, such as variables and functions, into a single package such as an object of a class

- volatile: a type qualifier that informs the compiler that a variable's value can be modified by external factors, such as hardware, interrupt service routines (ISRs), or another thread, in ways the compiler cannot predict.

- atomic: feature designed for thread-safe operations on shared data in a multi-threaded environment. It ensures that operations on atomic variables are performed as a single, indivisible unit, preventing data races and ensuring memory consistency across threads.

- pointer: a variable that holds the memory address of another variable. A pointer needs to be dereferenced with the * operator to access the memory location it points to. 

- reference: an alias, that is, another name for an already existing variable. A reference, like a pointer, is also implemented by storing the address of an object. A reference can be thought of as a constant pointer (not to be confused with a pointer to a constant value!) with automatic indirection, i.e., the compiler will apply the * operator for you. 

- dangling pointer: pointer that has had the `delete` operation done on it. It is simply an undefined pointer.

- function redefined: derived class has same number and type of parameters.

- overloaded function: has different number and/or type of parameters than the base class.

- function signature: function's name with the sequence of types in the paramter list, not including any const or '&'.

- polymorphism - refers to the ability to associate multiple meanings with one function name using a mechanism called *late binding*

- 3 key components of object oriented programming: encapsulation, inheritance, polymorphism

- late binding: basically when you create a virtual function, which tells the compiler that you don't know how the function is implemented and to wait until the function is used in a program, then get the implementation from the object.

## Extra Notes:
- Big 3 for dynamic usage in classes are copy constructor, assignment operator, and destructor. If you need one, you need the rest.

## Best Practices
- Although the language allows you to do so, avoid defining multiple variables of the same type in a single statement. Instead, define each variable in a separate statement on its own line (and then use a single-line comment to document what it is used for).

- Prefer direct-list-initialization or value-initialization to initialize your variables.

- Initialize your variables upon creation.

- Output a newline whenever a line of output is complete.

- Prefer \n over std::endl when outputting text to the console.

- There’s some debate over whether it’s necessary to initialize a variable immediately before you give it a user provided value via another source (e.g. std::cin), since the user-provided value will just overwrite the initialization value. In line with our previous recommendation that variables should always be initialized, best practice is to initialize the variable first.
