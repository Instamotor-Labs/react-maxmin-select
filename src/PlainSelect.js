import React from 'react'

class PlainSelect extends React.Component {
  render () {
    return (
      <select
        value={this.props.value}
        className={'Bdrs(4px) ' + this.props.className}
        onChange={this.props.onChange}
        style={{width: this.props.width}}
            >
        {this.props.children}
      </select>
    )
  }
}

export default PlainSelect
