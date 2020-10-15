import React, { Component } from 'react';
import Bands from './Bands';

class Band extends Component {

  render() {
    return(
      <div>
        <li key={this.props.id}>{this.props.name}</li>
        <button onClick={() => this.props.removeBand(this.props.id)}>DELETE</button>
      </div>
    );
  }
};

export default Band;
