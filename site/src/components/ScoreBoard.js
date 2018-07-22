import React from "react"

import { css, keyframes } from "emotion"

export default class ScoreBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {network: "", player: ""}
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.scores.player !== nextProps.scores.player) {
      this.startAnimation(600, 1)
    } else if (this.props.scores.network !== nextProps.scores.network) {
      this.startAnimation(600, 0)
    }
  }
  startAnimation(duration, victor) {
    if (victor === 0) {
      this.setState({network: styles.fadeAround})
      setTimeout(() => this.setState({network: ""}), duration);
    } else {
      this.setState({player: styles.fadeAround})
            setTimeout(() => this.setState({player: ""}), duration);
    }
  }

  renderLoading() {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" className={styles.loading} width="100px" height="100px" viewBox="0 0 340.274 340.274">
        <path fill="#C86B98" d="M294 128l-6-14c20-45 18-46 15-50l-26-25-2-2h-3c-2 0-6 0-45 18l-14-6C194 3 193 3 187 3h-36c-5 0-7 0-24 46l-14 6C87 44 72 38 67 38h-3L37 65c-4 4-6 5 15 49l-6 14C0 146 0 148 0 153v35c0 6 0 8 47 25l5 13c-19 45-18 46-14 50l25 25 3 2h3c1 0 6 0 44-17l14 5c19 46 21 46 26 46h36c5 0 7 0 24-46l14-5c26 11 42 16 46 16h3l28-27c4-4 5-5-16-49l6-14c46-18 46-20 46-25v-35c0-6 0-8-46-24zM170 228c-33 0-59-26-59-58s26-58 59-58 60 26 60 58-27 58-60 58z"
        />
      </svg>
    )
  }

  render() {
    return (
      <div className={styles.numerical}>
        <div className={`${styles.single} ${styles.first}`}>
          <p className={`${styles.texty} ${this.state.network}`}>{this.props.scores.network}</p>
        </div>
        <div className={`${styles.single} ${styles.second}`}>
          {this.props.loading ? this.renderLoading() : null}
        </div>
        <div className={`${styles.single} ${styles.third}`}>
          <p className={`${styles.texty} ${this.state.player}`}>{this.props.scores.player}</p>
        </div>
      </div>
    )
  }
}

const rotate = keyframes`
  from {transform: rotate(0deg);}
  to {transform: rotate(360deg);}
`

const fadeAround = keyframes`
  0% {opacity: 1;}
  50% {opacity: 0;}
  100% {opacity: 1;}
`

const styles = {
  numerical: css({
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  }),
  single: css({
    flexDirection: "row",
    padding: 20,
    paddingTop: 10,
    display: "inline-block"
  }),
  first: css({
    justifyContent: "flex-start",
  }),
  second: css({
    justifyContent: "center",
  }),
  third: css({
    justifyContent: "flex-end"
  }),
  texty: css({
    fontSize: 50,
    color: "#FF9F70",
  }),
  loading: css({
    animation: `${rotate} 2s infinite linear`
  }),
  fadeAround: css({
    animation: `${fadeAround} 600ms linear`
  })
};