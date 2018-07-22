import React from "react"
import { css } from "emotion"

import Tile from "./Tile"

export default function Playground(props) {
  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <Tile cell={props.board[0]} move={props.move(0)} color="#632B6C" iconColor="#F09F9C"/>
        <Tile cell={props.board[1]} move={props.move(1)} color="#C86B98" iconColor="#FFC1A0"/>
        <Tile cell={props.board[2]} move={props.move(2)} color="#F09F9C" iconColor="#632B6C"/>
      </div>
      <div className={styles.row}>
        <Tile cell={props.board[3]} move={props.move(3)} color="#C86B98" iconColor="#FFC1A0"/>
        <Tile cell={props.board[4]} move={props.move(4)} color="#F09F9C" iconColor="#632B6C"/>
        <Tile cell={props.board[5]} move={props.move(5)} color="#FFC1A0" iconColor="#C86B98"/>
      </div>
      <div className={styles.row}>
        <Tile cell={props.board[6]} move={props.move(6)} color="#F09F9C" iconColor="#632B6C"/>
        <Tile cell={props.board[7]} move={props.move(7)} color="#FFC1A0" iconColor="#C86B98"/>
        <Tile cell={props.board[8]} move={props.move(8)} color="#FE9C7F" iconColor="#C86B98"/>
      </div>
    </div>
  )
}
const styles = {
  container: css({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  }),
  row: css({
    display: "flex",
  })
};