const express = require("express");
const session = require("express-session");
const app = express();
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "template"));

//app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: "salt for cookie signing",
  })
);

//app.use(express, json);
app.use("/js", express.static(path.join(__dirname, "template", "js")));

let products = [
  {
    id: 1,
    name: "cycle",
    quantity: 3,
    price: 3000,
  },
  {
    id: 2,
    name: "cycle2",
    quantity: 3,
    price: 6000,
  },
];

let addCartProduct = {
  products: [],
  totalPrice: 0,
};

app.get("/", (req, res) => {
  res.render("shop", { products });
});
app.get("/details", (req, res) => {
  const id = parseInt(req.query.id);
  const item = products.filter((e) => e.id === id)[0];
  res.render("product", { item });
});
app.post("/addToCart", (req, res) => {
  const id = req.body.id;
  const quantity = req.body.quantity;
  const selectedProduct = products.filter((p) => p.id === +id);
  selectedProduct[0].quantity = quantity;

  console.log(selectedProduct);
  addCartProduct.products.push(selectedProduct[0]);
  addCartProduct.totalPrice +=
    selectedProduct[0].price * selectedProduct[0].quantity;
  //addCartProduct.push(selectedProduct);
  req.session["cart"] = addCartProduct;
  console.log(req.session["cart"]);
  //res.redirect('/cart');

  res.sendStatus(200).send(addCartProduct.products.length);
});
app.get("/cart", (req, res) => {
  const cartItem = req.session.cart;
  const quantity = req.session.quantity;
  res.render("shoppingcart", { items: cartItem });
});

app.listen(3000, (req, res) => {
  console.log("Listening at 3000");
});


app.get('/transport', function (req, res){
  if(req.session.name){
    res.send('Welcome ' + req.session.name);
  }
  else{
    res.redirect(303, '/login')
  }
  res.send({"advantages":["healthy", "cheap", "always available"],
    "disadvantages": ["slow", "boring", "tiring"] })
});

app.get('/login', function (req, res){
  res.render('login');
});

app.get('/login', function (req, res){
  if(req.body.name){
    req.session['name'] = req.body.name;
  }
  else{
    res.redirect()
  }
});


/transport?type='Riding a bike'
