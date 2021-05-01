import React from 'react'
import Band from './Band'

// renders all band components from list of band provided as props
const Bands = props => {
    const bands = props.bands.map(band => <Band key={band.id} {...band} deleteBand={props.deleteBand}/>)

    return (
        <div>{bands}</div>
    )    
}

export default Bands