import React from 'react'

const ProductsGrid = ({ products }) => (
  <div className="ui four column stackable doubling grid">
    {products.map((product, index) => (
      <div key={index} className="column">
        <a href="#" className="ui card">
          <div className="content">
            <div className="header">{product.name}</div>
            <div className="meta">
              <span className="category">{product.type || 'Uncategoried'}</span>
            </div>
          </div>
          <div className="image">
            <img src="https://www.customink.com/mms/images/catalog/styles/4600/catalog_detail_image_large.jpg" alt=""/>
          </div>
          <div className="content">
            <div className="header" align="center">${product.price}</div>
          </div>
        </a>
      </div>
    ))}
  </div>
)

export default ProductsGrid
