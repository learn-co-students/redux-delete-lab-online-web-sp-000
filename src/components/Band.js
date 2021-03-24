import React, { Component } from 'react';


// const Band = ({band, id}) => {
//    return <li>{band}<button onClick={() => deleteBand(id)}>DELETE</button></li>
// };

class Band extends Component {
   render() {
      console.log(this.props)
      return (
         <li>{this.props.band.name}<button onClick={() => this.props.deleteBand(this.props.band.id)}>DELETE</button></li>
      )
   }
};

export default Band;
