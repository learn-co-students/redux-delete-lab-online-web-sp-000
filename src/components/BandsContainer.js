import React, { Component } from 'react'
import BandInput from './BandInput';
import Bands from './Bands'
import Band from './Band'

import { connect } from 'react-redux'

class BandsContainer extends Component {


  render() {
    return (
      <div>
        <BandInput addBand={this.props.addBand}/>
        <Bands delete={this.props.delete} bands={this.props.bands}/>
      </div>
    )
  }
}

const mapStateToProps = ({ bands }) => {
  return { bands }
}

const mapDispatchToProps = dispatch => ({
  addBand: name => dispatch({ type: "ADD_BAND", name }),
  delete: id => dispatch({ type: "DELETE_BAND", id})
})

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
