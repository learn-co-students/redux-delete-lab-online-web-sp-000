import React, { Component } from "react";
import Band from "./Band";

class Bands extends Component {
  renderBands = () => {
    return this.props.bands.map((band) => {
      return (
        <Band key={band.id} band={band} deleteBand={this.props.deleteBand} />
      );
    });
  };

  render() {
    return (
      <div>
        Here is your list of Bands:
        <ul>{this.renderBands()}</ul>
      </div>
    );
  }
}

export default Bands;
