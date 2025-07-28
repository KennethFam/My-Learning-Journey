# Linux

<details>
<summary><strong> Exercise </strong></summary>

- 
    - Ans: 

</details>

## Source(s)
- [Linux Journey](https://linuxjourney.com/)

## Basic Keybinds
- Copy: `ctrl` + `shift` + `c`
- Patse: `ctrl` + `shift` + `v`

## Basic Command Formatting:
- Use `\` for multi-line commands:
    ```bash
    PGUSER=dbuser \
    PGPASSWORD=secretpassword \
    PGHOST=database.server.com \
    PGPORT=3211 \
    PGDATABASE=mydb \
    node script.js
    ```

## Basic Commands
- Checking for updates:
    ```
    sudo apt update
    ```
- Updating packages not including ones that require the removal of packages:
    ```
    sudo apt upgrade
    ```
- Checking for updates and upgrading packages:
    ```
    sudo apt update && sudo apt upgrade
    ```
- Updating packages including including ones that require the removal of packages:
    ```
    sudo apt full-upgrade
    ```
- Installing APT/Debian package(s)
    ```
    sudo apt install package1 package2 ...
    ```
- Equivalent of SFC /SCANNOW (Windows command to check for corrupted files)
    - First, the debsum package must be installed. The package is simply called `debsums`.
    ```bash
    sudo debsums
    ```
        - Add -s flag at the end to check configuration files, which are not checked by default. Setting this flag will also make it so that only error messages are printed instead of a bunch of messages confirming that a package is okay.
- Getting your Linux username:
    ```
    whoami
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

## The Linux Command Line

### Fundamentals of the command line, navigating files, directories, and more

#### The Shell
- The world is your oyster, or really the shell is your oyster. What is the shell? The shell is basically a program that takes your commands from the keyboard and sends them to the operating system to perform. If you’ve ever used a GUI, you’ve probably seen programs such as “Terminal” or “Console” these are just programs that launch a shell for you. Throughout this entire course we will be learning about the wonders of the shell.

- In this course we will use the shell program bash (Bourne Again shell), almost all Linux distributions will default to the bash shell. There are other shells available such as ksh, zsh, tsch, but we won’t get into any of those.

- Let’s jump right in! Depending on the distribution your shell prompt might change, but for the most part it should adhere to the following format:
    ```
    username@hostname:current_directory

    pete@icebox:/home/pete $
    ```

- Notice the $ at the end of the prompt? Different shells will have different prompts, in our case the $ is for a normal user using Bash, Bourne or Korn shell, you don't add the prompt symbol when you type the command, just know that it's there.

- Let’s start with a simple command, `echo`. The `echo` command just prints out the text arguments to the display.
    ```bash
    $ echo Hello World
    ```

- `date` is a command which will output the current date.

- `whoami` is a command that will output your username in the shell.

#### pwd (Print Working Directory)
- Everything in Linux is a file, as you journey deeper into Linux you’ll understand this, but for now just keep that in mind. Every file is organized in a hierarchical directory tree. The first directory in the filesystem is aptly named the root directory. The root directory has many folders and files which you can store more folders and files, etc. Here is an example of what the directory tree looks like:
    ```
    /

    |-- bin

    |   |-- file1

    |   |-- file2

    |-- etc

    |   |-- file3

    |   `-- directory1

    |       |-- file4

    |       `-- file5

    |-- home

    |-- var
    ```
    - The location of these files and directories are referred to as *paths*. If you had a folder named home with a folder inside of it named pete and another folder in that folder called Movies, that path would look like this: `/home/pete/Movies`.

- Navigation of the filesystem, much like real life is helpful if you know where you are and where you are going. To see where you are, you can use the `pwd` command, this command means “print working directory” and it just shows you which directory you are in, note the path stems from the root directory.
    ```bash
    $ pwd
    ```

#### cd (Change Directory)
- Now that you know where you are, let’s see if we can move around the filesystem a bit. Remember we’ll need to navigate our way using paths. There are two different ways to specify a path, with absolute and relative paths.
    - Absolute path: This is the path from the root directory. The root is the head honcho. The root directory is commonly shown as a slash. Every time your path starts with / it means you are starting from the root directory. For example, `/home/pete/Desktop`.\
    - Relative path: This is the path from where you are currently in filesystem. If I was in location `/home/pete/Documents` and wanted to get to a directory inside `Documents` called `taxes`, I don’t have to specify the whole path from root like `/home/pete/Documents/taxes`, I can just go to `taxes/` instead.

- Now that you know how paths work, we just need something to help us change to the directory we want to. Luckily, we have `cd` or “change directory” to do that.
    ```bash
    cd /home/pete/Pictures
    ```
    - So now I've changed my directory location to `/home/pete/Pictures`.
    - Now from this directory I have a folder inside called `Hawaii`, I can navigate to that folder with:
        ```
        cd Hawaii
        ```
        - Notice how I just used the name of the folder? It’s because I was already in `/home/pete/Pictures`.

- It can get pretty tiring navigating with absolute and relative paths all the time, luckily there are some shortcuts to help you out.
    - `.` (current directory). This is the directory you are currently in.
    - `..` (parent directory). Takes you to the directory above your current.
    - `~` (home directory). This directory defaults to your “home directory”. Such as `/home/pete`.
    - `-` (previous directory). This will take you to the previous directory you were just at.
    ```bash
    $ cd .

    $ cd ..

    $ cd ~

    $ cd -
    ```

#### ls (List Directories)
- Now that we know how to move around the system, how do we figure out what is available to us? Right now it’s like we are moving around in the dark. Well, we can use the wonderful `ls` command to list directory contents. The ls command will list directories and files in the current directory by default, however you can specify which path you want to list the directories of.
    ```
    $ ls

    $ ls /home/pete
    ```
    - `ls` is a quite useful tool, it also shows you detailed information about the files and directories you are looking at.

- Also note that not all files in a directory will be visible. Filenames that start with . are hidden, you can view them however with the `ls` command and pass the `-a` flag to it (a for all).
    ```bash
    $ ls -a
    ```

- There is also one more useful `ls` flag, `-l` for long, this shows a detailed list of files in a long format. This will show you detailed information, starting from the left: file permissions, number of links, owner name, owner group, file size, timestamp of last modification, and file/directory name.
    ```bash
    pete@icebox:~$ ls -l

    total 80

    drwxr-x--- 7 pete penguingroup   4096 Nov 20 16:37 Desktop

    drwxr-x--- 2 pete penguingroup   4096 Oct 19 10:46  Documents

    drwxr-x--- 4 pete penguingroup   4096 Nov 20 09:30 Downloads

    drwxr-x--- 2 pete penguingroup   4096 Oct  7 13:13   Music

    drwxr-x--- 2 pete penguingroup   4096 Sep 21 14:02 Pictures

    drwxr-x--- 2 pete penguingroup   4096 Jul 27 12:41   Public

    drwxr-x--- 2 pete penguingroup   4096 Jul 27 12:41   Templates

    drwxr-x--- 2 pete penguingroup   4096 Jul 27 12:41   Videos
    ```

- Commands have things called flags (or arguments or options, whatever you want to call it) to add more functionality. See how we added `-a` and `-l`, well you can add them both together with `-la`. The order of the flags determines which order it goes in, most of the time this doesn’t really matter so you can also do `ls -al` and it would still work.
    ```bash
    $ ls -la
    ```

#### touch
- Let’s learn how to make some files. A very simple way is to use the touch command. Touch allows you to the create new empty files.
    ```bash
    $ touch mysuperduperfile
    ```

- Touch is also used to change timestamps on existing files and directories. Give it a try, do an `ls -l` on a file and note the timestamp, then touch that file and it will update the timestamp.

- There are many other ways to create files that involve other things like redirection and text editors, but we’ll get to that in the Text Manipulation course.

#### file 
- In the previous lesson we learned about touch, let’s go back to that for a bit. Did you notice that the filename didn’t conform to standard naming like you’ve probably seen with other operating systems like Windows? Normally you would expect a file called `banana.jpeg` and expect a `JPEG` picture file.

- In Linux, filenames aren’t required to represent the contents of the file. You can create a file called funny.gif that isn’t actually a GIF.

- To find out what kind of file a file is, you can use the `file` command. It will show you a description of the file’s contents.
    ```bash
    $ file banana.jpg
    ```

#### cat
- We’re almost done navigating files, but first let’s learn how to read a file. A simple command to use is the `cat` command, short for concatenate, it not only displays file contents but it can combine multiple files and show you the output of them.
    ```bash
    $ cat dogfile birdfile
    ```

- It’s not great for viewing large files and it’s only meant for short content. There are many other tools that we use to view larger text files that we’ll discuss in Text Manipulation.

#### less
- If you are viewing text files larger than a simple output, less is more. (There is actually a command called `more` that does something similar, so this is ironic.) The text is displayed in a paged manner, so you can navigate through a text file page by page.

- Go ahead and look at the contents of a file with `less`. Once you’re in the `less` command, you can actually use other keyboard commands to navigate in the file.
    ```bash
    $ less /home/pete/Documents/text1
    ```

- Use the following command to navigate through less:
    - `q` - Used to quit out of less and go back to your shell.
    - `Page up`, `Page down`, `Up` and `Down` - Navigate using the arrow keys and page keys.
    - `g` - Moves to beginning of the text file.
    - `G` - Moves to the end of the text file.
    - `/search_pattern` - You can search for specific text inside the text document. Prefacing the words you want to search with `/`. Note: You'll need to replace "search_pattern" with your search pattern.
    - `h` - If you need a little help about how to use less while you’re in less, use help.

#### history
- In your shell, there is a history of the commands that you previously entered, you can actually look through these commands. This is quite useful when you want to find and run a command you used previously without actually typing it again.
    ```bash
    $ history
    ```

- Want to run the same command you did before, just hit the up arrow.

- Want to run the previous command without typing it again? Use `!!`. If you typed `cat file1` and want to run it again, you can actually just go `!!` and it will run the last command you ran.

- Another history shortcut is `ctrl-R`, this is the reverse search command, if you hit ctrl-R and you start typing parts of the command you want it will show you matches and you can just navigate through them by hitting the `ctrl-R` key again. Once you found the command you want to use again, just hit the Enter key.

- Our terminal is getting a little cluttered no? Let’s do a little cleanup, use the clear command to clear up your display.
    ```bash
    $ clear
    ```

- While we are talking about useful things, one of the most useful features in any command-line environment is tab completion. If you start typing the beginning of a command, file, directory, etc and hit the Tab key, it will autocomplete based on what it finds in the directory you are searching as long as you don’t have any other files that start with those letters. For example if you were trying to run the command chrome, you can type chr and press Tab and it will autocomplete chrome.

#### cp (Copy)
- Let’s start making some copies of these files. Much like copy and pasting files in other operating systems, the shell gives us an even simpler way of doing that.
    ```bash
    $ cp mycoolfile /home/pete/Documents/cooldocs
    ```
    - `mycoolfile` is the file you want to copy and `/home/pete/Documents/cooldocs` is where you are copying the file to.

- You can copy multiple files and directories as well as use wildcards. A wildcard is a character that can be substituted for a pattern based selection, giving you more flexibility with searches. You can use wildcards in every command for more flexibility.
    - `*` the wildcard of wildcards, it's used to represent all single characters or any string.
    - `?` used to represent one character
    - `[]` used to represent any character within the brackets
    ```bash
    $ cp *.jpg /home/pete/Pictures
    ```
    - This will copy all files with the .jpg extension in your current directory to the Pictures directory.

- A useful command is to use the `-r` flag, this will recursively copy the files and directories within a directory.
    - Try to do a cp on a directory that contains a couple of files to your Documents directory. Didn’t work did it? Well that’s because you’ll need to copy over the files and directories inside as well with `-r` command.
        ```bash
        $ cp -r Pumpkin/ /home/pete/Documents
        ```
    - One thing to note, if you copy a file over to a directory that has the same filename, the file will be overwritten with whatever you are copying over. This is no bueno if you have a file that you don’t want to get accidentally overwritten. You can use the -i flag (interactive) to prompt you before overwriting a file.
        ```bash
        $ cp -i mycoolfile /home/pete/Pictures
        ```

#### mv (Move)
- Used for moving files and also renaming them. Quite similar to the cp command in terms of flags and functionality.

- You can rename files like this:
    ```bash
    $ mv oldfile newfile
    ```

- Or you can actually move a file to a different directory:
    ```bash
    $ mv file2 /home/pete/Documents
    ```

- And move more than one file:
    ```bash
    $ mv file_1 file_2 /somedirectory
    ```

- You can rename directories as well:
    ```bash
    $ mv directory1 directory2
    ```

- Like cp, if you mv a file or directory it will overwrite anything in the same directory. So you can use the `-i` flag to prompt you before overwriting anything.
    ```bash
    mv -i directory1 directory2
    ```

- Let’s say you did want to mv a file to overwrite the previous one. You can also make a backup of that file and it will just rename the old version with a ~.
    ```bash
    $ mv -b directory1 directory2
    ```

#### mkdir (Make Directory)
-  We’re gonna need some directories to store all these files we’ve been working on. The mkdir command (Make Directory) is useful for that, it will create a directory if it doesn’t already exist. You can even make multiple directories at the same time.
    ```bash
    $ mkdir books paintings
    ```

- You can also create subdirectories at the same time with the `-p` (parent flag).
    ```bash
     mkdir -p books/hemmingway/favorites
    ```

#### rm (Remove)
- Now I think we have too many files, let’s remove some files. To remove files you can use the `rm` command. The `rm` (remove) command is used to delete files and directories.
    ```bash
    $ rm file1
    ```

- Take caution when using rm, there is no magical trash can that you can fish out removed files. Once they are gone, they are gone for good, so be careful.

- Fortunately there are some safety measures put into place, so the average joe can’t just remove a bunch of important files. Write-protected files will prompt you for confirmation before deleting them. If a directory is write-protected it will also not be easily removed.

- Now if you don’t care about any of that, you can absolutely remove a bunch of files.
    ```bash
    rm -f file1
    ```
    - `-f` or force option tells rm to remove all files, whether they are write protected or not, without prompting the user (as long as you have the appropriate permissions).

- Adding the `-i` flag like many of the other commands, will give you a prompt on whether you want to actually remove the files or directories.
    ```bash
    rm -i file
    ```

- You can’t just `rm` a directory by default, you’ll need to add the `-r` flag (recursive) to remove all the files and any subdirectories it may have.
    ```bash
    $ rm -r directory
    ```

- You can remove a directory with the rmdir command.
    ```bash
    $ rmdir directory
    ```

#### find
- With all these files we have on the system it can get a little hectic trying to find a specific one. Well there’s a command we can use for that, `find`!
    ```bash
    $ find /home -name puppies.jpg
    ```
    - With `find` you’ll have to specify the directory you’ll be searching it, what you’re searching for, in this case we are trying to find a file by the name of puppies.jpg.

- You can specify what type of file you are trying to find.
    ```bash
    $ find /home -type d -name MyFolder
    ```
    - You can see that I set the type of file I’m trying to find as (`d`) for directory and I’m still searching by the name of MyFolder.

- One cool thing to note is that `find` doesn’t stop at the directory you are searching, it will look inside any subdirectories that directory may have as well.

#### 15. help
- Linux has some great built-in tools to help you how to use a command or check what flags are available for a command. One tool, `help`, is a built-in bash command that provides help for other bash commands (`echo`, `logout`, `pwd`, etc).
    ```bash
    $ help echo
    ```
    - This will give you a description and the options you can use when you want to run echo. For other executable programs, it’s convention to have an option called `--help` or something similar.
        ```bash
        $ echo --help
        ```

- Not all developers who ship out executables will conform to this standard, but it’s probably your best shot to find some help on a program.

#### man (manual)
- Gee I wish some of these programs had a manual so we can see some more information about them. Well luckily they do! Aptly named man pages, you can see the manuals for a command with the `man` command.
    ```bash
    man ls
    ```

- Man pages are manuals that are by default built into most Linux operating systems. They provide documentation about commands and other aspects of the system.

#### whatis
- Whew, we’ve learned quite a bit of commands so far, if you are ever feeling doubtful about what a command does, you can use the whatis command. The whatis command provides a brief description of command line programs.
    ```bash
    $ whatis cat
    ```
    - The description gets sourced from the manual page of each command. If you ran `whatis cat`, you’d see there is a small blurb with a short description.

#### alias
- Sometimes typing commands can get really repetitive, or if you need to type a long command many times, it’s best to have an alias you can use for that. To create an alias for a command you simply specify an alias name and set it to the command.
    ```bash
    $ alias foobar='ls -la'
    ```
    - Now instead of typing ls -la, you can type foobar and it will execute that command, pretty neat stuff. Keep in mind that this command won't save your alias after reboot, so you'll need to add a permanent alias in:
        ```bash
        ~/.bashrc
        ```
        or similar files if you want to have it persist after reboot.
    
- You can remove aliases with the `unalias` command:
    ```bash
    unalias foobar
    ```

#### exit: 
- To exit from the shell, you can use the `exit` command:
    ```shell
    $ exit
    ```
    Or the logout command:
    ```bash
    $ logout
    ```
    Or if you are working out of a terminal GUI, you can just close the terminal.

### Text Manipulation and Navigation

#### stdout (Standard Out)
- Let's run the following command and we'll discuss how this works.
    ```bash
    $ echo Hello World > peanuts.txt
    ```
    - What just happened? Well check the directory where you ran that command and lo and behold you should see a file called peanuts.txt, look inside that file and you should see the text Hello World. Lots of things just happened in one command so let's break it down.
        - First let's break down the first part:
            ```bash
            $ echo Hello World
            ```
            We know this prints out Hello World to the screen, but how? Processes use I/O streams to receive input and return output. By default the echo command takes the input (standard input or stdin) from the keyboard and returns the output (standard output or stdout) to the screen. So that's why when you type echo Hello World in your shell, you get Hello World on the screen. However, I/O redirection allows us to change this default behavior giving us greater file flexibility.
        - Let's proceed to the next part of the command:
            ```bash
            >
            ```
            - The `>` is a redirection operator that allows us the change where standard output goes. It allows us to send the output of echo Hello World to a file instead of the screen. If the file does not already exist it will create it for us. However, if it does exist it will overwrite it (you can add a shell flag to prevent this depending on what shell you are using).
        - And that's basically how stdout redirection works!
        - Well let's say I didn't want to overwrite my `peanuts.txt`, luckily there is a redirection operator for that as well, `>>`:
            ```bash
            $ echo Hello World >> peanuts.txt
            ```
            This will append Hello World to the end of the peanuts.txt file, if the file doesn't already exist it will create it for us like it did with the `>` redirector!

#### stdin (Standard In)
- In our previous lesson we learned that we have different stdout streams we can use, such as a file or the screen. Well there are also different standard input (stdin) streams we can use as well. We know that we have stdin from devices like the keyboard, but we can use files, output from other processes and the terminal as well, let's see an example.

- Let's use the peanuts.txt file in the previous lesson for this example, remember it had the text Hello World in it.
    ```bash
    $ cat < peanuts.txt > banana.txt 
    ```
    - Just like we had `>` for stdout redirection, we can use `<` for stdin redirection.
    - Normally in the cat command, you send a file to it and that file becomes the stdin, in this case, we redirected peanuts.txt to be our stdin. Then the output of cat peanuts.txt which would be `Hello World`, gets redirected to another file called banana.txt.

#### stderr (Standard Error)
- Let's try something a little different now, let's try to list the contents of a directory that doesn't exist on your system and redirect the output to the peanuts.txt file again.
    ```bash
    $ ls /fake/directory > peanuts.txt 
    ```
    - What you should see is:
        ```bash
        ls: cannot access /fake/directory: No such file or directory
        ```
        - Now you're probably thinking, shouldn't that message have been sent to the file? There is actually another I/O stream in play here called standard error (stderr). By default, stderr sends its output to the screen as well, it's a completely different stream than stdout. So you'll need to redirect its output a different way.
            
            Unfortunately the redirector is not as nice as using `<` or `>` but it's pretty close. We will have to use file descriptors. A file descriptor is a non-negative number that is used to access a file or stream. We will go in depth about this later, but for now know that the file descriptor for stdin, stdout and stderr is `0`, `1`, and `2` respectively.

            So now if we want to redirect our stderr to the file we can do this:

            ```bash
            $ ls /fake/directory 2> peanuts.txt
            ```

            You should see just the stderr messages in peanuts.txt.

- Now what if I wanted to see both stderr and stdout in the peanuts.txt file? It's possible to do this with file descriptors as well:
    ```bash
    $ ls /fake/directory > peanuts.txt 2>&1
    ```
    - This sends the results of `ls /fake/directory` to the peanuts.txt file and then it redirects stderr to the `stdout` via `2>&1`. The order of operations here matters, `2>&1` sends `stderr` to whatever `stdout` is pointing to. In this case `stdout` is pointing to a file, so `2>&1` also sends `stderr` to a file. So if you open up that `peanuts.txt` file you should see both `stderr` and `stdout`. In our case, the above command only outputs `stderr`.
    - Try `(ls && ls /fake/directory) > peanuts.txt 2>&1`. This should send an output to `stdout` and `stderr`, which will be written in `peanuts.txt`.

- There is a shorter way to redirect both `stdout` and `stderr` to a file using `&>`:
    ```bash
    $ ls /fake/directory &> peanuts.txt
    ```
    ```bash
    (ls && ls /fake/directory) &> peanuts.txt
    ```

- Now what if I don't want any of that cruft and want to get rid of stderr messages completely? Well you can also redirect output to a special file call /dev/null and it will discard any input.
    ```bash
    $ ls /fake/directory 2> /dev/null
    ```

#### pipe and tee
- Let's try a command:
    ```bash
    $ ls -la /etc
    ```
    - You should see a very long list of items, it's a little hard to read actually. Instead of redirecting this output to a file, wouldn't it be nice if we could just see the output in another command like `less`? Well we can!
        ```bash
        $ ls -la /etc | less 
        ```
        The pipe operator `|`, represented by a vertical bar, allows us to get the `stdout` of a command and make that the `stdin` to another process. In this case, we took the `stdout` of `ls -la /etc` and then piped it to the `less` command. The pipe command is extremely useful and we will continue to use it for all eternity.

- Well what if I wanted to write the output of my command to two different streams? That's possible with the tee command:
    ```bash
    $ ls | tee peanuts.txt
    ```
    - You should see the output of ls on your screen and if you open up the peanuts.txt file you should see the same information!
    - Note that you can list multiple files by using a space to separate them.

#### env (Environment)
- Run the following command:
    ```bash
    $ echo $HOME
    ```
    - You should see the path to your home directory which is usually in the format `/home/username`.

- What about this command?
    ```bash
    $ echo $USER 
    ```
    - You should see your username!

- Where is this information coming from? It's coming from your environment variables. You can view these by typing:
    ```bash
    $ env 
    ```
    - This outputs a whole lot of information about the environment variables you currently have set. These variables contain useful information that the shell and other processes can use. Here is a short example:
        ```bash
        PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/bin

        PWD=/home/user

        USER=pete
        ```
        - One particularly important variable is the `PATH` Variable. You can access these variables by sticking a $ infront of the variable name like so:
            ```bash
            $ echo $PATH
            ```
            Example Output:
            ```
            /usr/local/sbin:/usr/local/bin:/usr/sbin:/bin
            ```
            - This returns a list of paths separated by a colon that your system searches when it runs a command. Let's say you manually download and install a package from the internet and put it in to a non standard directory and want to run that command, you type `$ coolcommand` and the prompt says command not found. Well that's silly you are looking at the binary in a folder and know it exists. What is happening is that `$PATH` variable doesn't check that directory for this binary so it's throwing an error. Let's say you had tons of binaries you wanted to run out of that directory, you can just modify the PATH variable to include that directory in your PATH environment variable.

#### cut
- We're gonna learn a couple of useful commands that you can use to process text. Before we get started, let's create a file that we'll be working with. Copy and paste the following command, once you do that add a `TAB` in between lazy and dog (hold down `Ctrl-v` + `TAB`).
    ```bash
    $ echo 'The quick brown; fox jumps over the lazy  dog' > sample.txt
    ```

- First command we'll be learning about is the `cut` command. It extracts portions of text from a file.
    - To extract contents by a list of characters:
        ```bash
        $ cut -c 5 sample.txt
        ```
        - This outputs the 5th character in each line of the file. In this case it is "q", note that the space also counts as a character.
    - To extract the contents by a field, we'll need to do a little modification to the above command:
        ```bash
        $ cut -f 2 sample.txt
        ```
        - The `-f` or field flag cuts text based off of fields, by default it uses `TAB`s as delimiters, so everything separated by a `TAB` is considered a field. You should see `dog` as your output.
        - If `1` was used instead of `2`, `The quick brown; fox jumps over the lazy` would be outputted. Since we used `2`, it will return the next set of characters before the next tab (or whatever is left if there is no other tab).
    - You can combine the field flag with the delimiter flag to extract the contents by a custom delimiter:
        ```bash
        $ cut -f 1 -d ";" sample.txt
        ```
        - This will change the `TAB` delimiter to a `;` delimiter and since we are cutting the first field, the result should be `The quick brown`.
    - You can adjust the which characters you want:
        - `5-10` will grab charcters 5 through 10.
        - `-5` will grab the first 5 characters.
        - `5-` will grab the every character starting from the 5th one. 
    - Note that cut performs the operation on every line not just the first one.

#### paste 
- The `paste` command is similar to the `cat` command, it merges lines together in a file. Let's create a new file, `sample2.txt`, with the following contents:
    ```
    The

    quick

    brown

    fox
    ```
    - Let's combine all these lines into one line:
        ```bash
        $ paste -s sample2.txt
        ```
        Output:
        ```
        The             quick           brown           fox 
        ```
        - The `-s` flag makes everything go on one line.
        - The default delimiter for paste is `TAB`, so now there is one line with `TAB`s separating each word. Let's change this delimiter (`-d`) to something a little more readable:
            ```bash
            $ paste -d ' ' -s sample2.txt
            ```
            Output:
            ```
            ```
            - Now everything should be on one line delimited by spaces.
    - You can use `paste` on multiple files at once by seperating the file names with a space. The result will be the contents of both files being shown on the standard input after the operation is done.

#### head
- Let's say we have a very long file, in fact we have many to choose from, go ahead and `cat /var/log/syslog`. You should see pages upon pages of text. What if I just wanted to see the first couple of lines in this text file? Well we can do that with the `head` command, by default the `head` command will show you the first 10 lines in a file.
    ```bash
    $ head /var/log/syslog
    ```

- You can also modify the line count to whatever you choose, let's say I wanted to see the first 15 lines instead
    ```bash
    $ head -n 15 /var/log/syslog
    ```
    - The `-n` flag stands for number of lines.

- You can also modify the number of characters `head` shows using the `-c` flag.
    ```bash
    $ head -c 15 /var/log/syslog
    ```
    - This will display the first 15 (bytes) characters in `/var/log/syslog`.

#### tail
- Similar to the head command, the tail command lets you see the last 10 lines of a file by default.
    ```bash
    $ tail /var/log/syslog
    ```

- Along with head you can change the number of lines you want to see.
    ```bash
    $ tail -n 10 /var/log/syslog
    ```

- Another great option you can use is the `-f` (follow) flag, this will follow the file as it grows. Give it a try and see what happens.
    ```bash
    $ tail -f /var/log/syslog
    ```
    - Your syslog file will be continually changing while you interact with your system and using tail -f you can see everything that is getting added to that file.

#### expand and unexpand
- In our lesson on the cut command, we had our `sample.txt` file that contained a tab. Normally `TAB`s would usually show a noticeable difference but some text files don't show that well enough. Having `TAB`s in a text file may not be the desired spacing you want. To change your `TAB`s to spaces, use the `expand` command.
    ```bash
    $ expand sample.txt
    ```
    - The command above will print output with each TAB converted into a group of spaces. To save this output in a file, use output redirection like below.
        ```bash
        $ expand sample.txt > result.txt
        ```

- Opposite to expand, we can convert back each group of spaces to a TAB with the unexpand command:
    ```bash
    $ unexpand -a result.txt
    ```

- Both of these commands will read standard input if no file is given as an argument.

#### join and split
- The `join` command allows you to join multiple files together by a common field:

- Let's say I had two files that I wanted to join together:
    
    `file1.txt`
    ```
    1 John
    2 Jane
    3 Mary
    ```
    `file2.txt`
    ```
    1 Doe
    2 Doe
    3 Sue
    ```
    Bash shell:
    ```
    $ join file1.txt file2.txt
    ```
    Output:
    ```
    1 John Doe
    2 Jane Doe
    3 Mary Sue
    ```
    - See how it joined together my files? They are joined together by the first field by default and the fields have to be identical, if they are not you can sort them, so in this case the files are joined via 1, 2, 3. How would we join the following files?

    `file1.txt`
    ```
    John 1
    Jane 2
    Mary 3
    ```
    `file2.txt`
    ```
    1 Doe
    2 Doe
    3 Sue
    ```
    - To join these files you need to specify which fields you are joining, in this case we want field 2 on `file1.txt` and field 1 on `file2.txt`, so the command would look like this:
        ```bash
        $ join -1 2 -2 1 file1.txt file2.txt
        ```
        Output:
        ```
        1 John Doe
        2 Jane Doe
        3 Mary Sue
        ```
        - -1 refers to file1.txt and -2 refers to file2.txt.
    - If one file has more lines than the other, the extra lines are not outputted.
    - You can join more than 2 files at once.

- You can also split a file up into different files with the `split` command:
    ```bash
    $ split somefile
    ```
    - This will split it into different files, by default it will split them once they reach a 1000 line limit. The files are named x** by default. The original file will not be changed.

#### sort
- The `sort` command is useful for sorting lines.
    `file1.txt`
    ```
    dog
    cow
    cat
    elephant
    bird
    ```
    Bash shell:
    ```
    $ sort file1.txt
    ```
    Output:
    ```
    bird
    cat
    cow
    dog
    elephant
    ```

- You can also do a reverse `sort`:
    ```bash
    $ sort -r file1.txt
    ```
    Output:
    ```
    elephant
    dog
    cow
    cat
    bird
    ```

- You can also `sort` via string numerical value:
    ```
    bird
    cat
    cow
    elephant
    dog
    ```

#### tr (Translate)
- The `tr` (translate) command allows you to translate a set of characters into another set of characters. Let's try an example of translating all lower case characters to uppercase characters.
    ```bash
    $ tr a-z A-Z
    hello
    HELLO
    ```
    - As you can see we made the ranges of `a-z` into `A-Z` and all text we type that is lowercase gets uppercased.

- Another example use case:
    ```bash
    $ tr -d ello
    hello
    h
    ```
    - `ello` is deleted from `hello`.

#### uniq (Unique)
- The `uniq` (unique) command is another useful tool for parsing text.

- Let's say you had a file with lots of duplicates:
    `reading.txt`
    ```
    book
    book
    paper
    paper
    article
    article
    magazine
    ```
    - And you wanted to remove the duplicates, well you can use the `uniq` command:
        ```bash
        $ uniq reading.txt
        book
        paper
        article
        magazine
        ```
    - Let's get the count of how many occurrences of a line:
        ```bash
        $ uniq -c reading.txt
        2 book
        2 paper
        2 article
        1 magazine
        ```
    - Let's just get unique values (i.e. the value only appears once in the file):
        ```bash
        $ uniq -u reading.txt
        magazine
        ```
    - Let's just get duplicate values:
        ```bash
        $ uniq -d reading.txt
        book
        paper
        article
        ```

- Note : `uniq` does not detect duplicate lines unless they are adjacent. For example, let's say you had a file with duplicates which are not adjacent:
    `reading.txt`
    ```
    book
    paper
    book
    paper
    article
    magazine
    article
    ```
    Bash shell:
    ```bash
    $ uniq reading.txt
    reading.txt
    book
    paper
    book
    paper
    article
    magazine
    article
    ```
    - The result returned by `uniq` will contain all the entries unlike the very first example. To overcome this limitation of `uniq` we can use `sort` in combination with `uniq`:
        ```bash
        $ sort reading.txt | uniq
        article
        book
        magazine
        paper
        ```

#### wc and nl
- The `wc` (word count) command shows the total count of words in a file.
    Bash shell:
    ```bash
    $ wc /etc/passwd
    96     265    5925 /etc/passwd
    ```
    - It displays the number of lines, number of words and number of bytes, respectively.
    - To just see just the count of a certain field, use the -l, -w, or -c respectively.
        Bash Shell:
        ```bash
        $ wc -l /etc/passwd
        96
        ```

- Another command you can use to check the count of lines on a file is the `nl` (number lines) command.
    `file.txt`
    ```
    i
    like
    turtles
    ```
    Bash shell:
    ```bash
    $ nl file1.txt
    1. i
    2. like
    3. turtles
    ```

<details>
<summary><strong> Exercise </strong></summary>

- How would you get the total count of lines by using the nl file without searching through the entire output? Hint: Use some of the other commands you learned in this course.
    - Ans: `nl filename | tail -n 1`

</details>

#### grep
- The `grep` command is quite possibly the most common text processing command you will use. It allows you to search files for characters that match a certain pattern. What if you wanted to know if a file existed in a certain directory or if you wanted to see if a string was found in a file? You certainly wouldn't dig through every line of text, you would use `grep`!

- Let's use our sample.txt file as an example:
    ```bash
    $ grep fox sample.txt
    ```
    - You should see that `grep` found fox in the sample.txt file.

- You can also `grep` patterns that are case insensitive with the -i flag:
    ```bash
    $ grep -i somepattern somefile
    ```

- To get even more flexible with `grep` you can combine it with other commands with `|`.
    ```bash
    $ env | grep -i User
    ```

- `grep` is pretty versatile. You can even use regular expressions in your pattern:
    ```bash
    $ ls /somedir | grep '.txt$'
    ```
    - Should return all files ending with `.txt` in `somedir`.

- You may have heard of `egrep` or `fgrep`, these are deprecated `grep` calls and have since been replaced by `grep -E` and `grep -F`. Read the `grep` manpage to learn more.

#### regex (Regular Expressions)
- Regular expressions are a powerful tool to do pattern based selection. It uses special notations similar to those we've encountered already such as the `*` wildcard.

- We'll go through a couple of the most common regular expressions, these are almost universal with any programming language. We'll use this phrase as our test string:
    ```
    sally sells seashells 
    by the seashore
    ```

- Beginning of a line with `^`:
    ```
    ^by
    ```
    would match the line
    ```
    by the seashore
    ```

- End of a line with `$`
    ```
    seashore$
    ```
    would match the line
    ```
    by the seashore
    ```

- Matching any single character with `.`
    ```
    b.
    ```
    would match
    ```
    by
    ```

- Bracket notation with `[]`
    - This can be a little tricky, brackets allow us to specify characters found within the bracket.
        ```
        d[iou]g
        ```
        would match words like
        ```
        dig, dog, dug
        ```
    - The previous anchor tag `^` when used in a bracket means anything except the characters within the bracket.
        ```
        d[^i]g
        ```
        would match words like
        ```
        dog, dug
        ```
        but not
        ```
        dig
        ```
    - Brackets can also use ranges to increase the amount of characters you want to use.
        ```
        d[a-c]g
        ```
        will match patterns like
        ```
        dag, dbg, and dcg
        ```
    - Be careful though as brackets are case sensitive:
        ```
        d[A-C]g
        ```
        will match
        ```
        dAg, dBg and dCg
        ```
        but not 
        ```
        dag, dbg and dcg
        ```

#### Text Editors
- [Vim](http://www.vim.org/) and [emacs](https://www.gnu.org/software/emacs/) are popular text editors that are installed by default on most Linux distributions and they both have their pros and cons. If you want to get around your system like a ninja, you'll need to pick up one of these text editors to use. They are essentially coding, word document processing and basically all in one editors.

##### Vim (Vi Improved)
- Vim stands for vi (Improved) just like its name it stands for an improved version of the vi text editor command. It's super lightweight, opening and editing a file with vim is quick and easy. It's also almost always available, if you booted up a random Linux distribution, chances are vim is installed by default. To fire up vim just type:
    ```bash
    vim
    ```

###### Basic Vim Commands
- To open a file, do:
    ```
    vim filename
    ```

- To use a command while a file is opened, make sure you're not in insert mode by clicking `esc`.


###### Vim Search Patterns
- To search for an expression just type the `/` key and then your search result while you are in a vim session. Once you hit enter, you can press `n` to go forward or `N` to go backward in your search results.
    ```
    My pretty file is very pretty.

    /pretty

    will find the pretty words in the text file.
    ```

- The `?` search command will search the text file backwards, so in the previous example, the last pretty would come up first.
    ```
    My pretty file is very pretty.

    ?pretty

    will find the pretty words in the text file.
    ```

- To exit the search command, type `/` or `?` before pressing `enter`.

###### Vim Navigation
- Now you may notice, the mouse is nowhere is use here. To navigate a text document in vim, use the following keys:
    - `h` or the left arrow - will move you left one character
    - `k` or the up arrow - will move you up one line
    - `j` or the down arrow - will move you down one line
    - `l` or the right arrow - will move you right one character

###### Vim Appending Text
- Now you may have noticed if you tried to type something you wouldn't be able to. That's because you are in command mode. This can get pretty confusing especially if you just want to open a file and enter text. The command mode is used for when you enter commands like h,j,k.l etc. To insert text you'll need to enter insert mode first.
    - `i` - insert text before the cursor
    - `O` - insert text on the previous line
    - `o` - insert text on the next line
    - `a` - append text after the cursor
    - `A` - append text at the end of the line

###### Vim Editing
- Now that we have a couple of lines written, let's edit it a bit more and remove some cruft.
    - `x` - used to cut the selected text also used for deleting characters
    - `dd` - used to delete the current line
    - `y` - yank or copy whatever is selected
    - `yy` - yank or copy the current line
    - `p` - paste the copied text before the cursor

###### Vim Saving and Exiting
- Now that you've done your editing it's time to actually save and quit out of vim:
    - `:w` - writes or saves the file
    - `:q` - quit out of vim
    - `:wq` - write and then quit
    - `:q!` - quit out of vim without saving the file
    - `ZZ` - equivalent of :wq, but one character faster
    - `u` - undo your last action
    - `Ctrl`+`r` - redo your last action

- You may not think `ZZ` is necessary, but you'll eventually see that your fingers may tend to lean towards this rather than `:wq`.

##### Emacs
- Emacs is for users who want an extremely powerful text editor, which may be an understatement because you essentially live in emacs. You can do all your code editing, file manipulation, etc. all within emacs. It's a bit slower to load up and the learning curve is a bit steeper than vim, but if you want a powerful editor that is extremely extensible, this is the one for you. When I say extensible, I literally mean you can write up scripts for emacs that extend its functionality.

- To start emacs just use:
    ```
    emacs
    ```
    - You should be greeted with the default welcome buffer. Buffers in emacs is what your text resides in. So if you open up a file, a buffer is used to store that file's content. You can have multiple buffers open at the same time and you can easily switch between buffers.
    - If your system does not have emacs install, you can install it by running:
        ```
        sudo apt-get install emacs
        ```

###### Emacs Manipulate Files
- In a lot (if not all) of Emacs documentation, you will see the syntax C-[letter]. This just means hit the `Ctrl`-letter, but for shorthand purposes, we'll call `Ctrl` with `C`. If you see syntax such as `M`-[letter], that means use the `Meta` key, most commonly the `Alt` key.

- Saving files
    ```
    C-x C-s - Save a file
    C-x C-w - Save file as
    C-x s - Save all
    ```

- Opening a file
    ```
    C-x C-f
    ```
    - This will prompt you to type a filename to open. If you do not have a file that already exists, it will create a new file. You can load up a directory as well.

###### Emacs Buffer Navigation
- To move around buffers (or files you're visiting) use the following commands:
    - Switch buffers:
        ```
        C-x b - switch buffer
        C-x right arrow - right-cycle through buffer
        C-x left arrow - left-cycle through buffer
        ```
    - Close the buffer:
        ```
        C-x k
        ```
    - Split the current buffer:
        ```
        C-x 2
        ```
        - This allows you see multiple buffers on one screen. To move between these buffers use: `C-x o`.
    - Set a single buffer as the current screen:
        ```
        C-x 1
        ```

###### Emacs Editing
- Text navigation:
    ```
    C-up arrow : move up one paragraph
    C-down arrow: move down one paragraph
    C-left arrow: move one word left
    C-right arrow: move one word right
    M-> : move to the end of the buffer
    ```
    - With text navigation, your regular text buttons work as they should, home, end, page up, page down and the arrow keys, etc.

- Cutting and Pasting
    - To cut (kill) or paste (yank) in Emacs you'll need to be able to select text first. To select text, move your cursor to where you want to cut or paste and hit:
        ```
        C-space key
        ```
        then you can use the navigation keys to select the text you want. Now you can do the cut and paste like so:
        ```
        C-w : cut
        C-y : yank
        ```

###### Emacs Exiting and Help
- To close out of emacs:
    ```
    C-x C-c
    ```
    - If you have any open buffers, it will ask you to save it before closing out of emacs.

- If you're confused or need help:
    ```
    C-h C-h : help menu
    ```

- Undo:
    ```
    C-x u
    ```
    - As you can see Emacs has more moving parts, so the learning curve is a little steeper. In exchange though, you get a very powerful text editor.

### User Management

#### Users and Groups
- In any traditional operating system, there are users and groups. They exist solely for access and permissions. When running a process, it will run as the owner of that process whether that is Jane or Bob. File access and ownership is also permission dependent. You wouldn't want Jane to see Bob's documents and vice versa.

- Each user has their own home directory where their user specific files get stored, this is usually located in /home/username, but can vary in different distributions.

- The system uses user ids (UID) to manage users, usernames are the friendly way to associate users with identification, but the system identifies users by their UID. The system also uses groups to manage permissions, groups are just sets of users with permission set by that group, they are identified by the system with their group ID (GID).

- In Linux, you'll have users in addition to the normal humans that use the system. Sometimes these users are system daemons that continuously run processes to keep the system functioning. One of the most important users is root or superuser, root is the most powerful user on the system, root can access any file and start and terminate any process. For that reason, it can be dangerous to operate as root all the time, you could potentially remove system critical files. Luckily, if root access is needed and a user has root access, they can run a command as root instead with the `sudo` command. The `sudo` command (superuser do) is used to run a command with root access, we'll go more in depth on how a user receives root access in a later lesson.

- Go ahead and try to view a protected file like `/etc/shadow`:
    ```bash
    $ cat /etc/shadow
    ```
    Notice how you get a permission denied error, look at the permissions with:
    ```bash
    $ ls -la /etc/shadow
    ```
    Example output:
    ```bash
    -rw-r----- 1 root shadow 1134 Dec 1 11:45 /etc/shadow
    ```
    We haven't gone through permissions yet, but what's happening here is that root is the owner of the file and you'll need root access or be part of the shadow group to read the contents. Now run the command with `sudo`:
    ```bash
    $ sudo cat /etc/shadow
    ```
    Now you'll be able to see the contents of the file!

#### root
- We've looked at one way to get superuser access using the `sudo` command. You can also run commands as the superuser with the `su` command. This command will "substitute users" and open a root shell if no username is specified. You can use this command to substitute to any user as long as you know the password.
    ```bash
    su
    ```
    - There are some downsides to using this method: it's much easier to make a critical mistake running everything in root, you won't have records of the commands you use to change system configurations, etc. Basically, if you need to run commands as the superuser, just stick to `sudo`.
    - If it asks you for a password and you never set one, you can set a password by using this command: `sudo passwd root`.
    - To exit the root shell, use the `exit` command.

- Now that you know what commands to run as the superuser, the question is how do you know who has access to do that? The system doesn't let every single Joe Schmoe run commands as the superuser, so how does it know? There is a file called the `/etc/sudoers` file, this file lists users who can run sudo. You can edit this file with the `visudo` command.

#### /etc/passwd
- Remember that usernames aren't really identifications for users. The system uses a user ID (UID) to identify a user. To find out what users are mapped to what ID, look at the /etc/passwd file.
    ```bash
    $ cat /etc/passwd
    ```
    - This file shows you a list of users and detailed information about them. For example, the first line in this file most likely looks like this:
        ```bash
        root:x:0:0:root:/root:/bin/bash
        ```
    - Each line displays user information for one user, most commonly you'll see the root user as the first line. There are many fields separated by colons that tell you additional information about the user, let's look at them all:
        1. Username
        2. User's password - the password is not really stored in this file, it's usually stored in the `/etc/shadow` file. We'll discuss more in the next lesson about `/etc/shadow`, but for now, know that it contains encrypted user passwords. You can see many different symbols that are in this field, if you see an `x` that means the password is stored in the `/etc/shadow` file, a `*` means the user doesn't have login access and if there is a blank field that means the user doesn't have a password.
        3. The user ID - as you can see root has the UID of 0
        4. The group ID
        5. GECOS field - This is used to generally leave comments about the user or account such as their real name or phone number, it is comma delimited.
        6. User's home directory
        7. User's shell - you'll probably see a lot of user's defaulting to bash for their shell
    - Normally in a user's setting page, you would expect you see just human users. However, you'll notice `/etc/passwd` contains other users. Remember that users are really only on the system to run processes with different permissions. Sometimes we want to run processes with pre-determined permissions. For example, the daemon user is used for daemon processes.
    - Also should note that you can edit the `/etc/passwd` file by hand if you want to add users and modify information with the `vipw` tool, however things like these are best left to the tools we will discuss in a later lesson such as `useradd` and `userdel`.

#### /etc/shadow
- The `/etc/shadow` file is used to store information about user authentication. It requires superuser read permissions.
    ```bash
    $ sudo cat /etc/shadow
    ```
    Example output:
    ```bash
    root:MyEPTEa$6Nonsense:15000:0:99999:7:::
    ```
    - You'll notice that it looks very similar to the contents of /etc/passwd, however in the password field you'll see an encrypted password. The fields are separated by colons as followed:
        1. Username
        2. Encrypted password
        3. Date of last password changed - expressed as the number of days since Jan 1, 1970. If there is a 0 that means the user should change their password the next time they login
        4. Minimum password age - Days that a user will have to wait before being able to change their password again
        5. Maximum password age - Maximum number of days before a user has to change their password
        6. Password warning period - Number of days before a password is going to expire
        7. Password inactivity period - Number of days after a password has expired to allow login with their password
        8. Account expiration date - date that user will not be able to login
        9. Reserved field for future use
    - In most distributions today, user authentication doesn't rely on just the /etc/shadow file, there are other mechanisms in place such as PAM (Pluggable Authentication Modules) that replace authentication.

#### /etc/group
- Another file that is used in user management is the /etc/group file. This file allows for different groups with different permissions.
    ```bash
    $ cat /etc/group
    ```
    Example output:
    ```bash
    root:*:0:pete
    ```
    - Very similar to the `/etc/password` field, the `/etc/group` fields are as follows:
        1. Group name
        2. Group password - there isn't a need to set a group password, using an elevated privilege like sudo is standard. A `*` will be put in place as the default value.
        3. Group ID (GID)
        4. List of users - you can manually specify users you want in a specific group

- Run the command `groups`. What do you see?
    - It should display the group that the user (current user if no argument is passed) belongs to.

#### User Management Tools
- Most enterprise environments are using management systems to manage users, accounts and passwords. However, on a single machine computer there are useful commands to run to manage users.
    - Adding Users
        - You can use the `adduser` or the `useradd` command. The `adduser` command contains more helpful features such as making a home directory and more. There are configuration files for adding new users that can be customized depending on what you want to allocate to a default user.
            ```bash
            $ sudo useradd bob
            ```
            - You'll see that the above command creates an entry in `/etc/passwd` for `bob`, sets up default groups and adds an entry to the `/etc/shadow` file.
    - Removing users
        - To remove a user, you can use the `userdel` command.
            ```bash
            $ sudo userdel bob
            ```
            - This basically does its best to undo the file changes by useradd.
    - Changing passwords
        ```bash
        $ passwd bob
        ```
        - This will allow you to change the password of yourself or another user (if you are root).

### Permissions

#### File Permissions
- As we learned previously, files have different permissions or file modes. Let's look at an example:
    ```bash
    $ ls -l Desktop/
    ```
    Example output:
    ```bash
    drwxr-xr-x 2 pete penguins 4096 Dec 1 11:45 .
    ```
    - There are four parts to a file's permissions. The first part is the filetype, which is denoted by the first character in the permissions, in our case since we are looking at a directory it shows `d` for the filetype. Most commonly you will see `a` - for a regular file.
    - The next three parts of the file mode are the actual permissions. The permissions are grouped into 3 bits each. The first 3 bits are user permissions, then group permissions and then other permissions. Note here that "bits" refer to the permission bit not the actual character bit. I've added the pipe to make it easier to differentiate.
        ```
        d | rwx | r-x | r-x 
        ```
        - Each character represent a different permission:
            - r: readable
            - w: writable
            - x: executable (basically an executable program)
            - -: empty
        - So in the above example, we see that the user `pete` has read, write and execute permissions on the file. The group `penguins` has read and execute permissions. And finally, the other users (everyone else) has read and execute permissions.

#### Modifying Permissions
- Changing permissions can easily be done with the `chmod` command. First, pick which permission set you want to change, user, group or other. You can add or remove permissions with a `+` or `-`, let's look at some examples.
    - Adding permission bit on a file
        ```bash
        $ chmod u+x myfile:
        ```
        - The above command reads like this: change permission on `myfile` by adding executable permission bit on the user set. So now the user has executable permission on this file!
    - Removing permission bit on a file
        ```bash
        $ chmod u-x myfile:
        ```
    - Adding multiple permission bits on a file:
        ```bash
        $ chmod ug+w
        ```
    - There is another way to change permissions using numerical format. This method allows you to change permissions all at once. Instead of using `r`, `w`, or `x` to represent permissions, you'll use a numerical representation for a single permission set. So no need to specify the group with `g` or the user with `u`. The numerical representations are seen below:
        - 4: read permission
        - 2: write permission
        - 1: execute permission
        - Let's look at an example:
            ```bash
            $ chmod 755 myfile
            ```
            - Can you guess what permissions we are giving this file? Let's break this down, so now `755` covers the permissions for all sets. The first number `7` represents user permissions, the second number `5` represents group permissions and the last `5` represents other permissions. Wait a minute, `7` and `5` weren't listed above, where are we getting these numbers? Remember we are combining all the permissions into one number now, so you'll have to get some math involved.
                - `7 = 4 + 2 + 1`, so `7` is the user permissions and it has read, write and execute permissions
                - `5 = 4 + 1`, the group has read and execute permissions
                - `5 = 4 + 1`, and all other users have read and execute permissions

- One thing to note: it's not a great idea to be changing permissions nilly willy, you could potentially expose a sensitive file for everyone to modify, however many times you legitimately want to change permissions, just take precaution when using the chmod command.

#### Ownership Permissions
- In addition to modifying permissions on files, you can also modify the group and user ownership of the file as well.

- Modify user ownership:
    ```bash
    $ sudo chown patty myfile
    ```
    - This command will set the owner of `myfile` to `patty`.

- Modify group ownership:
    ```bash
    $ sudo chgrp whales myfile
    ```
    - This command will set the group of `myfile` to `whales`.

- Modify both user and group ownership at the same time:
    ```bash
    $ sudo chown patty:whales myfile
    ```
    - If you add a colon and groupname after the user you can set both the user and group at the same time.

#### Umask
- Every file that gets created comes with a default set of permissions. If you ever wanted to change that default set of permissions, you can do so with the `umask` command. This command takes the 3 bit permission set we see in numerical permissions. Instead of adding these permissions though, umask takes away these permissions.
    ```bash
    $ umask 021
    ```
    - In the above example, we are stating that we want the default permissions of new files to allow users access to everything, but for groups we want to take away their write permission and for others we want to take away their executable permission. The default umask on most distributions is 022, meaning all user access, but no write access for group and other users.
    - When you run the umask command it will give that default set of permissions on any new file you make. However, if you want it to persist you'll have to modify your startup file (`.profile`), but we'll discuss that in a later lesson.

#### Setuid
- There are many cases in which normal users need elevated access to do stuff. The system administrator can't always be there to enter in a root password every time a user needed access to a protected file, so there are special file permission bits to allow this behavior. The Set User ID (`SUID`) allows a user to run a program as the owner of the program file rather than as themselves. Let's look at an example:
    - Let's say I want to change my password, simple right? I just use the passwd command:
        ```bash
        $ passwd
        ```

        What is the password command doing? It's modifying a couple of files, but most importantly it's modifying the /etc/shadow file. Let's look at that file for a second:

        ```bash
        $ ls -l /etc/shadow
        ```
        Example output:
        ```bash
        -rw-r----- 1 root shadow 1134 Dec 1 11:45 /etc/shadow
        ```

        Oh wait a minute here, this file is owned by root? How is it possible that we are able to modify a file owned by root? Let's look at another permission set, this time of the command we ran:

        ```bash
        $ ls -l /usr/bin/passwd
        ```

        Example output:

        ```bash
        -rwsr-xr-x 1 root root 47032 Dec 1 11:45 /usr/bin/passwd
        ```
        
        You'll notice a new permission bit here s. This permission bit is the `SUID`, when a file has this permission set, it allows the users who launched the program to get the file owner's permission as well as execution permission, in this case root. So essentially while a user is running the password command, they are running as root. That's why we are able to access a protected file like `/etc/shadow` when we run the passwd command. Now if you removed that bit, you would see that you will not be able to modify `/etc/shadow` and therefore change your password.

- Modifying `SUID`
    - Just like regular permissions there are two ways to modify `SUID` permissions.
        - Symbolic way:
            ```bash
            $ sudo chmod u+s myfile
            ```
        - Numerical way:
            ```bash
            $ sudo chmod 4755 myfile
            ```
        - As you can see the SUID is denoted by a 4 and pre-pended to the permission set. You may see the SUID denoted as a capital `S` this means that it still does the same thing, but it does not have execute permissions.

#### Setgid
- Similar to the set user ID permission bit, there is a set group ID (`SGID`) permission bit. This bit allows a program to run as if it was a member of that group. Let's look at one example:
    ```bash
    $ ls -l /usr/bin/wall
    ```
    Example output:
    ```bash
    -rwxr-sr-x 1 root tty 19024 Dec 14 11:45 /usr/bin/wall
    ```
    - We can see now that the permission bit is in the group permission set.

- Modifying `SGID`
    - Symbolic way:
        ```bash
        $ sudo chmod g+s myfile
        ```
    - Numerical way:
        ```bash
        $ sudo chmod 2555 myfile
        ```
        - The numerical representation for `SGID` is `2`.

#### Process Permissions
- Let's segue into process permissions for a bit, remember how I told you that when you run the `passwd` command with the `SUID` permission bit enabled you will run the program as root? That is true, however does that mean since you are temporarily root you can modify other user's passwords? Nope fortunately not! This is because of the many `UID`s that Linux implements. There are three `UID`s associated with every process:
    - When you launch a process, it runs with the same permissions as the user or group that ran it, this is known as an **effective user ID**. This UID is used to grant access rights to a process. So naturally if Bob ran the `touch` command, the process would run as him and any files he created would be under his ownership. 
    - There is another `UID`, called the **real user ID** this is the ID of the user that launched the process. These are used to track down who the user who launched the process is.
    - One last `UID` is the **saved user ID**, this allows a process to switch between the effective UID and real UID, vice versa. This is useful because we don't want our process to run with elevated privileges all the time, it's just good practice to use special privileges at specific times.

    Now let's piece these all together by looking at the passwd command once more: 
    - When running the passwd command, your effective `UID` is your user ID, let's say its `500` for now. Oh but wait, remember the passwd command has the `SUID` permission enabled. So when you run it, your effective `UID` is now `0` (`0` is the `UID` of `root`). Now this program can access files as `root`.
    - Let's say you get a little taste of power and you want to modify Sally's password, Sally has a `UID` of `600`. Well you'll be out of luck, fortunately the process also has your real `UID` in this case `500`. It knows that your `UID` is `500` and therefore you can't modify the password of `UID` of `600`. (This of course is always bypassed if you are a superuser on a machine and can control and change everything).
    - Since you ran `passwd`, it will start the process off using your real `UID`, and it will save the `UID` of the owner of the file (effective `UID`), so you can switch between the two. No need to modify all files with root access if it's not required.

- Most of the time the real `UID` and the effective `UID` are the same, but in such cases as the `passwd` command they will change.

- We haven't discussed processes yet, we can still take a look at this change happening in real time:
    1. Open one terminal window, and run the command: `watch -n 1 "ps aux | grep passwd"`. This will watch for the passwd process.
    2. Open a second terminal window and run: `passwd`
    3. Look at the first terminal window, you'll see a process come up for passwd. The first column in the process table is the effective user ID, lo and behold it's the root user!

#### The Sticky Bit
- The sticky permission bit "sticks a file/directory". This means that only the owner or the root user can delete or modify the file. This is very useful for shared directories. Take a look at the example below:
    ```bash
    $ ls -ld /tmp
    ```
    Example output:
    ```bash
    drwxrwxrwxt 6 root root 4096 Dec 15 11:45 /tmp
    ```
    - You'll see a special permission bit at the end here `t`, this means everyone can add files, write files, modify files in the `/tmp` directory, but only `root` can delete the `/tmp` directory.

- Modify sticky bit
    - Symbolic way:
        ```bash
        $ sudo chmod g+s myfile
        ```
    - Numerical way:
        ```bash
        $ sudo chmod 1755 mydir
        ```
        - The numerical representation for the sticky bit is `1`.

### Processes

#### ps (Processes)
- Processes are the programs that are running on your machine. They are managed by the kernel and each process has an ID associated with it called the process ID (`PID`). This `PID` is assigned in the order that processes are created.

- Go ahead and run the `ps` command to see a list of running processes:
    ```bash
    $ ps
    ```
    Example Output:
    ```bash
    PID        TTY     STAT   TIME          CMD
    41230    pts/4    Ss        00:00:00     bash
    51224    pts/4    R+        00:00:00     ps
    ```
    - This shows you a quick snapshot of the current processes:
        - `PID`: Process ID
        - `TTY`: Controlling terminal associated with the process (we'll go in detail about this later)
        - `STAT`: Process status code
        - `TIME`: Total CPU usage time
        - `CMD`: Name of executable/command
    - If you look at the man page for `ps` you'll see that there are lots of command options you can pass, they will vary depending on what options you want to use - `BSD`, `GNU` or `Unix`. In my opinion the `BSD` style is more popular to use, so we're gonna go with that. If you are curious the difference between the styles is the amount of dashes you use and the flags.
        ```bash
        $ ps aux
        ```
        - The `a` displays all processes running, including the ones being ran by other users. The `u` shows more details about the processes. And finally the `x` lists all processes that don't have a TTY associated with it, these programs will show a `?` in the TTY field, they are most common in daemon processes that launch as part of the system startup.
        - You'll notice you're seeing a lot more fields now, no need to memorize them all, in a later course on advanced processes, we'll go over some of these again:
            - `USER`: The effective user (the one whose access we are using)
            - `PID`: Process ID
            - `%CPU`: CPU time used divided by the time the process has been running
            - `%MEM`: Ratio of the process's resident set size to the physical memory on the machine
            - `VSZ`: Virtual memory usage of the entire process
            - `RSS`: Resident set size, the non-swapped physical memory that a task has used
            - `TTY`: Controlling terminal associated with the process
            - `STAT`: Process status code
            - `START`: Start time of the process
            - `TIME`: Total CPU usage time
            - `COMMAND`: Name of executable/command
        - The ps command can get a little messy to look at, for now the fields we will look at the most are `PID`, `STAT` and `COMMAND`.

- Another very useful command is the `top` command, top gives you real time information about the processes running on your system instead of a snapshot. By default you'll get a refresh every 10 seconds. `top` is an extremely useful tool to see what processes are taking up a lot of your resources.
    ```bash
    $ top
    ```

#### Controlling Terminal
- We discussed how there is a `TTY` field in the `ps` output. The `TTY` is the terminal that executed the command.

- There are two types of terminals, regular **terminal devices** and **pseudoterminal devices**. A regular terminal device is a native terminal device that you can type into and send output to your system, this sounds like the terminal application you've been launching to get to your shell, but it's not.
    - We're gonna segue so you can see this action, go ahead and type `Ctrl`+`Alt`+`F1` to get into `TTY1` (the first virtual console), you'll notice how you don't have anything except the terminal, no graphics, etc. This is considered a regular terminal device, you can exit this with `Ctrl`+`Alt`+`F7`.
    - A pseudoterminal is what you've been used to working in, they emulate terminals with the shell terminal window and are denoted by `PTS` . If you look at `ps` again, you'll see your shell process under `pts/*`.

- Circling back to the controlling terminal, processes are usually bound to a controlling terminal. For example, if you were running a program on your shell window such as `find` and you closed the window, your process would also go with it.

- There are processes such as `daemon` processes, which are special processes that are essentially keeping the system running. They often start at system boot and usually get terminated when the system is shutdown. They run in the background and since we don't want these special processes to get terminated they are not bound to a controlling terminal. In the `ps` output, the `TTY` is listed as a `?` meaning it does not have a controlling terminal.

#### Process Details
- A process like we said before is a running program on the system, more precisely it's the system allocating memory, CPU, I/O to make the program run. A process is an instance of a running program, go ahead and open 3 terminal windows, in two windows, run the `cat` command without passing any options (the `cat` process will stay open as a process because it expects stdin). Now in the third window run: `ps aux | grep cat`. You'll see that there are two processes for `cat`, even though they are calling the same program.

- The kernel is in charge of processes, when we run a program the kernel loads up the code of the program in memory, determines and allocates resources and then keeps tabs on each process, it knows:
    - The status of the process
    - The resources the process is using and receives
    - The process owner
    - Signal handling (more on that later)
    - And basically everything else

- All processes are trying to get a taste of that sweet resource pie, it's the kernel's job to make sure that processes get the right amount of resources depending on process demands. When a process ends, the resources it used are now freed up for other processes.

#### Process Creation
- When a new process is created, an existing process basically clones itself using something called the `fork` system call (system calls will be discussed very far into the future). The `fork` system call creates a mostly identical child process, this child process takes on a new process ID (`PID`) and the original process becomes its parent process and has something called a parent process ID `PPID`. Afterwards, the child process can either continue to use the same program its parent was using before or more often use the `execve` system call to launch up a new program. This system call destroys the memory management that the kernel put into place for that process and sets up new ones for the new program. We can see this in action:
    ```bash
    $ ps l
    ```
    - The l option gives us a "long format" or even more detailed view of our running processes. You'll see a column labelled `PPID`, this is the parent ID. Now look at your terminal, you'll see a process running that is your shell, so on my system I have a process running `bash`. Now remember when you ran the `ps l` command, you were running it from the process that was running `bash`. Now you'll see that the `PID` of the `bash` shell is the `PPID` of the `ps l` command.

- So if every process has to have a parent and they are just forks of each other, there must be a mother of all processes right? You are correct, when the system boots up, the kernels creates a process called `init`, it has a `PID` of `1`. The `init` process can't be terminated unless the system shuts down. It runs with `root` privileges and runs many processes that keep the system running. We will take a closer look at `init` in the system bootup course, for now just know it is the process that spawns all other processes.

#### Process Termination
- Now that we know what goes on when a process gets created, what is happening when we don't need it anymore?

- A process can exit using the `_exit` system call, this will free up the resources that process was using for reallocation. So when a process is ready to terminate, it lets the kernel know why it's terminating with something called a `termination status`. Most commonly a status of `0` means that the process succeeded. However, that's not enough to completely terminate a process. The parent process has to acknowledge the termination of the child process by using the wait system call and what this does is it checks the termination status of the child process
    - There is another way to terminate a process and that involves using signals, which we will discuss soon.

- Orphan Processes
    - When a parent process dies before a child process, the kernel knows that it's not going to get a `wait` call, so instead it makes these processes "orphans" and puts them under the care of `init` (remember mother of all processes). `init` will eventually perform the wait system call for these orphans so they can die.

- Zombie Processes
    - What happens when a child terminates and the parent process hasn't called `wait` yet? We still want to be able to see how a child process terminated, so even though the child process finished, the kernel turns the child process into a zombie process. The resources the child process used are still freed up for other processes, however there is still an entry in the process table for this zombie. Zombie processes also cannot be killed, since they are technically "dead", so you can't use signals to kill them. Eventually if the parent process calls the `wait` system call, the zombie will disappear, this is known as `reaping`. If the parent doesn't perform a `wait` call, `init` will adopt the zombie and automatically perform `wait` and remove the zombie. It can be a bad thing to have too many zombie processes, since they take up space on the process table, if it fills up it will prevent other processes from running.

#### Signals
- A signal is a notification to a process that something has happened.

- Why we have signals
    - They are software interrupts and they have lots of uses:
        - A user can type one of the special terminal characters (`Ctrl`+`C`) or (`Ctrl`+`Z`) to kill, interrupt or suspend processes
        - Hardware issues can occur and the kernel wants to notify the process
        - Software issues can occur and the kernel wants to notify the process
        - They are basically ways processes can communicate

- Signal process
    - When a signal is generated by some event, it's then delivered to a process, it's considered in a pending state until it's delivered. When the process is ran, the signal will be delivered. However, processes have signal masks and they can set signal delivery to be blocked if specified. When a signal is delivered, a process can do a multitude of things:
        - Ignore the signal
        - "Catch" the signal and perform a specific handler routine
        - Process can be terminated, as opposed to the normal exit system call
        - Block the signal, depending on the signal mask

- Common signals
    - Each signal is defined by integers with symbolic names that are in the form of `SIGxxx`. Some of the most common signals are:
        - `SIGHUP` or `HUP` or `1`: Hangup
        - `SIGINT` or `INT` or `2`: Interrupt
        - `SIGKILL` or `KILL` or `9`: Kill
        - `SIGSEGV` or `SEGV` or `11`: Segmentation fault
        - `SIGTERM` or `TERM` or `15`: Software termination
        - `SIGSTOP` or `STOP`: `Stop`
    - Numbers can vary with signals so they are usually referred by their names.
    - Some signals are unblockable, one example is the SIGKILL signal. The KILL signal destroys the process.

#### kill (Terminate)
- You can send signals that terminate processes, such a command is aptly named the `kill` command. For example:
    ```bash
    $ kill 12445
    ```
    - The `12445` is the `PID` of the process you want to `kill`. By default it sends a `TERM` signal. The `SIGTERM` signal is sent to a process to request its termination by allowing it to cleanly release its resources and saving its state.
    - You can also specify a signal with the kill command:
        ```bash
        $ kill -9 12445
        ```
        - This will run the `SIGKILL` signal and kill the process.
    
- Differences between `SIGHUP`, `SIGINT`, `SIGTERM`, `SIGKILL`, `SIGSTOP`?
    - These signals all sound reasonably similar, but they do have their differences.
        - `SIGHUP` - Hangup, sent to a process when the controlling terminal is closed. For example, if you closed a terminal window that had a process running in it, you would get a `SIGHUP` signal. So basically you've been hung up on
        - `SIGINT` - Is an interrupt signal, so you can use `Ctrl`+`C` and the system will try to gracefully kill the process
        - `SIGTERM` - Kill the process, but allow it to do some cleanup first
        - `SIGKILL` - Kill the process, kill it with fire, doesn't do any cleanup
        - `SIGSTOP` - Stop/suspend a process

#### niceness
- When you run multiple things on your computer, like perhaps Chrome, Microsoft Word or Photoshop at the same time, it may seem like these processes are running at the same time, but that isn't quite true. Processes use the CPU for a small amount of time called a **time slice**. Then they pause for milliseconds and another process gets a little time slice. By default, process scheduling happens in this **round-robin** fashion. Every process gets enough time slices until it's finished processing. The kernel handles all of these switching of processes and it does a pretty good job at it most of the time.

- Processes aren't able to decide when and how long they get CPU time, if all processes behaved normally they would each (roughly) get an equal amount of CPU time. However, there is a way to influence the kernel's process scheduling algorithm with a nice value. Niceness is a pretty weird name, but what it means is that processes have a number to determine their priority for the CPU. A high number means the process is nice and has a lower priority for the CPU and a low or negative number means the process is not very nice and it wants to get as much of the CPU as possible.
    ```bash
    $ top
    ```
    - You can see a column for `NI` right now, that is the niceness level of a process.
    - To change the niceness level you can use the `nice` and `renice` commands. The `nice` command is used to set priority for a new process. The `renice` command is used to set priority on an existing process.
        ```bash
        $ nice -n 5 apt upgrade
        ```
        - Sets niceness level for the process about to be launched.
        ```bash
        $ renice 10 -p 3245
        ```

#### Process States
- Let's take a look at the ps aux command again:
    ```bash
    $ ps aux
    ```
    - In the STAT column, you'll see lots of values. A linux process can be in a number of different states. The most common state codes you'll see are described below:
        - `R`: running or runnable, it is just waiting for the CPU to process it
        - `S`: Interruptible sleep, waiting for an event to complete, such as input from the terminal
        - `D`: Uninterruptible sleep, processes that cannot be killed or interrupted with a signal, usually to make them go away you have to reboot or fix the issue
        - `Z`: Zombie, we discussed in a previous lesson that zombies are terminated processes that are waiting to have their statuses collected
        - `T`: Stopped, a process that has been suspended/stopped

#### `/proc` filesystem
- Remember everything in Linux is a file, even processes. Process information is stored in a special filesystem known as the `/proc` filesystem.
    ```bash
    $ ls /proc
    ```
    - You should see multiple values in here, there are sub-directories for every `PID`. If you looked at a `PID` in the `ps` output, you would be able to find it in the `/proc` directory.
    - Go ahead and enter one of the processes and look at that file. For example, you may do something like this:
        ```bash
        $ cat /proc/12345/status
        ```
        - You should see process state information and well as more detailed information. The `/proc` directory is how the kernel is views the system, so there is a lot more information here than what you would see in `ps`.

#### Job Control
- Let's say you're working on a single terminal window and you're running a command that is taking forever. You can't interact with the shell until it is complete, however we want to keep working on our machines, so we need that shell open. Fortunately we can control how our processes run with jobs:
    - Sending a job to the background
        - Appending an ampersand (&) to the command will run it in the background so you can still use your shell. Let's see an example:
            ```bash
            $ sleep 1000 &
            $ sleep 1001 &
            $ sleep 1002 &
            ```
    - View all background jobs
        - Now you can view the jobs you just sent to the background.
            ```bash
            $ jobs
            ```
            Example output:
            ```bash
            [1]    Running     sleep 1000 &
            [2]-   Running     sleep 1001 &
            [3]+   Running     sleep 1002 &
            ```
            - This will show you the job id in the first column, then the status and the command that was run. The `+` next to the job ID means that it is the most recent background job that started. The job with the `-` is the second most recent command.
    - Sending a job to the background on existing job
        - If you already ran a job and want to send it to the background, you don't have to terminate it and start over again. First suspend the job with `Ctrl`+`Z`, then run the `bg` command to send it to the background.
            ```bash
            pete@icebox ~ $ sleep 1003
            ^Z
            [4]+    Stopped     sleep 1003
            pete@icebox ~ $ bg
            [4]+    sleep 1003 &
            pete@icebox ~ $ jobs
            [1]    Running     sleep 1000 &
            [2]    Running     sleep 1001 &
            [3]-   Running     sleep 1002 &
            [4]+   Running     sleep 1003 &
            ```
    - Moving a job from the background to the foreground
        - To move a job out of the background just specify the job ID you want. If you run `fg` without any options, it will bring back the most recent background job (the job with the `+` sign next to it)
            ```bash
            $ fg %1
            ```
    - Kill background jobs
        - Similar to moving jobs out of the background, you can use the same form to kill the processes by using their Job ID.
            ```bash
            kill %1
            ```

### Packages

#### Software Distribution
- Your system is comprised of many packages such as internet browsers, text editors, media players, etc. These packages are managed via package managers, which install and maintain the software on your system. Not all packages are installed through package managers though, you can commonly install packages directly from their source code (we'll get to that soon). However the majority of the time you will use a package manager to install software, the most common variety of packages are Debian (`.deb`) and Red Hat (`.rpm`). Debian style packages are used in distributions such as Debian, Ubuntu, LinuxMint, etc. Red Hat style packages are seen in Red Hat Enterprise Linux, Fedora, CentOS, etc.

- What are packages? You may know them as Chrome, Photoshop, etc and they are, but what they really are just lots and lots of files that have been compiled into one. The people (or sometimes a single person) that write this software are known as `upstream providers`, they compile their code and write up how to get it installed. These upstream providers work on getting out new software and update existing software. When they are ready to release it to the world, they send their package to `package maintainers`, who handle getting this piece of software in the hands of the users. These package maintainers review, manage and distribute this software in the form of packages.

#### Package Repositories 
- How do packages that get uploaded to the internet somehow end up on our computers? Do you go to the download page of each package you want and click download and install? Well, actually you can do that, but there is something better called package repositories. Repositories are just a central storage location for packages. There are tons of repositories that hold lots of packages and best of all they are all found on the internet, no silly installation disks. Your machine doesn't know where to look for these repositories unless you explicitly tell it where to look.

- For example, let's say I want WackyWidgets Software on my machine. Well WackyWidgets manages their own repositories for their widget packages, inside this repository are 10 packages, the CoolWidget package, the SuperWidget package, etc. WackyWidgets hosts this repository at a source link called: http://download.widgets/linux/deb/. Now instead of going to their website to download the package directly, you can tell your machine to find WackyWidgets software from the source link.
    - Now instead of going to their website to download the package directly, you can tell your machine to find WackyWidgets software from the source link. Your distribution already comes with pre-approved sources to get packages from and this is how it installs all the base packages you see on your system. On a Debian system, this sources file is the `/etc/apt/sources`.list file. Your machine will know to look there and check for any source repositories you added.

#### tar and gzip
- Before we get into package installation and the different managers, we need to discuss archiving and compressing files, because you will most likely encounter these when you hunt for software on the internet. You probably already know what a file archive is, you've most likely encountered file types such as .rar and .zip. These are an archive of files, they contain many files inside of them, but they come in this very neat single file known as an archive.

- Compressing files with `gzip`
    - `gzip` is program used to compress files in Linux, they end in a `.gz` extension.
    - To compress a file down:
        ```bash
        $ gzip filename
        ```
    - To decompress the file:
        ```bash
        $ gunzip filename.gz
        ```

- `tar`
    - Creating archives with `tar`
        - Unfortunately, `gzip` can't add multiple files into one archive for us. Luckily we have the `tar` program which does. When you create an archive using `tar`, it will have a `.tar` extension.
            ```bash
            $ tar cvf filename.tar filename1 filename2
            ```
            - c - create
            - v - tell the program to be verbose and let us see what it's doing
            - f - the filename of the tar file has to come after this option, if you are creating a tar file you'll have to come up with a name

    - Unpacking archives with tar
        - To extract the contents of a tar file, use:
            ```bash
            $ tar xvf mytarfile.tar
            ```
            - x - extract
            - v - tell the program to be verbose and let us see what it's doing
            - f - the file you want to extract

- Compressing/uncompressing archives with `tar` and `gzip`
    - Many times you'll see a `tar` file that has been compressed such as: `mycompressedarchive.tar.gz`, all you need to do is work outside in, so first remove the compression with `gunzip` and then you can unpack the `tar` file. Or you can alternatively use the `z` option with `tar`, which just tells it to use the `gzip` or `gunzip` utility.
        - Create a compressed tar file:
            ```bash
            $ tar czf myfile.tar.gz
            ```
        - Uncompress and unpack:
            ```bash
            $ tar xzf file.tar
            ```
        - If you need help remember this: e**X**tract all **Z**ee **F**iles!
        - tar is one of those commands that is so important and yet you never really remember it

- Other utilities
    - Throughout your journey of Linux, you'll encounter other archive and compression types such as: `bzip2`, `compress`, `zip`, `unzip`, etc. They are a little less common, but just keep in mind that different utilities will call for different commands.

#### Package Dependencies
- Packages very rarely work by themselves, they are most often accompanied by dependencies to help them run. For example, let's say we have a group of restaurants, these restaurants all make different cuisine, however they all get their ingredients from the same farm. Their food is dependent on the farm's supplies, if the farm were to suddenly stop supplying food, well then the restaurants would be in a pretty bad state.

- In Linux, these dependencies are often other packages or shared libraries. Shared libraries are libraries of code that other programs want to use and don't want to have to rewrite for themselves. Think of the restaurant again, how much work would it be if every restaurant also farmed their own food? Too much.

- We will dig more into shared libraries in the filesystem course, so for now just remember that packages have dependencies to help them run, whether those dependencies are other packages or libraries, if the dependencies aren't there the package will end up in a broken state and most of the time not even install.

#### rpm and dpkg
- Although most of this course is about package management systems (the Batmans of package management), we mustn't forget about the Robins. Although very useful and reliable, they don't come with that sweet batmobile and utility belt.

- Just like .exe is a single executable file, so is .deb and .rpm. You normally wouldn't see these if you use package repositories, but if you directly download packages, you will most likely get them in these popular format. Obviously, they are exclusive to their distributions, .deb for Debian based and .rpm for Red Hat based.

- To install these direct packages, you can use the package management commands: rpm and dpkg. These tools are used to install package files, however they will not install the package dependencies, so if your package had 10 dependencies, you would have to install those packages separately and then their dependencies and so on and so forth. As you can see, that was one of the reasons that brought forth the full blown management systems that we will discuss this later.

- Keep in mind that there will be countless times when you need to install, query or verify a package with one of these tools, so remember these commands.
    - Install a package:
        ```bash
        Debian: $ dpkg -i some_deb_package.deb
        RPM: $ rpm -i some_rpm_package.rpm
        ```
        - The `i` stands for install. You can also use the longer format of `--install`.
    - Remove a package:
        ```bash
        Debian: $ dpkg -r some_deb_package.deb
        RPM: $ rpm -e some_rpm_package.rpm
        ```
        - Debian: `r` for remove
        - RPM: `e` for erase
    - List installed packages:
        ```bash
        Debian: $ dpkg -l
        RPM: $ rpm -qa
        ```
        - Debian: l for list
        - RPM: `q` for query and `a` for all

#### yum and apt
- Ah, the Batmans of package management, these systems come with all the fixins to make package installation, removal and changes easier, including installing package dependencies. Two of the most popular management systems is `yum` and `apt`. Yum is exclusive to the Red Hat family and apt is exclusively to the Debian family.

- Install a package from a repository:
    ```bash
    Debian: $ apt install package_name
    RPM: $ yum install package_name
    ```

- Remove a package:
    ```bash
    Debian: $ apt remove package_name
    RPM: $ yum erase package_name
    ```

- Updating packages for a repository:
    - It's always best practice to update your package repositories so they are up to date before you install and update a package.
    ```bash
    Debian: apt update; apt upgrade
    RPM: yum update
    ```

- Get information about an installed package:
    ```bash
    Debian: apt show package_name
    RPM: yum info package_name
    ```

#### Compile Source Code
- Often times you will encounter an obscure package that only comes in the form of pure source code. You'll need to use a few commands to get that source code package compiled and installed on your system.
    - First thing is first, you'll need to have software to install the tools that will allow you to compile source code.
        ```bash
        $ sudo apt install build-essential
        ```
    - Once you do that, extract the contents of the package file, most likely a .tar.gz file.
        ```bash
        $ tar -xzvf package.tar.gz
        ```
    - Before you do anything, take a look at the README or INSTALL file inside the package. Sometimes there will be specific installation instructions. Depending on what compile method that the developer used, you'll have to use different commands, such as `cmake` or something else. However, most commonly you'll see basic make compilation, so we'll discuss that:
        - Inside the package contents will be a configure script, this script checks for dependencies on your system and if you are missing anything, you'll see an error and you'll need to fix those dependencies.
            ```bash
            $ ./configure
            ```
            - The `./` allows you to execute a script in the current directory.
        - Inside of the package contents, there is a file called `Makefile` that contains rules to building the software. When you run the `make` command, it looks at this file to build the software:
            ```bash
            $ make
            ```
        - This command actually installs the package, it will copy the correct files to the correct locations on your computer:
            ```bash
            $ sudo make install
            ```
        - If you want to uninstall the package, use:
            ```bash
            $ sudo make uninstall
            ```
        - Be wary when using make install, you may not realize how much is actually going on in the background. If you decide to remove this package, you may not actually remove everything because you didn't realize what was added to your system. Instead forget everything about make install that I just explained to you and use the `checkinstall` command. This command will make a .deb file for you that you can easily install and uninstall.
            ```bash
            $ sudo checkinstall
            ```
            - This command will essentially "make install" and build a .deb package and install it. This makes it easier to remove the package later on.

### Devices

#### /dev directory
- When you connect a device to your machine, it generally needs a device driver to function properly. You can interact with device drivers through device files or device nodes, these are special files that look like regular files. Since these device files are just like regular files, you can use programs such as `ls`, `cat`, `etc` to interact with them. These device files are generally stored in the `/dev` directory. Go ahead and `ls` the `/dev` directory on your system, you'll see a large amount of devices files that are on your system.
    ```bash
    $ ls /dev 
    ```
    - Some of these devices you've already used and interacted with such as `/dev/null`. Remember when we send output to `/dev/null`, the kernel knows that this device takes all of our input and just discards it, so nothing gets returned.

- In the old days, if you wanted to add a device to your system, you'd add the device file in `/dev` and then probably forget about it. Well repeat that a couple of times and you can see where there was a problem. The `/dev` directory would get cluttered with static device files of devices that you've long since upgraded, stopped using, etc. Devices are also assigned device files in the order that the kernel finds them. So if everytime you rebooted your system, the devices could have different device files depending on when they were discovered.

- Thankfully we no longer use that method, now we have something that we use to dynamically add and remove devices that are currently being used on the system and we'll be discussing this in the coming lessons.

#### device types
- Before we chat about how devices are managed, let's actually take a look at some devices.
    ```bash
    $ ls -l /dev
    ```
    Example output:
    ```
    brw-rw----   1 root disk      8,   0 Dec 20 20:13 sda
    crw-rw-rw-   1 root root      1,   3 Dec 20 20:13 null
    srw-rw-rw-   1 root root           0 Dec 20 20:13 log
    prw-r--r--   1 root root           0 Dec 20 20:13 fdata
    ```
    - The columns are as follows from left to right:
        - Permissions
        - Owner
        - Group
        - Major Device Number
        - Minor Device Number
        - Timestamp
        - Device Name
    - Remember in the `ls` command you can see the type of file with the first bit on each line. Device files are denoted as the following:
        - `c` - character
        - `b` - block
        - `p` - pipe
        - `s` - socket

- Character Device
    - These devices transfer data, but one a character at a time. You'll see a lot of pseudo devices (`/dev/null`) as character devices, these devices aren't really physically connected to the machine, but they allow the operating system greater functionality.

- Block Device
    - These devices transfer data, but in large fixed-sized blocks. You'll most commonly see devices that utilize data blocks as block devices, such as harddrives, filesystems, etc.

- Pipe Device
    - Named pipes allow two or more processes to communicate with each other, these are similar to character devices, but instead of having output sent to a device, it's sent to another process.

- Socket Device
    - Socket devices facilitate communication between processes, similar to pipe devices but they can communicate with many processes at once.

- Device Characterization
    - Devices are characterized using two numbers, **major device number** and **minor device number**. You can see these numbers in the above `ls` example, they are separated by a comma. For example, let's say a device had the device numbers: `8, 0`:
        - The major device number represents the device driver that is used, in this case `8`, which is often the major number for sd block devices. The minor number tells the kernel which unique device it is in this driver class, in this case `0` is used to represent the first device (a).

#### Device Names
- Here are the most common device names that you will encounter:
    - **SCSI Devices**
        - If you have any sort of mass storage on your machine, chances are it is using the SCSI (pronounced "scuzzy") protocol. **SCSI** stands for **Small Computer System Interface**, it is a protocol used for allow communication between disks, printers, scanners and other peripherals to your system. You may have heard of SCSI devices which aren't actually in use in modern systems, however our Linux systems correspond SCSI disks with hard disk drives in `/dev`. They are represented by a prefix of `sd` (SCSI disk):
        - Common SCSI device files:
            - `/dev/sda` - First hard disk
            - `/dev/sdb` - Second hard disk
            - `/dev/sda3` - Third partition on the first hard disk
    - **Pseudo Devices**
        - As we discussed earlier, pseudo devices aren't really physically connected to your system, most common pseudo devices are character devices:
            - `/dev/zero` - accepts and discards all input, produces a continuous stream of NULL (zero value) bytes
            - `/dev/null` - accepts and discards all input, produces no output
            - `/dev/random` - produces random numbers
    - **PATA Devices**
        - Sometimes in older systems you may see hard drives being referred to with an `hd` prefix:
            - `/dev/hda` - First hard disk
            - `/dev/hdd2` - Second partition on 4th hard disk

- Write to the pseudo devices and see what happens, be careful not to write your disks to those devices!
    - Example:
        ```bash
        $ echo "Hello, world!" > /dev/null
        ```
        - No output or error. Your data is thrown away.

#### sysfs
- `Sysfs` was created long ago to better manage devices on our system that the `/dev` directory failed to do. Sysfs is a virtual filesystem, most often mounted to the `/sys` directory. It gives us more detailed information than what we would be able to see in the `/dev` directory. Both directories `/sys` and `/dev` seem to be very similar and they are in some regards, but they do have major differences. Basically, the `/dev` directory is simple, it allows other programs to access devices themselves, while the `/sys` filesystem is used to view information and manage the device.

- The `/sys` filesystem basically contains all the information for all devices on your system, such as the manufacturer and model, where the device is plugged in, the state of the device, the hierarchy of devices and more. The files you see here aren't device nodes, so you don't really interact with devices from the /sys directory, rather you are managing devices.

- Take a look at an example of the contents of the `/sys` directory:
    ```bash
    pete@icebox:~$ ls /sys/block/sda
    ```
    ```
    alignment_offset  discard_alignment  holders   removable  sda6       trace
    bdi               events             inflight  ro         size       uevent
    capability        events_async       power     sda1       slaves
    dev               events_poll_msecs  queue     sda2       stat
    device            ext_range          range     sda5       subsystem
    ```

#### udev
- Back in the old days and actually today if you really wanted to, you would create device nodes using a command such as:
    ```bash
    $ mknod /dev/sdb1 b 8 3
    ```
    - This command will make a device node `/dev/sdb1` and it will make it a block device (`b`) with a major number of `8` and a minor number of `3`.
    - To remove a device, you would simply `rm` the device file in the `/dev` directory.

- Luckily, we really don't need to do this anymore because of udev. The **udev** system dynamically creates and removes device files for us depending on whether or not they are connected. There is a udevd daemon that is running on the system and it listens for messages from the kernel about devices connected to the system. **Udevd** will parse that information and it will match the data with the rules that are specified in `/etc/udev/rules.d`, depending on those rules it will most likely create device nodes and symbolic links for the devices. You can write your own udev rules, but that is a little out of scope for this lesson. Fortunately, your system already comes with lots of udev rules so you may never need to write your own.

- You can also view the udev database and sysfs using the `udevadm` command. This tool is very useful, but sometimes can get very convoluted, a simple command to view information for a device would be:
    ```bash
    $ udevadm info --query=all --name=/dev/sda
    ```

#### lsusb, lspci, lssci
- Just like we would use the ls command to list files and directories, we can use similar tools that list information about devices.

- Listing USB Devices
    ```bash
    $ lsusb
    ```

- Listing PCI Devices
    ```bash
    $ lspci
    ```

- Listing SCSI Devices
    ```bash
    $ lsscsi
    ```

#### dd
- The `dd` tool is super useful for converting and copying data. It reads input from a file or data stream and writes it to a file or data stream.

- Consider the following command:
    ```bash
    $ dd if=/home/pete/backup.img of=/dev/sdb bs=1024 
    ```
    - This command is copying the contents of `backup.img` to `/dev/sdb`. It will copy the data in blocks of 1024 bytes until there is no more data to be copied.
        - `if=file` - Input file, read from a file instead of standard input
        - `of=file` - Output file, write to a file instead of standard output
        - `bs=bytes` - Block size, it reads and writes this many bytes of data at a time. You can use different size metrics by denoting the size with a `k` for kilobyte, `m` for megabyte, etc, so 1024 bytes is 1k
    - `count=number` - Number of blocks to copy.

- You will see some `dd` commands that use the count option, usually with `dd` if you want to copy a file that is 1 megabyte, you'll usually want to see that file as 1 megabyte when it's done being copied. Let's say you run the following command:
    ```bash
    $ dd if=/home/pete/backup.img of=/dev/sdb bs=1M count=2
    ```
    - Our backup.img file is 10M, however, we are saying in this command to copy over 1M 2 times, so only 2M is being copied, leaving our copied data incomplete. Count can come in handy in many situations, but if you are just copying over data, you can pretty much omit `count` and even `bs` for that matter. If you really want to optimize your data transfers, then you'll want to start using those options.

- `dd` is extremely powerful, you can use it to make backups of anything, including whole disk drives, restoring disks images, and more. Be careful, that powerful tool can come at a price if you aren't sure what you are doing.

### The Filesystem

#### Filesystem Hierarchy
- At this point, you're probably well familiar with the directory structure of your system, if not you will be soon. Filesystems can vary with how they are structured, but for the most part they should conform to the Filesystem Hierarchy Standard.

- Go ahead and do an `ls -l /` to see the directories listed under the root directory, yours may look different than mine, but the directories should for the most part look like the following:
    - `/` - The root directory of the entire filesystem hierarchy, everything is nestled under this directory.
    - `/bin` - Essential ready-to-run programs (binaries), includes the most basic commands such as `ls` and `cp`.
    - `/boot` - Contains kernel boot loader files.
    - `/dev` - Device files.
    - `/etc` - Core system configuration directory, should hold only configuration files and not any binaries.
    - `/home` - Personal directories for users, holds your documents, files, settings, etc.
    - `/lib` - Holds library files that binaries can use.
    - `/media` - Used as an attachment point for removable media like USB drives.
    - `/mnt` - Temporarily mounted filesystems.
    - `/opt` - Optional application software packages.
    - `/proc` - Information about currently running processes.
    - `/root` - The root user's home directory.
    - `/run` - Information about the running system since the last boot.
    - `/sbin` - Contains essential system binaries, usually can only be ran by root.
    - `/srv` - Site-specific data which are served by the system.
    - `/tmp` - Storage for temporary files
    - `/usr` - This is unfortunately named, most often it does not contain user files in the sense of a home folder. This is meant for user installed software and utilities, however that is not to say you can't add personal directories in there. Inside this directory are sub-directories for `/usr/bin`, `/usr/local`, etc.
    - `/var` - Variable directory, it's used for system logging, user tracking, caches, etc. Basically anything that is subject to change all the time.

#### Filesystem Types
- There are many different filesystem implementations available. Some are faster than others, some support larger capacity storage and others only work on smaller capacity storage. Different filesystems have different ways of organizing their data and we'll go into detail about what types of filesystems there are. Since there are so many different implementations available, applications need a way to deal with the different operations. So there is something called the **Virtual File System (VFS)** abstraction layer. It is a layer between applications and the different filesystem types, so no matter what filesystem you have, your applications will be able to work with it.

- You can have many filesystems on your disks, depending on how they are partitioned and we will go through that in a coming lesson.

- **Journaling**
    - Journaling comes by default on most filesystem types, but just in case it doesn't, you should know what it does. Let's say you're copying a large file and all of a sudden you lose power. Well if you are on a non-journaled filesystem, the file would end up corrupted and your filesystem would be inconsistent and then when you boot back up, your system would perform a filesystem check to make sure everything is ok. However, the repairs could take awhile depending on how large your filesystem was.
    - Now if you were on a journaled system, before your machine even begins to copy the file, it will write what you're going to be doing in a log file (journal). Now when you actually copy the file, once it completes, the journal marks that task as complete. The filesystem is always in a consistent state because of this, so it will know exactly where you left off if your machine shutdown suddenly. This also decreases the boot time because instead of checking the entire filesystem it just looks at your journal.

- **Common Desktop Filesystem Types**
    - `ext4` - This is the most current version of the native Linux filesystems. It is compatible with the older ext2 and ext3 versions. It supports disk volumes up to 1 exabyte and file sizes up to 16 terabytes and much more. It is the standard choice for Linux filesystems.
    - `Btrfs` - "Better or Butter FS" it is a new filesystem for Linux that comes with snapshots, incremental backups, performance increase and much more. It is widely available, but not quite stable and compatible yet.
    - `XFS` - High performance journaling file system, great for a system with large files such as a media server.
    - `NTFS` and `FAT` - Windows filesystems
    - `HFS+` - Macintosh filesystem

- Check out what filesystems are on your machine:
    ```bash
    $ df -T
    ```
    Example Output:
    ```
    Filesystem     Type     1K-blocks    Used Available Use% Mounted on

    /dev/sda1      ext4       6461592 2402708   3707604  40% /

    udev           devtmpfs    501356       4    501352   1% /dev

    tmpfs          tmpfs       102544    1068    101476   2% /run

    /dev/sda6      xfs       13752320  460112  13292208   4% /home
    ```
    - The `df` command reports file system disk space usage and other details about your disk, we will talk more about this tool later.

#### Anatomy of a Disk
- Hard disks can be subdivided into partitions, essentially making multiple block devices. Recall such examples as, `/dev/sda1` and `/dev/sda2`, `/dev/sda` is the whole disk, but `/dev/sda1` is the first partition on that disk. Partitions are extremely useful for separating data and if you need a certain filesystem, you can easily create a partition instead of making the entire disk one filesystem type.

- **Partition Table**
    - Every disk will have a partition table, this table tells the system how the disk is partitioned. This table tells you where partitions begin and end, which partitions are bootable, what sectors of the disk are allocated to what partition, etc. There are two main partition table schemes used, **Master Boot Record (MBR)** and **GUID Partition Table (GPT)**.

- **Partition**
    - Disks are comprised of partitions that help us organize our data. You can have multiple partitions on a disk and they can't overlap each other. If there is space that is not allocated to a partition, then it is known as free space. The types of partitions depend on your partition table. Inside a partition, you can have a filesystem or dedicate a partition to other things like swap (we'll get to that soon).
    - *MBR*
        - Traditional partition table, was used as the standard
        - Can have primary, extended, and logical partitions
        - MBR has a limit of four primary partitions
        - Additional partitions can be made by making a primary partition into an extended partition (there can only be one extended partition on a disk). Then inside the extended partition you add logical partitions. The logical partitions are used just like any other partition. 
        - Supports disks up to 2 terabytes
    - *GPT*
        - GUID Partition Table (GPT) is becoming the new standard for disk partitioning
        - Has only one type of partition and you can make many of them
        - Each partition has a globally unique ID (GUID)
        - Used mostly in conjunction with UEFI based booting (we'll get into details in another course)

- **Filesystem Structure**
    - We know from our previous lesson that a filesystem is an organized collection of files and directories. In its simplest form, it is comprised of a database to manage files and the actual files themselves, however we're going to go into a little more detail.
        - Boot block - This is located in the first few sectors of the filesystem, and it's not really used the by the filesystem. Rather, it contains information used to boot the operating system. Only one boot block is needed by the operating system. If you have multiple partitions, they will have boot blocks, but many of them are unused.
        - Super block - This is a single block that comes after the boot block, and it contains information about the filesystem, such as the size of the inode table, size of the logical blocks and the size of the filesystem.
        - Inode table - Think of this as the database that manages our files (inodes will be covered later). Each file or directory has a unique entry in the inode table and it has various information about the file.
        - Data blocks - This is the actual data for the files and directories.

- Let's take a look at the different partition tables. Below is an example of a partition using the MBR partitioning table (msdos). You can see the primary, extended and logical partitions on the machine.
    ```bash
    $ sudo parted -l
    ```
    Example Output:
    ```
    Model: Seagate (scsi)
    Disk /dev/sda: 21.5GB
    Sector size (logical/physical): 512B/512B
    Partition Table: msdos

    Number  Start   End     Size    Type      File system     Flags
    1      1049kB  6860MB  6859MB  primary   ext4            boot
    2      6861MB  21.5GB  14.6GB  extended
    5      6861MB  7380MB  519MB   logical   linux-swap(v1)
    6      7381MB  21.5GB  14.1GB  logical   xfs
    ```

- This example is GPT, using just a unique ID for the partitions.
    ```
    Model: Thumb Drive (scsi)
    Disk /dev/sdb: 4041MB
    Sector size (logical/physical): 512B/512B
    Partition Table: gpt

    Number  Start   End     Size     File system  Name        Flags
    1      17.4kB  1000MB  1000MB                first
    2      1000MB  4040MB  3040MB                second
    ```

- If `parted` is not install, simply install it by running:
    ```bash
    sudo apt install parted
    ```

#### Disk Partitioning
- Let's do some practical stuff with filesytems by working through the process on a USB drive. If you don't have one, no worries, you can still follow along these next couple of lessons.

- First we'll need to partition our disk. There are many tools available to do this:
    - `fdisk` - basic command-line partitioning tool, it does not support GPT
    - `parted` - this is a command line tool that supports both MBR and GPT partitioning
    - `gparted` - this is the GUI version of parted
    - `gdisk` - fdisk, but it does not support MBR only GPT

- Let's use `parted` to do our partitioning. Let's say I connect the USB device and we see the device name is `/dev/sdb2`. Use `dmesg | tail -30` right after it's connected to see what the device was attached to (e.g. `sde: sde1`).
    - Launch `parted`:
        ```bash
        $ sudo parted
        ```
        - You'll be entered in the parted tool, here you can run commands to partition your device.
    Select the device:
    - Select the device:
        ```bash
        select /dev/sdb2
        ```
        - To select the device you'll be working with, select it by its device name.
    - View current partition table. Example output:
        ```
        (parted) print                                                            
        Model: Seagate (scsi)
        Disk /dev/sda: 21.5GB
        Sector size (logical/physical): 512B/512B
        Partition Table: msdos

        Number  Start   End     Size    Type      File system     Flags
        1      1049kB  6860MB  6859MB  primary   ext4            boot
        2      6861MB  21.5GB  14.6GB  extended
        5      6861MB  7380MB  519MB   logical   linux-swap(v1)
        6      7381MB  21.5GB  14.1GB  logical   xfs
        ```
        - Here you will see the available partitions on the device. The **start** and **end** points are where the partitions take up space on the hard drive, you'll want to find a good start and end location for your partitions.
        - If you want to wipe the usb drive so that you can start anew without partitions, run this bash command:
            ```bash
            sudo wipefs --all /dev/device_name
            ```
            - You'll also need to create a new partition table since you just deleted it. You can do this using `parted`:
                ```
                mklabel msdos
                ```
                - `gpt` can be used in place of `msdos` if you need `gpt` labeling.
    - Partition the device:
        ```bash
        mkpart primary 123 4567
        ```
        - Now just choose a start and end point and make the partition, you'll need to specify the type of partition depending on what table you used.
        - Note that `parted` defaults to megabytes.
    - Resize a partition:
        ```bash
        resize 2 1245 3456
        ```
        - You can also resize a partition if you don't have any space.
        - Select the partition number and then the start and end points of where you want to resize it to.
        - `parted` is a very powerful tool and you should be careful when partitioning your disks.

#### Creating Filesystems
- Now that you've actually partitioned a disk, let's create a filesystem!
    ```bash
    $ sudo mkfs -t ext4 /dev/sdb2
    ```
    - Simple as that! The `mkfs` (make filesystem) tool allows us to specify the type of filesystem we want and where we want it. You'll only want to create a filesystem on a newly partitioned disk or if you are repartitioning an old one. You'll most likely leave your filesystem in a corrupted state if you try to create one on top of an existing one.

#### `mount` and `umount`
- Before you can view the contents of your filesystem, you will have to mount it. To do that I'll need the device location, the filesystem type, and a mount point. The **mount point** is a directory on the system where the filesystem is going to be attached. So we basically want to mount our device to a mount point.

- First create the mount point, in our case `mkdir /mydrive` (creates directory in root directory, use `ls /` to see it):
    ```bash
    $ sudo mount -t ext4 /dev/sdb2 /mydrive
    ```
    - Simple as that! Now when we go to /mydrive we can see our filesystem contents, the `-t` specifies the type of filesystem, then we have the device location, then the mount point.
    - To view what filesystems you have mounted, simply use `mount | grep ^/`.

- To unmount a device from a mount point:
    ```bash
    $ sudo umount /mydrive 
    ```
    or
    ```bash
    $ sudo umount /dev/sdb2
    ```

- Remember that the kernel names devices in the order it finds them. What if our device name changes for some reason after we mount it? Well fortunately, you can use a device's universally unique ID (UUID) instead of a name. To view the UUIDS on your system for block devices:
    ```bash
    $ sudo blkid
    ```
    Example output:
    ```
    /dev/sda1: UUID="130b882f-7d79-436d-a096-1e594c92bb76" TYPE="ext4" 
    /dev/sda5: UUID="22c3d34b-467e-467c-b44d-f03803c2c526" TYPE="swap" 
    /dev/sda6: UUID="78d203a0-7c18-49bd-9e07-54f44cdb5726" TYPE="xfs" 
    ```
    - We can see our device names, their corresponding filesystem types and their UUIDs. Now when we want to mount something, we can use:
        ```bash
        $ sudo mount UUID=130b882f-7d79-436d-a096-1e594c92bb76 /mydrive
        ```
        - Most of the time you won't need to mount devices via their UUIDs, it's much easier to use the device name and often times the operating system will know to mount common devices like USB drives. If you need to automatically mount a filesystem at startup though like if you added a secondary hard drive, you'll want to use the UUID and we'll go over that in the next lesson.

#### `/etc/fstab`
- When we want to automatically mount filesystems at startup we can add them to a file called `/etc/fstab` (pronounced "eff es tab" not "eff stab") short for filesystem table. This file contains a permanent list of filesystems that are mounted.
    ```bash
    $ cat /etc/fstab
    ```
    Example Output:
    ```
    UUID=130b882f-7d79-436d-a096-1e594c92bb76 /               ext4    relatime,errors=remount-ro 0       1
    UUID=78d203a0-7c18-49bd-9e07-54f44cdb5726 /home           xfs     relatime        0       2
    UUID=22c3d34b-467e-467c-b44d-f03803c2c526 none            swap    sw              0       0
    ```
    - If you get `# UNCONFIGURED FSTAB FOR BASE SYSTEM`, that means `fstab` has not been configured to automatically mount any additional partitions or devices.

- Each line represents one filesystem, the fields are:
    - UUID - Device identifier
    - Mount point - Directory the filesystem is mounted to
    - Filesystem type
    - Options - other mount options, see manpage for more details
    - Dump - used by the dump utility to decide when to make a backup, you should just default to 0
    - Pass - Used by fsck to decide what order filesystems should be checked, if the value is 0, it will not be checked

- To add an entry, just directly modify the `/etc/fstab` file using the entry syntax above. Be careful when modifying this file, you could potentially make your life a little harder if you mess up.

#### swap
- In our previous example, I showed you how to see your partition table, let's revisit that example, more specifically this line:
    ```
    Number  Start   End     Size    Type      File system     Flags
    5      6861MB  7380MB  519MB   logical   linux-swap(v1)
    ```
    - What is this swap partition? Well **swap** is what we used to allocate virtual memory to our system. If you are low on memory, the system uses this partition to "swap" pieces of memory of idle processes to the disk, so you're not bogged for memory.

- **Using a partition for swap space**
    - Let's say we wanted to set our partition of `/dev/sdb2` to be used for swap space.
        1. First make sure we don't have anything on the partition
        2. Run: `mkswap /dev/sdb2` to initialize swap areas
        3. Run: `swapon /dev/sdb2` this will enable the swap device
        4. If you want the swap partition to persist on bootup, you need to add an entry to the `/etc/fstab` file. `sw` is the filesystem type that you'll use.
        5. To remove swap: `swapoff /dev/sdb2`
    - Generally you should allocate about twice as much swap space as you have memory. But modern systems today are usually pretty powerful enough and have enough RAM as it is.

#### Disk Usage
- There are a few tools you can used to see the utilization of your disks:
    ```bash
    $ df -h
    ```
    Example output:
    ```
    Filesystem     1K-blocks    Used Available Use% Mounted on
    /dev/sda1       6.2G  2.3G  3.6G  40% /
    ```
    - The df command shows you the utilization of your currently mounted filesystems. The `-h` flag gives you a human readable format. You can see what the device is, and how much capacity is used and available.

- Let's say your disk is getting full and you want to know what files or directories are taking up that space, for that you can use the `du` command.
    ```bash
    $ du -h
    ```
    - This shows you the disk usage of the current directory you are in, you can take a peek at the root directory with `du -h` / but that can get a little cluttered.

- Both of these commands are so similar in syntax it can be hard to remember which one to use, to check how much of your disk is free use `df`. To check disk usage, use `du`.

#### Filesystem Repair
- Sometimes our filesystem isn't always in the best condition, if we have a sudden shutdown, our data can become corrupt. It's up to the system to try to get us back in a working state (although we sure can try ourselves).

- The `fsck` (filesystem check) command is used to check the consistency of a filesystem and can even try to repair it for us. Usually when you boot up a disk, fsck will run before your disk is mounted to make sure everything is ok. Sometimes though, your disk is so bad that you'll need to manually do this. However, be sure to do this while you are in a rescue disk or somewhere where you can access your filesystem without it being mounted.
    ```bash
    $ sudo fsck /dev/sda
    ```

#### Inodes
- Remember how our filesystem is comprised of all our actual files and a database that manages these files? The database is known as the **inode table**.

- **What is an inode?**
    - An **inode** (index node) is an entry in this table and there is one for every file. It describes everything about the file, such as:
        - File type - regular file, directory, character device, etc
        - Owner
        - Group
        - Access permissions
        - Timestamps - mtime (time of last file modification), ctime (time of last attribute change), atime (time of last access)
        - Number of hardlinks to the file
        - Size of the file
        - Number of blocks allocated to the file
        - Pointers to the data blocks of the file - most important!
    - Basically inodes store everything about the file, except the filename and the file itself!

- **When are inodes created?**
    - When a filesystem is created, space for inodes is allocated as well. There are algorithms that take place to determine how much inode space you need depending on the volume of the disk and more. You've probably at some point in your life seen errors for out of disk space issues. Well the same can occur for inodes as well (although less common), you can run out of inodes and therefore be unable to create more files. Remember data storage depends on both the data and the database (inodes).
    - To see how many inodes are left on your system, use the command `df -i`.

- **Inode information**
    - Inodes are identified by numbers, when a file gets created it is assigned an inode number, the number is assigned in sequential order. However, you may sometimes notice when you create a new file, it gets an inode number that is lower than others, this is because once inodes are deleted, they can be reused by other files. To view inode numbers run `ls -li`:
        ```bash
        $ ls -li
        ```
        Example output:
        ```
        140 drwxr-xr-x 2 pete pete 6 Jan 20 20:13 Desktop
        141 drwxr-xr-x 2 pete pete 6 Jan 20 20:01 Documents
        ```
        - The first field in this command lists the inode number.
        - You can also see detailed information about a file with stat, it tells you information about the inode as well.
            ```bash
            $ stat ~/Desktop/
            ```
            Example output:
            ```
              File: ‘/home/pete/Desktop/’
              Size: 6               Blocks: 0          IO Block: 4096   directory
            Device: 806h/2054d      Inode: 140         Links: 2
            Access: (0755/drwxr-xr-x)  Uid: ( 1000/   pete)   Gid: ( 1000/   pete)
            Access: 2016-01-20 20:13:50.647435982 -0800
            Modify: 2016-01-20 20:13:06.191675843 -0800
            Change: 2016-01-20 20:13:06.191675843 -0800
             Birth: -
            ```

- **How do inodes locate files?**
    - We know our data is out there on the disk somewhere, unfortunately it probably wasn't stored sequentially, so we have to use inodes. Inodes point to the actual data blocks of your files. In a typical filesystem (not all work the same), each inode contains 15 pointers, the first 12 pointers point directly to the data blocks. The 13th pointer, points to a block containing pointers to more blocks, the 14th pointer points to another nested block of pointers, and the 15th pointer points yet again to another block of pointers! The reason this is done this way is to keep the inode structure the same for every inode, but be able to reference files of different sizes. If you had a small file, you could find it quicker with the first 12 direct pointers, larger files can be found with the nests of pointers. Either way the structure of the inode is the same.

- Observe some inode numbers for different files, which ones are usually created first?
    - Generally files with lower inote numbers are created first, but that is not a guarantee due to inode reuse.

#### symlinks
- Let's use a previous example of inode information:
    ```bash
    ls -li
    ```
    Example output:
    ```
    140 drwxr-xr-x 2 pete pete 6 Jan 20 20:13 Desktop
    141 drwxr-xr-x 2 pete pete 6 Jan 20 20:01 Documents
    ```
    - You may have noticed that we've been glossing over the third field in the ls command, that field is the link count. The link count is the total number of hard links a file has, well that doesn't mean anything to you right now. So let's discuss links first.

- **Symlinks**
    - In the Windows operating system, there are things known as shortcuts, shortcuts are just aliases to other files. If you do something to the original file, you could potentially break the shortcut. In Linux, the equivalent of shortcuts are symbolic links (or soft links or symlinks). Symlinks allow us to link to another file by its filename. Another type of links found in Linux are hardlinks, these are actually another file with a link to an inode. Let's see what I mean in practice starting with symlinks.
        ```bash
        pete@icebox:~/Desktop$ echo 'myfile' > myfile
        pete@icebox:~/Desktop$ echo 'myfile2' > myfile2
        pete@icebox:~/Desktop$ echo 'myfile3' > myfile3

        pete@icebox:~/Desktop$ ln -s myfile myfilelink
        pete@icebox:~/Desktop$ ls -li
        total 12
          151 -rw-rw-r-- 1 pete pete 7 Jan 21 21:36 myfile
        93401 -rw-rw-r-- 1 pete pete 8 Jan 21 21:36 myfile2
        93402 -rw-rw-r-- 1 pete pete 8 Jan 21 21:36 myfile3
        93403 lrwxrwxrwx 1 pete pete 6 Jan 21 21:39 myfilelink -> myfile
        ```
        - You can see that I've made a symbolic link named myfilelink that points to myfile. Symbolic links are denoted by ->. Notice how I got a new inode number though, symlinks are just files that point to filenames. When you modify a symlink, the file also gets modified. Inode numbers are unique to filesystems, you can't have two of the same inode number in a single filesystem, meaning you can't reference a file in a different filesystem by its inode number. However, if you use symlinks they do not use inode numbers, they use filenames, so they can be referenced across different filesystems.
        - Remember that `>` changes where the standard output goes (in this case, it'll go into the file, created if necessary, listed to the right of `>`).
    - Creating a symlink:
        ```bash
        $ ln -s myfile mylink
        ```
        - To create a symbolic link, you use the ln command with `-s` for symbolic and you specify a target file and then a link name.

- **Hardlinks**
    - Let's see an example of a hardlink:
        ```bash
        pete@icebox:~/Desktop$ ln myfile2 myhardlink
        pete@icebox:~/Desktop$ ls -li
        total 16
          151 -rw-rw-r-- 1 pete pete 7 Jan 21 21:36 myfile
        93401 -rw-rw-r-- 2 pete pete 8 Jan 21 21:36 myfile2
        93402 -rw-rw-r-- 1 pete pete 8 Jan 21 21:36 myfile3
        93403 lrwxrwxrwx 1 pete pete 6 Jan 21 21:39 myfilelink -> myfile
        93401 -rw-rw-r-- 2 pete pete 8 Jan 21 21:36 myhardlink
        ```
        - A hardlink just creates another file with a link to the same inode. So if I modified the contents of myfile2 or myhardlink, the change would be seen on both, but if I deleted myfile2, the file would still be accessible through myhardlink. Here is where our link count in the ls command comes into play. The link count is the number of hardlinks that an inode has, when you remove a file, it will decrease that link count. The inode only gets deleted when all hardlinks to the inode have been deleted. When you create a file, its link count is 1 because it is the only file that is pointing to that inode. Unlike symlinks, hardlinks do not span filesystems because inodes are unique to the filesystem.
    - **Creating a hardlink**
        ```bash
        $ ln somefile somelink
        ```
        - Similar to a symlink creation, except this time you leave out the `-s`.

### Boot the System (Boot Process)

#### Boot Process Overview
- Now that we've gotten a pretty good grasp at some of the important components of Linux, let's piece them altogether by learning about how the system boots. When you turn on your machine, it does some neat things like show you the logo screen, run through some different messages and then at the end you're prompted with a login window. Well there is actually a ton of stuff happening between when you push the power button to when you login and we'll discuss those in this course.

- The Linux boot process can be broken down in 4 simple stages:
    1. **BIOS**
        - The BIOS (stands for "Basic Input/Output System") initializes the hardware and makes sure with a Power-on self test (POST) that all the hardware is good to go. The main job of the BIOS is to load up the bootloader.
    2. **Bootloader**
        - The bootloader loads the kernel into memory and then starts the kernel with a set of kernel parameters. One of the most common bootloaders is GRUB, which is a universal Linux standard.
    3. **Kernal**
        - When the kernel is loaded, it immediately initializes devices and memory. The main job of the kernel is to load up the init process.
    4. **Init**
        - Remember the init process is the first process that gets started, init starts and stops essential service process on the system. There are three major implementations of init in Linux distributions. We will go over them briefly and then dive into them in another course. 

- This is the (very) simple explanation of the Linux boot process. We will go into more detail about these stages in the next lessons.

#### Boot Process: BIOS
- **BIOS**
    - The first step in the Linux boot process is the BIOS which performs system integrity checks. The BIOS is a firmware that comes most common in IBM PC compatible computers, the dominant type of computers out there today. You've probably used the BIOS firmware to change the boot order of your harddisks, check system time, your machine's mac address, etc. The BIOS's main goal is to find the system bootloader.
    - So once the BIOS boots up the hard drive, it searches for the boot block to figure out how to boot up the system. Depending on how you partition your disk, it will look to the **master boot record (MBR)** or **GPT**. The MBR is located in the first sector of the hard drive, the first 512 bytes. The MBR contains the code to load another program somewhere on the disk, this program in turn actually loads up our bootloader.
    - Now if you partitioned your disk with GPT, the location of the bootloader changes a bit.
- **UEFI**
    - There is another way to boot up your system instead of using BIOS and that is with **UEFI** (stands for "Unified extensible firmware interface"). UEFI was designed to be successor to BIOS, most hardware out there today comes with UEFI firmware built in. Macintosh machines have been using EFI booting for years now and Windows has mostly moved all of their stuff over to UEFI booting. The GPT format was intended for use with EFI. You don't necessarily need EFI if you are booting a GPT disk. The first sector of a GPT disk is reserved for a "protective MBR" to make it possible to boot a BIOS-based machine.
    - UEFI stores all the information about startup in an .efi file. This file is stored on a special partition called **EFI** system partition on the hardware. Inside this partition it will contain the bootloader. UEFI comes with many improvements from the traditional BIOS firmware. However, since we are using Linux, the majority of us are using BIOS. So all of these lessons will be going along with that pretense.

#### Boot Process: Bootloader
- The bootloader's main responsibilities are:
    - Booting into an operating system, it can also be used to boot to non-Linux operating systems
    - Select a kernel to use
    - Specify kernel parameters

- The most common bootloader for Linux is GRUB, you are most likely using it on your system. There are many other bootloaders that you can use such as LILO, efilinux, coreboot, SYSLINUX and more. However, we will just be working with GRUB as our bootloader.

- So we know that the bootloader's main goal is to load up the kernel, but where does it find the kernel? To find it, we will need to look at our kernel parameters. The parameters can be found by going into the GRUB menu on startup using the `e` key. If you don't have GRUB no worries, we'll go through the boot parameters that you will see:
    - `initrd` - Specifies the location of initial RAM disk (we'll talk more about this in the next lesson).
    - `BOOT_IMAGE` - This is where the kernel image is located
    root - The location of the root filesystem, the kernel searches inside this location to find init. It is often represented by its UUID or a device name such as `/dev/sda1`.
    - `ro` - This parameter is pretty standard, it mounts the fileystem as read-only mode.
    - `quiet` - This is added so that you don't see display messages that are going on in the background during boot.
    - `splash` - This lets the splash screen be shown.

#### Boot Process: Kernel
- So now that our bootloader has passed on the necessary parameters, let's see how it gets started:

- **Initrd vs Initramfs**
    - There is a bit of a chicken and egg problem when we talk about the kernel bootup. The kernel manages our systems hardware, however not all drivers are available to the kernel during bootup. So we depend on a temporary root filesystem that contains just the essential modules that the kernel needs to get to the rest of the hardware. In older versions of Linux, this job was given to the **initrd (initial ram disk)**. The kernel would mount the initrd, get the necessary bootup drivers, then when it was done loading everything it needed, it would replace the initrd with the actual root filesystem. These days, we have something called the **initramfs**, this is a temporary root filesystem that is built into the kernel itself to load all the necessary drivers for the real root filesystem, so no more locating the initrd file.

- **Mounting the root filesystem**
    - Now the kernel has all the modules it needs to create a root device and mount the root partition. Before you go any further though, the root partition is actually mounted in read-only mode first so that `fsck` can run safely and check for system integrity. Afterwards it remounts the root filesystem in read-write mode. Then the kernel locates the `init` program and executes it.

#### Boot Process: `Init`
- We've discussed `init` in previous lessons and know that it is the first process that gets started and it starts all the other essential services on our system. But how? There are actually three major implementations of `init` in Linux:
    - **System V init (sysv)**
        - This is the traditional init system. It sequentially starts and stops processes, based on startup scripts. The state of the machine is denoted by runlevels, each runlevel starts or stops a machine in a different way.
    - **Upstart**
        - This is the init you'll find on older Ubuntu installations. Upstart uses the idea of jobs and events and works by starting jobs that performs certain actions in response to events.
    - **Systemd**
        - This is the new standard for `init`, it is goal oriented. Basically you have a goal that you want to achieve and systemd tries to satisfy the goal's dependencies to complete the goal.

- There will be a more in-depth section on init systems later on.

### Kernel

#### Overview of the Kernel
- As you've learned up to this point, the kernel is the core of the operating system. We've talked about the other parts of the operating system but have yet to show how they all work together. The Linux operating system can be organized into three different levels of abstraction.
    - The most basic level is hardware, this includes our CPU, memory, hard disks, networking ports, etc. The physical layer that actually computes what our machine is doing.
    - The next level is the kernel, which handles process and memory management, device communication, system calls, sets up our filesystem, etc. The kernel's job is to talk to the hardware to make sure it does what we want our processes to do.
    - And the level that you are familiar with is the user space, the user space includes the shell, the programs that you run, the graphics, etc.

#### Privilege Levels
- Why do we have different abstraction layers for user space and kernel? Why can't you combine both powers into one layer? Well there is a very good reason why these two layers exist separately. They both operate in different modes, the kernel operates in kernel mode and the user space operates in user mode.
    - In **kernel mode**, the kernel has complete access to the hardware, it controls everything. In user space mode, there is a very small amount of safe memory and CPU that you are allowed to access. Basically, when we want to do anything that involves hardware, reading data from our disks, writing data to our disks, controlling our network, etc, it is all done in kernel mode. Why is this necessary? Imagine if your machine was infected with spyware, you wouldn't want it to be able to have direct access to your system's hardware. It can access all your data, your webcam, etc. and that's no good.
    - These different modes are called privilege levels (aptly named for the levels of privilege you get) and are often described as protection rings. To make this picture easier to paint, let's say you find out that Britney Spears is in town at your local klerb, she's protected by her groupies, then her personal bodyguards, then the bouncer outside the klerb. You want to get her autograph (because why not?), but you can't get to her because she is heavily protected. The rings work the same way, the innermost ring corresponds to the highest privilege level. There are two main levels or modes in an x86 computer architecture. Ring #3 is the privilege that user mode applications run in, Ring #0 is the privilege that the kernel runs in. Ring #0 can execute any system instruction and is given full trust. So now that we know how those privilege levels work, how are we able to write anything to our hardware? Won't we always be in a different mode than the kernel? The answer is with **system calls**, system calls allow us to perform a privileged instruction in kernel mode and then switch back to user mode.

#### System Calls
- Remember Britney in the previous lesson? Let's say we want to see her and get some drinks together, how do we get from standing outside in the crowds of people to inside her innermost circle? We would use system calls. System calls are like the VIP passes that get you to a secret side door that leads directly to Britney.

- **System calls (syscall) **provide user space processes a way to request the kernel to do something for us. The kernel makes certain services available through the system call API. These services allow us to read or write to a file, modify memory usage, modify our network, etc. The amount of services are fixed, so you can't be adding system calls nilly willy, your system already has a table of what system calls exist and each system call has a unique ID.

- I won't get into specifics of system calls, as that will require you to know a bit of C, but the basics is that when you call a program like `ls`, the code inside this program contains a system call wrapper (so not the actual system call yet). Inside this wrapper it invokes the system call which will execute a **trap**, this trap then gets caught by the system call handler and then references the system call in the system call table. Let's say we are trying to call the `stat()` system call, it's identified by a syscall ID and the purpose of the `stat()` system call is to query the status of a file. Now remember, you were running the `ls` program in non-privilege mode. So now it sees you're trying to make a syscall, it then switches you over to kernel mode, there it does lots of things but most importantly it looks up your syscall number, finds it in a table based on the syscall ID and then executes the function you wanted to run. Once it's done, it will return back to user mode and your process will receive a return status if it was successful or if it had an error. The inner workings of syscalls get really detailed, I would recommend looking at information online if you want to learn more.

- You can actually view the system calls that a process makes with the `strace` command. The `strace` command is useful for debugging how a program executed.
    ```bash
    $ strace ls
    ```

#### Kernel Installation
- Let's talk about actually installing and modifying kernels. You can install multiple kernels on your system, remember in our lesson on the boot process? In our GRUB menu we can choose which kernel to boot to.

- To see what kernel version you have on your system, use the following command:
    ```bash
    $ uname -r
    ```
    Example output:
    ```
    3.19.0-43-generic
    ```
    - The `uname` command prints system information, the `-r` command will print out all of the kernel release version.

- You can install the Linux kernel in different ways, you can download the source package and compile from source or you can install it using package management tools.
    ```bash
    $ sudo apt install linux-generic-lts-vivid
    ```
    and then just reboot into the kernel you installed. Simple right? Kind of, you'll need to also install other linux packages such as the `linux-headers`, `linux-image-generic`, etc. You can also specify the version number, so the above command can look like, `sudo apt install 3.19.0-43-generic`.

- Alternatively, if you just want the updated kernel version, just use `dist-upgrade`, it performs upgrades to all packages on your system:
    ```
    $ sudo apt dist-upgrade
    ```

- There are many different kernel versions, some are used as LTS (long term support), some are the latest and greatest, the compatibility may be very different between kernel versions so you may want to try out different kernels.

#### Kernel Location
- What happens when you install a new kernel? Well it actually adds a couple of files to your system, these files are usually added to the `/boot` directory.

- You will see multiple files for different kernel versions:
    - `vmlinuz` - this is the actual linux kernel
    - `initrd` - as we've discussed before, the `initrd` is used as a temporary file system, used before loading the kernel
    - `System.map` - symbolic lookup table
    - `config` - kernel configuration settings, if you are compiling your own kernel, you can set which modules can be loaded

- If your `/boot` directory runs out of space, you can always delete old versions of these files or just use a package manager, but be careful when doing maintenance in this directory and don't accidentally delete the kernel you are using.

#### Kernel Modules
- Let's say I have a sweet ride, I invest a lot of time and money into it. I add a spoiler, hitch, bike rack and other random things. These components don't actually change the core functionality of the car and I can remove and add them very easily. The kernel uses the same concept with kernel modules.

- The kernel in itself is a monolithic piece of software, when we want to add support for a new type of keyboard, we don't write this code directly into the kernel code. Just as we wouldn't meld a bike rack to our car (well maybe some people would do that). Kernel modules are pieces of code that can be loaded and unloaded into the kernel on demand. They allow us to extend the functionality of the kernel without actually adding to the core kernel code. We can also add modules and not have to reboot the system (in most cases).

- **View a list of currently loaded modules**:
    ```bash
    $ ls mod
    ```

- **Load a module**:
    ```bash
    $ sudo modprobe bluetooth
    ```
    - Modprobe loads tries the module from `/lib/modules/(kernel version)/kernel/drivers`. Kernel modules may also have dependencies, modprobe loads our module dependencies if they are not already loaded.

- **Remove a module**:
    ```bash
    $ sudo modprobe -r bluetooth
    ```

- **Load on bootup**:
    - You can also load modules during system boot, instead of temporarily loading them with modprobe (which will be unloaded when you reboot). Just modify the `/etc/modprobe.d` directory and add a configuration file in it like so:
        ```bash
        $ cat /etc/modprobe.d/peanutbutter.conf
        ```
        Example content of `peanutbutter.conf`:
        ```
        options peanut_butter type=almond
        ```
        - Note that `peanutbutter.conf` was our own config file that we added to the `/etc/modprobe.d` directory.
        - A bit of a outlandish example, but if you had a module named peanut_butter and you wanted to add a kernel parameter for type=almond, you can have it load on startup using this configuration file. Also note that kernel modules have their own kernel parameters so you'll want to read about the module specifically to find out more.

- **Do not load on bootup**
    - You can also make sure a module does not load on bootup by adding a configuration file like so:
        ```bash
        $ cat /etc/modprobe.d/peanutbutter.conf
        ```
        Example content of `peanutbutter.conf`:
        ```
        blacklist peanut_butter
        ```
