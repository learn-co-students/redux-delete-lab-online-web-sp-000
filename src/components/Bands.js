import React, { Component } from 'react';
import Band from "./Band";

class Bands extends Component {

    renderBands = () => this.props.bands.map(band => {
        console.log(this.props);
        return (<Band key={band.id} id={band.id} name={band.name} deleteBand={this.props.deleteBand}/>)
    }, this)
    
    render () {
        return (
            <ul>
                {this.renderBands()}
            </ul>
        )
    }
}

export default Bands;
