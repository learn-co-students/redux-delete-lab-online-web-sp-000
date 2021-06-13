import React, {Component} from 'react';
import Band from "./Band"


  const Bands = props => {
      const bands = props.bands.map(band => <Band deleteBand={props.deleteBand} key={band.id} {...band} />)
  
  return (
    <ul>
      {bands}
      </ul>
  )

  }

export default Bands;