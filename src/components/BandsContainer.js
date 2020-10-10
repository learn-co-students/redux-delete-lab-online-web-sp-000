import React, { Component } from 'react'
import BandInput from './BandInput';
import Bands from './Bands';

import { connect } from 'react-redux'

class BandsContainer extends Component {
  render() {
    return (
      <div>
        <BandInput dispatch={this.props.dispatch} />
        <Bands bands={this.props.bands} dispatch={this.props.dispatch} />
      </div>
    )
  }
}

const mapStateToProps = ({ bands }) => ({ bands })

export default connect(mapStateToProps)(BandsContainer)
