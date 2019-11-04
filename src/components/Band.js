import React, { Component } from 'react';

class Band extends Component {

  render() {
    //debugger
    // this.props:
    // {id: "a6113f9d-44aa-44fc-8ff6-594a086a0fe1", name: "asd", deleteBand: ƒ}
    return(
      <div>
  <li>{this.props.name}</li>
  <button onClick={() => this.props.deleteBand(this.props.id)}>DELETE</button>
      </div>
    );
  }
};

export default Band;
