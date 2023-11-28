//const { Double } = require("mongodb")
const mongoose = require("mongoose")
const booksSchema = mongoose.Schema({
books_name: {
    type: String,
    required: true,
    maxLength: [8]
 },
books_author: String,
books_cost:{
    type: Number,
    required: true,
    min: 100,
    max: 1000,
  },
})
module.exports = mongoose.model("books",booksSchema)