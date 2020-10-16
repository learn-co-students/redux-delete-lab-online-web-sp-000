import React, { Component } from 'react'
import BandInput from './BandInput';
import Bands from './Bands';
import { connect } from 'react-redux'

class BandsContainer extends Component {


  // renderBands = () => {
  //   console.log(this.props.bands)
  //   return this.props.bands.map((band, idx) => <li delete={this.props.delete} key={idx}>{band.bandName}</li>)
  // }



  
  render() {
    return (
      <div>
        <BandInput addBand={this.props.addBand}/>
        <Bands bands={this.props.bands} delete={this.props.delete}/>
      </div>
    )
  }
}

const mapStateToProps = ({ bands }) => ({ bands })

// const mapDispatchToProps = dispatch => {
//   return {
//     delete: bandName => {
//       return dispatch({ type: 'DELETE_BAND', payload: bandName });
//     }
//   }
// }



const mapDispatchToProps = dispatch => ({
  addBand: name => dispatch({ type: "ADD_BAND", name }),
  delete: id => dispatch({type: 'DELETE_BAND', id})
})

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)