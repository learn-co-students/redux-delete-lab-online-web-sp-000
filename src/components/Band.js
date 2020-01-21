import React, { Component } from 'react';

class Band extends Component {

  handleClick = () => {
    this.props.deleteBand(this.props.id)
  }

  render() {
    return(
      <div>
        Bands
        <ul>
          <li>{this.props.name}</li>
          <button onClick={this.handleClick}>DELETE</button>
        </ul>
      </div>
    );
  }
};

export default Band;
