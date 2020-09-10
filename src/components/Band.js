import React, { Component } from 'react';

class Band extends Component {

  render() {
    console.log('rendering band with props', this.props.band.name, this.props.band.id, this.props.deleteBand)
    return(

      <div>
        <li><span key={this.props.band.id}> {this.props.band.name}</span> <button onClick={() => this.props.deleteBand(this.props.band.id)}> Delete </button></li>
      </div>
    );
  }
};

export default Band;
