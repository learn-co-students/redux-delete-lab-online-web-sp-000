import React, { Component } from 'react';
import Band from "./Band";
import { connect } from 'react-redux'


class Bands extends Component {

    renderBands = () => {
        return(
            <ol>
            {this.props.bands.map(band => <Band band={band} deleteBand={this.props.deleteBand}/>)}
            </ol>
        )
    }

  render() {
    return(
      <div>
       {this.renderBands()}
      </div>
    );
  }
};

const mapDispatchToProps = dispatch => {
    return {
        deleteBand: bandId => dispatch({type: "DELETE_BAND", id: bandId })
    }
}


export default connect(null, mapDispatchToProps)(Bands);