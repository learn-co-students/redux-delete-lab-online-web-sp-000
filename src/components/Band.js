import React, { Component } from 'react';

class Band extends Component {

  render() {
    return(
      <div>
        <ul>
          <li>{this.props.band.name} <button onClick={e=>this.props.deleteBand(this.props.band.id)}>Delete</button></li>
        </ul>
      </div>
    );
  }
};

export default Band;
