// require("dotenv").config();
var express = require("express");
const path = require("path");
const logger = require("morgan");
const { query } = require("express");
var app = express();
const _path = path.join(__dirname, "./dist");

app.use("/", express.static(_path));
// app.use(logger());

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

var client_id = 'A00BRVLQAH6kPKhHcEqG'
var client_secret = 'oxub6i2Ne5'

app.post("/camex", function (req, res) {
  var query = req.body.ktext;
  console.log(query);
  var api_url = "https://openapi.naver.com/v1/papago/n2mt";
  var request = require("request");
  var options = {
    url: api_url,
    form: { source: "ko", target: "en", text: query },
    headers: {
      "X-Naver-Client-Id": client_id,
      "X-Naver-Client-Secret": client_secret,
    },
  };

  request.post(options, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.writeHead(200, { "Content-Type": "text/json;charset=utf-8" });
      let no = JSON.parse(body);
      console.log(no.message.result.translatedText);
      res.send(body);
    } else {
      res.status(response.statusCode).end();
      console.log("error = " + response.statusCode);
    }
  });
});
app.listen(3000, function () {
  console.log("http://127.0.0.1:3000/translate app listening on port 3000!");
});
