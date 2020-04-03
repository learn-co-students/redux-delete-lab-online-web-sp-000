import React, { Component } from 'react'
import BandInput from './BandInput';
import Band from './Band';
import { connect } from 'react-redux'

class BandsContainer extends Component {

  constructor(props){
    super(props);
    //console.log("props:", this.props.bands)
  }

  renderBands = () => {
    if(this.props.bands !== undefined){
      console.log("bands: ", this.props.bands)
      return this.props.bands.map( band => <Band band={band} delete={this.props.deleteBand}/> )
    }
  }
  //check to see if bands is empty

  render() {
    return (
      <div>
        <BandInput addBand={this.props.addBand}/>
        <ul>
          {this.renderBands()}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = ({ bands }) => ({ bands })

const mapDispatchToProps = dispatch => ({
  addBand: name => dispatch({ type: "ADD_BAND", name }),
  deleteBand: id => dispatch({type: "DELETE_BAND", id})
})

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
