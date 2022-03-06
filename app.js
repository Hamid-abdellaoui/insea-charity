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

app.post("/compose", function(req, res) {
  const post = {
    title: req.body.postTitle,
    body: req.body.postBody
  };
  posts.push(post);
  res.redirect("/");
});

// Render a single blog post with url of /posts/:postName
app.get("/posts/:postName", function(req, res) {
  // Find the post in the posts array and render it with post.ejs
  const requestedTitle = _.lowerCase(req.params.postName);

  posts.forEach (function (post) {
    const storedTitle = _.lowerCase(post.title);

    if (requestedTitle === storedTitle) {
      const storedBody = post.body;
      res.render("post", {
        postTitle: post.title,
        postBody: post.body
      });
    };
  });
});

app.listen(3000, function() {
  console.log("Server started on port 3000");
  console.log('wwww.localhost:3000');
});
