import React, { Component } from 'react';

class Band extends Component {
  handleDelete = () => { return this.props.deleteBand(this.props.band.id) };

  render() {
    return(
      <div>
        <li>
          <p>Name: {this.props.band.name}</p>
          <button onClick={this.handleDelete}>Delete</button>

        </li>
      </div>
    );
  }
};

export default Band;
