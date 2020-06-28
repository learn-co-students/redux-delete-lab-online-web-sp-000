import React, { Component } from 'react';
import Band from "./Band";

class Bands extends Component {
    // constructor(props){
    //     super(props)

    // }
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

// const Bands = props => props.bands.map(band => 
//     <li>
//         <Band key={band.id} id={band.id} name={band.name} deleteBand={props.deleteBand}/>
//     </li>
// )

// function Bands(props) {
//     return props.bands.map(band => 
//         <li>
//             <Band key={band.id} name={band.name} deleteBand={props.deleteBand}/>
//         </li>
//     )
// }

export default Bands;