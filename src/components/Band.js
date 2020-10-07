import React, { Component } from 'react';

class Band extends Component {

  handleChange = () => {
    this.props.dispatch({type: 'DELETE_BAND', id: this.props.band.id})
  }

  render() {
    return (
      <div>
        <li>{this.props.band.name}</li>
        <button onClick={this.handleChange}>Delete</button>
      </div>
    );
  }
};

export default Band;