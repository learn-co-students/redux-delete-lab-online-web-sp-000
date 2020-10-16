import React, {Component} from 'react';
import Band from './Band';

// class Bands extends Component{
//   render(){
//     return(
//       <div>
//         {this.props.bands.map(band => <Band key={band.id} band={band} delete={this.props.delete} />)}
//       </div>
//     )
//   }
// }
const Bands = props => {
    const bands = props.bands.map(band => <Band key={band.id} {...band} delete={props.delete} />)

    return (
        <div>
            {bands}
        </div>
    )
}
export default Bands