import React from "react"

import { css } from "emotion"
import mq from "../core/media"

export default class Brian extends React.Component {
  insult = () =>
    insults[this.props.gameState][Math.floor(Math.random() * insults[this.props.gameState].length)]

  render() { //Change the underlay color later, yo!
    return (
      <div onClick={this.props.again} className={styles.arrogance}>
        <p className={styles.insulty}>{this.insult()}</p>
      </div>
    )
  }
}

const styles = {
  arrogance: css({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: 200,
    cursor: "pointer",
    transition: "0.3s",
    ":hover": {
      backgroundColor: "#371448",
    }
  }),
  insulty: css({
    margin: "0 16px",
    color: "#F09F9C",
    textAlign: "center",
    "@media (max-width: 600px)": {
      fontSize: 25,
    },
    [mq[0]]: {
      fontSize: 30
    },
  })
};

const insults = {
  gameStart: [
    "Welcome! Are you ready for some beating? ❤",
    "Oh! There you're, ready to lose?",
    "Look who it is! The LOSER",
    "I see you missed the pain ❤",
    "One more lose for this good fella, incoming!",
    "There are many ways that I can make you cry",
    "You just clicked on the wrong neighbourhood!"
  ],
  gameProgress: [
  ],
  draw: [
    "Ha! Not bad for a scrub, I guess",
    "Yea, if you can't beat them, draw them?? Nerd.",
    "I will make you regret that 1 you wasted from my score",
    "Good way to avoid some tears, but not for long!",
    "The hero couldn't attack his enemy so he simply avoided the fatal hit, ha!",
    "Come on, I know you can take a hit!",
    "Win or lose, there is no other way out!"
  ],
  gameOver: [
    "Get rekt! Play Again?",
    "HAHAHA! You should have never installed me!",
    "Undefeatable is my middle name",
    "I love the smell of loser in tears",
    "I feel humiliated for you to be honest",
    "I am glad you're the tryhard type",
    "Maybe you should join me in the dark side!",
    "Hey, do you need a tissue, your tears are making a lake in my house..."
  ],
  cheated: [
    "You cheater! This has been reported to the authorities!"
  ]
}