const express = require('express')
const path = require('path')
const logger = require('morgan')

const products = require('./routes/products')

const app = express()

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/products', products)
app.use((request, response, next) => {
  let error = new Error('not found')
  error.status = 404
  next(error)
})
app.use((error, request, response, next) => {
  const status = error.status || 500
  response.status(status).json({ error: error.message })
})

module.exports = app
