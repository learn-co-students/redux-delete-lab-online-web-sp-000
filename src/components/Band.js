import React, { Component } from 'react';
import { connect } from 'react-redux'

class Band extends Component {

  handleDelete = event => {
    this.props.deleteBand(this.props.band.id)
  }

  render() {
    return(
        <li>{this.props.band.name}<button onClick={event => this.handleDelete(event)}>DELETUS!</button></li>
    );
  }
};

const mapDispatchToProps = dispatch => {
  return {
    deleteBand: id => dispatch({type: 'DELETE_BAND', id})
  }
}

export default connect(null, mapDispatchToProps)(Band);
