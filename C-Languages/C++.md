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

# IDEs (Integrated Development Environments) for C++
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