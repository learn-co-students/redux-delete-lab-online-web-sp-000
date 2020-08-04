import React, { Component } from 'react'
import { connect } from 'react-redux'
import Band from './Band'
import BandInput from './BandInput'

class BandsContainer extends Component {
  render () {
    return (
      <div>
        <BandInput addBand={this.props.addBand} />
        <ul>
          {this.props.bands.map(b => (
            <Band band={b} removeBand={this.props.removeBand} />
          ))}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = ({ bands }) => ({ bands })

const mapDispatchToProps = dispatch => ({
  addBand: name => dispatch({ type: 'ADD_BAND', name: name }),
  removeBand: id => dispatch({ type: 'DELETE_BAND', id })
})

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
