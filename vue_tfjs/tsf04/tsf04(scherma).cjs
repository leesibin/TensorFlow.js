const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Vschemas = new Schema({
    title: String,
    content: String,
    date: Date
})
module.exports = mongoose.model('vuetest', Vschemas,'vuetest')