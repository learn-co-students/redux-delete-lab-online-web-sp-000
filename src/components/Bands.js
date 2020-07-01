import React, {Component} from 'react'
import {connect} from 'react-redux'
import Band from './Band'

class Bands extends Component {
    render() {
        return (
            <ul>
                {this.props.bands.map(band => <Band band={band} delete={this.props.delete}/>)}
            </ul>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        delete: id => {
            console.log(`Delete method is running for ${id}`)
            dispatch({type: 'DELETE_BAND', id: id })
        }
    }
}

export default connect(null, mapDispatchToProps)(Bands)