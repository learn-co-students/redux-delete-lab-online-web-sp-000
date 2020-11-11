import React, { Component } from 'react';

class Band extends Component {

  render() {
    debugger
    return(
      <li>{this.props.band.name}<button onClick={this.props.deleteBand}>DELETE</button></li>
        
    );
  }
};

export default Band;
