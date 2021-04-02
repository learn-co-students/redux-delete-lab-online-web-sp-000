import React from 'react';

//class Band extends Component {

  //render() {
const Band = (props) => {
  return(
    <li>
      Band Component
      {props.band.name}<button onClick={() => props.delete(props.band.id)} >DELETE</button>
    </li>
  );
}


export default Band
