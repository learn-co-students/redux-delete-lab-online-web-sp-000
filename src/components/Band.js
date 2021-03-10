import React, { Component } from 'react';

class Band extends Component {

  handleClick = event => {
    event.preventDefault()
    this.props.deleteBand(this.props.band.id)
  }

  render() {
    return(
      <div>
        {/* Band Component */}
        <ul>
          <li>{this.props.band.name} <button type='delete' onClick={(event) => this.handleClick(event)}>DELETE</button></li>
          
        </ul>
        
      </div>
    );
  }
};

export default Band;
