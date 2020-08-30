const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");
const mongoose = require("mongoose");

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

const itemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter a non-blank item!"],
  },
});

const Item = new mongoose.model("Item", itemSchema);

mongoose.connect("mongodb://localhost:27017/todolistDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.get("/", function (req, res) {
  let day = date.getDate();
  Item.find(function (err, items) {
    if (err) {
      console.log(err);
    } else {
      if (items.length === 0) {
        const item1 = new Item({ name: "Welcome to your to-do list!" });
        const item2 = new Item({ name: "Hit the + button to add a new item" });
        const item3 = new Item({ name: "<-- Hit this to delete an item" });

        const defaultItems = [item1, item2, item3];

        Item.insertMany(defaultItems, function (err) {
          if (err) {
            console.log(err);
          } else {
            console.log("Successfully added all items to todolistDB");
          }
        });
        res.redirect("/");
      }
      res.render("list", { day: day, items: items });
    }
  });
});

app.post("/", function (req, res) {
  let newItem = new Item({ name: req.body.newItem });
  newItem.save();

  res.redirect("/");
});

app.post("/delete", function (req, res) {
  let itemID = req.body.checkbox;
  Item.deleteOne({ _id: { $eq: itemID } }, function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log("Successfully removed item");
    }
  });

  res.redirect("/");
});

app.listen(3000, function () {
  console.log("Server is listening on port 3000");
});
