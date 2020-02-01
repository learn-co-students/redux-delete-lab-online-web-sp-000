import React from 'react';
import Band from './Band';


const Bands = props => (
  <ul>
  {props.bands.map(band => <Band band={band} key={band.id} deleteBand={props.deleteBand}/> )}
  </ul>
)

export default Bands;
