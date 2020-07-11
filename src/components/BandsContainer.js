
import React, { Component } from 'react'
import BandInput from './BandInput';
// import Band from './Band'
import Bands from './Bands'

import { connect } from 'react-redux'

class BandsContainer extends Component {
  /* Referenced stackoverflow for <div> </div> solution */
  render() {
    return (
      <div>
        <BandInput dispatch={this.props.dispatch} />
        <Bands dispatch={this.props.dispatch} bands={this.props.bands} />
        
        
      </div>
    )
  }
}

const mapStateToProps = ({ bands }) => ({ bands })


export default connect(mapStateToProps)(BandsContainer)