import React from 'react';

const Band = props => {
  return (
    <div>
      <li>{props.band.name}</li>
      <button onClick={() => props.delete(props.band.id)}>DELETE</button>
    </div>
  );
}

// class Band extends Component {

//   render() {
//     return(
//       <div>
//         <li>{this.props.band.name}</li>
//       </div>
//     );
//   }
// };

export default Band;

// change this to a presentational component 
 