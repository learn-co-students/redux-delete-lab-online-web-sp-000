import React, { Component } from 'react';
import Band from './Band';

export default class Bands extends Component {
  render() {
    return(
      <div>
        {this.props.bands.map(band => {
          return <Band key={band.id} band={band} remove={this.props.remove} />
        })}
      </div>
    );
  }
}