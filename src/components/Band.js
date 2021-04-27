import React, { Component } from 'react';

class Band extends Component {

  handleClick = (e) => {
    e.preventDefault()
    this.props.deleteBand(this.props.id)
  }

  render() {
    debugger
    return(
      <div>
        <li>{this.props.name}</li>
        <button onClick={this.handleClick}>DELETE</button>
      </div>
    );
  }
};

export default Band;
