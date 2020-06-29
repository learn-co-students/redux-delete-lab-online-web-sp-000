import React, { Component } from 'react'
import BandInput from './BandInput';
import Band from './Band'

import { connect } from 'react-redux'

class BandsContainer extends Component {

  renderBands = () => this.props.bands.map((band, id) => <Band delete={this.props.delete} key={id} band={band} />)

  render() {
    return (
      <div>
        <BandInput addBand={this.props.addBand}/>
        {this.renderBands()}
      </div>
    )
  }
}

const mapStateToProps = ({ bands }) => ({ bands })

const mapDispatchToProps = dispatch => ({
  addBand: name => dispatch({ type: "ADD_BAND", name }),
  delete: band => dispatch({type: 'DELETE_BAND', id: band })
})

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
