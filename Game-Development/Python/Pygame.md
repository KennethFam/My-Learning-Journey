# Pygame
- Pygame is a Python library for programming games. It helps you create graphical elements, handle events from the keyboard and the mouse, and implement other features necessary in games.

## Source(s)
- These notes are taken from [Part 13](https://programming-25.mooc.fi/part-13) and [Part 14](https://programming-25.mooc.fi/part-14) of [Python Programming MOOC 2025](https://programming-25.mooc.fi/).

## Documentation
- [Pygame Documentation](https://www.pygame.org/news)

## Installing pygame
<details>
<summary><strong> Linux </strong></summary>

- Open a command line, type in `pip3 install pygame` an press `enter`.

    ![alt text](images/pygame_install_linux.png)

    This should install the pygame library on your computer.
    
</details>

<details>
<summary><strong> Windows </strong></summary>

- Open the Windows terminal by opening the menu, typing in `cmd` and pressing `enter`:

    ![alt text](images/windows_cmd.png)

    The command line interpreter window should open. Type in `pip3 install pygame` and press `enter`.

    This should install the pygame library on your computer.

    Installation may require system administrator privileges. If the above doesn't work, you can try running the terminal application as an administrator: open the Windows menu, find the CMD application, right-click it and choose "Run as administrator".

    Installing and accessing pygame requires that your Python installation is added to path, as instructed [here](https://www.mooc.fi/en/installation/vscode/#python3).

</details>

<details>
<summary><strong> Mac </strong></summary>

- Open the Terminal, for example through the magnifying glass symbol in the top right corner:

    ![alt text](images/mac_magnifying_glass.png)

    The search tool should open. Type in `terminal` and press `enter`:

    ![alt text](images/mac_search.png)

    Type in the following and press `enter`: 
    
    `pip3 install pygame`

    ![alt text](images/pygame_install_mac.png)

    This should install the pygame library on your computer.

</details>

## Your first program
- Here is a simple program for checking your pygame installation works correctly:
    ```py
    import pygame

    pygame.init()
    window = pygame.display.set_mode((640, 480))

    window.fill((0,0,0))
    pygame.display.flip()

    while True:
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                exit()
    ```
    - When this program is run, it should display a window:
        ![alt text](images/pygame_black_window.png)
    - The program only consists of displaying a window, and it runs until the user closes the window.
        - Let's take a closer look at the steps required to achieve this. 
            - The first line takes the pygame library into use: `import pygame`. The next command `pygame.init` initializes the pygame modules, and the next one creates a window with the function `pygame.display.set_mode`.
                ```py
                pygame.init()
                window = pygame.display.set_mode((640, 480))
                ```
                - The `set_mode` function takes the window dimensions as an argument. The tuple `(640, 480)` indicates that the window is 640 pixels wide and 480 pixels high. The variable name `window` can be used later to access the window, for example to draw something in it. The following two commands do just that:
                    ```py
                    window.fill((0, 0, 0))
                    pygame.display.flip()
                    ```
                    - The `fill` method fills the window with the colour passed as an argument. In this case the colour is black, passed as an RGB value in the tuple `(0, 0, 0)`. The `pygame.display.flip` updates the contents of the window.
        - After these initialization commands the *main loop* of the program begins:
            ```py
            while True:
                for event in pygame.event.get():
                    if event.type == pygame.QUIT:
                        exit()
            ```
            - The main loop handles all events the operating system passes to the program. With each iteration the function `pygame.event.get` returns a list of any events collected since the previous iteration.
                - In the example above the program only handles events of type `pygame.QUIT`. This event is raised by, for example, clicking on the exit button in the corner of the window. If the `pygame.QUIT` event is raised, the program exits through the `exit` function.
                    - You can try and see what happens if your program doesn't handle the `pygame.QUIT` event. This should mean that clicking on the exit button does nothing, which would be confusing for the user. As the program is run from the command line, you can still stop it from the command line with `ctrl`+`c`.

## Add an image
- Let's add an image to the window:
    ```py
    import pygame

    pygame.init()
    window = pygame.display.set_mode((640, 480))

    robot = pygame.image.load("robot.png")

    window.fill((0, 0, 0))
    window.blit(robot, (100, 50))
    pygame.display.flip()

    while True:
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                exit()
    ```
    - The program uses this image of a robot, which is stored in the file `robot.png`:

        <p align="center">
            <img src="images/robot_big.png">
        </p>

    - The file `robot.png` has to be in the same directory with the source code of the your program, or the program won't be able to find it.

    - The window should now look like this:

        ![alt text](images/pygame_window_with_robot.png)

    - The function `pygame.image.load` loads the image in the file `robot.png` and stores a reference to it in the variable named `robot`. The method `blit` draws the image at the location `(100, 50)`, and the function `pygame.display.flip` updates the window contents, as before. The location `(100, 50)` means that the top left corner of the image is at that location within the window.

- In pygame the origo point `(0, 0)` is in the top left corner of the window. The x coordinates increase to the right, and the y coordinates increase downwards, so that the bottom right corner has the coordinates `(640, 480)`. This is contrary to how coordinates are usually handled in e.g. mathematics, but it is quite common in a programming context, and worth getting used to.

- Once you have loaded an image, you can use it many times within the same window. The following code draws the image of the robot at three different locations:
    ```py
    window.blit(robot, (0, 0))
    window.blit(robot, (300, 0))
    window.blit(robot, (100, 200))
    ```
    - The window should look like this as a result:

        ![alt text](images/three_robots.png)

- Here we set the location of the image so that it lies at the centre of the window:
    ```py
    width = robot.get_width()
    height = robot.get_height()
    window.blit(robot, (320-width/2, 240-height/2))
    ```
    - The window should now look like this:

        ![alt text](images/robot_centered.png)

    - The method `get_width` returns the width of the image, and the method `get_height` returns its height, both in pixels. The centre of the window is at half its width and height, so at `(320, 240)`, which we can use to calculate a suitable location for the top left corner of the image, so that it lies exactly at the centre.

## Animation
- Many games have moving characters, so a logical next step is creating animations. We can create the illusion of movement by drawing the same image in different locations on the screen and timing the changes appropriately.

### Creating an animation
- The following code creates an animation where a robot moves from left to right in a pygame window:
    ```py
    import pygame

    pygame.init()
    window = pygame.display.set_mode((640, 480))

    robot = pygame.image.load("robot.png")

    x = 0
    y = 0
    clock = pygame.time.Clock()

    while True:
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                exit()

        window.fill((0, 0, 0))
        window.blit(robot, (x, y))
        pygame.display.flip()

        x += 1
        clock.tick(60)
    ```
    - When this is executed, the result should look like this:

        ![alt text](gifs/robot_horizontal_movement.gif)

    - Let's take a closer look at the commands involved. 
        - If we want to trace the movement of the image on the screen, we need to know its location, which is why we have two variables for the coordinates of the top left corner of the image:
            ```py
            x = 0
            y = 0
            ```
        - We also have a clock, which we use to make sure the speed of the animation is just right:
            ```py
            clock = pygame.time.Clock()
            ```
        - The main loop draws the image at its current location with each iteration:
            ```py
            window.fill((0, 0, 0))
            window.blit(robot, (x, y))
            pygame.display.flip()
            ```
            - First the method `fill` fills the window with black, as before. The colour is passed as a tuple containing the RGB values for the colour. In this case the argument is `(0, 0, 0)`, which means that all three components - red, green and blue - have value 0. Each component can have a value between 0 and 255. So, if we passed (255, 255, 255) as the argument, we'd get a white window, and with `(255, 0, 0)` we'd get a red window. RGB colour codes form the backbone of digital colouring, and there are many tools online for working with them, for example [RGB Color Codes Chart](https://www.rapidtables.com/web/color/RGB_Color.html).
            - After the window is filled with colour, the image is drawn at the given location with the `blit` method. Then the contents of the window are updated with the function `pygame.display.flip`.
        - Finally, the value stored in `x` is incremented, which makes the image move one pixel to the right with each iteration:
            ```py
            x += 1
            ```
        - The clock method `tick` is called at the end:
            ```py
            clock.tick(60)
            ```
            - The method `tick` takes care of the speed of the animation. The argument `60` dictates that the loop should be executed 60 times a second, which means that the image moves 60 pixels to the right each second. This approximately matches the FPS or frames per second value used with games.
            - In principle, the `tick` method makes sure that the animation runs at the same speed on every computer. If there was no such timing involved, the speed of the animation would depend on the speed of the computer.

### Bouncing off a wall
- The previous animation was otherwise excellent, but as the robot reached a wall, it just kept going out of sight. Let's make the robot bounce off the wall.
    ```py
    import pygame

    pygame.init()
    window = pygame.display.set_mode((640, 480))

    robot = pygame.image.load("robot.png")

    x = 0
    y = 0
    velocity = 1
    clock = pygame.time.Clock()

    while True:
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                exit()

        window.fill((0, 0, 0))
        window.blit(robot, (x, y))
        pygame.display.flip()
        
        x += velocity
        if velocity > 0 and x+robot.get_width() >= 640:
            velocity = -velocity
        if velocity < 0 and x <= 0:
            velocity = -velocity

        clock.tick(60)
    ```
    - Running the above code should look like this:

        ![alt text](gifs/robot_bouncing_off_wall.gif)

    - There is a new variable `velocity` which determines the direction of the movement. If the value is above zero, movement is to the right, and if it is below zero, movement is to the left. More precisely in this case, if the value is `1`, the robot moves to the right, and if it is `-1`, the robot moves to the left.
    - The following lines make the robot bounce off the side walls:
        ```py
        if velocity > 0 and x+robot.get_width() >= 640:
            velocity = -velocity
        if velocity < 0 and x <= 0:
            velocity = -velocity
        ```
        - If the velocity is above zero so that the robot is moving to the right, and the right edge if the image goes beyond the right edge of the window, the direction is reversed and the robot starts moving to the left. Similarly, if the velocity is below zero so that the robot is moving to the left, and the left edge of the image reaches the left edge of the window, the direction is again reversed and the robot starts moving to the right again.
        - This makes the robot move on a path from the left edge of the window to the right edge, and back to the left, and then to the right again, repeated ad infinitum.
        - This can be simplified to:
            ```py
            if x == 0 or x+robot.get_width() >= 640:
                velocity = -velocity
            ```

### Rotation
- Let's create one more animation. This time the robot should rotate in a circle around the centre of the window:
    ```py
    import pygame
    import math

    pygame.init()
    window = pygame.display.set_mode((640, 480))

    robot = pygame.image.load("robot.png")

    angle = 0
    clock = pygame.time.Clock()

    while True:
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                exit()

        x = 320+math.cos(angle)*100-robot.get_width()/2
        y = 240+math.sin(angle)*100-robot.get_height()/2

        window.fill((0, 0, 0))
        window.blit(robot, (x, y))
        pygame.display.flip()

        angle += 0.01
        clock.tick(60)
    ```
    - Running the above code should look like this:

        ![alt text](gifs/robot_rotation.gif)

    - Rotation in a relatively precise circle is achieved with the help of some basic trigonometric functions. The varible `angle` contains the angle of the robots location in relation to the centre of the window and the horizontal line running through it. The sine and cosine functions from the Python math library are used to calculate the coordinates of the robot's location:
        ```py
        x = 320+math.cos(angle)*100-robot.get_width()/2
        y = 240+math.sin(angle)*100-robot.get_height()/2
        ```
        - The robot rotates around a circle of radius 100 around the centre of the window. The hypotenuse in this scenario is the radius of the circle. The cosine function gives the length of the adjacent side of a right triangle in relation to the hypotenuse, which means that it gives us the `x` coordinate of the location. The sine function gives the length of the opposite side, i.e. the `y` coordinate. The location is then adjusted for the size of the image, so that the centre of the circle is at the centre of the window.
        - With each iteration the size of the `angle` is incremented by 0.01:llä. As we are using radians, a full circle is 2π, which equals about 6.28. It takes about 628 iterations for the robot to go a full circle, and at 60 iterations per second this takes just over 10 seconds.

## Events
- Thus far our main loops have only executed predetermined animations and reacted to only `pygame.QUIT` type events, even though the loop gets a list of all events from the operating system. Let's get to grips with some other types of events, then.

### Handling events
- This program prints out information about all the events passed by the operating system to the pygame program, while it is running:
    ```py
    import pygame

    pygame.init()
    window = pygame.display.set_mode((640, 480))

    while True:
        for event in pygame.event.get():
            print(event)
            if event.type == pygame.QUIT:
                exit()
    ```
    - Let's assume the program was left running for a while, and then the exit button was clicked. The program prints out the following info:
        ```
        <Event(4-MouseMotion {'pos': (495, 274), 'rel': (495, 274), 'buttons': (0, 0, 0), 'window': None})>
        <Event(4-MouseMotion {'pos': (494, 274), 'rel': (-1, 0), 'buttons': (0, 0, 0), 'window': None})>
        <Event(4-MouseMotion {'pos': (492, 274), 'rel': (-2, 0), 'buttons': (0, 0, 0), 'window': None})>
        <Event(4-MouseMotion {'pos': (491, 274), 'rel': (-1, 0), 'buttons': (0, 0, 0), 'window': None})>
        <Event(5-MouseButtonDown {'pos': (491, 274), 'button': 1, 'window': None})>
        <Event(6-MouseButtonUp {'pos': (491, 274), 'button': 1, 'window': None})>
        <Event(2-KeyDown {'unicode': 'a', 'key': 97, 'mod': 0, 'scancode': 38, 'window': None})>
        <Event(3-KeyUp {'key': 97, 'mod': 0, 'scancode': 38, 'window': None})>
        <Event(2-KeyDown {'unicode': 'b', 'key': 98, 'mod': 0, 'scancode': 56, 'window': None})>
        <Event(3-KeyUp {'key': 98, 'mod': 0, 'scancode': 56, 'window': None})>
        <Event(2-KeyDown {'unicode': 'c', 'key': 99, 'mod': 0, 'scancode': 54, 'window': None})>
        <Event(3-KeyUp {'key': 99, 'mod': 0, 'scancode': 54, 'window': None})>
        <Event(12-Quit {})>
        ```
        - The first few events concern mouse usage, ten there are some events from the keyboard, and finally the last event closes the program. Each event has at least a type, but they may also offer some other identifying info, such as the location of the mouse cursor or the key that was pressed.
        - You can look for event descriptions in the [pygame documentation](https://www.pygame.org/docs/ref/event.html), but it can sometimes be easier to print out events with the code above, and look for the event that occurs when something you want to react to happens.

### Keyboard events
- This program can process events where the user presses the arrow key either to the right or to the left on their keyboard. The program prints out which key was pressed.
    ```py
    import pygame

    pygame.init()
    window = pygame.display.set_mode((640, 480))

    while True:
        for event in pygame.event.get():
            if event.type == pygame.KEYDOWN:
                if event.key == pygame.K_LEFT:
                    print("left")
                if event.key == pygame.K_RIGHT:
                    print("right")

            if event.type == pygame.QUIT:
                exit()
    ```
    - The constants `pygame.K_LEFT` and `pygame.K_RIGHT` refer to the arrow keys to the left and right. The pgyame key constants for the different keys on a keyboard are listed in the [pygame documentation](https://www.pygame.org/docs/ref/key.html#key-constants-label).
    - For example, if the user presses the arrow key to the right twice, then the left one once, and then the right one once more, the program prints out:
        ```
        right
        right
        left
        right
        ```

- We now have all the tools needed to move a character, or *sprite*, on the screen to the right and left with the arrow keys. The following code will achieve this:
    ```py
    import pygame

    pygame.init()
    window = pygame.display.set_mode((640, 480))

    robot = pygame.image.load("robot.png")
    x = 0
    y = 480-robot.get_height()

    while True:
        for event in pygame.event.get():
            if event.type == pygame.KEYDOWN:
                if event.key == pygame.K_LEFT:
                    x -= 10
                if event.key == pygame.K_RIGHT:
                    x += 10

            if event.type == pygame.QUIT:
                exit()

        window.fill((0, 0, 0))
        window.blit(robot, (x, y))
        pygame.display.flip()
    ```
    - Depending on how you use your arrow keys, running the program could look like this:

        ![alt text](gifs/pygame_move_robot.gif)

    - In the code above we have the variables `x` and `y` which contain the coordinate location for the sprite. The variable `y` is set so that the sprite appears at the bottom of the window. The `y` value does not change throughout the execution of the program. The `x` value, however, increases by 10 whenever the user presses the arrow key to the right, and decreases by 10 whenever the left arrow key is pressed.
    - The program works otherwise quite well, but the key needs to be pressed again each time we want to move again. It would be better if the movement was continuous as the key was held down. The following program offfers this functionality:
    - The code now contains the variables `to_right` and `to_left`. These contain knowledge of whether the sprite should be moving to the right or to the left at any given moment. When the user presses down an arrow key, the value stored in the relevant variable becomes `True`. When the key is released, the value changes to `False`.
    - The clock is used to time the movements of the sprite, so that they potentially happen 60 times each second. If an arrow key is pressed, the sprite moves two pixels to the right or to the left. This means the sprite moves 120 pixels per second if the key is kept pressed down.

### Mouse events
- The following code reacts to events where a mouse button is pressed down while the cursor is within the window area:
    ```py
    import pygame

    pygame.init()
    window = pygame.display.set_mode((640, 480))

    while True:
        for event in pygame.event.get():
            if event.type == pygame.MOUSEBUTTONDOWN:
                print("you pressed the button number", event.button, "at location", event.pos)

            if event.type == pygame.QUIT:
                exit()
    ```
    The execution of this program should look more or less like this:
    ```py
    you pressed the button number 1 at location (82, 135)
    you pressed the button number 1 at location (369, 135)
    you pressed the button number 1 at location (269, 297)
    you pressed the button number 3 at location (515, 324)
    ```
    - Button number 1 refers to the left mouse button and button number 3 refers to the right mouse button.

- This next program combines mouse event handling and drawing an image on the screen. When the user presses a mouse button while the mouse cursor is within the bounds of the window, an image of a robot is drawn at that location.
    ```py
    import pygame

    pygame.init()
    window = pygame.display.set_mode((640, 480))

    robot = pygame.image.load("robot.png")

    while True:
        for event in pygame.event.get():
            if event.type == pygame.MOUSEBUTTONDOWN:
                x = event.pos[0]-robot.get_width()/2
                y = event.pos[1]-robot.get_height()/2

                window.fill((0, 0, 0))
                window.blit(robot, (x, y))
                pygame.display.flip()

            if event.type == pygame.QUIT:
                exit()
    ```
    - The execution of the program could look like this:

        ![alt text](gifs/pygame_cursor.gif)

- The following program contains an animation where the robot sprite follows the mouse cursor.The location of the sprite is stored in the variables robot_x and robot_y. When the mouse moves, its location is stored in the variables target_x ja target_y. If the robot is not at this location, it moves to the approproate direction.
    ```py
    import pygame

    pygame.init()
    window = pygame.display.set_mode((640, 480))

    robot = pygame.image.load("robot.png")

    robot_x = 0
    robot_y = 0
    target_x = 0
    target_y = 0

    clock = pygame.time.Clock()

    while True:
        for event in pygame.event.get():
            if event.type == pygame.MOUSEMOTION:
                target_x = event.pos[0]-robot.get_width()/2
                target_y = event.pos[1]-robot.get_height()/2

            if event.type == pygame.QUIT:
                exit(0)

        if robot_x > target_x:
            robot_x -= 1
        if robot_x < target_x:
            robot_x += 1
        if robot_y > target_y:
            robot_y -= 1
        if robot_y < target_y:
            robot_y += 1

        window.fill((0, 0, 0))
        window.blit(robot, (robot_x, robot_y))
        pygame.display.flip()

        clock.tick(60)
    ```
    - The program's execution should look more or less like this:
        
        ![alt text](gifs/pygame_cursor2.gif)

## More pygame techniques

### The window title
- Your programs will look more professional if instead of "pygame window" the window title contains the actual name of the program.The title is set with the `pygame.display.set_caption` function:
    ```py
    pygame.display.set_caption("Great Adventure")
    ```

### Drawing shapes
- The following program draws a rectangle, a circle, and a line on the screen:
    ```py
    import pygame

    pygame.init()
    display = pygame.display.set_mode((640, 480))
    display.fill((0, 0, 0))

    pygame.draw.rect(display, (0, 255, 0), (50, 100, 200, 250))
    pygame.draw.circle(display, (255, 0, 0), (200, 150), 40)
    pygame.draw.line(display, (0, 0, 255), (80, 120), (300, 160), 2)

    pygame.display.flip()

    while True:
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                exit()
    ```
    - Running the above code should look like this:

        ![alt text](images/pygame_shapes.png)

### Drawing text
- Text in pygame is drawn in two steps: first we create an image containing the desired text, and then this image is drawn on the screen. It works like this:
    ```py
    import pygame

    pygame.init()
    display = pygame.display.set_mode((640, 480))
    display.fill((0, 0, 0))

    game_font = pygame.font.SysFont("Arial", 24)
    text = game_font.render("Moikka!", True, (255, 0, 0))
    display.blit(text, (100, 50))
    pygame.display.flip()

    while True:
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                exit()
    ```
    - Running the above code should look like this:
        
        ![alt text](images/pygame_text.png)

    - Here the method `pygame.font.SysFont` creates a font object, which uses the system font Arial in size 24. The the method `render` creates an image of the specified text in the given colour. This image is drawn on the window with the `blit` method, just as before.
    - Note: Different systems will have different fonts available. If the system this program is executed on doesn't have the Arial font, even though Arial is a very common font available on most systems, the default system font is used instead. If you need to have a specific font available for your game, you can include the font file in the game directory and specify its location for the `pygame.font.Font` method.

### Determining object/image overlap
- Let's say I have a `robot` image, an `asteroid` image, and an array `asteroids` which store the coordinates of a few asteroids, and I want to determine when the robot overlaps ("touches") an asteroid. Well, I can do this by determining whether they overlap vertically. If they do overlap vertically, I can check for horizantal overlap by getting the distance between their midpoints and checking whether it's less than or equal to the sum of their widths halved. For example:
    ```py
    if asteroids[i][1] + asteroid.get_height() >= y:
        robot_mid = x + robot.get_width()/2
        asteroid_mid = asteroids[i][0] + asteroid.get_width()/2
        if abs(robot_mid - asteroid_mid) <= (robot.get_width() + asteroid.get_width())/2:
            points += 1
            asteroids[i][0] = randint(0,width-asteroid.get_width())
            asteroids[i][1] = -randint(100,1000)
    ```
    - `y` stores the robot's y-coordinate, and `asteroids` stores the x- and y-coordinate respectively of an asteroid.
    - When an asteroid and the robot collide, the asteroid gets moved back up to the top at a random y-coordinate.

### Game project
- In this part we will use pygame to create a somewhat larger game. It is a variation of the classic Sokoban game, where the player moves a robot on a grid and pushes boxes into correct locations with as few moves as possible. The end result will look like this:

    ![alt text](images/sokoban_game.png)

#### The game map
- Let's begin by drawing the map used in the game. The game is implemented in the class `Sokoban`, which will contain all functionality required to play the game. In this first stage, the contents of the class are as follows:
    ```py
    import pygame

    class Sokoban:
        def __init__(self):
            pygame.init()
            
            self.load_images()
            self.new_game()
            
            self.height = len(self.map)
            self.width = len(self.map[0])
            self.scale = self.images[0].get_width()

            window_height = self.scale * self.height
            window_width = self.scale * self.width
            self.window = pygame.display.set_mode((window_width, window_height))

            pygame.display.set_caption("Sokoban")

            self.main_loop()

        def load_images(self):
            self.images = []
            for name in ["floor", "wall", "target", "box", "robot", "done", "target_robot"]:
                self.images.append(pygame.image.load(name + ".png"))

        def new_game(self):
            self.map = [[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                        [1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1],
                        [1, 2, 3, 0, 0, 0, 1, 0, 0, 1, 2, 3, 0, 0, 0, 0, 1],
                        [1, 0, 0, 1, 2, 3, 0, 2, 3, 0, 0, 0, 1, 0, 0, 0, 1],
                        [1, 0, 4, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1],
                        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]]

        def main_loop(self):
            while True:
                self.check_events()
                self.draw_window()

        def check_events(self):
            for event in pygame.event.get():
                if event.type == pygame.QUIT:
                    exit()

        def draw_window(self):
            self.window.fill((0, 0, 0))

            for y in range(self.height):
                for x in range(self.width):
                    square = self.map[y][x]
                    self.window.blit(self.images[square], (x * self.scale, y * self.scale))

            pygame.display.flip()

    if __name__ == "__main__":
        Sokoban()
    ```
    - Running the program should display a window with the initial state of the game. Let's take a closer look at the code which achieves this.

##### The constructor
- The constructor of the class initializes the pygame modules and the essential variables and data structures involved in the game. It also calls the main loop method of the game.
    ```py
    def __init__(self):
        pygame.init()
        
        self.load_images()
        self.new_game()
        
        self.height = len(self.map)
        self.width = len(self.map[0])
        self.scale = self.images[0].get_width()

        window_height = self.scale * self.height
        window_width = self.scale * self.width
        self.window = pygame.display.set_mode((window_width, window_height))

        pygame.display.set_caption("Sokoban")

        self.main_loop()
    ```
    - The `load_images` method loads the images used in the game into a list named `images`. The `new_game` method creates a two-dimensional list named `map`, which contains the state of the game grid in the beginning of the game.
    - The variables `height` and `width` are initialized based on the dimensions of the game grid. The variable `scale` contains the length of the side of one square in the grid. As each image is a square of the exact same size, the size of all squares is covered by this one variable, and the width of the first image will do just fine for the value. This same value can be used to calculate the width and height of the entire grid, which lets us create a window of the appropriate size to display the game grid.

##### Loading images
- The `load_images` method loads all the images used in the game:
    ```py
    def load_images(self):
        self.images = []
        for name in ["floor", "wall", "target", "box", "robot", "done", "target_robot"]:
            self.images.append(pygame.image.load(name + ".png"))
    ```

- The game makes use of the following images:
    - Floor square

        <p align="center">
            <img src="images/floor.png">
        </p>

        - Filename: `floor.png`
        - Position in list: 0
    - Wall square

        <p align="center">
            <img src="images/wall.png">
        </p>

        - Filename: `wall.png`
        - Position in list: 1
    - Target Square

        <p align="center">
            <img src="images/target.png">
        </p>

        - Filename: `target.png`
        - Position in list: 2
    - Box

        <p align="center">
            <img src="images/box.png">
        </p>

        - Filename: `box.png`
        - Position in list: 3
    - Robot

        <p align="center">
            <img src="images/robot.png">
        </p>

        - Filename: `robot.png`
        - Position in list: 4
    - Box on a target square

        <p align="center">
            <img src="images/done.png">
        </p>

        - Filename: `done.png`
        - Position in list: 5
        - The box has been moved to the target square
    - Robot on a target square

        <p align="center">
            <img src="images/target_robot.png">
        </p>

        - Filename: `target_robot.png`
        - Position in list: 6
        - The robot can also be on an empty target square

##### Creating the grid
- The `new_game` method creates the initial state of the game grid:
    ```py
    def new_game(self):
        self.map = [[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                    [1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1],
                    [1, 2, 3, 0, 0, 0, 1, 0, 0, 1, 2, 3, 0, 0, 0, 0, 1],
                    [1, 0, 0, 1, 2, 3, 0, 2, 3, 0, 0, 0, 1, 0, 0, 0, 1],
                    [1, 0, 4, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1],
                    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]]
    ```
    - The method creates a two.dimensional list named map which uses the numbered positions of the images in their list to mark up which image goes where. This way the game contains a record of the state of the game grid at all times.
    - Note: In the beginning, all spaces on the grid contain a number between 0 and 4. The numbers 5 and 6 are not included, as in the beginning no box or robot is on a target square.

##### The main loop
- The main_loop method is rather short. With each iteration it calls two methods: `check_events` goes through any events collected since the previous iteration, and the `draw_window` method updates the contents of the window.
    ```py
    def main_loop(self):
        while True:
            self.check_events()
            self.draw_window()

    def check_events(self):
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                exit()

    def draw_window(self):
        self.window.fill((0, 0, 0))

        for y in range(self.height):
            for x in range(self.width):
                square = self.map[y][x]
                self.window.blit(self.images[square], (x * self.scale, y * self.scale))

        pygame.display.flip()
    ```
    - At this stage the only event actually handled by the game is closing the game window, e.g. from the exit button. The game then exits by calling the Python `exit` function.
    - Each time `draw_window` method is called the entire game grid is matrix is traversed, and the image corresponding to each square in the grid is drawn in the correct location.
    - Note: The coordinates x and y are used in two different ways in the game. When dealing with the indexes of a two-dimensional list, it is logical to give the y coordinate first, as the y refers to the number of the row while x is the number of the column. On the other hand, when using pygame methods, x is usually passed first, as it quite often is when dealing with graphics, and also in mathematical contexts.

#### Robot and boxes
- The most difficult thing to implement in a Sokoban style game tends to be moving the robot so that it can push boxes in the desired direction. The game should be able to tell when the robot can move in a direction specified, and be able to handle any situation where a box should move also. Let's tackle this challenge now.

##### Handling key events
- The player guides the robot with the four arrow keys, so our event handler should also be able to react to the appropriate key events:
    ```py
    def check_events(self):
        for event in pygame.event.get():
            if event.type == pygame.KEYDOWN:
                if event.key == pygame.K_LEFT:
                    self.move(0, -1)
                if event.key == pygame.K_RIGHT:
                    self.move(0, 1)
                if event.key == pygame.K_UP:
                    self.move(-1, 0)
                if event.key == pygame.K_DOWN:
                    self.move(1, 0)

            if event.type == pygame.QUIT:
                exit()
    ```
    - Now whenever the player presses an arrow key, the method `move` is called with an appropriate pair of arguments. The first argument contains the movement in the vertical direction, while the second contains the movement in the horizontal direction.

##### Searching for the robot
- The game has to know the location of the robot in order to move it correctly. Let's add the method `find_robot` which figures out the location of the robot:  
    ```py
    def find_robot(self ):
        for y in range(self.height):
            for x in range(self.width):
                if self.map[y][x] in [4, 6]:
                    return (y, x)
    ```
    - The method goes through all the squares in the game grid and returns the coordinates of the square which contains either the number 4 (the robot on its own) or the number 6 (the robot on a target square).
    - The idea is that whenever the player presses an arrow key, first the location of the robot is established by going through the squares of the grid. This may seem a bit slow and superfluous, as we could just as well keep the location of the robot in a separate variable or two. The advantage of this search approach is that we are not storing the location of the robot in two different locations (in the game grid and separate variables), but instead we just have to worry about the one location (the game grid), which means that the state of the game in computer memory is simpler to handle.

##### Changes to the game grid
- We already called the method `move` above, but we haven't actually defined it yet. Let's do that now.

- The `move` method takes the direction the player wants to move to as its arguments. It then updates the game grid accordingly, or determines the move is not allowed and leaves the grid unchanged.
    ```py
    def move(self, move_y, move_x):
        robot_old_y, robot_old_x = self.find_robot() 
        robot_new_y = robot_old_y + move_y
        robot_new_x = robot_old_x + move_x

        if self.map[robot_new_y][robot_new_x] == 1:
            return

        if self.map[robot_new_y][robot_new_x] in [3, 5]:
            box_new_y = robot_new_y + move_y
            box_new_x = robot_new_x + move_x

            if self.map[box_new_y][box_new_x] in [1, 3, 5]:
                return

            self.map[robot_new_y][robot_new_x] -= 3
            self.map[box_new_y][box_new_x] += 3

        self.map[robot_old_y][robot_old_x] -= 4
        self.map[robot_new_y][robot_new_x] += 4
    ```
    - The method has quite a lot of different stages, so let's take a look at each one in turn:
        - **The old and new location of the robot**
            ```py
            robot_old_y, robot_old_x = self.find_robot() 
            robot_new_y = robot_old_y + move_y
            robot_new_x = robot_old_x + move_x
            ```
            - First, the method calls the `find_robot` in order to find the current location of the robot, before the move. This is stored in the variables `robot_old_y` and `robot_old_x`.
            - Then the new location of the robot after the prospective move is stored in the variables robot_new_y and robot_new_x. The new coordinates can be easily calculated by adding the values passed as arguments to the old location of the robot, as both contained vertical and horizontal values.
        - **Did the robot hit a wall?**
            ```py
            if self.map[robot_new_y][robot_new_x] == 1:
                return
            ```
            - The `if` statement above takes care of the situation where the robot would hit a wall as a result of the move. Remember, 1 was the position of a wall square in the list of images. This is not allowed, so the method simply returns without any further ado.
        - **Moving a box**
            ```py
            if self.map[robot_new_y][robot_new_x] in [3, 5]:
                box_new_y = robot_new_y + move_y
                box_new_x = robot_new_x + move_x

                if self.map[box_new_y][box_new_x] in [1, 3, 5]:
                    return

                self.map[robot_new_y][robot_new_x] -= 3
                self.map[box_new_y][box_new_x] += 3
            ```
            - If the new prospective location of the robot contains a number 3 (a box on its own) or a number 5 (a box in a target square), the robot attempts to move the box to the next square along. For this purpose we need two new variables: `box_new_y` and `box_new_x`, which contain the location of the box after the move.
            - Similarly to the robot, the box cannot be moved to a wall square, with the identifier 1. Neither can the box move onto another box, or a target square with a box on it. If this would happen as a result of the move, the method again simply returns without making any changes to the grid.
            - In any other casec the box can move. The value in the box's current grid location is decreased by 3, and the value in its new grid location is increased by 3. Because of the clever ordering of the items in the `images` list, this works out correctly both when the squares involved are floor squares and target squares.
        - **Moving the robot**
            ```py
            self.map[robot_old_y][robot_old_x] -= 4
            self.map[robot_new_y][robot_new_x] += 4
            ```
            - If the execution of the method has reached this point without returning, it is time to move the robot as well. The procedure is similar to moving the box, but the value subtracted from and added to the appropriate locations in the grid is 4 this time around. This ensures, again through the clever ordering of the items in the `images` list, that the final result on the grid is correct both when floor and target squares are involved in the move.

##### Refactoring?
- Using only the grid to store the state of the game at all times is very handy in the sense that only one variable is permanently involved in the whole process, and it is relatively easy to update the state of the grid through simple additions and subtractions.

- The downside is that it can be a tad difficult to understand the program code of the game. If someone unfamiliar with the logic used saw this following line of code, they would likely be a bit perplexed:
    ```py
    if self.map[box_new_y][box_new_x] in [1, 3, 5]:
    ```
    - The code snippet above makes use of *magic numbers* to represent the squares in the grid. Anyone reading the code would have to know that 1 means wall, 3 means a box and 5 means a box in a target square.

- The lines involving the clever subtractions and additions would look even more baffling:
    ```py
    self.map[robot_new_y][robot_new_x] -= 3
    ```
    - The number 3 meant a box just previously, but now it is subtracted from the value of a square on the grid. This works in the context of our numbering scheme, as it changes a box (3) into a normal floor square (0), or a target square with a box (5) into an empty target square (2), but understanding this requiares a primer in the numbering scheme used.

- We could make it easier for anyone reading the code by **refactoring** our implementation. That means improving the structure and readability of the code. One way to achieve this would be to use the names of the squares instead of the numbers 0 to 6, even though this would still not explain how and why numbers can be added and subtracted while maintaining the integrity of the grid.

- Making the program code truly accessible would likely require much more fundamentally transformative refactoring. For example, we could keep the structure of the game map in one location, and store the locations of the robot and the boxes in some separate data structure. The downside of this would be that this would likely result in a lot more code, and the internal structure of the game would become much more complicated.

#### Finishing the game
- Our game is already quite functional, so it is time to add some finishing touches to it. We will add a counter for displaying the moves taken, an option to start a new game and close the game with keyboard input, and a notification for when the player succeeds in solving the game.

##### Move counter
- The move counter near the bottom edge of the game window displays the number of moves taken by the player so far. This can be used to find the solution with the least number of moves.

- The counter requires some shanges to the code. First, let's change the constructor so that there is adequate space for the counter, and that we have an appropriate font at our disposal in order to draw the text:
    ```py
    def __init__(self):
        ...
        self.window = pygame.display.set_mode((window_width, window_height + self.scale))

        self.game_font = pygame.font.SysFont("Arial", 24)
        ...
    ```

- The move counter is initialized to zero at the beginning of the game. Each move increases it by one:
    ```py
    def new_game(self):
        ...
        self.moves = 0
    ```
    ```py
    def move(self, move_y, move_x):
        ...
        self.moves += 1
    ```

- Each time the window contents are updated, the number of moves taken shown on the screen should also be updated:
    ```py
    def draw_window(self):
        ...
        game_text = self.game_font.render("Moves: " + str(self.moves), True, (255, 0, 0))
        self.window.blit(game_text, (25, self.height * self.scale + 10))
        ...
    ```

##### New game and exiting the game
- Next, let's add keyboard commands for starting a new game with F2 and exiting the game with Esc. Both are rather easy to implement:
    ```py
    def check_events(self):
        ...
                if event.key == pygame.K_F2:
                    self.new_game()
                if event.key == pygame.K_ESCAPE:
                    exit()
        ...
    ```

- We should also add information about this functionality for the player to see:
    ```py
    def draw_window(self):
        ...
        game_text = self.game_font.render("F2 = new game", True, (255, 0, 0))
        self.window.blit(game_text, (200, self.height * self.scale + 10))

        game_text = self.game_font.render("Esc = exit game", True, (255, 0, 0))
        self.window.blit(game_text, (400, self.height * self.scale + 10))
        ...
    ```

##### Solving the game
- The player has solved the game when each box is in one of the target squares. The following method takes care of checking this:
    ```py
    def game_solved(self):
        for y in range(self.height):
            for x in range(self.width):
                if self.map[y][x] in [2, 6]:
                    return False
        return True
    ```
    - The method goes through all the squares in the game grid. If any of the squares is a 2 (an empty target square) or a 6 (a robot in a target square) the game is not yet solved, so the method returns `False`. If no such square is present in the grid, all target squares must be occupied by boxes, the game is solved, and the method returns `True`.

- If the player solves the game, we should display an appropriate message with the draw_window method:
    ```py
    def draw_window(self):
        ...
        if self.game_solved():
            game_text = self.game_font.render("Congratulations, you solved the game!", True, (255, 0, 0))
            game_text_x = self.scale * self.width / 2 - game_text.get_width() / 2
            game_text_y = self.scale * self.height / 2 - game_text.get_height() / 2
            pygame.draw.rect(self.window, (0, 0, 0), (game_text_x, game_text_y, game_text.get_width(), game_text.get_height()))
            self.window.blit(game_text, (game_text_x, game_text_y))
        ...
    ```

- For completeness' sake, let's also change the `move` method so that the player can no longer move when they have solved the game:
    ```py
    def move(self, move_y, move_x):
        if self.game_solved():
            return
        ...
    ```
    - The player can still see the game grid and the final state of the game, however.

##### A hint for testing
- When developing games it often happens that you'd want to check what happens in some later situation in the game. For example, in this game, the moment where the game is solved is one such situation.

- It can be difficult to test the correct functioning of a situation like that, as you'd normally have to solve the game to reach that point in the game. As programmers we can make some temporary alleviations in our games, to make it easier to test them. For example, we could add the following to make it temporarily easier to solve the game:
    ```py
    def game_solved(self):
        return True
    ```
    - Now the method always returns `True`, which means that the game is "solved" to begin with. This makes it easy to check that the noification at the end looks good and the player can no longer move on the grid after solving. When this functionality is thoroughly tested, we can revoke the changes.

##### Your game on GitHub?
- The game is now finished. If you want an easy way to play around with the code and images, you can retrieve the source code from [GitHub](https://github.com/moocfi/sokoban).

##### How many moves are required?
- The grid in this game is quite small, but the game is not all that easy. The first challenge is simply passing the game, but the next stage is trying to do so with as few moves as possible. How short is the shortest path to a solution?

- Looking for the shortest possible solution is not an easy task at all, but there are computational solutions to this as well. They are one of the subjects of the *Data Structures and Algorithms* course.
