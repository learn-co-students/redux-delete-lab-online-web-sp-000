import React from 'react'
import Band from './Band'

const Bands = props => {
    return props.bands.map(band => <Band key={band.id} {...band} band={band.name} delete={props.delete} />)
}

export default Bands;