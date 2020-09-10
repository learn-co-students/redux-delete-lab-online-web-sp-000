import React, { Component } from 'react';
import Band from "./Band";

class Bands extends Component {

  renderBands = () => {
    return this.props.bands.map(band => <Band band={band} delete={this.props.delete} key={band.id}/>)
  }

  render() {
    return(
      <ul>
        {this.renderBands()}
      </ul>
    );
  }
};

export default Bands;