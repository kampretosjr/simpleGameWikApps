import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

export default class CupertinoButtonInfo2 extends Component {
  render() {
    return (
      <TouchableOpacity onPressIn={this.props.sound} style={[styles.root, this.props.style]}>
        <Text style={styles.caption}>ayy</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "rgba(64,255,0,1)",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingRight: 16,
    paddingLeft: 16,
    borderRadius: 100
  },
  caption: {
    color: "rgba(7,7,7,1)",
    fontSize: 25,
    fontFamily: "roboto-900",
    fontWeight: "500"
  }
});
