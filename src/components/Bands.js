import React from 'react';
import Band from './Band';

const Bands = (props) =>{
  console.log('Bands props.bands[0]', props.bands[0])

  return (
  <div>
    {props.bands.map(singleBand => <Band band={singleBand} />)}
  </div>
  )

}

export default Bands