import React from 'react';
import Band from './Band';

const Bands = props => {
  const bands = props.bands.map(band =>
    <Band deleteBand={props.deleteBand} key={band.id} band={band} />
  );

  return (
    <div>
      <ul>
        {bands}
      </ul>
    </div>
  );
}

export default Bands;