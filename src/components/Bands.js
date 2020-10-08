import React, { Component } from "react";
import Band from "./Band";

class Bands extends Component {
  render() {
    return this.props.bands.map((band) => {
      return (
        <Band
          delete={this.props.delete}
          name={band.name}
          key={band.id}
          id={band.id}
        />
      );
    });
  }
}

export default Bands;
