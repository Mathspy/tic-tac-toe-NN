import React, { Component } from 'react';

import { css } from "emotion";

import { networkPlay, isGameOver, reverseTurn, noMoreMovesLeft, startLoadingModel } from "../core/logic"

import ScoreBoard from "./ScoreBoard";
import Playground from "./Playground";
import Brain from "./Brain";

const styles = css({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "space-between",
  backgroundColor: "#280F36",
  width: "100%",
  height: "100%",
})


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

  componentDidMount() {
    startLoadingModel()
  }

  componentDidUpdate() {
    // console.log(this.state.scores.network)
    if (this.state.turn === this.state.me && !this.state.loading && this.state.gameState === "gameStart") {
      // console.log("I AM ABOUT TO BEAT YO ASS")
      this.setState(() => ({loading: true}))
      networkPlay(this.state.board).then(([move]) => {
        this.move(move, true)()
      })
    }
  }

  move = (index, loadingOverride) => () => {
    if ((!this.state.loading || loadingOverride)  && this.gameState !== "gameOver" && this.state.board[index] === "?") {
      const board = this.state.board.slice(0);
      const { turn, gameState, me } = this.state;
      board[index] = turn
      // console.log(board)

      let winner = isGameOver(board)
      if (!winner) {
        if (!noMoreMovesLeft(board)) {
          this.setState(() => ({ board, turn: reverseTurn(turn), loading: false}))
        } else {
          this.setState(() => ({ board, gameState: "draw", loading: false}))
        }
      } else {
        if (winner === me) {
          this.setState(prevState => ({ board, gameState: "gameOver", scores: {network: prevState.scores.network + 1, player: prevState.scores.player}, loading: false}))
        } else {
          this.setState(prevState => ({ board, gameState: "gameOver", scores: {network: prevState.scores.network, player: prevState.scores.player + 1}, loading: false}))
        }
      }
    }
  }

  again = () => {
    const { gameState } = this.state
    if (gameState === "gameOver" || gameState === "draw" || gameState === "cheated") {
      this.setState(() => ({
        board: ["?", "?", "?", "?", "?", "?", "?", "?", "?"],
        turn: "X",
        me: reverseTurn(this.state.me),
        gameState: "gameStart"
      }))
    }
  }


  render() {
    return (
      <div className={styles}>
        <ScoreBoard loading={this.state.loading} scores={this.state.scores} />
        <Playground board={this.state.board} move={this.move} />
        <Brain again={this.again} gameState={this.state.gameState} move={this.move} />
      </div>
    );
  }
}

export default App;
