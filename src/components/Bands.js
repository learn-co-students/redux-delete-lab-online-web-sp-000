import React, { Component } from 'react'
import { connect } from 'react-redux'
import Band from './Band'

class Bands extends Component {
    render() {
        return (
            <div>
                {this.props.bands.map(band => <Band band={band} delete={this.props.delete} key={band.id}/>)}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        bands: state.bands
    }
}

const mapDispatchToProps = dispatch => {
    return {
        delete: band => dispatch({ type: 'DELETE_BAND', id: band})
    }
    
}
export default connect(mapStateToProps, mapDispatchToProps)(Bands)