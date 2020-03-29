import React, { Component } from 'react';
import Band from './Band'

const Bands = props => {
    const bands = props.bands.map(band => <Band key={band.id} {...band} deleteBand={props.deleteBand} />)

    return (
    <div>
        {bands}
    </div>
    )
}
export default Bands;

/*
Objective:
Create a new Bands component.

This should be a functional component and will handle the rendering
of all Band components from a list of bands provided as props.
*/
