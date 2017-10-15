var mongoose = require('mongoose')
var Schema = mongoose.Schema

var productSchema = new Schema({
  name: { type: String, required: true },
  type: String,
  description: String,
  price: Number,
  quantity: Number,
  preview: String,
  images: [String]
});

var productModel = mongoose.model('Product', productSchema)

module.exports = productModel
