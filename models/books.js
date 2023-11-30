//const { Double } = require("mongodb")
const mongoose = require("mongoose")
const booksSchema = mongoose.Schema({
books_name: {
    type: String,
    required: true,
    maxLength: [15]
 },
books_author: String,
books_cost:{
    type: Number,
    required: true,
    min: 50,
    max: 5000,
  },
})
module.exports = mongoose.model("books",booksSchema)