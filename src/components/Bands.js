import React, { Component } from 'react';
import Band from './Band'

class Bands extends Component {
    showBands = () => {
        return this.props.bands.map(band => <Band bandId={band.id} bandName={band.name} handleClick={this.handleClick}/>)
    }

    handleClick = (id) => {
        this.props.removeBand(id)
    }

    render() {
        return(
            <div>
                <ul>
                    {this.showBands()}
                </ul>
            </div>
        );
    }
};

export default Bands;
