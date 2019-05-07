const mongoose = require('mongoose')
const Schema = mongoose.Schema

const MessageSchema = new Schema({
  name: String,
  email: String,
  message: String,
  sentOn: Date
})

const Message = mongoose.model('Message', MessageSchema)
module.exports = Message
