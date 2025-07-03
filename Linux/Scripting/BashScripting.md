# Bash Scripting

## Background
- I will be taking notes from [learnshell](https://www.learnshell.org/).

## What is Bash?
- Bash ("Bourne Again Shell") is a shell interpreter. There are other shell interpreters like sh, csh, tcsh, etc.

## What is shell programming?
- Shell programming can be accomplished by directly executing shell commands at the shell prompt or by storing them in the order of execution, in a text file, called a shell script, and then executing the shell script. To execute, simply write the shell script file name, once the file has execute permission (`chmod +x filename`).
    - Let's say the file name is `HelloWorld.sh`. Run:
        ```shell
        chmod +x HelloWorld.sh
        ```
        Then execute it by running:
        ```shell
        ./HelloWorld.sh
        ```
    - Note: If you are not in the same file directory as the script, you'll need to replace the file name with the directory.

## Shell Scripting

### The basics of a shell script file
- The first line of the shell script file begins with a "sha-bang" (`#!`) which is not read as a comment, followed by the full path where the shell interpreter is located. This path, tells the operating system that this file is a set of commands to be fed into the interpreter indicated. Note that if the path given at the "sha-bang" is incorrect, then an error message e.g. "Command not found.", may be the result of the script execution. It is common to name the shell script with the `.sh` extension. The first line may look like this:
    ```shell
    #!/bin/bash
    ```

### Comments
- Any text following the `#` is considered a comment

### How to find out which shell you're using and its path
- To find out what is currently active shell, and what is its path, use this command:
    ```shell
    ps | grep $$
    ```
    - You may get a response like this:
        ```
        987 tty1 00:00:00 bash
        ```
        This response shows that the shell you are using is of type `bash`.

- To find out the full path of the shell interpreter, use this command:
    ```shell
    which bash
    ```
    - You may get a response like this:
        ```
        /bin/bash
        ```
        - This response shows the full execution path of the shell interpreter. Make sure that the "sha-bang" line at the beginning of your script, matches this same execution path.