import React from 'react';
import Band from './Band';

class Bands extends React.Component {

    render() {
        return (
            <ul>
                {this.props.bands.map((band, index) => <Band band={band} key={index} delete={this.props.delete} />)}
            </ul>
        )
    }

};

export default Bands;
