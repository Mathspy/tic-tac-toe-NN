import React, { Component } from 'react';

import './App.css';

import { networkPlay, isGameOver, reverseTurn, noMoreMovesLeft } from "../core/logic"

import ScoreBoard from "./ScoreBoard";
import Playground from "./Playground";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scores: {network: 0, player: 0},
      loading: false,
      board: ["?", "?", "?", "?", "?", "?", "?", "?", "?"],
      gameState: "gameStart",
      turn: "X",
      me: "O"
    }
  }

  componentDidUpdate() {
    if (this.state.turn === this.state.me) {

    }
  }

  move = (index) => () => {
    if (!this.state.loading && this.gameState !== "gameOver" && this.state.board[index] === "?") {
      const board = this.state.board.slice(0);
      const { turn, gameState } = this.state;
      board[index] = turn
      console.log(board)

      let winner = isGameOver(board)
      if (!winner) {
        if (!noMoreMovesLeft(board)) {
          this.setState(() => ({ board, turn: reverseTurn(turn)}))
        } else {
          this.setState(() => ({ board, gameState: "draw"}))
        }
      } else {
        if (winner === this.me) {
          this.setState(prevState => ({ board, gameState: "gameOver", scores: {network: prevState.scores.network++, player: prevState.scores.player}}))
        } else {
          this.setState(prevState => ({ board, gameState: "gameOver", scores: {network: prevState.scores.network, player: prevState.scores.player++}}))
        }
      }
    }
  }


  render() {
    return (
      <div className="container">
        <ScoreBoard loading={this.state.loading} scores={this.state.scores} />
        <Playground board={this.state.board} move={this.move} />
      </div>
    );
  }
}

export default App;
