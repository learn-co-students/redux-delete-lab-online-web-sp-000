///Create a new Bands component. This component will handle the rendering of all Band components from a list of bands provided as props.
import React, { Component } from 'react';
import Band from './Band'
import { connect } from 'react-redux'

class Bands extends Component {

  renderBands = () => {
    console.log(this.props.bands);
    return this.props.bands.map(band => <Band delete={this.props.delete} key={band.id} band={band} />)
  }
render(){
  return (
    <div>
      {this.renderBands()}

    </div>
  )
  }
}


const mapStateToProps = ({ bands }) => ({ bands })

const mapDispatchToProps = dispatch => {
  return {
    delete: id => dispatch({type: 'DELETE_BAND', payload: id })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Bands)
