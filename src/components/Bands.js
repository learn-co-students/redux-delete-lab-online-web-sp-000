import React from 'react'
import Band from './Band'

const Bands = ({ bands, removeBand }) => {
  return (
    <div>
      { bands.map((band, index) => <Band key={band.id} band={band} removeBand={removeBand} />) }
    </div>
  )
}

export default Bands
