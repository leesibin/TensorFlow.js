require("dotenv").config();
const mongoose = require('mongoose')
const Vschemas = require('./tsf04(scherma).cjs')
const USER = process.env.dbid
const PWD = process.env.dbpwd
const HOST = '127.0.0.1:27017' //localhost 접속불가
const DB = 'mdb'

const mongodbURL = `mongodb://${USER}:${PWD}@${HOST}/${DB}`;
//mongoose.set('useFindAndModify,false') 버전 6부터 자동관리
mongoose.set("strictQuery", false); // 6.0 이후 권장사항
mongoose
  .connect(mongodbURL, { useNewUrlParser: true })
  .then(() => console.log("MDB 접속완료!!\nscheram load 완료"))
  .catch((err) => console.log(err));
const Photo = require("./tsf04(scherma).cjs");
module.exports = Vschemas
