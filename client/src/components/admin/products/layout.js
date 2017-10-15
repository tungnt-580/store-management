import React from 'react'
import { Route } from 'react-router-dom'
import ProuductsIndex from './index'
import ProductsNew from './new'
import ProductsEdit from './edit'

const routes = [
  { path: '', exact: true, component: ProuductsIndex },
  { path: '/new',  component: ProductsNew },
  { path: '/:id/edit', component: ProductsEdit }
]

const ProductsLayout = ({ match }) => (
  <div className="row">
    {routes.map((route, index) => (
      <Route key={index} path={match.url + route.path} exact={route.exact} component={route.component} />
    ))}
  </div>
)

export default ProductsLayout
