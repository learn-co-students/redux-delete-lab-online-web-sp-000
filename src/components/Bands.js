import React from 'react'
import Band from './Band.js'

export default class Bands extends React.Component{

    render(){
        return (
            <div>
                {this.props.bands.map(band=> <Band key={band.id} band={band} delete={this.props.delete}/>)}
            </div>
        )
    }
}
