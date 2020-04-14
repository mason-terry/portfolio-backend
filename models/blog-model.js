const mongoose = require('mongoose')
const Schema = mongoose.Schema

const BlogSchema = new Schema({
  title: String,
  body: String,
  createdOn: Date,
  editedOn: Date,
  deleted: Boolean
})

const Blog = mongoose.model('Blog', BlogSchema)
module.exports = Blog
