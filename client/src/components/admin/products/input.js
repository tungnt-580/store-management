import React, { Component } from 'react'

class Input extends Component {
  constructor(props) {
    super(props)

    this.handleChange = this.handleChange.bind(this)
  }

  render() {
    const { type, name, value, placeholder } = this.props
    return (
      <input type={type} value={value} name={name} placeholder={placeholder} onChange={this.handleChange} />
    )
  }

  handleChange(e) {
    this.props.onChange(this.props.name, e.target.value)
  }
}

Input.defaultProps = {
  type: 'text',
  value: '',
  name: '',
  placeholder: ''
}

export default Input
