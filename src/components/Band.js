import React, { Component } from 'react';

class Band extends Component {

  handleOnClick = () => {
    this.props.deleteBand(this.props.id)
  }

  render(){
    return(
      <div>
        <li>
        <span>{this.props.name}</span>
        <button onClick={this.handleOnClick}>Gwar</button>
        </li>
      </div>
    )
  }
};

export default Band;
