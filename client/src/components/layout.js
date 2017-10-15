import React from 'react'
import { Route, NavLink } from 'react-router-dom'

import ProductsLayout from './products/layout'
import './layout.css'

const links = [
  { to: '/', exact: true, className: 'item', children: 'Home' },
  { to: '/products', className: 'item', children: 'Products' },
  {
    to: '/', className: 'item logo',
    children: <img src="http://wall--art.com/wp-content/uploads/2014/10/shopping-bag-icon-black-and.png" />
  },
  { to: '/about', className: 'item', children: 'About'},
  { to: '/contact', className: 'item', children: 'Contact'}
]

const routes = [
  { path: '', exact: true },
  { path: '/products', component: ProductsLayout },
  { path: '/about' },
  { path: '/contact' }
]

const ShopLayout = ({ match }) => (
  <div>
    <div className="ui fixed borderless top menu">
      <div className="center menu">
        {links.map((link, index) => (
          <NavLink key={index} {...link} activeClassName="active" />
        ))}
      </div>
    </div>
    <div className="ui container content" style={{paddingTop: 100}}>
      {routes.map((route, index) => (
        <Route key={index} {...route} />
      ))}
    </div>
  </div>
)

export default ShopLayout
