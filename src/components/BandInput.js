import React, { Component } from 'react'

class BandInput extends Component {

  state = { bandName: '' }

  handleOnChange(e) {
    this.setState({ bandName: e.target.value })
  }

  handleOnSubmit(e) {
    e.preventDefault()
    this.props.addBand(this.state.bandName)
    this.setState({ bandName: '' })
  }

  render() {
    return (
      <div>
        <form onSubmit={(e) => this.handleOnSubmit(e)}>
          <input
            type="text"
            value={this.state.bandName}
            onChange={(e) => this.handleOnChange(e)} />
          <input type="submit" />
        </form>
      </div>
    )
  }
}

export default BandInput
