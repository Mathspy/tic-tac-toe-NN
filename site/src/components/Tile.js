import React from "react"

import { css } from "emotion"
import mq from "../core/media"

export default class Tile extends React.Component {
  renderIcon = () => {
    const { cell } = this.props
    if (cell === "X") {
      return (
        <svg xmlns="http://www.w3.org/2000/svg" style={{ height: "100%",  width: "100%"}} viewBox="0 0 128 128">
          <path d="M16,16L112,112" stroke={this.props.iconColor} strokeWidth="16" className={`${styles.cross1} ${styles.animate}`} strokeDasharray="135.764" />
          <path d="M112,16L16,112" stroke={this.props.iconColor} strokeWidth="16" className={`${styles.cross2} ${styles.animate}`} strokeDasharray="135.764" />
        </svg>
      ) //#37154A
    } else if (cell === "O") {
      return (
        <svg xmlns="http://www.w3.org/2000/svg" style={{ height: "100%",  width: "100%"}} viewBox="0 0 128 128">
          <path d="M64,16A48,48 0 1,0 64,112A48,48 0 1,0 64,16" strokeWidth="16" fill="none" stroke={this.props.iconColor} className={`${styles.nought} ${styles.animate}`} strokeDasharray="301.635" />
        </svg>) //#C8EAB5 #F9C5C9
    } else {
      return null;
    }
  }

  render() {
    return (
      <div className={styles.square} onClick={this.props.move} style={{backgroundColor: this.props.color}}>
        {this.renderIcon()}
      </div>
    )
  }
}

const styles = {
  square: css({
    "@media (max-width: 576px)": {
      width: 80,
      height: 80,
    },
    [mq[0]]: {
      width: 120,
      height: 120,
    },
    display: "inline-block"
  }),
  cross1: css({
    strokeDashoffset: 135.764,
    transition: "500ms"
  }),
  cross2: css({
    strokeDashoffset: 135.764,
    transition: "500ms 500ms"
  }),
  nought: css({
    strokeDashoffset: 301.635,
    transition: "100ms"
  }),
  animate: css({
    strokeDashoffset: 0,
  })
};
