import React, { Component } from 'react';
import Band from './Band';

class Bands extends Component {

    renderBands = () => (
        this.props.bands.map((band) => <Band key={band.id} id={band.id} name={band.name} delete={this.props.deleteBand} />)
    )

    render() {
        return (
          <div>
            <ul>{this.renderBands()}</ul>
          </div>
    )}
}

export default Bands