const express = require('express');
const path = require("path");
const app = express();

app.use(express.json());
app.set('view engine', 'ejs');

app.use('/js', express.static(path.join(__dirname, 'js')));

const answers = [ "It is Certain", "It is decidedly so", "Without a doubt", "Yes definitely", "You may rely on it", "As I see it, yes",
    "Most likely", "Outlook good", "Yes", "Signs point to yes", "Reply hazy, try again", "Ask again later",
    "Better not tell you now", "Cannot predict now", "Concentrate and ask again", "Don't count on it",
    "My reply is no", "My sources say no", "Outlook not so good", "Very doubtful" ];

app.get('/8ball', function (req, res) {
    const rand = Math.floor(Math.random() * answers.length);
    console.log(rand)
    res.send(answers[rand]);
});

app.get('/', function (req, res) {
    res.render('form');
});
app.listen(3000);