import React, { Component } from 'react';

class Band extends Component {
  constructor(props){
    super(props)

    
  }


  handleOnClick = (event) => {
    event.preventDefault()

    this.props.deleteBand(this.props.band.id)
  }


  render() {
    return(
      <div>
        <li>
          {this.props.band.name} <button onClick={() => this.props.deleteBand(this.props.band.id)}>DELETE</button>
        </li>
      </div>
    );
  }
};

export default Band;