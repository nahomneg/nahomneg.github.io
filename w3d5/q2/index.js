const express = require("express");
const path = require('path');

const app = express();
app.use('/home', express.static(path.join(__dirname, 'public')));
console.log(path.join(__dirname, 'public'));
app.use('/result', express.urlencoded({extended:true}));

app.post('/result', (req,res,next)=>{
    res.send(req.body.age);
});
app.listen(3000);