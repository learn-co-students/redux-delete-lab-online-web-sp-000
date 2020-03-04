import React, { Component } from 'react';

class Band extends Component {

  renderBands = (bands)=>(bands.map((b,id)=><li key={id}>{b}</li>) )
      


  render() {
    return(
      <div>
        {this.renderBands(this.props.bands)}
      </div>
    );
  }
};

export default Band;
