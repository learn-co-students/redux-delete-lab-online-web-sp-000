import React, { Component } from 'react'
import Bands from './Bands';
import BandInput from './BandInput';

import { connect } from 'react-redux'

class BandsContainer extends Component {
    render() {
        return (
        <div>
            <BandInput addBand={this.props.addBand}/>

            /* code change */
            <Bands bands={this.props.bands} deleteBand={this.props.deleteBand} />
        </div>
        )
    }
}

const mapStateToProps = ({ bands }) => ({ bands })

const mapDispatchToProps = dispatch => ({
    addBand: name => dispatch({ type: "ADD_BAND", name }),
    /* code change */
    deleteBand: id => dispatch({ type: "DELETE_BAND", id})
})

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)

/*
Use BandsContainer to access the Redux store that contains any band information
using the provided mapStateToProps() method.

Pass these bands into the Bands component.
*/
