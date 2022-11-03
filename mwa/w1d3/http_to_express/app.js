const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname,'view')));

app.get('/',function (req, res) {
    res.sendFile('view/index.html');
});

app.post('/',function (req, res) {
    res.status(200).send(JSON.stringify({title:"The Matrix"}));
});

app.listen(3434);