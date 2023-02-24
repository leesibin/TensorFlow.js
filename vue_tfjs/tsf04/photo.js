const mongoose = require('mongoose')
const Schema = mongoose.Schema
const PhotoSchema = new Schema({
    숫자: Number,
    문자: String
})

module.exports = mongoose.model('vuetest', PhotoSchema,'vuetest')
//뒤에 한번더 membership쓰는이유 : 그래야만 내가 기존에 생성되있던 몽고db collection 안에들어간다
 //아니면 membership 한번더 쓰지안으면 memberships 복수형태로 콜렉션이 생성됨
