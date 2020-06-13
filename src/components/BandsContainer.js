import React, { Component } from 'react'
import Band from './Band'

import { connect } from 'react-redux'

class BandsContainer extends Component {
  
  renderBands = () => this.props.bands.map(band => <Band key={band.id} band={band} delete={this.props.deleteBand}/> )
  
  render() {
    console.log(this.props)
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

const mapDispatchToProps = dispatch => ({
  deleteBand: idInput => dispatch({ type: "DELETE_BAND", id: idInput })
})

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
