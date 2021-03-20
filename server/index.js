const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const cookieParser = require('cookie-parser')

dotenv.config()

// server

const app = express()

const PORT = process.env.PORT || 5001

app.listen(PORT, () => console.log(`Server started on port: ${PORT}`))

app.use(express.json())
app.use(cookieParser())

// database

mongoose.connect(process.env.DB_CONNECTION_SETUP, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, (err) => {
  if (err) return console.error(err)
  console.log('Conectado ao banco de dados')
})

// routes

app.use('/auth', require('./router/userRoute'))
app.use('/edit', require('./router/editRouter'))
