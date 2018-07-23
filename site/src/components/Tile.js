import React from "react"
import { CSSTransition } from "react-transition-group";

import { css } from "emotion"
import mq from "../core/media"

const Tile = (props) =>
  (
    <div className={styles.square} onClick={props.move} style={{backgroundColor: props.color}}>
      <React.Fragment>
        <CSSTransition in={props.cell === "X"} unmountOnExit classNames={{enter: styles.cross, enterActive: styles.animate}} timeout={1000}>
          <svg xmlns="http://www.w3.org/2000/svg" style={{ height: "100%",  width: "100%"}} viewBox="0 0 128 128">
            <path d="M16,16L112,112" stroke={props.iconColor} strokeWidth="16" strokeDasharray="135.764" />
            <path d="M112,16L16,112" stroke={props.iconColor} strokeWidth="16" strokeDasharray="135.764" />
          </svg>
        </CSSTransition>
        <CSSTransition in={props.cell === "O"} unmountOnExit classNames={{enter: styles.nought, enterActive: styles.animate}} timeout={1000}>
          <svg xmlns="http://www.w3.org/2000/svg" style={{ height: "100%",  width: "100%"}} viewBox="0 0 128 128">
            <path d="M64,16A48,48 0 1,0 64,112A48,48 0 1,0 64,16" strokeWidth="16" fill="none" stroke={props.iconColor} strokeDasharray="301.635" />
          </svg>
        </CSSTransition>
      </React.Fragment>
    </div>
  )

export default Tile;

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
  cross: css({
    "& path": css({
      strokeDashoffset: 135.764,
    }),
    "& path:first-child": {
      transition: "500ms"
    },
    "& path:last-child": {
      transition: "500ms 500ms"
    }
  }),
  nought: css({
    "& path": {
      strokeDashoffset: 301.635,
      transition: "1s"
    }
  }),
  animate: css({
    "& path": {
      strokeDashoffset: 0,
    }
  })
};
