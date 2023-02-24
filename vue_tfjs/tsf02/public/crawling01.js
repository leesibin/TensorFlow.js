const axios = require('axios') // 리퀘스트 용도
const cheerio = require('cheerio') // 선택자 용도
let steam = ""
let gamersgate = ""
let dreamgame  = ""

exports.ax= async function(){
  
  //steam 시작
let url1 =
  'https://store.steampowered.com/search/?specials=1&filter=topsellers&supportedlang=english&ndl=12'

await axios.get(url1).then((res) => {
  let $ = cheerio.load(res.data)
  let steam_title = [],
  steam_price = [],
  steam_discount_percent = [],
  steam_discount_price=[]
    for (let i = 0; i <20; i++){
      $('#search_resultsRows > a:nth-child('+i+') > div.responsive_search_name_combined > div.col.search_name.ellipsis > span').each(function () {
        steam_title.push($(this).text())
      })
      $('#search_resultsRows > a:nth-child('+i+') > div.responsive_search_name_combined > div.col.search_price_discount_combined.responsive_secondrow > div.col.search_price.discounted.responsive_secondrow>#text').each(function () {
        steam_discount_price.push($(this).text())
        console.log(steam_discount_price)
  })
  $('#search_resultsRows > a:nth-child('+i+') > div.responsive_search_name_combined > div.col.search_price_discount_combined.responsive_secondrow > div.col.search_price.discounted.responsive_secondrow > span > strike').each(function () {
    steam_price.push($(this).text())
  })
  $('#search_resultsRows > a:nth-child('+i+') > div.responsive_search_name_combined > div.col.search_price_discount_combined.responsive_secondrow > div.col.search_discount.responsive_secondrow > span').each(function () {
    steam_discount_percent.push($(this).text())
  })
}
  for (j in steam_title) {
    let game1 = `${' steam : ' + steam_title[j]} ${' 할인률: '+steam_discount_percent[j]} ${'  원가 :' + steam_price[j]}${' 할인가 : '+ steam_discount_price[j]}`
    steam = game1 + '<br/>'
  }
})
// gamersgate 시작
let url2= 'https://www.gamersgate.com/games/?price_discounted=on&platform=pc'

await axios.get(url2).then((res) => {
  let $ = cheerio.load(res.data)
  let gamersgate_title = [],
  gamersgate_price = [],
  gamersgate_discount_percent = [],
  gamersgate_discount_price=[]
    for (let i = 1; i <20; i++){
  $('body > main > section > div > div > div.column.column-content > div > div.catalog-list-decorator > div > div:nth-child('+i+') > div > div.catalog-item--description > div.catalog-item--title > a').each(function () {
    gamersgate_title.push($(this).text())
  })
  $('body > main > section > div > div > div.column.column-content > div > div.catalog-list-decorator > div > div:nth-child('+i+') > div > div.catalog-item--description > div.catalog-item--price > span').each(function () {
    gamersgate_price.push($(this).text())
  })
  $('body > main > section > div > div > div.column.column-content > div > div.catalog-list-decorator > div > div:nth-child('+i+') > div > div.catalog-item--description > div.catalog-item--price > div').each(function () {
    gamersgate_discount_price.push($(this).text())
  })
  $('body > main > section > div > div > div.column.column-content > div > div.catalog-list-decorator > div > div:nth-child('+i+') > div > ul > li > span').each(function () {
    gamersgate_discount_percent.push($(this).text())
  })
}
  for (j in gamersgate_title) {
    let game2 = `${' gamersgate : ' + gamersgate_title[j]} ${' 할인률: '+gamersgate_discount_percent[j]} ${'  원가 :' + gamersgate_price[j]}${' 할인가 : '+ gamersgate_discount_price[j]}`
    gamersgate = game2 + '<br/>'
  }
})

// dreamgame  시작
let url3= 'http://www.dreamgame.com/en/games?orderby=30'

await axios.get(url3).then((res) => {
  let $ = cheerio.load(res.data)
  let dreamgame_title = [],
   dreamgame_price = [],
   dreamgame_discount_percent = [],
   dreamgame_discount_price=[]
   for (let i = 1; i <21; i++) {
  $('#TwoColumns > div.row > div.col-lg-9 > div.row.row-cols-2.row-cols-sm-2.row-cols-md-4.row-cols-lg-4.row-cols-xl-4.gx-3 > div:nth-child('+i+') > a > div > div.card-body.mh-150 > p.cardtitle').each(function () {
     dreamgame_title.push($(this).text())
  })
  $('#TwoColumns > div.row > div.col-lg-9 > div.row.row-cols-2.row-cols-sm-2.row-cols-md-4.row-cols-lg-4.row-cols-xl-4.gx-3 > div:nth-child('+i+') > a > div > div.card-body.mh-150 > p.cardprice > s').each(function () {
     dreamgame_price.push($(this).text())
  })
  $('#TwoColumns > div.row > div.col-lg-9 > div.row.row-cols-2.row-cols-sm-2.row-cols-md-4.row-cols-lg-4.row-cols-xl-4.gx-3 > div:nth-child('+i+') > a > div > div.card-body.mh-150 > p.cardprice > span').each(function () {
     dreamgame_discount_percent.push($(this).text())
  })
  $('#TwoColumns > div.row > div.col-lg-9 > div.row.row-cols-2.row-cols-sm-2.row-cols-md-4.row-cols-lg-4.row-cols-xl-4.gx-3 > div:nth-child(1) > a > div > div.card-body.mh-150 > p.cardprice>#text').each(function () {
     dreamgame_discount_price.push($(this).text())
  })
}

  for (j in  dreamgame_title) {
    let game3 = `${'dreamgame : ' +  dreamgame_title[j]} ${' 할인률: '+ dreamgame_discount_percent[j]} ${'  원가 :' +  dreamgame_price[j]}${' 할인가 : '+ dreamgame_discount_price[j]}`
     dreamgame = game3 + '<br/>'
  }
})
let allgame = steam + gamersgate +  dreamgame 
return allgame
}
