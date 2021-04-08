import React, { Component } from 'react'

class Band extends Component {

  handleClick = () => {
    this.props.deleteBand(this.props.id)
  }

  render() {
    return(
      <li>
        {this.props.name}&nbsp;
        <button onClick={this.handleClick}>Delete</button>
      </li>
    )
  }
}

export default Band
