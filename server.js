const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const routes = require('./routes')
const app = express()
const PORT = 8081 || process.env.PORT
const BlogModel = require('./models/blog-model')
const MessageModel = require('./models/message-model')

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/portfolio')
const db = mongoose.connection
db.on('error', console.error.bind(console, 'Connection Error'))
db.once('open', () => console.log('Connection Succeeded'))

app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(cors())

app.use(routes)

// app.get('/', (req, res) => res.send({ success: true }))

// app.get('/blog', async (req, res) => {
//   const blogPosts = await BlogModel.find({}).sort({ _id: -1 })
//   res.send(blogPosts)
// })

// app.post('/blog', async (req, res) => {
//   const title = req.body.title
//   const body = req.body.body
//   const newBlogPost = await new BlogModel({
//     title,
//     body,
//     createdOn: new Date()
//   })

//   newBlogPost.save(error => {
//     if (error) throw error
//     res.send({
//       sucess: true,
//       message: 'Blog saved successfuly'
//     })
//   })
// })

// app.get('/blog/:id', async (req, res) => {
//   const id = req.params.id
//   const blogPost = await BlogModel.findById(id)
//   res.send(blogPost)
// })

// app.put('/blog/:id', async (req, res) => {
//   const id = req.params.id
//   const title = req.body.title
//   const body = req.body.body
//   await BlogModel.findByIdAndUpdate(id, { title, body, editedOn: new Date() })
//   res.send({ success: true, message: 'Blog was updated!' })
// })

// app.get('/messages', async (req, res) => {
//   const messages = await MessageModel.find({}).sort({ _id: -1 })
//   res.send(messages)
// })

// app.post('/messages', async (req, res) => {
//   const name = req.body.name
//   const email = req.body.email
//   const message = req.body.message
//   const newMessage = new MessageModel({
//     name,
//     email,
//     message,
//     sentOn: new Date()
//   })

//   newMessage.save(error => {
//     if (error) throw error
//     res.send({
//       success: true,
//       message: 'Message saved successfully!'
//     })
//   })
// })

app.listen(PORT, () => console.log(`Listening on PORT ${PORT}...`))
