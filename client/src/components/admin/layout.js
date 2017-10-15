import React from 'react'
import { Route, NavLink } from 'react-router-dom'
import ProductsLayout from './products/layout'

import './layout.css'

const routes = [
  { path: '', exact: true, title: 'Dashboard' },
  { path: '/products', component: ProductsLayout, title: 'Products' },
  { path: '/supports', title: 'Customers support' }
]

const AdminLayout = ({ match }) => (
  <div>
    <div className="ui fixed main borderless menu">
      <a href="#" className="header item">
        <img className="logo" src="https://cdn3.iconfinder.com/data/icons/shopping-solid-icons-vol-2/64/064-512.png" style={{marginRight: "1.5em"}}/>
        Tung shop Admin
      </a>
      <div className="ui right simple dropdown item">
        Tung Nguyen
        <i className="dropdown icon"></i>
        <div className="menu">
          <a className="item" href="#">Settings</a>
          <a className="item" href="#">Sign-out</a>
        </div>
      </div>
    </div>
    <div className="ui grid">
      <div className="row">
        <div className="column" id="admin-sidebar">
          <div className="ui secondary vertical fluid menu">
            {routes.map((route, index) => (
              <NavLink key={index} to={match.url + route.path} exact={route.exact} className="item" activeClassName="active">
                {route.title}
              </NavLink>
            ))}
          </div>
        </div>
        <div className="column" id="admin-content">
          {routes.map((route, index) => (
            <Route key={index} exact={route.exact} path={match.url + route.path} component={route.component} />
          ))}
        </div>
      </div>
    </div>
  </div>
)

export default AdminLayout
