import React, { Component } from 'react';

class Band extends Component {

  handleClick = event => {
    this.props.delete(this.props.band.id);
  }

  render() {
    return(
      <li>
        {this.props.band.name}
        <button onClick={this.handleClick}>DELETE</button>
      </li>
    );
  }
};

export default Band;
