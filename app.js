var express      = require('express'),
    app          = express(),
    mongoose     = require('mongoose'),
    bodyParser   = require("body-parser");



app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
console.log(__dirname);

app.get("/", function(req, res){
    res.render("index");
});

app.get("/about", function(req, res){
    res.render("about");
});

app.get("/products", function(req, res){
    res.render("products");
});

app.get("/contact", function(req, res){
    res.render("contact");
});
//mongoose.connect("");
app.listen(3000, function(){
    console.log("Server started");
});