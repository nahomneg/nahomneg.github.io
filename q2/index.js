const express = require('express');
const path=require("path");
const app = express();
const session = require('express-session');

app.use(express.urlencoded({extended:false}));
app.use(session({
    resave: false,
    saveUninitialized: false,
    secret: 'saltypaper'
}));
app.get('/', (req, res) => {
    const date=new Date();
    const hour=date.getHours();

    res.send("<!DOCTYPE html>"+
    "<html>"+
        "<head>"+
            "<title>My App</title>"+
            `<link href="${hour>=6&&hour<=18?'/css/day.css':'/css/night.css'}" rel="stylesheet">`+
        "</head>"+
        "<body>"+
            "<form action='/result' method='POST'>"+
                "<label>Name <input type='text' name='name'></label>"+
                "<label>Age <input type='text' name='age'></label>"+
                "<input type='submit' value='submit query'></label>"+
            "</form>"+
        "</body>"+
    "</html>");
});
app.post('/result',(req,res)=>{
    console.log(req.session);
    req.session['name'] = req.body.name;
    req.session['age'] = req.body.age;
    res.redirect(`/output`);
});

app.get('/output', (req, res) => {
    let name = req.session.name;
    let age = req.session.age;


    age = (!age) ? "not mentioned" : age;
    name = (!name) ? "name not mentioned" : name;
    res.send(`Welcome ${name} , your age is: ${age}`);
});
app.use('/css', express.static(path.join(__dirname, 'css')));
app.listen(3000);