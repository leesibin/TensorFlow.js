
var express = require('express');
var app = express();
var client_id = 'Zeut_UqiIpn897SNv_ju'
var client_secret = 'DVYymPvSwL'
var query = encodeURI("https://developers.naver.com/docs/utils/shortenurl");
app.get('/url', function (req, res) {
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
 app.listen(3000, function () {
   console.log('http://127.0.0.1:3000/url app listening on port 3000!');
 });