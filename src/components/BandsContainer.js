import React, { Component } from 'react'
import BandInput from './BandInput';

import { connect } from 'react-redux'
import Bands from './Bands'

class BandsContainer extends Component {
  render() {
    const {bands, addBand, removeBand} = this.props
    return (
      <div>
        <BandInput addBand={addBand}/>
        <ul>
          <Bands bands={bands} removeBand={removeBand} />
        </ul>
      </div>
    )
  }
}

const mapStateToProps = ({ bands }) => ({ bands })

const mapDispatchToProps = dispatch => ({
  addBand: name => dispatch({ type: "ADD_BAND", name }),
  removeBand: id => dispatch({ type: "DELETE_BAND", id })
})

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
