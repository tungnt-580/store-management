import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ProductForm from './form.js'

class ProductsNew extends Component {
  render() {
    return (
      <div className="ui grid">
        <div className="row">
          <h1 className="ui header">
            New Product
            <Link to='/admin/products' className="ui basic button right floated">
              <i className="chevron left icon"></i>
              Back
            </Link>
          </h1>
        </div>
        <div className="row">
          <ProductForm method="post" action="/api/v1/products"/>
        </div>
      </div>
    )
  }
}

export default ProductsNew;
