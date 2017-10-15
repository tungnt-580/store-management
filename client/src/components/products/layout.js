import React from 'react'
import { Route } from 'react-router-dom'

import ProductsIndex from './index'

const routes = [
  { path: '', exact: true, component: ProductsIndex },
  { path: '/:id' }
]

const ProductsLayout = ({ match }) => (
  <div className="ui stackable doubling grid">
    {routes.map((route, index) => (
      <Route key={index} path={match.url + route.path} exact={route.exact} component={route.component} />
    ))}
  </div>
)

export default ProductsLayout
