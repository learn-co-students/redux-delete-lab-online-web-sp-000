import React, { Component } from 'react';



  const Band = props => {
    return(
      <li>{props.name}
        <button onClick={() => props.deleteBand(props.id)}>Delete</button>
      </li>
    );

};

export default Band;
