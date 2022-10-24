const arr = []

const express = require("express");

const app = express();



app.use('/add', express.urlencoded({extended:true}));



app.post("/add", (req,res)=>{

    arr.push(req.body.item);

    res.redirect(303,"/")

});



app.get("/", (req, res)=>{

    let html = "<ul>";

    for (let i = 0; i < arr.length; i++){

        html += '<li>' + arr[i] + '</li>'

    }



    html += '</ul>'

    res.send(html);

});

app.get("/add", (req, res)=>{

    res.send('<form action="/add" method="POST"><input type="text" name="item" placeholder="text"><input type="submit" value="submit"></form>');

});

app.listen(3000);