import React, { Component } from 'react'
import BandInput from './BandInput';
import Band from './Band'
import { connect } from 'react-redux'

class BandsContainer extends Component {


  renderBands = () => {
    return this.props.bands.map(band => <Band delete={this.props.delete} key={band.id} band={band} />)
  }
  


  render() {
    // console.log('BandsContainer props',this.props.bands)
    return (
      <div>
        <BandInput addBand={this.props.addBand}/>
        {this.renderBands()}

      </div>
    )
  }
}

// const mapStateToProps = ({ bands }) => {
//   // console.log('from mapStateToProps',bands)
//   return (
//     { bands }
//     )}

// const mapDispatchToProps = dispatch => ({
//   addBand: name => dispatch({ type: "ADD_BAND", name })
// })

// export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
const mapStateToProps = state => {
  console.log('state',state)
  return {
    bands: state.bands
  }
}

const mapDispatchToProps = dispatch => {
  return {
    delete: id => {
      dispatch({type: 'DELETE_BAND', id: id })
  }
  }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer);

