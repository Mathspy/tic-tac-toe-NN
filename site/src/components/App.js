import React, { Component } from 'react';

import './App.css';

import ScoreBoard from "./ScoreBoard";

class App extends Component {
  render() {
    return (
      <div className="container">
      	<ScoreBoard />
      </div>
    );
  }
}

export default App;
