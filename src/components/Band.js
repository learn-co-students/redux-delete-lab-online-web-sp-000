import React, { Component } from 'react';

class Band extends Component {

  render() {
    return(
      <div>
        <li>{this.band.name}</li>
        <button>Delete</button>
      </div>
    );
  }
};

export default Band;
