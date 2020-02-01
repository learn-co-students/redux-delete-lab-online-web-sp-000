import React, { Component } from 'react';
import Band from './Band';

class Bands extends Component {
    renderBands = () => {
        return(this.props.bands.map(band => <Band band={band} deleteBand={this.props.deleteBand}/>))
    }
    render(){
        return(
            <div>
                {/* {console.log('in bands comp', this.props.deleteBand)} */}
                {this.renderBands()}
            </div>
        )
    }
}

export default Bands;