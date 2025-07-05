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
        or
        ```shell
        bash HelloWorld.sh
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

### Variables
- Shell variables are created once they are assigned a value. A variable can contain a number, a character or a string of characters. Variable name is case sensitive and can consist of a combination of letters and the underscore `_`. Value assignment is done using the `=` sign. Note that no space permitted on either side of `=` sign when initializing variables. Here are some example variable declarations:
    ```shell
    PRICE_PER_APPLE=5
    MyFirstLetters=ABC
    greeting='Hello        world!'
    ```

- You can reference variables by putting a `$` in front of the variable name. In the case that you want to use `$` as a string, a `\` can be used to escape special character meaning. Example: 
    ```shell
    PRICE_PER_APPLE=5
    echo "The price of an Apple today is: \$HK $PRICE_PER_APPLE" # The price of an Apple today is: $HK 5
    ```
    - Encapsulating the variable name with `${}` is used to avoid ambiguity. Example:
        ```shell
        MyFirstLetters=ABC
        echo "The first 10 letters in the alphabet are: ${MyFirstLetters}DEFGHIJ" # The first 10 letters in the alphabet are: ABCDEFGHIJ
        ```

- Encapsulating the variable name with `""` will preserve any white space values. Example:
    ```shell
    greeting='Hello        world!'
    echo $greeting" now with spaces: $greeting" # Hello world! now with spaces: Hello        world!
    ```

- Variables can be assigned with the value of a command output. This is referred to as substitution. Substitution can be done by encapsulating the command with ``` `` ``` (known as back-ticks) or with `$()`. Example, assuming the only file in the directory is `prog.sh` and the date is July 4, 2025:
    ```shell
    FILELIST=`ls`
    FileWithTimeStamp=/tmp/my-dir/file_$(/bin/date +%Y-%m-%d).txt
    echo $FILELIST # prog.sh
    echo $FileWithTimeStamp # /tmp/my-dir/file_2025-07-04.txt
    ```
    - Note that when the script runs, it will run the command inside the $() parenthesis and capture its output.

<details>
<summary><strong> Exercise (Contains introduction to date command): </strong></summary>

- The target of this exercise is to create a string, an integer, and a complex variable using command substitution. The string should be named BIRTHDATE and should contain the text `"Jan 1, 2000"`. The integer should be named Presents and should contain the number `10`. The complex variable should be named BIRTHDAY and should contain the full weekday name of the day matching the date in variable BIRTHDATE e.g. Saturday. Note that the `date` command can be used to convert a date format into a different date format. For example, to convert date value, `$date1`, to day of the week of `date1`, use:
    ```shell
    date -d "$date1" +%A
    ```
    - Solution: 
        ```shell
        #!/bin/bash
        # Change this code
        BIRTHDATE="Jan 1, 2000"
        Presents=10
        BIRTHDAY=`date -d "$BIRTHDATE" +%A`


        # Testing code - do not change it

        if [ "$BIRTHDATE" == "Jan 1, 2000" ] ; then
            echo "BIRTHDATE is correct, it is $BIRTHDATE"
        else
            echo "BIRTHDATE is incorrect - please retry"
        fi
        if [ $Presents == 10 ] ; then
            echo "I have received $Presents presents"
        else
            echo "Presents is incorrect - please retry"
        fi
        if [ "$BIRTHDAY" == "Saturday" ] ; then
            echo "I was born on a $BIRTHDAY"
        else
            echo "BIRTHDAY is incorrect - please retry"
        fi
        ```
</details>

### Passing Arguments to the Script
- Arguments can be passed to the script when it is executed, by writing them as a space-delimited list following the script file name. Inside the script, the $1 variable references the first argument in the command line, $2 the second argument and so forth. The variable $0 references to the current script. In the following example, the script name is followed by 6 arguments. `my_shopping.sh` file contains below code:
    ```shell
    #!/bin/bash
    echo "File name is "$0 # holds the current script
    echo $3 # $3 holds banana
    Data=$5
    echo "A $Data costs just $6."
    echo $#
    ```
    - Executing the script on terminal as `bash my_shopping.sh apple 5 banana 8 "Fruit Basket" 15` results in:
        ```shell
        File name is my_shopping.sh

        banana

        A Fruit Basket costs just 15

        6
        ```
        - The variable `$#` holds the number of arguments passed to the script.
        - The variable `$@` holds a space delimited string of all arguments passed to the script.
            - If we were to echo it out, it would produce `apple 5 banana 8 Fruit Basket 15`.

<details>
<sumary><strong> Exercise (Contains introduction to running a script inside the script itself) </strong></summary>

- Pass "Shell is fun" (3 arguments) to the script(prog.sh) as an arguments and print the length of the arguments. Here is the script that you need to edit:
    ```shell
    #!/bin/bash
    function File {
        # think you are inside the file
        # Change here
        echo "print the arguments"
    }

    # Do not change anything
    if [ ! $# -lt 1 ]; then
        File $*
        exit 0
    fi

    # change here
    # here you can pass the arguments
    bash test.sh arguments
    ```
    - Solution:
        ```shell
        #!/bin/bash
        function File {
            # think you are inside the file
            # Change Here
            echo $#
        }

        # Do not change anything
        if [ ! $# -lt 1 ]; then
            File $*
            exit 0
        fi

        # change here
        # here you can pass the arguments
        bash prog.sh Shell is fun
        ```

</details>

### Arrays
- An array can hold several values under one name. Array naming is the same as variables naming. An array is initialized by assigning space-delimited values enclosed in `()`. When using `echo`, use `"${array_name[@]}"` to print to the whole array. Without brackets, bash will interpret it as the first element followed by `[@]`. Simply using `echo` on `array_name` only prints the first element. Array members need not be consecutive or contiguous. Some members of the array can be left uninitialized. Example
    ```shell
    my_array=(apple banana "Fruit Basket" orange) # array declaration
    echo $my_array # only prints the first element: apple
    echo "${my_array[@]}" # prints whole array: apple banana Fruit Basket orange 
    new_array[2]=apricot # creates an array with only the 3rd element initiated
    echo "${new_array[@]}" # apricot
    ```

- The total number of elements in the array is referenced by `${#arrayname[@]}`. Example:
    ```shell
    my_array=(apple banana "Fruit Basket" orange)
    echo  ${#my_array[@]}                   # 4
    ```

- The array elements can be accessed with their numeric index. The index of the first element is 0 (0-indexed). Example:
    ```shell
    my_array=(apple banana "Fruit Basket" orange)
    echo ${my_array[3]}                     # orange - note that curly brackets are needed
    # adding another array element
    my_array[4]="carrot"                    # value assignment without a $ and curly brackets
    echo ${#my_array[@]}                    # 5
    echo ${my_array[${#my_array[@]}-1]}     # carrot
    ```

<details>
<summary><strong> Exercise </strong></summary>

- In this exercise, you will need to add numbers and strings to the correct arrays. You must add the numbers 1,2, and 3 to the "numbers" array, and the words 'hello' and 'world' to the strings array.

    You will also have to correct the values of the variable NumberOfNames and the variable second_name. NumberOfNames should hold the total number of names in the NAMES array, using the $# special variable. Variable second_name should hold the second name in the NAMES array, using the brackets operator [ ]. Note that the index is zero-based, so if you want to access the second item in the list, its index will be 1.

    ```shell
    #!/bin/bash
    NAMES=( John Eric Jessica )
    # write your code here
    NUMBERS=()
    STRINGS=()
    NumberOfNames=0
    second_name='Vladimir'
    ```

    - Solution:
        ```shell
        #!/bin/bash
        #!/bin/bash
        NAMES=( John Eric Jessica )
        # write your code here
        NUMBERS=( 1 2 3 )
        STRINGS=( "hello" "world" ) # note that STRINGS=(hello world) would have produced the same result since we want "hello" and "world" to be separate words
        NumberOfNames=${#NAMES[@]}
        second_name=${NAMES[1]}
        echo ${NUMBERS[@]}
        echo ${STRINGS[@]}
        echo "The number of names listed in the NAMES array: $NumberOfNames"
        echo "The second name on the NAMES list is:" ${second_name}
        ```

</details>

### Basic Arithmetic Operators
- Simple arithmetics on variables can be done using the arithmetic expression: `$((expression))`. Example:
    ```shell
    A=3
    B=$((100 * $A + 5)) # 305
    ```

- Basic operators:
    - a + b addition (a plus b)
    - a - b substraction (a minus b)
    - a * b multiplication (a times b)
    - a / b division (integer) (a divided by b)
    - a % b modulo (the integer remainder of a divided by b)
    - a ** b exponentiation (a to the power of b)

<details>
<summary><strong> Exercise </strong></summary>

- In this exercise, you will need to calculate the total cost (variable `TOTAL`) of a fruit basket, which contains 1 pineapple, 2 bananas and 3 watermelons. Don't forget to include the cost of the basket...
    ```shell
    #!/bin/bash 

    COST_PINEAPPLE=50

    COST_BANANA=4

    COST_WATERMELON=23

    COST_BASKET=1

    TOTAL= ?

    echo "Total Cost is $TOTAL"
    ```
    - Solution
        ```shell
        #!/bin/bash 

        COST_PINEAPPLE=50

        COST_BANANA=4

        COST_WATERMELON=23

        COST_BASKET=1

        TOTAL=$(($COST_PINEAPPLE + 2 * $COST_BANANA + 3 * $COST_WATERMELON + $COST_BASKET)) 

        echo "Total Cost is $TOTAL" # 128
        ```

</details>