import React, { Component } from 'react';
import Bio from './Bio.js';
import './stylesheets/style.css';

class App extends Component {
  render() {
    return (
      <Bio name="Leandro Vicente" tagline="Software Developer and Creator" />
    );
  }
}

export default App;
