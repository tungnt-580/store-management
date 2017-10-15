import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import Input from './input'

const fields = [
  { type: 'text', name: 'name', label: 'Product name' },
  { type: 'text', name: 'type' , label: 'Product type'},
  { type: 'number', name: 'price', label: 'Price' },
  { type: 'number', name: 'quantity', label: 'Quantity' }
]

class ProductForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      product: { name: '', type: '', price: '', quantity: '' },
      redirect: false
    }

    this.changeField = this.changeField.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    const { id } = this.props

    if (!id) return
    fetch(`/api/v1/products/${id}`)
      .then(res => res.json())
      .then(data => {
        this.setState({ product: data })
      })
  }

  render() {
    const { product, redirect } = this.state

    if (redirect) return <Redirect to="/admin/products" />

    return (
      <form className="ui form" onSubmit={this.handleSubmit}>
        {fields.map((field, index) => (
          <div key={index} className="field">
            <label>{field.label}</label>
            <Input {...field} value={product[field.name]} onChange={this.changeField} />
          </div>
        ))}
        <input type="submit" className="ui basic secondary button" value="Submit" />
      </form>
    )
  }

  changeField(name, value) {
    let changedProduct = this.state.product
    changedProduct[name] = value
    this.setState({ product: changedProduct })
  }

  handleSubmit(e) {
    const { method, action } = this.props

    e.preventDefault()
    fetch(action, {
      method: method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(this.state.product)
    }).then(res => {
      if (res.ok) this.setState({ redirect: true })
    })
  }
}

export default ProductForm
