import React, { Component } from 'react';
import Band from './Band';

class Bands extends Component {

  render() {
    return(
      <div>
        <ul>
        {this.props.bands.map( band => (
            <Band name={band.name} id={band.id} delete={this.props.delete}/>
        ))}
        </ul>
      </div>
    );
  }
};

export default Bands;
