import React, { Component } from 'react';

class Band extends Component {

  render() {
    return(
      <div>
        <li key={this.props.key}><span>{this.props.band.name}</span><button onClick={() => this.props.delete(this.props.band)}>DELETE</button></li>
      </div>
    );
  }
};

export default Band;
