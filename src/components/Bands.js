import React from 'react'
import Band from '../components/Band'

const Bands = (props) => {
  console.log(props.bands)
    return (
    <div>
  
    {props.bands.map(band => {

        <Band band={band} key={band.id}/>
    })}
    </div>

    )


}

export default Bands