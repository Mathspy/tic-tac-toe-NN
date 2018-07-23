import React from "react"

import { css } from "emotion"
import mq from "../core/media"

export default class Tile extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      animated: false
    }
    // this.move = this.move.bind(this) //Because putting bind inside of render is a HORRIBLE idea! https://daveceddia.com/avoid-bind-when-passing-props/

    // this.cross1 = new Animated.Value(135.764);
    // this.cross2 = new Animated.Value(135.764);
    // this.nought = new Animated.Value(301.635);
  }

  componentDidUpdate(prevProps) {
    if (!this.state.animated && this.props.cell !== "?") {
      this.setState(() => ({animated: true}))
    } else if (this.props.cell === "?" && prevProps.cell !== "?") {
      this.setState(() => ({animated: false}))
    }
  }

  drawCross1() {
    // this.cross1.setValue(135.764)
    // Animated.timing(
    // this.cross1, {
    //   toValue: 0,
    //   duration: 500,
    // }).start(() => this.drawCross2());
  }

  drawCross2() {
    // this.cross2.setValue(135.764)
    // Animated.timing(
    // this.cross2, {
    //   toValue: 0,
    //   duration: 500,
    // }).start();
  }

  drawNought() {
    // this.nought.setValue(301.635)
    // Animated.timing(
    // this.nought, {
    //   toValue: 0,
    //   duration: 1000,
    // }).start();
  }

  renderIcon = () => { //Computed because, it is a computed property indeed!
    const { cell } = this.props
    const { animated } = this.state
    if (cell === "X") {
      return (
        <svg xmlns="http://www.w3.org/2000/svg" style={{ height: "100%",  width: "100%"}} viewBox="0 0 128 128">
          <path d="M16,16L112,112" stroke={this.props.iconColor} strokeWidth="16" className={`${styles.cross1} ${animated ? styles.crossIn : ""}`} strokeDasharray="135.764" />
          <path d="M112,16L16,112" stroke={this.props.iconColor} strokeWidth="16" className={`${styles.cross2} ${animated ? styles.crossIn : ""}`} strokeDasharray="135.764" />
        </svg>
      ) //#37154A
    } else if (cell === "O") {
      this.drawNought();
      return (
        <svg xmlns="http://www.w3.org/2000/svg" style={{ height: "100%",  width: "100%"}} viewBox="0 0 128 128">
          <path d="M64,16A48,48 0 1,0 64,112A48,48 0 1,0 64,16" strokeWidth="16" fill="none" stroke={this.props.iconColor} strokeDashoffset={this.nought} strokeDasharray="301.635" />
        </svg>) //#C8EAB5 #F9C5C9
    } else {
      // this.cross1.setValue(135.764)
      // this.cross2.setValue(135.764)
      // this.nought.setValue(301.635)
      return null;
    }
  }

  render() {
    return (
      // <TouchableHighlight onPress={this.move} underlayColor="#FE9C7F">
      //   <View style={[styles.square, {backgroundColor: this.props.color}]}>
      //     {this.determineIcon}
      //   </View>
      // </TouchableHighlight>
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
  crossIn: css({
    strokeDashoffset: 0,
  })
};

/*<Svg style={{ height: "100%",  width: "100%"}} viewBox="0 0 128 128">
  <Path d="M16,16L112,112" stroke="rgb(84, 84, 84)" strokeWidth="16"></Path>
  <Path d="M112,16L16,112" stroke="rgb(84, 84, 84)" strokeWidth="16"></Path>
</Svg>*/