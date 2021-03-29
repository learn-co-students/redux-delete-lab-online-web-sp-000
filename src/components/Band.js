import React, { Component } from 'react';

class Band extends Component {

  render() {
    return(
      <div>
        <li key={this.props.band.id}>{this.props.band.name}</li><button onClick={()=> this.props.deleteBand(this.props.band.id) }>Delete Me</button>
      </div>
    );
  }
};

export default Band;
