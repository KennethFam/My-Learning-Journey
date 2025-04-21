# Git

## Version Control
- Version control is a system that records changes to a file or set of files over time so that you can recall specific versions later.
- Local Version Control Systems
    - ![alt text](LVCS.png)
    - simple local database keeps all the changes to files under revision control
        - Revision Control System (RCS) is a good example of a LVCS
- Centralized Version Control Systems
    - ![alt text](CVCS.png)
    - have a single server that contains all the versioned files, and a number of clients that check out files from that central place
    - single point of failure
        - if server goes down, nobody can collaborate at all or save versioned changes to anything they’re working on
        - if the disk that the database is on gets corrupted, everything is lost unless there is a back-up
- Distributed Version Control Systems
    - ![alt text](DVCS.png)
    - Git belongs in this category
    - clients don’t just check out the latest snapshot of the files; rather, they fully mirror the repository, including its full history
    - if any server dies, and these systems were collaborating via that server, any of the client repositories can be copied back up to the server to restore it
    - every clone is really a full backup of all the data

## What Git Accomplishes
- speed
- simple design
- strong support for non-linear development (thousands of parallel branches)
- fully distributed
- able to handle large projects like the Linux kernel efficiently (speed and data size)

## How Git Works
- major difference between Git and any other VCS (Subversion and friends included) is the way Git thinks about its data
    - ![alt text](DeltaVC.png)
    - most other systems store information as a list of file-based changes. These other systems (CVS, Subversion, Perforce, and so on) think of the information they store as a set of files and the changes made to each file over time (this is commonly described as delta-based version control)
- thinks of its data more like a series of snapshots of a miniature filesystem
    - ![alt text](SnapshotVC.png)
    - every time you commit, or save the state of your project, Git basically takes a picture of what all your files look like at that moment and stores a reference to that snapshot
    -  if files have not changed, Git doesn’t store the file again, just a link to the previous identical file it has already stored
    - Git thinks about its data more like a stream of snapshots
- most operations in Git need only local files and resources to operate
- everything in Git is checksummed before it is stored and is then referred to by that checksum
    - SHA-1 hash
        - 40-character string composed of hexadecimal characters (0–9 and a–f) and calculated based on the contents of a file or directory structure in Git
    - impossible to change the contents of any file or directory without Git knowing about it
    - can’t lose information in transit or get file corruption without Git being able to detect it
- Git stores everything in its database not by file name but by the hash value of its contents
- nearly all actions in Git only add data
- Git's States
    - Git has 3 main states that your files can be in
        - Modified: you have changed the file but have not committed it to your database yet
        - Staged: you have marked a modified file in its current version to go into your next commit snapshot
        - Committed:  the data is safely stored in your local database
    - If a particular version of a file is in the Git directory, it’s considered committed. If it has been modified and was added to the staging area, it is staged. And if it was changed since it was checked out but has not been staged, it is modified.
- 3 main states lead to three main sections of a Git project
    - ![alt text](3MainSections.png)
    - working tree
        - a single checkout of one version of the project
        - these files are pulled out of the compressed database in the Git directory and placed on disk for you to use or modify
    - staging area
        - a file, generally contained in your Git directory, that stores information about what will go into your next commit
        - technical name in Git parlance is the “index”, but the phrase “staging area” works just as well
    - Git directory
        - where Git stores the metadata and object database for your project
        - most important part of Git, and it is what is copied when you clone a repository from another computer
- basic Git workflow
    1. You modify files in your working tree.
    2. You selectively stage just those changes you want to be part of your next commit, which adds only those changes to the staging area.
    3. You do a commit, which takes the files as they are in the staging area and stores that snapshot permanently to your Git directory.

## How to use Git
- command-line tools or one of the many graphical user interfaces out there with varying capabilities
- command line is the only place you can run all Git commands

