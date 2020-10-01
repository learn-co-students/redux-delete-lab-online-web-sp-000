import React, { Component } from 'react';

class Band extends Component {

  handleDelete = () => {
    this.props.deleteBand(this.props.band.id)
  }
  render() {
    return(
      <div>
        <li key={this.props.band.id}>{this.props.band.name}</li><span><button onClick={this.handleDelete}>Delete</button></span>
      </div>
    );
  }
};

export default Band;
