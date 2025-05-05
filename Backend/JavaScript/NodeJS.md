# NodeJS

## What is NodeJS?
- As an asynchronous event driven JavaScript runtime, Node is designed to build scalable network applications.
    - Node is an asynchronous event driven JavaScript runtime. In this context asynchronous means that when you write your code you do not try to predict the exact sequence in which every line will run. Instead you write your code as a collection of smaller functions that get called in response to specific events such as a network request (event driven).
        - Instead of telling your code to do those steps sequentially like so:
            1. Read File
            2. Print File Contents
            3. Query Database
            4. Filter Database Query Results
        - You can break up the task like so:
            1. Read File AND THEN Print File Contents
            2. Query Database AND THEN Filter Database Query Results.
        - 1 could go before 2 or vice-versa. They may even execute at the same time. The "AND THEN" tasks will execute right after the previous task is done.
    - This functionality is facilitated through the use of callbacks.

## Callbacks and Functions
- Callbacks are functions that are passed into another function as an argument.
    - ex:
        ```javascript
        http.createServer(function (req, res) {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end('Hello World!');
        }).listen(8080);
        ```
        Basically this code is creating a server and saying, “any time we get a network request, run this callback function”.
- Regular Function Example
    ```javascript
    function funkyFunction(music, isWhiteBoy) {
        if (isWhiteBoy) {
            console.log('Play: ' +  music);
        }
    }
    ```
- Anonymous Function Examples
    - function notation
        ```javascript
        const funkyFunction = function(music, isWhiteBoy) {
            if (isWhiteBoy) {
                console.log('Play: ' +  music);
            }
        }
        ```
    - arrow notation
        ```javascript
        const funkyFunction = (music, isWhiteBoy) => {
            if (isWhiteBoy) {
                console.log('Play: ' +  music);
            }
        }
        ```
        - If there is only one argument, parentheses can be omitted.
            - ex:
                ```javascript
                const playThe = funky => {
                    return funky + " music";
                }
                ```
        - If arrow functions are one line, the brackets {} can be omitted.
            - When omitting the brackets, the arrow function returns the evaluated expression without requiring the return keyword.
            - ex:
                ```javascript
                const playThe = funky => funky + " music";
                ```
        - No parameters ex:
            ```javascript
            const playThat = () => "funky music";
            ```
- Example of where parameter(s) may come from:
    ```javascript
    function myForEach(array, callback) {
        for (let i = 0; i < array.length; i++) {
            callback(array[i]); // This is when the callback function gets called, or executed
        }
    }

    // You would call it like this:
    const myArry = [2, 3, 4, 2];
    myForEach(myArry, (item) => {
        console.log(item + 2); 
    })
    ```
    - Here, item comes from array[i] in callback(array[i])
- Example of using predefine function as a callback:
    ```javascript
    function myEventHandler(event) {
        // do something, probably with 'event'
    }

    const element = document.querySelector("#myId");
    element.addEventListener('click', myEventHandler);
    ```
    - Notice how we didn't 'call' the function called myEventHandler? If we were to call it inside the parameter list, the function we called myEventHandler would run immediately and give the addEventListener the result of calling that function.

## Event Loop
- Visualization of some components during runtime:
    - ![alt text](Images/event_loop.png)
    1. Push `main()` onto the call stack.
    2. Push `console.log()` onto the call stack. This then runs right away and gets popped.
    3. Push `setTimeout(2000)` onto the stack. `setTimeout(2000)` is a Node API. When we call it, we register the event-callback pair. The event will wait 2000 milliseconds, then callback is the function.
    4. After registering it in the APIs, `setTimeout(2000)` gets popped from the call stack.
    5. Now the second `setTimeout(0)` gets registered in the same way. We now have two Node APIs waiting to execute.
    6. After waiting for 0 seconds, `setTimeout(0)` gets moved to the callback queue, and the same thing happens with `setTimeout(2000)`.
    7. In the callback queue, the functions wait for the call stack to be empty, because only one statement can execute a time. This is taken care of by the event loop.
    8. The last `console.log()` runs, and the `main()` gets popped from the call stack.
    9. The event loop sees that the call stack is empty and the callback queue is not empty. So it moves the callbacks (in a first-in-first-out order) to the call stack for execution.
- Summary:
    - JavaScript is a single-threaded language, meaning it can only execute one line of code at a time via the Call Stack. So, how do asynchronous calls work? Well, if an asynchronous function is pushed onto the Call Stack, it gets registered with the browser's Web APIs (e.g. timers, HTTP request handlers). Once the asynchronous function is done, it puts the callback onto the Callback Queue. The Event Loop, symbolized by the two arrows forming a circle, waits for the call stack to become empty and then puts the first callback in the Callback Queue onto the Call Stack. Once the callback on the Call Stack finishes, if the Call Stack is still empty, the next callback gets put on by the Event Loop and so on.