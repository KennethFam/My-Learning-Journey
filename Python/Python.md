# Python

## Background
- For these notes, I'm starting off at Part 5 of [MOOC's 2025 Python Course](https://programming-25.mooc.fi/part-5), since I have already completed Parts 1-4 of the [2024 version](https://programming-24.mooc.fi/) a while back but never took notes. I may revisit those parts later on to make the notes complete.

## Built-In Functions
- `sum()` gets the sum of numeric values in an iterable.
- `len()` gets the legnth of an iterable.

## Lists
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

## Functions

### Using global variables within functions
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

## Scope
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