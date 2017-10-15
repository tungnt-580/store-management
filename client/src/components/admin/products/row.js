import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class ProductRow extends Component {
  constructor() {
    super();

    this.handleClickDelete = this.handleClickDelete.bind(this)
  }

  render() {
    const { row_index, name, type, price, quantity, _id } = this.props.data

    return (
      <tr>
        <td>{row_index}</td>
        <td>
          <Link to={`/admin/products/${_id}/edit`}><h4 className="ui image header">
            <img src="https://www.customink.com/mms/images/catalog/styles/4600/catalog_detail_image_large.jpg" className="ui mini rounded image" alt=""/>
            <div className="content">
              {name}
            </div>
          </h4></Link>
        </td>
        <td>{type}</td>
        <td>${price}</td>
        <td>{quantity}</td>
        <td>
          <div className="ui icon buttons">
            <Link to={`/admin/products/${_id}/edit`} className="ui basic secondary button">
              <i className="write icon"></i>
            </Link>
            <button className="ui basic negative button" onClick={this.handleClickDelete}>
              <i className="trash icon"></i>
            </button>
          </div>
        </td>
      </tr>
    )
  }

  handleClickDelete() {
    this.props.onClickDelete(this.props.data._id);
  }
}

export default ProductRow
