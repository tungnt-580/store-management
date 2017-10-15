import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ProductForm from './form.js'

class ProductsEdit extends Component {
  render() {
    const { match } = this.props

    return (
      <div className="ui grid">
        <div className="row">
          <h1 className="ui header">
            Edit Product
            <Link to='/admin/products' className="ui basic button right floated">
              <i className="chevron left icon"></i>
              Back
            </Link>
          </h1>
        </div>
        <div className="row">
          <ProductForm method="put" action={`/api/v1/products/${match.params.id}`} id={match.params.id} />
        </div>
      </div>
    )
  }
}

export default ProductsEdit;
