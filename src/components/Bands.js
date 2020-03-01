import React, { Component } from "react";
import { connect } from "react-redux";
import Band from "./Band";

class Bands extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        {this.props.bands.map(band => (
          <Band key={band.id} band={band} deleteBand={this.props.deleteBand} />
        ))}
      </div>
    );
  }
}

export default connect()(Bands);
