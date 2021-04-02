import React, { Component } from 'react';
import Band from './Bands'

class Bands extends Component {

    renderBands = () => this.props.bands.map(band => <div><Band key={band.id} id={band.id} name={band.name} delete={this.props.delete} /></div>)

    render() {
        debugger
        return (
            <div>
                {this.renderBands()}
            </div>
        );
    }
}

export default Bands;
