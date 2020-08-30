const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/fruitsDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const fruitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please include the fruit name!"],
  },
  rating: {
    type: Number,
    min: 1,
    max: 10,
  },
  review: String,
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const apple = new Fruit({
  name: "Apple",
  rating: 7,
  review: "Pretty good",
});

const kiwi = new Fruit({
  name: "Kiwi",
  rating: 10,
  review: "Best fruit ever",
});

const orange = new Fruit({
  name: "Orange",
  rating: 7,
  review: "Pretty good",
});

const banana = new Fruit({
  name: "Banana",
  rating: 4,
  review: "Kinda mushy",
});

// apple.save();

// Fruit.insertMany([kiwi, orange, banana], function (err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Successfully added all fruits to fruitsDB");
//   }
// });

Fruit.find(function (err, fruits) {
  if (err) {
    console.log(err);
  } else {
    for (let i = 0; i < fruits.length; ++i) {
      console.log(fruits[i].name);
    }

    mongoose.connection.close();
  }
});

const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
});

const Person = new mongoose.model("Person", personSchema);

const newPerson = new Person({
  name: "John",
  age: 37,
});

// newPerson.save();
