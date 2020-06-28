import React, { Component } from 'react'
import BandInput from './BandInput';
import Bands from './Bands';
// import Band from "./Band";

import { connect } from 'react-redux'

class BandsContainer extends Component {
  // renderBands = () => this.props.bands.map(band => <Band key={band.id} id={band.id} name={band.name} deleteBand={this.props.deleteBand}/>)
  
  render() {
    console.log(this.props)
    return (
      <div>
        <BandInput addBand={this.props.addBand}/>
        <Bands bands={this.props.bands} deleteBand={this.props.deleteBand} />
        {/* <ul>
          {this.renderBands()}
        </ul> */}
      </div>
    )
  }
}

// const mapStateToProps = ({ bands }) => ({ bands })
const mapStateToProps = state => {
  return {
    bands: state.bands
  }
}

const mapDispatchToProps = dispatch => ({
  addBand: name => dispatch({ type: "ADD_BAND", name: name }),
  deleteBand: id => dispatch({ type: "DELETE_BAND", id: id })
})

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
