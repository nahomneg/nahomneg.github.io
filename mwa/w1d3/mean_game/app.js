const express = require('express');
const path = require('path');
const studentRoutes = require('./routes/students');
const gamesRoutes = require('./routes/games');

const app = express();
require('dotenv').config();
require("./data/mongodb.js").open();

app.use(express.static(path.join(__dirname, 'public')));

app.use(studentRoutes);
app.use(gamesRoutes);

const server = app.listen(process.env.PORT,function () {
    console.log(process.env.SERVER_LISTEN_MSG + server.address().port);
});