import React, { Component } from 'react'
import BandInput from './BandInput';
import Band from './Band';

import { connect } from 'react-redux'

class BandsContainer extends Component {
  renderBands = () => this.props.bands.map(band => < Band delete={this.props.delete} key={band.id} band={band}/>)
  render() {
    return (
      <div>
        <div>
          <BandInput addBand={this.props.addBand}/>
        </div>
        <div>
          <ul>
            {this.renderBands()}
          </ul>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ bands }) => ({ bands })

const mapDispatchToProps = dispatch => ({
  addBand: name => dispatch({ type: "ADD_BAND", name }),
  delete: bandId => dispatch({type: 'DELETE_BAND', id: bandId })
})

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
