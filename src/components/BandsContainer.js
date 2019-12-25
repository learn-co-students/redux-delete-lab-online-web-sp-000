import React, { Component } from 'react'
import BandInput from './BandInput';
import Band from './Band';

import { connect } from 'react-redux'

class BandsContainer extends Component {

  renderBands = () => this.props.bands.map((band) => <Band delete={this.props.deleteBand} key={band.id} band={band}/>)

  render() {
    return (
      <div>
        <ul>{this.renderBands()}</ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    bands: state.bands
  }
}

const mapDispatchToProps = dispatch => {
  return {
    deleteBand: name => dispatch({ type: "DELETE_BAND", id: name})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
