import React, { Component } from 'react';

import './App.css';

import ScoreBoard from "./ScoreBoard";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scores: {network: 0, player: 0},
      loading: false,
    }
  }

  render() {
    return (
      <div className="container">
        <ScoreBoard loading={this.state.loading} scores={this.state.scores} />
      </div>
    );
  }
}

export default App;
