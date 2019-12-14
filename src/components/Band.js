import React, { Component } from "react";

class Band extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const band = this.props.band;
    return (
      <li>
        {band.name}
        <button onClick={() => this.props.deleteBand(band.id)}>Delete</button>
      </li>
    );
  }
}

export default Band;
