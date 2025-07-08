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

## Links
- [pip Requirements File Format](https://pip.pypa.io/en/stable/reference/requirements-file-format/)
