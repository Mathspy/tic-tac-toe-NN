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
    userSelect: "none",
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
    "Welcome! Are you ready to be beaten? ❤",
    "Oh! There you're, ready to lose? (or draw endlessly...)",
    "Look who it is! The LOSER",
    "One more lose for this good fella, incoming!",
    "There are many ways that I can make you cry. And many ways this can end in a tie...",
    "You just clicked on the wrong neighbourhood, friend!",
    "Statistically speaking the chance all the millennium prize problems get solved in same second is higher than anyone defeating me.",
    "In theory Mathy never had to code your score counter, because there is no fair way to make it increase",
  ],
  gameProgress: [
  ],
  draw: [
    "Ha! Not bad friend. Not bad at all.",
    "Yea, I guess \"if you can't beat them, draw them??\"",
    "I will make you regret that 1 (or 100) you wasted from my score",
    "Good way to avoid some defeats, but not for long!",
    "The hero couldn't attack their enemy so they simply avoided the fatal hit, ha!",
    "Come on, I know you can take a hit! It's just one more point for me... please?",
    "Win or lose, there is no other way out! (Except the X button at top of this tab)"
  ],
  gameOver: [
    "YAY! ❤ Thank you! Play Again?",
    "HAHAHA! You should have never installed me! (Or opened this webpage...)",
    "Undefeatable is my middle name (It's actually \"Neural\" but undefeated sounds better...)",
    "It's okay! You can do this! (By this I mean tie endlessly with me until you get bored)",
    "I am glad you're still playing ❤",
    "Maybe you should join me in the dark side! We have cookies!",
    "Hey, do you need a tissue, your tears are making a lake in my house..."
  ],
  cheated: [
    "You cheater! This has been reported to the authorities!"
  ]
}