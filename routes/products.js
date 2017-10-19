var express = require('express')
var router = express.Router()
var Product = require('../models/product')

router.use('/:id', (req, res, next) => {
  Product.findOne({_id: req.params.id}, (err, product) => {
    if (err) return next(err)
    if (!product) return res.status(404).json({message: 'Product not found'})
    res.locals.product = product
    next()
  })
})

router.get('/', (req, res, next) => {
  const term = req.query.term || ''
  Product.find({name: new RegExp(term, 'i')}, (err, products) => {
    if (err) return next(err)
    res.json(products)
  });
})

router.post('/', (req, res, next) => {
  Product.create(productParams(req.body), (err, product) => {
    if (err) return res.status(422).json(err)
    res.status(201).json(product)
  })
})

router.get('/:id', (req, res, next) => {
  res.json(res.locals.product)
})

router.put('/:id', (req ,res, next) => {
  res.locals.product.set(productParams(req.body))
  res.locals.product.save((err, product) => {
    if (err) return res.status(422).json(err)
    res.status(201).json(product)
  })
})

router.delete('/:id', (req, res, next) => {
  res.locals.product.remove((err) => {
    if (err) return next(err)
    res.json({message: 'success'})
  })
})

function productParams(params) {
  fields = ['name', 'type', 'price', 'quantity']
  return fields.reduce((result, field) => {
    if (params.hasOwnProperty(field)) result[field] = params[field]
    return result
  }, {})
}

module.exports = router
