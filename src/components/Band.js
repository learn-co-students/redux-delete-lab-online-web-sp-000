import React, { Component } from 'react';

class Band extends Component {

  render() {
    return(
      <div>
        Band Component
        {console.log(this.props.bands)}
      </div>
    );
  }
};

export default Band;
