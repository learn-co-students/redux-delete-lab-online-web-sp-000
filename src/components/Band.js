import React, { Component } from 'react';

class Band extends Component {

  handleOnClick = (event) => {
    event.preventDefault()

    this.props.deleteBand(this.props.band.id)
  }


  render() {
    return(
      <div>
        <li>
          {this.props.band.name} <button onClick={this.handleOnClick}>DELETE</button>
        </li>
      </div>
    );
  }
};

export default Band;