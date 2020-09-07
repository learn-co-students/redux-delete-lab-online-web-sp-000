import React, { Component } from 'react';

class Band extends Component {

  constructor(props) {
    super()
    this.props = props
  }

  render() {
    return(
      <div>
        Band Component
        <span>{this.props.bandName}</span><button onClick={() => this.props.delete(this.props.id)}>DELETE</button>
      </div>
    );
  }
};

export default Band;
