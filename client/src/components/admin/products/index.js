import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ProductRow from './row'

class ProductsIndex extends Component {
  constructor(props) {
    super(props)

    this.state = {
      products: []
    }

    this.productNodes = this.productNodes.bind(this)
    this.getProducts = this.getProducts.bind(this)
    this.deleteProduct = this.deleteProduct.bind(this)
  }

  componentDidMount() {
    this.getProducts();
  }

  render() {
    return (
      <div className="ui grid">
        <div className="row">
          <h1 className="ui header">
            Products
            <Link to='/admin/products/new' className="ui basic secondary button right floated">
              <i className="plus icon"></i>
              New product
            </Link>
          </h1>
        </div>
        <div className="row">
          <table className="ui celled table">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Type</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {this.productNodes()}
            </tbody>
          </table>
        </div>
      </div>
    )
  }

  productNodes() {
    return this.state.products.map((product, index) => (
      <ProductRow
        key={product._id}
        data={{...product, row_index: index + 1}}
        onClickDelete={this.deleteProduct}
      />
    ))
  }

  getProducts() {
    fetch('/api/v1/products', {
      method: 'get'
    }).then(res => res.json())
      .then((data) => {
        this.setState({ products: data })
      });
  }

  deleteProduct(id) {
    fetch(`/api/v1/products/${id}`, {
      method: 'delete'
    }).then((res) => {
      if (res.ok) this.setState({ products: this.state.products.filter(product => product._id !== id) })
    });
  }
}

export default ProductsIndex
