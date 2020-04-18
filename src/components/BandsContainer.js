import React, { Component } from 'react'
import BandInput from './BandInput';
// import Band from './Band';
import Bands from './Bands'
import { connect } from 'react-redux'

class BandsContainer extends Component {
  // renderBand = () => {
  //   return this.props.bands.map(band => 
  //     <Band delete={this.props.delete} key={band.id} band={band} />)
  // }
  render() {
    return (
      <div>
        <BandInput addBand={this.props.addBand}/>
        <Bands bands={this.props.bands} delete={this.props.delete}/>
        
        {/* {this.renderBand()} */}
      </div>
    )
  }
}

const mapStateToProps = ({ bands }) => ({ bands })

const mapDispatchToProps = dispatch => ({
  addBand: name => dispatch({ type: "ADD_BAND", name }),
  delete: id => dispatch({ type: "DELETE_BAND", id})
})

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
