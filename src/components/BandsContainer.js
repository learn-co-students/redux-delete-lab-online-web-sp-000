import React, { Component } from 'react'
import BandInput from './BandInput';
import Band from './Band';
import { connect } from 'react-redux'

class BandsContainer extends Component {

renderBands = () => {
  return this.props.bands.map(b => 
  	<Band 
  	bandName = {b.bandName}
  	delete={this.props.delete} 
  	key={b.id} 
  	id={b.id} 
  	band={b} />)
}


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
  addBand: name => dispatch({ type: "ADD_BAND", payload: name }),
  delete: id => dispatch({ type: "DELETE_BAND", payload: id })
})



export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
