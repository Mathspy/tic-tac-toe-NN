import React from "react"
import { css } from "emotion"

import Tile from "./Tile"

export default class Playground extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.row}>
          <Tile pos={0} color="#632B6C" iconColor="#F09F9C"/>
          <Tile pos={1} color="#C86B98" iconColor="#FFC1A0"/>
          <Tile pos={2} color="#F09F9C" iconColor="#632B6C"/>
        </div>
        <div className={styles.row}>
          <Tile pos={3} color="#C86B98" iconColor="#FFC1A0"/>
          <Tile pos={4} color="#F09F9C" iconColor="#632B6C"/>
          <Tile pos={5} color="#FFC1A0" iconColor="#C86B98"/>
        </div>
        <div className={styles.row}>
          <Tile pos={6} color="#F09F9C" iconColor="#632B6C"/>
          <Tile pos={7} color="#FFC1A0" iconColor="#C86B98"/>
          <Tile pos={8} color="#FE9C7F" iconColor="#C86B98"/>
        </div>
      </div>
    )
  }
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