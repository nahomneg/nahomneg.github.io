const express = require('express');
const path = require('path');
const routes = require('./routes/games');
const app = express();
require('dotenv').config();

app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

const server = app.listen(process.env.PORT,function () {
    console.log(process.env.SERVER_LISTEN_MSG + server.address().port);
});