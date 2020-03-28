import React, { Component } from 'react';

class Band extends Component {

  render() {
    return(
      <li>
        {this.props.bandName}
        <button id={this.props.bandId} onClick={() => this.props.handleClick(this.props.bandId)}>x</button>
      </li>
    );
  }
};

export default Band;
