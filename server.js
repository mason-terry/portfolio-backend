const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const routes = require('./routes')
const app = express()
const PORT = 8081 || process.env.PORT

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/portfolio')
const db = mongoose.connection
db.on('error', console.error.bind(console, 'Connection Error'))
db.once('open', () => console.log('Connection Succeeded'))

app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(cors())

app.use(routes)

app.listen(PORT, () => console.log(`Listening on PORT ${PORT}...`))
