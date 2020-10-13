import React, { Component } from 'react';
import Band from './Band';

export default class Bands extends Component {
    render() {
        return (
            <div>
                {this.props.bands.map(band => <Band band={band} key={band.id} deleteBand={this.props.deleteBand} />)}
            </div>
        )
    }
}