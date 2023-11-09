//const { Double } = require("mongodb")
const mongoose = require("mongoose")
const booksSchema = mongoose.Schema({
books_name: String,
books_author: String,
books_cost:Number,
})
module.exports = mongoose.model("books",booksSchema)