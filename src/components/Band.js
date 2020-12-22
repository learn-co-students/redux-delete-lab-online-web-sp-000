import React, { Component } from 'react';

class Band extends Component {

  render() {
    return(
      <li>
        {this.props.band.name}<button onClick={event => this.props.delete(this.props.band.id)} />
      </li>
    );
  }
};

export default Band;
