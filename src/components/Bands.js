import React from 'react';
import Band from './Band'

// class Bands extends React.Component {
//     render() {
//         return (
//             <ul>
//                 {this.props.bands.map((band) => <Band key={band.id} name={band.name} id={band.id} deleteBand={this.props.deleteBand}/>)}
//             </ul>
//         )
//     }
// }

const Bands = props => {
    const bands = props.bands.map(band => <Band key={band.id} name={band.name} id={band.id} deleteBand={props.deleteBand} />)

    return (
        <div>
            {bands}
        </div>
    )
}

export default Bands;