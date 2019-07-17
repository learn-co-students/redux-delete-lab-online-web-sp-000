import React, { Component } from 'react'
import BandInput from './BandInput';
import Bands from './Bands'

import { connect } from 'react-redux'

class BandsContainer extends Component {
  render() {
    return (
      <div>
        <BandInput dispatch={this.props.dispatch} />
        <Bands bands={this.props.bands} dispatch={this.props.dispatch}/>
      </div>
    )
  }
}

const mapStateToProps = ({ bands }) => ({ bands })

//Added another function to delete the band, then passed it down to our Bands component as props, just as we passed our addBand function to our BandInput (form) component. It wasn't working without erroring out, so we can also just pass down our dispatch as props in each component, then write the action in <BandInput /> and <Band />.
// const mapDispatchToProps = dispatch => ({
//   addBand: name => dispatch({ type: "ADD_BAND", name }),
//   deleteBand: id => dispatch({type: "DELETE_BAND", id})
// })

export default connect(mapStateToProps)(BandsContainer)
