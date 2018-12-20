import React, { Component } from 'react';

class Band extends Component {

  render() {
    console.log(this.props)
    return(

      <div>
        <li>{this.props.band.name}</li>
        <button onClick={ () => this.props.deleteBand(this.props.band.id)}>
          DELETE
        </button>
      </div>
    );
  }
};

export default Band;
