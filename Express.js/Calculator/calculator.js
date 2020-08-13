const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);
  var oper = req.body.oper;
  var output = 0;
  var outputString = "Your expression: " + num1;
  switch (oper) {
    case "+":
      output = num1 + num2;
      outputString += " + ";
      break;

    case "-":
      output = num1 - num2;
      outputString += " - ";
      break;

    case "*":
      output = num1 * num2;
      outputString += " * ";
      break;

    case "/":
      output = num1 / num2;
      outputString += " / ";
      break;

    default:
      console.log(oper);
      break;
  }

  outputString += num2;
  outputString += " = " + output;

  res.send(outputString);
});

app.listen(3000, function () {
  console.log("Server is running on port 3000");
});
