import React, { Component } from 'react';

class Band extends Component {
  
  render() {    
    const {band, removeBand} = this.props
    return(
      <div>
        <li><span>{band.name}</span><button onClick={ () => removeBand(band.id)} >Delete</button></li>
      </div>
    );
  }
};

export default Band;
