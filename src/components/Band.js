  
import React, { Component } from 'react';

class Band extends Component {

  render() {
    
    return(
      <li key={this.props.band.id}>
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