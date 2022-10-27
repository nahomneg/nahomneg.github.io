const express = require('express');
const app = express();

const session = require('express-session');


app.use(
    session({
        resave: false,
        saveUninitialized: true,
        secret: "salt for cookie signing",
    })
);

app.use(express.urlencoded({extended:false}));


app.set('view engine', 'ejs');
app.use((req,res,next)=>{
    if(!req.session.errors){
        req.session['errors'] = []
    }
});

app.post('/login', (req,res)=>{
    const username = req.body.username;
    const password = req.body.password;

    if(username !== "test"){
        req.session['errors'].push('Incorrect Username');
    }
    if(password !== "123"){
        req.session['errors'].push('Incorrect Password');
    }
    if(req.session['errors'].length > 0){
        res.redirect(303,'/login')
    }
    else{
        res.redirect(303, '/welcome')
    }

});
app.get('/login',(req,res)=>{
    let errors = [];
    if(req.session['errors'].length > 0){
        errors = req.session['errors'];
    }
    res.render('login', errors);
});





app.listen(3000);
