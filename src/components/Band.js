import React, { Component } from 'react';

class Band extends Component {

  storage = null
  render() {
    return(
      <ul key={this.props.id}>
        -------------------
        <li><button onClick={this.props.delete(this.props.id)}>DELETE</button></li>
        -------------------
      </ul>
    );
  }
};

export default Band;
