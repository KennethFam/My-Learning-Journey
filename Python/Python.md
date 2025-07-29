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
- If you want to create a new file, you would call the open function with the additional argument `w`, to signify that the file should be opened in write mode. So, the function call could look like this:
    ```py
    with open("new_file.txt", "w") as my_file:
        # code to write something to the file
    ```
    - Note: If the file already exists, all the contents will be overwritten. It pays to be very careful when creating new files.
    - With the file open you can write data to it. You can use the method `write`, which takes the string that is to be written as its argument.
        ```py
        with open("new_file.txt", "w") as my_file:
            my_file.write("Hello there!")
        ```
        - When you execute the program, a new file named `new_file.txt` appears in the directory. The contents would look like this:
            ```
            Hello there!
            ```

- If you want line breaks in the file, you will have to add them by hand - the `write` function doesn't work exactly like the more familiar `print` function, though they are similar. So, the following program:
    ```py 
    with open("new_file.txt", "w") as my_file:
        my_file.write("Hello there!")
        my_file.write("This is the second line")
        my_file.write("This is the last line")
    ```
    would result in a file with these contents:
    ```
    Hello there!This is the second lineThis is the last line
    ```
    - Line breaks are achieved by adding new line characters `\n` to the argument strings:
        ```py
        with open("new_file.txt", "w") as my_file:
            my_file.write("Hello there!\n")
            my_file.write("This is the second line\n")
            my_file.write("This is the last line\n")
        ```
        Now the contents of `new_file.txt` would look like this:
        ```
        Hello there!
        This is the second line
        This is the last line
        ```

#### Appending data to an existing file
- If you want to append data to the end of a file, instead of overwriting the entire file, you should open the file in append mode with the argument `a`.
    - If the file doesn't yet exist, append mode works exactly like write mode.

- The following program opens the file `new_file.txt` and appends a couple of lines of text to the end:
    ```py
    with open("new_file.txt", "a") as my_file:
        my_file.write("This is the 4th line\n")
        my_file.write("And yet another line.\n")
    ```
    After this program is executed the contents of the file would look like this:
    ```
    Hello there!
    This is the second line
    This is the last line
    This is the 4th line
    And yet another line.
    ```

- In programming practice, appending data to files is not a very common task. More often a file is read, processed and overwritten in its entirety. For example, when the contents should change in the middle of the file, it is usually easiest to overwrite the entire file.

#### Writing CSV files
- CSV files can be written line by line with the `write` method just like any other file. The following example creates the file `coders.csv`, with each line containing the name, working environment, favourite language and years of experience of a single programmer. The fields are separated by a semicolon.
    ```py
    with open("coders.csv", "w") as my_file:
        my_file.write("Eric;Windows;Pascal;10\n")
        my_file.write("Matt;Linux;PHP;2\n")
        my_file.write("Alan;Linux;Java;17\n")
        my_file.write("Emily;Mac;Cobol;9\n")
    ```
    Executing this program would result in the following file:
    ```
    Eric;Windows;Pascal;10
    Matt;Linux;PHP;2
    Alan;Linux;Java;17
    Emily;Mac;Cobol;9
    ```

- What if the data to be written is stored in computer memory in a list?
    ```py
    coders = []
    coders.append(["Eric", "Windows", "Pascal", 10])
    coders.append(["Matt", "Linux", "PHP", 2])
    coders.append(["Alan", "Linux", "Java", 17])
    coders.append(["Emily", "Mac", "Cobol", 9])
    ```
    We can build the string we want to write as an f-string, and write the ready line to the file like so:
    ```py
    with open("coders.csv", "w") as my_file:
        for coder in coders:
            line = f"{coder[0]};{coder[1]};{coder[2]};{coder[3]}"
            my_file.write(line+"\n")
    ```
    - If each list of coder data was very long, with many more items, building the string by hand would be quite cumbersome. We can use a `for` loop to build the string instead:
        ```py
        with open("coders.csv", "w") as my_file:
            for coder in coders:
                line = ""
                for value in coder:
                    line += f"{value};"
                line = line[:-1]
                my_file.write(line+"\n")
        ```
        - `line = line[:-1]` removes the last semicolon.

#### Clearing file contents and deleting files
- Sometimes it is necessary to clear the contents of an existing file. Opening the file in write mode and closing the file immediately will achieve just this:
    ```py
    with open("file_to_be_cleared.txt", "w") as my_file:
        pass
    ```
    - Now the `with` block only contains the command `pass`, which doesn't actually do anything. Python does not allow empty blocks, so the command is necessary here.
    - It is possible to also bypass the `with` block by using the following oneliner:
        ```py
        open('file_to_be_cleared.txt', 'w').close()
        ```

- You can also delete a file entirely. We will have to ask for help from the operating system to achieve this:
    ```py
    # the command to delete files is in the os module
    import os

    os.remove("unnecessary_file.csv")
    ```
    
#### Handling data in a CSV format
- Let's write a program which assesses students' performance on a course. The program reads a CSV file, which contains weekly exercise points received by the students. The program then calculates the points total and determines the grade attained by each student. Finally, the program creates a CSV file containing the points total and grade for each student.
    - The CSV file given as input to the program looks like this:
        ```
        Peter;4;2;3;5;4;0;0
        Paula;7;2;8;3;5;4;5
        Susan;3;4;3;5;3;4;4
        Emily;6;6;5;5;0;4;8
        ```
    - The program logic is divided into three functions: reading the file and processing the contents into an accessible format, determining the grade, and writing the file.
    - The file is read following the principles covered in the previous section. The data is stored in a dictionary, where the key is the student's name, and the value is a list of the points received by the student, in integer format:
        ```py
        def read_weekly_points(filename):
            weekly_points = {}
            with open(filename) as my_file:
                for line in my_file:
                    parts = line.split(";")
                    point_list = []
                    for points in parts[1:]:
                        point_list.append(int(points))
                    weekly_points[parts[0]] = point_list

            return weekly_points
        ```
    - The second function is for determining the grade based on the points received. This function is in turn used by the third function, which writes the results to the file.
        ```py
        def grade(points):
            if points < 20:
                return 0
            elif points < 25:
                return 1
            elif points < 30:
                return 2
            elif points < 35:
                return 3
            elif points < 40:
                return 4
            else:
                return 5

        def save_results(filename, weekly_points):
            with open(filename, "w") as my_file:
                for name, point_list in weekly_points.items():
                    point_sum = sum(point_list)
                    my_file.write(f"{name};{point_sum};{grade(point_sum)}\n")
        ```
    - This structure lets us write a very simple main function. Notice how the filenames for the files which are read and written are given as arguments in the main function:
        ```py
        weekly_points = read_weekly_points("weekly_points.csv")
        save_results("results.csv", weekly_points)
        ```
        - When the main function is executed, the contents of the file `results.csv` created as a result looks like this:
            ```
            Peter;18;0
            Paula;34;3
            Susan;26;2
            Emily;41;5
            ```
    - Notice how each function defined above is relatively simple, and they all have a single responsibility. This is a common and advisable approach when programming larger wholes. The single reponsibility principle makes verifying functionality easier. It also makes it easier to make changes to the program later, and to add new features.
        - Say we wanted to add a function for printing out the grade for a single student. We already have a function which determines the student's grade, so we can use this in our new function:
            ```py
            def get_grade(student_name, weekly_points):
                for name, point_list in weekly_points.items():
                    if name == student_name:
                        return grade(sum(point_list))


            weekly_points = read_weekly_points("weekly_points.csv")
            print(get_grade("Paula", weekly_points)) # 3
            ```
    - If we determine a certain functionality in the program needs fixing, in a well designed program the change will affect only some select sections of code, and it will be easier to determine where the changes should be made. For example, if we wanted to change the grade boundaries, we'd only need to implement the change in the function for determining the grade, and it would work also in all the other functions utilizing this function. If the code for this single functionality was implemented in multiple places, there would be a definite risk that we would not remember to change all the instances when changing the functionality.

### Handling errors
- The are two basic categories of errors that come up in programming contexts:
    1. Syntax errors, which prevent the execution of the program
    2. Runtime errors, which halt the execution
    - Errors in category 1 are usually easy to fix, as the Python interpreter flags the error location when attempting to execute the program. Common syntax errors include a missing colon at the end of a header line, or a missing quotation mark at the end of a string.
    - Errors in category 2 can be harder to spot, as it may happen that they only occur at a certain point in the execution of a program, and only in certain circumstances. The program may work just fine in most situations, but halt due to an error in a specific marginal case. We will now concentrate on handling these types of errors.

#### Input validation
- Many errors that come up during the execution of a program have to do with invalid input. Some examples include:
    - missing or empty input values in mandatory fields, such as empty strings when the length of the string is critical
    - negative values where only positive values are accepted, such as -15 as the amount of an ingredient in a recipe
    - missing files or typos in filenames
    - values that are too small or too large, for example when working with dates and times
    - invalid indexes, such as trying to access index 3 in the string "hey"
    - values of a wrong type, such as strings when integers are expected

- Fortunately, we as programmers can prepare for most errors. Let's have a look at a program which asks the user for their age, and makes sure it is an acceptable number (between 0 and 150, in this case):
    ```py
    age = int(input("Please type in your age: "))
    if age >= 0 and age <= 150:
        print("That is a fine age")
    else:
        print("This is not a valid age")
    ```
    Sample Output(s):
    ```
    Please type in your age: 25
    That is a fine age
    ```
    ```
    Please type in your age: -3
    This is not a valid age
    ```
    - As long as the user types in an integer value, our input validation seems to work fine. But what if they type in a string?
        ```
        Please type in your age: twenty-three
        ValueError: invalid literal for int() with base 10: 'twenty-three'
        ```
        - The `int` function is unable to parse the input string `twenty-three` as a valid integer value. The execution halts and the above error message is printed.

#### Exceptions
- Errors that occur while the program is already running are called *exceptions*. It is possible to prepare for exceptions, and handle them so that the execution continues despite them occurring.

- Exception handling in Python is accomplished with `try` and `except` statements. The idea is that if something within a `try` block causes an exception, Python checks if there is a corresponding `except` block. If such a block exists, it is executed and the program then continues as if nothing happened.

- Let's change the above example so that the program is prepared for the `ValueError` exception:
    ```py
    try:
    age = int(input("Please type in your age: "))
    except ValueError:
        age = -1

    if age >= 0 and age <= 150:
        print("That is a fine age")
    else:
        print("This is not a valid age")
    ```
    ```
    Please type in your age: twenty-three
    This is not a valid age
    ```
    - We can use the `try` block to flag that the code within the block may cause an error. In the `except` statement directly after the block the relevant error is mentioned. In the above example we covered only a `ValueError` exception. If the exception had some other cause, the execution would still have halted, despite the `try` and `except` blocks.
    - In the above example, if the error is caught, the value of `age` is set to -1. This is an invalid input value which we have already programmed behaviour for, as the program expects the age of the user to be greater than 0.

- In the following example we have a function `read_integer`, which asks the user to type in an integer value, but the function is also prepared for invalid input. The function keeps asking for integers until the user types in a valid input value.
    ```py
    def read_integer():
        while True:
            try:
                input_str = input("Please type in an integer: ")
                return int(input_str)
            except ValueError:
                print("This input is invalid")

    number = read_integer()
    print("Thank you!")
    print(number, "to the power of three is", number**3)
    ```
    ```
    Sample output
    Please type in an integer: three
    This input is invalid
    Please type in an integer: aybabtu
    This input is invalid
    Please type in an integer: 5
    Thank you!
    5 to the power of three is 125
    ```

- Sometimes it is enough to catch exceptions with a try-except structure, without doing anything about them. That is, we can just ignore the situation in the `except` block. If we were to change the above example so that we only accepted integers smaller than 100, the results could look like this:
    ```py
    def read_small_integer():
        while True:
            try:
                input_str = input("Please type in an integer: ")
                number = int(input_str)
                if number < 100:
                    return number
            except ValueError:
                pass # this command doesn't actually do anything

            print("This input is invalid")

    number = read_small_integer()
    print(number, "to the power of three is", number**3)
    ```
    ```
    Please type in an integer: three
    This input is invalid
    Please type in an integer: 1000
    This input is invalid
    Please type in an integer: 5
    Thank you!
    5 to the power of three is 125
    ```
    - Now the `except` block only contains the command `pass`, which doesn't do anything. Python does not allow empty blocks, so the command is necessary.

#### Typical errors
- Here is a selection of typical errors you will likely come across, along with some situations where they may occur.

- Value Error
    - This error is often thrown when the argument passed to a function is somehow invalid. For example, the function call `float("1,23")` causes an error, because decimals are always separated by a point in Python, and here we have a comma.

- TypeError
    - This error occurs when a value is of the wrong type. For example, the function call `len(10)` causes a `TypeError`, because the function `len` requires a value whose length can be calculated, such as a string or a list.

- IndexError
    - This common error occurs when trying to refer to an index which doesn't exist. For example, the expression `"abc"[5]` causes an `IndexError`, because the string in question has no index 5.

- ZeroDivisionError
    - As the name implies, this error is thrown when trying to divide by zero, which we know from mathematics to always be a bad idea. For example, if we try to determine the arithmetic mean of values in a list with the formula `sum(my_list) / len(my_list)`, but our list has length zero, this error will occur.

- Exceptions in file handling
    - Some common errors when working with files are **FileNotFoundError** (when trying to access a file which doesn't exist), **io.UnsupportedOperation** (when trying to perform an operation on a file which is not supported by the mode in which the file is opened) or **PermissionError** (the program lacks necessary permissions to access the file).

#### Handling multiple exceptions at once
- There may be more than one `except` block attached to each `try` block. For example, the following program can handle both a `FileNotFoundException` and a `PermissionError`:
    ```py
    try:
        with open("example.txt") as my_file:
            for line in my_file:
                print(line)
    except FileNotFoundError:
        print("The file example.txt was not found")
    except PermissionError:
        print("No permission to access the file example.txt")
    ```

- Sometimes it is not necessary to specify the error the program prepares for. Especially when dealing with files, it is often enough to know that an error has occurred, and safely exit the program. It is not always necessary to know why the error occurred. If we need to cover for all possible exceptions, we can use the `except` block without specifying the error:
    ```py
    try:
        with open("example.txt") as my_file:
            for line in my_file:
                print(line)
    except:
        print("There was an error when reading the file.")
    ```
    - The `except` statement here covers all possible errors, even those caused by the programming mistakes. Only syntax errors will not be caught by this, as they prevent the code from being executed in the first place.

- For example, the following program will always throw an error, because the variable name `my_file` is written as `myfile` on the third line.
    ```py
    try:
        with open("example.txt") as my_file:
            for line in myfile:
                print(line)
    except:
        print("There was an error when reading the file.")
    ```
    - An `except` block can hide the actual error: the problem here was not caused by file handling as such, but by the variable name which was misspelled. Without the `except` block the error thrown would be shown, and the cause could be found more easily. Therefore it is usually a good idea to use only `except` blocks specifically declared for certain error types.

#### Passing exceptions
- If executing a function causes an exception, and this exception is not handled, it is passed on to the section of code which called the function, and so forth up the call chain, until it reaches the main function level. If it is not handled there, either, the execution of the program halts, and the exception is usually printed out for the user to see.

- In the following example we have the function `testing`. If it causes an exception, this is not handled within the function itself, but in the main function:
    ```py
    def testing(x):
        print(int(x) + 1)

    try:
        number = input("Please type in a number: ")
        testing(number)
    except:
        print("Something went wrong")
    ```
    ```
    Please type in a number: three
    Something went wrong
    ```

#### Raising exceptions
- You can also raise exceptions, with the command `raise`. It may seem like an odd idea to purposefully cause errors in your programs, but it can, in fact, be a very useful mechanism. For instance, it can sometimes be a good idea to raise an error when detecting invalid parameters. So far we have usually printed out messages when validating input, but if we are writing a function which is executed from elsewhere, just printing something out can go unnoticed when the function is called. Raising an error can make debugging easier. In the following example we have a function which calculates factorials (for example, the factorial of the number 5 is 1 * 2 * 3 * 4 * 5). If the argument passed to the function is negative, the function raises an error:
    ```py
    def factorial(n):
        if n < 0:
            raise ValueError("The input was negative: " + str(n))
        k = 1
        for i in range(2, n + 1):
            k *= i
        return k

    print(factorial(3))
    print(factorial(6))
    print(factorial(-1))
    ```
    ```
    Sample output
    6
    720
    Traceback (most recent call last):
    File "test.py", line 11, in 
    print(factorial(-1))
    File "test.py", line 3, in factorial
    raise ValueError("The input was negative: " + str(n))
    ValueError: The input was negative: -1
    ```

### Local and global variables
- The *scope* of a variable refers to the sections of a program where a variable is accessible. A local variable is only accessible in a defined section of the program, while a global variable is available for use in any section of the program.

#### Local variables
- Variables defined within a Python function are local variables, only available within the function. This applies to both function parameters, and other variables defined within the function definition. A variable which is local to a function does not exist outside the function.

- In the following example we are trying to access the variable `x` in the main function, but this causes an error:
    ```py
    def testing():
        x = 5
        print(x)

    testing()
    print(x)
    ```
    ```
    5
    NameError: name 'x' is not defined
    ```
    - The variable `x` only exists while the function `testing` is being executed. Other functions or the main function cannot access the variable.

#### Global variables
- Variables defined within the main function are global variables. We previously defined the main function as those sections of code in a Python program which do not fall within any other function. The value stored in a global variable can be accessed from any other function in the program, so the following does not cause any errors:
    ```py
    def testing():
        print(x)

    x = 3
    testing()
    ```
    ```
    3
    ```

- A global variable cannot be changed directly from within another function. The following function has no effect on the value stored in the global variable:
    ```py
    def testing():
        x = 5
        print(x)

    x = 3
    testing()
    print(x)
    ```
    ```
    5
    3
    ```
    - Here the function `testing` creates a new, local variable `x`, which "masks" the global variable while the function is being executed. This variable has the value `5`, but it is a different variable than the global `x` which is defined in the main function.

- But what would the following code do?
    ```py
    def testing():
        print(x)
        x = 5

    x = 3
    testing()
    print(x)
    ```
    ```
    UnboundLocalError: local variable 'x' referenced before assignment
    ```
    - The function `testing` assigns a value to the variable `x`, so Python interprets `x` to be a local variable instead of the global variable of the same name. The function attempts to access the variable before it is defined, so there is an error. If we wish to specify that we mean to change the global variable within a function, we will need the Python keyword `global`:
        ```py
        def testing():
            global x
            x = 3
            print(x)

        x = 5
        testing()
        print(x)
        ```
        ```
        3
        3
        ```
        - Now the assignment `x = 3` within the function also affects the main function. All sections of the program are using the same global variable `x`.

#### When should you use global variables?
- Global variables are not a way to bypass function parameters or return values, and they should not be used as such. That is, it is possible to write a function which stores its results directly in a global variable:
    ```py
    def calculate_sum(a, b):
        global result
        result = a + b

    calculate_sum(2, 3)
    print(result)
    ```
    - It is better to write a function with a return value, as we are used to do by now:
        ```py
        def calculate_sum(a, b):
            return a + b

        result = calculate_sum(2, 3)
        print(result)
        ```
        - The advantage of the latter approach is that the function is an independent whole. It has certain, defined parameters, and it returns a result. It has no side effects, so it can be tested and changed independently of the other sections of the program.

- Global variables are useful in situations where we need to have some common, "higher level" information available to all functions in the program. The following is an example of just such a situation:
    ```py
    def calculate_sum(a, b):
        global count
        count += 1
        return a + b

    def calculate_difference(a, b):
        global count
        count += 1
        return a - b


    count = 0
    print(calculate_sum(2, 3))
    print(calculate_sum(5, 5))
    print(calculate_difference(5, 2))
    print(calculate_sum(1, 0))
    print("There were", count, "function calls")
    ```
    ```
    5
    10
    3
    1
    There were 4 function calls
    ```
    - In this case we want to keep track of how many times either of the functions were called during the execution of the program. The global variable `count` is useful here, because we can increment it from the functions themselves as they are executed, but still access the final value in the main function.

#### Passing data from one function to another, revisited
- If a program consists of multiple functions, the question of passing data from one function to another often comes up. When we touched upon this topic previously, we had a program which asks the user for some integer values, prints them out, and performs some statistical analysis on the numbers. The program was divided into three separate functions:
    ```py
    def input_from_user(how_many: int):
        print(f"Please type in {how_many} numbers:")
        numbers = []

        for i in range(how_many):
            number = int(input(f"Number {i+1}: "))
            numbers.append(number)

        return numbers

    def print_result(numbers: list):
        print("The numbers are: ")
        for number in numbers:
            print(number)

    def analyze(numbers: list):
        mean = sum(numbers) / len(numbers)
        return f"There are altogether {len(numbers)} numbers, the mean is {mean}, the smallest is {min(numbers)} and the greatest is {max(numbers)}"

    # the main function using these functions
    inputs = input_from_user(5)
    print_result(inputs)
    analysis_result = analyze(inputs)
    print(analysis_result)
    ```
    An example of the program's execution:
    ```
    Please type in 5 numbers:
    Number 1: 10
    Number 2: 34
    Number 3: -32
    Number 4: 99
    Number 5: -53
    The numbers are:
    10
    34
    -32
    99
    -53
    There are altogether 5 numbers, the mean is 11.6, the smallest is -53 and the greatest is 99
    ```
    - The basic principle here is that the main function "stores" the data processed by the program. Here, this means the numbers typed in by the user, which are stored in the variable `inputs`.
    - If the numbers are needed in some function, the variable is passed as an argument, as seen above when the functions `print_result` and `analyze` are called. If the function produces a result that is relevant elsewhere in the program, the function returns this with a return statement, as seen with the functions `input_from_user` and `analyse` above.
    
    - As always in programming, there are many ways to arrive at the same functionality. It would be possible to use the keyword `global` and have the functions directly access the `inputs` variable defined in the main function. There are good reasons why this is not a smart move, however. If many different functions can access and potentially change a variable directly, it quickly becomes impossible to reliably track the state of the program, and the program risks becoming unpredictable. This is especially the case as the number of function involved grows large, as it is wont (usually/habitually) to do in large software projects.
    - In conclusion, passing data into and out of functions is best handled by arguments and return values.
    - You could also separate the implicit main function in the example above into its own, explicit `main` function. Then the variable `inputs` would no longer be a global variable, but instead a local variable within the `main` function:
        ```py
        # your main function goes here
        def main():
            inputs = input_from_user(5)
            print_result(inputs)
            analysis_result = analyze(inputs)

            print(analysis_result)

        # run the main function
        main()
        ```

### Modules

#### Debugging revisited
- Python version 3.7 brought yet another easy and useful tool for debugging programs: the `breakpoint()` command. You can add this command to any point in your code (within normal syntactic rules, of course). When the program is run, the execution halts at the point where you inserted the `breakpoint` command. Here is an example of debugging efforts when completing one of the exercises from the previous part (please ignore the Finnish variable names in the images, and concentrate on the functionality):
    ![alt text](images/breakpoint.png)
    - When the execution halts at the `breakpoint` command, an interactive console window is opened. Here you can write any code just as you would in a normal Python console, and see how the code works at exactly that point in the program.
    - The `breakpoint` command is especially useful when you know that some line of code causes an error, but you are not quite sure why that is. Add a breakpoint just before the problematic line of code and run your program. Now you can try out different options in the interactive console window, and figure out the correct commands to include in your program.
    - It is also possible to continue execution from where it halted. The command `continue`, or the shorthand `c`, typed into the debugging console will resume execution until the next breakpoint is reached. The following picture depicts a situation where the loop has already been executed a few times:
    ![alt text](images/continue.png)
        - There are also some other commands available in the debugging console. You may find them [here](https://docs.python.org/3/library/pdb.html#debugger-commands), or else you can type in *help* in the debugging console:
        ![alt text](images/help.png)
            - The command `exit` finishes the execution of the program.
    - When you are done debugging, remember to remove the `breakpoint` commands from your code!

#### Using modules
- The Python standard library is a collection of standardised functions and objects, which can be used to expand the expressive power of Python in many ways. 

- The standard library is comprised of modules, which contain functions and classes grouped around different themes and functionalities. 

- The command `import` makes the contents of the given module accessible in the current program. Let's have a closer look at working with the `math` module. It contains the definitions of some mathematical functions, such as `sqrt` for square root and `log` for logarithm.
    ```py
    import math

    # The square root of the number 5
    print(math.sqrt(5))
    # the base 2 logarithm of the number 8
    print(math.log(8, 2))
    ```
    ```
    2.23606797749979
    3.0
    ```
    - The functions are defined in the `math` module, so they must be referred to as `math.sqrt` and `math.log` in the program code.

#### Selecting distinct sections from a module
- Another way to use modules is to select a distinct entity from the module with the `from` command. In case we want to use just the functions `sqrt` and `log` from the module `math`, we can do the following:
    ```py
    from math import sqrt, log

    print(sqrt(5))
    print(log(5,2))
    ```
    - As you can see above, we do not need the `math` prefix when using the functions imported in this manner.

- Sometimes a handy shortcut is to import all the contents of a module with the star notation:
    ```py
    from math import *

    print(sqrt(5))
    print(log(5,2))
    ```
    - Importing modules with the star notation can be useful when testing and in some smaller projects, but it can pose some new problems, too. We will come across these later.

#### The contents of a module
- The Python documentation has extensive resources on each module in the Python standard library. The documentation contains information on the functions and methods defined in the module, and how the module can be used. For example, [here is the link](https://docs.python.org/3/library/math.html) to the documentation for the `math` module.

- We can also have a look at the contents of the module with the function `dir`:
    ```py
    import math

    print(dir(math))
    ```
    - The function returns a list of names defined by the module. These may be, for example, names of classes, constant values or functions:
    ```
    ['__doc__', '__name__', '__package__', 'acos', 'acosh', 'asin', 'asinh', 'atan', 'atan2', 'atanh', 'ceil', 'copysign', 'cos', 'cosh', 'degrees', 'e', 'erf', 'erfc', 'exp', 'expm1', 'fabs', 'factorial', 'floor', 'fmod', 'frexp', 'fsum', 'gamma', 'hypot', 'isinf', 'isnan', 'ldexp', 'lgamma', 'log', 'log10', 'log1p', 'modf', 'pi', 'pow', 'radians', 'sin', 'sinh', 'sqrt', 'tan', 'tanh', 'trunc']
    ```

### Randomness
- This section concentrates on the module [random](https://docs.python.org/3/library/random.html?highlight=random#module-random) from the Python standard library. It contains tools for generating random numbers and other randomized functionality.

#### Generating a random number
- The function [randint(a, b)](https://docs.python.org/3/library/random.html?highlight=random#random.randint) returns a random integer value between `a` and `b`, inclusive. For example, the following program works like a generic die:
    ```py
    from random import randint

    print("The result of the throw:", randint(1, 6))
    ```
    Executing this could print out:
    ```
    The result of the throw: 4
    ```

- The following program throws the die ten times:
    ```py
    from random import randint

    for i in range(10):
        print("The result of the throw:", randint(1, 6))
    ```
    Running the above could print out:
    ```
    The result of the throw: 5
    The result of the throw: 4
    The result of the throw: 3
    The result of the throw: 2
    The result of the throw: 3
    The result of the throw: 4
    The result of the throw: 6
    The result of the throw: 4
    The result of the throw: 4
    The result of the throw: 3
    ```

#### More randomizing functions
- The function [shuffle](https://docs.python.org/3/library/random.html?highlight=random#random.shuffle) will shuffle any data structure passed as an argument, in place. For example, the following program shuffles a list of words:
    ```py
    from random import shuffle

    words = ["atlas", "banana", "carrot"]
    shuffle(words)
    print(words)
    ```
    Possible Output:
    ```
    ['banana', 'atlas', 'carrot']
    ```

- The function `choice` returns a randomly picked item from a data structure:
    ```py
    from random import choice

    words = ["atlas", "banana", "carrot"]
    print(choice(words))
    ```
    Possible Output:
    ```
    `carrot`
    ```

#### Lottery numbers
- A common example for studying randomness is the case of lottery numbers. Let's try and draw some lottery numbers. In Finland the national lottery consists of a pool of 40 numbers, 7 of which are chosen for each week's draw. A first attempt at drawing a set of numbers could look like this:
    ```py
    from random import randint

    for i in range(7):
        print(randint(1, 40))
    ```
    - This would not work in the long run, however, as the same number may appear twice in a single weekly draw of seven numbers. We need a way to make sure the numbers drawn are all unique. One possibility is to store the drawn numbers in a list, and only add a number if it is not already on the list. This can be repeated until the length of the list is seven:
        ```py
        from random import randint

        weekly_draw = []
        while len(weekly_draw) < 7:
            new_rnd = randint(1, 40)
            if new_rnd not in weekly_draw:
                weekly_draw.append(new_rnd)

        print(weekly_draw)
        ```
        - A more compact approach would be to use the shuffle function:
            ```py
            from random import shuffle

            number_pool = list(range(1, 41))
            shuffle(number_pool)
            weekly_draw = number_pool[0:7]
            print(weekly_draw)
            ```
            - Here the idea is that we first create a list containing the available numbers 1 to 40, rather like the balls in a lottery machine. The pool of numbers is then shuffled, and the first seven numbers chosen for the weekly draw. This saves us the trouble of writing a loop.
            - In fact, the `random` module contains an even easier way to select lottery numbers: the [sample](https://docs.python.org/3/library/random.html?highlight=random#random.sample) function. It returns a random selection of a specified size from a given data structure:
                ```py
                from random import sample

                number_pool = list(range(1, 41))
                weekly_draw = sample(number_pool, 7)
                print(weekly_draw)
                ```

#### Where do these random numbers come from?
- The features of the module [random](https://docs.python.org/3/library/random.html) are based on an algorithm which produces random numbers based on a specific initialization value and some arithmetic operations. The initialization value is often called a *seed value*. The seed value can be supplied by the user with the [seed](https://docs.python.org/3/library/random.html?highlight=random#random.seed) function:
    ```py
    from random import randint, seed

    seed(1337)
    # this will always produce the same "random" number
    print(randint(1, 100))
    ```

- If we have functions which rely on randomization, and we set seed value, the function will produce the same result each time it is executed. The result may be different with different Python versions, but in essence randomness is lost by setting a seed value. This can be a useful feature when testing a program, for example.

- True randomness
    - To be specific, the numbers provided by the `random` module are not truly random. Instead, they are pseudorandom. Computers are, in essence, deterministic machines. In an ideal situation, it should be possible to foretell the way they function down to the last bit. Therefore it is very difficult to create truly random numbers with a computer. For many applications, however, pseudorandom numbers are good enough. When true random numbers are required, the seed value is usually generated by some source outside the computer, for example background radiation, noise levels, or lava [lamps](https://blog.cloudflare.com/randomness-101-lavarand-in-production/).

### Times and dates

#### The datetime object 
- The Python [datetime](https://docs.python.org/3/library/datetime.html?highlight=datetime#datetime.datetime) module includes the function [now](https://docs.python.org/3/library/datetime.html?highlight=datetime#datetime.datetime.now), which returns a datetime object containing the current date and time. The default printout of a datetime object looks like this:
    ```py
    from datetime import datetime

    my_time = datetime.now()
    print(my_time)
    ```
    ```
    2021-10-19 08:46:49.311393
    ```

- You can also define the object yourself:
    ```py
    from datetime import datetime

    my_time = datetime(1952, 12, 24)
    print(my_time)
    ```
    ```
    1952-12-24 00:00:00
    ```
    - By default, the time is set to midnight, as we did not give a time of day in the example above.
    - Different elements of the datetime object can be accessed in the following manner:
        ```py
        from datetime import datetime

        my_time = datetime(1952, 12, 24)
        print("Day:", my_time.day)
        print("Month:", my_time.month)
        print("Year:", my_time.year)
        ```
        ```
        Day: 24
        Month: 12
        Year: 1952
        ```

- A time of day can also be specified. The precision can vary, as you can see below:
    ```py
    from datetime import datetime

    pv1 = datetime(2021, 6, 30, 13)     # 30.6.2021 at 1PM
    pv2 = datetime(2021, 6, 30, 18, 45) # 30.6.2021 at 6.45PM
    ```

#### Compare times and calculate differences between them
- The familiar comparison operators work also on datetime objects:
    ```py
    from datetime import datetime

    time_now = datetime.now()
    midsummer = datetime(2021, 6, 26)

    if time_now < midsummer:
        print("It is not yet Midsummer")
    elif time_now == midsummer:
        print("Happy Midsummer!")
    elif time_now > midsummer:
        print("It is past Midsummer")
    ```
    ```
    It is past Midsummer
    ```
    - The difference between two datetime objects can be calculated simply with the subtraction operator:
        ```py
        from datetime import datetime

        time_now = datetime.now()
        midsummer = datetime(2021, 6, 26)

        difference = midsummer - time_now
        print("Midsummer is", difference.days, "days away")
        ```
        ```
        Midsummer is -116 days away
        ```
        - Note: The result of the datetime subtraction is a [timedelta](https://docs.python.org/3/library/datetime.html?highlight=datetime#timedelta-objects) object. It is less versatile than the datetime object. For instance, you can access the number of days in a `timedelta` object, but not the number of years, as the length of a year varies. A `timedelta` object contains the attributes `days`, `seconds` and `microseconds`. Other measures can be passed as arguments, but they will be converted internally.

- Similarly, addition is available between `datetime` and `timedelta` objects. The result will be the `datetime` produced when the specified number of days (or weeks, seconds, etc) is added to a `datetime` object:
    ```py
    from datetime import datetime, timedelta
    midsummer = datetime(2021, 6, 26)

    one_week = timedelta(days=7)
    week_from_date = midsummer + one_week

    print("A week after Midsummer it will be", week_from_date)

    long_time = timedelta(weeks=32, days=15)

    print("32 weeks and 15 days after Midsummer it will be", midsummer + long_time)
    ```
    ```
    Sample output
    A week after Midsummer it will be 2021-07-03 00:00:00
    32 weeks and 15 days after Midsummer it will be 2022-02-20 00:00:00
    ```

- Let's see how a higher precision works:
    ```py
    time_now = datetime.now()
    midnight = datetime(2021, 6, 30)
    difference = midnight - time_now
    print(f"Midnight is still {difference.seconds} seconds away")
    ```
    ```
    Midnight is still 8188 seconds away
    ```

#### Formatting times and dates
- The `datetime` module contains a handy method [strftime](https://docs.python.org/3/library/datetime.html?highlight=datetime#datetime.date.strftime) for formatting the string representation of a datetime object. For example, the following code will print the current date in the format `dd.mm.yyyy`, and then the date and time in a different format:
    ```py
    19.10.2021
    19/10/2021 09:31
    ```

- Time formatting uses specific characters to signify specific formats. The following is a list of a few of them (please see the Python [documentation](https://docs.python.org/3/library/time.html#time.strftime) for a complete list):
    ![alt text](images/datetime_notation.png)

- You can also specify the delimiter between the different elements, as seen in the examples above.

- Datetime formatting works in the reverse direction as well, in case you need to parse a datetime object from a string given by the user. The method [strptime](https://docs.python.org/3/library/datetime.html?highlight=datetime#datetime.datetime.strptime) will do just that:
    ```py
    from datetime import datetime

    birthday = input("Please type in your birthday in the format dd.mm.yyyy: ")
    my_time = datetime.strptime(birthday, "%d.%m.%Y")

    if my_time < datetime(2000, 1, 1):
        print("You were born in the previous millennium")
    else:
        print("You were born during this millennium")
    ```
    ```
    Please type in your birthday in the format dd.mm.yyyy: 5.11.1986
    You were born in the previous millennium
    ```

### Data Processing

#### Reading CSV files
- There is a ready-made module in the Python standard library for working with CSV files: [csv](https://docs.python.org/3/library/csv.html). It works like this:
    ```py
    import csv

    with open("test.csv") as my_file:
        for line in csv.reader(my_file, delimiter=";"):
            print(line)
    ```
    - The above code reads all lines in the CSV file test.csv, separates the contents of each line into a list using the delimiter ;, and prints each list. So, assuming the contents of the line are as follows:
        ```
        012121212;5
        012345678;2
        015151515;4
        ```
        The code would print out this:
        ```
        ['012121212', '5']
        ['012345678', '2']
        ['015151515', '4']
        ```

- Since the CSV format is so simple, what's the use of having a separate module when we can just as well use the `split` function? Well, for one, the way the module is built, it will also work correctly if the values in the file are strings, which may also contain the delimiter character. If some line in the file looked like this:
    ```
    "aaa;bbb";"ccc;ddd"
    ```
    the above code would produce this:
    ```
    ['aaa;bbb', 'ccc;ddd']
    ```
    - Using the `split` function would also split within the strings, which would likely break the data, and our program in the process.

#### Reading JSON files
- CSV is just one of many machine-readable data formats. [JSON](https://www.json.org/json-en.html) is another, and it is used often when data has to be transferred between applications.

- JSON files are text files with a strict format, which is perhaps a little less accessible to the human eye than the CSV format. The following example uses the file `courses.json`, which contains information about some courses:
    ```json
    [
        {
            "name": "Introduction to Programming",
            "abbreviation": "ItP",
            "periods": [1, 3]
        },
        {
            "name": "Advanced Course in Programming",
            "abbreviation": "ACiP",
            "periods": [2, 4]
        },
        {
            "name": "Database Application",
            "abbreviation": "DbApp",
            "periods": [1, 2, 3, 4]
        }
    ]
    ```
    - The structure of a JSON file might look quite familiar to you by now. The JSON file above looks exactly like a Python list, which contains three Python dictionaries.

- The standard library has a module for working with JSON files: [json](https://docs.python.org/3/library/json.html). The function `loads` takes any argument passed in a JSON format and transforms it into a Python data structure. So, processing the `courses.json` file with the code below:
    ```py
    import json

    with open("courses.json") as my_file:
        data = my_file.read()

    courses = json.loads(data)
    print(courses)
    ```
    would print out the following:
    ```
    [{'name': 'Introduction to Programming', 'abbreviation': 'ItP', 'periods': [1, 3]}, {'name': 'Advanced Course in Programming', 'abbreviation': 'ACiP', 'periods': [2, 4]}, {'name': 'Database Application', 'abbreviation': 'DbApp', 'periods': [1, 2, 3, 4]}]
    ```
    - If we also wanted to print out the name of each course, we could expand our program with a `for` loop:
        ```py
        for course in courses:
            print(course["name"])
        ```
        ```
        Introduction to Programming
        Advanced Course in Programming
        Database Application
        ```

#### Retrieving a file from the internet
- The Python standard library also contains modules for dealing with online content, and one useful function is [urllib.request.urlopen](https://docs.python.org/3/library/urllib.request.html#urllib.request.urlopen). You are encouraged to have a look at the entire module, but the following example should be enough for you to get to grips with the function. It can be used to retrieve content from the internet, so it can be processed in your programs. The following code would print out the contents of the University of Helsinki front page:
    ```py
    import urllib.request

    my_request = urllib.request.urlopen("https://helsinki.fi")
    print(my_request.read())
    ```
    - Pages intended for human eyes do not usually look very pretty when their code is printed out. In the following examples, however, we will work with machine-readable data from an online source. Much of the machine-readable data available online is in JSON format.

#### Looking for modules
- The [official Python documentation](https://docs.python.org/3/library/) contains information on all modules available in the standard library.

- In addition to the standard library, the internet is full of freely available Python modules for different purposes. Some commonly used modules are listed here:
    - [https://wiki.python.org/moin/UsefulModules](https://wiki.python.org/moin/UsefulModules)

### Creating your own modules
- Writing your own Python modules is easy. Any file containing valid Python code can be imported as a module. Let's assume we have a file named `words.py` with the following contents:
    ```py
    def first_word(my_string: str):
        parts = my_string.split(" ")
        return parts[0]

    def last_word(my_string: str):
        parts = my_string.split(" ")
        return parts[-1]

    def number_of_words(my_string: str):
        parts = my_string.split(" ")
        return len(parts)
    ```
    - The functions defined in the file can be accessed by importing the file:
        ```py
        import words

        my_string = "Sheila sells seashells by the seashore"

        print(words.first_word(my_string))
        print(words.last_word(my_string))
        print(words.number_of_words(my_string))
        ```
        ```
        Sheila
        seashore
        6
        ```
        - Note: The file containing the Python module must be located either in the same directory with the program importing it, or in one of the default Python directories, or else the Python interpreter will not find it when the `import` statement is executed. 

- We can use our own modules just as we have learnt to use the modules from the Python standard library:
    ```py
    from words import first_word, last_word

    sentence = input("Please type in a sentence: ")

    print("The first word was: " + first_word(sentence))
    print("The last word was: " + last_word(sentence))
    ```
    ```
    Please type in a sentence: Python is a swell programming language
    The first word was: Python
    The last word was: language
    ```

#### Putting type hints to use
- When using modules, type hinting becomes especially useful. If you are using an editor which has built-in support for type hinting, using different modules becomes much easier.

- For example, Visual Studio Code will display the type hints when you are writing code:
    ![alt text](images/vs_hints.png)

#### Main function code in a module
- If a module contains any code which is not contained within a function definition (that is, if the module contains code in the main function of the module), this code is executed automatically whenever the module is imported.

- Let's assume our `words.py` file also contained some test cases:
    ```py
    def first_word(my_string: str):
        parts = my_string.split(" ")
        return parts[0]

    def last_word(my_string: str):
        parts = my_string.split(" ")
        return parts[-1]

    def number_of_words(my_string: str):
        parts = my_string.split(" ")
        return len(parts)

    print(first_word("This is a test"))
    print(last_word("Here we are still testing"))
    print(number_of_words("One two three four five"))
    ```
    - Now, if we import the module with an `import` statement, all the code in the module which is outside the defined functions is automatically executed:
        ```py
        import words

        my_string = "Sheila sells seashells by the seashore"

        print(words.first_word(my_string))
        print(words.last_word(my_string))
        print(words.number_of_words(my_string))
        ```
        ```
        This
        testing
        5
        Sheila
        seashore
        6
        ```
        - As you can see above, this is not a good outcome, because the program we are trying to write is messed with by the test cases from the module itself. Luckily, there is a solution. We just need to test if the program is being executed on its own, or if the code has been imported with an `import` statement. Python has a built-in variable `__name__`, which contains the name of the program being executed. If the program is being executed on its own, the value of the variable is `__main__`. If the program has been imported, the value of the variable is the name of the imported module (in this case, `words`). Knowing this, we can add a conditional statement, which lets us only execute the text cases if the program is executed on its own. For example:
            ```py
            def first_word(my_string: str) -> str:
                parts = my_string.split(" ")
                return parts[0]

            def last_word(my_string: str) -> str:
                parts = my_string.split(" ")
                return parts[-1]

            def number_of_words(my_string: str) -> int:
                parts = my_string.split(" ")
                return len(parts)

            if __name__ == "__main__":
                # testing functionality
                print(first_word("This is a test"))
                print(last_word("Here we are still testing"))
                print(number_of_words("One two three four five"))
            ```
            If you execute the module on its own, the test cases are printed out:
            ```
            This
            testing
            5
            ```
            - When the module is imported into another program, the test cases are not executed:
                ```py
                import words

                my_string = "Sheila sells seashells by the seashore"

                print(words.first_word(my_string))
                print(words.last_word(my_string))
                print(words.number_of_words(my_string))
                ```
                ```
                Sheila
                seashore
                6
                ```

### More Python features

#### Single line conditionals
- The following two statements produce the exact same results:
    ```py
    if x%2 == 0:
        print("even")
    else:
        print("odd")
    ```
    ```py
    print("even" if x%2 == 0 else "odd")
    ```
    - In the latter example we have a conditional expression on a single line: `a if [condition] else b`. The value of this expression evaluates to `a` if the condition is true, and `b` if it is false. This structure is sometimes referred to as a *ternary operator*.

- Conditional expressions can be very useful when you need to assign something conditionally. For example, if you had the variables `x` and `y`, and you wanted to either increment or set the value of `y` depending on the parity of `x`, you could write it in a normal `if else` statement, like so:
    ```py
    if x%2 == 0:
        y += 1
    else:
        y = 0
    ```
    - The same could be achieved with a nifty one-liner:
        ```py
        y = y + 1 if x%2 == 0 else 0
        ```

#### An "empty" block
- You may remember from the previous part that you are not allowed to have an empty block in a Python program. If you need to have a block of code which does nothing, for example when testing some other functionality, the pass command will let you do this. You could, for instance, write a function which does nothing:
    ```py
    def testing():
        pass
    ```
    - This function would simply return immediately. Leaving the `pass` command out, i.e. having a completely empty block, would produce an error.
        ```py
        def testing():  # this causes an error!
        ```

#### Loops with else blocks
- In Python, loops can have `else` blocks, too. This section of code is executed if the loop finishes normally. For example, in the following example we are looking through a list of numbers. If there is an even number on the list, the program prints out a message and the loop is broken. If there are no even numbers, the loop finishes normally, but a different message is then printed out.
    ```py
    my_list = [3,5,2,8,1]
    for x in my_list:
        if x%2 == 0:
            print("found an even number", x)
            break
    else:
        print("there were no even numbers")
    ```
    - A more traditional way to achieve this would be to use a helper variable to remember whether the desired item was found:
        ```py
        my_list = [3,5,2,8,1]
        found = False
        for x in my_list:
            if x%2 == 0:
                print("found an even number", x)
                found = True
                break
        if not found:
            print("there were no even numbers")
        ```
        - Using a `for else` statement saves us the trouble of writing a separate variable.

#### Default parameter value
- A Python function can have a default parameter value. It is used whenever no argument is passed to the function. See the following example:
    ```py
    def say_hello(name="Emily"):
        print("Hi there,", name)

    say_hello()
    say_hello("Eric")
    say_hello("Matthew")
    say_hello("")
    ```
    ```
    Hi there, Emily
    Hi there, Eric
    Hi there, Matthew
    Hi there,
    ```
    - An empty string is still a string, so the default parameter is not used if an empty string is passed to the function.

#### A variable number of parameters
- You can also define a function with a variable number of parameters, by adding a star before the parameter name. All the remaining arguments passed to the function are contained in a tuple, and can be accessed through the named parameter. The following function counts the number and sum of its arguments:
    ```py
    def testing(*my_args):
        print("You passed", len(my_args), "arguments")
        print("The sum of the arguments is", sum(my_args))

    testing(1, 2, 3, 4, 5)
    ```
    ```
    You passed 5 arguments
    The sum of the arguments is 15
    ```

### Objects and methods
- Previously, we noticed that it often makes sense to group related data together in our programs. For example, if we are trying to store information about a book, it might make sense to use a tuple or a dictionary to organize the data into a single data structure.
    - The solution could look like this when using a tuple:
        ```py
        name = "In Search of Lost Typing"
        author = "Marcel Pythons"
        year = 1992

        # Combine these in a tuple
        book = (name, author, year)

        # Print the name of the book
        print(book[0])
        ```
    - In a case like this, the advantage of using a dictionary is that we can use strings instead of indexes as the keys. That is, we can give descriptive names to the items stored in the data structure:
        ```py
        name = "In Search of Lost Typing"
        author = "Marcel Pythons"
        year = 1992

        # Combine these in a dictionary
        book = {"name": name, "author": author, "year": year}

        # Print the name of the book
        print(book["name"])
        ```
    - In both cases we are creating a new object. In programming, the term has the specific meaning of an independent whole, in this case containing some bits of data which are somehow related. Being independent means that any changes made to one object will not affect other objects. If we were to create two structurally identical representations of books, using dictionaries with identical keys, any changes made to one of them would not have any effect on the other:
        ```py
        book1 = {"name": "The Old Man and the Pythons", "author": "Ernest Pythons", "year": 1952}
        book2 = {"name": "Seven Pythons", "author": "Aleksis Python", "year": 1894}

        print(book1["name"])
        print(book2["name"])

        book1["name"] = "A Farewell to ARM Processors"

        print(book1["name"])
        print(book2["name"])
        ```
        Output:
        ```
        The Old Man and the Pythons
        Seven Pythons
        A Farewell to ARM Processors
        Seven Pythons
        ```

#### Python Objects
- You may remember from the Introduction to Programming course that any value in Python is internally handled as an object. This means that the value stored in a variable is a reference to an object. The data itself is stored within the object in computer memory. If you assign a value to a new variable with the command `a = 3`, the value stored in the variable is not 3, but a reference to an object which contains the value 3.

- Most other programming languages (at least those which support object-oriented programming) include some specially defined primitive data types. These usually include at least integer numbers, floating point numbers and Boolean truth values. Primitives are processed directly, meaning that they are stored directly in variables, not as references. Python has no such primitives, but working with the basic data types in Python is practically very similar. Objects of these basic data types (such as numbers, Boolean values and strings) are immutable, meaning that they cannot be changed in memory. If the value stored in a variable of a basic data type needs to be changed, the entire reference is replaced, but the object itself remains intact in memory.

#### Objects and methods
- The data stored in an object can be accessed through *methods*. A method is a function which operates on the specific object it is attached to. The way to distinguish methods from other functions is the way in which they are called: first you write the name of the object targeted, followed by a dot, and then the name of the method, with arguments if any. For example, the method `values` returns all the values stored in an object of type dictionary, or `dict`:
    ```py
    # this creates an object of type dictionary with the name book
    book = {"name": "The Old Man and the Pythons", "author": "Ernest Pythons", "year": 1952}

    # Print out all the values
    # The method call values() is written after the name of the variable
    # Remember the dot notation!
    for value in book.values():
        print(value)
    ```
    Output:
    ```
    The Old Man and the Pythons
    Ernest Pythons
    1952
    ```

- Similarly, string methods target the string object which they are called on. Some examples of string methods include `count` and `find`:
    ```py
    name = "Imaginary Irene"

    # Print out the number of times the letter I is found
    print(name.count("I"))

    # The number of letters I found in another string
    print("Irreverent Irises in Islington".count("I"))

    # The index of the substring Irene
    print(name.find("Irene"))

    # This string has no such substring
    print("A completely different string".find("Irene"))
    ```
    Output:
    ```
    2
    3
    10
    -1
    ```

- String methods return values, but they will not change the contents of a string. As stated above, strings in Python are immutable. This does not apply to all methods, however. Python lists are mutable, so Python list methods may change the contents of the list they are called on:
    ```py
    my_list = [1,2,3]

    # Add a couple of items
    my_list.append(5)
    my_list.append(1)

    print(my_list)

    # Remove the first item
    my_list.pop(0)

    print(my_list)
    ```
    Output:
    ```
    [1, 2, 3, 5, 1]
    [2, 3, 5, 1]
    ```

### Classes and objects
- In the previous section we worked with lists, tuples, dictionaries and strings. These are all rather special cases in Python programming. Python syntax features a unique, pre-defined method of declaring an object belonging to each of these types:
    ```py
    # Lists are declared with square brackets
    my_list = [1,2,3]

    # Strings are declared with quotation marks
    my_string = "Hi there!"

    # Dictionaries are declared with curly brackets
    my_dict = {"one": 1, "two:": 2}

    # Tuples are declared with parentheses
    my_tuple = (1,2,3)
    ```

- When some other type of object is declared, we need to call a special initialization function called a *constructor*. Let's have a look at working with fractions through the Fraction class.
    ```py
    # we are using the class Fraction from the module fractions
    from fractions import Fraction

    # create some new fractions
    half = Fraction(1,2)

    third = Fraction(1,3)

    another = Fraction(3,11)

    # print these out
    print(half)
    print(third)
    print(another)

    # Fractions can be added together, for example
    print(half + third)
    ```
    Output:
    ```
    1/2
    1/3
    3/11
    5/6
    ```
    - As you can see above, constructor method calls look a little different than the normal method calls we have come across before. For one, they are not attached to any object with the dot notation (as the constructor call is needed to create an object in the first place). The constructor method is also capitalized: `half = Fraction(1,2)`. Let's have a closer look at how objects are constructed by getting familiar with the concept of the class.

#### A class is the blueprint of an object
- We have already used the term class in the material many times. For instance, in the example above we imported the `Fraction` class from the module `fractions`. New fraction objects were created by calling the *constructor* method of the `Fraction` class.

- A class definition contains the structure and functionalities of any object which represents it. That is why classes are sometimes referred to as the blueprints of objects. So, a class definition tells you what kind of data an object contains, and defines also the methods which can be used on the object. *Object oriented programming* refers to a programming paradigm where the functionality of the program is tied into the use of classes and objects created based on them.

- A single class definition can be used to create multiple objects. As mentioned before, objects are independent. Changes made to one object generally do not affect the other objects representing the same class. Each object has its own unique set of data attributes. It might be helpful to consider this simplification of the class-object relationship:
    - a class defines the variables
    - when an object is created, those variables are assigned values

- So, we can use an object of type `Fraction` to access the numerator and denominator of a fractional number:
    ```py
    from fractions import Fraction

    number = Fraction(2,5)

    # Print the numerator
    print(number.numerator)

    # ...and the denominator
    print(number.denominator)
    ```
    Output:
    ```
    2
    5
    ```
    - The Fraction class definition contains declarations for the variables `numerator` and `denominator`. Each object created based on the class has its own specific values assigned to these variables.

- Similarly, objects created based on the `date` class each contain their own unique values for the `year`, `month` and `day` of the date:
    ```py
    from datetime import date

    xmas_eve = date(2020, 12, 24)
    midsummer = date(2020, 6, 20)

    # print only the month attribute of both objects
    print(xmas_eve.month)
    print(midsummer.month)
    ```
    Output:
    ```
    12
    6
    ```
    - The `date` class definition contains declarations of the `year`, `month` and `day` variables. When a new `date` object is created based on the class, these variables are assigned values. Each object has its own unique values assigned to these variables.

#### Functions which work with objects
- Passing an object as an argument to a function should be familiar to you by now, as we have done so many times on this course so far. Let's have a look at the following example. Here we have a function which checks if the `date` object passed as an argument falls on a weekend:
    ```py
    def is_it_weekend(my_date: date):
        weekday = my_date.isoweekday()
        return weekday == 6 or weekday == 7
    ```
    - This function uses the method [`isoweekday`](https://docs.python.org/3/library/datetime.html#datetime.date.isoweekday), which is defined in the `date` class definition, and returns an integer value so that if the date given is a Monday, it returns `1`, and if it is a Tuesday, it returns `2`, and so forth. You can use the above function like this:
        ```py
        xmas_eve = date(2020, 12, 24)
        midsummer = date(2020, 6, 20)

        print(is_it_weekend(xmas_eve))
        print(is_it_weekend(midsummer))
        ```
        Output:
        ```
        False
        True
        ```

#### Methods vs variables
- When working with an object of type `date` you may notice there is a slight difference between how the variables contained in the object are accessed, as opposed to how the methods attached to the objects are used:
    ```py
    my_date = date(2020, 12, 24)

    # calling a method
    weekday = my_date.isoweekday()

    # accessing a variable
    my_month = my_date.month

    print("The day of the week:", weekday)
    print("The month:", my_month)
    ```
    Output:
    ```
    The day of the week: 4
    The month: 12
    ```
    - The day of the week the date falls on is available through the method `isoweekday`:
        ```py
        weekday = my_date.isoweekday()
        ```
        - This is a method call, so there are parentheses after the name of the method. Leaving the parentheses out does not cause an error, but the results are weird:
            ```py
            weekday =  my_date.isoweekday
            print("The day of the week:", weekday)
            ```
            Output:
            ```
            The day of the week: <built-in method isoweekday of datetime.date object at 0x10ed66450>
            ```
    - The `month` of a `date` object is a variable, so the value attached can be accessed with a *reference*.
        ```py
        my_month = my_date.month
        ```
        - Notice there are no parentheses here. Adding parentheses would cause an error:
            ```py
            my_month = my_date.month()
            ```
            Output:
            ```
            Traceback (most recent call last):
            File "", line 1, in 
            TypeError: 'int' object is not callable
            ```

### Defining classes
- A class is defined with the keyword `class`. The syntax is as follows:
    ```py
    class NameOfClass:
        # class defition goes here
    ```

- Classes are usually named in *PascalCase*, also known as *UpperCamelCase*. This means that all the words in the class name are written together, without spaces, and each word is capitalised. The following class names follow this convention:
    - Weekday
    - BankAccount
    - LibraryDatabase
    - PythonCourseGrades

- A single class definition should represent a single whole, the contents of which should be atomically linked together in some way. In more complicated programs classes can contain members of other classes. For example, the class `Course` could contain objects of class `Lecture`, `ExerciseSession` etc.

- Lets have a look at a skeleton of a class definition. The functionalities are still missing at this point.
    ```py
    class BankAccount:
        pass
    ```
    - The above piece of code tells Python that here we are defining a class named `BankAccount`. The class does not contain any functionality yet, but we can still create an object based on the class.
    - Lets have a look at a program where two variables are added to a `BankAccount` object: `balance` and `owner`. Any variables attached to an object are called its *attributes*, or more specifically, *data attributes*, or sometimes *instance variables*. The attributes attached to an object can be accessed through the object:
        ```py
        class BankAccount:
            pass

        peters_account = BankAccount()
        peters_account.owner = "Peter Python"
        peters_account.balance = 5.0

        print(peters_account.owner)
        print(peters_account.balance)
        ```
        Output:
        ```
        Peter Python
        5.0
        ```

- The data attributes are available only through the object they are attached to. Each `BankAccount` object created based on the `BankAccount` class has its own values attached to the data attributes. Those values can be accessed by referring to the object in question:
    ```py
    account = BankAccount()
    account.balance = 155.50

    print(account.balance) # This refers to the data attribute balance attached to the account
    print(balance) # THIS CAUSES AN ERROR, as there is no such independent variable available, and the object reference is missing
    ```

#### Adding a constructor
- In the above example we saw that a new instance of a class can be created by calling the constructor method of the class like so: `NameOfClass()`. Above we then attached data attributes to the object separately, but it is often more convenient to pass these initial values of attributes directly as the object is created. In the above example we first had a `BankAccount` object without these attributes, and the attributes only existed after they were explicitly declared.

- Declaring attributes outside the constructor results in a situation where different instances of the same class can have different attributes. The following code produces an error because we now have another `BankAccount` object, `paulas_account`, which does not contain the same attributes:
    ```py
    class BankAccount:
    pass

    peters_account = BankAccount()
    peters_account.owner = "Peter"
    peters_account.balance = 1400

    paulas_account = BankAccount()
    paulas_account.owner = "Paula"

    print(peters_account.balance)
    print(paulas_account.balance) # THIS CAUSES AN ERROR
    ```
    - So, instead of declaring attributes after each instance of the class is created, it is usually a better idea to initialize the values of the attributes as the class constructor is called. As the BankAccount class definition is currently just a skeleton, the constructor method is implicitly assumed by the Python interpreter, but it is possible to define your own constructor methods, and that is exactly what we will do now.

- A constructor method is a method declaration with the special name `__init__`, usually included at the very beginning of a class definition. Lets have a look at a `BankAccount` class with a constructor method added in:
    ```py
    class BankAccount:

        # The constructor
        def __init__(self, balance: float, owner: str):
            self.balance = balance
            self.owner = owner
    ```
    - The name of the constructor method is always `__init__`. Notice the two underscores on both sides of the word `init`.
    - The first parameter in a constructor definition is always named `self`. This refers to the object itself, and is necessary for declaring any attributes attached to the object. The assignment `self.balance = balance` assigns the balance received as an argument to the balance attribute of the object. It is a common convention to use the same variable names for the parameters and the data attributes defined in a constructor, but the variable names `self.balance` and `balance` above refer to two different variables:
        - The variable `self.balance` is an attribute of the object. Each `BankAccount` object has its own balance.
        - The variable `balance` is a parameter in the constructor method `__init__`. Its value is set to the value passed as an argument to the method as the constructor is called (that is, when a new instance of the class is created).

- Now that we have defined the parameters of the constructor method, we can pass the desired initial values of the data attributes as arguments as a new object is created:
    ```py
    class BankAccount:

        # The constructor
        def __init__(self, balance: float, owner: str):
            self.balance = balance
            self.owner = owner

    # As the method is called, no argument should be given for the self parameter
    # Python assigns the value for self automatically
    peters_account = BankAccount(100, "Peter Python")
    paulas_account = BankAccount(20000, "Paula Pythons")

    print(peters_account.balance)
    print(paulas_account.balance)
    ```
    Output:
    ```
    100
    20000
    ```
    - It is now much easier to work with the `BankAccount` objects, as the values can be passed at object creation, and the resulting two separate instances can be handled more predictably and uniformly. Declaring data attributes in the constructor also ensures the attributes are actually declared, and the desired initial values are always given by the programmer using the class.

- It is still possible to change the initial values of the data attributes later in the program:
    ```py
    class BankAccount:

        # The constructor
        def __init__(self, balance: float, owner: str):
            self.balance = balance
            self.owner = owner

    peters_account = BankAccount(100, "Peter Python")
    print(peters_account.balance)

    # Change the balance to 1500
    peters_account.balance = 1500
    print(peters_account.balance)

    # Add 2000 to the balance
    peters_account.balance += 2000
    print(peters_account.balance)
    ```
    Output:
    ```
    100
    1500
    3500
    ```

- Let's have a look at another example of classes and objects. We'll write a class which models a single draw of lottery numbers:
    ```py
    from datetime import date

    class LotteryDraw:

        def __init__(self, round_week: int, round_date: date, numbers: list):
            self.round_week = round_week
            self.round_date = round_date
            self.numbers = numbers


    # Create a new LotteryDraw object
    round1 = LotteryDraw(1, date(2021, 1, 2), [1,4,8,12,13,14,33])

    # Tulostetaan tiedot
    print(round1.round_week)
    print(round1.round_date)

    for number in round1.numbers:
        print(number)
    ```
    Output:
    ```
    1
    2021-01-02
    1
    4
    8
    12
    13
    14
    33
    ```
    - As you can see above, the attributes can be of any type. Here, each LotteryDraw object has attributes of type `list` and `date`.

#### Using objects formed from your own classes
- Objects formed from your own class definitions are no different from any other Python objects. They can be passed as arguments and return values just like any other object. We could, for example, write some helper functions for working with bank accounts:
    ```py
    # this function creates a new bank account object and returns it
    def open_account(name: str):
        new_account =  BankAccount(0, name)
        return new_account

    # this function adds the amount passed as an argument to the balance of the bank account also passed as an argument
    def deposit_money_on_account(account: BankAccount, amount: int):
        account.balance += amount

    peters_account = open_account("Peter Python")
    print(peters_account.balance)

    deposit_money_on_account(peters_account, 500)

    print(peters_account.balance)
    ```
    Output:
    ```
    0
    500
    ```

### Defining methods
- Classes which contain only data attributes are not very different from dictionaries. Below you will find two ways to model a bank account, first with a class definition, and then using a dictionary.
    Class:
    ```py
    # Example 1: bank account with class definition
    class BankAccount:

        def __init__(self, account_number: str, owner: str, balance: float, annual_interest: float):
            self.account_number = account_number
            self.owner = owner
            self.balance = balance
            self.annual_interest = annual_interest

    peters_account = BankAccount("12345-678", "Peter Python", 1500.0, 0.015)
    ```
    Dictionary:
    ```py
    # Example 2: bank account with dictionary
    peters_account = {"account_number": "12345-678", "owner": "Peter Python", "balance": 1500.0, "annual_interest": 0.015}
    ```
    - With a dictionary the implementation is much shorter and more straightforward. With a class, however, the structure is more "tightly bound", so that we can expect all `BankAccount` objects to be structurally alike. A class is also named. The `BankAccount` class is referenced when creating a new bank account, and the type of the object is `BankAccount`, not `dict`.
    - Another significant advantage of classes is that in addition to data, they can contain functionality. One of the guiding principles of object oriented programming is that an object is used to access both the data attached to an object and the functionality to process that data.

### Methods in classes
- A method is a subprogram or function that is bound to a specific class. Usually a method only affects a single object. A method is defined within the class definition, and it can access the data attributes of the class just like any other variable.

- Let's continue with the `BankAccount` class introduced above. Below we have a new method which adds interest to the account:
    ```py
    class BankAccount:

        def __init__(self, account_number: str, owner: str, balance: float, annual_interest: float):
            self.account_number = account_number
            self.owner = owner
            self.balance = balance
            self.annual_interest = annual_interest

        # This method adds the annual interest to the balance of the account
        def add_interest(self):
            self.balance += self.balance * self.annual_interest


    peters_account = BankAccount("12345-678", "Peter Python", 1500.0, 0.015)
    peters_account.add_interest()
    print(peters_account.balance)
    ```
    Output:
    ```
    1522.5
    ```
    - The `add_interest` method multiplies the balance of the account by the annual interest percentage, and then adds the result to the current balance. The method acts only on the object which it is called on.
    - Let's see how this works when we have created multiple instances of the class:
        ```py
        # The class BankAccount is defined in the previous example

        peters_account = BankAccount("12345-678", "Peter Python", 1500.0, 0.015)
        paulas_account = BankAccount("99999-999", "Paula Pythonen", 1500.0, 0.05)
        pippas_account = BankAccount("1111-222", "Pippa Programmer", 1500.0, 0.001)

        # Add interest on Peter's and Paula's accounts, but not on Pippa's
        peters_account.add_interest()
        paulas_account.add_interest()

        # Print all account balances
        print(peters_account.balance)
        print(paulas_account.balance)
        print(pippas_account.balance)
        ```
        Output:
        ```
        1522.5
        1575.0
        1500.0
        ```
        - As you can see above, the annual interest is added only to those accounts which the method is called on. As the annual interest rates are different for Peter's and Paula's accounts, the results are different for these two accounts. The balance on Pippa's account does not change, because the `add_interest` method is not called on the object `pippas_account`.

#### Encapsulation
- In object oriented programming the word *client* comes up from time to time. This is used to refer to a section of code which creates an object and uses the service provided by its methods. When the data contained in an object is used only through the methods it provides, the *internal integrity* of the object is guaranteed. In practice this means that, for example, a `BankAccount` class offers methods to handle the `balance` attribute, so the balance is never accessed directly by the client. These methods can then verify that the balance is not allowed to go below zero, for instance. An example of how this would work:
    ```py
    class BankAccount:

        def __init__(self, account_number: str, owner: str, balance: float, annual_interest: float):
            self.account_number = account_number
            self.owner = owner
            self.balance = balance
            self.annual_interest = annual_interest

        # This method adds the annual interest to the balance of the account
        def add_interest(self):
            self.balance += self.balance * self.annual_interest

        # This method "withdraws" money from the account
        # If the withdrawal is successful the method returns True, and False otherwise
        def withdraw(self, amount: float):
            if amount <= self.balance:
                self.balance -= amount
                return True

            return False

    peters_account = BankAccount("12345-678", "Peter Python", 1500.0, 0.015)

    if peters_account.withdraw(1000):
        print("The withdrawal was successful, the balance is now", peters_account.balance)
    else:
        print("The withdrawal was unsuccessful, the balance is insufficient")

    # Yritetään uudestaan
    if peters_account.withdraw(1000):
        print("The withdrawal was successful, the balance is now", peters_account.balance)
    else:
        print("The withdrawal was unsuccessful, the balance is insufficient")
    ```
    Output:
    ```
    The withdrawal was successful, the balance is now 500.0
    The withdrawal was unsuccessful, the balance is insufficient
    ```

- Maintaining the internal integrity of the object and offering suitable methods to ensure this is called *encapsulation*. The idea is that the inner workings of the object are hidden from the client, but the object offers methods which can be used to access the data stored in the object.

- Adding a method does not automatically hide the attribute. Even though the `BankAccount` class definition contains the `withdraw` method for withdrawing money, the client code can still access and change the `balance` attribute directly:
    ```py
    peters_account = BankAccount("12345-678", "Peter Python", 1500.0, 0.015)

    # Attempt to withdraw 2000
    if peters_account.withdraw(2000):
        print("The withdrawal was successful, the balance is now", peters_account.balance)
    else:
        print("The withdrawal was unsuccessful, the balance is insufficient")

        # "Force" the withdrawal of 2000
        peters_account.balance -= 2000

    print("The balance is now:", peters_account.balance)
    ```
    Output:
    ```
    The withdrawal was unsuccessful, the balance is insufficient
    The balance is now: -500.0
    ```
    - It is possible to hide the data attributes from the client code, which can help in solving this problem. We will return to this topic in the next part.

- Let's have a look at a class which models the personal best of a player. The class definition contains separate validator methods which ascertain that the arguments passed are valid. The methods are called already within the constructor. This ensures the object created is internally sound.
    ```py
    from datetime import date

    class PersonalBest:

        def __init__(self, player: str, day: int, month: int, year: int, points: int):
            # Default values
            self.player = ""
            self.date_of_pb = date(1900, 1, 1)
            self.points = 0

            if self.name_ok(player):
                self.player = player

            if self.date_ok(day, month, year):
                self.date_of_pb = date(year, month, day)

            if self.points_ok(points):
                self.points = points

        # Helper methods to check the arguments are valid
        def name_ok(self, name: str):
            return len(name) >= 2 # Name should be at least two characters long

        def date_ok(self, day, month, year):
            try:
                date(year, month, day)
                return True
            except:
                # an exception is raised if the arguments are not valid
                return False

        def points_ok(self, points):
            return points >= 0

    if __name__ == "__main__":
        result1 = PersonalBest("Peter", 1, 11, 2020, 235)
        print(result1.points)
        print(result1.player)
        print(result1.date_of_pb)

        # The date was not valid
        result2 = PersonalBest("Paula", 4, 13, 2019, 4555)
        print(result2.points)
        print(result2.player)
        print(result2.date_of_pb) # Tulostaa oletusarvon 1900-01-01
    ```
    Output:
    ```
    235
    Peter
    2020-11-01
    4555
    Paula
    1900-01-01
    ```
    - In the example above, the helper methods were called via the `self` parameter name when they were used in the constructor. It is possible to also include static method definitions in class definitions. These are methods which can be called without ever creating an instance of the class. We will return to this subject in the next part.

- The parameter name `self` is only used when referring to the features of the *object as an instance of the class*. These include both the data attributes and the methods attached to an object. To make the terminology more confusing, the data attributes and methods are together sometimes referred to simply as the *attributes* of the object, which is why in this material we have often specified *data attributes* when we mean the variables defined within the class. This is where the terminology of some Python programmers slightly differs from the terminology used in object oriented programming more widely, where *attributes* usually refers to just the data attributes of an object.

- It is also possible to create local variables within method definitions without referring to `self`. You should do so if there is no need to access the variables outside the method. Local variables within methods have no special keywords; they are used just like any normal variables you have come across thus far. So, for example this would work:
    ```py
    class BonusCard:
        def __init__(self, name: str, balance: float):
            self.name = name
            self.balance = balance

        def add_bonus(self):
            # The variable bonus below is a local variable.
            # It is not a data attribute of the object.
            # It can not be accessed directly through the object.
            bonus = self.balance * 0.25
            self.balance += bonus

        def add_superbonus(self):
            # The superbonus variable is also a local variable.
            # Usually helper variables are local variables because
            # there is no need to access them from the other
            # methods in the class or directly through an object.
            superbonus = self.balance * 0.5
            self.balance += superbonus

        def __str__(self):
            return f"BonusCard(name={self.name}, balance={self.balance})"
    ```

### More examples of classes

##### Example 1: the Rectangle class
- Let's have a look at a class which models a rectangle in two-dimensional space:
    ```py
    class Rectangle:
        def __init__(self, left_upper: tuple, right_lower: tuple):
            self.left_upper = left_upper
            self.right_lower = right_lower
            self.width = right_lower[0]-left_upper[0]
            self.height = right_lower[1]-left_upper[1]

        def area(self):
            return self.width * self.height

        def perimeter(self):
            return self.width * 2 + self.height * 2

        def move(self, x_change: int, y_change: int):
            corner = self.left_upper
            self.left_upper = (corner[0]+x_change, corner[1]+y_change)
            corner = self.right_lower
            self.right_lower = (corner[0]+x_change, corner[1]+y_change)
    ```
    - A new `Rectangle` is created with two tuples as arguments. These tuples contain the x and y coordinates of the upper left corner and the lower right corner. The constructor calculates the height and width of the rectangle based on these values.
    - The methods `area` and `perimeter` calculate the area and perimeter of the rectangle based on the height and width. The method `move` moves the rectangle by the x and y values given as arguments.
    - The following program tests the `Rectangle` class:
        ```py
        rectangle = Rectangle((1, 1), (4, 3))
        print(rectangle.left_upper)
        print(rectangle.right_lower)
        print(rectangle.width)
        print(rectangle.height)
        print(rectangle.perimeter())
        print(rectangle.area())

        rectangle.move(3, 3)
        print(rectangle.left_upper)
        print(rectangle.right_lower)
        ```
        Output:
        ```
        (1, 1)
        (4, 3)
        3
        2
        10
        6
        (4, 4)
        (7, 6)
        ```

#### Printing an object
- When you have an object created from a class defined by yourself, the default reaction to calling the `print` command with that object as its argument is not very informative:
    ```py
    rectangle = Rectangle((1, 1), (4, 3))
    print(rectangle)
    ```
    The printout should look a bit like this:
    ```
    <main.Rectangle object at 0x000002D7BF148A90>
    ```

- Obviously, we want more control over what is printed out. The easiest way to do this is to add a special `__str__` method to the class definition. Its purpose is to return a snapshot of the state of the object in string format. If the class definition contains a `__str__` method, the value returned by the method is the one printed out when the `print` command is executed. So, let's add a `__str__` method definition to our `Rectangle` class:
    ```py
    class Rectangle:

        # ...the rest of the class goes here the same as above...

        # This method returns the state of the object in string format
        def __str__(self):
            return f"rectangle {self.left_upper} ... {self.right_lower}"
    ```
    - Now the `print` command produces something more user-friendly:
        ```py
        rectangle = Rectangle((1, 1), (4, 3))
        print(rectangle)
        ```
        Output:
        ```
        rectangle (1, 1) ... (4, 3)
        ```

- The `__str__` method is perhaps more often used for formulating a string representation of the object with the `str` function, as seen in the following program:
    ```py
    rectangle = Rectangle((1, 1), (4, 3))
    str_rep = str(rectangle)
    print(str_rep)
    ```
    Output:
    ```
    rectangle (1, 1) ... (4, 3)
    ```
    - Note that using `str(rectangle)` returns the result from the `__str__` function.

- There are many more special underscored methods which can be defined for classes. One rather similar to the `__str__` method is the `__repr__` method. Its purpose is to provide a technical representation of the state of the object. We will come across this method later.

#### Example 2: Task list
- The following class `TaskList` models a list of tasks:
    ```py
    class TaskList:
        def __init__(self):
            self.tasks = []

        def add_task(self, name: str, priority: int):
            self.tasks.append((priority, name))

        def get_next(self):
            self.tasks.sort()
            # The list method pop removes and returns the last item in a list
            task = self.tasks.pop()
            # Return the name of the task (the second item in the tuple)
            return task[1]

        def number_of_tasks(self):
            return len(self.tasks)

        def clear_tasks(self):
            self.tasks = []
    ```
    - The method `add_task` adds a new task to the list. Each task also has a priority attached, which is used for sorting the tasks. The method `get_next` removes and returns the task with the highest priority on the list. There is also the `number_of_tasks` method, which returns the number of tasks on the list, and finally the method `clear_tasks`, which clears the task list.
    - Within the object, the tasks are stored in a list. Each task is of a tuple containing the priority of the task and its name. The priority value is stored first, so that when the list is sorted, the task with the highest priority is the last item on the list. This is why we can then simply use the pop method to retrieve and remove the highest priority item.
    - Please have a look at the following program with the task list in action:
        ```py
        tasks = TaskList()
        tasks.add_task("studying", 50)
        tasks.add_task("exercise", 60)
        tasks.add_task("cleaning", 10)
        print(tasks.number_of_tasks())
        print(tasks.get_next())
        print(tasks.number_of_tasks())
        tasks.add_task("date", 100)
        print(tasks.number_of_tasks())
        print(tasks.get_next())
        print(tasks.get_next())
        print(tasks.number_of_tasks())
        tasks.clear_tasks()
        print(tasks.number_of_tasks())
        ```
        Output:
        ```
        3
        exercise
        2
        3
        date
        studying
        1
        0
        ```

### Objects and references
- Every value in Python is an object. Any object you create based on a class you've defined yourself works exactly the same as any "regular" Python object. For example, objects can be stored in a list:
    ```py
    from datetime import date

    class CompletedCourse:

        def __init__(self, course_name: str, credits: int, completion_date: date):
            self.name = course_name
            self.credits = credits
            self.completion_date = completion_date


    if __name__ == "__main__":
        # Here we create some completed courses and add these to a list 
        completed = []

        maths1 = CompletedCourse("Mathematics 1", 5, date(2020, 3, 11))
        prog1 = CompletedCourse("Programming 1", 6, date(2019, 12, 17))

        completed.append(maths1)
        completed.append(prog1)

        # Let's add a couple more straight to the list
        completed.append(CompletedCourse("Physics 2", 4, date(2019, 11, 10)))
        completed.append(CompletedCourse("Programming 2", 5, date(2020, 5, 19)))

        # Go through all the completed courses, print out their names 
        # and sum up the credits received
        credits = 0
        for course in completed:
            print(course.name)
            credits += course.credits

        print("Total credits received:", credits)
    ```
    Output:
    ```
    Mathematics 1
    Programming 1
    Physics 2
    Programming 2
    Total credits received: 20
    ```

- You may remember that lists do not contain any objects themselves. They contain *references to objects*. The exact same object can appear multiple times in a single list, and it can be referred to multiple times within the list or outside it. Let's have a look at an example:
    ```py
    class Product:
        def __init__(self, name: str, unit: str):
            self.name = name
            self.unit = unit


    if __name__ == "__main__":
        shopping_list = []
        milk = Product("Milk", "litre")

        shopping_list.append(milk)
        shopping_list.append(milk)
        shopping_list.append(Product("Cucumber", "piece"))
    ```

    ![alt text](images/objects&references.png)

- If there is more than one reference to the same object, it makes no difference which one of the references is used:
    ```py
    class Dog:
        def __init__(self, name):
            self.name = name

        def __str__(self):
            return self.name

    dogs = []
    fluffy = Dog("Fluffy")
    dogs.append(fluffy)
    dogs.append(fluffy)
    dogs.append(Dog("Fluffy"))

    print("Dogs initially:")
    for dog in dogs:
        print(dog)

    print("The dog at index 0 is renamed:")
    dogs[0].name = "Pooch"
    for dog in dogs:
        print(dog)

    print("The dog at index 2 is renamed:")
    dogs[2].name = "Fifi"
    for dog in dogs:
        print(dog)
    ```
    Output:
    ```
    Dogs initially:
    Fluffy
    Fluffy
    Fluffy
    The dog at index 0 is renamed:
    Pooch
    Pooch
    Fluffy
    The dog at index 2 is renamed:
    Pooch
    Pooch
    Fifi
    ```
    - The references at indexes 0 and 1 in the list refer to the same object. Either one of the references can be used to access the object. The reference at index 2 refers to a different object, albeit with seemingly the same contents. Changing the contents of this latter object does not affect the other one.

- The operator `is` is used for checking if the two references refer to the exact same object, while the operator `==` will tell you if the contents of the objects are the same. The following example hopefully makes the difference clear:
    ```py
    list1 = [1, 2, 3]
    list2 = [1, 2, 3]
    list3 = list1

    print(list1 is list2)
    print(list1 is list3)
    print(list2 is list3)

    print()

    print(list1 == list2)
    print(list1 == list3)
    print(list2 == list3)
    ```
    Output:
    ```
    False
    True
    False

    True
    True
    True
    ```

- Any Python object can also be stored in a dictionary or any other data structure. This also applies to objects created based on a class you've defined yourself.
    ```py
    class Student:
        def __init__(self, name: str, cr: int):
            self.name = name
            self.cr = cr

    if __name__ == "__main__":
        # The key in this dictionary is the student number, 
        # and the value is an object of type Student
        students = {}
        students["12345"] = Student("Saul Student", 10)
        students["54321"] = Student("Sally Student", 67)
    ```

    ![alt text](images/object&dict.png)

#### Self or no self?
- Thus far we've only touched upon the surface of using the `self` parameter name. Let's have a closer look at when it should or should not be used. Below we have a simple class which lets us create a vocabulary object containing some words:
    ```py
    class Vocabulary:
        def __init__(self):
            self.words = []

        def add_word(self, word: str):
            if not word in self.words:
                self.words.append(word)

        def print_vocabulary(self):
            for word in sorted(self.words):
                print(word)

    vocab = Vocabulary()
    vocab.add_word("python")
    vocab.add_word("object")
    vocab.add_word("object-oriented programming")
    vocab.add_word("object")
    vocab.add_word("nerd")

    vocab.print_vocabulary()
    ```
    Output:
    ```
    nerd
    object
    object-oriented programming
    python
    ```
    - The list of words is stored in an attribute named `self.words`. In this case the `self` parameter name is mandatory in both the constructor method of the class and in any other method accessing that variable. If `self` is left out, the different methods will not access the same list of words.
    - Let's add a new method to our class definition. The method `longest_word(self)` returns (one of) the longest words in the vocabulary. The following is one way of completing this task, but we will soon see it is not a very good way:
        ```py
        class Vocabulary:
            def __init__(self):
                self.words = []

            # ...

            def longest_word(self):
                # define two helper variables
                self.longest = ""
                self.length_of_longest = 0

                for word in self.words:
                    if len(word) > self.length_of_longest:
                        self.length_of_longest = len(word)
                        self.longest = word

                return self.longest
        ```
        - This method uses two helper variables which are declared with the `self` parameter name. Remember, the names of variables do not matter in the functional sense, so these variables could also be named more confusingly as, for example, `helper` and `helper2`. The code begins to look a bit cryptic:
            ```py
            class Vocabulary:
                def __init__(self):
                    self.words = []

                # ...

                def longest_word(self):
                    # define two helper variables
                    self.helper = ""
                    self.helper2 = 0

                    for word in self.words:
                        if len(word) > self.helper2:
                            self.helper2 = len(word)
                            self.helper = word

                    return self.helper
            ```
        - When a variable is declared with the `self` parameter name, it becomes an attribute of the object. This means that the variable will exist for as long as the object exists. Specifically, the variable will continue existing also after the method declaring it has finished its execution. In the example above this is quite unnecessary, as the helper variables are meant to be used only within the method `longest_word(self)`. So, declaring helper variables with the `self` parameter name is not a very good idea here.
        - Besides causing variables to exist beyond their "expiration date", using `self` to create new attributes where they aren't necessary can cause difficult bugs in your code. Especially generically named attributes such as `self.helper`, which are then used in various different methods, can cause unexpected behaviour which is hard to trace. For example, if a helper variable is declared as an attribute and assigned an initial value in the constructor, but the variable is then used in an unrelated context in another method, the results are often unpredictable:
            ```py
            class Vocabulary:
                def __init__(self):
                    self.words = []
                    # define helper variables
                    self.helper = ""
                    self.helper2 = ""
                    self.helper3 = ""
                    self.helper4 = ""

                # ...

                def longest_word(self):
                    for word in self.words:
                        # above the helper variables were all assigned string values
                        # the following will not work because the type of helper2 is wrong
                        if len(word) > self.helper2:
                            self.helper2 = len(word)
                            self.helper = word

                    return self.helper
            ```
            - You might think this would be solved by just declaring attributes where they are used, outside the constructor, but this results in a situation where the attributes accessible through an object are dependent on which methods have been executed. In the previous part we saw that the advantage of declaring attributes in the constructor is that all instances of the class will then have the exact same attributes. If this is not the case, using different instances of the class can easily lead to errors.
        - In conclusion, if you need helper variables for use within a single method, the correct way to do it is without `self`. To make your code easier to understand, also use informative variable names:
            ```py
            class Vocabulary:
                def __init__(self):
                    self.words = []

                # ...

                def longest_word(self):
                    # the correct way of declaring helper variables 
                    # for use within a single method
                    longest = ""
                    length_of_longest = 0

                    for word in self.words:
                        if len(word) > length_of_longest:
                            length_of_longest = len(word)
                            longest = word

                    return longest
            ```
            - In the above implementation the helper variables are only accessible while the method is being executed. The values stored within cannot cause complications in other parts of the program.

#### Objects as arguments to functions
- The objects created based on our own classes are usually mutable. You may remember that, for instance, Python lists are mutable: when passed as arguments to functions, their contents can change as a result of the execution. Let's have a look at a simple example where a function receives a reference to an object of type `Student` as its argument. The function then changes the name of the student. Both the function and the main function calling it access the same object, so the change is apparent in the main function as well.
    ```py
    class Student:
        def __init__(self, name: str, student_number: str):
            self.name = name
            self.student_number = student_number

        def __str__(self):
            return f"{self.name} ({self.student_number})"

    # the type hint here uses the name of the class defined above
    def change_name(student: Student):
        student.name = "Saul Student"

    # create a Student object
    steve = Student("Steve Student", "12345")

    print(steve)
    change_name(steve)
    print(steve)
    ```
    Output:
    ```
    Steve Student (12345)
    Saul Student (12345)
    ```

- It is also possible to create objects within functions. If a function returns a reference to the newly created object, it is also accessible within the main function:
    ```py
    from random import randint, choice

    class Student:
        def __init__(self, name: str, student_number: str):
            self.name = name
            self.student_number = student_number

        def __str__(self):
            return f"{self.name} ({self.student_number})"

    # This function creates and returns a new Student object.
    # It randomly selects values for the name and the student number.
    def new_student():
        first_names = ["Mark","Mindy","Mary","Mike"]
        last_names = ["Javanese", "Rusty", "Scriptor", "Pythons"]

        # randomly determine the name
        name = choice(first_names) + " " + choice(last_names)

        # randomly determine the student number
        student_number = str(randint(10000,99999))

        # Create and return a Student object
        return Student(name, student_number)

    if __name__ == "__main__":
        # Call the function five times and store the results in a list
        students = []
        for i in range(5):
            students.append(new_student())

        # Print out the results
        for student in students :
            print(student)
    ```
    Example output:
    ```
    Mary Rusty (78218)
    Mindy Rusty (80068)
    Mike Pythons (70396)
    Mark Javanese (83307)
    Mary Pythons (45149)
    ```

#### Objects as arguments to methods
- Similarly, objects can act as arguments to methods. Let's have a look at an example from an amusement park:
    ```py
    class Person:
        def __init__(self, name: str, height: int):
            self.name = name
            self.height = height

    class Attraction:
        def __init__(self, name: str, min_height: int):
            self.visitors = 0
            self.name = name
            self.min_height = min_height

        def admit_visitor(self, person: Person):
            if person.height >= self.min_height:
                self.visitors += 1
                print(f"{person.name} got on board")
            else:
                print(f"{person.name} was too short :(")

        def __str__(self):
            return f"{self.name} ({self.visitors} visitors)"
    ```
    - The `Attraction` contains a method `admit_visitor`, which takes an object of type `Person` as an argument. If the visitor is tall enough, they are admitted on board and the number of visitors is increased. The classes can be tested as follows:
        ```py
        rollercoaster = Attraction("Rollercoaster", 120)
        jared = Person("Jared", 172)
        alice = Person("Alice", 105)

        rollercoaster.admit_visitor(jared)
        rollercoaster.admit_visitor(alice)

        print(rollercoaster)
        ```
        Output:
        ```
        Jared got on board
        Alice was too short :(
        Rollercoaster (1 visitors)
        ```

#### An instance of the same class as an argument to a method
- Below we have yet another version of the class `Person`:
    ```py
    class Person:
        def __init__(self, name: str, year_of_birth: int):
            self.name = name
            self.year_of_birth = year_of_birth
    ```
    - Let's assume we want to write a program which compares the ages of objects of type Person. We could write a separate function for this purpose:
        ```py
        def older_than(person1: Person, person2: Person):
            if person1.year_of_birth < person2.year_of_birth:
                return True
            else:
                return False

        muhammad = Person("Muhammad ibn Musa al-Khwarizmi", 780)
        pascal = Person("Blaise Pascal", 1623)
        grace = Person("Grace Hopper", 1906)

        if older_than(muhammad, pascal):
            print(f"{muhammad.name} is older than {pascal.name}")
        else:
            print(f"{muhammad.name} is not older than {pascal.name}")

        if older_than(grace, pascal):
            print(f"{grace.name} is older than {pascal.name}")
        else:
            print(f"{grace.name} is not older than {pascal.name}")
        ```
        Output:
        ```
        Muhammad ibn Musa al-Khwarizmi is older than Blaise Pascal
        Grace Hopper is not older than Blaise Pascal
        ```

- One of the principles of object oriented programming is to include any functionality which handles objects of a certain type in the class definition, as methods. So instead of a function we could write a *method* which allows us to compare the age of a `Person` object to another `Person` object:
    ```py
    class Person:
        def __init__(self, name: str, year_of_birth: int):
            self.name = name
            self.year_of_birth = year_of_birth

        # NB: type hints must be enclosed in quotation marks if the parameter
        # is of the same type as the class itself!
        def older_than(self, another: "Person"):
            if self.year_of_birth < another.year_of_birth:
                return True
            else:
                return False
    ```
    - Here the object which the method is called on is referred to as `self`, while the other Person object is `another`. Remember, calling a method differs from calling a function. A method is attached to an object with the dot notation:
        ```py
        muhammad = Person("Muhammad ibn Musa al-Khwarizmi", 780)
        pascal = Person("Blaise Pascal", 1623)
        grace = Person("Grace Hopper", 1906)

        if muhammad.older_than(pascal):
            print(f"{muhammad.name} is older than {pascal.name}")
        else:
            print(f"{muhammad.name} is not older than {pascal.name}")

        if grace.older_than(pascal):
            print(f"{grace.name} is older than {pascal.name}")
        else:
            print(f"{grace.name} is not older than {pascal.name}")
        ```
        - To the left of the dot is the object itself, which is referred to as `self` within the method definition. In parentheses is the argument to the method, which is the object referred to as `another`.
        - The printout from the program is exactly the same as with the function implementation above.
    - A rather cosmetic point to finish off: the `if...else` structure in the method `older_than` is by and large unneccessary. The value of the Boolean expression in the condition is already the exact same truth value which is returned. The method can thus be simplified:
        ```py
        class Person:
            def __init__(self, name: str, year_of_birth: int):
                self.name = name
                self.year_of_birth = year_of_birth

            # NB: type hints must be enclosed in quotation marks if the parameter 
            # is of the same type as the class itself!
            def older_than(self, another: "Person"):
                return self.year_of_birth < another.year_of_birth
        ```
    - As stated in the comments in the examples above, if the parameter in a method definition is of the same type as the class itself, the type hint must be enclosed in quotation marks. Leaving the quotation marks out causes an error, which you will see if you try the following:
        ```py
        class Person:
            # ...

            # this would cause an error, as Person must be enclosed in quotation marks
            def older_than(self, another: Person):
                return self.year_of_birth < another.year_of_birth:
        ```

### Objects as attributes
- We have already seen examples of classes which have lists as attributes. As there is thus nothing stopping us from including mutable objects as attributes in our classes, we might as well use instances of our own classes as attributes in other classes we've defined ourselves. In the following examples we will define the classes `Course`, `Student` and `CompletedCourse`. A completed course makes use of the first two classes. The class definitions are very short and simple in order to better concentrate on the technique of using instances of our own classes as attributes. We will assume each class is defined in a separate file.
    - First we define the class `Course` in a file named `course.py`:
        ```py
        class Course:
            def __init__(self, name: str, code: str, credits: int):
                self.name = name
                self.code = code
                self.credits = credits
        ```
    - Next, the class `Student` in a file named `student.py`:
        ```py
        class Student:
            def __init__(self, name: str, student_number: str, credits: int):
                self.name = name
                self.student_number = student_number
                self.credits = credits
        ```
    - Finally, the class `CompletedCourse` is defined in a file named `completedcourse.py`. As it uses the other two classes, they have to be imported before they can be used:
        ```py
        from course import Course
        from student import Student

        class CompletedCourse:
            def __init__(self, student: Student, course: Course, grade: int):
                self.student = student
                self.course = course
                self.grade = grade
        ```
    - Here is an example of a main function which adds some completed courses to a list:
        ```py
        from completedcourse import CompletedCourse
        from course import Course
        from student import Student

        # Create a list of students
        students = []
        students.append(Student("Ollie", "1234", 10))
        students.append(Student("Peter", "3210", 23))
        students.append(Student("Lena", "9999", 43))
        students.append(Student("Tina", "3333", 8))

        # Create a course named Introduction to Programming
        itp = Course("Introduction to Programming", "itp1", 5)

        # Add completed courses for each student, with grade 3 for all
        completed = []
        for student in students:
            completed.append(CompletedCourse(student, itp, 3))

        # Print out the name of the student for each completed course
        for course in completed:
            print(course.student.name)
        ```
        Output:
        ```
        Ollie
        Peter
        Lena
        Tina
        ```
        - What exactly is happening with all the dots on the line `print(course.student.name)`?
            - `course` is an instance of the class `CompletedCourse`
            - `student` refers to an attribute of the `CompletedCourse` object, which is an object of type `Student`
            - the attribute `name` in the `Student` object contains the name of the student

#### When is an `import` necessary?
- In the examples above an import statement appeared quite a few times:
    ```py
    from completedcourse import CompletedCourse
    from course import Course
    from student import Student

    # rest of the main function
    ```
    - An `import` statement is only necessary when using code which is defined somewhere outside the current file (or Python interpreter session). This includes situations where we want to use something defined in the Python standard library. For example, the `math` module contains some mathematical operations:
        ```py
        import math

        x = 10
        print(f"the square root of {x} is {math.sqrt(x)}")
    ```
    - In the example above we assumed the three classes were each defined in a separate file, and the main function was run from yet another file. This is why the `import` statements were necessary.

#### A list of objects as an attribute of an object
- In the examples above we used single instances of other classes as attributes: a `Person` has a single `Pet` as an attribute, and a `CompletedCourse` has one `Student` and one `Course` as its attributes.

- In object oriented programming it is often the case that we want to have a collection of objects as an attribute. For example, the relationship between a sports team and its players follows this pattern:
    ```py
    class Player:
        def __init__(self, name: str, goals: int):
            self.name = name
            self.goals = goals

        def __str__(self):
            return f"{self.name} ({self.goals} goals)"

    class Team:
        def __init__(self, name: str):
            self.name = name
            self.players = []

        def add_player(self, player: Player):
            self.players.append(player)

        def summary(self):
            goals = []
            for player in self.players:
                goals.append(player.goals)
            print("Team:", self.name)
            print("Players:", len(self.players))
            print("Goals scored by each player:", goals)
    ```
    An example of our class in action:
    ```py
    ca = Team("Campus Allstars")
    ca.add_player(Player("Eric", 10))
    ca.add_player(Player("Emily", 22))
    ca.add_player(Player("Andy", 1))
    ca.summary()
    ```
    Output:
    ```
    Team: Campus Allstars
    Players: 3
    Goals scored by each player: [10, 22, 1]
    ```

#### None: a reference to nothing
- In Python programming all initialised variables refer to an object. There are, however, inevitably situations where we need to refer to something which does not exist, without causing errors. The keyword `None` represents exactly such an "empty" object.

- Continuing from the Team and Player example above, let's assume we want to add a method for searching for players on the team by the name of the player. If no such player is found, it might make sense to return `None`:
    ```py
    class Player:
        def __init__(self, name: str, goals: int):
            self.name = name
            self.goals = goals

        def __str__(self):
            return f"{self.name} ({self.goals} goals)"

    class Team:
        def __init__(self, name: str):
            self.name = name
            self.players = []

        def add_player(self, player: Player):
            self.players.append(player)

        def find_player(self, name: str):
            for player in self.players:
                if player.name == name:
                    return player
            return None
    ```
    Let's test our function:
    ```py
    ca = Team("Campus Allstars")
    ca.add_player(Player("Eric", 10))
    ca.add_player(Player("Amily", 22))
    ca.add_player(Player("Andy", 1))

    player1 = ca.find_player("Andy")
    print(player1)
    player2 = ca.find_player("Charlie")
    print(player2)
    ```
    Output:
    ```
    Andy (1 goals)
    None
    ```

- Be careful with `None`, though. It can sometimes cause more trouble than it solves. It is a common programming error to try to access a method or an attribute through a reference which evaluates to `None`:
    ```py
    ca = Team("Campus Allstars")
    ca.add_player(Player("Eric", 10))

    player = ca.find_player("Charlie")
    print(f"Goals by Charlie: {player.goals}")
    ```
    Executing the above would cause an error:
    ```
    Traceback (most recent call last):
    File "", line 1, in 
    AttributeError: 'NoneType' object has no attribute 'goals'
    ```

- It is a good idea to check for `None` before trying to access any attributes or methods of return values:
    ```py
    ca = Team("Campus Allstars")
    ca.add_player(Player("Eric", 10))

    player = ca.find_player("Charlie")
    if player is not None:
        print(f"Goals by Charlie: {player.goals}")
    else:
        print(f"Charlie doesn't play in Campus Allstars :(")
    ```
    Output:
    ```
    Charlie doesn't play in Campus Allstars :(
    ```

### Encapsulation
- In object oriented programming the term **client** refers to a program which uses a class, or instances of a class. A **class** offers the client services through which the client can access the objects created based on the class. The goals here are that
    1. the use of a class and/or objects is as simple as possible from the client's point of view
    2. the integrity of any object is preserved at all times

- The *integrity of an object* means that the state of an object always remains acceptable. In practice this means that the values of the object's attributes are always acceptable. For example, an object representing a date should never have 13 as the value of the month, an object modelling a student should never have a negative number as the value of study credits attained, and so forth.

- Let's take a look at a class named `Student`:
    ```py
    class Student:
        def __init__(self, name: str, student_number: str):
            self.name = name
            self.student_number = student_number
            self.study_credits = 0

        def add_credits(self, study_credits):
            if study_credits > 0:
                self.study_credits += study_credits
    ```
    - The `Student` object offers its clients the method `add_credits`, which allows the client to add a specified number of credits to the student's total. The method ensures the value passed as the argument is above zero. The following code adds study credits on three occasions:
        ```py
        sally = Student("Sally Student", "12345")
        sally.add_credits(5)
        sally.add_credits(5)
        sally.add_credits(10)
        print("Study credits:", sally.study_credits)
        ```
        Output:
        ```
        Study credits: 20
        ```
    - Despite the method definition it is still possible to access the `study_credits` attribute directly. This could result in an erroneous state where the integrity of the object is lost:
        ```py
        sally = Student("Sally Student", "12345")
        sally.study_credits = -100
        print("Study credits:", sally.study_credits)
        ```
        Output:
        ```
        Study credits: -100
        ```

#### Encapsulation
- A common feature in object oriented programming languages is that classes can usually hide their attributes from any prospective clients. Hidden attributes are usually called *private*. In Python this privacy is achieved by adding two underscores `__` to the beginning of the attribute name:
    ```py
    class CreditCard:
        # the attribute number is private, while the attribute name is accessible
        def __init__(self, number: str, name: str):
            self.__number = number
            self.name = name
    ```
    - A private attribute is not directly visible to the client. Trying to refer to it causes an error. In the above example the `name` attribute can be easily accessed and changed:
        ```py
        card = CreditCard("123456","Randy Riches")
        print(card.name)
        card.name = "Charlie Churchmouse"
        print(card.name)
        ```
        Output:
        ```
        Randy Riches
        Charlie Churchmouse
        ```
        Trying to print out the card number, however, causes and error:
        ```py
        card = CreditCard("123456","Randy Riches")
        print(card.__number)
        ```
        Output:
        ```
        AttributeError: 'CreditCard' object has no attribute '__number'
        ```

- Hiding attributes from clients is called **encapsulation**. As the name implies, the attribute is "enclosed in a capsule". The client is then offered a suitable interface for accessing and processing the data stored in the object.

- Let's add another encapsulated attribute: the balance on the credit card. This time we'll also add publicly visible methods which allow the client to access and change the balance:
    ```py
    class CreditCard:
        def __init__(self, number: str, name: str, balance: float):
            self.__number = number
            self.name = name
            self.__balance = balance

        def deposit_money(self, amount: float):
            if amount > 0:
                self.__balance += amount

        def withdraw_money(self, amount: float):
            if amount > 0 and amount <= self.__balance:
                self.__balance -= amount

        def retrieve_balance(self):
            return self.__balance
    ```
    ```py
    card = CreditCard("123456", "Randy Riches", 5000)
    print(card.retrieve_balance())
    card.deposit_money(100)
    print(card.retrieve_balance())
    card.withdraw_money(500)
    print(card.retrieve_balance())
    # The following will not work because the balance is not sufficient
    card.withdraw_money(10000)
    print(card.retrieve_balance())
    ```
    Output:
    ```
    5000
    5100
    4600
    4600
    ```
    - The balance cannot be changed directly because the attribute is private, but we've included the methods `deposit_money` and `withdraw_money` for changing the value. The method `retrieve_balance` returns the value stored in balance. The methods include some rudimentary checks for retaining the integrity of the object: for instance, the card cannot be overdrawn.

#### A brief note on private attributes, Python, and object oriented programming
- There are ways around the underscore `__` notation for hiding attributes, which you may come across if you search for resources online. No Python attribute is truly private, and this is intentional on the part of the creators of Python. On the other hand, a Python programmer is generally expected to respect the visibility guidelines set in classes, and it takes a special effort to get around these. In other object oriented programming languages, such as Java, private variables are often truly hidden, and it is best if you think of private Python variables as such as well.

#### Getters and setters
- In object oriented programming, methods which are dedicated to accessing and changing attributes are usually called **getters** and **setters**. Not all Python programmers use the terms "getter" and "setter", but the concept of properties outlined below is very similar, which is why we will use the generally accepted object oriented programming terminology here.

- So, above we created some public methods for accessing private attributes, but there is a more straightforward, "pythonic" way of accessing attributes. Let's have a look at a simple class named `Wallet` with a single, private attribute `money`:
    ```py
    class Wallet:
        def __init__(self):
            self.__money = 0
    ```
    - We can add getter and setter methods for accessing the private attribute using the `@property` decorator:
        ```py
        class Wallet:
            def __init__(self):
                self.__money = 0

            # A getter method
            @property
            def money(self):
                return self.__money

            # A setter method
            @money.setter
            def money(self, money):
                if money >= 0:
                    self.__money = money
        ```
        - First, we define a getter method, which returns the amount of money currently in the wallet. Then we define a setter method, which sets a new value for the money attribute while making sure the new value is not negative. The new methods can be used like so:
            ```py
            wallet = Wallet()
            print(wallet.money)

            wallet.money = 50
            print(wallet.money)

            wallet.money = -30
            print(wallet.money)
            ```
            Output:
            ```
            0
            50
            50
            ```
            - As far as the client is concerned, using these new methods is no different from directly accessing an attribute. Parentheses are not necessary; instead it is perfectly acceptable to state `wallet.money = 50`, as if we were simply assigning a value to a variable. Indeed, the purpose was to hide (i.e. encapsulate) the internal implementation of the attribute while offering an easy way of accessing and modifying the data stored in the object.
        - The previous example has a small problem: the client is not notified of the failure to set a negative value for the money attribute. When a value supplied is clearly wrong, it is usually a good idea to raise an exception and thus let the client know. In this case the exception should probably be of type `ValueError` to signify that the value supplied was unacceptable. Here we have an improved version of the class, along with some code for testing it:
            ```py
            class Wallet:
                def __init__(self):
                    self.__money = 0

                # A getter method
                @property
                def money(self):
                    return self.__money

                # A setter method
                @money.setter
                def money(self, money):
                    if money >= 0:
                        self.__money = money
                    else:
                        raise ValueError("The amount must not be below zero")
            ```
            ```py
            wallet.money = -30
            print(wallet.money)
            ```
            Output:
            ```
            ValueError: The amount must not be below zero
            ```
        - Note: the getter method, i.e. the `@property` decorator, must be introduced before the setter method, or there will be an error when the class is executed. This is because the `@property` decorator defines the name of the "attribute" offerred to the client. The setter method, added with `.setter`, simply adds a new functionality to it.
        - Note: the name before `.setter` should match the name of the getter method.

- The following example has a class with two private attributes, along with getters and setters for both. Please try the program out with different values passed as arguments:
    ```py
    class Player:
        def __init__(self, name: str, player_number: int):
            self.__name = name
            self.__player_number = player_number

        @property
        def name(self):
            return self.__name

        @name.setter
        def name(self, name: str):
            if name != "":
                self.__name = name
            else:
                raise ValueError("The name may not be an empty string")

        @property
        def player_number(self):
            return self.__player_number

        @player_number.setter
        def player_number(self, player_number: int):
            if player_number > 0:
                self.__player_number = player_number
            else:
                raise ValueError("The player number must be a positive integer")
    ```
    ```py
    player = Player("Betty Ballmer", 10)
    print(player.name)
    print(player.player_number)

    player.name = "Buster Ballmer"
    player.player_number = 11
    print(player.name)
    print(player.player_number)
    ```
    Output:
    ```
    Betty Ballmer
    10
    Buster Ballmer
    11
    ```

- To finish off this section, let's take a look at a class which models a simple diary. All attributes are private, but they are handled through differing interfaces: the owner of the diary has getter and setter methods, but the diary entries are processed with "traditional" methods. In this case it makes sense to deny the client all access to the internal data structure of the diary. Only the public methods are directly visible to the client. Encapsulation also ensures that the internal implementation of the class can be changed at will, provided that the public interface stays intact. The client does not have to know or care whether the internal data structure is based on lists, dictionaries, or something completely different.
    ```py
    class Diary:
        def __init__(self, owner: str):
            self.__owner = owner
            self.__entries = []

        @property
        def owner(self):
            return self.__owner

        @owner.setter
        def owner(self, owner):
            if owner != "":
                self.__owner = owner
            else:
                raise ValueError("The owner may not be an empty string")

        def add_entry(self, entry: str):
            self.__entries.append(entry)

        def print_entries(self):
            print("A total of", len(self.__entries), "entries")
            for entry in self.__entries:
                print("- " + entry)
    ```
    ```py
    diary = Diary("Peter")
    diary.add_entry("Today I ate porridge")
    diary.add_entry("Today I learned object oriented programming")
    diary.add_entry("Today I went to bed early")
    diary.print_entries()
    ```
    Output:
    ```
    A total of 3 entries

        - Today I ate porridge
        - Today I learned object oriented programming
        - Today I went to bed early
    ```

### Scope of methods
- The methods defined within a class can be hidden in exactly the same way as the attributes were in the previous section. If the method begins with two underscores `__`, it is not directly accessible by the client.

- So, the technique is the same for both methods and attributes, but the use cases are usually a little different. Private attributes often come paired with getter and setter methods for controlling access to them. Private methods, on the other hand, are usually intended for internal use only, as helper methods for processes which the client does not need to know about.

- A private method can be used within the class just like any other method, of course remembering to include the `self` prefix. The following is a simple class representing the recipient of email letters. It includes a private helper method for checking the email address is in a valid format:
    ```py
    class Recipient:
        def __init__(self, name: str, email: str):
            self.__name = name
            if self.__check_email(email):
                self.__email = email
            else:
                raise ValueError("The email address is not valid")

        def __check_email(self, email: str):
            # A simple check: the address must be over 5 characters long 
            # and contain a dot and an @ character
            return len(email) > 5 and "." in email and "@" in email
    ```
    Attempting to call the private method directly causes an error:
    ```py
    peter = Recipient("Peter Emailer", "peter@example.com")
    peter.__check_email("someone@example.com")
    ```
    Output:
    ```
    AttributeError: 'Recipient' object has no attribute '__check_email'
    ```
    - Within the class the method can be accessed normally, and it makes sense to use it also for setting a new value for the address. Let's add getter and setter methods for the email address:
        ```py
        class Recipient:
            def __init__(self, name: str, email: str):
                self.__name = name
                if self.__check_email(email):
                    self.__email = email
                else:
                    raise ValueError("The email address is not valid")

            def __check_email(self, email: str):
                # A simple check: the address must be over 5 characters long 
                # and contain a dot and an @ character
                return len(email) > 5 and "." in email and "@" in email

            @property
            def email(self):
                return self.__email

            @email.setter
            def email(self, email: str):
                if self.__check_email(email):
                    self.__email = email
                else:
                    raise ValueError("The email address is not valid")
        ```

#### Python scope and namespace
- We already came across the term scope in [part 6](https://programming-25.mooc.fi/part-6/4-scope-of-variables) of this material, and defined it as the sections of a program where a (variable) name is visible. Looking at the term from another direction, it also refers to what is visible from a specific point in program code. Another related term is namespace, which refers to the names specifically available within a defined Python unit, such as a class or a function definition.

    The scope within a method is different from the scope within a class, which is again different from the scope at the client code which creates an instance of the class. A method has access to its local variables, but also to the attributes and other methods in the class it is a part of, even if they are private. The class also has access to these, its own members, but it cannot directly access the local variables within its methods. The client code has access to only the public methods and attributes defined in the class, but of course also some other names in the environment in which it exists.

    
    It may seem counter-intuitive that a class would not have access to all its contents, but it is essential for ensuring integrity. For example, it might make sense to use the same local variable name in various different methods within the same class, if they perform somehow similar functionalities. If the class had direct access to all of the local variables within the methods, they would have to be named differently, or else it would not be clear which version of the variable was meant where. We have already seen with attributes declared with `self` that helper variables should not be made accessible outside a method, so adding the variables as attributes or global variables should not be an option. There has to be a way to keep names in different parts of the program separate, and this is what namespaces are for.

    The idea of a namespace helps with understanding how the same name can happily coexist in different functions, classes, or modules at the same time. If a name is specific to a namespace, such as a method definition, it is not directly accessible outside it, and so there is no reason why another namespace could not use the same name. Mastering namespaces and scopes is essential in becoming a proficient programmer, and you will get much practice on this course.

#### Do I need a private method?
- In the following example the class `DeckOfCards` is a model for a deck of 52 cards. It contains the helper method `__reset_deck`, which creates a new shuffled deck of cards. The private method is at the moment only called in the constructor method, so the implementation could arguably be placed directly in the constructor. However, using a separate method makes the code easier to read and also makes it possible to access the functionality later in other methods if necessary.
    ```py
    from random import shuffle

    class DeckOfCards:
        def __init__(self):
            self.__reset_deck()

        def __reset_deck(self):
            self.__deck = []
            # Add all 52 cards to the deck
            suits = ["spades", "hearts", "clubs", "diamonds"]
            for suit in suits:
                for number in range(1, 14):
                    self.__deck.append((suit, number))
            # Shuffle the deck
            shuffle(self.__deck)

        def deal(self, number_of_cards: int):
            hand = []
            # Move the top cards in the deck to the hand
            for i in range(number_of_cards):
                hand.append(self.__deck.pop())
            return hand
    ```
    Let's test the class:
    ```py
    deck = DeckOfCards()
    hand1 = deck.deal(5)
    print(hand1)
    hand2 = deck.deal(5)
    print(hand2)
    ```
    As the hands are randomly generated, the following is only an example of what could be printed out:
    ```
    [('spades', 7), ('spades', 11), ('hearts', 7), ('diamonds', 3), ('spades', 4)]
    [('clubs', 8), ('spades', 12), ('diamonds', 13), ('clubs', 11), ('spades', 10)]
    ```

- Private methods are generally less common than private attributes. As a rule of thumb, a method should be hidden whenever the client has no need to directly access it. This is especially the case when it is possible that the client could adversely affect the integrity of the object by calling the method.

### Class attributes
- The *traits* of objects are a central concept in object oriented programming. The term encompasses the methods and variables defined in the class definition. Again, not all Python programmers use the term "traits", some preferring attributes, features or members. Traits is quite accepted in the wider object oriented programming world, so that is the term we use here.

- Thus far we have dealt mostly with *traits of objects*. These include the methods and attributes accessible in any instance of a class. In fact, classes themselves can also have traits, which are sometimes called *static traits*, or more specifically *class variables* and *class methods*.

#### Class variables
- Each instance of a class has its own specific values for each attribute defined in the class, as we've seen in the examples in the previous sections. But what if we wanted to have some data that is shared by the different instances? Enter *class variables*, also known as static variables. A class variable is a variable which is accessed through the class itself, not through the instances created based on the class. At any given time during the execution of the program a class variable has one single value, no matter how many instances of the class are created.

- A class variable is declared without the `self` prefix, and usually outside any method definition as it should be accessible from anywhere within the class, or even from outside the class.
    ```py
    class SavingsAccount:
        general_rate = 0.03

        def __init__(self, account_number: str, balance: float, interest_rate: float):
            self.__account_number = account_number
            self.__balance = balance
            self.__interest_rate = interest_rate

        def add_interest(self):
            # The total interest rate equals 
            # the general rate + the interest rate of the account
            total_interest = SavingsAccount.general_rate + self.__interest_rate
            self.__balance += self.__balance * total_interest

        @property
        def balance(self):
            return self.__balance
    ```
    - As the variable `general_rate` is defined within the class but outside any method definitions, and it does not use the `self` prefix, it is a class variable.
    - A class variable is accessed through the name of the class, for example like this:
        ```py
        # The general rate exists independently of any object instances
        print("The general interest rate is", SavingsAccount.general_rate)

        account = SavingsAccount("12345", 1000, 0.05)
        # Add the total interest accrued to the balance on the account
        account.add_interest()
        print(account.balance)
        ```
        Output:
        ```
        The general interest rate is 0.03
        1080.0
        ```

- So, the class variables are accessed through the name of the class, for instance with `SavingsAccount.general_rate`, while instance variables are accessed through the name of the object variable, such as `account.balance`. An instance variable naturally only exists when an instance of the class has been created, but a class variable is available everywhere and at any point in time where the class itself is available.

- Class variables are useful when there is need for values which are shared by all instances of the class. In the example above we assumed the total interest rate of all savings accounts is formed from two components: the general rate of interest is shared by all accounts, but each account also has it's own interest rate in an instance variable. The general rate may also change, but the change will then affect all instances of the class equally.
    ```py
    class SavingsAccount:
        general_rate = 0.03

        def __init__(self, account_number: str, balance: float, interest_rate: float):
            self.__account_number = account_number
            self.__balance = balance
            self.__interest_rate = interest_rate

        def add_interest(self):
            # The total interest rate equals 
            # the general rate + the interest rate of the account
            total_interest = SavingsAccount.general_rate + self.__interest_rate
            self.__balance += self.__balance * total_interest

        @property
        def balance(self):
            return self.__balance

        @property
        def total_interest(self):
            return self.__interest_rate + SavingsAccount.general_rate
    ```
    ```py
    account1 = SavingsAccount("12345", 100, 0.03)
    account2 = SavingsAccount("54321", 200, 0.06)

    print("General interest rate:", SavingsAccount.general_rate)
    print(account1.total_interest)
    print(account2.total_interest)

    # The general rate of interest is now 10 percent
    SavingsAccount.general_rate = 0.10

    print("General interest rate:", SavingsAccount.general_rate)
    print(account1.total_interest)
    print(account2.total_interest)
    ```
    Output:
    ```
    General interest rate: 0.03
    0.06
    0.09
    General interest rate: 0.1
    0.13
    0.16
    ```
    - When the general rate of interest changes, the total interest rate for all instances of the class changes. As you can see above, it is possible to add a getter method with the `@property` decorator even though there isn't an attribute of the same name in the class. This method returns the sum of the general rate of interest and the account specific interest rate.

- Let's have a look at another example. The class `PhoneNumber` is used to define a single phone number, but it also contains some country codes in a dictionary. This dictionary is a class variable, and as such is shared by all the instances of the class, because the country code for phone numbers from a single country is always the same.
    ```py
    class PhoneNumber:
        country_codes = {"Finland": "+358", "Sweden": "+46", "United States": "+1"}

        def __init__(self, name: str, phone_number: str, country: str):
            self.__name = name
            self.__phone_number = phone_number
            self.__country = country

        @property
        def phone_number(self):
            # When the country code prefix is added 
            # the initial zero is removed from the phone number
            return PhoneNumber.country_codes[self.__country] + " " + self.__phone_number[1:]
    ```
    ```py
    paulas_no = PhoneNumber("Paula Pythons", "050 1234 567", "Finland")
    print(paulas_no.phone_number)
    ```
    Output:
    ```
    +358 50 1234 567
    ```
    - Each PhoneNumber object contains the name of the owner, the number itself, and the country of the phone number. When the attribute containing the phone number is accessed with the getter method, the appropriate country code is retrieved from the class variable dictionary based on the country attribute, and the result is prefixed to the number.
    - The example implementation above is not yet very functional otherwise. In the following example we've added getter and setters for all attributes:
        ```py
        class PhoneNumber:
            country_codes = {"Finland": "+358", "Sweden": "+46", "United States": "+1"}

            def __init__(self, name: str, phone_number: str, country: str):
                self.__name = name
                # This is a call to the phone_number.setter method
                self.phone_number = phone_number
                # This is a call to the country.setter method
                self.country = country

            # the getter method for phone_number combines the country code 
            # and the attribute phone_number
            @property
            def phone_number(self):
                # the initial zero is removed as the country code is prefixed
                return PhoneNumber.country_codes[self.__country] + " " + self.__phone_number[1:]

            @phone_number.setter
            def phone_number(self, number):
                # Making sure the number contains only numbers and space characters
                for character in number:
                    if character not in "1234567890 ":
                        raise ValueError("A phone number can only contain numbers and spaces")
                self.__phone_number = number

            # a getter for only the number itself without the country code
            @property
            def local_number(self):
                return self.__phone_number

            @property
            def country(self):
                return self.__country

            @country.setter
            def country(self, country):
                # Making sure the country is a key in the dictionary of country codes
                if country not in PhoneNumber.country_codes:
                    raise ValueError("This country is not on the list.")
                self.__country = country

            @property
            def name(self):
                return self.__name

            @name.setter
            def name(self, name):
                self.__name = name

            def __str__(self):
                return f"{self.phone_number} ({self.__name})"
        ```
        ```py
        if __name__ == "__main__":
            pn = PhoneNumber("Peter Pythons", "040 111 1111", "Sweden")
            print(pn)
            print(pn.phone_number)
            print(pn.local_number)
        ```
        ```
        +46 40 111 1111 (Peter Pythons)
        +46 40 111 1111
        040 111 1111
        ```

#### Class methods
- A **class method**, also called a **static method**, is a method which is not attached to any single instance of the class. A class method can be called without creating any instances of the class.

- Class methods are usually tools which have something to do with the purpose of the class, but which are detached in the sense that it should not be necessary to create instances of the class in order to be able to call them. Class methods are usually public, so that they can be called both from outside the class and from within the class, including from within instances of the class.

- A class method is defined with the `@classmethod` annotation. The first parameter is always `cls`. The variable name `cls` is similar to the `self` parameter. The difference is that `cls` points to the class while `self` point to an instance of the class. Neither parameter is included in the argument list when the function is called; Python fills in the appropriate value automatically.

- In the following example we have a class modelling vehicle registrations. The `Registration` class contains a static method for checking whether a license plate is valid. The method is a static class method because it is useful to be able to check if a license plate is valid even before a single `Registration` object is created:
    ```py
    class Registration:
        def __init__(self, owner: str, make: str, year: int, license_plate: str):
            self.__owner = owner
            self.__make = make
            self.__year = year

            # Call the license_plate.setter method
            self.license_plate = license_plate

        @property
        def license_plate(self):
            return self.__license_plate

        @license_plate.setter
        def license_plate(self, plate):
            if Registration.license_plate_valid(plate):
                self.__license_plate = plate
            else:
                raise ValueError("The license plate is not valid")

        # A class method for validating the license plate
        @classmethod
        def license_plate_valid(cls, plate: str):
            if len(plate) < 3 or "-" not in plate:
                return False

            # Check the beginning and end sections of the plate separately
            letters, numbers = plate.split("-")

            # the beginning section can have only letters
            for character in letters:
                if character.lower() not in "abcdefghijklmnopqrstuvwxyzåäö":
                    return False

            # the end section can have only numbers
            for character in numbers:
                if character not in "1234567890":
                    return False

            return True
    ```
    ```py
    registration = Registration("Mary Motorist", "Volvo", "1992", "abc-123")

    if Registration.license_plate_valid("xyz-789"):
        print("This is a valid license plate!")
    ```
    Output:
    ```
    This is a valid license plate!
    ```
    - The validity of a license plate can be checked even without creating a single instance of the class, for example with `Registration.license_plate_valid("xyz-789")`. The same method is called within the constructor of the class. Note: even within the constructor this method is accessed through the name of the class, not `self`!

### More examples with classes
- The following example consists of two classes. The class Point is a model for a point in two-dimensional space. The class Line is a model for a line segment between two points. The code below is commented; please read the comments in order to understand how the classes work.
    ```py
    import math

    class Point:
        """ The class represents a point in two-dimensional space """

        def __init__(self, x: float, y: float):
            # These attributes are public because any value is acceptable for x and y
            self.x = x
            self.y = y

        # This class method returns a new Point at origo (0, 0)
        # It is possible to return a new instance of the class from within the class
        @classmethod
        def origo(cls):
            return Point(0, 0)

        # This class method creates a new Point based on an existing Point
        # The original Point can be mirrored on either or both of the x and y axes
        # For example, the Point (1, 3) mirrored on the x-axis is (1, -3)
        @classmethod
        def mirrored(cls, point: "Point", mirror_x: bool, mirror_y: bool):
            x = point.x
            y = point.y
            if mirror_x:
                y = -y
            if mirror_y:
                x = -x

            return Point(x, y)

        def __str__(self):
            return f"({self.x}, {self.y})"


    class Line:
        """ The class represents a line segment in two-dimensional space """

        def __init__(self, beginning: Point, end: Point):
            # These attributes are public because any two Points are acceptable
            self.beginning = beginning
            self.end = end

        # This method uses the Pythagorean theorem to calculate the length of the line segment
        def length(self):
            sum_of_squares = (self.end.x - self.beginning.x) ** 2 + (self.end.y - self.beginning.y) ** 2
            return math.sqrt(sum_of_squares)

        # This method returns the Point in the middle of the line segment
        def centre_point(self):
            centre_x = (self.beginning.x + self.end.x) / 2
            centre_y = (self.beginning.y + self.end.y) / 2
            return Point(centre_x, centre_y)

        def __str__(self):
            return f"{self.beginning} ... {self.end}"
    ```
    ```py
    point = Point(1,3)
    print(point)

    origo = Point.origo()
    print(origo)

    point2 = Point.mirrored(point, True, True)
    print(point2)

    line = Line(point, point2)
    print(line.length())
    print(line.centre_point())
    print(line)
    ```
    Output:
    ```
    (1, 3)
    (0, 0)
    (-1, -3)
    6.324555320336759
    (0.0, 0.0)
    (1, 3) ... (-1, -3)
    ```

#### Default values of parameters
- In Python programming you can generally set a default value for any parameter. Default values can be used in both functions and methods.

- If a parameter has a default value, you do not have to include a value as an argument when calling the function. If an argument is given, the default value is ignored. If not, the default value is used.

- Default values are often used in constructors. If it can be expected that not all information is available when an object is created, it is better to include a default value in the definition of the constructor method than to force the client to take care of the issue. This makes using the class easier from the client's point of view, but it also ensures the integrity of the object. For instance, with a set default value we can be sure that an "empty" value is always the same, unless the client specifically wants to supply something different. If a default value is not set, it is up to the client to provide an "empty" value. This could be, for example, an empty string `""`, the special empty object `None`, or the string `"not set"`.

- Let's have a look at yet another class representing a student. When creating a new Student object the client must provide a name and a student number. The student number is private and should not be changed later. Additionally, a Student object has attributes for study credits and notes, which have default values set in the constructor. New values can be passed as arguments to the constructor, but they can also be left out so that the default values are used instead. Please have a look at the comments in the code to better understand what each method does.
    ```py
    class Student:
        """ This class models a student """

        def __init__(self, name: str, student_number: str, credits: int = 0, notes: str = ""):
            # calling the setter method for the name attribute
            self.name = name

            if len(student_number) < 5:
                raise ValueError("A student number should have at least five characters")

            self.__student_number = student_number

            # calling the setter method for the credits attribute
            self.credits = credits

            self.__notes = notes

        @property
        def name(self):
            return self.__name

        @name.setter
        def name(self, name):
            if name != "":
                self.__name = name
            else:
                raise ValueError("The name cannot be an empty string")

        @property
        def student_number(self):
            return self.__student_number

        @property
        def credits(self):
            return self.__credits

        @credits.setter
        def credits(self, op):
            if op >= 0:
                self.__credits = op
            else:
                raise ValueError("The number of study credits cannot be below zero")

        @property
        def notes(self):
            return self.__notes

        @notes.setter
        def notes(self, notes):
            self.__notes = notes

        def summary(self):
            print(f"Student {self.__name} ({self.student_number}):")
            print(f"- credits: {self.__credits}")
            print(f"- notes: {self.notes}")
    ```
    ```py
    # Passing only the name and the student number as arguments to the constructor
    student1 = Student("Sally Student", "12345")
    student1.summary()

    # Passing the name, the student number and the number of study credits
    student2 = Student("Sassy Student", "54321", 25)
    student2.summary()

    # Passing values for all the parameters
    student3 = Student("Saul Student", "99999", 140, "extra time in exam")
    student3.summary()

    # Passing a value for notes, but not for study credits
    # NB: the parameter must be named now that the arguments are not in order
    student4 = Student("Sandy Student", "98765", notes="absent in academic year 20-21")
    student4.summary()
    ```
    Output:
    ```
    Student Sally Student (12345):
        - credits: 0
        - notes:
    Student Sassy Student (54321):
        - credits: 25
        - notes:
    Student Saul Student (99999):
        - credits: 140
        - notes: extra time in exam
    Student Sandy Student (98765):
        - credits: 0
        - notes: absent in academic year 20-21
    ```
    - Note: There is no setter method for the attribute student_number as the student number is not supposed to change.

- There is one rather significant snag when using default values for parameters. The following example modelling yet another kind of student will shed more light on this:
    ```py
    class Student:
        def __init__(self, name, completed_courses=[]):
            self.name = name
            self.completed_courses = completed_courses

        def add_course(self, course):
            self.completed_courses.append(course)
    ```
    ```py
    student1 = Student("Sally Student")
    student2 = Student("Sassy Student")

    student1.add_course("ItP")
    student1.add_course("ACiP")

    print(student1.completed_courses)
    print(student2.completed_courses)
    ```
    Output:
    ```
    ['ItP', 'ACiP']
    ['ItP', 'ACiP']
    ```
    - Adding completed courses to Sally's list also adds those courses to Sassy's list. In fact, these two are the exact same list, as Python reuses the reference stored in the default value. Creating the two new Student objects in the above example is equivalent to the following:
        ```py
        courses = []
        student1 = Student("Sally Student", courses)
        student2 = Student("Sassy Student", courses)
        ```
    - The default values of parameters should never be instances of more complicated, mutable data structures, such as lists. The problem can be circumvented by making the following changes to the constructor of the `Student` class:
        ```py
        class Student:
            def __init__(self, name, completed_courses=None):
                self.name = name
                if completed_courses is None:
                    self.completed_courses = []
                else:
                    self.completed_courses = completed_courses

            def add_course(self, course):
                self.completed_courses.append(course)
        ```
        ```py
        student1 = Student("Sally Student")
        student2 = Student("Sassy Student")

        student1.add_course("ItP")
        student1.add_course("ACiP")

        print(student1.completed_courses)
        print(student2.completed_courses)
        ```
        Output:
        ```
        ['ItP', 'ACiP']
        []
        ```

### Class hierarchies

#### Special classes for special purposes
- Sometimes you come across a situation where you have already defined a class, but then realize you need special traits in some, but not all, instances of the class. Then again, sometimes you realize you've defined two very similar classes with only minor differences. As programmers we aim to always repeat ourselves as little as possible, while maintaining clarity and readability. So how can we accommodate for different implementations of intrinsically similar objects?

- Let's have a look at two class definitions: `Student` and `Teacher`. Getter and setter methods have been left out for now, in order to keep the example short.
    ```py
    class Student:

        def __init__(self, name: str, id: str, email: str, credits: str):
            self.name = name
            self.id = id
            self.email = email
            self.credits = credits

    class Teacher:

        def __init__(self, name: str, email: str, room: str, teaching_years: int):
            self.name = name
            self.email = email
            self.room = room
            self.teaching_years = teaching_years
    ```
    - Even in a stripped down example, like the above, we already have quite a bit of repetition: both classes contain attributes `name` and `email`. It would be a good idea to have a single attribute definition, so that a single function would suffice for editing both attributes. For example, imagine the school's email address changed. All addresses would have to be updated. We could write two separate versions of essentially the same function:
        ```py
        def update_email(o: Student):
            o.email = o.email.replace(".com", ".edu")

        def update_email2(o: Teacher):
            o.email = o.email.replace(".com", ".edu")
        ```
        - Writing practically the same thing twice is unnecessary repetition, not to mention it doubles the possibilities for errors. It would be a definite improvement if we could use a single function to work with instances of both classes.
        - Both classes also have attributes which are unique to them. Simply combining all attributes in a single class would mean all instances of the class would then have unnecessary attributes, just different ones for different instances. That doesn't seem like an ideal situation, either.

#### Inheritance
- Object oriented programming languages usually feature a technique called **inheritance**. A class can *inherit* the traits of another class. In addition to these inherited traits a class can also contain traits which are unique to it.

- Knowing this, it would make sense for the Teacher and Student classes to have a common base or parent class `Person`:
    ```py
    class Person:

        def __init__(self, name: str, email: str):
            self.name = name
            self.email = email
    ```
    - The new class contains those traits which are shared by the other two classes. Now `Student` and `Teacher` can inherit these traits and add their own besides.
    - The syntax for inheritance simply involves adding the base class name in parentheses on the header line:
        ```py
        class Person:

            def __init__(self, name: str, email: str):
                self.name = name
                self.email = email

            def update_email_domain(self, new_domain: str):
                old_domain = self.email.split("@")[1]
                self.email = self.email.replace(old_domain, new_domain)


        class Student(Person):

            def __init__(self, name: str, id: str, email: str, credits: str):
                self.name = name
                self.id = id
                self.email = email
                self.credits = credits


        class Teacher(Person):

            def __init__(self, name: str, email: str, room: str, teaching_years: int):
                self.name = name
                self.email = email
                self.room = room
                self.teaching_years = teaching_years

        # Let's test our classes
        if __name__ == "__main__":
        saul = Student("Saul Student", "1234", "saul@example.com", 0)
        saul.update_email_domain("example.edu")
        print(saul.email)

        tara = Teacher("Tara Teacher", "tara@example.fi", "A123", 2)
        tara.update_email_domain("example.ex")
        print(tara.email)
        ```
        - Both `Student` and `Teacher` inherit the `Person` class, so both have the traits defined in the `Person` class, including the method `update_email_domain`. The same method works for instances of both the derived classes.

- Let's have a look at another example. We have a `Bookshelf` which inherits the class `BookContainer`:
    ```py
    class Book:
        """ This class models a simple book """
        def __init__(self, name: str, author: str):
            self.name = name
            self.author = author


    class BookContainer:
        """ This class models a container for books """

        def __init__(self):
            self.books = []

        def add_book(self, book: Book):
            self.books.append(book)

        def list_books(self):
            for book in self.books:
                print(f"{book.name} ({book.author})")


    class Bookshelf(BookContainer):
        """ This class models a shelf for books """

        def __init__(self):
            super().__init__()

        def add_book(self, book: Book, location: int):
            self.books.insert(location, book)
    ```
    - The class `Bookshelf` contains the method `add_book`. A method with the same name is defined in the base class `BookContainer`. This is called *overriding*: if a derived class has a method with the same name as the base class, the derived version overrides the original in instances of the derived class.
    - The idea in the example above is that a new book added to a `BookContainer` always goes to the top, but with a Bookshelf you can specify the location yourself. The method `list_books` works the same for both classes, as there is no overriding method in the derived class.
    - Let's try out these classes:
        ```py
        if __name__ == "__main__":
            # Create some books for testing
            b1 = Book("Old Man and the Sea", "Ernest Hemingway")
            b2 = Book("Silent Spring", "Rachel Carson")
            b3 = Book("Pride and Prejudice", "Jane Austen")

            # Create a BookContainer and add the books
            container = BookContainer()
            container.add_book(b1)
            container.add_book(b2)
            container.add_book(b3)

            # Create a Bookshelf and add the books (always to the beginning)
            shelf = Bookshelf()
            shelf.add_book(b1, 0)
            shelf.add_book(b2, 0)
            shelf.add_book(b3, 0)


            # Tulostetaan
            print("Container:")
            container.list_books()

            print()

            print("Shelf:")
            shelf.list_books()
        ```
        Output:
        ```
        Container:
        Old Man and the Sea (Ernest Hemingway)
        Silent Spring (Rachel Carson)
        Pride and Prejudice (Jane Austen)

        Shelf:
        Pride and Prejudice (Jane Austen)
        Silent Spring (Rachel Carson)
        Old Man and the Sea (Ernest Hemingway)
        ```

#### Inheritance and scope of traits
- A derived class inherits all traits from its base class. Those traits are directly accessible in the derived class, unless they have been defined as private in the base class (with two underscores before the name of the trait).

- As the attributes of a `Bookshelf` are identical to a `BookContainer`, there was no need to rewrite the constructor of `Bookshelf`. We simply called the constructor of the base class:
    ```py
    class Bookshelf(BookContainer):

        def __init__(self):
            super().__init__()
    ```
    - Any trait in the base class can be accessed from the derived class with the function `super()`. The `self` argument is left out from the method call, as Python adds it automatically.

- But what if the attributes are not identical; can we still use the base class constructor in some way? Let's have a look at a class named `Thesis` which inherits the `Book` class. The derived class can still call the constructor from the base class:
    ```py
    class Book:
        """ This class models a simple book """

        def __init__(self, name: str, author: str):
            self.name = name
            self.author = author


    class Thesis(Book):
        """ This class models a graduate thesis """

        def __init__(self, name: str, author: str, grade: int):
            super().__init__(name, author)
            self.grade = grade
    ```
    - The constructor in the `Thesis` class calls the constructor in the base class `Book` with the arguments for `name` and `author`. Additionally, the constructor in the derived class sets the value for the attribute `grade`. This naturally cannot be a part of the base class constructor, as the base class has no such attribute.
    - The above class can be used like this:
        ```py
        if __name__ == "__main__":
            thesis = Thesis("Python and the Universe", "Peter Pythons", 3)

            # Print out the values of the attributes
            print(thesis.name)
            print(thesis.author)
            print(thesis.grade)
        ```
        Output:
        ```
        Python and the Universe
        Peter Pythons
        3
        ```

- Even if a derived class overrides a method in its base class, the derived class can still call the overridden method in the base class. In the following example we have a basic `BonusCard` and a special `PlatinumCard` for especially loyal customers. The `calculate_bonus` method is overridden in the derived class, but the overriding method calls the base method:
    ```py
    class Product:

        def __init__(self, name: str, price: float):
            self.name = name
            self.price = price

    class BonusCard:

        def __init__(self):
            self.products_bought = []

        def add_product(self, product: Product):
            self.products_bought.append(product)

        def calculate_bonus(self):
            bonus = 0
            for product in self.products_bought:
                bonus += product.price * 0.05

            return bonus

    class PlatinumCard(BonusCard):

        def __init__(self):
            super().__init__()

        def calculate_bonus(self):
            # Call the method in the base class
            bonus = super().calculate_bonus()

            # ...and add five percent to the total
            bonus = bonus * 1.05
            return bonus
    ```
    - So, the bonus for a `PlatinumCard` is calculated by calling the overriden method in the base class, and then adding an extra 5 percent to the base result. An example of how these classes are used:
        ```py
        if __name__ == "__main__":
            card = BonusCard()
            card.add_product(Product("Bananas", 6.50))
            card.add_product(Product("Satsumas", 7.95))
            bonus = card.calculate_bonus()

            card2 = PlatinumCard()
            card2.add_product(Product("Bananas", 6.50))
            card2.add_product(Product("Satsumas", 7.95))
            bonus2 = card2.calculate_bonus()

            print(bonus)
            print(bonus2)
        ```
        Output:
        ```
        0.7225
        0.7586250000000001
        ```
