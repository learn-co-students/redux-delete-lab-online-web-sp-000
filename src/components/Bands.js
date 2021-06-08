import React from 'react'
import Band from "./Band";

const Bands = props => {
    const bands = props.bands.map((band, idx) => <Band key={idx} band={band} delete={props.delete} />)

    return <div>{bands}</div>
}

export default Bands