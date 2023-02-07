const express = require("express");
const path = require("path");
const logger = require("morgan");
const app = express();
const port = 3000;
const _path = path.join(__dirname, "./dist");

console.log(_path);
app.use("/", express.static(_path));
app.use(logger("tiny"));

var client_id = 'Zeut_UqiIpn897SNv_ju'
var client_secret = 'DVYymPvSwL'
app.get('/exapi', function (req, res) {
  var query = encodeURI(req.body.ktk);
  console.log(query);
   var api_url = 'https://openapi.naver.com/v1/util/shorturl';
   var request = require('request');
   var options = {
       url: api_url,
       form: {'url':query},
       headers: {'X-Naver-Client-Id':client_id, 'X-Naver-Client-Secret': client_secret}
    };
   request.post(options, function (error, response, body) {
     if (!error && response.statusCode == 200) {
       res.writeHead(200, {'Content-Type': 'text/json;charset=utf-8'});
       res.end(body);
     } else {
       res.status(response.statusCode).end();
       console.log('error = ' + response.statusCode);
     }
   });
 });
 app.listen(port, () => {
  console.log(port + "에서 서버 동작 완료.");
});