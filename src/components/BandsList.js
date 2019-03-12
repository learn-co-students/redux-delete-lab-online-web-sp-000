import React from 'react';
import Band from './Band';

const BandsList = props => {
  const bands = props.bands.map(band => <Band key={band.id} name={band.name} id={band.id} deleteBand={props.deleteBand} />)

  return (
    <div>
      <ul>
        {bands}
      </ul>
    </div>
  )
}

export default BandsList;
