import React from 'react'
import Band from '../components/Band'



const Bands = (props) => {
  const bands = props.bands.map(band => <Band key={band.id} band={band} deleteBand={props.deleteBand}/>) 
  // renderBands = () => this.props.bands.map((band, id) => <Band delete={this.props.delete} key=
  // {id} text={band}/> )
  console.log("bands component", props)
  return (
    <div>
    {bands} 
   
    
    </div>

 )


}

export default Bands