import React from 'react';


const Band = props =>{
  return(
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
//         <span>{this.props.name}</span><button onClick={() => {props.delete(props.name)}}>DELETE</button>
//       </div>
//     );
//   }
// };

export default Band;
