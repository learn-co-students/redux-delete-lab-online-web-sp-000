import React from "react";
import { connect } from "react-redux";
import BandInput from "./BandInput";
import Band from "./Band";

class BandsContainer extends React.Component {

	displayBands = () => this.props.bands.map(band => (
		<Band key={band.id}
					deleteBand={this.props.deleteBand}
					band={band} />
	))

	render() {
		return (
			<div>
				<BandInput addBand={this.props.addBand} />
				<ul>{this.displayBands()}</ul>
			</div>
		)
	}

}

const mapStateToProps = ({bands}) => ({bands})

const mapDispatchToProps = (dispatch) => ({
	addBand: name => dispatch({type: "ADD_BAND", name}),
	deleteBand: id => dispatch({type: "DELETE_BAND", id})
})

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
