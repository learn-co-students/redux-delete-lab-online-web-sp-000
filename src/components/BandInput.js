import React, { Component } from "react";
class BandInput extends Component {
  state = {
    bandName: "",
  };

  handleOnChange(event) {
    this.setState({
      bandName: event.target.value,
    });
  }

  handleOnSubmit(event) {
    event.preventDefault();
    const name = this.state.bandName;
    console.log(`in handleOnSubmit, name is ${JSON.stringify(name)}`);
    this.props.addBand(name);
    this.setState({
      bandName: "",
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <input
            type="text"
            value={this.state.bandName}
            onChange={(event) => this.handleOnChange(event)}
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default BandInput;
