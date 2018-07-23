import React from "react"

export default class ScoreBoard extends React.Component {
//   constructor(props) {
//     super(props);
//
//     // this.changeScore = new Animated.Value(1)
//
//     // const fadeAround = reaction(
//     //   () => Store.score.me,
//     //   useless => {
//     //     Animated.timing(
//     //     this.changeScore, {
//     //       toValue: 0,
//     //       duration: 300,
//     //       easing: Easing.elastic(0)
//     //     }).start(() => {
//     //       Animated.timing(
//     //       this.changeScore, {
//     //         toValue: 1,
//     //         duration: 300,
//     //         easing: Easing.elastic(0)
//     //       }).start()
//     //     })
//     //   }
//     // )
//   }

  renderLoading() {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="340.274px" height="340.274px" viewBox="0 0 340.274 340.274" style="enable-background:new 0 0 340.274 340.274;">
      {/* <Svg style={{ height: "70%",  width: "70%" }} viewBox="0 0 340.274 340.274"> */}
        <path fill="#C86B98" d="M293.629,127.806l-5.795-13.739c19.846-44.856,18.53-46.189,14.676-50.08l-25.353-24.77l-2.516-2.12h-2.937
            c-1.549,0-6.173,0-44.712,17.48l-14.184-5.719c-18.332-45.444-20.212-45.444-25.58-45.444h-35.765
            c-5.362,0-7.446-0.006-24.448,45.606l-14.123,5.734C86.848,43.757,71.574,38.19,67.452,38.19l-3.381,0.105L36.801,65.032
            c-4.138,3.891-5.582,5.263,15.402,49.425l-5.774,13.691C0,146.097,0,147.838,0,153.33v35.068c0,5.501,0,7.44,46.585,24.127
            l5.773,13.667c-19.843,44.832-18.51,46.178-14.655,50.032l25.353,24.8l2.522,2.168h2.951c1.525,0,6.092,0,44.685-17.516
            l14.159,5.758c18.335,45.438,20.218,45.427,25.598,45.427h35.771c5.47,0,7.41,0,24.463-45.589l14.195-5.74
            c26.014,11,41.253,16.585,45.349,16.585l3.404-0.096l27.479-26.901c3.909-3.945,5.278-5.309-15.589-49.288l5.734-13.702
            c46.496-17.967,46.496-19.853,46.496-25.221v-35.029C340.268,146.361,340.268,144.434,293.629,127.806z M170.128,228.474
            c-32.798,0-59.504-26.187-59.504-58.364c0-32.153,26.707-58.315,59.504-58.315c32.78,0,59.43,26.168,59.43,58.315
            C229.552,202.287,202.902,228.474,170.128,228.474z"/>
      </svg>
    )
  }

  render() {
    return (
      <div style={styles.numerical}>
        <div style={[styles.single, styles.first]}>
          {/* <AnimatedText style={[styles.texty, {opacity: this.changeScore}]}>{Store.score.me}</AnimatedText> */}
          <p style={styles.texty}>5</p>
        </div>
        <div style={[styles.single, styles.second]}>
          {this.loading}
        </div>
        <div style={[styles.single, styles.third]}>
          {/* <p style={styles.texty}>{Store.score.player}</p> */}
          <p style={styles.texty}>0</p>
        </div>
      </div>
    )
  }
}



const styles = {
  numerical: {
    flex: 0.7,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  single: {
    width: "33.33%",
    flexDirection: "row",
    padding: 20,
    paddingTop: 10,
    //justifyContent: "center"
  },
  first: {
    justifyContent: "flex-start",
  },
  second: {
    justifyContent: "center",
    // backgroundColor: "orange"
  },
  third: {
    justifyContent: "flex-end"
  },
  texty: {
    fontSize: 40,
    color: "#FF9F70"
  }
};