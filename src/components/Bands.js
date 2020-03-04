import React from 'react'
import Band from './Band'

const Bands = props =>{
  
    return props.bands.map((band,id)=><Band key={id} band={band} deleteBand={props.deleteBand}/>)
}

export default Bands;