# Linux

## Basic Keybinds
- Copy: `ctrl` + `shift` + `c`
- Patse: `ctrl` + `shift` + `v`

## Basic Commands
- Checking for updates:
    ```
    sudo apt update
    ```
- Updating packages not including ones that require the removal of packages:
    ```
    sudo apt upgrade
    ```
- Updating packages including including ones that require the removal of packages:
    ```
    sudo apt full-upgrade
    ```

## Directory Commands
- Creating a directory:
    ```
    mkdir directoryName
    ```
- Changing directories:
    ```
    cd /path/to/directory
    ```
- Navigating to home directory:
    ```
    cd ~
    ```
- Navigating to parent directory:
    ```
    cd ..
    ```
- Listing the contents of the current directory
    ```
    ls
    ```
    - To check if a specific directory exits:
        ```
        ls path/to/directory
        ```

## File Commands
- Creating a file:
    ```
    touch fileName.fileExtension
    ```
- Deleting files:
    ```
    rm -flag fileName.fileExtension
    ```
    - flag is optional
    - flags:
        - -i: delete with confirmation
        - -r: recursive, delete directory and everything inside (no recycle bin)
        - -rf: same as -r but with no prompts (no recycle bin)

## VSCode
- Opening current directory in VSCode
    ```
    code .
    ```
- Opening terminal: `ctrl` + `` ` ``