// Packages
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require("lodash");


const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

// Routes
app.get("/", function(req, res) {
  res.render("home");
});

app.get("/about", function(req, res) {
  res.render("about");
});

app.get("/blog", function(req, res) {
  res.render("blog");
});

app.get("/contact", function(req, res) {
  res.render("contact");
});

app.get("/compose", function(req, res) {
  res.render("compose");
});


app.get("/causes-single", function(req, res) {
  res.render("causes-single");
});

app.get("/causes", function(req, res) {
  res.render("causes");
});

app.get("/gallery", function(req, res) {
  res.render("gallery");
});

app.get("/post1", function(req, res) {
  res.render("post1");
});

app.get("/post2", function(req, res) {
  res.render("post2");
});

app.get("/post3", function(req, res) {
  res.render("post3");
});

app.get("/post4", function(req, res) {
  res.render("post4");
});


app.listen(3000, function() {
  console.log("Server started on port 3000");
});
