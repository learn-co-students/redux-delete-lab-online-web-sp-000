import React, { Component } from 'react';
import Band from './Band';

class Bands extends Component {

  render() {
    return (
      <div>
        <h1>Bands</h1>
        <ul>
          {this.props.bands.map(band =>
            <Band key={band.id} band={band} deleteBand={() => this.props.deleteBand(band.id)} />
          )}
        </ul>
      </div>
    );
  }
};

export default Bands;
