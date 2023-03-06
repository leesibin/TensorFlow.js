const express = require("express");
const path = require("path");
const logger = require("morgan");
const cw = require("./public/crawling01.js")
const history = require('connect-history-api-fallback')
const {createProxyMiddleware} = require('http-proxy-middleware')
const app = express();
const port = 3000;
const _path = path.join(__dirname, "./dist");
console.log(_path);
app.use(history())
app.use("/", express.static(_path));
app.use(logger("tiny"));
app.use(createProxyMiddleware('/v1',{target:'http://openapi.naver.com',changeOrigin:true}))

app.get('/crawling',(req,res)=>{
  console.log('준비')
  cw.ax().then((v)=>{
    console.log(v)
    res.send(v)
  })
  
})

app.listen(port, () => {
  console.log(port + "에서 서버 동작 완료.");
});