import React, { Component } from 'react';

class Band extends Component {

  render() {
    console.log('in Band render, props', props)
    return(
      <div>
        <span>{props.band.bandName}</span><button onClick={() => this.props.delete(this.props.band.id)}>DELETE</button>
      </div>
    );
  }
};

export default Band;
