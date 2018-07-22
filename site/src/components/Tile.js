import React from "react"

import { css } from "emotion"

export default class Tile extends React.Component {
  constructor(props) {
    super(props)

    // this.move = this.move.bind(this) //Because putting bind inside of render is a HORRIBLE idea! https://daveceddia.com/avoid-bind-when-passing-props/

    // this.cross1 = new Animated.Value(135.764);
    // this.cross2 = new Animated.Value(135.764);
    // this.nought = new Animated.Value(301.635);
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
    if (cell === "X") {
      this.drawCross1();
      return (
        <svg xmlns="http://www.w3.org/2000/svg" style={{ height: "100%",  width: "100%"}} viewBox="0 0 128 128">
          <path d="M16,16L112,112" stroke={this.props.iconColor} strokeWidth="16" strokeDashoffset={this.cross1} strokeDasharray="135.764" />
          <path d="M112,16L16,112" stroke={this.props.iconColor} strokeWidth="16" strokeDashoffset={this.cross2} strokeDasharray="135.764" />
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
    width: 150,
    height: 150,
    display: "inline-block"
  }),
};

/*<Svg style={{ height: "100%",  width: "100%"}} viewBox="0 0 128 128">
  <Path d="M16,16L112,112" stroke="rgb(84, 84, 84)" strokeWidth="16"></Path>
  <Path d="M112,16L16,112" stroke="rgb(84, 84, 84)" strokeWidth="16"></Path>
</Svg>*/