import React, { Component } from 'react';


const Band = props => {
 
    return(
    	<div>
      <span>{props.bandName}</span>
  	  <span>{props.bandName}</span><button
	  		onClick={() => props.delete(props.id)}>DELETE</button>
	      
      </div>
    );
  }


export default Band;
