import React from 'react';
import Band from './Band';

let bandInfo;

const Bands = props => {
    bandInfo = props.bands.map(band => <Band key={band.id} band={band} delete={props.delete} />)

    return (
        <div className="bands">
            {bandInfo}
        </div>
    )
}

export default Bands;