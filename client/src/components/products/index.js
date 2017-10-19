import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { fetchShopProducts } from '../../actions'
import ProductsGrid from './grid'
import ProductsList from './list'

class ProductsIndex extends Component {
  constructor() {
    super()

    this.state = {
      view: 'grid',
      search: ''
    }

    this.changeViewType = this.changeViewType.bind(this)
    this.handleChangeSearchInput = this.handleChangeSearchInput.bind(this)
  }

  componentDidMount() {
    this.props.fetchShopProducts('')
  }

  render() {
    const { view, search } = this.state
    const products = this.props.shopProducts

    return (
      <div className="sixteen wide column">
        <div className="ui grid">
          <div className="four wide column">
            <h1 className="ui header">
              <img src="https://d30y9cdsu7xlg0.cloudfront.net/png/23041-200.png" className="image" alt=""/>
              Products
            </h1>
          </div>
          <div className="eight wide column middle aligned">
            <div className="ui icon input" style={{width: '100%'}}>
              <input type="text" placeholder="Search..." className="green" value={search}
                onChange={this.handleChangeSearchInput}/>
              <i className="search icon"></i>
            </div>
          </div>
          <div className="four wide column middle aligned" align="right">
            <div className="ui buttons">
              <button className={`ui green button ${view !== 'grid'? 'basic' : ''}`}
                onClick={() => this.changeViewType('grid')}>
                <i className="grid layout icon"></i>
                Grid
              </button>
              <button className={`ui green button ${view !== 'list'? 'basic' : ''}`}
                onClick={() => this.changeViewType('list')}>
                <i className="list layout icon"></i>
                List
              </button>
            </div>
          </div>
        </div>
        {view === 'grid' && <ProductsGrid products={products}/>}
        {view === 'list' && <ProductsList products={products}/>}
      </div>
    )
  }

  changeViewType(type) {
    this.setState({view: type})
  }

  handleChangeSearchInput(e) {
    const searchInput = e.target.value
    this.setState({ search: searchInput })
    this.props.fetchShopProducts(searchInput)
  }
}

function mapStateToProps({ shopProducts }) {
  return { shopProducts }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchShopProducts }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsIndex)
