import React, { Component } from 'react';
import Band from './Band'

class Bands extends Component {

	renderBand = () => {
		console.log(this.props.bands);
		return this.props.bands.map(band => <Band key={band.id} band={band} delete={this.props.delete}/>)
	}

	render() {
		return(
			<div>
				{this.renderBand()}
			</div>
		)
	}
}

export default Bands;
