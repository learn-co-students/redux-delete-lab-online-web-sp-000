import React, { Component } from 'react';

class Band extends Component {
    deleteBand = () => {
    this.props.deleteBand(this.props.id)
  }

  render() {
    return(
      <div>
         <li>{this.props.name}</li>
         <button onClick={this.deleteBand}>Delete</button>        
      </div>
    );
  }
};

export default Band;
