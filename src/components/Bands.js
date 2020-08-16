import React, { Component } from 'react';
import Band from './Band'

class Bands extends Component {
  renderBands = () => this.props.bands.map(band => 
  <Band 
    key={band.id} band={band} deleteBand={this.props.deleteBand}
  />)

  render() {
    return (
      <ul>
        {this.renderBands()}
      </ul>
      )
  }
}

export default Bands