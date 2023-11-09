const { Double } = require("mongodb")
const mongoose = require("mongoose")
const hatsSchema = mongoose.Schema({
style: String,
color: String,
price:Number,
})
module.exports = mongoose.model("hats",hatsSchema)