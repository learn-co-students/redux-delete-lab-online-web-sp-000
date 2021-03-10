import React, { Component } from 'react';

class Band extends Component {

  handleClick = event => {
    event.preventDefault()
    this.props.deleteBand(this.props.band.id)
  }

  render() {
    return(
      <div>
        {/* Band Component */}
        
          <span>{this.props.band.name}</span><button type='delete' onClick={(event) => this.handleClick(event)}>DELETE</button>
        
      </div>
    );
  }
};

export default Band;
