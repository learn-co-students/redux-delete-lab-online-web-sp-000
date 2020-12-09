import React, { Component } from 'react';

const Band = props => {
	console.log(props);

	return(
		<li key={props.band.id}>
			<span>{props.band.name}</span> <button onClick={() => props.delete(props.band.id)}>X</button>
		</li>
	)
}

export default Band;
