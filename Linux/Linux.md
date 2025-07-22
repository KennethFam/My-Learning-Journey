# Linux

<details>
<summary><strong> Exercise </strong></summary>

- 
    - Ans: 

</details>

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

## Source(s)
- [Linux Journey](https://linuxjourney.com/)

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
