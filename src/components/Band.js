import React, { Component } from 'react'

class Band extends Component {
  render () {
    return (
      <li key={this.props.band.id}>
        {this.props.band.name}
        <button onClick={e => this.props.removeBand(this.props.band.id)}>
          delete
        </button>
      </li>
    )
  }
}

export default Band
