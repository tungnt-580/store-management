import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css'

import AdminLayout from './components/admin/layout'
import ShopLayout from './components/layout'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/admin" component={AdminLayout} />
          <Route path="/" component={ShopLayout} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App
