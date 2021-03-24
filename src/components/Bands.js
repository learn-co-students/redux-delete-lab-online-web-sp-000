import React, { Component } from 'react';
// import band component here
import Band from './Band';

class Bands extends Component {
   renderBands = () => {
      return this.props.bands.map( band => {
         return <Band deleteBand={this.props.deleteBand} 
                      key={band.id}
                      band={band} />
      })
   }
   render() {
      return (
         <div>
            <ul>
               {this.props.bands ? this.renderBands() : null}
            </ul>
         </div>
      )
   }
};

export default Bands;