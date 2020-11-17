import React, { Component } from 'react';
import Band from './Band';

class Bands extends Component {

  render() {
    const bands = this.props.bands.map((band,idx) => {
        return <Band band={band} deleteBand={this.props.deleteBand} />
    });
    return (
      <div>
          <ul>
            {bands}
          </ul>
      </div>
    );
  }
};

export default Bands;