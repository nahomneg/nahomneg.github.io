const express = require('express');
const app = express();
const path = require('path');
const cookieParser = require('cookie-parser')

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "view"));

app.use(cookieParser());
app.use(express.urlencoded({extended:false}));

app.get('/', function (req, res) {
    console.log(req.cookies);
    res.render('main.ejs', {values:req.cookies});
});

app.post('/', function (req, res) {
    res.cookie(req.body.key,req.body.value);
    res.redirect();
});

app.listen(3000);