import React, { Component } from 'react';

const Band = props => {
  return (
    <div>
      <li><span>{props.band.name}</span>{" "}
      <button onClick={() => props.delete(props.band.id)}>Delete Band</button></li>
    </div>
  );
};

export default Band;
