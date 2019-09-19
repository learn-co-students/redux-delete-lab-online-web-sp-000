import React, { Component } from 'react';


const Band = props => {
 
    return(
    	<div>
     
  	  <li>{props.bandName} <button
	  		onClick={() => props.delete(props.id)}>DELETE</button> </li>
	      
      </div>
    );
  }


export default Band;
