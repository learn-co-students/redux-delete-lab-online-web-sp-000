import React, { Component } from 'react'
import BandInput from './BandInput';
import Bands from './Bands';

import { connect } from 'react-redux'

class BandsContainer extends Component {
  render() {
    console.log('rendering bands container and passing props', this.props)
    return (
      <div>
        <BandInput addBand={this.props.addBand} />
        <Bands bands={this.props.bands} deleteBand={this.props.deleteBand} />
      </div>
    )
  }
}

const mapStateToProps = ({ bands }) => ({ bands })

const mapDispatchToProps = dispatch => ({
  addBand: bandName => dispatch({ type: "ADD_BAND", bandName }),
  deleteBand: id => dispatch({ type: "DELETE_BAND", id})
})

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
