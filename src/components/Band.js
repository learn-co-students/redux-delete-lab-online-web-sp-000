import React, { Component } from 'react';

class Band extends Component {

  handleOnClick = () =>{
    this.props.deleteBand(this.props.band.id)
  }

  render() {
    return(
      <div>
        <li><span>{this.props.band.name}<button onClick={this.handleOnClick}>DELETE</button></span></li>
      </div>
    );
  }
};

export default Band;
