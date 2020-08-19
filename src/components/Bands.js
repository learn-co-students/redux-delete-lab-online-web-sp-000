import React, { Component } from 'react';
import Band from './Band'

const Bands = props => {
    const bands = props.bands.map((band, id) => <Band key={id} {...band} deleteBand={props.deleteBand} />  )

    return (
        <div>
            {bands}
        </div>
    )
}

export default Bands;