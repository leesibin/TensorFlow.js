const axios = require('axios') // 리퀘스트 용도
const cheerio = require('cheerio') // 선택자 용도
let orst=""

const url =
  'http://www.dreamgame.com/en/games?orderby=30'


axios.get(url).then((res) => {
  let $ = cheerio.load(res.data)
  let menu = [],
    day = [],
    date = []
    
  $('div:nth-child(1) > a > div > div.card-body.mh-150 > p.cardtitle').each(function () {
    day.push($(this).text())
  })
  $('div:nth-child(1) > a > div > div.card-body.mh-150 > p.cardprice > s').each(function () {
    date.push($(this).text())
  })
  $('div:nth-child(1) > a > div > div.card-body.mh-150 > p.cardprice > span').each(function () {
    menu.push($(this).text())
  })

  for (i in menu) {
    const rst = `${date[i]}(${day[i]})\n${menu[i]}`
    orst += rst + '<br/>'
  }
})
return orst
