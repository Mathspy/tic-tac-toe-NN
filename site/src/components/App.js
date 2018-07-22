import React, { Component } from 'react';

import './App.css';

import ScoreBoard from "./ScoreBoard";
import Playground from "./Playground";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scores: {network: 0, player: 0},
      loading: false,
      board: ["?", "?", "?", "?", "?", "?", "?", "?", "?"]
    }
  }

  render() {
    return (
      <div className="container">
        <ScoreBoard loading={this.state.loading} scores={this.state.scores} />
        <Playground board={this.state.board} />
      </div>
    );
  }
}

export default App;
