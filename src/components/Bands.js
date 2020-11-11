import Band from './Band'
import React from 'react'

class Bands extends React.Component {

    render() {
        let bands = this.props.bands.map(function (band) {
            return (
                <Band band={band} key={band.id} deleteBand={() => this.props.deleteBand(band.id)} />
            )
        })
        
        return (
            <ul>{bands}</ul>
        )
    }
}

export default Bands