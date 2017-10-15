var express = require('express')
var bodyParser = require('body-parser')
var helmet = require('helmet')
var HttpError = require('http-errors')
var apiErrorHandler = require('api-error-handler')

var productsRoute = require('./routes/products')

var app = express()

require('./config/database')
require('./models/product')

app.use(helmet.hidePoweredBy())
app.use(bodyParser.json())

app.use('/api/v1/products', productsRoute)

app.use((req, res, next) => {
  next(new HttpError.NotFound())
})

app.use(apiErrorHandler())

module.exports = app
