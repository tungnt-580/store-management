import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import ProductRow from './row'
import { fetchAdminProducts } from '../../../actions'

class ProductsIndex extends Component {
  constructor(props) {
    super(props)

    this.productNodes = this.productNodes.bind(this)
  }

  componentDidMount() {
    this.props.fetchAdminProducts()
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
    return this.props.products.map((product, index) => (
      <ProductRow
        key={product._id}
        data={{...product, row_index: index + 1}}
        onClickDelete={this.deleteProduct}
      />
    ))
  }
}

function mapStateToProps({ adminProducts }) {
  return { products: adminProducts }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchAdminProducts }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsIndex)
