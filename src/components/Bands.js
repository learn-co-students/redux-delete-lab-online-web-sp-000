// import React, { Component } from 'react';
// import Band from './Band';

// class Bands extends Component {
//     renderBands = () => {
//         return(this.props.bands.map(band => <Band band={band} deleteBand={this.props.deleteBand}/>))
//     }
//     render(){
//         return(
//             <div>
//                 {this.renderBands()}
//             </div>
//         )
//     }
// }

// export default Bands; 
import React from 'react';
import Band from './Band'

const Bands = props => {
  const bands = props.bands.map(band => <Band key={band.id} {...band} dispatch={props.dispatch}/>)

  return (
    <div>
      {bands}
    </div>
  );

};

export default Bands; 