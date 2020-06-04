import React from 'react';
import Band from './Band';

const Bands = (props) =>{
  console.log('Bands props', props)
  //props.bands.map(singleBand => <Band {...singleBand} />)
  return (
  <div>
    {props.bands.map(singleBand => <Band delete={props.deleteBand} key={singleBand.id} band={singleBand} />)}
  </div>
  )

}

export default Bands