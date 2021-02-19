import React from 'react';
import Band from './Band'

const Bands = ({bands, removeBand}) => {
    return bands.map( band => {
        return (
            <Band key={band.id} band={band} removeBand={removeBand} />
        )
    })
}

export default Bands