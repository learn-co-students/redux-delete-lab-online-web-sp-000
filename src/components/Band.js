import React, { Component } from 'react';

class Band extends Component {

  render() {
    return(
      <div>
        <li>{this.props.band}</li>
        <button onClick={() => this.props.delete()}>X</button>        
      </div>
    );
  }
};

export default Band;
