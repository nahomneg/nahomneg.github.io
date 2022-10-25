const express = require('express');
const path = require('path');
const app = express();
const session = require('express-session')

let Product = require("./model/Product");
let Cart = require("./model/Cart");



app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "view"));
let nextSessionId = 1000;

app.use(session({
    resave: false,
    saveUninitialized: false,
    secret: 'saltypaper'
}));

app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.render("index", { products: Product.getAllProducts() });
});
app.post('/addToCart', (req, res) => {
    let tempCart;
    if(req.session['cart']){
        console.log(req.session['cart']);
        tempCart = JSON.parse(req.session);
    }
    else{
        tempCart = new Cart();
        req.session['cart'] = JSON.stringify(tempCart);
    }
    const products = Product.getAllProducts();
    let product;
    for (const pr of products){
        if(pr.getId() == req.body.id){
            product = pr;
        }
    }
    tempCart.add(product, Math.ceil(Math.random() * 100));
    req.session['cart'] = JSON.stringify(tempCart);
    res.render("shoppingCart", { items: tempCart.getAll() });
})
app.listen(3000);