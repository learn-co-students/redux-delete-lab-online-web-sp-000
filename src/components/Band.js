import React, { Component } from 'react';
// import { connect } from 'react-redux';

class Band extends Component {
  render() {
    return(
      <div>
        {/* {console.log(this.props.deleteBand)} */}
        <li>{this.props.band.name}<button onClick={() => this.props.deleteBand(this.props.band.id)}>Delete</button></li>
      </div>
    );
  }
};

export default Band;
