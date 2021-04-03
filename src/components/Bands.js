import React from 'react'
import Band from './Band'

class Bands extends React.Component {
  renderBands = () => {
    return this.props.bands.map(band => <Band delete={this.props.delete} key={band.id} id={band.id} name={band.name} />)
  }

  render() {
    return (
      <div>
        {this.renderBands()}
      </div>
    )
  }
}

export default Bands
