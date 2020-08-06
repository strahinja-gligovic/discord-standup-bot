const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

function initializeServer() {
    app.set('view engine', 'ejs');
    app.set('views', path.join(__dirname, '/views'));

    app.get('/', (req, res) => {
        res.render('index');
    })


    app.listen(port, () => {
        console.log(`Example app listening at http://localhost:${port}`)
    })
}

exports.initializeServer = initializeServer;