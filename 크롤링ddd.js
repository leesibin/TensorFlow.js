const request = require('request');
const cheerio = require('cheerio');

var url = 'http://www.dreamgame.com/en/games?orderby=30';

var customHeaderRequest = request.defaults({
    headers: {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/57.0.2987.133 Safari/537.36'}
})
customHeaderRequest(url, function(err, resp, body){
 let $ = cheerio.load(body);
  $('p.cardtitle').each(function(i, link){
    console.log($(this).text());
  });
});