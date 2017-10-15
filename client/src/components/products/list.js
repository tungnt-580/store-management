import React from 'react'

const ProductsList = ({ products }) => (
  <div className="ui grid">
    <div className="twelve wide column">
      <div className="ui items">
        {products.map((product, index) => ([
          <div className="ui divider"></div>,
          <div className="item">
            <div className="ui small image">
              <img src="https://www.customink.com/mms/images/catalog/styles/4600/catalog_detail_image_large.jpg"/>
            </div>

            <div className="content">
              <a className="header">{product.name}</a>
              <span className="header right floated">${product.price}</span>
              <div className="meta">
                <span className="cinema">{product.type || 'Uncategoried'}</span>
              </div>
              <div className="description">
                <p>{product.description}</p>
              </div>
              <div className="extra">
                <div className="ui right floated green button">
                  <i className="add to cart icon"></i>
                  Add to cart
                </div>
                <div className="ui label">Limited</div>
                <div className="ui label">Trending</div>
              </div>
            </div>
          </div>
        ]))}
      </div>
    </div>
    <div className="four wide column">
    </div>
  </div>
)

export default ProductsList
