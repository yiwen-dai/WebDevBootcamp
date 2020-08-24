const express = require("express");
const https = require("https");

const app = express();

app.get("/", function (req, res) {
  const url =
    "https://api.openweathermap.org/data/2.5/weather?q=Toronto,ca&appid=63029fc102e5fc4ff5a52eb424701f19&units=metric";

  https.get(url, function (response) {
    console.log(response.statusCode);

    response.on("data", function (data) {
      const weatherData = JSON.parse(data); // json -> js object

      const temp = weatherData.main.temp;
      const desc = weatherData.weather[0].description;
      const image = weatherData.weather[0].icon;
      const imageURL = "http://openweathermap.org/img/wn/" + image + "@2x.png";

      res.write("<h1>The weather in Toronto is currently " + desc + ".</h1>");
      res.write(
        "<h3>The temperature is currently " + temp + " degrees Celcius.</h3>"
      );
      res.write("<img src=" + imageURL + " alt='Weather Icon'>");
      res.send();
    });
  });
});

app.listen(3000, function () {});
