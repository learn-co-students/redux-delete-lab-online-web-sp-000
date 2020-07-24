import React, { Component } from 'react'


class Bands extends Component {
   
    renderBands = (props) => {
        console.log(this.props.bands)
        this.props.bands.map((band) => <Band key={band.id} band={band.name}/>)
    }

    render(){
        return(
            <div>
                 {this.renderBands()}
            </div>
        )
    }
}

export default Bands 