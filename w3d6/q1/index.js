const express = require('express');

const path = require('path');
const app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "view"));
app.get('/', (req, res) => {
    const date = new Date();
    res.render("index", {
        time: date.toTimeString(),
        isDay: date.getHours() > 6 && date.getHours() < 18,
    });
});
app.use('/css', express.static(path.join(__dirname, 'css')));
app.listen(3000);