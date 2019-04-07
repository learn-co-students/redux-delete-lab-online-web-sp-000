import React, { Component } from 'react';
import Band from './Band';

const Bands = props => {
  console.log(props.bands)
  const bands = props.bands.map(band => <Band key={band.id} {...band} deleteBand={props.deleteBand}/>)
 
    return(
      <div>
        {bands}
      </div>
    );
 
};

export default Bands;