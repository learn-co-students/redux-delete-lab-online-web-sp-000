import React, { Component } from 'react'
import BandInput from './BandInput';
import Bands from './Bands'
import { connect } from 'react-redux'
import Band from './Band'



class BandsContainer extends Component {
  
  // renderBands = () => 
  // this.props.bands.map((band, id ) => <Band key={id} text={band}/>)
  
  
  
  
  render() {
    return (
      <div>
        <BandInput addBand={this.props.addBand}/>
        <Bands bands={this.props.bands} deleteBand={this.props.deleteBand} />
        
      </div>
    )
  }
}

const mapStateToProps = ({ bands }) => ({ bands })


const mapDispatchToProps = dispatch => ({
  addBand: name => dispatch({ type: "ADD_BAND", name }),
  deleteBand: bandId => dispatch({type: 'DELETE_BAND', bandId})
 
///delete 
})

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
