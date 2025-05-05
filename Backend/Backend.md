# Backend Development

## What is the backend?
- The back-end is all of the technology required to process the incoming request and generate and send the response to the client

## Parts of the backend
- The server. This is the computer that receives requests.
- The app. This is the application running on the server that listens for requests, retrieves information from the database, and sends a response.
- The database. Databases are used to organize and persist data.

## Middleware
- Middleware is any code that executes between the server receiving a request and sending a response.

## Static Sites
- A static site is one that returns the same hard-coded content from the server whenever a particular resource is requested.
- Requests for static resources are handled in the same way as for static sites (static resources are any files that don't change — typically: CSS, JavaScript, Images, pre-created PDF files, etc.).
    - 

## Dynamic Sites
- A dynamic website is one where some of the response content is generated dynamically, only when needed. On a dynamic website, HTML pages are normally created by inserting data from a database into placeholders in HTML templates (this is a much more efficient way of storing large amounts of content than using static websites).
- A dynamic site can return different data for a URL based on information provided by the user or stored preferences and can perform other operations as part of returning a response (e.g., sending notifications).
- Most of the code to support a dynamic website must run on the server. Creating this code is known as "server-side programming" (or sometimes "back-end scripting").