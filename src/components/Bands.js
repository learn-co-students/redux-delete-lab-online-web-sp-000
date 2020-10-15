import React, { Component } from 'react';
import Band from './Band';
import BandsContainer from './BandsContainer';

class Bands extends Component {

  render() {
    return(
      <div>
        <ul>
          {this.props.allBands.map((band) => 
            (<Band name={band.name} id={band.id} removeBand={this.props.removeBand}/>)
          )}
        </ul>
      </div>
    );
  }
};

export default Bands;