import React from "react"

const Band = (props) => (
	<li>
		<span>{props.band.name} </span>
		<button onClick={() => props.deleteBand(props.band.id)}> X </button>
	</li>
)

export default Band
