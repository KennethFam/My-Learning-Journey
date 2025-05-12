const express = require("express");
const app = express();
const path = require("node:path");

// app.get("/", (req, res) => res.send("Hello, world!"));

// const PORT = 3000;
// app.listen(PORT, () => {
//     console.log(`My first Express app - listening on port ${PORT}!`);
// });

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const PORT = 8080;

const options = {
    root: __dirname,
}

const errFile = '404.html';

// load index.ejs
// app.get("/", (req, res) => {
//     res.render("index", { message: "EJS rocks!" });
// });

// load index.ejs with navbar.ejs and user.ejs
const links = [
  { href: "/", text: "Home" },
  { href: "about", text: "About" },
];

const users = ["Rose", "Cake", "Biff"];

app.get("/{:file}", (req, res) => {
    const fileName = req.params.file == undefined ? "index" : req.params.file;
    console.log(fileName)
    res.render(fileName, { links: links, users: users });
});

// {} are in Express v5 and replace ?, makes :file optional
// req.params.file will be undefined if no file is specified
// app.get('/{:file}', (req, res, next) => {
//     const fileName = req.params.file == undefined ? "index.html" : req.params.file;
//     res.sendFile(fileName, options, (err) => {
//         if (err) {
//             res.status(404).sendFile(errFile, options, (err) => {
//                 if (err) {
//                     res.status(500).send("An error occured. Please try again.")
//                 } else {
//                     console.log('Sent: 404.html');
//                 }
//             });
//         } else {
//             console.log('Sent:', fileName)
//         }
//     });
// });

app.listen(PORT);