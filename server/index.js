const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

function initializeServer() {
    app.get('/', (req, res) => {
        res.send('Hello World!')
    })

    app.listen(port, () => {
        console.log(`Example app listening at http://localhost:${port}`)
    })
}

exports.initializeServer = initializeServer;