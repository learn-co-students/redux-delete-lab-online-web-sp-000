import React, { Component } from 'react';

class Band extends Component {

  render() {
    return(
      <li>
        <span>{this.props.band.name}</span>
        <button
          type="button"
          onClick={() => {this.props.remove(this.props.band.id)}}
        >Delete</button>
      </li>
    );
  }
};

export default Band;
