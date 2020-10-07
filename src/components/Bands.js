import React from 'react';
import Band from './Band';

const Bands = props => {
    return (
        <div>
            {props.bands.map(band => 
                <Band key={band.id} band={band} dispatch={props.dispatch} />
                )}
        </div>
    )
}

export default Bands;