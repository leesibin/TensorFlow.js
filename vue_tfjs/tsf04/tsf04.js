require("dotenv").config();
const express = require("express");
const path = require("path");
const logger = require("morgan");
const history = require("connect-history-api-fallback"); //새로고침후 데이터 유지
const app = express();
const {createProxyMiddleware} = require("http-proxy-middleware")
const port = 3000;
const _path = path.join(__dirname, "./dist")
const Vschema = require("./tsf04(mdb).js") //몽고db시그마
// const bodyParser = require('bodyParser')
app.use("/", express.static(_path));//위에 있는 경로 지정
app.use(logger("tiny"));
app.use(createProxyMiddleware('/v1',{target:'https://openapi.never.com',changeOrigin:true}))

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(history());
console.log(_path);

/* MongoDB CRUD*/
/* CRUD 에서 C = Create*/
app.post('/dbc',(req,res)=>{
  const title = req.body.title
  const content = req.body.content
  const date = req.body.date
  ;(async() => {
    const _data = { title, content, date}
    const vs = new Vschema(_data)
    const t = await vs.save()
    console.log(t)
    res.send('입력완료')
  })()
    })
  

/* CRUD 에서 R = Read*/
app.get('/dbr/:date',(req,res)=>{
  // const date = req.param('date')
  const date = req.params.date
  ;(async()=>{
    const t = await Vschema.find({date},{id:0,__v:0})
    .lean().then((t)=>{
      res.send(t)
      console.log(t)
    })
  })()
  })
 


/* CRUD 에서 U = Update*/
app.post('/dbu',(req,res)=>{
  ;(async() => {
    const t = await Vschema.updateOne({
      date : req.body.date
    },{
      $set:{
        title:req.body.title,
      content:req.body.content,
      date:req.body.date
    }
    },
    {upsert:true}
      )
    console.log(t)
    res.send('업데이트완료')
  })()
    })

/* CRUD 에서 D = Delete*/
app.get('/dbd/:date',(req,res)=>{
  // const date = req.param('date')
  const date = req.params.date
  ;(async()=>{
    const t = await Vschema.deleteMany({date:{$eq:date}})
    .then((t)=>{
      res.send('삭제완료')
      console.log(t)
    })
  })()
  })
app.listen(port, () => {
  console.log(port + "에서 서버 동작 완료.");
});
