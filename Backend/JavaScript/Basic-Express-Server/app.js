const express = require("express");
const app = express();

// app.get("/", (req, res) => res.send("Hello, world!"));

// const PORT = 3000;
// app.listen(PORT, () => {
//     console.log(`My first Express app - listening on port ${PORT}!`);
// });

const PORT = 8080;

const options = {
    root: __dirname,
}

const errFile = '404.html';

app.get('/', (req, res, next) => {
  res.sendFile('index.html', options, (err) => {
    if (err) {
        next(err)
    } else {
        console.log('Sent: index.html');
    }
  })
});

app.get('/:file', (req, res, next) => {
    const fileName = req.params.file
    res.sendFile(fileName, options, (err) => {
        if (err) {
            res.status(404).sendFile(errFile, options, (err) => {
                if (err) {
                    res.status(500).send("An error occured. Please try again.")
                } else {
                    console.log('Sent: 404.html');
                }
            });
        } else {
            console.log('Sent:', fileName)
        }
    });
});

app.listen(PORT);