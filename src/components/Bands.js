import React, { Component } from 'react';
import Band from './Band';

class Bands extends Component {

  render() {
    const bands = this.props.bands.map(band => <Band deleteBand={this.props.deleteBand} key={band.id} {...band}/>)
    return(
      <div>
        <ul>{bands}</ul>
      </div>
    );
  }
};

export default Bands;
