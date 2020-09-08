import React, { Component } from 'react';

class Band extends Component {

  render() {
    return(
      <li>
        <strong>{this.props.band.name}</strong>
        <br />
        <button onClick={() => this.props.deleteBand(this.props.band.id)}>Delete</button>
      </li>
    );
  }
};

export default Band;
