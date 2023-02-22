const axios = require('axios') // 리퀘스트 용도
const cheerio = require('cheerio') // 선택자 용도
let orst=""
exports.ax= async function(){
const url =
  'http://www.dreamgame.com/en/games?orderby=30'


await axios.get(url).then((res) => {
  let $ = cheerio.load(res.data)
  let menu = [],
    day = [],
    date = []
    
  $('#TwoColumns > div.row > div.col-lg-9 > div.row.row-cols-2.row-cols-sm-2.row-cols-md-4.row-cols-lg-4.row-cols-xl-4.gx-3 > div:nth-child(1) > a > div > div.card-body.mh-150 > p.cardtitle').each(function () {
    day.push($(this).text())
  })
  $('#TwoColumns > div.row > div.col-lg-9 > div.row.row-cols-2.row-cols-sm-2.row-cols-md-4.row-cols-lg-4.row-cols-xl-4.gx-3 > div:nth-child(1) > a > div > div.card-body.mh-150 > p.cardprice > s').each(function () {
    date.push($(this).text())
  })
  $('#TwoColumns > div.row > div.col-lg-9 > div.row.row-cols-2.row-cols-sm-2.row-cols-md-4.row-cols-lg-4.row-cols-xl-4.gx-3 > div:nth-child(1) > a > div > div.card-body.mh-150 > p.cardprice > span').each(function () {
    menu.push($(this).text())
  })

  for (i in menu) {
    const rst = `${date[i]}(${day[i]})\n${menu[i]}`
    orst += rst + '<br/>'
  }
})
return orst
}
