import React from 'react'
import Band from './Band'

export default function Bands(props) {
    return (
        <div>
            {props.bands.map(band => <Band key={band.id} band={band} deleteBand={props.deleteBand}/>)}
        </div>
    )
}
