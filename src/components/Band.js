import React, { Component } from 'react';

class Band extends Component {

  render() {
    // console.log(this.props)
    return(
      <div>
        <li>{this.props.name}<button onClick={() => this.props.delete(this.props.id)}>x</button></li>
      </div>
    );
  }
};

export default Band;