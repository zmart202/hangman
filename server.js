const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const request = require("request");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// app.get("/", (req, res) => {
//   request
//     .get("https://api.chucknorris.io/jokes/random")
//     .on("response", function(response) {
//       console.log(response.statusCode); // 200
//       console.log(response.headers["content-type"]); // 'image/png'
//       res.send(response);
//     });
// });
app.get("/", (req, res) => {
  request.get("https://api.chucknorris.io/jokes/random", function(
    error,
    response,
    body
  ) {
    if (!error && response.statusCode == 200) {
      let chuck = JSON.parse(body).value; // Print the google web page
      console.log(chuck);
      res.send(chuck);
    }
  });
});

const port = process.env.PORT || 6969;

app.listen(port, () => console.log(`Server starting on ${port}`));
