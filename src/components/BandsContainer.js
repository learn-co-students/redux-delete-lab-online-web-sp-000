import React, { Component } from 'react'
import BandInput from './BandInput';
import Band from './Band'

import { connect } from 'react-redux'

class BandsContainer extends Component {

  renderBands = () => {
    return this.props.bands.map((band, key) => <Band band={band} key={key} deleteBand={this.props.deleteBand} />)
  }

  render() {
    return (
      <div>
        <BandInput addBand={this.props.addBand} />
        <ul>
          {this.renderBands()}
        </ul>
      </div>
    )
  }
}


const mapStateToProps = ({ bands }) => ({ bands })

const mapDispatchToProps = dispatch => ({
  addBand: name => dispatch({ type: "ADD_BAND", name: name }),
  deleteBand: id => dispatch({ type: "DELETE_BAND", id: id})
})

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)

// need to map this
