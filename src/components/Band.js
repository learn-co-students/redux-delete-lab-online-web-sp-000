import React, { Component } from 'react';

class Band extends Component {
  handleClick = () => {
    this.props.dispatch({type: 'DELETE_BAND', id: this.props.id})
  }

  render() {
    return(
      <div>
        <li>{this.props.name}</li>
        <button onClick={this.handleClick}>DELETE</button>
      </div>
    );
  }
};

export default Band;
