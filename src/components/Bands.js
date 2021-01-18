import React from 'react'
import Band from './Band'

const Bands = props => {
    console.log(props.bands[0])
    return props.bands.map(band => <Band key={band.id} band={band.name} delete={props.delete} />)
}

export default Bands;