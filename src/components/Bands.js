import React from 'react';
import Band from './Band';
import { render } from 'enzyme';

const Bands = props => {
    const bands = props.bands.map(band => <Band key={band.id} {...band} dispatch={props.dispatch}/>)

    return(
        <div>{bands}</div>
    )
}

export default Bands; 