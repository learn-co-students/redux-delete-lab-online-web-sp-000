import React, { Component } from 'react';

class Band extends Component {

  render() {
    console.log("Band", this.props)
    return(
      <div>
        <li>{this.props.band.name}</li><button onClick={() => this.props.delete(this.props.band.id)}>DELETE</button>
      </div>
    );
  }
};

export default Band;
