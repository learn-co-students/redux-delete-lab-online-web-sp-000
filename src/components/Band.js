import React, { Component } from 'react';

class Band extends Component {
  renderBands = ()=>{
   
  }

  render() {
    // console.log('band props',this.props)
    return(
      <div>
        <ul>
            <li>{this.props.band.name}   
             <button onClick={() => this.props.delete(this.props.band.id)} >DELETE</button>
            </li>
           
      </ul>
    </div>
    );
  }
};

export default Band;
