import React from 'react'
import Band from './Band.js'

const Bands = (props) => {
    console.log("Inside bands")
    console.log(props)
    return(props.bands.map((band) => 
    <div key={band.id}>
        <Band content={band} id={band.id} delete={props.delete}/>
    </div>
    ))
}
export default Bands