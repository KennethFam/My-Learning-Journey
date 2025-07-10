# Python

## Background
- For these notes, I'm starting off at Part 5 of [MOOC's 2025 Python Course](https://programming-25.mooc.fi/part-5), since I have already completed Parts 1-4 of the [2024 version](https://programming-24.mooc.fi/) a while back but never took notes. I may revisit those parts later on to make the notes complete.

## Installation

### Python
- On Linux, Python3 is usually installed by default. If it is not, you can install it using the following command:
    ```bash
    sudo apt install python3
    ```
    - Note that python without the 3 typically refers to Python 2 on Linux.

- On Windows, you can install Python on the [Python Website](https://www.python.org/downloads/windows/) or by using [Chocolatey](https://chocolatey.org/) and running the command:
    ```
    choco install python
    ```

### pip
- pip is a Python package manager.

- On Linux, pip is not installed. You can install it by running:
    ```bash
    sudo apt install python3-pip
    ```

- On Windows, pip should already be installed with Python.

## Running Python 
- Make sure you are in the same directory as the Python file that you want to run.

- Let's say we have a file named `main.py` and want to run it. We can run it by using:
    - `python3 main.py` on Linux
    - `python main.py` on Windows.

## Installing libraries using pip. 
- Similar to running Python, Linux uses `pip3` while Windows uses `pip`.
- If you try to install a package, you may run into this error:
    ```
    error: externally-managed-environment

    × This environment is externally managed
    ╰─> To install Python packages system-wide, try apt install
        python3-xyz, where xyz is the package you are trying to
        install.
        
        If you wish to install a non-Debian-packaged Python package,
        create a virtual environment using python3 -m venv path/to/venv.
        Then use path/to/venv/bin/python and path/to/venv/bin/pip. Make
        sure you have python3-full installed.
        
        If you wish to install a non-Debian packaged Python application,
        it may be easiest to use pipx install xyz, which will manage a
        virtual environment for you. Make sure you have pipx installed.
        
        See /usr/share/doc/python3.12/README.venv for more information.

    note: If you believe this is a mistake, please contact your Python installation or OS distribution provider. You can override this, at the risk of breaking your Python installation or OS, by passing --break-system-packages.
    hint: See PEP 668 for the detailed specification.
    ```
    - The error gives you two solutions: `venv` (virtual environment) is for libraries you would use in your code using `import` and `pipx` is for command-line tools. - [StackOverflow](https://stackoverflow.com/questions/75608323/how-do-i-solve-error-externally-managed-environment-every-time-i-use-pip-3)

## Virtual Environments
- My notes for virtual environments are based off of [this video](https://www.youtube.com/watch?v=Y21OR1OPC9A).

- A virtual environment is a self-contained location that enables you to maintain separate and isolated environments for your Python projects.

- Virtual environments let you manage dependencies, versions, and packages without conflicts across different projects.

### Set-Up & Activation
- To create a virtual environment, go to your project directory and run the command for your respective operating system.
    - For Mac/Linux, run:
        ```bash
        python3 -m venv env
        ```
    - For Windows, run:
        ```bash
        python -m venv env
        ```
    - Note: `env` is simply the directory name. You can name it whatever you want.

- To activate your virtual environment, run the command for your respective operating system.
    - For Linux/Mac, run:
        ```bash
        source env/bin/activate
        ```
    - For Windows, run:
        ```
        env\Scripts\activate.bat
        ```
        - If this does not work, try removing the `.bat` extension.
    - Note: If you named your environment something other than `env`, you'll have to swap `env` out of the path with the name that you assigned it.
    - If the activation is successful, you should see `(env) ` prefixed to the normal line of your terminal.

### Deactivation
- To deactivate your virtual environment, simple input `deactivate`.
    - If this worked, you should see that `(env) ` is no longer prefixed to the normal line of your terminal.

### Dependencies/Packages

#### Checking packages installed in virtual environment
- On Linux/Mac, run:
    ```bash
    pip3 list
    ```

- On Windows, run:
    ```bash
    pip list
    ```

- Note: Running this command outside of the environment will result in a list of packages installed globally.

#### Saving Dependencies
- You should not be committing your whole environment directory onto GitHub. It should be apart of your `.gitignore` in the format `env_dir_name/`.

- Instead, we save all of our dependencies into a `requirements.txt` file by running:
    - On Linux/Mac:
        ```
        pip3 freeze > requirements.txt
        ```
    - On Windows:
        ```
        pip freeze > requirements.txt
        ```
    - The listed commands take the output of `pip freeze` (dependencies) and puts it into `requirements.txt`.
    - [pip Requirements File Format](https://pip.pypa.io/en/stable/reference/requirements-file-format/)

#### Downloading dependencies for a project
- If you downloaded a project off of GitHub or some other remote repository with a `requirements.txt` file, you can download the requirements by:
    1. Setting up a virtual enviroment and entering it
    2. Running:
        - For Linux:
            ```
            pip3 install -r requirements.txt
            ```
        - For Windows:
            ```
            pip install -r requirements.txt
            ```

## Language Syntax

### Built-In Functions
- `sum()` gets the sum of numeric values in an iterable.
- `len()` gets the legnth of an iterable.

### Lists
- Instantiated using `[]`. Example:
    ```python
    names = ["Marlyn", "Ruth", "Paul"]
    print(names) # ['Marlyn', 'Ruth', 'Paul']
    ```

- You can append to a list. Example:
    ```python
    names.append("David")
    print(names) # ['Marlyn', 'Ruth', 'Paul', 'David']
    ```

- You can get the length of a list using the `len()` function. Example:
    ```python
    print("Number of names on the list:", len(names)) # Number of names on the list: 4
    ```

- You can sort a list using the `sort()` method. Example:
    ```python
    names.sort()
    for name in names:
        print(name)
    """
    Names in alphabetical order:
    David
    Marlyn
    Paul
    Ruth
    """
    ```

- Lists can store many type of data. Example:
    ```python
    measurements = [-2.5, 1.1, 7.5, 14.6, 21.0, 19.2] # list of floats
    ```

- Items in a list can be lists themselves. Example:
    ```python
    my_list = [[5, 2, 3], [4, 1], [2, 2, 5, 1]]
    print(my_list) # [[5, 2, 3], [4, 1], [2, 2, 5, 1]]
    print(my_list[1]) # [4, 1]
    print(my_list[1][0]) # 4
    ```
    - A two-dimensional array, or a matrix, is also a natural application of a list within a list. For example, the following matrix
        ![alt text](images/3x3_matrix_ex.png)
        could be presented as a two-dimensional list in Python like so:
        ```python
        my_matrix = [[1, 2, 3], [3, 2, 1], [4, 5, 6]]
        ```
        - Since a matrix is a list containing lists, the individual elements within the matrix can be accessed using consecutive square brackets. The first index refers to the row, and the second to the column. Indexing starts from zero, so for example `my_matrix[0][1]` refers to the second item on the first row. 
            ```python
            my_matrix = [[1, 2, 3], [3, 2, 1], [4, 5, 6]]

            print(my_matrix[0][1]) # 2
            my_matrix[1][0] = 10
            print(my_matrix) # [[1, 2, 3], [10, 2, 1], [4, 5, 6]]
            ```
        - A matrix can be traversed using 2 nested for loops:
            ```python
            my_matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

            for row in my_matrix:
                print("a new row")
                for element in row:
                    print(element)
            """
            a new row
            1
            2
            3
            a new row
            4
            5
            6
            a new row
            7
            8
            9
            """
            ```
            - Here's a visualization of the matrix:
                - ![alt text](images/matrix_visualization.png)
                    - The image above reveals that a 3 by 3 matrix technically consists of four lists. The first list represents the entire matrix. The three remaining lists are items in the first list, and represent the rows.
                    - In the image above the execution has progressed to the second row of the matrix, and this list is what the variable `row` currently refers to. The variable `element` contains the element the execution is currently at. The value stored in `element` is the middle item in the list, i.e. 5.

- Lists can contain items of different types. Example:
    ```python
    persons = [["Betty", 10, 1.37], ["Peter", 7, 1.25], ["Emily", 32, 1.64], ["Alan", 39, 1.78]]

    for person in persons:
        name = person[0]
        age = person[1]
        height = person[2]
        print(f"{name}: age {age} years, height {height} meters")
    """
    Betty: age 10 years, height 1.37 meters
    Peter: age 7 years, height 1.25 meters
    Emily: age 32 years, height 1.64 meters
    Alan: age 39 years, height 1.78 meters
    """
    ```
    - The for loop goes through the items in the outer list one by one. That is, each list containing information about a single person is, in turn, assigned to the variable `person`.

### Functions

#### Using global variables within functions
- We know it is possible to assign new variables within function definitions, but the function can also see variables assigned outside it, in the main function. Such variables are called `global variables`.
- Using global variables from within functions is usually a bad idea. Among other issues, doing so may cause bugs which are difficult to trace.
- Example:
    ```python
    def print_reversed(names: list):
        # using the global variable instead of the parameter by accident
        i = len(name_list) - 1
        while i >= 0:
            print(name_list[i])
            i -= 1

    # here the global variable is assigned
    name_list = ["Steve", "Jean", "Katherine", "Paul"]
    print_reversed(name_list)
    """
    Paul
    Katherine
    Jean
    Steve
    """
    print()
    print_reversed(["Huey", "Dewey", "Louie"])
    """
    Paul
    Katherine
    Jean
    Steve
    """
    ```

### Scope
- Example of Scrope bug:
    ```python
    def number_in_list(numbers: list, number: int):
        for number in numbers:
            if number == number:
                return True
        return False
    ```
    - This function seems to always return `True`. The reason is that the `for` loop overwrites the value stored in the parameter `number`. Thus the condition in the `if` statement is always true.
    - Renaming the parameter solves the problem:
        ```python
        def number_in_list(numbers: list, searched_number: int):
            for number in numbers:
                if number == searched_number:
                    return True
            return False
        ```

### References
- Thus far we have thought of a variable as a sort of a "box" which contains the value of the variable. Technically this is not true in Python. What is stored in a variable is not the value per se, but a reference to the object which is the actual value of the variable. The object can be e.g. a number, a string or a list.

    In practice, this means that the value of the variable is not stored in the variable itself. Instead, there is information about the location in computer memory where the value can be found.

    A reference is often represented by an arrow from the variable to the actual value in memory:
    <p align="center">
        <img src="images/reference.png">
    </p>

- So, a reference tells us where the value can be found. The function `id` can be used to find out the exact location the variable points to:
    ```python
    a = [1, 2, 3]
    print(id(a))    # sample output: 4538357072
    b = "This is a reference, too"
    print(id(b))    # sample output: 4537788912
    ```
    - The reference, or the ID of the variable, is an integer, which can be thought of as the address in computer memory where the value of the variable is stored. If you execute the above code on your own computer, the result will likely be different, as your variables will point to different locations - the references will be different.

#### Multiple references to the same list and how to copy a list
- What is happening in this code:
    ```python
    a = [1, 2, 3]
    b = a
    b[0] = 10
    print(a) # [10, 2, 3]
    print(b) # [10, 2, 3]
    ```
    - The assignment `b = a` copies the value stored in variable `a` to the variable `b`. However, the value stored in `a` is not the list itself, but a reference to the list. So, the assignment `b = a` copies the reference. As a result there are now two references to the same memory location containing the list.
    - This means that the list (`[1, 2, 3]`) can be accessed through `a` or `b`.
    - If there is more than one reference to the same list, any one of the references can be used to access the list. On the other hand, a change made through any one of the references affects also the other references, as their target is the same.
    - If you want to create an actual separate copy of a list, you can create a new list and add each item from the original list in turn:
        ```python
        my_list = [1, 2, 3, 3, 5]

        new_list = []
        for item in my_list:
            new_list.append(item)

        new_list[0] = 10
        new_list.append(6)
        print("the original:", my_list) # the original: [1, 2, 3, 3, 5]
        print("the copy:", new_list) # the copy: [10, 2, 3, 3, 5, 6]
        ```
        - The variable `new_list` points to a different list than the variable `my_list`.
        - An easier way to copy a list is the bracket operator `[]`, which we used for slices previously. The notation `[:]` selects all items in the collection. As a side effect, it creates a copy of the list:
            ```python
            my_list = [1,2,3,4]
            new_list = my_list[:]

            my_list[0] = 10
            new_list[1] = 20

            print(my_list) # [10, 2, 3, 4]
            print(new_list) # [1, 20, 3, 4]
            ```

- To copy a 2D list/matrix, you would need to do something like this:
    ```python
    matrix = [[1, 2, 3], [4, 5, 6]]
    res = []
    for r in matrix:
        res.append(r[:])
    return res
    ```

#### Using lists as parameters in functions
- When you pass a list as an argument to a function, you are passing a reference to that list. This means that the function can modify the list directly.
    - The following function takes a list as an argument and adds a new item to the end of the list:
        ```python
        def add_item(my_list: list):
            new_item = 10
            my_list.append(new_item)

        a_list = [1,2,3]
        print(a_list)   # [1, 2, 3]
        add_item(a_list)
        print(a_list)   # [1, 2, 3, 10]
        ```
        <p align="center">
            <img src="images/list_in_fn.png">
        </p>
        - Global frame refers to the variables defined in the main function, whereas the add_item frame with a blue background represents the parameters and variables within that function. As you can see from the visualisation, the `add_item` function refers to the very same list as the main function. The changes made within the `add_item` function also affect the main function.
        - Another way to implement this functionality would be to create a new list within the function, and return that:
            ```python
            def add_item(my_list: list) -> list:
                new_item = 10
                my_list_copy = my_list[:]
                my_list_copy.append(new_item)
                return my_list_copy

            numbers = [1, 2, 3]
            numbers2 = add_item(numbers)

            print("original list:", numbers) # original list: [1, 2, 3]
            print("new list:", numbers2) # new list: [1, 2, 3, 10]
            ```

#### Editing a list given as an argument
- The following is an attempt at a function which should augment each item in a list by ten:
    ```python
    def augment_all(my_list: list):
        new_list = []
        for item in my_list:
            new_list.append(item + 10)
        my_list = new_list

    numbers = [1, 2, 3]
    print("in the beginning:", numbers) # in the beginning: [1, 2, 3]
    augment_all(numbers)
    print("after the function is executed:", numbers) # after the function is executed: [1, 2, 3]
    ```
    - The function takes a reference to a list as an argument. This is stored in the variable `my_list`. The assignment `my_list = new_list` assigns a new value to that same variable. The variable `my_list` now points to the new list created inside the function, and the reference to the original list is no longer available within the function. This assignment has no effect outside the function, however.
    - Furthermore, the variable `new_list`, which contains the new, augmented values, is not accessible from outside the function. It is "lost" as the execution of the function finishes, and focus returns to the main function. The variable `numbers` in the main function always points to the original list.
    <p align="center">
        <img src="images/list_as_arg.png">
    </p>
    - One way to fix this is to copy all the items from the new list to the old list, one by one:
        ```python
        def augment_all(my_list: list):
            new_list = []
            for item in my_list:
                new_list.append(item + 10)

            # copy items from the new list into the old list
            for i in range(len(my_list)):
                my_list[i] = new_list[i]
        ```
        - Python also has a nifty shorthand for assigning multiple items in a collection at once:
            ```shell
            >>> my_list = [1, 2, 3, 4]
            >>> my_list[1:3] = [10, 20]
            >>> my_list
            [1, 10, 20, 4]
            ```
            We can include the entire collection:
            ```shell
            >>> my_list = [1, 2, 3, 4]
            >>> my_list[:] = [100, 99, 98, 97]
            >>> my_list
            [100, 99, 98, 97]
            ```
        - You could also use the `[:]` shorthand:
            ```python
            def augment_all(my_list: list):
                new_list = []
                for item in my_list:
                    new_list.append(item + 10)

                my_list[:] = new_list
            ```
        - We can also just assign the new values directly into the list:
            ```python
            def augment_all(my_list: list):
                for i in range(len(my_list)):
                    my_list[i] += 10
            ```

#### Side effects of functions
- side effect of a function: Unintentional modifications to an object accessed through a reference

- pure functions: functions free of side effects
    - When adhering to a functional programming style, this is a common ideal to follow.

#### Immutable Types
- immutable: value of the object, or any part of it, cannot change. 

- Immutable type's value can be replaced with a new value.

- Some immutabled types in Python are: 
    - `str`
    - `int`
    - `float` 
    - `bool`
    - `tuple`

- Example: 
    ```python
    number = 1
    print(id(number)) # sample output: 4535856912
    number += 10
    print(id(number)) # sample output: 4535856944
    a = 1
    print(id(a)) # sample output: 4535856912
    ```
    - Note how when `a` is set to 1, it has the same reference as when `number` was equal to 1. So, Python has stored the value 1 at that memory location.

- It is good to keep in mind that almost everything is a reference in Python, but all this is rarely relevant to everyday programming tasks.

### Dictionary
- In a dictionary, the items are indexed by keys. Each key maps to a value. The values stored in the dictionary can be accessed and changed using the key.

#### Using a dictionary
- The following example shows you how the dictionary data structure works. Here is a simple dictionary from Finnish to English:
    ```python
    my_dictionary = {}

    my_dictionary["apina"] = "monkey"
    my_dictionary["banaani"] = "banana"
    my_dictionary["cembalo"] = "harpsichord"

    print(len(my_dictionary)) # 3
    print(my_dictionary) # {'apina': 'monkey', 'banaani': 'banana', 'cembalo': 'harpsichord'}
    print(my_dictionary["apina"]) # monkey
    ```
    - The notation `{}` creates an empty dictionary, to which we can now add content. Three key-value pairs are added:`"apina"` maps to `"monkey"`, `"banaani"` maps to `"banana"`, and `"cembalo"` maps to `"harpsichord"`. Finally, the number of key-value pairs in the dictionary is printed, along with the entire dictionary, and the value mapped to the key `"apina"`.

    - After defining the dictionary we could also use it with user input:
        ```python
        word = input("Please type in a word: ")
        if word in my_dictionary:
            print("Translation: ", my_dictionary[word])
        else:
            print("Word not found")
        ```
        - Notice the use of the `in` operator above. When used on a variable of type dictionary, it checks whether the first operand is among the keys stored in the dictionary. Given different inputs, this program might print out the following:
            ```shell
            Please type in a word: apina
            Translation: monkey
            ```
            ```shell
            Please type in a word: pöllö
            Word not found
            ```

#### What can be stored in a dictionary?
- The data type is called dictionary, but it does not have to contain only strings. For example, in the following dictionary the keys are strings, but the values are integers:
    ```python
    results = {}
    results["Mary"] = 4
    results["Alice"] = 5
    results["Larry"] = 2
    ```

- Here the keys are integers and the values are lists:
    ```python
    lists = {}
    lists[5] = [1, 2, 3]
    lists[42] = [5, 4, 5, 4, 5]
    lists[100] = [5, 2, 3]
    ```

#### How keys and values work
- Each key can appear only once in the dictionary. If you add an entry using a key that already exists in the dictionary, the original value mapped to that key is replaced with the new value:
    ```python
    my_dictionary["suuri"] = "big"
    my_dictionary["suuri"] = "large"
    print(my_dictionary["suuri"])
    ```
    ```
    large
    ```

- All keys in a dictionary must be immutable. So, a list cannot be used as a key, because it can be changed. For example, executing the following code causes an error:
    ```python
    my_dictionary[[1, 2, 3]] = 5
    ```
    ```
    TypeError: unhashable type: 'list'
    ```
    - Notice the word 'unhashable' in the error message above. This is a reference to the inner workings of the dictionary data type. Python stores the contents of a dictionary in a hash table. Each key is reduced to a hash value, which determines where the key is stored in computer memory. The error message above indicates that a list cannot be processed into a hash value, so it cannot be used as a key in a dictionary.

- Unlike keys, the values stored in a dictionary can change, so any type of data is acceptable as a value. A value can also be mapped to more than one key in the same dictionary.

#### Traversing a dictionary
- The familiar for item in collection loop can be used to traverse a dictionary, too. When used on the dictionary directly, the loop goes through the keys stored in the dictionary, one by one. In the following example, all keys and values stored in the dictionary are printed out:
    ```python
    my_dictionary = {}

    my_dictionary["apina"] = "monkey"
    my_dictionary["banaani"] = "banana"
    my_dictionary["cembalo"] = "harpsichord"

    for key in my_dictionary:
        print("key:", key)
        print("value:", my_dictionary[key])
    ```
    Output:
    ```shell
    key: apina
    value: monkey
    key: banaani
    value: banana
    key: cembalo
    value: harpsichord
    ```

- Sometimes you need to traverse the entire contents of a dictionary. The method `items` returns all the keys and values stored in the dictionary, one pair at a time:
    ```python
    for key, value in my_dictionary.items():
        print("key:", key)
        print("value:", value)
    ```
    - In the examples above, you may have noticed that the keys are processed in the same order as they were added to the dictionary. As the keys are processed based on a hash value, the order should not usually matter in applications. In fact, in many older versions of Python the order is not guaranteed to follow the time of insertion.

#### Some more advanced ways to use dictionaries
- Let's have a look at a list of words:
    ```python
    word_list = [
    "banana", "milk", "beer", "cheese", "sourmilk", "juice", "sausage",
    "tomato", "cucumber", "butter", "margarine", "cheese", "sausage",
    "beer", "sourmilk", "sourmilk", "butter", "beer", "chocolate"
    ]
    ```
    - We would like to analyze this list of words in different ways. For instance, we would like to know how many times each word appears in the list. A dictionary can be a useful tool in managing this kind of information. In the example below, we go through the items in the list one by one. Using the words in the list as keys in a new dictionary, the value mapped to each key is the number of times the word has appeared:
        ```python
        def counts(my_list):
            words = {}
            for word in my_list:
                # if the word is not yet in the dictionary, initialize the value to zero
                if word not in words:
                    words[word] = 0
                # increment the value
                words[word] += 1
            return words

        # call the function
        print(counts(word_list))
        ```
        Output:
        ```
        {'banana': 1, 'milk': 1, 'beer': 3, 'cheese': 2, 'sourmilk': 3, 'juice': 1, 'sausage': 2, 'tomato': 1, 'cucumber': 1, 'butter': 2, 'margarine': 1, 'chocolate': 1}
        ```

- What if we wanted to categorize the words based on the initial letter in each word? One way to accomplish this would be to use dictionaries:
    ```python
    def categorize_by_initial(my_list):
        groups = {}
        for word in my_list:
            initial = word[0]
            # initialize a new list when the letter is first encountered
            if initial not in groups:
                groups[initial] = []
            # add the word to the appropriate list
            groups[initial].append(word)
        return groups

    groups = categorize_by_initial(word_list)

    for key, value in groups.items():
        print(f"words beginning with {key}:")
        for word in value:
            print(word)
    ```
    Output:
    ```
    words beginning with b:
    banana
    beer
    butter
    beer
    butter
    beer
    words beginning with m:
    milk
    margarine
    words beginning with c:
    cheese
    cucumber
    cheese
    chocolate
    words beginning with s:
    sourmilk
    sausage
    sausage
    sourmilk
    sourmilk
    words beginning with j:
    juice
    words beginning with t:
    tomato
    ```

#### Removing keys and values from a dictionary
- It is naturally possible to also remove key-value pairs from the dictionary. There are two ways to accomplish this. The first is the command `del`:
    ```python
    staff = {"Alan": "lecturer", "Emily": "professor", "David": "lecturer"}
    del staff["David"]
    print(staff) # {'Alan': 'lecturer', 'Emily': 'professor'}
    ```
    - If you try to use the del command to delete a key which doesn't exist in the dictionary, there will be an error:
        ```python
        staff = {"Alan": "lecturer", "Emily": "professor", "David": "lecturer"}
        del staff["Paul"]
        ```
        Output:
        ```
        >>> del staff["Paul"]
        Traceback (most recent call last):
        File "", line 1, in 
        KeyError: 'Paul'
        ```
        - So, before deleting a key you should check if it is present in the dictionary:
            ```python
            staff = {"Alan": "lecturer", "Emily": "professor", "David": "lecturer"}
            if "Paul" in staff:
                del staff["Paul"]
                print("Deleted")
            else:
                print("This person is not a staff member")
            ```
            - As you can see above, `pop` also returns the value from the deleted entry.
            - By default, pop will also cause an error if you try to delete a key which is not present in the dictionary. It is possible to avoid this by giving the method a second argument, which contains a default return value. This value is returned in case the key is not found in the dictionary. The special Python value `None` will work here:
                ```python
                staff = {"Alan": "lecturer", "Emily": "professor", "David": "lecturer"}
                deleted = staff.pop("Paul", None)
                if deleted == None:
                    print("This person is not a staff member")
                else:
                    print(deleted, "deleted")
                ```
                Output:
                ```
                This person is not a staff member
                ```

- Note: If you need to delete the contents of the entire dictionary, and try to do it with a for loop, like so:
    ```python
    staff = {"Alan": "lecturer", "Emily": "professor", "David": "lecturer"}
    for key in staff:
        del staff[key]
    ```
    You will receive an error message:
    ```
    RuntimeError: dictionary changed size during iteration
    ```
    - When traversing a collection with a `for` loop, the contents may not change while the loop is in progress. Luckily, there is a dictionary method for just this purpose:
        ```python
        staff.clear()
        ```

- The other way to delete entries in a dictionary is the method `pop`:
    ```python
    staff = {"Alan": "lecturer", "Emily": "professor", "David": "lecturer"}
    deleted = staff.pop("David")
    print(staff)    # {'Alan': 'lecturer', 'Emily': 'professor'}
    print(deleted, "deleted") # lecturer deleted
    ```

#### Using dictionaries for structured data
- Dictionaries are very useful for structuring data. The following code will create a dictionary which contains some personal data:
    ```python
    person = {"name": "Pippa Python", "height": 154, "weight": 61, "age": 44}
    ```
    This means that we have here a person named Pippa Python, whose height is 154, weight 61, and age 44. The same information could just as well be stored in variables:
    ```
    name = "Pippa Python"
    height = 154
    weight = 61
    age = 44
    ```

- The advantage of a dictionary is that it is a collection. It collects related data under one variable, so it is easy to access the different components. This same advantage is offered by a list:
    ```python
    person = ["Pippa Python", 153, 61, 44]
    ```
    - With lists, the programmer will have to remember what is stored at each index in the list. There is nothing to indicate that `person[2]` contains the weight and `person[3]` the age of the person. When using a dictionary this problem is avoided, as each bit of data is accessed through a named key. 
    - Assuming we have defined multiple people using the same format, we can access their data in the following manner:
        ```python
        person1 = {"name": "Pippa Python", "height": 154, "weight": 61, "age": 44}
        person2 = {"name": "Peter Pythons", "height": 174, "weight": 103, "age": 31}
        person3 = {"name": "Pedro Python", "height": 191, "weight": 71, "age": 14}

        people = [person1, person2, person3]

        for person in people:
            print(person["name"])

        combined_height = 0
        for person in people:
            combined_height += person["height"]

        print("The average height is", combined_height / len(people))
        ```
        Output:
        ```
        Pippa Python
        Peter Pythons
        Pedro Python
        The average height is 173.0
        ```

### Tuple
- Tuple is a data structure which is, in many ways, similar to a list. The most important differences between the two are:
    - Tuples are enclosed in parentheses `()`, while lists are enclosed in square brackets `[]`
    - Tuples are immutable, while the contents of a list may change

- The items stored in a tuple are accessed by index, just like the items stored in a list:
    ```python
    point = (10, 20)
    print("x coordinate:", point[0]) # x coordinate: 10
    print("y coordinate:", point[1]) # y coordinate: 20
    ```

- The values stored in a tuple cannot be changed after the tuple has been defined. The following will not work:
    ```python
    point = (10, 20)
    point[0] = 15
    ```
    Output:
    ```
    TypeError: 'tuple' object does not support item assignment
    ```

#### What is the purpose of a tuple?
- Tuples are ideal for when there is a set collection of values which are in some way connected. For example, when there is a need to handle the x and y coordinates of a point, a tuple is a natural choice, because coordinates will always consist of two values:
    ```python
    point = (10, 20)
    ```
    Technically it is of course possible to also use a list to store these:
    ```python
    point = [10, 20]
    ```
    A list is a collection of consecutive items in a certain order. The size of a list may also change. When we are storing the coordinates of a point, we want to store the x and y coordinates specifically, not an arbitrary list containing those values.

- Because tuples are immutable, unlike lists, they can be used as keys in a dictionary. The following bit of code creates a dictionary, where the keys are coordinate points:
    ```python
    points = {}
    points[(3, 5)] = "monkey"
    points[(5, 0)] = "banana"
    points[(1, 2)] = "harpsichord"
    print(points[(3, 5)])
    ```

#### Tuples without parentheses
- The parentheses are not strictly necessary when defining tuples. The following two variable assignments are identical in their results:
    ```python
    numbers = (1, 2, 3)
    ```
    ```python
    numbers = 1, 2, 3
    ```

- This means we can also easily return multiple values using tuples. Let's have alook at he following example:
    ```python
    def minmax(my_list):
        return min(my_list), max(my_list)

    my_list = [33, 5, 21, 7, 88, 312, 5]

    min_value, max_value = minmax(my_list)
    print(f"The smallest item is {min_value} and the greatest item is {max_value}")
    ```
    Output:
    ```
    The smallest item is 5 and the greatest item is 312
    ```
    - This function returns two values in a tuple. The return value is assigned to two variables at once:
        ```python
        min_value, max_value = minmax(my_list)
        ```
    - Using parentheses may make the notation more clear. On the left hand side of the assignment statement we also have a tuple, which contains two variable names. The values contained within the tuple returned by the function are assigned to these two variables.
        ```python
        (min_value, max_value) = minmax(my_list)
        ```

- The method `my_dictionary.items()` returns each key-value pair as a tuple, where the first item is the key and the second item is the value.

- Another common use case for tuples is swapping the values of two variables:
    ```python
    number1, number2 = number2, number1
    ```
    - The assignment statement above swaps the values stored in the variables `number1` and `number2`. The result is identical to what is achieved with the following bit of code, using a helper variable:
        ```python
        helper_var = number1
        number1 = number2
        number2 = helper_var
        ```

### Reading files
- A very common use case for programming is handling data stored in files. Programs can read data from files and write the computed results to files. Even large amounts of data become easy to process automatically when files are used.

#### Reading data from a file
- Let's first work with a file called `example.txt`, with the following contents:
    ```
    Hello there!
    This example file contains three lines of text.
    This is the last line.
    ```

- A simple way to include files in a Python program is to use the `with` statement. The header line opens the file, and the block where the file can be accessed follows. After the block the file is automatically closed, and can no longer be accessed. So, the following code opens the file, reads the contents, prints them out, and then closes the file:
    ```python
    with open("example.txt") as new_file:
        contents = new_file.read()
        print(contents)
    ```
    ```output
    Hello there!
    This example file contains three lines of text.
    This is the last line.
    ```
    - Note: `with` can be used with any context manager. Context managers in Python offer a structured approach to resource management within a with statement, ensuring proper allocation and deallocation of resources
    - The variable `new_file` above is a file handle. Through it the file can accessed while it is still open. Here we used the method `read`, which returns the contents of the file as a single string. So, in this case the string returned by `read` would be:
    ```
    "Hello there!\nThis example file contains three lines of text.\nThis is the last line."
    ```

#### Going through the contents of a file
- The `read` method is useful for printing out the contents of the entire file, but more often we will want to go through the file line by line. Text files can be thought of as lists of strings, each string representing a single line in the file. We can go through the list with a `for` loop. The following example reads our example file using a `for` loop, removes line breaks from the end of each line, counts the number of lines, and prints each line with its line number. It also keeps track of the length of the lines:
    ```py
    with open("example.txt") as new_file:
        count = 0
        total_length = 0

        for line in new_file:
            line = line.replace("\n", "")
            count += 1
            print("Line", count, line)
            length = len(line)
            total_length += length

    print("Total length of lines:", total_length)
    ```
    Output:
    ```
    Line 1 Hello there!
    Line 2 This example file contains three lines of text.
    Line 3 This is the last line.
    Total length of lines: 81
    ```
    - There is a line break `\n` at the end of each line in the file, but the `print` function also adds a line break by default. There are no extra line breaks in the printout above, because the line breaks at the ends of the lines are removed with the `replace` method. It replaces each line break character with an empty string. This way the lengths of the lines are also calculated correctly.

#### Reading CSV files
- A CSV file, short for comma-separated Values, is a text file which contains data separated by a predetermined character. The most common characters used for this purpose are the comma `,` and the semicolon `;`, but any character is, in principle, possible.

- CSV files are commonly used to store records of different kinds. Many database and spreadsheet programs, such as Excel, can import and export data in CSV format, which makes data exchange between different systems easy.

- We already learnt we can go through the lines in a file with a for loop, but how can we separate the different fields on a single line? Python has a string method `split` for just this purpose. The method takes the separator character(s) as a string argument, and returns the contents of the target string as a list of strings, separated at the separator.
    - An example of how the method works:
        ```py
        text = "monkey,banana,harpsichord"
        words = text.split(",")
        for word in words:
            print(word)
        ```
        Output:
        ```
        monkey
        banana
        harpsichord
        ```
    - The following program goes through the file line by line, splits each line into its separate parts, and prints out the name and grades of each student.
        ```py
        with open("grades.csv") as new_file:
        for line in new_file:
            line = line.replace("\n", "")
            parts = line.split(";")
            name = parts[0]
            grades = parts[1:]
            print("Name:", name)
            print("Grades:", grades)
        ```
        Output:
        ```
        Name: Paul
        Grades: ['5', '4', '5', '3', '4', '5', '5', '4', '2', '4']
        Name: Beth
        Grades: ['3', '4', '2', '4', '4', '2', '3', '1', '3', '3']
        Name: Ruth
        Grades: ['4', '5', '5', '4', '5', '5', '4', '5', '4', '4']
        ```
    - The opposite of split would be `join`. Example:
        ```py
        res = ['a', 'b', 'c']
        print("".join(res)) # abc
        ```

#### Reading the same file multiple times
- Sometimes it is necessary to process the contents of a file more than once in a single program. Let's have a look at a program which works with some personal data stored in a CSV file:
    ```
    Peter;40;Helsinki
    Emily;34;Espoo
    Eric;42;London
    Adam;100;Amsterdam
    Alice;58;Paris
    ```
    ```py
    with open("people.csv") as new_file:
        # print out the names
        for line in new_file:
            parts = line.split(";")
            print("Name:", parts[0])

        # find the oldest
        age_of_oldest = -1
        for line in new_file:
            parts = line.split(";")
            name = parts[0]
            age = int(parts[1])
            if age > age_of_oldest:
                age_of_oldest = age
                oldest = name
        print("the oldest is", oldest)
    ```
    Running this will result in a somewhat cryptic error message:
    ```py
    Traceback (most recent call last):
        print("the oldest is"; oldest)
    UnboundLocalError: local variable 'oldest' referenced before assignment
    ```
    - The reason this happens is that the latter `for` loop is not executed at all, beacuse the file can only be processed once. Once the last line is read, the file handle rests at the end of the file, and the data in the file can no longer be accessed.
    - If we want to access the contents in the second `for` loop, we will have to `open` the file a second time:
        ```py
        with open("people.csv") as new_file:
            # print out the names
            for line in new_file:
                parts = line.split(";")
                print("Name:", parts[0])

        with open("people.csv") as new_file:
            # find the oldest
            age_of_oldest = -1
            for line in new_file:
                parts = line.split(";")
                name = parts[0]
                age = int(parts[1])
                if age > age_of_oldest:
                    age_of_oldest = age
                    oldest = name
            print("the oldest is", oldest)
        ```
        - While the above code would work, it contains unnecessary repetition. It is usually best to read the file just once, and store its contents in an appropriate format for further processing:
            ```py
            people = []
            # read the contents of the file and store it in a list
            with open("people.csv") as new_file:
                for line in new_file:
                    parts = line.split(";")
                    people.append((parts[0], int(parts[1]), parts[2]))

            # print out the names
            for person in people:
                print("Name:", person[0])

            # find the oldest
            age_of_oldest = -1
            for person in people:
                name = person[0]
                age = person[1]
                if age > age_of_oldest:
                    age_of_oldest = age
                    oldest = name
            print("the oldest is", oldest)
            ```

#### More CSV file processing
- Let's continue with the file `grades.csv`, which has the following contents:
    ```
    Paul;5;4;5;3;4;5;5;4;2;4
    Beth;3;4;2;4;4;2;3;1;3;3
    Ruth;4;5;5;4;5;5;4;5;4;4
    ```
    This following program creates a dictionary `grades` based on the contents of the file. The keys are the names of the students, and the value attached to each key is the list of grades attained by the student. The program converts the grades to integer values, so they can be processed easier.
    ```py
    grades = {}
    with open("grades.csv") as new_file:
        for line in new_file:
            line = line.replace("\n", "")
            parts = line.split(";")
            name = parts[0]
            grades[name] = []
            for grade in parts[1:]:
                grades[name].append(int(grade))

    print(grades)
    ```
    Output:
    ```
    {'Paul': [5, 4, 5, 3, 4, 5, 5, 4, 2, 4], 'Beth': [3, 4, 2, 4, 4, 2, 3, 1, 3, 3], 'Ruth': [4, 5, 5, 4, 5, 5, 4, 5, 4, 4]}
    ```
    Now we can print out some statistics on each student based on the contents of the dictionary `grades`:
    ```py
    for name, grade_list in grades.items():
        best = max(grade_list)
        average = sum(grade_list) / len(grade_list)
        print(f"{name}: best grade {best}, average {average:.2f}")
    ```
    ```
    Paul: best grade 5, average 4.10
    Beth: best grade 4, average 2.90
    Ruth: best grade 5, average 4.50
    ```
    
#### Removing unnecessary lines, spaces and line breaks
- Let's assume we have a CSV file containing some names, which has been exported from Excel:
    ```
    first; last
    Paul; Python
    Jean; Java
    Harry; Haskell
    ```
    Excel is notorious for adding extra whitespace. Here we have an extra space character between the items, after each semicolon.
    
    We would like to print out the last names of each person on the list. The first line contains the headers for the data, and it can be safely ignored:
    ```py
    last_names = []
    with open("people.csv") as new_file:
        for line in new_file:
            parts = line.split(";")
            # ignore the header line
            if parts[0] == "first":
                continue
            last_names.append(parts[1])

    print(last_names)
    ```
    Exectuing this would print out:
    ```
    [' Python\n', ' Java\n', ' Haskell']
    ```
    - The first two items have a line break character at the end, and all three have an extra leading space character.
    - We have already used the `replace` method to remove extra whitespace, but a more efficient solution is to use the Python string method `strip`, which removes whitespace from the beginning and end of a string. It removes all spaces, line breaks, tabs and other characters which would not normally be printed out. 
        - You can try it out in the Python console:
            ```shell
            >>> " tryout ".strip()
            'tryout'
            >>> "\n\ntest\n".strip()
            'test'
            >>>
            ```
        - Stripping the string requires only a small change to the program:
            ```py
            last_names = []
            with open("people.csv") as new_file:
                for line in new_file:
                    parts = line.split(';')
                    if parts[0] == "first":
                        continue # this was the header line, so it is ignored
                    last_names.append(parts[1].strip())
            print(last_names)
            ```
            Now we have the desired tidy printout:
            ```
            ['Python', 'Java', 'Haskell']
            ```
        - There are also the related string methods `lstrip` and `rstrip`. They remove only the leading or trailing unprintable characters, l for the left edge of the string and r for the right:
            ```shell
            >>> " teststring  ".rstrip()
            ' teststring'
            >>> " teststring  ".lstrip()
            'teststring  '
            ```

#### Combining data from different files
- It is very common for the data processed by a program to be scattered in multiple files. Lets have a look at a situation where the personal details of the personnel of a company are stored in a file called `employees.csv`:
    ```
    pic;name;address;city
    080488-123X;Pekka Mikkola;Vilppulantie 7;00700 Helsinki
    290274-044S;Liisa Marttinen;Mannerheimintie 100 A 10;00100 Helsinki
    010479-007Z;Arto Vihavainen;Pihapolku 4;01010 Kerava
    010499-345K;Leevi Hellas;Tapiolantie 11 B;02000 Espoo
    ```
    The salaries are stored in a separate file `salaries.csv`:
    ```
    pic;salary;bonus
    080488-123X;3300;0
    290274-044S;4150;200
    010479-007Z;1300;1200
    ```
    Each data line in both files contains the *personal identity code*, which identifies whose data we are dealing with. Using the personal identity code as a common factor, it is easy to connect the names and salaries of each employee. We can, for example, print out the following list of monthly incomes:
    ```
    incomes:
    Pekka Mikkola    3300 euros
    Liisa Marttinen  4350 euros
    Arto Vihavainen  2500 euros
    ```
    This program uses two dictionaries as helper data structures: `names` and `salaries`. Both use the PIC as key:
    ```py
    names = {}

    with open("employees.csv") as new_file:
        for line in new_file:
            parts = line.split(';')
            if parts[0] == "pic":
                continue
            names[parts[0]] = parts[1]

    salaries = {}

    with open("salaries.csv") as new_file:
        for line in new_file:
            parts = line.split(';')
            if parts[0] == "pic":
                continue
            salaries[parts[0]] = int(parts[1]) +int(parts[2])

    print("incomes:")

    for pic, name in names.items():
        if pic in salaries:
            salary = salaries[pic]
            print(f"{name:16} {salary} euros")
        else:
            print(f"{name:16} 0 euros")
    ```
    - First the program produces the dictionaries `names` and `salaries`. They have the following contents:
        ```py
        {
            '080488-123X': 'Pekka Mikkola',
            '290274-044S': 'Liisa Marttinen',
            '010479-007Z': 'Arto Vihavainen',
            '010499-345K': 'Leevi Hellas'
        }

        {
            '080488-123X': 3300,
            '290274-044S': 4350,
            '010479-007Z': 2500
        }
        ```
    - The `for` loop at the end of the program combines the names of the employees with their respective salaries.
    - The program also takes care of situations where the employee's pic is not present in the salary file.
    - Remember, the order in which items are stored in a dictionary does not matter, as the keys are processed based on hash values.

### Writing Files
- Typically a program processes data and stores the results in a file, so they can be used later or processed further by some other program. We can create a new file every time we want to write data to a file, but we can also append new data to the end of an existing file. In both cases we use the `open` function from the previous section. For writing files the function requires a second argument.

#### Creating a new file
- 
