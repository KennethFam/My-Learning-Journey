# cURL

## What is it?
- cURL is a free and open source computer program for transferring data to and from Internet servers. It can download a URL from a web server over HTTP, and supports a variety of other network protocols, URI schemes, multiple versions of HTTP, and proxying.

## Installation
- On Linux/MaxOS using Homebrew
    ```bash
    brew install curl
    ```

## Basic Commands
- For HTTP requests, use:
    ```bash
    curl -X METHOD http://localhost:3000
    ```
    - Replace METHOD with an HTTP method. If you don't include -X METHOD, it'll default to GET by default. You can replace http://localhost:3000 with whatever destination or route you can to use.
    - You can also send data in POST methods in different formats. Here is an example of sending JSON:
        ```bash
        curl -X POST -H "Content-Type:application/json" http://localhost:3000/messages -d '{"text":"Hi again, World"}'
        ```
        