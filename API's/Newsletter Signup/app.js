const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https");
const { json } = require("body-parser");

const app = express();

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/html/signup.html");
});

app.post("/", function (req, res) {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const emailAddress = req.body.emailAddress;

  const data = {
    members: [
      {
        email_address: emailAddress,
        status: "subscribed",
        merge_fields: {
          FNAME: firstName,
          LNAME: lastName,
        },
      },
    ],
  };

  const jsonData = JSON.stringify(data);

  const listid = "1bb896352";

  const url = "https://us17.api.mailchimp.com/3.0/lists/" + listid;
  const options = {
    method: "POST",
    auth: "username:2dc77cbabb5d0683f9c0273075b4c130-us17",
  };

  const request = https.request(url, options, function (response) {
    const status = response.statusCode;

    if (status == 200) {
      res.sendFile(__dirname + "/html/success.html");
    } else {
      res.sendFile(__dirname + "/html/fail.html");
    }

    response.on("data", function (data) {
      console.log(status);
    });
  });

  request.write(jsonData);
  request.end();
});

app.post("/fail", function (req, res) {
  res.redirect("/");
});

app.listen(3000, function () {
  console.log("Server is running on port 3000");
});
