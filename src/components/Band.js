import React, { Component } from 'react';

class Band extends Component {

  handleOnClick = () => {

    this.props.deleteBand(this.props.id)
  }

  render() {
    debugger;
    return(
      <li>
        <p>{this.props.name}</p>
        <button onClick={this.handleOnClick}>DELETE BAND</button>
      </li>
    );
  }
};

export default Band;
