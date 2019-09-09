import React, { Component } from 'react';

class Band extends Component {

  handleClick = () => {
    console.log("this is the id:")
    console.log(this.props.id)
    this.props.deleteBand(this.props.id)
  }

  render() {
    return(
      <div>
        <li>{this.props.band.name}</li>
        <button onClick={this.handleClick}>DELETE</button>
      </div>
    );
  }
};

export default Band;
