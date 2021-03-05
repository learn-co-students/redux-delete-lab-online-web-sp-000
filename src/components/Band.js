import React, { Component } from 'react'

class Band extends Component {
  render () {
    const { band, removeBand } = this.props

    return (
      <li>
        <p>{band.name}</p>
        <button onClick={() => removeBand(band.id)}>Remove</button>
      </li>
    )
  }
};

export default Band
