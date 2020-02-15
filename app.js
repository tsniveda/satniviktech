var express = require("express");

var app = express();

app.set("view engine", "ejs");

app.get("/", (req,res) => {
    res.render("comingsoon");
});


app.listen( 1906, () => console.log("Satnivik Tech is now served at 1906"));
