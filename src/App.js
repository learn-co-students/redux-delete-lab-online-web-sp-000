import React, { Component } from 'react';
import BandsContainer from './components/BandsContainer'
import Band from './components/Band.js'
import Bands from './components/Bands.js'

class App extends Component {
  render() {
    return (
      <div>
       <div className="App">
         Band Name:
        <BandsContainer />

      </div>
    </div>
    );
  }
};

export default App;
