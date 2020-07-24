import React, { Component } from 'react'
import Band from './Band'


class Bands extends Component {
   
    renderBands = () => {
        // console.log(this.props.bands)
    this.props.bands.map((band) => <li>{band.name}</li>)
    }
    // <Band key={band.id} band={band.name}

    render(){
        return(
            <div>
                 {this.renderBands()}
            </div>
        )
    }
}

export default Bands 