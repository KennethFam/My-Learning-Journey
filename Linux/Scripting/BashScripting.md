# Bash Scripting

<details>
<summary><strong> Exercise </strong></summary>

- 
    ```shell
    ```
    **Expected Output**:
    ```shell
    ```
    - **Solution**:
        ```shell
        ```

</details>

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

## Shell Scripting Syntax

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
    - `ps` is a command-line utility that provides a snapshot of the processes currently running on the system
    - `|` is the syntax used for pipelining commands
    - `grep` is a command-line utility for pattern matching (in this case, we're trying to find matches for `$$`)

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
    ```shell
    #!/bin/bash
    # Change this code
    BIRTHDATE=
    Presents=
    BIRTHDAY=


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
    **Expected Output**:
    ```shell
    BIRTHDATE is correct, it is Jan 1, 2000
    I have received 10 presents
    I was born on a Saturday
    ```
    - **Solution**: 
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
<summary><strong> Exercise (Contains introduction to running a script inside the script itself)</strong></summary>

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
    - **Solution**:
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
    **Expected Output**:
    ```shell
    1 2 3
    hello world
    The number of names listed in the NAMES array: 3
    The second name on the NAMES list is: Eric
    ```
    - **Solution**:
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
    **Expected Output**:
    ```shell
    Total Cost is 128
    ```
    - **Solution**:
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

### What is the 'expr' Command?
- According to [GeeksforGeeks](https://www.geeksforgeeks.org/linux-unix/expr-command-in-linux-with-examples/), `expr` stands for "expression" and allows for the evaluation of values and returns the result to standard output. It is particularly useful in scripts for handling both numerical and string data efficiently. In short, it helps in:
    - Basic operations like addition, subtraction, multiplication, division, and modulus on integers.
    - Evaluating regular expressions, string operations like substring, length of strings etc.
    ```shell
    expr 5 + 2 # 7
    ```
    - Note that `*`, `|`, `&`, `<`, and `>` will need to be escaped with `\`. 

### Basic String Operations
- Get the length of a string:
    ```shell
    #       1234567890123456
    STRING="this is a string"
    echo ${#STRING}            # 16
    ```

- Find the numerical position in a string of any single character in a substring that matches. Note that the `expr` command is used in this case. Remember that index returns 1-based indexing, so the number returned is technically the index right after the occurance of the match.
    ```shell
    STRING="this is a string"
    SUBSTRING="hat"
    expr index "$STRING" "$SUBSTRING"     # 1 is the position after the first 't' in $STRING
    ```
    - If we used `echo` instead, we'd need to do `echo $((index "$STRING" "$SUBSTRING"))`.
    - Note that `index "$STRING" "$SUBSTRING"` is what's actually returning `1`.

- Extract substring of length `$LEN` from `$STRING` starting after position `$POS`. Note that first position is 0.
    ```shell
    STRING="this is a string"
    POS=1
    LEN=3
    echo ${STRING:$POS:$LEN}   # his
    ```
    - If :$LEN is omitted, extract substring from $POS to end of line
        ```shell
        STRING="this is a string"
        echo ${STRING:1}           # $STRING contents without leading character
        echo ${STRING:12}          # ring
        ```

- Data extraction example:
    ```shell
    # Code to extract the First name from the data record
    DATARECORD="last=Clifford,first=Johnny Boy,state=CA"
    COMMA1=`expr index "$DATARECORD" ','`  # 14 position of first comma
    CHOP1FIELD=${DATARECORD:$COMMA1}       # first=Johnny Boy,state=CA 
    COMMA2=`expr index "$CHOP1FIELD" ','`  # 17
    LENGTH=`expr $COMMA2 - 6 - 1`          # 10 (length of the string to be extracted)
    FIRSTNAME=${CHOP1FIELD:6:$LENGTH}      # Johnny Boy
    echo $FIRSTNAME
    ```

- Substring replacement examples:
    ```shell
    STRING="to be or not to be"
    ```
    - Replace first occurrence of substring with replacement:
        ```shell
        STRING="to be or not to be"
        echo ${STRING[@]/be/eat}        # to eat or not to be
        ```
    - Replace all occurrences of substring:
        ```shell
        STRING="to be or not to be"
        echo ${STRING[@]//be/eat}        # to eat or not to eat
        ```
    - Delete all occurrences of substring (replace with empty string):
        ```shell
        STRING="to be or not to be"
        echo ${STRING[@]// not/}        # to be or to be
        ```
        - Result would be the same with/without space before `not`. The thing is that without the space, it will match all occurances of `not`. With the space, it will match all occurances of `not` with a space in the beginning.
        - To replace only the first occurance, use `/ not/` instead of `// not/`.
    - Replace occurrence of substring if at the beginning of $STRING:
        ```shell
        STRING="to be or not to be"
        echo ${STRING[@]/#to be/eat now}    # eat now or not to be
        ```
    - Replace occurrence of substring if at the end of $STRING:
        ```shell
        STRING="to be or not to be"
        echo ${STRING[@]/%be/eat}        # to be or not to eat
        ```
    - Replace occurrence of substring with shell command output:
        ```shell
        STRING="to be or not to be"
        echo ${STRING[@]/%be/be on $(date +%Y-%m-%d)}    # to be or not to be on 2012-06-14
        ```

<details>
<summary><strong> Exercise </strong></summary>

- In this exercise, you will need to change Warren Buffett's known saying. First create a variable ISAY and assign it the original saying value. Then re-assign it with a new changed value using the string operations and following the 4 defined changes: Change1: replace the first occurrence of 'snow' with 'foot'. Change2: delete the second occurrence of 'snow'. Change3: replace 'finding' with 'getting'. Change4: delete all characters following 'wet'. Tip: One way to implement Change4, if to find the index of 'w' in the word 'wet' and then use substring extraction.
    ```shell
    #!/bin/bash

    BUFFETT="Life is like a snowball. The important thing is finding wet snow and a really long hill."
    # write your code here
    ISAY=
    ISAY=










    # Test code - do not modify
    echo "Warren Buffett said:"
    echo $BUFFETT
    echo "and I say:"
    echo $ISAY
    ```
    **Expected Output**:
    ```shell
    Warren Buffett said:
    Life is like a snowball. The important thing is finding wet snow and a really long hill.
    and I say:
    Life is like a football. The important thing is getting wet
    ```
    - **Solution**:
        ```shell
        #!/bin/bash

        BUFFETT="Life is like a snowball. The important thing is finding wet snow and a really long hill."

        # write your code here
        ISAY=$BUFFETT
        change1=${ISAY[@]/snow/foot}
        change2=${change1[@]//snow/}
        change3=${change2[@]/finding/getting}
        loc=`expr index "$change3" 'w'`
        ISAY=${change3::$loc+2}

        # Test code - do not modify
        echo "Warren Buffett said:"
        echo $BUFFETT
        echo "and I say:"
        echo "$ISAY"
        ```

</details>

### Decision Making
- The basic conditional decision making construct is:
    ```shell
    if [ expression ]; then
        # code if 'expression' is true
    fi
    ```
    - Example:
        ```shell
        NAME="John"
        if [ "$NAME" = "John" ]; then
            echo "True - my name is indeed John"
        fi
        ```

- Expansion of conditional statement using `else`:
    ```shell
    NAME="Bill"
    if [ "$NAME" = "John" ]; then
        echo "True - my name is indeed John"
    else
        echo "False"
        echo "You must mistaken me for $NAME"
    fi
    ```

- Expansion of conditional statement using `elif` (else-if):
    ```shell
    NAME="George"
    if [ "$NAME" = "John" ]; then
        echo "John Lennon"
    elif [ "$NAME" = "George" ]; then
        echo "George Harrison"
    else
        echo "This leaves us with Paul and Ringo"
    fi
    ```

- Note that the spacing in the `if` and `elif` conditions are required by syntax.

- The expression used by the conditional construct is evaluated to either true or false. The expression can be a single string or variable. An empty string or a string consisting of spaces or an undefined variable name, are evaluated as false. The expression can be a logical combination of comparisons: negation is denoted by `!`, logical AND (conjunction) is denoted by `&&`, and logical OR (disjunction) is denoted by `||`. Conditional expressions should be surrounded by double brackets `[[ ]]`.

- Types of numeric comparisons:
    ```shell
    comparison    Evaluated to true when
    $a -lt $b    $a < $b
    $a -gt $b    $a > $b
    $a -le $b    $a <= $b
    $a -ge $b    $a >= $b
    $a -eq $b    $a is equal to $b
    $a -ne $b    $a is not equal to $b
    ```

- Types of string comparisons:
    ```
    comparison    Evaluated to true when
    "$a" = "$b"     $a is the same as $b    no patten matching, POSIX compliant
    "$a" == "$b"    $a is the same as $b    supports pattern matching like "hello" == h* -> true
    "$a" != "$b"    $a is different from $b
    -z "$a"         $a is empty
    ```
    - note1: whitespace around `=` is required
    - note2: use `""` around string variables to avoid shell expansion of special characters as `*`

- Logical combinations:
    ```shell
    if [[ $VAR_A[0] -eq 1 && ($VAR_B = "bee" || $VAR_T = "tee") ]] ; then
        # command...
    fi
    ```

- Case structure:
    ```
    case "$variable" in
    "$condition1" )
        command...
    ;;
    "$condition2" )
        command...
    ;;
    esac
    ```
    - Example:
        ```shell
        mycase=1
        case $mycase in
            1) echo "You selected bash";;
            2) echo "You selected perl";;
            3) echo "You selected phyton";;
            4) echo "You selected c++";;
            5) exit
        esac
        ```
        - No default keyword, but you can use `*` to pattern match everything else.

<details>
<summary><strong> Exercise </strong></summary>

- Change the variables in the first section, so that each if statement resolves as True.
    ```shell
    #!/bin/bash
    # change these variables
    NUMBER=10
    APPLES=12
    KING=GEORGE
    # modify above variables
    # to make all decisions below TRUE
    if [ $NUMBER -gt 15 ] ; then
        echo 1
    fi
    if [ $NUMBER -eq $APPLES ] ; then
        echo 2
    fi
    if [[ ($APPLES -eq 12) || ("$KING" = "LUIS") ]] ; then
        echo 3
    fi
    if [[ $(($NUMBER + $APPLES)) -le 32 ]] ; then
        echo 4
    fi
    ```
    **Expected Output**:
    ```shell
    1
    2
    3
    4
    ```
    - **Solution**:
        ```shell
        #!/bin/bash
        # change these variables
        NUMBER=16
        APPLES=16
        KING="LUIS"
        # modify above variables
        # to make all decisions below TRUE
        if [ $NUMBER -gt 15 ] ; then
            echo 1
        fi
        if [ $NUMBER -eq $APPLES ] ; then
            echo 2
        fi
        if [[ ($APPLES -eq 12) || ("$KING" = "LUIS") ]] ; then
            echo 3
        fi
        if [[ $(($NUMBER + $APPLES)) -le 32 ]] ; then
            echo 4
        fi
        ```

</details>

### Loops
- bash for loop
    ```shell
    # basic construct
    for arg in [list]
    do
        command(s)...
    done
    ```
    For each pass through the loop, arg takes on the value of each successive value in the list. Then the command(s) are executed.
    ```shell
    # loop on array member
    NAMES=(Joe Jenny Sara Tony)
    for N in ${NAMES[@]} ; do
        echo "My name is $N"
    done
    # My name is Joe
    # My name is Jenny
    # My name is Sara
    # My name is Tony

    # loop on command output results
    for f in $( ls prog.sh /etc/localtime ) ; do
        echo "File is: $f"
    done

    # Output
    # My name is Joe
    # My name is Jenny
    # My name is Sara
    # My name is Tony
    # File is: /etc/localtime
    # File is: prog.sh
    ```

- bash while loop
    ```shell 
    # basic construct
    while [ condition ]
    do
        command(s)...
    done
    ```
    The while construct tests for a condition, and if true, executes commands. It keeps looping as long as the condition is true.
    ```shell
    COUNT=4
    while [ $COUNT -gt 0 ]; do
        echo "Value of count is: $COUNT"
        COUNT=$(($COUNT - 1))
    done

    # Output:
    # Value of count is: 4
    # Value of count is: 3
    # Value of count is: 2
    # Value of count is: 1
    ```

- bash until loop
    ```shell
    # basic construct
    until [ condition ]
    do
        command(s)...
    done
    ```
    The until construct tests for a condition, and if false, executes commands. It keeps looping as long as the condition is false (opposite of while construct).
    ```shell
    COUNT=1
    until [ $COUNT -gt 5 ]; do
        echo "Value of count is: $COUNT"
        COUNT=$(($COUNT + 1))
    done

    # Output:
    # Value of count is: 1
    # Value of count is: 2
    # Value of count is: 3
    # Value of count is: 4
    # Value of count is: 5
    ```

- `break` and `continue` statements
    - `break` and `continue` can be used to control the loop execution of `for`, `while` and `until` constructs. `continue` is used to skip the rest of a particular loop iteration, whereas `break` is used to skip the entire rest of loop. A few examples:
        ```shell
        # Prints out 0,1,2,3,4
        # note that space before ';' is optional

        COUNT=0
        while [ $COUNT -ge 0 ]; do
            echo "Value of COUNT is: $COUNT"
            COUNT=$((COUNT+1))
            if [ $COUNT -ge 5 ] ; then
                break
            fi
        done

        # Prints out only odd numbers - 1,3,5,7,9
        COUNT=0
        while [ $COUNT -lt 10 ]; do
            COUNT=$((COUNT+1))
            # Check if COUNT is even
            if [ $(($COUNT % 2)) = 0 ] ; then
                continue
            fi
            echo $COUNT
        done
        ```

<details>
<summary><strong> Exercise </strong></summary>

- In this exercise, you will need to loop through and print out all even numbers from the numbers list in the same order they are received. Don't print any numbers that come after 237 in the sequence.
    ```shell
    #!/bin/bash
    NUMBERS=(951 402 984 651 360 69 408 319 601 485 980 507 725 547 544 615 83 165 141 501 263 617 865 575 219 390 237 412 566 826 248 866 950 626 949 687 217 815 67 104 58 512 24 892 894 767 553 81 379 843 831 445 742 717 958 609 842 451 688 753 854 685 93 857 440 380 126 721 328 753 470 743 527)

    # write your code here
    ```
    **Expected Output**:
    ```shell
    402
    984
    360
    408
    980
    544
    390
    ```
    - **Solution**:
        ```shell
        #!/bin/bash
        NUMBERS=(951 402 984 651 360 69 408 319 601 485 980 507 725 547 544 615 83 165 141 501 263 617 865 575 219 390 237 412 566 826 248 866 950 626 949 687 217 815 67 104 58 512 24 892 894 767 553 81 379 843 831 445 742 717 958 609 842 451 688 753 854 685 93 857 440 380 126 721 328 753 470 743 527)

        # write your code here
        for gg in ${NUMBERS[@]}; do
            
            if [ $gg == 237 ]; then
                break;
            elif [ $(($gg % 2)) == 0 ]; then
                echo $gg
            fi
        done
        ```

</details>

### Array Comparison
- An array is a variable containing multiple values. Any variable may be used as an array. There is no maximum limit to the size of an array, nor any requirement that member variables be indexed or assigned contiguously. Arrays are zero-based: the first element is indexed with the number 0.
    ```shell
    # basic construct
    # array=(value1 value2 ... valueN)
    array=(23 45 34 1 2 3)
    #To refer to a particular value (e.g. : to refer 3rd value)
    echo ${array[2]}

    #To refer to all the array values
    echo ${array[@]}

    #To evaluate the number of elements in an array
    echo ${#array[@]}
    ```

<details>
<summary><strong> Exercise </strong></summary>

- In this exercise, you will need to compare three list of arrays and write the common elements of all the three arrays:
    `a=(3 5 8 10 6)`, `b=(6 5 4 12)`, `c=(14 7 5 7)` result is the common element `5`.
    ```shell
    #!/bin/bash
	# enter your array comparison code here
    ```
    **Expected Output**:
    ```shell
    5
    ```
    - **Solution**:
        ```shell
        #!/bin/bash
        # enter your array comparison code here
        # initialize arrays a b c
        a=(3 5 8 10 6) 
        b=(6 5 4 12) 
        c=(14 7 5 7)
        # comparison of first two arrays a and b
        # note the difference between space syntax for '=' between conditionals and assignment
        for x in "${a[@]}"; do 
            for y in "${b[@]}"; do 
                if [ $x = $y ];then 
                    # assigning the matching results to new array z
                    # no need for declaration, just start assigning
                    z[${#z[@]}]=$x
                fi
            done 
        done
        # comparison of third array c with new array z
        for i in "${c[@]}"; do 
            for k in "${z[@]}"; do
                if [ $i = $k ];then
                    # assigning the matching results to new array j
                    j[${#j[@]}]=$i
                fi
            done 
        done 
        # print content of array j
        echo ${j[@]}
        ```

</details>

### Shell Functions
- Like other programming languages, the shell may have functions. A function is a subroutine that implements a set of commands and operations. It is useful for repeated tasks.
    ```shell
    # basic construct
    function function_name {
        command...
    }
    ```

- Functions are called simply by writing their names. A function call is equivalent to a command. Parameters may be passed to a function, by specifying them after the function name. The first parameter is referred to in the function as `$1`, the second as `$2` etc.
    ```shell
    function function_B {
        echo "Function B."
    }
    function function_A {
        echo "$1"
    }
    function adder {
        echo "$(($1 + $2))"
    }

    # FUNCTION CALLS
    # Pass parameter to function A
    function_A "Function A."     # Function A.
    function_B                   # Function B.
    # Pass two parameters to function adder
    adder 12 56                  # 68
    ```

<details>
<summary><strong> Exercise </strong></summary>

- In this exercise, you will need to write a function called ENGLISH_CALC which can process sentences such as:
    `3 plus 5`, `5 minus 1` or `4 times 6` and print the results as: `3 + 5 = 8`, `5 - 1 = 4` or `4 * 6 = 24` respectively.
    ```shell
    #!/bin/bash
    # enter your function code here

    # testing code
    ENGLISH_CALC 3 plus 5
    ENGLISH_CALC 5 minus 1
    ENGLISH_CALC 4 times 6
    ```
    **Expected Output**:
    ```shell
    3 + 5 = 8
    5 - 1 = 4
    4 * 6 = 24
    ```
    - **Solution**:
        ```shell
        #!/bin/bash
        # enter your function code here

        function ENGLISH_CALC {
            a=$1
            b=$3
            signn=$2
            if [ $signn == "plus" ]; then
                echo "$a + $b = $(($a+$b))"
            elif [ $signn == "minus" ]; then
                echo "$a - $b = $(($a-$b))"
            elif [ $signn == "times" ]; then
                echo "$a * $b = $(($a*$b))" # if you don't use "", you'll need to \ (escape) the *
            fi
        }

        # testing code
        ENGLISH_CALC 3 plus 5
        ENGLISH_CALC 5 minus 1
        ENGLISH_CALC 4 times 6
        ```

</details>

### Special Variables

- `$0` - The filename of the current script.
- `$n` - The Nth argument passed to script was invoked or function was called.
- `$#` - The number of argument passed to script or function.
- `$@` - All arguments passed to script or function.
- `$*` - All arguments passed to script or function.
- `$?` - The exit status of the last command executed.
- `$$` - The process ID of the current shell. For shell scripts, this is the process ID under which they are executing.
- `$!` - The process number of the last background command.

- Example(s):
    ```shell
    #!/bin/bash
    echo "Script Name: $0"
    function func {
        for var in $*
        do
            let i=i+1
            echo "The \$${i} argument is: ${var}"
        done
        echo "Total count of arguments: $#"
    }
    func We are argument
    # Output:
    # Script Name: script.sh
    # The $1 argument is: We
    # The $2 argument is: are
    # The $3 argument is: argument
    # Total count of arguments: 3
    ```
    
    - `$@` and `$*` have different behavior when they were enclosed in double quotes.
        ```shell
        #!/bin/bash
        function func {
            echo "--- \"\$*\""
            for ARG in "$*"
            do
                echo $ARG
            done

            echo "--- \"\$@\""
            for ARG in "$@"
            do
                echo $ARG
            done
        }
        func We "are argument"
        # Output:
        # --- "$*"
        # We are argument
        # --- "$@"
        # We
        # are argument
        ```
        - Basically:
            - `$@`:
                - Unquoted: Unquoted $* splits all positional parameters into words, using $IFS (default is space). Each resulting word becomes a separate string.
                - Quoted: Each argument becomes their own string.
            - `$*`
                - Unquoted: Unquoted $* splits all positional parameters into words, using $IFS (default is space). Each resulting word becomes a separate string.
                - Quoted: All arguments are wrapped into a single string.

### Bash Trap Command
- It often comes the situations that you want to catch a special signal/interruption/user input in your script to prevent the unpredictables. `trap` is your command to try:
    ```shell
    trap <arg/function> <signal>
    ```
    - Do not include `<>` in the actual code. They just represent arguments that you have to pass.

- Example: 
    ```shell
    #!/bin/bash

    trap "echo Booh!" SIGINT SIGTERM
    echo "it's going to run until you hit Ctrl+Z"
    echo "hit Ctrl+C to be blown away!"

    while true        
    do
        sleep 60       
    done
    ```
    - Note that you can catch multiple signals with 1 trap command.
    - Surely you can substitute the `"echo Booh!"` with a function:
        ```bash
        function booh {
            echo "booh!"
        }
        ```
        and call it in trap:
        ```bash
        trap booh SIGINT SIGTERM
        ```

- Some of the common signal types you can trap:
    - `SIGINT`: user sends an interrupt signal (Ctrl + C)
    - `SIGQUIT`: user sends a quit signal (Ctrl + D)
    - `SIGFPE`: attempted an illegal mathematical operation
    - You can check out all signal types by entering the following command:
        ```shell
        kill -l
        ```
        - Notice the numbers before each signal name, you can use that number to avoid typing long strings in trap:
            ```shell
            #2 corresponds to SIGINT and 15 corresponds to SIGTERM
            trap booh 2 15
            ```

- One of the common usage of trap is to do cleanup temporary files:
    ```shell
    trap "rm -f folder; exit" 2
    ```

### File Testing
- Often you will want to do some file tests on the file system you are running. In this case, shell will provide you with several useful commands to achieve it.

- The command looks like the following:
    - `-<command> [filename]`
    - `[filename1] -<command> [filename2]`
    - Replace the contents with `<>` and `[]` with the command and filename respectively for your use case.
    - Note that the commands shown below will work with respect to the directory. If you want to check a file in another directory, you will need to provide a path.

- Examples:
    - use `-e` to test if file exist
        ```bash
        #!/bin/bash
        filename="sample.md"
        if [ -e "$filename" ]; then
            echo "$filename exists as a file"
        fi
        ```
    - use `-d` to test if directory exists
        ```bash
        #!/bin/bash
        directory_name="test_directory"
        if [ -d "$directory_name" ]; then
            echo "$directory_name exists as a directory"
        fi
        ```
    - use `-r` to test if file has read permission for the user running the script/test
        ```shell
        #!/bin/bash
        filename="sample.md"
        if [ ! -f "$filename" ]; then
            touch "$filename"
        fi
        if [ -r "$filename" ]; then
            echo "you are allowed to read $filename"
        else
            echo "you are not allowed to read $filename"
        fi
        ```
    - Note that the commands shown will work with respect to the directory. If you want to check a file in another directory, you will need to provide a path like so:
        ```bash
        #!/bin/bash
        filename="sample.md"
        if [ ! -f "../$filename" ]; then
            touch "../$filename"
        fi
        if [ -r "$filename" ]; then
            echo "you are allowed to read $filename"
        else
            echo "you are not allowed to read $filename"
        fi
        ```
        - This script will create a path in the parent directory is the current directory. 

### Piplines
- Pipelines, often called pipes, is a way to chain commands and connect output from one command to the input of the next. A pipeline is represented by the pipe character: `|`. It's particularly handy when a complex or long input is required for a command.
    Format:
    ```shell
    command1 | command2
    ```

- By default, pipelines redirects only the standard output, if you want to include the standard error you need to use the form `|&` which is a short hand for `2>&1 |`.

- Example(s): 
    - Imagine you quickly want to know the number of entries in a directory, you can use a pipe to redirect the output of the `ls` command to the `wc` command with option `-l`.
        ```shell
        ls / | wc -l
        ```
        Then if you want to see only the first 10 results:
        ```shell
        ls / | head
        ```
        - Note: `head` outputs the first 10 lines by default, use option `-n` to change this behavior.
    - `grep` searches for patterns in each file. Patterns is one or more patterns separated by newline characters, and `grep` prints each line that matches a pattern. Typically patterns should be quoted when `grep` is used in a shell command.
        Format:
        ```shell
        ls / | grep  # This will grab any line/file that has a matching pattern in it
        ```
        Example use:
        ```shell
        ls / | grep -E '^(dev|etc|usr)$' # Matches exactly dev, etc, or usr — nothing else.
        ```

<details>
<summary><strong> Exercise </strong></summary>

- In this exercise, you will need to print the number of processors based on the information in the cpuinfo file (/proc/cpuinfo)
    - Hint 1: each processor has a unique number, for instance the first processor will contain the line `processor: 0`
    Hint 2: you can chain together more than two commands in a row
    ```shell
    #!/bin/bash
    cat /proc/cpuinfo | 
    ```
    **Expected Output**:
    ```shell
    8
    ```
    - **Solution**:
        ```shell
        #!/bin/bash
        cat /proc/cpuinfo | grep processor | wc -l
        ```
        - `cat` gets the contents of `/proc/cpuinfo`
        - `grep` matches the entries with `processor` (in this case, it matches the entries in `/proc/cpuinfo`)
        - `wc -l` counts the entries (in this case, it counts the entries resulting from the `grep` call)

</details>

### Process Substitution
- In the previous section we've seen how to chain output of one command to the next one. But what if you want to chain the output of two or more commands to the another one? What if you have a command that takes a file as argument but you would like to process whatever is sent to that file?

- Process substitution allows a process’s input or output to be referred to using a filename. It has two forms: output `<(cmd)`, and input `>(cmd)`.

- Example(s):
    - Output
        - Imagine you've two files for which you want to compare the content. Using `diff file1 file2` could generate false positives in the case lines are not ordered. So if you want to compare those files you could create two new files, ordered, and compare those. It would look like:
            ```shell
            sort file1 > sorted_file1
            sort file2 > sorted_file2
            diff sorted_file1 sorted_file2
            ```
            - With process substitution you can do it in one line:
                ```shell
                diff <(sort file1) <(sort file2)
                ```
    - Input
        - Imagine you want to store logs of an application into a file and at the same time print it on the console. A very handy command for that is `tee`.
            ```shell
            echo "Hello, world!" | tee /tmp/hello.txt
            ```
            - hello.txt gets saved in `/tmp` directory and has `Hello, world!` as its contents (i.e. what was printed on the console).
            - Now let say you want to have only lower case characters in the file but keep the regular case on the output. You could use process substitution that way:
                ```shell
                echo "Hello, world!" | tee >(tr '[:upper:]' '[:lower:]' > /tmp/hello.txt)
                ```
                - `hello.txt` will contain `hello, world!`
