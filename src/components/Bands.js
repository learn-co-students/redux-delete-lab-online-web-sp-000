import React from 'react'
import Band from './Band'
import { render } from 'enzyme'

const Bands = (props) => {

    const renderBands = props.bands.map((band, idx) => <Band key={idx} band={band.name} bandId={band.id} delete={props.delete} />)

    return (
        <div>
            {renderBands}
        </div>
        )
}


export default Bands