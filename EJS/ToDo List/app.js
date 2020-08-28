const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

var items = [];

app.get("/", function (req, res) {
  var today = new Date(); // new date object (node.js)
  var currentDay = today.getDay();

  var options = {
    weekday: "long",
    day: "numeric",
    month: "short",
  };

  var day = today.toLocaleDateString("en-US", options);

  res.render("list", { day: day, items: items });
});

app.post("/", function (req, res) {
  var item = req.body.newItem;
  items.push(item);
  res.redirect("/");
});

app.listen(3000, function () {
  console.log("Server is listening on port 3000");
});
